"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  HiCheckCircle,
  HiOutlineUserGroup,
  HiOutlineTruck,
} from "react-icons/hi2";
import { HiOutlineBadgeCheck } from "react-icons/hi";

const AboutSection = () => {
  const stats = [
    { icon: <HiOutlineBadgeCheck />, label: "Years Experience", value: "12+" },
    { icon: <HiOutlineUserGroup />, label: "Happy Clients", value: "1500+" },
    { icon: <HiOutlineTruck />, label: "Car Delivered", value: "850+" },
  ];

  return (
    <section id="About" className="py-24 bg-gray-50 overflow-hidden">
      <div className="w-[90%] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative h-[400px] md:h-[550px] w-full rounded-[40px] overflow-hidden shadow-2xl z-10">
              <Image
                src="https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=2070&auto=format&fit=crop"
                alt="About Our Company"
                fill
                className="object-cover"
              />
            </div>

            <div className="absolute -bottom-6 -right-6 w-72 h-72 bg-green-500/10 rounded-[40px] -z-0 hidden md:block" />

            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-10 -left-10 bg-white p-6 rounded-3xl shadow-xl z-20 hidden lg:block border border-gray-100"
            >
              <p className="text-4xl font-black text-green-600">#1</p>
              <p className="text-sm font-bold text-gray-500 uppercase tracking-tighter">
                Best Dealer <br /> In Bangladesh
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h4 className="text-green-600 font-bold uppercase tracking-widest text-sm mb-4">
              Behind Our Brand
            </h4>
            <h2 className="text-4xl md:text-5xl font-black text-gray-950 mb-6 leading-tight">
              Driving Excellence <br />
              <span className="text-green-500">Since 2014</span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              We don&apos;t just sell cars; we deliver dreams. Our journey
              started with a simple mission: to provide the most premium
              automotive experience in Bangladesh. From luxury SUVs to
              high-performance electric vehicles, we curate only the best for
              our clients.
            </p>

            <div className="space-y-4 mb-10">
              {[
                "Premium selection of global brands",
                "Certified multi-point quality inspection",
                "Flexible financing & insurance options",
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <HiCheckCircle className="text-green-500 text-2xl" />
                  <span className="font-semibold text-gray-800">{item}</span>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-3 gap-4 border-t border-gray-200 pt-10">
              {stats.map((stat, index) => (
                <div key={index} className="text-center md:text-left">
                  <div className="text-2xl text-green-600 mb-2 flex justify-center md:justify-start">
                    {stat.icon}
                  </div>
                  <p className="text-2xl font-black text-gray-950">
                    {stat.value}
                  </p>
                  <p className="text-[10px] md:text-xs font-bold text-gray-400 uppercase tracking-wider">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
