"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { HiFire, HiOutlineCog, HiCurrencyDollar } from "react-icons/hi2";

interface CarCardProps {
  car: {
    id: number;
    name: string;
    brand: string;
    price: number;
    image: string;
    category: string;
    features: {
      speed: string;
      engine: string;
      fuel: string;
    };
    description: string;
  };
}

const CarCard = ({ car }: CarCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl border border-gray-100/50 group flex flex-col transition-all duration-300"
    >
      <div className="relative h-64 w-full overflow-hidden">
        <Image
          src={car.image}
          alt={car.name}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-700"
          priority
        />

        <div className="absolute top-4 right-4 bg-white/80 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-bold text-green-700 shadow-sm border border-white/20">
          {car.category}
        </div>
      </div>

      <div className="p-6 flex-grow flex flex-col">
        {/* Brand & Name */}
        <div className="mb-4">
          <p className="text-sm font-semibold text-green-600 mb-1">
            {car.brand}
          </p>
          <h3 className="text-2xl font-extrabold text-gray-900 tracking-tight group-hover:text-green-700 transition-colors duration-300">
            {car.name}
          </h3>
        </div>

        <div className="grid grid-cols-3 gap-2 border-y border-gray-100 py-5 mb-6">
          <div className="flex flex-col items-center gap-1.5">
            <div className="bg-green-50 p-2 rounded-xl text-green-600">
              <HiFire className="w-5 h-5" />
            </div>
            <p className="text-[11px] font-bold text-gray-700">
              {car.features.speed}
            </p>
          </div>
          <div className="flex flex-col items-center gap-1.5 border-x border-gray-100 px-1">
            <div className="bg-green-50 p-2 rounded-xl text-green-600">
              <HiOutlineCog className="w-5 h-5" />
            </div>
            <p className="text-[11px] font-bold text-gray-700 truncate w-full text-center">
              {car.features.engine}
            </p>
          </div>
          <div className="flex flex-col items-center gap-1.5">
            <div className="bg-green-50 p-2 rounded-xl text-green-600">
              <HiCurrencyDollar className="w-5 h-5" />
            </div>
            <p className="text-[11px] font-bold text-gray-700">
              {car.features.fuel}
            </p>
          </div>
        </div>

        <div className="mt-auto flex justify-between items-center gap-4">
          <div className="flex flex-col">
            <span className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">
              Price
            </span>
            <span className="text-2xl font-black text-gray-950">
              ${car.price.toLocaleString()}
            </span>
          </div>

          <button className="flex-grow bg-gradient-to-r from-green-600 to-green-800 text-white px-5 py-3.5 rounded-2xl font-bold text-sm hover:from-green-700 hover:to-green-900 transition-all shadow-md active:scale-95 cursor-pointer">
            View Details
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default CarCard;
