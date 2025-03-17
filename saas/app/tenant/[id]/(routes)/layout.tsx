import React from "react";
import Header from "@/components/layout-components/Header";

export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col py-4 px-5 gap-10 ">
      <header>
        <Header />
      </header>
      <div className=" flex-1 pb-8">{children}</div>
    </div>
  );
}
