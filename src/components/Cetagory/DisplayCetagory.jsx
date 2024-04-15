"use client";

import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";
import { useEffect, useState } from "react";

import PopUpDelete from "../pop-up/PopUpDelete";
import { BsPlusCircle } from "react-icons/bs";
import PopUpNewCategory from "../pop-up/PopUpNewCategory";
import PopUpEditCategory from "../pop-up/PopUpEditCategory";
import axios from "axios";
function DisplayCetagory({ data, user_id }) {
  const route = useRouter();
  const [popUpDelete, setPopUpDelete] = useState(false);
  const [popUpCreateCategory, setPopUpCreateCategory] = useState(false);
  const [popUpEditCategory, setPopUpEditCategory] = useState(false);
  const [cetagoryId, setCetagoryId] = useState(null);
  const [singleCetagory, setSingleCetagory] = useState(null);

  useEffect(() => {
    const getSingleCategory = async () => {
      if (cetagoryId) {
        const data = await axios.patch(
          `http://localhost:3000/api/category?user_id=${user_id}&category_id=${cetagoryId}`
        );
        const res = await data.json();
        setSingleCetagory(res.data.name);
      }
    };
    getSingleCategory();
  }, [cetagoryId, user_id]);

  const handleNewCategory = () => {
    setPopUpCreateCategory(!popUpCreateCategory);
  };
  const handleEditCategory = (id) => {
    setCetagoryId(id);
    setPopUpEditCategory(!popUpEditCategory);
  };

  const clickDeleteBtn = (id) => {
    setCetagoryId(id);
    setPopUpDelete(!popUpDelete);
  };

  const handleDeleteFun = async (cetagoryId) => {
    console.log(cetagoryId);
    toast.loading("product deleteing");
    const config = {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    };

    const data = await fetch(
      `/api/category?category_id=${cetagoryId}&user_id=${user_id}`,
      config
    );
    const response = await data.json();
    toast.loading("loading...");
    try {
      if (response.status === "Delete Successfully") {
        toast.success("Delete product Successfully");
        setPopUpDelete(!popUpDelete);
        window.location.reload();
      } else {
        throw new Error("Delete Unsuccessful: Invalid response status");
      }
    } catch (error) {
      // Handle the error
      toast.error(error.message);
    } finally {
      toast.dismiss(); // Dismiss any existing toast notifications
    }
  };

  return (
    <section className=" container">
      <Toaster position="top-center" />
      <div className=" flex items-center justify-between  lg:flex-row  flex-1 border-b-2 pb-5">
        <div>
          <h1 className=" text-2xl font-semibold">All Cetagorys</h1>
          <p className=" text-base">{`Let's create a new Cetagorys! 🎉`}</p>
        </div>
        <div>
          <button
            onClick={handleNewCategory}
            className=" p-3 text-lg rounded-lg flex items-center justify-center gap-2 border border-green-600 "
          >
            <BsPlusCircle size={25} color="green" />
            Add Category
          </button>
        </div>
      </div>

      <>
        <div className="rounded-lg border border-gray-200 mt-10">
          <div className="overflow-x-auto rounded-t-lg">
            <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
              <thead className="text-left   ">
                <tr>
                  <th className="whitespace-nowrap px-4 text-left py-2 font-medium text-gray-900">
                    Id
                  </th>
                  <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    Cetagorys
                  </th>
                  <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    Actions
                  </th>
                </tr>
              </thead>

              {data?.map((item, index) => (
                <tbody key={index} className="divide-y divide-gray-200">
                  <tr>
                    <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                      {item.id}
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                      {item.name}
                    </td>
                    <td className="   space-x-2 whitespace-nowrap pl-3 py-2 text-gray-700">
                      <button
                        onClick={() => handleEditCategory(item.id)}
                        className=" font-medium py-1 px-2 border   rounded"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => clickDeleteBtn(item.id)}
                        className=" font-medium py-1 px-2 border   rounded"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                </tbody>
              ))}
            </table>
          </div>
        </div>
        {/* popup screen for delete */}
        {popUpDelete && (
          <PopUpDelete
            id={cetagoryId}
            deleteFun={handleDeleteFun}
            onClose={() => setPopUpDelete(!popUpDelete)}
          />
        )}

        {popUpCreateCategory && (
          <PopUpNewCategory
            onClose={() => setPopUpCreateCategory(!PopUpNewCategory)}
            user_id={user_id}
          />
        )}
        {popUpEditCategory && (
          <PopUpEditCategory
            onClose={() => setPopUpEditCategory(!popUpEditCategory)}
            user_id={user_id}
            data={singleCetagory}
            category_id={cetagoryId}
          />
        )}
      </>
    </section>
  );
}

export default DisplayCetagory;
