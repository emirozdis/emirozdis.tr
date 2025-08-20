"use client"

import Link from "next/link";
import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

export default function Contact() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ "namespace": "30min" });
      cal("ui", { "hideEventTypeDetails": false, "layout": "month_view" });
    })();
  }, []);
  return (
    <section id="contact" className="relative flex min-h-[60vh] flex-col items-center justify-center bg-gradient-to-b from-[#111111] to-black px-4 text-center text-white">
      <div className="flex flex-col items-center justify-center">
        <p className="font-sans text-xl font-light text-[#AAAAAA]">Contact</p>
        <h2 className="font-sans text-[60px] font-medium leading-tight text-white mt-4 mx-auto max-w-4xl">
          Lets talk about your project
        </h2>
        <button
          data-cal-namespace="30min"
          data-cal-link="emirozdis/30min"
          data-cal-config='{"layout":"month_view"}'
          className="mt-12 rounded-2xl bg-white px-8 py-4 font-sans text-xl font-medium text-[#111111] transition-colors hover:bg-neutral-300"
        >
          Book a Call
        </button>
      </div>
      <footer className="absolute bottom-8">
        <p className="font-sans text-xs font-light text-white">
          Emir Özdiş · 2025
          <br />
          All rights are reserved
        </p>
      </footer>
    </section>
  );
}