import { useTranslation } from "react-i18next";
import iosLogo from "../images/ios-logo.png"; // Remplace par le chemin réel de ton logo iOS
import playStoreLogo from "../images/playstore-logo.png"; // idem pour Play Store

export default function Home() {
  const { t } = useTranslation();

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-[#ffffff] px-6 text-center">
      {/* Hero Section */}
      <h1 className="text-5xl md:text-6xl font-bold text-[#272727] mb-8">
        {t("home_title")}
      </h1>

      <h2 className="text-2xl md:text-3xl font-medium text-[#555555] mb-16">
        {t("home_subtitle")}
      </h2>

      <p className="max-w-xl text-[#666666] mb-16">{t("home_description")}</p>

      {/* Download Buttons */}
      <div className="flex flex-col sm:flex-row gap-4">
        {/* iOS Button */}
        <button
          className="flex items-center gap-2 bg-[#272727] text-white px-6 py-3 rounded-lg hover:bg-gray-900 transition-colors duration-300"
          onClick={() => {}}
        >
          <img src={iosLogo} alt="iOS Logo" className="w-6 h-6" />{" "}
          {t("download_ios")}
        </button>

        {/* Play Store Button */}
        <button className="flex items-center gap-2 bg-[#272727] text-white px-6 py-3 rounded-lg hover:bg-gray-900 transition-colors duration-300">
          <img src={playStoreLogo} alt="Play Store" className="w-6 h-6" />{" "}
          {t("download_play_store")}
        </button>
      </div>
    </main>
  );
}
