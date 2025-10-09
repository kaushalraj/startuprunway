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
    <div className="flex flex-wrap justify-center gap-4 mt-10">
      {menuItems.map((item, idx) => (
        <Link key={idx} href={item.href} passHref>
          <motion.a
			whileHover={{
			  scale: 1.1,
			  background: "linear-gradient(90deg, #ffffff, #f0f0f0)",
			  color: "#000000",
			  boxShadow: "0 0 15px rgba(255, 255, 255, 0.4)",
			}}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 250, damping: 18 }}
            className="text-sm md:text-base lg:text-lg px-4 py-1.5 rounded-full text-gray-300 font-medium cursor-pointer transition-all duration-300 border border-gray-500 hover:border-white"
          >
            {item.label}
          </motion.a>
        </Link>
      ))}
    </div>
  );
};



export default HeroMenu;
