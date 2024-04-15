"use client";
import { usePathname } from "next/navigation";
import React from "react";
import Link from "next/link";

function PageHeader() {
  const pathname = usePathname();
  let routeArray = pathname.split("/");

  return (
    <div className=" bg-red-500  py-4 my-4 hidden md:block ">
      <div className="container px-12 flex  items-center justify-between">
        <div className="text-base font-medium text-white capitalize">
          {routeArray}
        </div>
        <nav className="   text-white" aria-label="Breadcrumb">
          <ol className="flex items-center justify-center uppercase ">
            <li className=" items-center">
              <Link href="/" className="  items-center   font-medium  ">
                {"Home/"}
              </Link>
            </li>
            <Link className=" " href={routeArray}>
              {routeArray}
            </Link>
          </ol>
        </nav>
      </div>
    </div>
  );
}

export default PageHeader;
