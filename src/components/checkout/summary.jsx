import React from "react";
import Image from "next/image";
function Summary({ total = 0, charge = 0, cartItem }) {
  const intTotal = parseInt(total);
  const intCharge = parseInt(charge);
  return (
    <div className=" border p-3 rounded-md">
      <h1 className=" text-lg font-medium">Summary</h1>
      <div className="flex items-center  mt-5 justify-between">
        <h1 className=" text-sm  ">Sub-total</h1>
        <h1 className=" text-black/70 ">${intTotal}</h1>
      </div>
      <div className="flex items-center mb-2  justify-between">
        <h1 className="  text-sm ">Delivery Charges</h1>
        <h1 className="  text-black/70">${intCharge}</h1>
      </div>
      <hr />
      <div className="flex items-center my-2  justify-between">
        <h1 className="  text-sm ">Total Ammount</h1>
        <h1 className="  text-black/70">${intCharge + intTotal}</h1>
      </div>

      {/* items */}
      <div className=" space-y-4">
        {cartItem.map((item, index) => (
          <div
            key={index}
            className=" px-2 flex items-start  justify-start gap-5"
          >
            <div className=" bg-gray-200 p-3 rounded-lg">
              <Image
                className=" w-[70px] h-[70px] rounded-lg"
                src={item.imagurl}
                alt="product images"
                width={100}
                height={200}
              />
            </div>
            <div className=" flex items-start justify-start flex-col space-y-2">
              <h1 className=" text-lg font-normal"> {item.name}</h1>
              <div className=" flex items-start justify-start gap-4 mt-3 ">
                <h1 className=" text-[#64B496] font-bold">${item.price}</h1>
                <h1 className="line-through">${item.discountPercentage}</h1>
                <h1 className="">x{item.quantity}</h1>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Summary;
