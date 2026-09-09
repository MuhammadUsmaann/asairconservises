import type { Metadata } from "next";
import AboutPage from "@/components/about/AboutPage";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about AS Aircon Service — certified HVAC technicians providing quality air conditioning repair, installation, and maintenance in Sungai Petani, Kedah.",
  alternates: {
    canonical: "/about-us",
  },
  openGraph: {
    title: `About Us | ${siteConfig.name}`,
    description:
      "Meet the professional team behind reliable heating and air conditioning services in Sungai Petani.",
    url: "/about-us",
    images: [
      {
        url: "/images/about-tech.jpg",
        width: 1600,
        height: 1067,
        alt: "Technicians servicing outdoor air conditioning units",
      },
    ],
  },
};

export default function Page() {
  return <AboutPage />;
}
