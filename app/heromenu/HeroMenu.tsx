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
            text-sm md:text-sm 
            font-medium text-gray-300 
            hover:text-white hover:scale-105 
            transition-all duration-200 ease-in-out
            bg-transparent border border-gray-700 hover:border-white
            px-3 py-1.5 rounded-full
          "
        >
          {item.label}
        </a>
      ))}
    </div>
  );
}