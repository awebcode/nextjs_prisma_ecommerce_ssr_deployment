import { getCetagory, getProduct, header_info } from "@/utility/getData";
import Link from "next/link";

async function Page() {
  const user_id = await header_info();
  const { data } = await getProduct();
  const total_category = await getCetagory();
  console.log(total_category, data, user_id);
  return (
    <div className=" container   ">
      {/* introducation */}
      <div className=" flex flex-col md:flex-row items-center justify-between">
        <h1 className=" text-3xl pt-10 font max-w-[600px] text-justify ">
          Welcome Back, Soumik Sarkar <br />
          <p className=" text-black/60 mt-4 text-xl leading-[27px]">
            View the statistics about your business. Also manage and add
            products.
          </p>
        </h1>

        <div className=" flex items-center justify-center gap-4 my-10">
          <Link
            className=" p-2 bg-gray-100 rounded-md  text-base"
            href={"/dashboard/product"}
          >
            View Product
          </Link>
          <Link className=" p-2 bg-gray-100 rounded-md  text-base" href={"/"}>
            View Shop
          </Link>
        </div>
      </div>
      {/* jsut view */}
      <div className="  gap-4 grid grid-cols-2 lg:grid-cols-3  place-items-center lg:mt-20">
        <div className=" flex flex-1 items-center justify-center flex-col bg-neutral-50 text-neutral-800 shadow-xl lg:px-32 md:px-32 sm:px-20 px-8 py-5 rounded-md">
          <h1 className="text-xl">Total Profit</h1>
          <p className=" text-lg mt-2 ">{`200K`}</p>
        </div>
        <div className=" flex flex-1 items-center justify-center flex-col bg-neutral-50 text-neutral-800 shadow-xl lg:px-32 md:px-32 sm:px-20 px-8 py-5 rounded-md">
          <h1 className="text-xl">Product</h1>
          <p className=" text-lg mt-2">{data.length || "loading...."}</p>
        </div>
        <div className=" flex flex-1 flex-col items-center justify-center bg-neutral-50 text-neutral-800 shadow-xl lg:px-32 md:px-32 sm:px-20 px-8 py-5 rounded-md">
          <h1 className="text-xl">Categoris</h1>
          <p className=" text-lg mt-2">
            {total_category.data.length || "loading...."}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Page;
