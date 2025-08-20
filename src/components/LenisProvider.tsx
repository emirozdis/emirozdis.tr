"use client";

import { ReactLenis } from "lenis/react";
import React from "react";

export default function LenisProvider({ children }: { children: React.ReactNode }) {
  return (
    <ReactLenis root className="w-full h-full">
      {children}
    </ReactLenis>
  );
}