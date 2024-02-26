import { navigation } from "@/locales/pt_BR/navigation-header";
import { footer_info } from "@/locales/pt_BR/footer-info";
import { introduction as pt_BR_company_introduction } from "@/locales/pt_BR/company/introduction";
import { introduction as pt_BR_user_introduction } from "@/locales/pt_BR/user/introduction";
import { campaign as pt_BR_company_campaign } from "@/locales/pt_BR/company/campaign";
import { campaign as pt_BR_user_campaign } from "@/locales/pt_BR/user/campaign";
import { assetDistribution as pt_BR_company_assetDistribution } from "@/locales/pt_BR/company/asset-distribution";
import { assetDistribution as pt_BR_user_assetDistribution } from "@/locales/pt_BR/user/asset-distribution";
import { faq as pt_BR_company_faq } from "@/locales/pt_BR/company/faq";
import { faq as pt_BR_user_faq } from "@/locales/pt_BR/user/faq";
import { how_it_work as pt_BR_company_how_it_work } from "@/locales/pt_BR/company/how-it-work";
import { possibilities_of_use as pt_BR_company_possibilities_of_use } from "@/locales/pt_BR/company/possibilities-of-use";

import {
  card_agency,
  card_brand,
  card_developer,
  audience_selector as pt_BR_company_audience_selector,
} from "@/locales/pt_BR/company/audience-selector";

export const pt_BR = {
  translation: {
    ...navigation,
    footer_info,
    sections: {
      company: {
        introduction: pt_BR_company_introduction,
        campaign: pt_BR_company_campaign,
        how_it_work: pt_BR_company_how_it_work,
        assetDistribution: pt_BR_company_assetDistribution,
        faq: pt_BR_company_faq,
        audience_selector: {
          default: pt_BR_company_audience_selector,
          card_brand: card_brand,
          card_agency: card_agency,
          card_developer: card_developer,
        },
        possibilities: pt_BR_company_possibilities_of_use,
      },
      user: {
        introduction: pt_BR_user_introduction,
        campaign: pt_BR_user_campaign,
        assetDistribution: pt_BR_user_assetDistribution,
        faq: pt_BR_user_faq,
      },
    },
  },
};
