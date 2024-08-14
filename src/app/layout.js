import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/inhouse/header";
import NavBar from "@/components/inhouse/navBar";
import MainContent from "@/components/inhouse/content";
import Footer from "@/components/inhouse/footer";
import {NavBarV2} from "@/components/component/nav-bar-v2";
import NavBarV3 from "@/components/inhouse/navbarv3";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "PGC Education | MEDICAL LABORATORY TECHNOLOGY",
  description: "Official Website of MEDICAL LABORATORY TECHNOLOGY programme of PGC Education",
};

export default function RootLayout({ children }) {
  return (
      <html lang="en">
      <head>
        <title>PGC | MEDICAL LABORATORY TECHNOLOGY</title>
          {/* Google tag (gtag.js) */}
          <script async src="https://www.googletagmanager.com/gtag/js?id=AW-16517770151"></script>
          <script dangerouslySetInnerHTML={{
              __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'AW-16517770151');
      `,
          }} />
      </head>
      <body className={inter.className + ' relative overflow-x-hidden'}>
      <div className="flex flex-col min-h-screen">

        <NavBarV3 />

        {children}

        <Footer/>
      </div>
      </body>
      </html>
  );
}
