"use client";
import Image from "next/image";
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
function ProductDetails({ data }) {
  const {
    imagurl,
    name,
    title,
    price,
    brand,
    discountPercentage,
    unit,
    description,
  } = data;

  const [cart, setCart] = useState([]);

  function addToCart(item) {
    setCart([...cart, item]);
    toast.success("Add Cart Successfull");
    localStorage.setItem("cartItems", JSON.stringify([...cart, item]));
  }

  return (
    <div className="">
      <div className=" grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* image side  */}
        <Toaster position="top-center" />
        <div className="p-5 bg-[#E9E9E9] rounded-xl flex items-center  justify-center ">
          <Image
            alt="Product Image"
            className=" w-full  max-h-[350px] rounded-md"
            src={imagurl}
            width={300}
            height={400}
          />
        </div>
        {/* details side  */}

        <div className=" ">
          <div className=" border-b pb-5">
            <h1 className=" text-2xl text-[#2B2B2D]">{name}</h1>
            <h1 className=" text-sm  mt-5 text-[#7A7A7A]">{title}</h1>
          </div>

          <div className=" py-5 space-y-2">
            <h1>
              Brand : <span className=" pl-10 text-[#7A7A7A]">{price}</span>
            </h1>
            <h1>
              Unit : <span className=" pl-10 text-[#7A7A7A]">{brand}</span>
            </h1>
            <h1>
              Discount Percentage:{" "}
              <span className=" pl-10 text-[#7A7A7A]">
                {discountPercentage}
              </span>
            </h1>
            <h1>
              Item: <span className=" pl-10 text-[#7A7A7A]">{unit}</span>
            </h1>
            <h1>
              Discount Percentage:{" "}
              <span className=" pl-10 text-[#7A7A7A]">
                {discountPercentage}
              </span>
            </h1>
            <button
              onClick={() => addToCart(data)}
              className=" bg-red-500 px-4 outline-none py-2 text-white rounded-md !mt-6"
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>

      {/* tabas */}
      <div className=" px-10 mt-10">
        <div className="   flex flex-col">
          <h1 className="cursor-pointer font-medium hover:border-red-600 hover:text-red-600 border-b pb-2 text-lg">
            Description
          </h1>
          <p className=" mt-5">{description}</p>
          {/* {details.map((item, index) => (
            <div
              key={index}
              className="flex flex-col"
              onMouseOver={() => handleMouseOver(item.title)}
            >
              <h1 className="cursor-pointer hover:border-red-600 hover:text-red-600 border-b pb-2 text-lg">
                {item.name}
              </h1>
              {hoveredTitle === item.title && (
                <p className="mt-10">{item.title}</p>
              )}
            </div>
          ))} */}
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
