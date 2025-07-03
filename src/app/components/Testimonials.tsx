"use client";

import { Star } from "lucide-react";
import TrustpilotWidget from "./TrustBoxContainer";

const testimonials = [
  {
    body: "Excellent service from start to finish with the help of Infinet solutions. We had a very dodgy contract that we needed to get out of with Circle cloud which was quite a difficult situation, this even challenged the guys from Infinet solutions but we eventually got the best outcome we could of asked for, the guys were very helpful and patient with the whole process. special thanks to Oli, Corey and Karl for there help and patience along the way, nothing was ever too much trouble. We made big savings by changing over our contract, we will definitely recommend you guys.",
    author: {
      name: "Pineland Sales",
      handle: "pinelandsales",

      dateofExperience: "June 03, 2025"
    },
  },
  {
    body: "Saved my company £300 per month! Excellent service ",
    author: {
      name: "Gareth Hayden",
      handle: "zmitchell",

      dateofExperience: "June 03, 2025"
    },
  },
  {
    body: "Really pleased with our new system, the team are there for you every inch of the way for any help and support you need, would definitely recommend.",
    author: {
      name: "Louise Rice",
      handle: "Louise Rice",

    },
  },
  {
    body: "The system has grown with us. As we’ve added staff, it’s been easy to expand our phone setup.",
    author: {
      name: "Oliver Smith",
      handle: "olismith",

    },
  },
  {
    body: "Friendly and helpful team — nothing was too much trouble. Helped us set up custom greetings and call groups.",
    author: {
      name: "Clara",
      handle: "clarauk",

    },
  },
  {
    body: "The touchscreen is a game-changer. Easier to use than our old phones and looks modern.",
    author: {
      name: "Rhys Carter",
      handle: "rcarter",

    },
  },
  {
    body: "Excellent aftercare. We had a minor setting issue after install, sorted remotely in minutes.",
    author: {
      name: "Alfie Davies",
      handle: "alfiedavies",

    },
  },
  {
    body: "What stood out was how smooth the installation was. Calls are crystal clear, and we love voicemail-to-email.",
    author: {
      name: "Mila Hughes",
      handle: "mila",

    },
  },
  {
    body: "Fantastic service from start to finish. Sales were honest, installation was smooth, phones work perfectly.",
    author: {
      name: "Kamran Lewis",
      handle: "kamran",

    },
  },
];

export default function Testimonials() {
  return (
    <div className="bg-white py-6 " id="testimonials">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold text-indigo-600">Testimonials</h2>
          <p className="mt-2 text-4xl font-semibold tracking-tight text-balance text-gray-900 sm:text-5xl">
            We have worked with hundreds of amazing business
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
                  <figcaption className="mt-6 flex items-start gap-x-4">
                    <img
                      alt={testimonial.author.name}
                      src='https://ui-avatars.com/api/?name=User'
                      className="size-10 rounded-full bg-gray-50"
                    />
                    <div>
                      <div className="font-semibold text-gray-900">
                        {testimonial.author.name}
                      </div>
                      <div className="text-gray-600">{`@${testimonial.author.handle}`}</div>
                      {testimonial.author.dateofExperience && (
                        <div className="text-gray-500 text-xs mt-1">
                          Experience Date: {testimonial.author.dateofExperience}
                        </div>
                      )}
                    </div>
                  </figcaption>
                </figure>
              </div>
            ))}
          </div>
        </div>

        {/* Trustpilot Widget */}
        <div className="text-center">
          <TrustpilotWidget />
        </div>
      </div>
    </div>
  );
}