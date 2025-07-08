import type { Metadata } from "next";
import Services from "./page-content";

type Props = {
  params: { language: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {

  return {
    title: "Services",
  };
}

export default Services;
