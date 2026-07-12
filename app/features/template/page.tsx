import type { Metadata } from "next";
import FeaturePage from "@/components/changes/feature/FeaturePage";
import config from "./config";

export const metadata: Metadata = {
  title: "Feature Page Template — AbleSpace",
};

export default function FeatureTemplatePage() {
  return <FeaturePage config={config} />;
}
