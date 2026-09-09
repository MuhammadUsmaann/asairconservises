import Link from "next/link";
import { siteConfig, telUrl } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="bg-brand-blue text-white">
      <div className="container-site py-12 md:py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h2 className="mb-4 text-sm font-extrabold uppercase tracking-wider">
              About Company
            </h2>
            <p className="text-sm leading-relaxed text-white/90">
              We provide expert heating and air conditioning repair and
              installation services designed for comfort and reliability. Our
              certified team handles every job with care, using quality
              equipment and proven techniques to ensure lasting results. Whether
              it&apos;s a minor repair or a complete system upgrade, we guarantee
              performance you can depend on year after year.
            </p>
          </div>

          <div>
            <h2 className="mb-4 text-sm font-extrabold uppercase tracking-wider">
              Office -
            </h2>
            <p className="mb-5 text-sm leading-relaxed text-white/90">
              {siteConfig.address.line}
            </p>
            <h2 className="mb-3 text-sm font-extrabold uppercase tracking-wider">
              Call Us -
            </h2>
            <p className="text-sm text-white/90">
              Cell:{" "}
              <a href={telUrl} className="hover:underline">
                {siteConfig.phoneDisplay}
              </a>
            </p>
          </div>

          <div>
            <h2 className="mb-4 text-sm font-extrabold uppercase tracking-wider">
              Quick Links
            </h2>
            <ul className="space-y-2 text-sm text-white/90">
              {siteConfig.nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:underline">
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/#services" className="hover:underline">
                  Services
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="mb-4 text-sm font-extrabold uppercase tracking-wider">
              Our Services
            </h2>
            <ul className="space-y-2 text-sm text-white/90">
              {siteConfig.services.map((service) => (
                <li key={service}>{service}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/20">
        <div className="container-site py-4">
          <p className="text-xs text-white/85 md:text-sm">
            Copyright © 2025, {siteConfig.legalName}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
