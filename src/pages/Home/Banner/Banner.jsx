import React from "react";
import woman from "../../../assets/woman.png";

export default function Banner() {
  return (
    <section className="bg-[#FFF9F4]">
      <div className="p-4 md:px-10 lg:px-40 flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-16">
        <div className="space-y-5 pl-15 md:w-1/2">
          <div>
            <p className="font-bold text-4xl sm:text-5xl md:text-6xl pt-20">
              Beauty Salon <br />
            </p>
            <p className="font-bold text-4xl sm:text-5xl md:text-6xl">
              For Every Woman
            </p>
          </div>
          <div>
            <p className="text-left text-gray-500 md:text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad sit
              recusandae non repellendus veniam itaque, qui voluptatibus modi.
            </p>
          </div>
          <div>
            <button className="bg-pink-500 text-white text-lg px-8 py-4 rounded-md hover:bg-pink-600">
              Get an Appointment
            </button>
          </div>
        </div>
        <div className="flex justify-center md:w-1/2">
          <img src={woman} alt="Beauty Salon" className="w-full max-w-lg" />
        </div>
      </div>
    </section>
  );
}
