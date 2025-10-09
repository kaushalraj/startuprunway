"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const HeroMenu = () => {
  const menuItems = [
    { label: "Founders", href: "/founders" },
    { label: "Entrepreneurs", href: "/entrepreneurs" },
    { label: "Service Partners", href: "/service-partners" },
    { label: "Studentpreneurs", href: "/studentpreneur" },
    { label: "Investors", href: "/investors" },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-6 mt-12">
      {menuItems.map((item, idx) => (
        <Link key={idx} href={item.href} passHref>
          <motion.a
            whileHover={{
              scale: 1.1,
              backgroundColor: "#ffffff",
              color: "#000000",
              boxShadow: "0 0 15px rgba(255, 255, 255, 0.4)",
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
            className="text-lg md:text-xl px-5 py-2 rounded-full text-gray-300 font-semibold cursor-pointer transition-all duration-300 border border-gray-400 hover:border-white"
          >
            {item.label}
          </motion.a>
        </Link>
      ))}
    </div>
  );
};


export default HeroMenu;
