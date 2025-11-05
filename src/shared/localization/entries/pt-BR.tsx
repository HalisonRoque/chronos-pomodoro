import ptMessages from "../locales/pt_BR.json";
import { ptBR } from "date-fns/locale";

const PtLang = {
  messages: {
    ...ptMessages,
  },
  fnsLocale: ptBR,
  locale: "pt-BR",
};

export default PtLang;
