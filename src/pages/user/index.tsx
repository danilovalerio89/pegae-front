import { Content } from "@/components/content";
import { FooterDefault } from "@/layout/ui/FooterDefault";
import { Introduction } from "@/pages/user/Introduction";
import { Campaign } from "@/pages/user/Campaign";
import { AssetDistribution } from "@/pages/user/AssetDistribution";
import { FAQ } from "@/pages/user/FAQ";

export function Component() {
  return (
    <Content.Root>
      <Introduction />
      <Campaign />
      <AssetDistribution />
      <FAQ />
      <FooterDefault />
    </Content.Root>
  );
}
