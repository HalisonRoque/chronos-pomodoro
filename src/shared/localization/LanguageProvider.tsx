import React, { createContext, useContext, useState } from "react";
import { IntlProvider } from "react-intl";
import AppLocale from "./index";

type LanguageContextType = {
  locale: string;
  toggleLocale: () => void;
};

const LanguageContext = createContext<LanguageContextType>({
  locale: "pt",
  toggleLocale: () => { },
});

// eslint-disable-next-line react-refresh/only-export-components
export const useLanguage = () => useContext(LanguageContext);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [locale, setLocale] = useState(localStorage.getItem("locale") || "pt");

  const toggleLocale = () => {
    const newLocale = locale === "pt" ? "en" : "pt";
    setLocale(newLocale);
    localStorage.setItem("locale", newLocale);
  };

  const currentAppLocale = AppLocale[locale];

  return (
    <LanguageContext.Provider value={{ locale, toggleLocale }}>
      <IntlProvider locale={currentAppLocale.locale} messages={currentAppLocale.messages}>
        {children}
      </IntlProvider>
    </LanguageContext.Provider>
  );
};
