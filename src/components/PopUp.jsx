// Popup.js
import Link from "next/link";
import React from "react";
import { MdPerson2, MdLogout } from "react-icons/md";

export default function Popup({ onClose }) {
  return (
    <div className={`   text-black bg-gray-100 rounded-lg `} onClick={onClose}>
      <div className=" flex flex-1  px-6 py-2 space-y-2 flex-col rounded-lg">
        <Link
          onClick={onclose}
          href={"/login"}
          className=" flex items-center justify-center gap-2"
        >
          <MdPerson2 /> Sign In
        </Link>
        <button className="flex items-center justify-center gap-2">
          <MdLogout />
          Logout
        </button>
      </div>
    </div>
  );
}
