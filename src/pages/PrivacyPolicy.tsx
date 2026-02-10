import { useTranslation } from "react-i18next";

export default function PrivacyPolicy() {
  const { t } = useTranslation();

  const steps = [
    {
      title: t("privacy_info_we_collect_title"),
      desc: t("privacy_info_we_collect_desc"),
    },
    {
      title: t("privacy_how_use_data_title"),
      desc: t("privacy_how_use_data_desc"),
    },
    {
      title: t("privacy_advertising_title"),
      desc: t("privacy_advertising_desc"),
    },
    {
      title: t("privacy_subscription_title"),
      desc: t("privacy_subscription_desc"),
    },
    {
      title: t("privacy_data_sharing_title"),
      desc: t("privacy_data_sharing_desc"),
    },
    {
      title: t("privacy_data_retention_title"),
      desc: t("privacy_data_retention_desc"),
    },
    {
      title: t("privacy_your_rights_title"),
      desc: t("privacy_your_rights_desc"),
    },
    {
      title: t("privacy_contact_title"),
      desc: t("privacy_contact_desc"),
    },
  ];

  return (
    <main className="pt-28 px-6 max-w-4xl mx-auto pb-20">
      <h1 className="text-4xl font-extrabold mb-6 text-slate-900 tracking-tight">
        {t("privacy_title")}
      </h1>

      <p className="text-gray-600 text-lg leading-relaxed mb-12">
        {t("privacy_desc")}
      </p>

      <ol className="relative border-l-2 border-indigo-100 ml-3">
        {steps.map((step, index) => (
          <li key={index} className="mb-12 ml-8">
            {/* Cercle avec le numéro */}
            <span className="absolute flex items-center justify-center w-8 h-8 bg-[#e4c077] rounded-full -left-[17px] ring-4 ring-white text-white text-sm font-bold shadow-sm">
              {index + 1}
            </span>

            <h2 className="text-xl font-bold text-slate-800 leading-tight">
              {step.title}
            </h2>

            {/* Rendu HTML depuis i18n */}
            <div
              className="text-[15px] text-slate-600 mt-3 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: step.desc }}
            />
          </li>
        ))}
      </ol>

      <p className="text-gray-600 text-lg leading-relaxed mb-12">
        <span dangerouslySetInnerHTML={{ __html: t("effective_date") }} />
      </p>
    </main>
  );
}
