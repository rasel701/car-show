"use client";
import { HiCheckBadge, HiCurrencyDollar, HiUserGroup } from "react-icons/hi2";
import { motion } from "framer-motion";

const Features = () => {
  const featureList = [
    {
      title: "Premium Quality",
      desc: "We provide the best luxury cars with top-notch performance.",
      icon: <HiCheckBadge className="w-10 h-10 text-green-500" />,
    },
    {
      title: "Affordable Prices",
      desc: "Get your dream car at the most competitive market rates.",
      icon: <HiCurrencyDollar className="w-10 h-10 text-green-500" />,
    },
    {
      title: "Expert Support",
      desc: "Our team is always here to help you find the perfect ride.",
      icon: <HiUserGroup className="w-10 h-10 text-green-500" />,
    },
  ];

  return (
    <section id="Services" className="py-20 bg-gray-50">
      <div className="text-center mb-16">
        <h2 className="text-sm font-bold text-green-600 uppercase tracking-widest mb-3">
          Our Services
        </h2>
        <motion.h1
          initial={{ x: -20, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: false, amount: 0.6 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-4xl md:text-5xl font-extrabold text-gray-900"
        >
          Why Choose <span className="text-green-500">CarShow?</span>
        </motion.h1>
        <p className="text-gray-500 mt-5 max-w-xl mx-auto text-lg">
          We provide high-quality services and the best car collection for your
          premium lifestyle.
        </p>
      </div>
      <div className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {featureList.map((item, index) => (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            viewport={{ once: false, amount: 0.5 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: index * 0.2 }}
            key={index}
            className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-shadow border border-gray-100 flex flex-col items-center text-center group"
          >
            <div className="bg-green-50 p-4 rounded-2xl group-hover:scale-110 transition-transform duration-300">
              {item.icon}
            </div>
            <h3 className="text-xl font-bold mt-6 text-gray-800">
              {item.title}
            </h3>
            <p className="text-gray-500 mt-3 leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Features;
