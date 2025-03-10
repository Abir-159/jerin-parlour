import React from "react";
import faceMask from "../../../assets/facemask.png";

export default function HappyCustomers() {
  return (
    <section className="bg-[#FFF9F4]">
      <div className="p-4 pt-25 pb-25 md:px-10 lg:px-40 flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-16">
        <div className="flex justify-center md:w-1/2">
          <img
            src={faceMask}
            alt="Face Mask"
            className="w-full h-auto max-w-xs md:max-w-full"
          />
        </div>

        <div className="md:w-1/2 flex flex-col justify-center space-y-15">
          <div>
            <h1 className="font-bold text-3xl sm:text-3xl md:text-4xl lg:text-5xl text-center md:text-left">
              Let us handle your <br /> screen{" "}
              <span className="text-pink-500">Professionally</span>.
            </h1>
          </div>
          <div>
            <p className="text-justify md:text-lg pr-5 md:pr-30 text-sm sm:text-base">
              With well written codes, we build amazing apps for all platforms,
              mobile and web apps in general ipsum. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Purus commodo ipsum.
            </p>
          </div>
          <div className="flex flex-col md:flex-row md:space-x-16 justify-center md:justify-start space-y-8 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-4xl sm:text-5xl font-bold text-pink-500">
                500+
              </p>
              <p className="text-lg pt-8">Happy Customers</p>
            </div>
            <div className="text-center md:text-left">
              <p className="text-4xl sm:text-5xl font-bold text-pink-500">
                16+
              </p>
              <p className="text-lg pt-8">Total Services</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
