import enMessages from "../locales/en_US.json";
import { enUS } from "date-fns/locale";

const EnLang = {
  messages: {
    ...enMessages,
  },
  fnsLocale: enUS,
  locale: "en-US",
};

export default EnLang;
