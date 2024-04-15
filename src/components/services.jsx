import Image from "next/image";
import React from "react";
import image1 from "../../public/images/1.png";
import image3 from "../../public/images/3.png";
import image5 from "../../public/images/5.png";
import image6 from "../../public/images/6.png";
export default function Services() {
  const images = [image1, image3, image5, image6];
  return (
    <div className=" container lg:px-10 my-10 grid lg:grid-cols-4 grid-cols-2 gap-5">
      {images.map((image, index) => (
        <Image
          src={image}
          alt="about image service"
          width={2000}
          height={500}
          key={index}
        />
      ))}
    </div>
  );
}
