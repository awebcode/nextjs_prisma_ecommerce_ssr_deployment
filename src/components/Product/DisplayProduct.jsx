"use client";

import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";
import { useState } from "react";
import Image from "next/image";
import PopUpDeleteProduct from "../pop-up/PopUpDelete";
import Link from "next/link";
import { BsPlusCircle } from "react-icons/bs";

function DisplayProduct({ data, user_id }) {
  const route = useRouter();
  const [datas, setDatas] = useState(data);

  // common product id
  const [productId, setProductId] = useState(null);

  // this pop up for product delete
  const [popUpDelete, setPopUpDelete] = useState(false);

  // click for delete product
  const clickDeleteBtn = (id) => {
    setProductId(id);
    setPopUpDelete(!popUpDelete);
  };

  // click for edit product

  function handleNewProduct() {
    route.push("/dashboard/product/new");
  }

  const handleDeleteFun = async (id) => {
    toast.loading("product deleteing");
    const config = {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    };

    const data = await fetch(
      `/api/product?product_id=${id}&user_id=${user_id}`,
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
      <div className=" flex items-center justify-between lg:flex-row  flex-1 border-b-2 pb-5">
        <div>
          <h1 className=" text-2xl font-semibold">All Products</h1>
          <p className=" text-base">{`Let's create a new product! 🎉`}</p>
        </div>
        <div>
          <button
            onClick={handleNewProduct}
            className=" p-4 text-lg rounded-lg flex items-center justify-center gap-2 border border-green-600 "
          >
            <BsPlusCircle size={25} color="green" />
            Add Product
          </button>
        </div>
      </div>

      <>
        {/* component */}
        <table className="min-w-full  overflow-x-scroll  md:table  ">
          <thead>
            <tr>
              <th className="text-left">Image</th>
              <th className="text-left">Name</th>
              <th className="text-left">Brand</th>
              <th className="text-left">Category</th>
              <th className="text-left">Price</th>
              <th className="text-left">DiscountPercentage</th>
              <th className="text-left">Unit</th>
              <th className="text-left">Actions</th>
            </tr>
          </thead>
          {datas?.map((data, item) => (
            <tbody
              key={item}
              className=" md:table-row-group mt-10 ease-in-out delay-500"
            >
              <tr className="  border border-grey-500 md:border-none  md:table-row">
                <td className=" text-left  md:table-cell ">
                  <Image
                    className=" max-h-[40px] object-contain rounded-lg"
                    src={data.imagurl}
                    alt={data.imagurl}
                    height={100}
                    width={100}
                  />
                </td>
                <td className=" text-left  md:table-cell ">{data.name}</td>
                <td className=" text-left  md:table-cell ">{data.brand}</td>
                <td className=" text-left  md:table-cell ">
                  {data.categoryId}
                </td>
                <td className=" text-left  md:table-cell ">{data.price}</td>
                <td className=" text-left  md:table-cell ">
                  {data.discountPercentage}
                </td>
                <td className=" text-left  md:table-cell ">{data.unit}</td>
                <td className="  text-left space-x-2 ">
                  <Link
                    href={`/dashboard/product/${data.id}`}
                    className=" font-medium py-1 px-2 border   rounded"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => clickDeleteBtn(data.id)}
                    className=" font-medium py-1 px-2 border   rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          ))}

          {/* popup screen for delete */}
          {popUpDelete && (
            <PopUpDeleteProduct
              id={productId}
              deleteFun={handleDeleteFun}
              onClose={() => setPopUpDelete(!popUpDelete)}
            />
          )}

          {/* popup screen for edit  */}
        </table>
      </>
    </section>
  );
}

export default DisplayProduct;
