import React from "react";
import Link from "next/link";
import FadeInComponent from "../inhouse/fadeInComponent";

export function ApplyNow() {
  return (
    <div className="w-full py-12 md:py-24 lg:py-32 flex items-center justify-center">
      <div className="container px-4 md:px-6 w-full flex flex-col items-center justify-center">
        <div className="space-y-4 text-center w-full">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Apply Now</h1>
          <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Choose from one of the Two application options to get started on your journey with us.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 mt-10 w-full">
          <FadeInComponent>
          <div className="bg-card rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow text-center flex flex-col items-center bg-slate-300 hover:bg-gray-300">
            <div className="flex items-center gap-4 flex-col">
              <div className="bg-primary text-primary-foreground rounded-full p-3">
                <GraduationCapIcon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold">Apply Online</h3>
            </div>
            <p className="mt-2 text-muted-foreground">
              Apply through our online portal for our undergraduate programs
            </p>
            <Link
              href="https://panaska.pathe.lk/signin.php?pid=1"
              className="mt-3 inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium
               text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1
                focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900
                 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
              prefetch={false}>
              Apply Now
            </Link>
          </div>
          </FadeInComponent>
          {/* <FadeInComponent>
          <div className="bg-card rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow text-center flex flex-col items-center bg-slate-300 hover:bg-gray-300 ">
            <div className="flex items-center gap-4 flex-col">
              <div className="bg-secondary text-secondary-foreground rounded-full p-3">
                <BriefcaseIcon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold">Online Application form</h3>
            </div>
            <p className="mt-2 text-muted-foreground">
              Fill out our PGC Education <br></br> Online Application form
            </p>
            <Link
              href="https://forms.gle/gYyynf7GHraEnJNT6"
              className="mt-3 inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium
               text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1
                focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900
                 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"              prefetch={false}>
              Apply Now
            </Link>
          </div>
          </FadeInComponent> */}
          <FadeInComponent>
          <div className="bg-card rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow text-center flex flex-col items-center bg-slate-300 hover:bg-gray-300 ">
            <div className="flex items-center gap-4 flex-col">
              <div className="bg-muted text-muted-foreground rounded-full p-3">
                <BookIcon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold">Scholarships Application form</h3>
            </div>
            <p className="mt-2 text-muted-foreground">
              Fill out our PGC Education online Scholarship Application Form
            </p>
            <div className={'flex gap-3 justify-center items-center mt-4 md:flex-row flex-col'}>
              <Link
                  href="https://forms.gle/LzYReR8UBV3V12qX9"
                  className=" inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium
              text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1
               focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900
                dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"              prefetch={false}>
                Apply Now
              </Link>
              <Link
                  href="/scholarships"
                  className="inline-flex items-center justify-center rounded-md bg-muted px-8 py-2 text-sm font-medium text-muted-foreground shadow transition-colors hover:bg-muted/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring "
                  prefetch={false}>
                Learn More
              </Link>
            </div>
          </div>
          </FadeInComponent>
        </div>
      </div>
    </div>
  );
}

function BookIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
    </svg>
  );
}

function BriefcaseIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      <rect width="20" height="14" x="2" y="6" rx="2" />
    </svg>
  );
}

function GraduationCapIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path
        d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z" />
      <path d="M22 10v6" />
      <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5" />
    </svg>
  );
}
