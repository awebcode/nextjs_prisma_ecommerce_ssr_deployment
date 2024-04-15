import Hero from "@/components/Hero-section/Hero";
import Products from "@/components/Products";
import Email from "@/components/email";
import Footer from "@/components/footer/Footer";
import MainNav from "@/components/navbar/MainNav";
import TopNav from "@/components/navbar/TopNav";
import Services from "@/components/services";
import ShowCase from "@/components/showcase";
import Image from "next/image";
import React from "react";

export default function Page() {
  return (
    <div>
      <TopNav />
      <MainNav />

      <Hero />
      <ShowCase />
      <Products />
      <div className=" w-full lg:mb-20">
        <Image
          width={10000}
          height={10}
          alt="dicount image"
          src="/images/dicount.png"
        />
      </div>
      <Email />
      <Services />
      <Footer />
    </div>
  );
}
