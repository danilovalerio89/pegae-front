import { AssetDistribution as AssetDistri } from "@/components/asset-distribution";
import { Button } from "@/components/ui/button";
import { t } from "i18next";
import { Trans } from "react-i18next";

export function AssetDistribution() {
  return (
    <AssetDistri.Root className="snap-start">
      <AssetDistri.Content>
        <AssetDistri.Title>
          {t("sections.user.assetDistribution.title")}
        </AssetDistri.Title>
        <AssetDistri.Description>
          <Trans i18nKey={"sections.user.assetDistribution.description"} />
        </AssetDistri.Description>
        <Button variant={"purple"}>
          {t("sections.user.assetDistribution.button")}
        </Button>
      </AssetDistri.Content>
    </AssetDistri.Root>
  );
}
