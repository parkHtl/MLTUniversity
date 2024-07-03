'use client';
import React from "react";
import {Button} from "@mui/material";
import Link from "next/link"

export default function Textcontent() {
  return (
    <div>
      <div className=" ml-0 md:ml-10">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Want to Learn more</h2>
        <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
          Learn more about this General modules, Recognitions and Accreditation and more or download our Brochure.
        </p>
        <Link
            href="/docs/brochure.pdf"
            download={'brochure.pdf'}
            className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
            prefetch={false}
        >
          Download Brochure
        </Link>

        <Link
            href="/fulldetails"
            className=" ml-[10px] inline-flex h-10 items-center justify-center rounded-md border border-gray-200 border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
            prefetch={false}
        >
          Full Course Details
        </Link>
      </div>
    </div>
  );
}
