import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/inhouse/header";
import NavBar from "@/components/inhouse/navBar";
import MainContent from "@/components/inhouse/content";
import Footer from "@/components/inhouse/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "MLT University",
  description: "Web page for MLT university",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Header />
      <NavBar/>
      <MainContent>
        {children}
      </MainContent>
      <Footer/>
      </body>
    </html>
  );
}
