import type { Metadata } from "next";
import Generator from "@/components/illustration-generator/Generator";

export const metadata: Metadata = {
  title: "Illustration Generator",
  description: "Generate clean, on-brand SVG illustrations for the site.",
};

export default function IllustrationGeneratorPage() {
  return <Generator />;
}
