"use client";

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Transition,
} from "@headlessui/react";
import { MinusSmallIcon, PlusSmallIcon } from "@heroicons/react/24/outline";

const faqs = [
  {
    question: "Who is Infinet Solutions?",
    answer:
      "We’re making business communications Better for businesses across the UK. We do it by delivering integrated, future-ready solutions that keep you connected, productive, and ahead of the curve. Innovation meets reliability, tailored for SMEs in the UK.",
  },
  {
    question: "Do you offer installation services?",
    answer:
      "From setup to success, we’ve got you covered. We provide professional installation and on-site training, so your team is ready from day one. No hassle. Just results.",
  },
  {
    question: "Can I use my existing phone numbers?",
    answer:
      "Keep your numbers. Upgrade everything else. We make switching easy and stress-free with smooth number porting. Same number. Next-level service.",
  },
  {
    question: "Is training included?",
    answer:
      "Tools are only as powerful as the people using them. That’s why we include expert-led training to ensure your team gets the most from our solutions. Confident teams. Better results.",
  },
  {
    question: "Who are your services designed for?",
    answer:
      "Built for SMEs who want Better. Our solutions scale with you. Big business reliability, small business flexibility.",
  },
  {
    question: "What features are included with your VOIP systems?",
    answer:
      "Not just calls – total communication control. Enjoy call recording, reporting, CRM integration, WhatsApp connectivity, and remote work solutions designed to streamline and supercharge your workflow.",
  },
  {
    question: "What happens if there is a service outage?",
    answer:
      "With very high reliability, we have a network that keeps your business moving. But if the unexpected happens, our system includes failover options like call forwarding to reroute calls to mobile devices or alternative numbers, ensuring continued connectivity.",
  },
  {
    question: "What support options do you offer?",
    answer:
      "Real support from real experts. Just a dedicated team ready to assist you when you need it most. Fast fixes. No runarounds.",
  },
  {
    question: "What are the costs of your services?",
    answer:
      "We focus on custom pricing built around your needs – No up-front fees. You pay for value.",
  },
  {
    question: "How secure is your system?",
    answer:
      "Security is the foundation of everything we do. We implement encryption, anti-fraud measures like toll fraud protection, and constant monitoring to keep your business safe.",
  },
  {
    question: "Do you comply with PCI requirements?",
    answer:
      "Our systems are fully PCI-compliant, ensuring that sensitive data stays protected. Stay secure. Stay ahead.",
  },
];

export default function Faqs() {
  return (
    <div className="bg-white py-20 px-6 sm:px-10" id="faqs">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-3xl font-bold text-gray-900 mb-12">
          Frequently Asked Questions
        </h2>
        <dl className="space-y-4">
          {faqs.map((faq) => (
            <Disclosure key={faq.question} as="div" className="rounded-lg bg-[#1F2937] p-5 shadow-sm">
              {({ open }) => (
                <>
                  <DisclosureButton className="flex w-full items-center justify-between text-left">
                    <span className="text-base font-medium text-white">{faq.question}</span>
                    <span className="ml-4 flex h-8 w-8 items-center justify-center rounded-full bg-[#D09D42] text-black">
                      {open ? (
                        <MinusSmallIcon className="h-4 w-4" />
                      ) : (
                        <PlusSmallIcon className="h-4 w-4" />
                      )}
                    </span>
                  </DisclosureButton>

                  <Transition
                    show={open}
                    enter="transition ease-out duration-300"
                    enterFrom="opacity-0 max-h-0"
                    enterTo="opacity-100 max-h-screen"
                    leave="transition ease-in duration-200"
                    leaveFrom="opacity-100 max-h-screen"
                    leaveTo="opacity-0 max-h-0"
                  >
                    <DisclosurePanel
                      static
                      className="mt-4 text-sm text-gray-300 overflow-hidden transition-all duration-300 ease-in-out "
                    >
                      {faq.answer}
                    </DisclosurePanel>
                  </Transition>
                </>
              )}
            </Disclosure>
          ))}
        </dl>
      </div>
    </div>
  );
}
