import React from "react";
import skin from "./group1374.png";
import face from "./group1373.png";
import hair from "./group1372.png";

export default function Services() {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4 pt-10 pb-5 flex flex-col items-center">
        <h1 className="text-4xl font-bold text-center mb-8">
          Our Awesome <span className="text-pink-500">Services</span>
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 pl-10 pr-10 pt-20 pb-20">
          <div className="flex flex-col items-center p-8 transition-all duration-300 hover:shadow-2xl bg-white rounded-lg">
            <img src={face} alt="Anti Age Face Treatment" />
            <h2 className="text-2xl">Anti Age Face Treatment</h2>
            <p className="text-2xl text-pink-500">$199</p>
            <p className="text-2xl text-gray-500 text-center">
              We craft stunning and amazing web UI, using a well-drafted UX to
              fit your product.
            </p>
          </div>

          <div className="flex flex-col items-center p-8 transition-all duration-300 hover:shadow-2xl bg-white rounded-lg">
            <img src={hair} alt="Hair Color" />
            <h2 className="text-2xl">Hair color</h2>
            <p className="text-2xl text-pink-500">$99</p>
            <p className="text-2xl text-gray-500 text-center">
              Amazing flyers, social media posts and brand representations that
              would make your brand stand out.
            </p>
          </div>
          <div className="flex flex-col items-center p-8 transition-all duration-300 hover:shadow-2xl bg-white rounded-lg">
            <img src={skin} alt="Skin Care Treatment" />
            <h2 className="text-2xl">Skin Care Treatment</h2>
            <p className="text-2xl text-pink-500">$299</p>
            <p className="text-2xl text-gray-500 text-center">
              With well written codes, we build amazing apps for all platforms,
              mobile and web apps in general
            </p>
          </div>
        </div>
        <div>
          <button className="bg-pink-500 text-white text-lg px-8 py-4 rounded-md hover:bg-pink-600">
            Explore More
          </button>
        </div>
      </div>
    </section>
  );
}
