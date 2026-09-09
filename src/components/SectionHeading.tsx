type SectionHeadingProps = {
  title: string;
  centered?: boolean;
  className?: string;
  as?: "h1" | "h2" | "h3";
};

export default function SectionHeading({
  title,
  centered = false,
  className = "",
  as: Tag = "h2",
}: SectionHeadingProps) {
  return (
    <div className={`relative ${centered ? "text-center" : ""} ${className}`}>
      <Tag className="section-title text-2xl md:text-3xl lg:text-[2rem]">
        {title}
      </Tag>
      <span
        className={`green-underline ${centered ? "green-underline-center" : ""}`}
      />
      {centered && (
        <>
          <span
            className="decor-circle right-0 top-[-10px] hidden lg:grid"
            aria-hidden="true"
          >
            +
          </span>
          <span
            className="decor-dots right-8 top-[110px] hidden lg:grid"
            aria-hidden="true"
          >
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
          </span>
        </>
      )}
    </div>
  );
}
