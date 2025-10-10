// app/HeroMenu/page.tsx
"use client";

export default function HeroMenu() {
  const menuItems = [
    { label: "Founders", href: "/founders" },
    { label: "Entrepreneurs", href: "/entrepreneurs" },
    { label: "Service Partners", href: "/service-partners" },
    { label: "Studentpreneurs", href: "/studentpreneur" },
    { label: "Investors", href: "/investors" },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-4 py-4">
      {menuItems.map((item) => (
        <a
          key={item.label}
          href={item.href}
          className="
        relative overflow-hidden
        text-sm md:text-sm font-medium text-gray-300
        px-3 py-1.5 rounded-full
        bg-gray-800
        border border-gray-700
        hover:text-white
        transition-all duration-300 ease-in-out
      "
        >
          {/* Shine effect */}
          <span
            className="absolute inset-0 bg-gradient-to-r from-white/30 via-white/60 to-white/30 
                       transform -translate-x-full rotate-12 
                       group-hover:translate-x-0 transition-transform duration-500"
          ></span>
          <span className="relative">{item.label}</span>
        </a>
      ))}
    </div>
  );
}
