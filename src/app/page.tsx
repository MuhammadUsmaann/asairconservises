import type { Metadata } from "next";
import HomePage from "@/components/home/HomePage";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Home | Professional Aircond Repair & Installation",
  description:
    "AS Aircon Service provides professional air conditioning repair, installation, chemical wash, and maintenance in Sungai Petani, Kedah. Book reliable HVAC experts today.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: `${siteConfig.name} | Professional Appliance Services`,
    description:
      "Trusted AC repair, installation, and servicing experts in Sungai Petani.",
    url: "/",
  },
};

export default function Page() {
  return <HomePage />;
}
