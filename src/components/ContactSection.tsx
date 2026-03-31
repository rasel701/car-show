"use client";
import { motion } from "framer-motion";
import {
  HiOutlineMail,
  HiOutlinePhone,
  HiOutlineLocationMarker,
} from "react-icons/hi";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

const ContactSection = () => {
  return (
    <section id="Contact" className="py-24 bg-white overflow-hidden">
      <div className="w-[90%] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center justify-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h4 className="text-green-600 font-bold uppercase tracking-widest text-sm mb-4">
              Contact Us
            </h4>
            <h2 className="text-4xl md:text-5xl font-black text-gray-950 mb-6 leading-tight">
              Get In Touch <br />
              <span className="text-green-500">With Our Experts</span>
            </h2>
            <p className="text-gray-600 text-lg mb-10 max-w-md">
              Have questions about a specific car or want to book a test drive?
              Our team is here to help you 24/7.
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-green-50 rounded-2xl flex items-center justify-center text-green-600 text-2xl group-hover:bg-green-600 group-hover:text-white transition-all duration-300">
                  <HiOutlineMail />
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-400 uppercase">
                    Email Us
                  </p>
                  <p className="text-xl font-bold text-gray-900">
                    rasel70821185@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-green-50 rounded-2xl flex items-center justify-center text-green-600 text-2xl group-hover:bg-green-600 group-hover:text-white transition-all duration-300">
                  <HiOutlinePhone />
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-400 uppercase">
                    Call Support
                  </p>
                  <p className="text-xl font-bold text-gray-900">
                    +880 1577031291
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-green-50 rounded-2xl flex items-center justify-center text-green-600 text-2xl group-hover:bg-green-600 group-hover:text-white transition-all duration-300">
                  <HiOutlineLocationMarker />
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-400 uppercase">
                    Our Office
                  </p>
                  <p className="text-xl font-bold text-gray-900">
                    Banani, Dhaka, Bangladesh
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 flex gap-4">
              {[FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram].map(
                (Icon, idx) => (
                  <a
                    key={idx}
                    href="#"
                    className="w-10 h-10 border border-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:bg-green-600 hover:text-white hover:border-green-600 transition-all"
                  >
                    <Icon size={18} />
                  </a>
                ),
              )}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gray-50 p-8 md:p-12 rounded-[40px] border border-gray-100 shadow-sm"
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-gray-700 ml-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full px-6 py-4 bg-white border border-gray-200 rounded-2xl focus:outline-none focus:border-green-500 focus:ring-4 focus:ring-green-500/10 transition-all"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-gray-700 ml-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="w-full px-6 py-4 bg-white border border-gray-200 rounded-2xl focus:outline-none focus:border-green-500 focus:ring-4 focus:ring-green-500/10 transition-all"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-gray-700 ml-2">
                  Your Message
                </label>
                <textarea
                  rows={4}
                  placeholder="How can we help you?"
                  className="w-full px-6 py-4 bg-white border border-gray-200 rounded-2xl focus:outline-none focus:border-green-500 focus:ring-4 focus:ring-green-500/10 transition-all resize-none"
                ></textarea>
              </div>

              <button className="w-full bg-gradient-to-r from-green-600 to-green-800 text-white py-5 rounded-2xl font-bold text-lg hover:shadow-xl hover:shadow-green-500/20 hover:scale-[0.99] transition-all cursor-pointer">
                Send Message Now
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
