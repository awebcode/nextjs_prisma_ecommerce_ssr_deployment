import Image from "next/image";
import Link from "next/link";
export default function ShowCase() {
  return (
    <div className="container lg:my-20 gap-5 my-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      <Link href={"/products"}>
        <Image src="/images/banner3.png" width="400" height='400' alt="show case" />
      </Link>
      <Link href={"/products"}>
        <Image src="/images/banner3.png" width="400" height='400' alt="show case" />
      </Link>
      <Link href={"/products"}>
        <Image src="/images/banner2.png" width="400" height='400' alt="show case" />
      </Link>
    </div>
  );
}
