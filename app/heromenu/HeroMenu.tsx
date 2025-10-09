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
            whileHover={{ scale: 2.0, color: "#ff6b35" }}
            whileTap={{ scale: 0.95 }}
            className="text-lg md:text-xl text-gray-300 cursor-pointer transition-colors duration-300"
          >
            {item.label}
          </motion.a>
        </Link>
      ))}
    </div>
  );
};

export default HeroMenu;
