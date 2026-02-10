import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
  en: {
    translation: {
      nav_home: "Home",
      nav_privacy: "Privacy Policy",
      nav_terms: "Terms of Service",
      home_title: "Welcome to MyGymLog MyGymBro",
      home_subtitle: "Lift. Rest. Log. Repeat.",
      home_description:
        "Stay on top of your fitness journey with our app! Track every workout, log sets, reps, and weights, monitor your body measurements, and keep a record of your personal bests. Whether you’re aiming for strength, size, or overall fitness, our app helps you progress smarter and stay motivated.",
      download_ios: "Download on iOS",
      download_play_store: "Download on Play Store",
      privacy_title: "Privacy Policy",
      privacy_desc:
        "Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your information when you use our fitness tracking application.",
      privacy_info_we_collect_title: "Information We Collect",
      privacy_info_we_collect_desc: `We collect data to improve your fitness journey:
      <ul class="list-disc list-inside mt-2 space-y-1">
        <li><strong>Personal information:</strong> Name, email, age and gender.</li>
        <li><strong>Activity Logs:</strong> Your workouts, exercises and their history, personal records and measurements.</li>
      </ul>`,
      privacy_how_use_data_title: "How We Use Your Data",
      privacy_how_use_data_desc:
        "Your data is strictly used to <strong>display your progress</strong> within the app. We do not use your personal information for any other purpose than providing you with your own fitness history.",
      privacy_advertising_title: "Advertising",
      privacy_advertising_desc:
        "We may show ads to keep the app free. These ads do not have access to your personal fitness data.",
      privacy_subscription_title: "Subscriptions",
      privacy_subscription_desc:
        "All transactions are handled securely via <strong>Apple App Store</strong> or <strong>Google Play</strong>. We never see or store your banking information.",
      privacy_data_sharing_title: "Data Sharing",
      privacy_data_sharing_desc:
        "We <strong>do not sell or share</strong> your data with third parties.",
      privacy_data_retention_title: "Data Retention",
      privacy_data_retention_desc:
        "We store your data as long as you use the app. If you wish to <strong>permanently delete</strong> all your information, please contact us at the email address below.",
      privacy_your_rights_title: "Your Rights",
      privacy_your_rights_desc:
        "You have the right to access and correct your data. Since we prioritize privacy, you can manage most of this directly in your profile settings.",
      privacy_contact_title: "Contact",
      privacy_contact_desc:
        "Questions or data deletion requests? Email us at: <span class='text-indigo-600 font-medium'>support@votreapp.com</span>",
      effective_date: "<strong>Effective Date:</strong> Febuary 10, 2026",
      terms_title: "Terms of Service",
      terms_acceptance_title: "Acceptance of Terms",
      terms_acceptance_desc:
        "By downloading or using the app, you agree to these terms. If you do not agree, please do not use the services.",
      terms_health_disclamer_title: "Health & Medical Disclaimer",
      terms_health_disclamer_desc:
        "<strong>Important:</strong> Our app provides fitness tracking, not medical advice. Always <strong>consult a doctor</strong> before starting a new exercise program. We are not responsible for any injuries or health problems resulting from the use of the app.",
      terms_user_accounts_title: "User Accounts",
      terms_user_desc:
        "You are responsible for maintaining the confidentiality of your account. You must be at least 13 years old (or the legal age in your country) to use this service.",
      terms_subscriptions_payments_title: "Subscriptions & Payments",
      terms_subscriptions_payments_desc:
        "Premium features are billed through the App Store or Google Play. Cancellations must be managed through your store account settings. Refunds are subject to the stores' respective policies.",
      terms_intelectual_property_title: "Intellectual Property",
      terms_intelectual_property_desc:
        "The app, including its design, code, and original content, remains our exclusive property. You may not copy or reverse-engineer the application.",
      terms_termination_title: "Termination",
      terms_termination_desc:
        "We reserve the right to suspend or terminate your access to the app if you violate these terms.",
      terms_governing_law_title: "Governing Law",
      terms_governing_law_desc:
        "These terms are governed by the laws of <strong>France</strong>, without regard to its conflict of law principles.",
    },
  },
  fr: {
    translation: {
      nav_home: "Accueil",
      nav_privacy: "Politique de confidentialité",
      nav_terms: "Conditions d’utilisation",
      home_title: "Bienvenue sur MyGymLog MyGymBro",
      home_subtitle: "Soulève. Repos. Enregistre. Répète.",
      home_description:
        "Reste au top de ton parcours fitness grâce à notre application ! Suis chaque entraînement, enregistre tes séries, répétitions et charges, surveille tes mensurations et garde une trace de tes records personnels. Que tu vises la force, la prise de masse ou une forme physique globale, notre app t’aide à progresser plus intelligemment et à rester motivé.",
      download_ios: "Télécharger sur iOS",
      download_play_store: "Télécharger sur le Play Store",
      privacy_title: "Politique de confidentialité",
      privacy_desc:
        "Ta vie privée est importante pour nous. Cette politique de confidentialité explique comment nous collectons, utilisons et protégeons tes informations lorsque tu utilises notre application de suivi fitness.",
      privacy_info_we_collect_title: "Informations que nous collectons",
      privacy_info_we_collect_desc: `Nous collectons des données pour améliorer ton parcours fitness :
    <ul class="list-disc list-inside mt-2 space-y-1">
      <li><strong>Informations personnelles :</strong> Nom, email, âge et genre</li>
      <li><strong>Journal d’activité :</strong> Tes entraînements, exercices et leur historique, tes records personnels et tes mensurations.</li>
    </ul>`,
      privacy_how_use_data_title: "Comment nous utilisons tes données",
      privacy_how_use_data_desc:
        "Tes données sont strictement utilisées pour <strong>afficher ta progression</strong> au sein de l’application. Nous n’utilisons jamais tes informations personnelles à d’autres fins que la fourniture de ton historique fitness.",
      privacy_advertising_title: "Publicité",
      privacy_advertising_desc:
        "Nous pouvons afficher des publicités afin de maintenir l’application gratuite. Ces publicités n’ont aucun accès à tes données fitness personnelles.",
      privacy_subscription_title: "Abonnements",
      privacy_subscription_desc:
        "Toutes les transactions sont traitées de manière sécurisée via l’<strong>Apple App Store</strong> ou <strong>Google Play</strong>. Nous n’avons jamais accès à tes informations bancaires et ne les stockons pas.",
      privacy_data_sharing_title: "Partage des données",
      privacy_data_sharing_desc:
        "Nous <strong>ne vendons ni ne partageons</strong> tes données avec des tiers.",
      privacy_data_retention_title: "Conservation des données",
      privacy_data_retention_desc:
        "Nous conservons tes données tant que tu utilises l’application. Si tu souhaites <strong>supprimer définitivement</strong> toutes tes informations, merci de nous contacter à l’adresse e-mail ci-dessous.",
      privacy_your_rights_title: "Tes droits",
      privacy_your_rights_desc:
        "Tu as le droit d’accéder à tes données et de les corriger. Comme nous accordons une grande importance à la confidentialité, tu peux gérer la majorité de ces éléments directement depuis les paramètres de ton profil.",
      privacy_contact_title: "Contact",
      privacy_contact_desc:
        "Des questions ou une demande de suppression de données ? Écris-nous à : <span class='text-indigo-600 font-medium'>support@votreapp.com</span>",
      effective_date:
        "<strong>Date d’entrée en vigueur :</strong> 10 février 2026",
      terms_title: "Conditions d’utilisation",
      terms_acceptance_title: "Acceptation des conditions",
      terms_acceptance_desc:
        "En téléchargeant ou en utilisant l’application, tu acceptes ces conditions. Si tu n’es pas d’accord, merci de ne pas utiliser les services.",
      terms_health_disclamer_title: "Avertissement santé & médical",
      terms_health_disclamer_desc:
        "<strong>Important :</strong> Notre application fournit un suivi fitness, et non des conseils médicaux. Consulte toujours un <strong>médecin</strong> avant de commencer un nouveau programme d’entraînement. Nous ne sommes pas responsables des blessures ou problèmes de santé résultant de l’utilisation de l’application.",
      terms_user_accounts_title: "Comptes utilisateurs",
      terms_user_desc:
        "Tu es responsable de la confidentialité de ton compte. Tu dois avoir au moins 13 ans (ou l’âge légal dans ton pays) pour utiliser ce service.",
      terms_subscriptions_payments_title: "Abonnements & paiements",
      terms_subscriptions_payments_desc:
        "Les fonctionnalités premium sont facturées via l’App Store ou Google Play. Les annulations doivent être gérées depuis les paramètres de ton compte sur la boutique concernée. Les remboursements sont soumis aux politiques propres à chaque plateforme.",
      terms_intelectual_property_title: "Propriété intellectuelle",
      terms_intelectual_property_desc:
        "L’application, y compris son design, son code et son contenu original, reste notre propriété exclusive. Il est interdit de copier ou de procéder à une ingénierie inverse de l’application.",
      terms_termination_title: "Résiliation",
      terms_termination_desc:
        "Nous nous réservons le droit de suspendre ou de résilier ton accès à l’application en cas de violation de ces conditions.",
      terms_governing_law_title: "Droit applicable",
      terms_governing_law_desc:
        "Ces conditions sont régies par les lois de la <strong>France</strong>, sans tenir compte des règles relatives aux conflits de lois.",
    },
  },
};

i18n
  .use(LanguageDetector) // Détecte la langue du navigateur automatiquement
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en", // Langue par défaut si la détection échoue
    interpolation: { escapeValue: false },
  });

export default i18n;
