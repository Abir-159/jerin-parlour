import React from "react";
import shepard from "../../../assets/shepard.jpg";
import geralt from "../../../assets/geralt.jpg";
import chief from "../../../assets/chief.jpg";

export default function Reviews() {
  return (
    <section>
      {" "}
      <div className="container mx-auto px-4 pt-20 pb-5 flex flex-col items-center">
        <h1 className="text-4xl font-bold text-center mb-8">Testimonials</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 pl-10 pr-10 pt-10 pb-20">
          <div className="flex flex-col items-left p-8 transition-all duration-300 hover:shadow-2xl bg-white rounded-lg">
            <div className="flex items-center space-x-4">
              <div>
                <img src={shepard} className=" w-20 rounded-full" />
              </div>
              <div>
                <h2 className="text-2xl font-bold">John Shepard</h2>
                <p>Commander, Normandy</p>
              </div>
            </div>
            <p className="text-lg text-gray-500 py-5">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum
              minus esse vel facilis iure earum veritatis quasi, voluptas rerum
              quis?
            </p>
            <div className="flex mt-4">
              {[...Array(5)].map((_, index) => (
                <svg
                  class="w-4 h-4 text-yellow-300 ms-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-left p-8 transition-all duration-300 hover:shadow-2xl bg-white rounded-lg">
            <div className="flex items-center space-x-4">
              <div>
                <img src={geralt} className=" w-20 rounded-full" />
              </div>
              <div>
                <h2 className="text-2xl font-bold">Geralt of Rivia</h2>
                <p>Witcher, Kaer Morhen</p>
              </div>
            </div>
            <p className="text-lg text-gray-500 py-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
              reiciendis earum quod?
            </p>
            <div className="flex mt-4">
              {[...Array(5)].map((_, index) => (
                <svg
                  class="w-4 h-4 text-yellow-300 ms-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
              ))}
            </div>
          </div>
          <div className="flex flex-col items-left p-8 transition-all duration-300 hover:shadow-2xl bg-white rounded-lg">
            <div className="flex items-center space-x-4">
              <div>
                <img src={chief} className=" w-20 rounded-full" />
              </div>
              <div>
                <h2 className="text-2xl font-bold">Master Chief</h2>
                <p>Spartan, UNSC</p>
              </div>
            </div>
            <p className="text-lg text-gray-500 py-5">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos odit
              error iste saepe non tempore?
            </p>
            <div className="flex mt-4">
              {[...Array(5)].map((_, index) => (
                <svg
                  class="w-4 h-4 text-yellow-300 ms-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
