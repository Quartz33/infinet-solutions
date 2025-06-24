"use client";

import { Star } from "lucide-react";
import TrustpilotWidget from "./TrustBoxContainer";

const testimonials = [
  {
    body: "You can tell the team cares about getting it right the first time. Every detail was handled properly.",
    author: {
      name: "Jack Lewis",
      handle: "jacklewis",
      imageUrl: "https://randomuser.me/api/portraits/men/32.jpg",
    },
  },
  {
    body: "We’ve saved time and money thanks to the new system. Calls are routed more efficiently and our team is more productive.",
    author: {
      name: "Zakariya Mitchell",
      handle: "zmitchell",
      imageUrl: "https://randomuser.me/api/portraits/men/15.jpg",
    },
  },
  {
    body: "Reliable internet for a growing business. Infinet Solutions provided a fibre solution that scales with us.",
    author: {
      name: "William Davis",
      handle: "wdavis",
      imageUrl: "https://randomuser.me/api/portraits/men/23.jpg",
    },
  },
  {
    body: "The system has grown with us. As we’ve added staff, it’s been easy to expand our phone setup.",
    author: {
      name: "Oliver Smith",
      handle: "olismith",
      imageUrl: "https://randomuser.me/api/portraits/men/11.jpg",
    },
  },
  {
    body: "Friendly and helpful team — nothing was too much trouble. Helped us set up custom greetings and call groups.",
    author: {
      name: "Clara",
      handle: "clarauk",
      imageUrl: "https://randomuser.me/api/portraits/women/17.jpg",
    },
  },
  {
    body: "The touchscreen is a game-changer. Easier to use than our old phones and looks modern.",
    author: {
      name: "Rhys Carter",
      handle: "rcarter",
      imageUrl: "https://randomuser.me/api/portraits/men/5.jpg",
    },
  },
  {
    body: "Excellent aftercare. We had a minor setting issue after install, sorted remotely in minutes.",
    author: {
      name: "Alfie Davies",
      handle: "alfiedavies",
      imageUrl: "https://randomuser.me/api/portraits/men/45.jpg",
    },
  },
  {
    body: "What stood out was how smooth the installation was. Calls are crystal clear, and we love voicemail-to-email.",
    author: {
      name: "Mila Hughes",
      handle: "mila",
      imageUrl: "https://randomuser.me/api/portraits/women/14.jpg",
    },
  },
  {
    body: "Fantastic service from start to finish. Sales were honest, installation was smooth, phones work perfectly.",
    author: {
      name: "Kamran Lewis",
      handle: "kamran",
      imageUrl: "https://randomuser.me/api/portraits/men/34.jpg",
    },
  },
];

export default function Testimonials() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold text-indigo-600">Testimonials</h2>
          <p className="mt-2 text-4xl font-semibold tracking-tight text-balance text-gray-900 sm:text-5xl">
            We have worked with hundereds of amazing business
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
          <div className="-mt-8 sm:-mx-4 sm:columns-2 sm:text-[0] lg:columns-3">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.author.handle}
                className="pt-8 sm:inline-block sm:w-full sm:px-4"
              >
                <figure className="rounded-2xl bg-gray-50 p-8 text-sm/6 shadow-md hover:shadow-lg transition">
                  {/* Stars */}
                  <div className="flex justify-center mb-4" aria-label="5 star rating">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote className="text-gray-900">
                    <p>{`“${testimonial.body}”`}</p>
                  </blockquote>

                  {/* Author Info */}
                  <figcaption className="mt-6 flex items-center gap-x-4">
                    <img
                      alt={testimonial.author.name}
                      src={testimonial.author.imageUrl}
                      className="size-10 rounded-full bg-gray-50"
                    />
                    <div>
                      <div className="font-semibold text-gray-900">
                        {testimonial.author.name}
                      </div>
                      <div className="text-gray-600">{`@${testimonial.author.handle}`}</div>
                    </div>
                  </figcaption>
                </figure>
              </div>
            ))}
          </div>
        </div>

        {/* Trustpilot Widget */}
        <div className="mt-16 text-center">
          <TrustpilotWidget />
        </div>
      </div>
    </div>
  );
}