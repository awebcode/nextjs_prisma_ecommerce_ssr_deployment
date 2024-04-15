import Image from "next/image";
import React from "react";

export default function Hero() {
  return (
    <>
      <div className=" bg-[#f8c2bf] w-full  min-h-[30vh] lg:mt-2 mt-10 lg:min-h-[40vh] ">
        <section className="text-gray-600 body-font">
          <div className="container mx-auto flex px-5 py-5 md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <h1 className="title-font font-bold sm:text-4xl text-3xl mb-4  text-gray-900">
                The best way to
                <br className="hidden lg:inline-block" />
                stuff your wallet
              </h1>
              <p className="mb-8 leading-relaxed">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloribus quaerat, illum officia consequatur laboriosam atque
                iure corporis nihil optio voluptates ea eligendi tempora ipsa
                adi
              </p>
              <div className="flex justify-center">
                <button className="inline-flex text-white  bg-[#d73e34] shadow-xl border-0 py-2 px-6 focus:outline-none   rounded text-lg">
                  Shop Now
                </button>
              </div>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
              <Image
                src="/images/hero.png"
                alt="hero imagee"
                width={400}
                height={700}
                // style={}
              />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
