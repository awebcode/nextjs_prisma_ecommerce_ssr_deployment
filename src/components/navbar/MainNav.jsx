"use client";

import Link from "next/link";
import Image from "next/image";
import { BsSearch } from "react-icons/bs";
import { VscAccount } from "react-icons/vsc";
import { CiHeart, CiMenuFries } from "react-icons/ci";
import { MdOutlineShoppingCart } from "react-icons/md";

import toast, { Toaster } from "react-hot-toast";
import { IoClose } from "react-icons/io5";
import { useEffect, useState } from "react";
import Popup from "../PopUp";

export default function MainNav() {
  const [open, setOpen] = useState(true);
  const [popupOpen, setPopupOpen] = useState(false);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const cartItems = window.localStorage.getItem("cartItems");
    if (cartItems) {
      setCart(JSON.parse(cartItems));
    }
  }, []);
  const onClose = () => {
    setPopupOpen(false);
  };

  return (
    <header className="text-gray-600 body-font">
      <div className="  container mx-auto flex justify-between flex-col md:flex-row items-center">
        {/* left logo */}
        <div className=" flex items-center min-w-[350px] sm:min-w-[500px] md:min-w-max justify-between">
          <Link
            href={"/"}
            className="flex title-font font-medium items-center text-gray-900  md:mb-0"
          >
            <Image alt="logo" src="/images/logo.png" width={150} height={100} />
          </Link>
          <div className=" md:hidden " onClick={() => setOpen(!open)}>
            {open ? <CiMenuFries size={25} /> : <IoClose size={25} />}
          </div>
        </div>
        <div className=" lg:min-w-[500px] sm:min-w-[400px] min-w-[300px] px-5 py-2 border rounded-full flex items-center justify-between">
          <input className=" outline-none w-full" type="text" name="" id="" />
          <button>
            <BsSearch />
          </button>
        </div>
        <div className="space-x-5 mt-4 md:mt-0 flex ">
          <Link
            className="flex items-center justify-center gap-2"
            href={"/cart"}
          >
            <div className="relative ">
              <MdOutlineShoppingCart />
              <span className=" absolute text-sm -top-3 bg-black/30 text-white px-[5px] rounded-full  right-3">
                {cart.length}
              </span>
            </div>
            Cart
          </Link>
          <Link
            className="flex items-center justify-center gap-2"
            href={"/wishlist"}
          >
            <CiHeart />
            Wishlist
          </Link>
          <button
            className="flex items-center justify-center gap-2 relative "
            onClick={() => setPopupOpen(!popupOpen)}
          >
            <VscAccount />
            Account
          </button>
          <div className=" absolute right-36 shadow-2xl backdrop-blur-sm top-28">
            {popupOpen && <Popup onClose={onClose} />}
          </div>
        </div>
      </div>
      {!open && (
        <nav
          onClick={() => setOpen(!open)}
          className={` md:hidden  
             md:ml-auto md:mr-auto flex flex-col mt-10 space-y-5 items-center justify-center  text-base  `}
        >
          <Link href="/" className="md:mr-5 mr-3 hover:text-gray-900">
            Home
          </Link>
          <Link href="/category" className=" md:mr-5 mr-3 hover:text-gray-900">
            Category
          </Link>
          <Link href="/products" className=" md:mr-5 mr-3 hover:text-gray-900">
            Products
          </Link>
          <Link href="aboutUs" className=" md:mr-5 mr-3 hover:text-gray-900">
            About Us
          </Link>
          <Link href="/contacts" className=" md:mr-5 mr-3 hover:text-gray-900">
            Contacts
          </Link>
        </nav>
      )}
    </header>
  );
}
