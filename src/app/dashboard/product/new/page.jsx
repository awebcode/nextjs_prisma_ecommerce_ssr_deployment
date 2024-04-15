import AddNewProduct from "@/components/Product/NewProduct";
import { getCetagory, header_info } from "@/utility/getData";

async function page() {
  const { data } = await getCetagory();
  const user_id = await header_info();

  return (
    <div className="container my-10">
      <h1 className=" pb-5 border-b text-center lg:text-3xl md:text-xl text-base">
        Fill all the fields to add a new product!
      </h1>
      <AddNewProduct cetagory={data} user_id={user_id} />
    </div>
  );
}

export default page;
