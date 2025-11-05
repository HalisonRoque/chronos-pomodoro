/*import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { IntlProvider } from 'react-intl';
import { App } from './App.tsx';
import AppLocale from './shared/localization/index.tsx';

// 🔧 define o idioma atual (pode ser dinâmico no futuro)
const currentAppLocale = AppLocale['en']; // ou 'en'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <IntlProvider
      locale={currentAppLocale.locale}
      messages={currentAppLocale.messages}
    >
      <App />
    </IntlProvider>
  </StrictMode>
);*/

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App.tsx';
import { LanguageProvider } from './shared/localization/LanguageProvider.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LanguageProvider>
      <App />
    </LanguageProvider>
  </StrictMode>
);

