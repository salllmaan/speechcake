import type { Metadata } from "next";
import SoniculatePage from "@/components/changes/soniculate/SoniculatePage";

export const metadata: Metadata = {
  title: "Soniculate — Every sound, a game worth playing",
  description:
    "Soniculate turns articulation practice into a delightful game — beautiful 3D worlds for every target word, built with SLPs and loved by kids.",
};

export default function Page() {
  return <SoniculatePage />;
}
