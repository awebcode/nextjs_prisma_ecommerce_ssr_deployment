import DisplayCetagory from "@/components/Cetagory/DisplayCetagory";
import { getCetagory, header_info } from "@/utility/getData";

async function page() {
  const { data } = await getCetagory();
  const user_id = await header_info();

  return (
    <div className=" container my-10">
      <DisplayCetagory data={data} user_id={user_id} />
    </div>
  );
}

export default page;
