import Image from "next/image";
import Header from "@/components/Header/header";
import Services from "@/components/services";

export default function About() {
  const data = [
    `
  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis ratione blanditiis exercitationem!Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis ratione blanditiis exercitationem!`,
    `
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis ratione blanditiis exercitationem!Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis ratione blanditiis exercitationem!`,
    `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis ratione blanditiis exercitationem!Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis ratione blanditiis exercitationem!`,
  ];

  return (
    <>
      <Header />
      <section className=" container lg:gap-16 mt-10 lg:mt-20 lg:px-12 grid grid-cols-1 lg:grid-cols-2 place-content-center">
        <div className="">
          <h2 className=" font-bold opacity-80  md:text-[25px] text-[18px] lg:text-[35px]">
            About The Carrot
          </h2>
          {data.map((item, index) => (
            <p className=" text-[#7A7A7A] mt-3" key={index}>
              {item}
            </p>
          ))}
          <div className=" lg:mt-10">
            <Image
              alt="about page images"
              src="/images/kk.png"
              width={800}
              height={800}
            />
          </div>
        </div>
        <div>
          <Image
            alt="about page images"
            src="/images/about.png"
            width={600}
            height={800}
          />
        </div>
      </section>
      <Services />
    </>
  );
}
