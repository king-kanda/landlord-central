import { Inter } from "next/font/google";
// import "./globals.css";
// import { Footer, Navbar } from "@/components";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "LandLord Central",
  description: "Property Managment App",
};

export default function RootLayout({ children }) {
  return (
    <>
     {children}
    </>
  );
}
