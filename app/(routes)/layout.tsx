import React from "react";
import Header from "../components/Header";

export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col min-h-full ">
      <header>
        <Header />
      </header>
      <div className=" flex-1 min-h-full">{children}</div>
    </div>
  );
}
