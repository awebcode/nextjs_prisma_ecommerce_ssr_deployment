import Footer from "@/components/footer/Footer";
import MainNav from "@/components/navbar/MainNav";
import TopNav from "@/components/navbar/TopNav";
 
export default function RootLayout({ children }) {
  return (
    <>
      {" "}
      <TopNav />
      <MainNav />
      {children}
      <Footer />
    </>
  );
}
