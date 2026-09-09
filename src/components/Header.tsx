"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { siteConfig, whatsappUrl } from "@/lib/site";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-[0_1px_0_rgba(0,0,0,0.06)]">
      <div className="container-site flex flex-col items-center pt-4 pb-2">
        <Link href="/" className="mb-3" aria-label={`${siteConfig.name} home`}>
          <Image
            src="/logo.svg"
            alt={`${siteConfig.name} logo`}
            width={180}
            height={74}
            priority
            className="h-16 w-auto md:h-[72px]"
          />
        </Link>
      </div>

      <div className="border-t border-gray-100">
        <div className="container-site flex items-center justify-between py-3">
          <nav className="hidden md:flex items-center gap-8" aria-label="Main">
            {siteConfig.nav.map((item) => {
              const active =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-[13px] font-semibold uppercase tracking-[0.08em] transition-colors ${
                    active
                      ? "text-brand-blue"
                      : "text-brand-navy hover:text-brand-blue"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center rounded border border-gray-200 p-2 text-brand-navy"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp text-[13px]"
          >
            WhatsApp
          </a>
        </div>

        {open && (
          <nav
            className="md:hidden border-t border-gray-100 bg-white px-5 pb-4"
            aria-label="Mobile"
          >
            <ul className="flex flex-col gap-3 pt-3">
              {siteConfig.nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block py-2 text-sm font-semibold uppercase tracking-wide text-brand-navy"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}
