import i18next from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      app_name: "SEVICES",
    },
  },
  ar: {
    translation: {
      app_name: "العربیة",
    },
  },
};

i18next.use(initReactI18next).init({
  resources,
  lng: "ar",
  interpolation: {
    escapeValue: false,
  },
});
export default i18next;
