import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/Shared/Layout/Navbar";
import Sidebar from "@/Shared/Layout/Sidebar";
import { motion } from "framer-motion";
import { ProjectProvider } from "@/Providers/ProjectProvider";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ProjectProvider>
          <div className={`p-0 md:p-5 bg-base-100 md:h-[100vh] h-[97vh]`}>
            <Navbar />

            <div className={`flex md:mt-3 relative h-[calc(100%-80px)]`}>
              <Sidebar />

              <div
                className={`scroll-smooth flex-grow overflow-y-auto bg-base-300 w-[500px] h-full md:rounded-[15px] scrollbar  transition-all duration-300 delay-300 `}
              >
                {children}
              </div>
            </div>
          </div>
        </ProjectProvider>
      </body>
    </html>
  );
}
