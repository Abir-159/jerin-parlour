import React from "react";

export default function ContactUs() {
  return (

    <section className="bg-[#FFF9F4]">
      <div className="container mx-auto px-4 pt-20 pb-10 flex flex-col items-center">
        <h1 className="text-4xl font-bold text-center mb-18">
          Let us handle your <br /> project, professionally.
        </h1>
        <div className="text-lg p-3 space-y-6 md:space-x-10 md:space-y-0 md:flex-row md:flex">
          <input
            className="bg-white p-4 w-full md:w-85"
            placeholder="First Name"
          />
          <input
            className="bg-white p-4 w-full md:w-85"
            placeholder="Last Name"
          />
        </div>
        <div className="text-lg p-3 space-y-6 md:space-x-10 md:space-y-0 md:flex-row md:flex">
          <input
            className="bg-white p-4 w-full md:w-85"
            placeholder="Email Address"
          />
          <input
            className="bg-white p-4 w-full md:w-85"
            placeholder="Phone Number"
          />
        </div>
        <div className="text-lg p-3 w-full md:w-fit">
          <textarea
            className="bg-white p-4 w-full h-40 resize-none md:w-180"
            placeholder="Your Message"
          ></textarea>
        </div>
        <div>
          <button className="bg-pink-500 text-white text-lg px-8 py-4 rounded-md hover:bg-pink-600">
            Send Message
          </button>
        </div>
      </div>
    </section>
  );
}
