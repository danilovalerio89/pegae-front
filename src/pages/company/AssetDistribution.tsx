import { AssetDistribution as AssetDistri } from "@/components/asset-distribution";
import { Button } from "@/components/ui/button";
import { goToGoogleForm } from "@/utils/go-to-google-form";
import { t } from "i18next";
import { Trans } from "react-i18next";

export function AssetDistribution() {
  return (
    <AssetDistri.Root className="snap-start">
      <AssetDistri.Content>
        <AssetDistri.Title>
          {t("sections.company.assetDistribution.title")}
        </AssetDistri.Title>
        <AssetDistri.Description>
          <Trans i18nKey={"sections.company.assetDistribution.description"} />
        </AssetDistri.Description>
        <Button variant={"purple"} onClick={() => goToGoogleForm()}>
          {t("sections.company.assetDistribution.button")}
        </Button>
      </AssetDistri.Content>
    </AssetDistri.Root>
  );
}
