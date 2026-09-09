import Image from "next/image";
import Link from "next/link";

type Crumb = { label: string; href?: string };

type PageHeroProps = {
  title: string;
  imageSrc: string;
  imageAlt: string;
  breadcrumbs: Crumb[];
};

export default function PageHero({
  title,
  imageSrc,
  imageAlt,
  breadcrumbs,
}: PageHeroProps) {
  return (
    <section className="relative">
      <div className="relative h-[220px] overflow-hidden md:h-[280px]">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="container-site relative z-10 flex h-full items-end pb-10">
          <h1 className="fade-up text-3xl font-extrabold uppercase tracking-wide text-white md:text-5xl">
            {title}
          </h1>
        </div>
      </div>
      <div className="border-b border-gray-100 bg-[#f3f4f6]">
        <div className="container-site py-3 text-sm">
          {breadcrumbs.map((crumb, index) => (
            <span key={`${crumb.label}-${index}`}>
              {index > 0 && <span className="mx-2 text-gray-400">&gt;</span>}
              {crumb.href ? (
                <Link href={crumb.href} className="text-gray-500 hover:text-brand-blue">
                  {crumb.label}
                </Link>
              ) : (
                <span className="font-medium text-brand-blue">{crumb.label}</span>
              )}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
