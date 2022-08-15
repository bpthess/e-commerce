import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import resources from "./locales";

i18n
  .use(initReactI18next)
  .init({
    detection: {
      order: ["querystring", "localStorage"],
      lookupQuerystring: "lang",
      lookupLocalStorage: "lang",
      caches: ["localstorage"],
    },
    resources,
    lng: "ko",
    fallbackLng: "ko",
    debug: false,
  })
  .then(() =>
    i18n.on("languageChanged", (lng) => {
      lng();
    })
  );

export default i18n;
