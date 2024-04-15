"use client";
import { useState } from "react";
import { FaShoppingBag } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link"; 
import toast, { Toaster } from "react-hot-toast";

const Card = ({ data }) => {
  const productData = data;
  const [cart, setCart] = useState([]);

  function addToCart(item) {
    setCart([...cart, item]);
    toast.success("Add Cart Successfull");
    localStorage.setItem("cartItems", JSON.stringify([...cart, item]));
  }
 
  return (
    <div className=" lg:my-20 my-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      <Toaster position="top-center" />

      {productData?.map((item, index) => (
        <div
          key={index}
          className=" rounded-md border p-3 flex items-center justify-center flex-col"
        >
          <div className="bg-[#E9E9E9] relative rounded-md flex items-center justify-center p-3">
            <Link href={`/products/${item.id}`}>
              <Image
                src={item.imagurl}
                className=" min-w-[250px] py-3 max-h-[200px] min-h-[200px] object-contain"
                alt="product image"
                height={400}
                width={400}
              />
            </Link>
            <span
              onClick={() => addToCart(item)}
              className="absolute border rounded-full p-2 hover:after:content -bottom-6 bg-gray-300 left-[46%] "
            >
              <FaShoppingBag />
            </span>
          </div>
          <div className=" text-center mt-10 flex items-center justify-center flex-col">
            <h1 className=" text-[#777777] text-sm">{item.name}</h1>
            <h1 className=" text-[#2B2B2D] text-xl mt-5 ">{item.title}</h1>
            <div className="  mt-4 flex items-center text-center justify-center gap-4 ">
              <h1 className=" text-[#F53E32] font-semibold">${item.price}</h1>
              <h1 className=" text-[#7A7A7A] line-through">
                ${item.discountPercentage}%
              </h1>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
