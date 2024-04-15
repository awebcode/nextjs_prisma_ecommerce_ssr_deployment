import ProductDetails from "@/components/Product/ProductDetails";
import { getSingleProductClient } from "@/utility/getData";

export default async function Page({ params }) {
  const id = params.productID;
  const { data } = await getSingleProductClient(id);
  return (
    <div className=" container my-10 gap-10">
      <h1 className=" mb-10 lg:text-3xl ">Product Details</h1>

      <ProductDetails data={data} />
    </div>
  );
}
