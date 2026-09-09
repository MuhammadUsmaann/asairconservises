import Image from "next/image";
import Link from "next/link";
import {
  AirVent,
  Wrench,
  Clock3,
  BadgeCheck,
  Headphones,
  ShieldCheck,
  Star,
  MapPin,
  Phone,
} from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import ContactForm from "@/components/ContactForm";
import { siteConfig, telUrl, whatsappUrl } from "@/lib/site";

const featureCards = [
  {
    title: "Air Conditioner Service",
    text: "Professional cleaning, inspection, and maintenance to keep your AC running efficiently all year.",
    icon: AirVent,
  },
  {
    title: "Repair Service",
    text: "Fast diagnosis and reliable repairs for cooling issues, leaks, strange noises, and system faults.",
    icon: Wrench,
  },
];

const serviceTiers = [
  {
    name: "General Service",
    price: "From RM80",
    detail: "Filter cleaning, basic inspection & performance check",
  },
  {
    name: "Chemical Service",
    price: "From RM150",
    detail: "Deep chemical wash for coils and internal components",
  },
  {
    name: "Overhaul Service",
    price: "From RM280",
    detail: "Full dismantle, thorough cleaning & system optimization",
  },
  {
    name: "Gas Refill Service",
    price: "From RM120",
    detail: "Leak check and refrigerant top-up for cooling recovery",
  },
];

const whyChoose = [
  {
    title: "Professional Technicians",
    text: "Our certified team is trained to service all major AC brands with precision and care.",
    icon: BadgeCheck,
  },
  {
    title: "Quality Service",
    text: "We use proven methods and quality equipment so every job delivers lasting performance.",
    icon: ShieldCheck,
  },
  {
    title: "Fast Response",
    text: "Need help quickly? Reach us on WhatsApp for prompt scheduling and on-site support.",
    icon: Headphones,
  },
];

const testimonials = [
  {
    name: "Sarah D. Schneider",
    role: "Homeowner, Sungai Petani",
    quote:
      "AS Aircon Service fixed our unit the same day. The technician was professional, explained everything clearly, and cooling is perfect again.",
    image: "/images/avatar-1.jpg",
  },
  {
    name: "Ahmad Rahman",
    role: "Shop Owner",
    quote:
      "Reliable chemical wash and honest pricing. Our shop AC runs quieter and cooler after their overhaul service. Highly recommended!",
    image: "/images/avatar-2.jpg",
  },
];

