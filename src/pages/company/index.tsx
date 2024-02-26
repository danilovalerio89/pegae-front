import { Content } from "@/components/content";
import { Introduction } from "@/pages/company/Introduction";
import { Campaign } from "@/pages/company/Campaign";
import { AssetDistribution } from "@/pages/company/AssetDistribution";
import { FooterDefault } from "@/layout/ui/FooterDefault";
import { FAQ } from "@/pages/company/FAQ";
import { AudienceSelector } from "@/pages/company/AudienceSelector";
import { HowItWork } from "@/pages/company/HowItWork";
import { PossibilitiesComp } from "@/pages/company/Possibilities";

export function Component() {
  return (
    <Content.Root>
      <Introduction />
      <Campaign />
      <PossibilitiesComp />
      <HowItWork />
      <AudienceSelector />
      <FAQ />
      <AssetDistribution />
      <FooterDefault />
    </Content.Root>
  );
}
