import type { Metadata } from "next";
import FeaturePage from "@/components/changes/feature/FeaturePage";
import config from "./config";

export const metadata: Metadata = {
  title: "Collaboration — AbleSpace",
  description: config.hero.subtitle,
};

export default function CollaborationPage() {
  return <FeaturePage config={config} />;
}
