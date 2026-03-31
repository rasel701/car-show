"use client";
import { AnimatePresence } from "motion/react";
import Link from "next/link";
import React, { useState } from "react";
import { createPortal } from "react-dom";
import { BiMenuAltRight, BiXCircle } from "react-icons/bi";
import { FaCar } from "react-icons/fa6";
import { motion } from "framer-motion";
import { HiHome } from "react-icons/hi";
import {
  HiInformationCircle,
  HiPhone,
  HiTruck,
  HiWrenchScrewdriver,
} from "react-icons/hi2";
const Nav = () => {
  const [active, setActive] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false);
  const navLinks = [
    { link: "Home", icon: <HiHome className="w-6 h-6" /> },
    { link: "About", icon: <HiInformationCircle className="w-6 h-6" /> },
    { link: "Services", icon: <HiWrenchScrewdriver className="w-6 h-6" /> },
    { link: "Cars", icon: <HiTruck className="w-6 h-6" /> },
    { link: "Contact", icon: <HiPhone className="w-6 h-6" /> },
  ];

  const links = navLinks.map((nav, index) => {
    return (
      <div
        key={index}
        className={`hover:text-green-200 transition-all border border-gray-300/30  shadow-xl w-[80%] md:w-full flex items-center gap-1 cursor-pointer px-3 py-2 rounded-xl ${active === nav.link && "bg-white/40  "}`}
        onClick={() => setActive(nav.link)}
      >
        {nav.icon}
        <Link href={`#${nav.link}`}>{nav.link}</Link>
      </div>
    );
  });

  const sidebar = menuOpen
    ? createPortal(
        <AnimatePresence>
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -100 }}
            transition={{ type: "spring", damping: 14 }}
            className="md:hidden fixed top-0 left-0 h-full w-[65%] sm:w-[50%] z-9999 bg-linear-to-b from-green-800/90 via-green-700/80 to-green-900/80 backdrop-blur-xl border-r border-gray-400/20"
          >
            <div className="flex justify-between items-center mb-2 px-3 my-2">
              <h2 className="font-extrabold text-2xl tracking-wide text-white/90">
                Car Show
              </h2>
              <button
                className="text-white/90 hover:text-red-400 text-2xl font-bold transition cursor-pointer"
                onClick={() => setMenuOpen(false)}
              >
                <BiXCircle />
              </button>
            </div>
            <div className="flex gap-3 items-center px-5 bg-white/15 w-[90%] mx-2 py-2 rounded-full "></div>
            <div className="flex flex-col justify-center items-center gap-7 text-[18px] font-semibold text-white mt-6">
              {links}
            </div>
            <div className="my-5 border-t border-white/20"></div>
          </motion.div>
        </AnimatePresence>,
        document.body,
      )
    : null;

  return (
    <div className="w-[95%] fixed top-4 left-1/2 -translate-x-1/2 bg-linear-to-r from-green-500 to-green-700 rounded-2xl shadow-lg shadow-black/30 flex justify-between items-center h-18 px-6 z-50">
      <div className="flex items-center gap-1">
        <p className="text-2xl text-white font-bold">Car</p>
        <FaCar className="w-7 h-7 text-yellow-400" />
        <p className="text-2xl text-white font-bold">Show</p>
      </div>
      <div className="hidden md:flex justify-center items-center gap-7 text-[18px] font-semibold text-white">
        {links}
      </div>
      <div className="md:hidden" onClick={() => setMenuOpen(true)}>
        <BiMenuAltRight className="w-7 h-7 text-white cursor-pointer " />
      </div>
      {sidebar}
    </div>
  );
};

export default Nav;