const faqs = [
  {
    q: "How often should I service my AC unit?",
    a: "For most Malaysian homes, servicing every 3 to 4 months is ideal. Heavy-use units, homes with pets, or dusty environments may need monthly or bi-monthly care.",
  },
  {
    q: "What are the common AC problems?",
    a: "Weak cooling, water leakage, unusual noise, foul odour, frozen coils, and high electricity bills are among the most common issues we diagnose and repair.",
  },
  {
    q: "Why is my AC not cooling?",
    a: "Causes include dirty filters, low refrigerant, blocked coils, faulty compressors, or thermostat issues. A professional inspection quickly identifies the root cause.",
  },
  {
    q: "How can I book an appointment?",
    a: "Message us on WhatsApp, call us, or submit the contact form on this website. We will confirm a convenient time for your service visit.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate min-h-[520px] overflow-hidden md:min-h-[620px]">
        <Image
          src="/images/hero-ac.jpg"
          alt="Technician servicing a wall-mounted air conditioning unit"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="container-site relative z-10 flex min-h-[520px] flex-col justify-center py-16 md:min-h-[620px]">
          <div className="max-w-2xl fade-up">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-brand-green">
              {siteConfig.name}
            </p>
            <h1 className="text-3xl font-extrabold uppercase leading-tight tracking-wide text-white md:text-5xl">
              We Provide Professional Appliance Services
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-white/90 md:text-lg">
              Trusted heating and air conditioning repair, installation, and
              maintenance experts serving Sungai Petani and surrounding areas.
              Quality workmanship, certified technicians, and lasting comfort.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href={telUrl} className="btn-blue">
                Call Now
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Service highlight cards */}
      <section id="services" className="relative z-20 -mt-14 pb-4">
        <div className="container-site grid gap-5 md:grid-cols-2">
          {featureCards.map((card) => (
            <article
              key={card.title}
              className="flex gap-4 rounded-lg bg-white p-6 shadow-[0_12px_30px_rgba(16,130,225,0.12)]"
            >
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#e8f4ff] text-brand-blue">
                <card.icon size={28} strokeWidth={1.75} />
              </div>
              <div>
                <h2 className="text-lg font-extrabold uppercase text-brand-navy">
                  {card.title}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-text-muted">
                  {card.text}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Reliable experts */}
      <section className="bg-section-gray py-16 md:py-20">
        <div className="container-site grid items-center gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading title="Reliable Heating & Air Conditioning Repair And Installation Experts" />
            <p className="mt-5 text-text-muted leading-relaxed">
              At {siteConfig.name}, we specialize in dependable HVAC solutions
              for homes and businesses. From routine maintenance to complex
              repairs and new installations, our team delivers comfort you can
              count on—backed by proven techniques and quality parts.
            </p>
            <p className="mt-4 text-text-muted leading-relaxed">
              Whether your air conditioner needs a chemical wash, gas top-up, or
              a full system upgrade, we provide transparent advice and
              professional service every step of the way.
            </p>
            <Link href="/about-us" className="btn-green mt-8">
              Learn More
            </Link>
          </div>
          <div className="relative">
            <div
              className="absolute -right-4 top-6 h-48 w-48 rounded-full border-[10px] border-dashed border-[#c5ddf5] md:h-56 md:w-56"
              aria-hidden="true"
            />
            <div className="relative overflow-hidden rounded-md shadow-lg">
              <Image
                src="/images/tech-gauges.jpg"
                alt="HVAC technician using manifold gauges during air conditioning service"
                width={1000}
                height={667}
                className="h-auto w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SEO Guide */}
      <section className="py-16 md:py-20" id="guide">
        <div className="container-site">
          <SectionHeading title="How Often Should You Service Your Aircond? A Complete Guide" />
          <div className="mt-8 grid gap-10 lg:grid-cols-[280px_1fr]">
            <aside className="rounded-lg bg-[#f4f9ff] p-5">
              <h3 className="mb-3 text-sm font-extrabold uppercase text-brand-navy">
                Table of Contents
              </h3>
              <nav aria-label="Guide contents">
                <ul className="space-y-2 text-sm text-brand-blue">
                  {[
                    ["#intro", "Introduction"],
                    ["#why-service", "Why Does An Aircond Need Service?"],
                    ["#how-often", "How Often Should You Service?"],
                    ["#importance", "Importance of Regular Service"],
                    ["#types", "Types of Aircon Services in Malaysia"],
                    ["#comparison", "Service Comparison"],
                    ["#benefits", "Benefits of Regular Maintenance"],
                    ["#faq", "Frequently Asked Questions"],
                  ].map(([href, label]) => (
                    <li key={href}>
                      <a href={href} className="hover:underline">
                        {label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </aside>

            <article className="prose-seo">
              <h2 id="intro">Introduction</h2>
              <p>
                Living in Malaysia&apos;s humid climate means your air
                conditioner works hard almost every day. Regular servicing is
                not just about comfort—it protects your health, lowers energy
                bills, and extends the lifespan of your unit. This complete
                guide explains how often you should service your aircond and
                which service type fits your needs.
              </p>

              <h2 id="why-service">Why Does An Aircond Need Service?</h2>
              <p>
                Dust, mould, and debris build up on filters and coils over time.
                Without cleaning, airflow drops, cooling weakens, and bacteria
                can circulate indoors. Scheduled maintenance keeps the system
                efficient and hygienic.
              </p>

              <h2 id="how-often">How Often Should You Service Your Aircond?</h2>
              <p>
                Most homes in Sungai Petani and Kedah benefit from servicing
                every <strong>3–4 months</strong>. Commercial spaces, clinics,
                and homes with pets or smokers may need service every 1–2
                months. Always follow your manufacturer&apos;s guidance for
                warranty compliance.
              </p>

              <h2 id="importance">The Importance of Regular Aircon Service</h2>
              <ul>
                <li>Improves cooling performance and indoor air quality</li>
                <li>Reduces electricity consumption and unexpected breakdowns</li>
                <li>Prevents costly repairs by catching issues early</li>
                <li>Helps maintain manufacturer warranty conditions</li>
              </ul>

              <h2 id="types">Types of Aircon Services in Malaysia</h2>
              <div className="not-prose my-6 space-y-3">
                {serviceTiers.map((tier) => (
                  <div
                    key={tier.name}
                    className="flex flex-col gap-3 rounded-lg border border-[#d7e6f7] bg-white p-4 sm:flex-row sm:items-center sm:justify-between"
                  >
                    <div className="flex items-start gap-3">
                      <span className="mt-0.5 inline-flex rounded-full bg-brand-navy px-3 py-1 text-xs font-bold uppercase tracking-wide text-white">
                        {tier.name}
                      </span>
                      <div>
                        <p className="font-bold text-brand-navy">{tier.price}</p>
                        <p className="text-sm text-text-muted">{tier.detail}</p>
                      </div>
                    </div>
                    <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-blue shrink-0 px-4 py-2 text-xs">
                      Book Now
                    </a>
                  </div>
                ))}
              </div>

              <h2 id="comparison">Service Comparison</h2>
              <div className="not-prose overflow-x-auto">
                <table className="comparison-table">
                  <thead>
                    <tr>
                      <th>Feature</th>
                      <th>General</th>
                      <th>Chemical</th>
                      <th>Overhaul</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["Filter cleaning", "Yes", "Yes", "Yes"],
                      ["Coil chemical wash", "—", "Yes", "Yes"],
                      ["Full dismantle", "—", "—", "Yes"],
                      ["Gas pressure check", "Optional", "Yes", "Yes"],
                      ["Best for", "Routine care", "Weak cooling", "Heavy dirt / odour"],
                    ].map((row) => (
                      <tr key={row[0]}>
                        {row.map((cell) => (
                          <td key={cell}>{cell}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <h2 id="benefits">Our Comprehensive Range of Services</h2>
              <ul>
                <li>Residential & commercial AC installation</li>
                <li>General, chemical, and overhaul servicing</li>
                <li>Gas leak detection and refrigerant refill</li>
                <li>Troubleshooting for water leaks and noise issues</li>
                <li>Preventive maintenance contracts</li>
              </ul>

              <h3>Benefits of Regular Maintenance</h3>
              <ul>
                <li>Consistent cool air even on the hottest days</li>
                <li>Cleaner indoor air for your family or customers</li>
                <li>Lower long-term ownership costs</li>
              </ul>

              <h2>Conclusion</h2>
              <p>
                Regular aircond servicing is one of the simplest ways to protect
                your investment and stay comfortable year-round. If your unit is
                overdue for maintenance—or cooling has dropped—contact{" "}
                {siteConfig.name} today for expert help in Sungai Petani.
              </p>
            </article>
          </div>

          {/* Info grid */}
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: MapPin,
                title: "Office Location",
                text: siteConfig.address.line,
              },
              {
                icon: Phone,
                title: "Call Us for a Free Estimate",
                text: siteConfig.phoneDisplay,
              },
              {
                icon: Clock3,
                title: "Open Hours",
                text: siteConfig.hours,
              },
              {
                icon: Headphones,
                title: "Email Us",
                text: siteConfig.email,
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-lg border border-[#e3eef9] bg-white p-5 shadow-sm"
              >
                <item.icon className="mb-3 text-brand-blue" size={26} />
                <h3 className="text-sm font-extrabold uppercase text-brand-navy">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-text-muted">{item.text}</p>
              </div>
            ))}
          </div>

          {/* FAQ */}
          <div className="mt-14" id="faq">
            <h2 className="section-title text-2xl">Frequently Asked Questions</h2>
            <span className="green-underline" />
            <div className="mt-6">
              {faqs.map((item) => (
                <details key={item.q} className="faq-item">
                  <summary>
                    <span>{item.q}</span>
                    <span aria-hidden="true" className="text-xl font-light">
                      +
                    </span>
                  </summary>
                  <div className="faq-body">{item.a}</div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-section-gray py-16 md:py-20">
        <div className="container-site grid items-center gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading title="Why Choose Us?" />
            <ul className="mt-8 space-y-6">
              {whyChoose.map((item) => (
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
              alt="Professional technician servicing an air conditioning system"
              width={1400}
              height={933}
              className="h-auto w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-20">
        <div className="container-site">
          <SectionHeading
            title="What Our Customers Say About Us?"
            centered
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {testimonials.map((t) => (
              <figure
                key={t.name}
                className="rounded-lg border border-[#e8eef5] bg-white p-6 shadow-[0_8px_24px_rgba(16,130,225,0.06)]"
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
                    <div className="mt-1 flex gap-0.5 text-brand-green" aria-label="5 star rating">
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
        </div>
      </section>

      {/* Get in touch */}
      <section className="bg-section-gray py-16 md:py-20" id="contact">
        <div className="container-site max-w-3xl">
          <SectionHeading title="Get In Touch" centered />
          <div className="relative mt-10 rounded-lg bg-white p-6 shadow-sm md:p-8">
            <ContactForm variant="page" />
          </div>
          <address className="mt-8 not-italic text-sm text-brand-blue">
            <p className="flex items-start gap-2">
              <MapPin size={18} className="mt-0.5 shrink-0" />
              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(siteConfig.address.line)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                {siteConfig.address.line}
              </a>
            </p>
            <p className="mt-3 flex items-center gap-2">
              <Phone size={18} className="shrink-0" />
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
