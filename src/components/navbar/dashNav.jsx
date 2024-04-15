"use client";

import Link from "next/link";
import Image from "next/image";
import { CiMenuFries } from "react-icons/ci";

import { IoClose } from "react-icons/io5";
import { useState } from "react";

export default function DashNav() {
  const [open, setOpen] = useState(true);

  return (
    <header className="text-gray-600 body-font">
      <div className="  container mx-auto flex    justify-between flex-col md:flex-row items-center">
        {/* left logo */}
        <div className=" flex items-center min-w-[400px] sm:min-w-[500px] md:min-w-max justify-between">
          <Link
            href={"/dashboard"}
            className="flex title-font font-medium items-center text-gray-900  md:mb-0"
          >
            <Image alt="logo" src="/images/logo.png" width={150} height={100} />
          </Link>
          <div className=" md:hidden " onClick={() => setOpen(!open)}>
            {open ? <CiMenuFries size={25} /> : <IoClose size={25} />}
          </div>
        </div>

        <div className=" md:flex  hidden space-x-5 mt-4 md:mt-0   ">
          <div className=" absolute right-36 shadow-2xl backdrop-blur-sm top-28"></div>
          <Link
            className=" px-2 py-2 rounded-md bg-slate-300/40"
            href={"/dashboard"}
          >
            Dashboard
          </Link>
          <Link
            className=" px-2 py-2 rounded-md bg-slate-300/40"
            href={"/dashboard/product"}
          >
            Product
          </Link>
          <Link
            className=" px-2 py-2 rounded-md bg-slate-300/40"
            href={"/dashboard/cetagory"}
          >
            Cetagory
          </Link>
          <Link
            className=" px-2 py-2 rounded-md bg-slate-300/40"
            href={"/dashboard/details"}
          >
            Account Details
          </Link>
        </div>
      </div>
      {!open && (
        <nav
          onClick={() => setOpen(!open)}
          className={` md:hidden  
             md:ml-auto md:mr-auto flex flex-col mt-10 space-y-5 items-center justify-center  text-base  `}
        >
          <Link
            className=" px-2 py-2 rounded-md bg-slate-300/40"
            href={"/dashboard"}
          >
            Dashboard
          </Link>
          <Link
            className=" px-2 py-2 rounded-md bg-slate-300/40"
            href={"/dashboard/product"}
          >
            Product
          </Link>
          <Link
            className=" px-2 py-2 rounded-md bg-slate-300/40"
            href={"/dashboard/categories"}
          >
            Categories
          </Link>
          <Link
            className=" px-2 py-2 rounded-md bg-slate-300/40"
            href={"/dashboard/details"}
          >
            Account Details
          </Link>
        </nav>
      )}
    </header>
  );
}
