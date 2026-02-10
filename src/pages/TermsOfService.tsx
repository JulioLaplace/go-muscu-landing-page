import { useTranslation } from "react-i18next";

export default function TermsOfService() {
  const { t } = useTranslation();

  const steps = [
    {
      title: t("terms_acceptance_title"),
      desc: t("terms_acceptance_desc"),
    },
    {
      title: t("terms_health_disclamer_title"),
      desc: t("terms_health_disclamer_desc"),
    },
    {
      title: t("terms_user_accounts_title"),
      desc: t("terms_user_desc"),
    },
    {
      title: t("terms_subscriptions_payments_title"),
      desc: t("terms_subscriptions_payments_desc"),
    },
    {
      title: t("terms_intelectual_property_title"),
      desc: t("terms_intelectual_property_desc"),
    },
    {
      title: t("terms_termination_title"),
      desc: t("terms_termination_desc"),
    },
    {
      title: t("terms_governing_law_title"),
      desc: t("terms_governing_law_desc"),
    },
  ];

  return (
    <main className="pt-28 px-6 max-w-4xl mx-auto pb-20">
      <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight mb-16">
        {t("terms_title")}
      </h1>

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
