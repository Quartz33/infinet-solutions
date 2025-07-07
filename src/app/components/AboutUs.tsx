import React from 'react';
import img from "@/app/images/team.webp";
import Image from 'next/image';
import { ArrowRight } from "lucide-react"; // You can swap this with any icon lib

const AboutUs = () => {
    return (
        <section className="bg-white py-8 px-4 md:px-12" id='about' >
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-6 items-center">
                <div className="w-full h-64 md:h-full">
                    <Image
                        src={img}
                        width={400}
                        height={400}
                        alt="team"
                        className="w-full h-full object-cover rounded-2xl shadow-xl/30"
                    />
                </div>

                {/* Text Content */}
                <div>
                    <h2 className="text-black text-4xl font-semibold mb-4">About</h2>
                    <p className="text-2xl text-gray-700 mb-4">
                        <span className="font-semibold">Infinet Solutions</span> is a local, family-run Welsh telecom company offering reliable and friendly service.
                    </p>
                    <p className="text-md text-gray-600 mb-4">
                        We blend modern tech with personal care to deliver fast, transparent, and custom solutions for homes and businesses alike.
                    </p>
                    <p className="text-md text-gray-600 mb-6">
                        Count on us for clear pricing, responsive support, and seamless connectivity.
                    </p>
                    <button className="inline-flex items-center text-blue-600 font-medium hover:underline transition pb-8">
                        Learn More About Us <ArrowRight className="ml-2 w-4 h-4" />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
