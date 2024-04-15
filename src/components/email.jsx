import Image from "next/image";
import React from "react";

export default function Email() {
  return (
    <div className=" container grid grid-cols-1 bg-slate-500/15 rounded-lg lg:grid-cols-2 my-10 gap-10 pt-10">
      <div className=" lg:space-y-3 space-y-3 flex-col items-start justify-center flex">
        <h1 className=" lg:text-[32px] text-[20px] md:text-[25px]  font-medium lg:leading-[30px] md:leading-[25px]">
          Stay home & get your daily <br /> needs from our shop
        </h1>
        <p className=" opacity-70">{`Start You'r Daily Shopping with Nest Mart`}</p>
        <div className=" mt-2 py-3">
          <input type="button" value="" className=" outline-none " />
          <button className=" bg-red-500 px-5 py-2 rounded-full text-white font-medium ">
            {" "}
            Subscibe
          </button>
        </div>
      </div>
      <Image
        src={"/images/banner10.png"}
        alt="upgrade your selles"
        width={600}
        height={400}
      />
    </div>
  );
}
