import { pt_BR } from "@/locales/pt_BR/";

declare module "i18next" {
  interface CustomTypeOptions {
    defaultNS: "pt_BR";
    resources: {
      pt_BR: typeof pt_BR.translation;
    };
  }
}
