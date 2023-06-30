"use client";
import React from "react";
import "./globals.css";
import Navbar from "@/components/Navbar";
import 'swiper/css';
import Footer from "@/components/Footer";
type Props = {
  children: React.ReactNode;
};

function RootLayout({ children }: Props) {
  return (
    <html lang="en">
     

      <body>
      <Navbar />
        {children}
        <Footer/>
        </body>
    </html>
  );
}

export default RootLayout;
