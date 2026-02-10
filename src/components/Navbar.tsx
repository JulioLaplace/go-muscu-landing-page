import { NavLink, useLocation } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import Logo from "../images/logo 2-removeBG.png";
import { useTranslation } from "react-i18next";
import LanguageSelector from "./LanguageSelector";
import i18n from "../i18n";

export default function Navbar() {
  const { t } = useTranslation();
  const location = useLocation();
  const navRef = useRef<HTMLDivElement | null>(null);
  const [indicator, setIndicator] = useState({ left: 0, width: 0 });
  const [isOpen, setIsOpen] = useState(false); // État pour le menu mobile

  useEffect(() => {
    if (!navRef.current) return;

    // On ne calcule l'indicateur que si on est sur desktop (visible)
    const activeLink = navRef.current.querySelector<HTMLElement>(
      `[data-path="${location.pathname}"]`,
    );

    if (activeLink) {
      setIndicator({
        left: activeLink.offsetLeft,
        width: activeLink.offsetWidth,
      });
    }

    // Fermer le menu mobile lors d'un changement de route
    setIsOpen(false);
  }, [location, i18n.language]);

  const linkBase =
    "relative px-5 py-2 text-sm font-medium transition-colors duration-300";
  const mobileLinkBase =
    "block px-4 py-4 text-lg font-medium border-b border-gray-100";

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#f5f5f5]/90 backdrop-blur-md border-b border-black/5">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <NavLink to="/" className="z-50 text-lg font-semibold text-[#272727]">
          <img src={Logo} alt="Logo" style={{ height: "50px" }} />
        </NavLink>

        {/* --- DESKTOP NAVIGATION (Inchangée) --- */}
        <div
          className="relative hidden md:flex items-center gap-6"
          ref={navRef}
        >
          <span
            className="absolute top-0 h-full rounded-md bg-[#272727] transition-all duration-300 ease-out z-0"
            style={{ left: indicator.left, width: indicator.width }}
          />
          <NavLink
            to="/"
            data-path="/"
            className={({ isActive }) =>
              `${linkBase} z-10 ${isActive ? "text-white" : "text-[#272727]"}`
            }
          >
            {t("nav_home")}
          </NavLink>
          <NavLink
            to="/privacy-policy"
            data-path="/privacy-policy"
            className={({ isActive }) =>
              `${linkBase} z-10 ${isActive ? "text-white" : "text-[#272727]"}`
            }
          >
            {t("nav_privacy")}
          </NavLink>
          <NavLink
            to="/terms-of-service"
            data-path="/terms-of-service"
            className={({ isActive }) =>
              `${linkBase} z-10 ${isActive ? "text-white" : "text-[#272727]"}`
            }
          >
            {t("nav_terms")}
          </NavLink>
          <LanguageSelector />
        </div>

        {/* --- BOUTON BURGER --- */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden z-50 p-2 text-[#272727]"
        >
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          )}
        </button>

        {/* --- MOBILE MENU OVERLAY --- */}
        <div
          className={`
          fixed inset-0 bg-[#f5f5f5]/95 backdrop-blur-md flex flex-col pt-24 px-6 gap-2 transition-transform duration-300 ease-in-out md:hidden h-screen
          ${isOpen ? "translate-x-0" : "translate-x-full"}
          `}
        >
          <NavLink
            to="/"
            className={({ isActive }) =>
              `${mobileLinkBase} ${isActive ? "bg-[#272727] text-white" : "text-[#272727] hover:bg-black/5"}`
            }
          >
            {t("nav_home")}
          </NavLink>

          <NavLink
            to="/privacy-policy"
            className={({ isActive }) =>
              `${mobileLinkBase} ${isActive ? "bg-[#272727] text-white" : "text-[#272727] hover:bg-black/5"}`
            }
          >
            {t("nav_privacy")}
          </NavLink>

          <NavLink
            to="/terms-of-service"
            className={({ isActive }) =>
              `${mobileLinkBase} ${isActive ? "bg-[#272727] text-white" : "text-[#272727] hover:bg-black/5"}`
            }
          >
            {t("nav_terms")}
          </NavLink>

          <div className=" flex justify-center border-t border-black/5 pt-6">
            <LanguageSelector />
          </div>
        </div>
      </div>
    </nav>
  );
}
