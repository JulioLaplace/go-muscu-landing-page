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

  useEffect(() => {
    if (!navRef.current) return;

    const activeLink = navRef.current.querySelector<HTMLElement>(
      `[data-path="${location.pathname}"]`,
    );

    if (activeLink) {
      setIndicator({
        left: activeLink.offsetLeft,
        width: activeLink.offsetWidth,
      });
    }
  }, [location, i18n.language]);

  const linkBase =
    "relative px-5 py-2 text-sm font-medium transition-colors duration-300";

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#f5f5f5]/90 backdrop-blur-md border-b border-black/5">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <NavLink
          to="/"
          data-path="/"
          className="text-lg font-semibold text-[#272727]"
        >
          <img
            src={Logo}
            alt="Logo of the application"
            style={{ height: "60px" }}
          />
        </NavLink>

        {/* Navigation */}
        <div className="relative flex gap-10" ref={navRef}>
          {/* Sliding background */}
          <span
            className="absolute top-0 h-full rounded-md bg-[#272727] transition-all duration-300 ease-out z-0"
            style={{
              left: indicator.left,
              width: indicator.width,
            }}
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
      </div>
    </nav>
  );
}
