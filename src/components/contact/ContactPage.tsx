import { MapPin, Phone } from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import ContactForm from "@/components/ContactForm";
import { siteConfig, telUrl } from "@/lib/site";

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact Us"
        imageSrc="/images/hero-contact.jpg"
        imageAlt="Technician inspecting internal components of an air conditioning unit"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Contact Us" },
        ]}
      />

      <section className="relative py-14 md:py-20">
        <div className="container-site max-w-3xl">
          <div className="relative mb-10">
            <SectionHeading title="Get In Touch" centered />
            <div className="mt-3 flex justify-start md:absolute md:left-0 md:top-0">
              <div
                className="inline-flex items-center gap-2 rounded border border-gray-200 bg-white px-3 py-1.5 text-xs font-semibold text-brand-navy shadow-sm"
                aria-label="Language: English"
              >
                <span aria-hidden="true">🇬🇧</span>
                EN
              </div>
            </div>
          </div>

          <div className="rounded-lg bg-white p-1 md:p-2">
            <ContactForm variant="page" />
          </div>
        </div>
      </section>

      <section className="pb-16 md:pb-20">
        <div className="container-site">
          <h2 className="section-title text-2xl md:text-3xl">
            Our Office Address
          </h2>
          <address className="mt-6 not-italic">
            <p className="flex items-start gap-3 text-brand-blue">
              <MapPin className="mt-0.5 shrink-0" size={20} />
              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(siteConfig.address.line)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                {siteConfig.address.line}
              </a>
            </p>
            <p className="mt-4 flex items-center gap-3 text-brand-blue">
              <Phone className="shrink-0" size={20} />
              <a href={telUrl} className="hover:underline">
                {siteConfig.phoneDisplay}
              </a>
            </p>
          </address>
        </div>
      </section>
    </>
  );
}
