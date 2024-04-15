import Summary from "@/components/checkout/summary";
import Footer from "@/components/footer/Footer";
import MainNav from "@/components/navbar/MainNav";
import TopNav from "@/components/navbar/TopNav";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <TopNav />
        <MainNav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
