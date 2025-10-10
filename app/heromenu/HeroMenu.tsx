// app/HeroMenu/page.tsx
"use client";

export default function HeroMenu() {
  const menuItems = [
    { label: "Founders", href: "/founders" },
    { label: "Entrepreneurs", href: "/entrepreneurs" },
    { label: "Studentpreneurs", href: "/studentpreneur" },
    { label: "Service Partners", href: "/service-partners" },
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
      font-medium text-gray-200 
      hover:text-white 
      transition-all duration-300 ease-in-out
      px-4 py-2 rounded-full
      border border-gray-600/30 
      bg-white/5 backdrop-blur-md
      shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1),0_2px_10px_rgba(0,0,0,0.3)]
      hover:bg-white/10 hover:border-white/50 hover:scale-105
    "
        >
          {item.label}
        </a>
      ))}
    </div>
  );
}
