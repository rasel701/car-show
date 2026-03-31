"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import CarCard from "./CarCard";
import { HiOutlineSearch } from "react-icons/hi";
import { cars } from "@/data/data";

const CardSection = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Electric", "Sports", "Luxury SUV"];

  const filteredCars = cars.filter((car) => {
    const matchesSearch = car.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    const matchesCategory =
      activeCategory === "All" || car.category === activeCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <section id="Cars" className="py-24 bg-white">
      <div className="w-[90%] mx-auto">
        <div className="text-center mb-12 max-w-2xl mx-auto">
          <h2 className="text-sm font-bold text-green-600 uppercase tracking-widest mb-3">
            Our Collection
          </h2>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-950">
            Explore Our <span className="text-green-500">Premium Cars</span>
          </h1>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12">
          <div className="relative w-full md:w-96">
            <HiOutlineSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-xl" />
            <input
              type="text"
              placeholder="Search by car name..."
              className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:border-green-500 transition-all shadow-sm"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="flex gap-2 bg-gray-100 p-1.5 rounded-2xl overflow-x-auto w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2.5 rounded-xl text-sm font-bold transition-all cursor-pointer whitespace-nowrap ${
                  activeCategory === cat
                    ? "bg-white text-green-600 shadow-sm"
                    : "text-gray-500 hover:text-gray-800"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          <AnimatePresence mode="popLayout">
            {filteredCars.map((car) => (
              <motion.div
                key={car.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <CarCard car={car} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredCars.length === 0 && (
          <div className="text-center py-20">
            <p className="text-xl text-gray-500 font-medium">
              No cars found matching your search.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default CardSection;
