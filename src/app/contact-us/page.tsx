import type { Metadata } from "next";
import ContactPage from "@/components/contact/ContactPage";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact AS Aircon Service in Sungai Petani for AC repair, installation, and maintenance. Call +601169791148 or message us on WhatsApp today.",
  alternates: {
    canonical: "/contact-us",
  },
  openGraph: {
    title: `Contact Us | ${siteConfig.name}`,
    description:
      "Get in touch with AS Aircon Service for professional HVAC help in Sungai Petani, Kedah.",
    url: "/contact-us",
    images: [
      {
        url: "/images/hero-contact.jpg",
        width: 1600,
        height: 2400,
        alt: "Technician performing air conditioner leak detection and service",
      },
    ],
  },
};

export default function Page() {
  return <ContactPage />;
}
