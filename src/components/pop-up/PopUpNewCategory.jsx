import React, { useState } from "react";
import { IoCloseCircleOutline } from "react-icons/io5";
import toast, { Toaster } from "react-hot-toast";

function PopUpNewCategory({ user_id, onClose }) {
  const [name, setName] = useState("");

  const handleNewCategory = async () => {
    const config = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name }),
    };

    const data = await fetch(`/api/category?user_id=${user_id}`, config);
    const response = await data.json();
    console.log(response);
    try {
      if (response.status === "Success") {
        toast.success("Add category successfully");
        setName("");
        onClose();
        window.location.reload();
      }
    } catch (error) {
      console.log(error, "error ");
      toast.error("Add category unsuccessfull");
    }
  };

  return (
    <div className=" ease-in-out fixed inset-0 flex items-center justify-center bg-black/50">
      <Toaster position="top-center" />
      <div className=" bg-white p-8 rounded-lg  relative ">
        <div className="flex items-center  flex-col space-y-5 justify-center">
          <h1 className=" text-lg">Create New Cetagory</h1>
          <div className="mb-6">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Add Your Category Name"
              className="w-full px-3 min-w-[300px] py-2  placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-red-100 focus:border-red-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
            />
          </div>
          <button
            onClick={handleNewCategory}
            className=" border px-3 py-2 shadow-md rounded-md"
          >
            Save
          </button>
        </div>

        <div onClick={onClose} className="absolute top-3 right-3 my-">
          <IoCloseCircleOutline size={25} />
        </div>
      </div>
    </div>
  );
}

export default PopUpNewCategory;
