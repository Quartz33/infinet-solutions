"use client"
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.15,
    },
  },
};

const inputVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export function ContactUs() {
  return (
    <motion.div
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200 p-4"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div className="bg-white shadow-2xl rounded-2xl max-w-3xl w-full p-8 sm:p-12" variants={containerVariants}>
        <motion.h2
          className="text-4xl font-bold text-slate-800 mb-4 text-center"
          variants={inputVariants}
        >
          Contact Us
        </motion.h2>
        <motion.p
          className="text-slate-500 text-center mb-10"
          variants={inputVariants}
        >
          Have a question or want to work together? Fill out the form below!
        </motion.p>

        <form className="space-y-6">
          {["Name", "Email", "Company Name"].map((label, i) => (
            <motion.div key={i} variants={inputVariants}>
              <label className="block text-sm font-medium text-slate-700 mb-1">{label}</label>
              <input
                type={label === "Email" ? "email" : "text"}
                className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300"
                placeholder={`Enter your ${label.toLowerCase()}`}
              />
            </motion.div>
          ))}

          <motion.div variants={inputVariants}>
            <label className="block text-sm font-medium text-slate-700 mb-1">Message</label>
            <textarea
              rows={5}
              className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300"
              placeholder="Write your message here..."
            />
          </motion.div>

          <motion.div className="text-center pt-4" variants={inputVariants}>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-8 rounded-xl shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              Send Message
            </button>
          </motion.div>
        </form>
      </motion.div>
    </motion.div>
  );
}
