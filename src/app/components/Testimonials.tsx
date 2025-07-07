"use client";

import { useEffect, useState } from "react";
import { Star } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import TrustpilotWidget from "./TrustBoxContainer";

const testimonials = [
  {
    body: "Excellent service from start to finish with the help of Infinet solutions. We had a very dodgy contract that we needed to get out of with Circle cloud which was quite a difficult situation, this even challenged the guys from Infinet solutions but we eventually got the best outcome we could of asked for, the guys were very helpful and patient with the whole process. Special thanks to Oli, Corey and Karl for their help and patience along the way, nothing was ever too much trouble. We made big savings by changing over our contract, we will definitely recommend you guys.",
    author: {
      name: "Pineland Sales",
      title: "Pineland Sales Ltd",
      imageUrl: "https://ui-avatars.com/api/?name=Pineland+Sales&background=random",
    },
  },
  {
    body: "Saved my company £300 per month! Excellent service ",
    author: {
      name: "Gareth Hayden",
      title: "GH Engineering",
      imageUrl: "https://ui-avatars.com/api/?name=Gareth+Hayden&background=random",
    },
  },
  {
    body: "Really pleased with our new system, the team are there for you every inch of the way for any help and support you need, would definitely recommend.",
    author: {
      name: "Louise Rice",
      title: "Customer",
      imageUrl: "https://ui-avatars.com/api/?name=Louise+Rice&background=random",
    },
  },
  {
    body: "The system has grown with us. As we’ve added staff, it’s been easy to expand our phone setup.",
    author: {
      name: "Oliver Smith",
      title: "Customer",
      imageUrl: "https://ui-avatars.com/api/?name=Oliver+Smith&background=random",
    },
  },
  {
    body: "Friendly and helpful team — nothing was too much trouble. Helped us set up custom greetings and call groups.",
    author: {
      name: "Clara",
      title: "Customer",
      imageUrl: "https://ui-avatars.com/api/?name=Clara&background=random",
    },
  },
  {
    body: "The touchscreen is a game-changer. Easier to use than our old phones and looks modern.",
    author: {
      name: "Rhys Carter",
      title: "Customer",
      imageUrl: "https://ui-avatars.com/api/?name=Rhys+Carter&background=random",
    },
  },
  {
    body: "Excellent aftercare. We had a minor setting issue after install, sorted remotely in minutes.",
    author: {
      name: "Alfie Davies",
      title: "Customer",
      imageUrl: "https://ui-avatars.com/api/?name=Alfie+Davies&background=random",
    },
  },
  {
    body: "What stood out was how smooth the installation was. Calls are crystal clear, and we love voicemail-to-email.",
    author: {
      name: "Mila Hughes",
      title: "Customer",
      imageUrl: "https://ui-avatars.com/api/?name=Mila+Hughes&background=random",
    },
  },
  {
    body: "Fantastic service from start to finish. Sales were honest, installation was smooth, phones work perfectly.",
    author: {
      name: "Kamran Lewis",
      title: "Customer",
      imageUrl: "https://ui-avatars.com/api/?name=Kamran+Lewis&background=random",
    },
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  const testimonial = testimonials[currentIndex];

  return (
    <div className="bg-[#f8f9fc] py-16 px-6" id="testimonials">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-10">
          <h2 className="text-indigo-600 font-semibold text-base">Testimonials</h2>
          <p className="mt-2 text-4xl font-bold text-gray-900">
            What our clients are saying
          </p>
        </div>

        <div className="relative min-h-[300px] sm:min-h-[460px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col md:flex-row items-center gap-10 bg-white p-8 rounded-2xl shadow-md"
            >
              {/* Author Info */}
              <div className="flex flex-col items-center md:items-start w-full md:w-1/3 text-center md:text-left">
                <img
                  src={testimonial.author.imageUrl}
                  alt={testimonial.author.name}
                  className="w-24 h-24 rounded-full object-cover border-4 border-indigo-100"
                />
                <h3 className="mt-4 text-lg font-bold text-gray-900">
                  {testimonial.author.name}
                </h3>
                <p className="text-sm text-gray-600">{testimonial.author.title}</p>
              </div>

              {/* Quote */}
              <div className="relative w-full md:w-2/3 text-left">
                <div className="text-4xl text-orange-400 mb-2">“</div>
                <p className="text-gray-800 text-lg leading-relaxed">
                  {testimonial.body}
                </p>
                <div className="text-4xl text-orange-400 mt-2 text-right">”</div>

                {/* Stars */}
                <div className="flex mt-4 text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400" />
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Trustpilot Widget */}
        <div className="mt-16 text-center">
          <TrustpilotWidget />
        </div>
      </div>
    </div>
  );
}
