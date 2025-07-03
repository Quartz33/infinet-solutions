"use client";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from "react-icons/fa";

export function ContactUs() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [messageSent, setMessageSent] = useState(false);

  const serviceId = 'service_lj7xbll';
  const templateId = 'template_vohkh0l';
  const publicKey = 'TLdKQ8Kd0wcALqika';

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!formRef.current) return;

    try {
      const response = await emailjs.sendForm(
        serviceId,
        templateId,
        formRef.current,
        publicKey
      );

      if (response.status === 200) {
        setMessageSent(true);
        formRef.current.reset();
      }
    } catch (error) {
      console.error("Error sending email:", error);
    }

    setIsSubmitting(false);
  };

  return (
    <section className="bg-color text-white py-20 px-6 md:px-12" id="contact">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* Left column */}
        <div>
          <h2 className="text-4xl font-bold leading-tight mb-6">
            Your next best business decision starts here
          </h2>
          <p className="text-lg text-blue-100 mb-12 max-w-md">
            We believe great service starts before you even become a customer.
            Have a question? Need a quote? Want to know why we’re different?
            Our team is ready.
          </p>

          <div className="space-y-10 text-sm text-white">
            <div className="flex items-start gap-4">
              <span className="text-yella pt-2">
                <FaMapMarkerAlt size={20} />
              </span>
              <div>
                <p className="font-semibold text-lg">Office Address</p>
                <p>The Maltings, East Tyndall Street,</p>
                <p>Cardiff, CF24 5EZ</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="text-yella pt-2">
                <FaEnvelope size={20} />
              </span>
              <div>
                <p className="font-semibold text-lg">Send us an email</p>
                <p>red@infinetsolutions.co.uk</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="text-yella pt-2">
                <FaPhone size={20} />
              </span>
              <div>
                <p className="font-semibold text-lg">Give us a call</p>
                <p>02922 520704</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right column - Contact form */}
        <div className="bg-transparent p-4">
          <form
            ref={formRef}
            onSubmit={sendEmail}
            className="space-y-6 text-gray-800"
          >
            <div>
              <label className="block text-white mb-1">Name</label>
              <input
                type="text"
                name="from_name"
                placeholder="John Doe"
                required
                className="w-full px-4 py-3 rounded-full bg-slate-100 border-none focus:ring-2 focus:ring-blue-300 outline-none"
              />
            </div>
            <div>
              <label className="block text-white mb-1">Email Address</label>
              <input
                type="email"
                name="from_email"
                placeholder="Enter your email"
                required
                className="w-full px-4 py-3 rounded-full bg-slate-100 border-none focus:ring-2 focus:ring-blue-300 outline-none"
              />
            </div>

            <div>
              <label className="block text-white mb-1">Company name</label>
              <input
                type="text"
                name="from_company"
                placeholder="Your company name"
                className="w-full px-4 py-3 rounded-full bg-slate-100 border-none focus:ring-2 focus:ring-blue-300 outline-none"
              />
            </div>

            <div>
              <label className="block text-white mb-1">Message</label>
              <textarea
                name="message"
                rows={4}
                placeholder="Type your message"
                required
                className="w-full px-4 py-3 rounded-xl bg-slate-100 border-none focus:ring-2 focus:ring-blue-300 outline-none"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold py-3 rounded-full transition"
            >
              {isSubmitting ? "Sending..." : "Send a message"}
            </button>

            {messageSent && (
              <p className="text-green-400 mt-4 text-center">
                ✅ Your message has been sent!
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
