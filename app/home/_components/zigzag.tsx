import Image from "next/image";
import { Rocket, Clock, Star, CheckCircle } from "lucide-react";

import FeatImage01 from "@/public/images/features-03-image-01.png";
import FeatImage02 from "@/public/images/features-03-image-02.png";
import FeatImage03 from "@/public/images/features-03-image-03.png";

export default function Zigzag() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <div className="inline-flex text-md font-semibold py-3 px-7 m-2 text-green-600 bg-green-200 rounded-full mb-4">
              Transform Your Learning Experience
            </div>
            <h1 className="h2 text-lg mb-4">
              Endless Possibilities at Your Fingertips
            </h1>
            <p className="text-md text-gray-400">
              Unlock new skills, elevate your career, and connect with experts.
              Learn from a diverse range of courses tailored to your needs.
            </p>
          </div>

          {/* Items */}
          <div className="grid gap-20">
            {/* 1st item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div
                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1"
                data-aos="fade-up"
              >
                <Image
                  className="max-w-full mx-auto h-auto rounded-xl"
                  src={FeatImage01}
                  width={540}
                  height={405}
                  alt="Features 01"
                />
              </div>
              {/* Content */}
              <div
                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6"
                data-aos="fade-right"
              >
                <div className="md:pr-4 lg:pr-12 xl:pr-16">
                  <div className="font-architects-daughter text-2xl text-cyan-500/70 mb-2">
                    Accelerate Your Learning
                  </div>
                  <h3 className="h3 text-lg mb-3">
                    Stay Ahead with Timely Content
                  </h3>
                  <p className="text-xl text-gray-400 mb-4">
                    Access the latest courses and learn at your own pace. Our
                    platform is designed to help you achieve your goals faster.
                  </p>
                  <ul className="text-lg text-gray-400 -mb-2">
                    <li className="flex items-center mb-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 shrink-0" />
                      <span>Personalized course recommendations</span>
                    </li>
                    <li className="flex items-center mb-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 shrink-0" />
                      <span>Learn from industry experts</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 shrink-0" />
                      <span>Access content anytime, anywhere</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 2nd item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div
                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 rtl"
                data-aos="fade-up"
              >
                <Image
                  className="max-w-full mx-auto h-auto rounded-xl"
                  src={FeatImage02}
                  width={540}
                  height={405}
                  alt="Features 02"
                />
              </div>
              {/* Content */}
              <div
                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6"
                data-aos="fade-left"
              >
                <div className="md:pl-4 lg:pl-12 xl:pl-16">
                  <div className="font-architects-daughter text-2xl text-cyan-500/70 mb-2">
                    Achieve More, Faster
                  </div>
                  <h3 className="h3 text-lg mb-3">Efficient Learning Tools</h3>
                  <p className="text-xl text-gray-400 mb-4">
                    Our platform is equipped with tools that enhance your
                    learning experience, ensuring you stay productive and on
                    track.
                  </p>
                  <ul className="text-lg text-gray-400 -mb-2">
                    <li className="flex items-center mb-2">
                      <Clock className="w-5 h-5 text-green-500 mr-2 shrink-0" />
                      <span>Track your progress seamlessly</span>
                    </li>
                    <li className="flex items-center mb-2">
                      <Clock className="w-5 h-5 text-green-500 mr-2 shrink-0" />
                      <span>Set and achieve learning goals</span>
                    </li>
                    <li className="flex items-center">
                      <Clock className="w-5 h-5 text-green-500 mr-2 shrink-0" />
                      <span>Boost your productivity</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 3rd item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div
                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1"
                data-aos="fade-up"
              >
                <Image
                  className="max-w-full mx-auto h-auto rounded-xl"
                  src={FeatImage03}
                  width={540}
                  height={405}
                  alt="Features 03"
                />
              </div>
              {/* Content */}
              <div
                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6"
                data-aos="fade-right"
              >
                <div className="md:pr-4 lg:pr-12 xl:pr-16">
                  <div className="font-architects-daughter text-2xl text-cyan-500/70 mb-2">
                    Quality Education for All
                  </div>
                  <h3 className="h3 text-lg mb-3">Learn from the Best</h3>
                  <p className="text-xl text-gray-400 mb-4">
                    We bring top-notch courses from renowned instructors
                    directly to you. Quality learning, accessible and
                    affordable.
                  </p>
                  <ul className="text-lg text-gray-400 -mb-2">
                    <li className="flex items-center mb-2">
                      <Star className="w-5 h-5 text-green-500 mr-2 shrink-0" />
                      <span>Highly rated courses</span>
                    </li>
                    <li className="flex items-center mb-2">
                      <Star className="w-5 h-5 text-green-500 mr-2 shrink-0" />
                      <span>Expert instructors</span>
                    </li>
                    <li className="flex items-center">
                      <Star className="w-5 h-5 text-green-500 mr-2 shrink-0" />
                      <span>Constantly updated content</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
