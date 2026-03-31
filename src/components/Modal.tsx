"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { IoClose } from "react-icons/io5";

interface IModel {
  open: boolean;
  setOpen: (value: boolean) => void;
  car: {
    name: string;
    brand: string;
    image: string;
    category: string;
    description: string;
    price: number;
  };
}

const Modal = ({ open, setOpen, car }: IModel) => {
  return (
    <AnimatePresence mode="wait">
      {open && (
        <div className="fixed inset-0 z-9999 flex items-center justify-center p-4 md:p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
            className="absolute inset-0 bg-gray-900/70 backdrop-blur-sm"
          />

          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative bg-white w-full max-w-lg rounded-[32px] overflow-hidden shadow-2xl z-10 p-6 md:p-8"
          >
            <button
              onClick={() => setOpen(false)}
              className="absolute top-5 right-5 p-2 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors cursor-pointer text-gray-600"
            >
              <IoClose size={20} />
            </button>

            <div className="mb-6">
              <h2 className="text-3xl font-black text-gray-900 mb-1 leading-tight">
                {car.name}
              </h2>
              <p className="text-green-600 font-bold tracking-wide uppercase text-xs">
                {car.brand} • {car.category}
              </p>
            </div>

            <div className="relative h-56 w-full rounded-2xl overflow-hidden mb-6 border border-gray-100 shadow-inner">
              <Image
                src={car.image}
                alt={car.name}
                fill
                className="object-cover"
              />
            </div>

            <div className="mb-8">
              <h4 className="text-sm font-bold text-gray-900 mb-2">
                Description
              </h4>
              <p className="text-gray-600 leading-relaxed text-sm">
                {car.description}
              </p>
            </div>

            <div className="flex items-center justify-between pt-6 border-t border-gray-100">
              <div className="flex flex-col">
                <span className="text-[10px] font-bold text-gray-400 uppercase">
                  Total Price
                </span>
                <span className="text-2xl font-black text-gray-900">
                  ${car.price.toLocaleString()}
                </span>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="bg-gray-950 text-white px-8 py-3.5 rounded-2xl font-bold hover:bg-gray-800 transition-all active:scale-95 shadow-lg"
              >
                Close Details
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
