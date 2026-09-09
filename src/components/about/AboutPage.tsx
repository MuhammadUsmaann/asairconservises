import Image from "next/image";
import Link from "next/link";
import {
  BadgeCheck,
  ShieldCheck,
  Headphones,
  Star,
  Users,
  Wrench,
  Clock3,
} from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import { siteConfig, whatsappUrl } from "@/lib/site";

const values = [
  {
    title: "Professional Technicians",
    text: "Our certified team is experienced with residential and commercial HVAC systems across major brands.",
    icon: BadgeCheck,
  },
  {
    title: "Quality Service",
    text: "We follow proven service procedures and use quality tools so every job delivers lasting results.",
    icon: ShieldCheck,
  },
  {
    title: "Fast Response",
    text: "Message us on WhatsApp for quick scheduling and reliable on-site support when you need it most.",
    icon: Headphones,
  },
];

const highlights = [
  {
    title: "Expertise & Experience",
    text: "Years of hands-on air conditioning installation, repair, and maintenance for homes and businesses.",
    icon: Users,
  },
  {
    title: "Cutting-Edge Equipment",
    text: "We use modern diagnostic tools and cleaning equipment for accurate, efficient service work.",
    icon: Wrench,
  },
  {
    title: "Customer Focus",
    text: "Clear communication, honest recommendations, and service that respects your time and budget.",
    icon: Clock3,
  },
];

const testimonials = [
  {
    name: "Sarah D. Schneider",
    role: "Homeowner",
    quote:
      "From the first WhatsApp reply to the finished job, everything was smooth. Cooling is stronger and the unit is quieter.",
    image: "/images/avatar-1.jpg",
  },
  {
    name: "Ahmad Rahman",
    role: "Business Owner",
    quote:
      "Professional, punctual, and transparent with pricing. AS Aircon Service is now our go-to team for shop AC maintenance.",
    image: "/images/avatar-2.jpg",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About Us"
        imageSrc="/images/about-tech.jpg"
        imageAlt="Air conditioning technician working on HVAC equipment"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About Us" },
        ]}
      />

      <section className="py-16 md:py-20">
        <div className="container-site grid items-center gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading title="Reliable Heating & Air Conditioning Repair And Installation Experts" />
            <p className="mt-5 leading-relaxed text-text-muted">
              {siteConfig.name} is a trusted HVAC service provider based in
              Sungai Petani, Kedah. We help homeowners and businesses stay cool
              and comfortable with professional air conditioning repair,
              installation, chemical wash, overhaul, and maintenance services.
            </p>
            <p className="mt-4 leading-relaxed text-text-muted">
              Our mission is simple: deliver dependable workmanship, clear
              communication, and lasting performance—so you can rely on your AC
              system every day of the year.
            </p>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-green mt-8"
            >
              WhatsApp Us
            </a>
          </div>
          <div className="relative">
            <div
              className="absolute -left-3 top-8 h-40 w-40 rounded-full border-[10px] border-dashed border-[#c5ddf5] md:h-52 md:w-52"
              aria-hidden="true"
            />
            <div className="relative overflow-hidden rounded-md shadow-lg">
              <Image
                src="/images/ac-service.jpg"
                alt="Indoor air conditioning unit ready for professional service"
                width={1200}
                height={1200}
                className="h-auto w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-section-gray py-16 md:py-20">
        <div className="container-site grid items-center gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading title="Why Choose Us?" />
            <ul className="mt-8 space-y-6">
              {values.map((item) => (
                <li key={item.title} className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#e8f4ff] text-brand-blue">
                    <item.icon size={24} />
                  </div>
                  <div>
                    <h3 className="font-extrabold uppercase text-brand-navy">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-text-muted">
                      {item.text}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative overflow-hidden rounded-md shadow-lg">
            <Image
              src="/images/tech-vest.jpg"
              alt="Technician in high-visibility vest servicing a wall-mounted AC unit"
              width={1400}
              height={933}
              className="h-auto w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container-site">
          <SectionHeading title="What Sets Us Apart" centered />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {highlights.map((item) => (
              <article
                key={item.title}
                className="rounded-lg border border-[#e8eef5] bg-white p-6 text-center shadow-sm"
              >
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#e8f4ff] text-brand-blue">
                  <item.icon size={28} />
                </div>
                <h3 className="font-extrabold uppercase text-brand-navy">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-text-muted">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-section-gray py-16 md:py-20">
        <div className="container-site">
          <SectionHeading
            title="What Our Customers Say About Us?"
            centered
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {testimonials.map((t) => (
              <figure
                key={t.name}
                className="rounded-lg bg-white p-6 shadow-[0_8px_24px_rgba(16,130,225,0.06)]"
              >
                <div className="mb-4 flex items-center gap-3">
                  <Image
                    src={t.image}
                    alt={`${t.name} profile photo`}
                    width={56}
                    height={56}
                    className="h-14 w-14 rounded-full object-cover"
                  />
                  <div>
                    <figcaption className="font-bold text-brand-navy">
                      {t.name}
                    </figcaption>
                    <p className="text-xs text-text-muted">{t.role}</p>
                    <div
                      className="mt-1 flex gap-0.5 text-brand-green"
                      aria-label="5 star rating"
                    >
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} size={14} fill="currentColor" />
                      ))}
                    </div>
                  </div>
                </div>
                <blockquote className="text-sm leading-relaxed text-text-muted">
                  “{t.quote}”
                </blockquote>
              </figure>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link href="/contact-us" className="btn-blue">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
