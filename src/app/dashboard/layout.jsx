import { Inter } from "next/font/google";
import Header from '@/components/layout/header';
import Sidebar from '@/components/layout/sidebar';
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
           <div className="flex">
            <Sidebar />
            <main className="w-full flex-1 overflow-hidden">
              <Header />
                <section className={` p-6 ${inter.className} `}>
                  {children}      
                </section>
              <Toaster />
            </main>
          </div>
  );
}



