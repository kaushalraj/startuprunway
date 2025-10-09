// app/HeroMenu/page.tsx
"use client";

export default function HeroMenu() {
  const menuItems = [
    "Founders",
    "Entrepreneurs",
    "Service Partners",
    "Studentpreneurs",
    "Investors",
  ];

  return (
    <div className="flex flex-wrap justify-center gap-4 py-4">
      {menuItems.map((item) => (
        <button
          key={item}
          className="
            text-sm md:text-base 
            font-medium text-gray-300 
            hover:text-white hover:scale-105 
            transition-all duration-200 ease-in-out
            bg-transparent border border-gray-700 hover:border-white
            px-3 py-1.5 rounded-full
          "
        >
          {item}
        </button>
      ))}
    </div>
  );
}
