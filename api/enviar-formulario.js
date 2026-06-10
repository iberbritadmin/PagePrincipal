/* global process */
import nodemailer from "nodemailer";

const FUNNEL_ID = "67fcee299cbca47de80a9d68";

const allowedOrigins = [
  "http://localhost:5173",
  "https://iberbrit.com",
  "https://www.iberbrit.com"
];

function setCorsHeaders(req, res) {
  const origin = req.headers.origin;

  if (allowedOrigins.includes(origin)) {
    res.setHeader("Access-Control-Allow-Origin", origin);
  }

  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
}

function escapeHtml(value = "") {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export default async function handler(req, res) {
  setCorsHeaders(req, res);

  let step = "inicio";

  if (req.method === "OPTIONS") {
    return res.status(204).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({ message: "Método no permitido." });
  }

  try {
    step = "leyendo body";

    const { nombre, email, telefono, mensaje, recaptchaValue } = req.body || {};

    console.log("DEBUG BODY:", {
      hasNombre: Boolean(nombre),
      hasEmail: Boolean(email),
      hasTelefono: Boolean(telefono),
      hasMensaje: Boolean(mensaje),
      hasRecaptchaValue: Boolean(recaptchaValue)
    });

    console.log("DEBUG ENV:", {
      RECAPTCHA_SECRET: Boolean(process.env.RECAPTCHA_SECRET),
      HOLD_API_KEY: Boolean(process.env.HOLD_API_KEY),
      SMTP_HOST: Boolean(process.env.SMTP_HOST),
      SMTP_USER: Boolean(process.env.SMTP_USER),
      SMTP_PASS: Boolean(process.env.SMTP_PASS)
    });

    if (!nombre || !email || !recaptchaValue) {
      return res.status(400).json({
        message: "Faltan campos obligatorios."
      });
    }

    step = "verificando recaptcha";

    // 1. Verificar reCAPTCHA
    const recaptchaResponse = await fetch(
      "https://www.google.com/recaptcha/api/siteverify",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        body: new URLSearchParams({
          secret: process.env.RECAPTCHA_SECRET,
          response: recaptchaValue
        })
      }
    );

    const recaptchaData = await recaptchaResponse.json();

    if (!recaptchaData.success) {
      console.error("Fallo en verificación reCAPTCHA:", recaptchaData);

      return res.status(400).json({
        message: "Verificación reCAPTCHA fallida."
      });
    }

    step = "creando contacto en Holded";

    // 2. Crear contacto en Holded
    const createContactResponse = await fetch(
      "https://api.holded.com/api/invoicing/v1/contacts",
      {
        method: "POST",
        headers: {
          key: process.env.HOLD_API_KEY,
          "Content-Type": "application/json",
          accept: "application/json"
        },
        body: JSON.stringify({
          name: nombre,
          email,
          phone: telefono
        })
      }
    );

    if (!createContactResponse.ok) {
      const errorText = await createContactResponse.text();
      console.error("Error creando contacto en Holded:", errorText);

      return res.status(502).json({
        message: "No se pudo crear el contacto en Holded."
      });
    }

    const contacto = await createContactResponse.json();
    const contactoId = contacto.id;

    step = "creando nota en Holded";

    // 3. Crear nota asociada al contacto
    const noteResponse = await fetch(
      "https://api.holded.com/api/invoicing/v1/notes",
      {
        method: "POST",
        headers: {
          key: process.env.HOLD_API_KEY,
          "Content-Type": "application/json",
          accept: "application/json"
        },
        body: JSON.stringify({
          entity: "contacts",
          entityId: contactoId,
          note: mensaje || ""
        })
      }
    );

    if (!noteResponse.ok) {
      const errorText = await noteResponse.text();
      console.error("Error creando nota en Holded:", errorText);

      return res.status(502).json({
        message: "Contacto creado, pero no se pudo crear la nota en Holded."
      });
    }

    step = "creando lead en Holded";

    // 4. Crear lead en el funnel
    const leadResponse = await fetch(
      "https://api.holded.com/api/crm/v1/leads",
      {
        method: "POST",
        headers: {
          key: process.env.HOLD_API_KEY,
          "Content-Type": "application/json",
          accept: "application/json"
        },
        body: JSON.stringify({
          name: nombre,
          email,
          phone: telefono,
          funnelId: FUNNEL_ID,
          contactId: contactoId,
          description: mensaje || ""
        })
      }
    );

    if (!leadResponse.ok) {
      const errorText = await leadResponse.text();
      console.error("Error creando lead en Holded:", errorText);

      return res.status(502).json({
        message: "Contacto creado, pero no se pudo crear el lead en Holded."
      });
    }

    step = "enviando email";

    // 5. Enviar email
    const smtpPort = Number(process.env.SMTP_PORT || 465);
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: smtpPort,
      secure: smtpPort === 465,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
      }
    });

    await transporter.verify();

    await transporter.sendMail({
      from: `"Formulario Iberbrit" <${process.env.MAIL_FROM || process.env.SMTP_USER}>`,
      to: process.env.MAIL_TO || "info@iberbrit.com",
      subject: "Nuevo contacto desde formulario web",
      html: `
        <h2>Nuevo contacto recibido</h2>
        <p><strong>Nombre:</strong> ${escapeHtml(nombre)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Teléfono:</strong> ${escapeHtml(telefono)}</p>
        <p><strong>Mensaje:</strong> ${escapeHtml(mensaje)}</p>
      `
    });

    return res.status(200).json({
      message: "Formulario, contacto, nota, lead y correo enviados correctamente."
    });

  } catch (error) {
    console.error("Error procesando formulario:", {
      step,
      name: error?.name,
      message: error?.message,
      code: error?.code,
      command: error?.command,
      response: error?.response,
      responseCode: error?.responseCode,
      stack: error?.stack
    });

    return res.status(500).json({
      message: "Error al procesar el formulario.",
      step
    });
  }
}
