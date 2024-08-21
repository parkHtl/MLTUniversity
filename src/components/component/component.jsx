
import Link from "next/link"
import { CollapsibleTrigger, CollapsibleContent, Collapsible } from "@/components/ui/collapsible"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export function Component() {
  return (
    (<div className="flex flex-col min-h-[100dvh]">
      <section className="w-full bg-gray-100 dark:bg-gray-800 py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div
            className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1
                  className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Become a Certified Medical Laboratory Technologist
                </h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                  Gain the skills and knowledge to excel in the dynamic field of medical laboratory technology. Enroll
                  in our comprehensive MLT program today.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link
                  className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                  href="#">
                  Learn More
                </Link>
                <Link
                  className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300 dark:border-gray-800"
                  href="#">
                  Apply Now
                </Link>
              </div>
            </div>
            <img
              alt="Hero"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
              height="550"
              src="/placeholder.svg"
              width="550" />
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Comprehensive MLT Program</h2>
              <p
                className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Our Medical Laboratory Technologist (MLT) program provides a comprehensive curriculum that prepares you
                for a rewarding career in the healthcare industry.
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Course Overview</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Gain a thorough understanding of medical laboratory procedures, instrumentation, and quality control.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Curriculum & Modules</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Explore a comprehensive curriculum covering hematology, clinical chemistry, microbiology, and more.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Learning Outcomes</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Develop the skills and knowledge to perform a wide range of laboratory tests and procedures.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Career Opportunities</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Prepare for in-demand roles in hospitals, clinics, research labs, and other healthcare settings.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Admission Requirements</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Meet the necessary educational and prerequisite requirements to join our MLT program.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Accreditation</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Our MLT program is accredited by the National Accrediting Agency for Clinical Laboratory Sciences
                  (NAACLS).
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Hands-On Learning Experience</h2>
              <p
                className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Explore our state-of-the-art lab facilities and immerse yourself in a dynamic learning environment.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link
                  className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                  href="#">
                  Take a Virtual Tour
                </Link>
                <Link
                  className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300 dark:border-gray-800"
                  href="#">
                  Watch Student Testimonials
                </Link>
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <img
                alt="MLT Lab"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
                height="310"
                src="/placeholder.svg"
                width="550" />
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Frequently Asked Questions</h2>
              <p
                className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Get answers to the most common questions about our MLT program.
              </p>
            </div>
            <div className="space-y-4">
              <Collapsible className="space-y-2">
                <CollapsibleTrigger
                  className="flex w-full items-center justify-between rounded-md bg-gray-100 px-4 py-3 text-lg font-medium transition-colors hover:bg-gray-200 focus:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:bg-gray-700">
                  <span>What is the program duration?</span>
                  <ChevronDownIcon className="h-5 w-5 transition-transform [&[data-state=open]]:rotate-180" />
                </CollapsibleTrigger>
                <CollapsibleContent className="px-4 py-3 text-gray-500 dark:text-gray-400">
                  Our MLT program is designed to be completed in 2 years, including both classroom instruction and
                  clinical rotations.
                </CollapsibleContent>
              </Collapsible>
              <Collapsible className="space-y-2">
                <CollapsibleTrigger
                  className="flex w-full items-center justify-between rounded-md bg-gray-100 px-4 py-3 text-lg font-medium transition-colors hover:bg-gray-200 focus:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:bg-gray-700">
                  <span>Is the program accredited?</span>
                  <ChevronDownIcon className="h-5 w-5 transition-transform [&[data-state=open]]:rotate-180" />
                </CollapsibleTrigger>
                <CollapsibleContent className="px-4 py-3 text-gray-500 dark:text-gray-400">
                  Yes, our MLT program is accredited by the National Accrediting Agency for Clinical Laboratory Sciences
                  (NAACLS), ensuring the highest quality of education.
                </CollapsibleContent>
              </Collapsible>
              <Collapsible className="space-y-2">
                <CollapsibleTrigger
                  className="flex w-full items-center justify-between rounded-md bg-gray-100 px-4 py-3 text-lg font-medium transition-colors hover:bg-gray-200 focus:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:bg-gray-700">
                  <span>What are the career opportunities?</span>
                  <ChevronDownIcon className="h-5 w-5 transition-transform [&[data-state=open]]:rotate-180" />
                </CollapsibleTrigger>
                <CollapsibleContent className="px-4 py-3 text-gray-500 dark:text-gray-400">
                  {'  As a certified MLT, you\'ll be qualified to work in hospitals, clinics, research laboratories, and other healthcare settings, performing a wide range of essential medical tests and procedures.'}
                </CollapsibleContent>
              </Collapsible>
              <Collapsible className="space-y-2">
                <CollapsibleTrigger
                  className="flex w-full items-center justify-between rounded-md bg-gray-100 px-4 py-3 text-lg font-medium transition-colors hover:bg-gray-200 focus:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:bg-gray-700">
                  <span>What are the tuition fees and financial aid options?</span>
                  <ChevronDownIcon className="h-5 w-5 transition-transform [&[data-state=open]]:rotate-180" />
                </CollapsibleTrigger>
                <CollapsibleContent className="px-4 py-3 text-gray-500 dark:text-gray-400">
                  Our MLT program is competitively priced, and we offer a variety of financial aid options, including
                  scholarships, grants, and student loans, to help make your education accessible.
                </CollapsibleContent>
              </Collapsible>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 border-t">
        <div className="container px-4 md:px-6">
          <div className="grid items-center justify-center gap-6 text-center">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Ready to Start Your MLT Journey?
              </h2>
              <p
                className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Take the first step towards a rewarding career in medical laboratory technology. Apply now or request
                more information.
              </p>
            </div>
            <div className="mx-auto w-full max-w-sm space-y-2">
              <form className="flex space-x-2">
                <Input className="max-w-lg flex-1" placeholder="Enter your email" type="email" />
                <Button type="submit">Get More Info</Button>
              </form>
              <div className="flex justify-center">
                <Link
                  className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                  href="#">
                  Apply Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="bg-gray-100 p-6 md:py-12 w-full dark:bg-gray-800">
        <div
          className="container max-w-7xl grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 text-sm">
          <div className="grid gap-1">
            <h3 className="font-semibold">About</h3>
          </div>
        </div>
      </footer>
    </div>)
  );
}

function ChevronDownIcon(props) {
  return (
    (<svg
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
      <path d="m6 9 6 6 6-6" />
    </svg>)
  );
}
