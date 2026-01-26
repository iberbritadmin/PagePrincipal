import { useLocation, useNavigate } from "react-router-dom";
import i18n from "../i18n";

const LanguageSwitcher = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const currentLang = location.pathname.startsWith("/en") ? "en" : "es";

  const handleChange = (e) => {
    const selectedLang = e.target.value;

    if (selectedLang === currentLang) return;

    let newPath;

    if (selectedLang === "en") {
      newPath = "/en" + location.pathname;
      if (location.pathname === "/") newPath = "/en/";
    } else {
      newPath = location.pathname.replace(/^\/en/, "") || "/";
    }

    i18n.changeLanguage(selectedLang);
    navigate(newPath);
  };

  return (
    <select
      onChange={handleChange}
      value={currentLang}
      className="border border-gray-300 rounded-md px-2 py-1 text-gray-900 focus:outline-none focus:ring-2 focus:ring-red-800"
    >
      <option value="es">ES</option>
      <option value="en">EN</option>
    </select>
  );
};

export default LanguageSwitcher;
