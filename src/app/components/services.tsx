"use client";

import React from "react";
import {
  ShieldCheck,
  Cloud,
  Wifi,
  Server,
  Phone,
  Repeat,
} from "lucide-react";
import Image from "next/image";
import { motion, Variants } from "framer-motion"; // ✅ Import Variants

import businessInternetImg from "@/app/images/business-internet.jpg";
import cloudImg from "@/app/images/Cloud-Telephony-Guide.jpg";
import managedServicesImg from "@/app/images/managed services.png";
import businessContinuityImg from "@/app/images/business-continuity.webp";
import wifiImg from "@/app/images/wireless-internet.jpg";
import vpnImg from "@/app/images/vpn.webp";

const services = [
  {
    title: "Business Fibre Internet",
    description:
      "Experience lightning-fast speeds with our fibre optic service. Stay connected and boost your business performance.",
    icon: Server,
    image: businessInternetImg,
  },
  {
    title: "Cloud-Based Phone System",
    description:
      "Upgrade to our cloud phone system with advanced features and seamless integration for your business tools.",
    icon: Phone,
    image: cloudImg,
  },
  {
    title: "Managed Security Services",
    description:
      "Protect your business from cyber threats. Our experts manage your network security so you don’t have to.",
    icon: ShieldCheck,
    image: managedServicesImg,
  },
  {
    title: "Business Continuity",
    description:
      "Prepare for anything. Our continuity solutions ensure minimal downtime and fast recovery during any disruption.",
    icon: Repeat,
    image: businessContinuityImg,
  },
  {
    title: "Wireless Networking",
    description:
      "Connect your team with reliable and secure high-speed wireless networking across your office.",
    icon: Wifi,
    image: wifiImg,
  },
  {
    title: "Virtual Private Network",
    description:
      "Enable secure access for your remote workforce with our encrypted VPN service, keeping your data safe.",
    icon: Cloud,
    image: vpnImg,
  },
];

// ✅ Correctly typed cardVariants with Variants
const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

const Services = () => {
  return (
    <section
      className="bg-[#0F1B2A] py-20 px-4 md:px-12 text-[#ededed]"
      id="services"
    >
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-4xl font-bold text-white">Our Services</h2>
        <p className="text-gray-300 mt-4 text-lg max-w-2xl mx-auto">
          Empowering your business with modern telecom solutions tailored for
          performance, security, and growth.
        </p>
      </div>

      <div className="grid gap-30 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {services.map((service, index) => (
          <motion.div
            key={index}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={cardVariants}
            className="bg-white text-[#0F1B2A] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition"
          >
            <Image
              src={service.image}
              alt={service.title}
              className="w-full h-60 object-cover"
              width={600}
              height={192}
            />
            <div className="p-6">
              <div className="flex items-center justify-center w-12 h-12 mb-4 bg-indigo-100 text-indigo-600 rounded-full mx-auto">
                <service.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-center mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-center text-gray-700">
                {service.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
