import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { pt_BR } from "@/locales/pt_BR/";

i18n.use(initReactI18next).init({
  fallbackLng: "pt_BR",
  debug: false,
  resources: {
    pt_BR: {
      ...pt_BR,
    },
  },
});

export default i18n;
