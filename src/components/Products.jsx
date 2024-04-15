import { getProductClinet } from "@/utility/getData";
import Card from "./card";

async function Products() {
  let { data } = await getProductClinet();
  data = data?.slice(0, 6); // Assign the sliced array back to data variable

  return (
    <div className=" container ">
      <h1 className=" text-[30px]"> Popular Product </h1>
      <Card data={data} />
    </div>
  );
}

export default Products;
