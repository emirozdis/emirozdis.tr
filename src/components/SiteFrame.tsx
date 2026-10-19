"use client";

import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
import LenisProvider from "@/components/LenisProvider";

export default function SiteFrame({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  // Policy pages remain readable without the portfolio's booking integration.
  if (pathname === "/gorenses" || pathname === "/gorenses/") {
    return <main>{children}</main>;
  }

  return (
    <LenisProvider>
      <Navbar />
      <main>{children}</main>
      <Contact />
    </LenisProvider>
  );
}
