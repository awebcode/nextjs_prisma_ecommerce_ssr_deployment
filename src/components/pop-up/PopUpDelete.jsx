"use client";
import React from "react";
import { IoCloseCircleOutline } from "react-icons/io5";

export default function PopUpDelete({ onClose, deleteFun, id }) {
  const handleDeleteFun = () => {
    deleteFun(id);
  };

  return (
    <div className="fixed delay-500 ease-in-out bg-opacity-5 inset-0 bg-black backdrop-blur-sm shadow-lg flex justify-center items-center">
      <div className="rounded-lg relative bg-white p-10 shadow-2xl">
        <h2 className="text-lg font-bold">
          Are you sure you want to delete that product?
        </h2>

        <div className="mt-4 flex gap-2">
          <button
            onClick={handleDeleteFun}
            type="button"
            className="rounded bg-green-50 px-4 py-2 text-sm font-medium text-green-600"
          >
            {` Yes, I'm sure`}
          </button>

          <button
            // disabled={}
            onClick={onClose}
            type="button"
            className="rounded bg-gray-50 px-4 py-2 text-sm font-medium text-gray-600"
          >
            No, go back
          </button>
        </div>
        <div onClick={onClose} className="absolute top-3 right-3 my-">
          <IoCloseCircleOutline size={25} />
        </div>
      </div>
    </div>
  );
}
