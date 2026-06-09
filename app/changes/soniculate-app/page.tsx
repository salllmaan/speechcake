import type { Metadata } from "next";
import FeaturePage from "@/components/changes/feature/FeaturePage";
import config from "./config";

export const metadata: Metadata = {
  title: "Soniculate — AbleSpace",
  description: config.hero.subtitle,
};

export default function SoniculateAppPage() {
  return <FeaturePage config={config} />;
}
