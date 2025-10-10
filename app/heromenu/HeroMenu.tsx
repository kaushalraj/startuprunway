// app/HeroMenu/page.tsx
"use client";


export const dynamic = "force-dynamic";

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
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="
    inline-flex items-center gap-2 px-4 py-2 rounded-full
    bg-white/10 border border-white/20
    backdrop-blur-md
    shadow-[inset_0_1px_0_0_rgba(255,255,255,0.3),0_2px_8px_rgba(0,0,0,0.25)]
    hover:bg-white/20 hover:border-white/30
    transition-all duration-300
  "
        >
          <Sparkles className="w-4 h-4 text-[#ff6b35]" />
          <span className="text-gray-100">For Founders</span>
        </motion.div>
      ))}
    </div>
  );
}
