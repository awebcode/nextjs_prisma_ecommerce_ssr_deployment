import DashNav from "@/components/navbar/dashNav";
import { Poppins } from "next/font/google";

const poppins = { subsets: ["latin"], weight: ["400"] };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <div className=" bg-[#fffbf6] min-h-screen text-neutral-900 ">
          <DashNav />
          {children}
        </div>
      </body>
    </html>
  );
}
