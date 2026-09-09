export const siteConfig = {
  name: "AS Aircon Service",
  legalName: "AS Appliance Services LTD",
  tagline: "Professional Heating & Air Conditioning Experts",
  description:
    "Expert heating and air conditioning repair and installation services in Sungai Petani, Kedah. Certified technicians, quality equipment, and reliable AC maintenance.",
  url: "https://asairconservices.com",
  phone: "+601169791148",
  phoneDisplay: "+601169791148",
  whatsapp: "601169791148",
  email: "info@asairconservices.com",
  address: {
    line: "17, Jalan Mawar 2, Sungai Petani, 08000, KDH, MY",
    street: "17, Jalan Mawar 2",
    city: "Sungai Petani",
    postalCode: "08000",
    region: "Kedah",
    country: "MY",
  },
  hours: "Mon–Sat: 8:00 AM – 6:00 PM",
  nav: [
    { href: "/", label: "Home" },
    { href: "/about-us", label: "About Us" },
    { href: "/contact-us", label: "Contact Us" },
  ],
  services: [
    "HVAC Maintenance And Repair",
    "Installation & Project Management",
    "Indoor Air Quality Testing",
    "HVAC Design & Facilities",
    "Powerfull Energy & Efficiency",
    "HVAC Cleaning & Optimization",
  ],
  social: {
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
  },
} as const;

export const whatsappUrl = `https://wa.me/${siteConfig.whatsapp}`;
export const telUrl = `tel:${siteConfig.phone}`;
