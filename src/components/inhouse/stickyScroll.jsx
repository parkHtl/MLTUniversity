import React from "react";
import { StickyScroll } from "@/components/acui/sticky-scroll-reveal";
import Image from "next/image";

const content = [
  {
    title: "AUSTRALIA",
    description:
      "Transfer to\n" +
      "Bachelor of Medical\n" +
      "Laboratory Science\n" +
      "AUSTRALIA",
    content: (
      <div className="h-full w-full bg-white flex items-center justify-center text-white">
        <Image
          className="object-cover rounded-[10px] object-center"
          src="/images/cqu.jpg"
          width={300}
          height={300}
          alt="Logo"
        />
      </div>
    ),
  },
  {
    title: "United Kingdom",
    description:
      "Final Year TOPUP to\n" +
      "BSc (Hons)\n" +
      "Biomedical Science\n" +
      "SRI LANKA | UK",
    content: (
      <div className="h-full w-full bg-white flex items-center justify-center text-white">
        <Image
          className="object-cover rounded-[10px] object-center"
          src="/images/obu.jpg"
          width={300}
          height={300}
          alt="Logo"
        />
      </div>
    ),
  },
  {
    title: "MALAYSIA",
    description:
      "Final Year TOPUP to\n" +
      "Bachelor of Biomedical Science\n" +
      "(Hons) Degree\n" +
      "SRI LANKA | MALAYSIA",
    content: (
      <div className="h-full w-full bg-white flex items-center justify-center text-white">
        <Image
          className="object-cover rounded-[10px] object-center"
          src="/images/msu.jpg"
          width={300}
          height={300}
          alt="Logo"
        />
      </div>
    ),
  },
  {
    title: "AUSTRALIA",
    description:
      "Transfer to\n" +
      "Bachelor of Medical\n" +
      "Laboratory Science\n" +
      "AUSTRALIA",
    content: (
      <div className="h-full w-full bg-white flex items-center justify-center text-white">
        <Image
          className="object-cover rounded-[10px] object-center"
          src="/images/cqu.jpg"
          width={300}
          height={300}
          alt="Logo"
        />
      </div>
    ),
  },
];

export function StickyScrollReveal() {
  return (
    <div className="my-8 md:my-12">
      <StickyScroll content={content} />
    </div>
  );
}
