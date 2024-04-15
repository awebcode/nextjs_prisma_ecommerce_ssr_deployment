import DisplayProduct from "@/components/Product/DisplayProduct";
import { getProduct, header_info } from "@/utility/getData";

async function page() {
  const { data } = await getProduct();
  const user_id = await header_info();
  return (
    <div className=" container my-10">
      <DisplayProduct data={data} user_id={user_id} />
    </div>
  );
}

export default page;
