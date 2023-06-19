"use client";
import React from "react";
import "./globals.css";
import Navbar from "@/components/Navbar";

type Props = {
  children: React.ReactNode;
};

function RootLayout({ children }: Props) {
  return (
    <html lang="en">
     

      <body>
      <Navbar />
        {children}</body>
    </html>
  );
}

export default RootLayout;
