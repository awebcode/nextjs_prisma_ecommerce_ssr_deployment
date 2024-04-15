"use client";
import Image from "next/image";
import { useState } from "react";
import { IoIosArrowDropdown } from "react-icons/io";
import { IoIosArrowDropup } from "react-icons/io";

const datas = [
  {
    id: 1,
    dic: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam eligendi, laudantium dignissimos maiores veritatis cum nam voluptatibus in. Rem itaque commodi debitis laborum porro fugit ad deserunt dicta unde similique.",
    title: "What Facilities Does Your Hotel Have",
  },
  {
    id: 2,
    dic: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam eligendi, laudantium dignissimos maiores veritatis cum nam voluptatibus in. Rem itaque commodi debitis laborum porro fugit ad deserunt dicta unde similique.",
    title: "How Do I Book A Room For My Vacation?",
  },
  {
    id: 3,
    dic: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam eligendi, laudantium dignissimos maiores veritatis cum nam voluptatibus in. Rem itaque commodi debitis laborum porro fugit ad deserunt dicta unde similique.",
    title: "How We are best among others?",
  },
  {
    id: 4,
    dic: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam eligendi, laudantium dignissimos maiores veritatis cum nam voluptatibus in. Rem itaque commodi debitis laborum porro fugit ad deserunt dicta unde similique.",
    title: "Is There Any Fitness Center In Your Hotel?",
  },
  {
    id: 5,
    dic: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam eligendi, laudantium dignissimos maiores veritatis cum nam voluptatibus in. Rem itaque commodi debitis laborum porro fugit ad deserunt dicta unde similique.",
    title: "What Facilities Does Your Hotel Have",
  },
  {
    id: 6,
    dic: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam eligendi, laudantium dignissimos maiores veritatis cum nam voluptatibus in. Rem itaque commodi debitis laborum porro fugit ad deserunt dicta unde similique.",
    title: "How Do I Book A Room For My Vacation??",
  },
];

export default function FAQ() {
  const [openId, setOpenId] = useState(1);

  function arrowHandler(id) {
    setOpenId((prevId) => (prevId === id ? null : id));
  }

  return (
    <>
      <section className="mt-10 container lg:mt-20 grid grid-cols-1 lg:grid-cols-2 lg:gap-10 gap-5">
        <div>
          <Image
            src="/images/Faq.png"
            alt="faq image"
            width={600}
            height={600}
          />
        </div>
        <div className="flex flex-col gap-4 cursor-pointer">
          {datas.map((item) => (
            <div className="border-2 rounded-lg border-[#E9E9E9]" key={item.id}>
              <div
                onClick={() => arrowHandler(item.id)}
                className="flex justify-between p-4 border-b-2 items-center"
              >
                <h1 className="text-lg font-medium">{item.title}</h1>
                {openId === item.id ? (
                  <IoIosArrowDropup size={25} />
                ) : (
                  <IoIosArrowDropdown size={25} />
                )}
              </div>
              {openId === item.id && (
                <p className="p-4 text-[14px] opacity-70">{item.dic}</p>
              )}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
