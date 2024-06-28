import React from "react";
import Link from "next/link";
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@/components/ui/collapsible";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import FadeInComponent from "@/components/inhouse/fadeInComponent";

function CourseContent() {
  return (
    <div className="md:ml-10  md:mr-10">
      <section
        id="hero"
        className="w-full mt-16 mb-16 flex flex-col items-center"
      >
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <FadeInComponent>
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-5xl/none">
                    Launch Your Career in Healthcare with Our Comprehensive
                    Medical Laboratory Technician (MLT) Course
                  </h1>
                </FadeInComponent>
                <FadeInComponent>
                  <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                    Are you ready to embark on a rewarding career in the
                    healthcare industry? Our comprehensive Medical Laboratory
                    Technician (MLT) course is designed to equip you with the
                    skills and knowledge needed to excel in this vital field.
                  </p>
                </FadeInComponent>
              </div>
              <FadeInComponent>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link
                    href="https://pgc.edu.lk/how-to-apply/"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                    prefetch={false}
                  >
                    Apply Now
                  </Link>
                </div>
              </FadeInComponent>
            </div>
            <FadeInComponent>
              <img
                src="/images/6.png"
                width="600"
                height="400"
                alt="MLT Course"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
              />
            </FadeInComponent>
          </div>
        </div>
      </section>

      <section
        id="about"
        className="w-full py-12 md:py-24 lg:py-16 bg-gray-100 dark:bg-gray-800 flex flex-col items-center"
      >
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div>
              <FadeInComponent>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  About the MLT Course
                </h2>
              </FadeInComponent>
              <FadeInComponent>
                <p className="mt-4 text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  {`A modern career opportunity in the employees dominated market! As part of the 
health-care team, the Medical Laboratory Technologist manages a large variety of
laboratory tests and procedures that assist doctors in the diagnosis, treatment, and
prevention of diseases. PGC programme provides a scientific foundation as well a thorough 
competency-based training solution enabling the students to develop hands on knowledge 
to acquire employment in the industry. The fact that we closely work with TOP end industry 
partners provide our students the access to most modern methodologies and equipment 
which prepares graduates ready for employment across the globe.`}
                </p>
              </FadeInComponent>
              <FadeInComponent>
                <div className="mt-6 flex flex-col gap-4 sm:flex-row">
                  <div className="flex items-center gap-2">
                    <ClockIcon className="h-6 w-6 text-gray-500 dark:text-gray-400" />
                    <span className="text-gray-500 dark:text-gray-400">
                      Duration: 2 years
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <AwardIcon className="h-6 w-6 text-gray-500 dark:text-gray-400" />
                    <span className="text-gray-500 dark:text-gray-400">
                      NAACLS Accredited
                    </span>
                  </div>
                </div>
              </FadeInComponent>
            </div>
            <div className="grid gap-6">
              <div className="grid gap-1">
                <FadeInComponent>
                  <h3 className="text-xl font-bold">
                    Career Prospects for Medical Laboratory Technologists
                  </h3>
                </FadeInComponent>
                <FadeInComponent>
                  <p className="text-gray-500 dark:text-gray-400">
                    {` As a Medical Laboratory Technician, you'll have the opportunity to work in hospitals, clinics,
                  research laboratories, and more. The demand for skilled MLTs is expected to grow significantly in the
                  coming years.`}
                  </p>
                </FadeInComponent>
              </div>
              <div className="grid gap-1">
                <FadeInComponent>
                  <h3 className="text-xl font-bold">Curriculum Highlights</h3>
                </FadeInComponent>
                <FadeInComponent>
                  <ul className="list-disc space-y-2 pl-6 text-gray-500 dark:text-gray-400">
                    <li>{`Laboratory Management Laboratory Techniques`}</li>
                    <li>{`Hematology & Blood Bank Serology`}</li>
                    <li>{`Microbiology and Immunology`}</li>
                    <li>{`Histopathology`}</li>
                    <li>{`Genetics & Molecular Biology`}</li>
                  </ul>
                </FadeInComponent>
              </div>
            </div>
          </div>
        </div>
      </section>

      

      <section
        id="details"
        className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800 flex flex-col items-center"
      >
        <div className="container px-4 md:px-6 space-y-8">
          <div className="text-center space-y-4">
            <FadeInComponent>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Course Details
              </h2>
            </FadeInComponent>
            <FadeInComponent>
              <p className="max-w-[700px] mx-auto text-gray-500 md:text-xl dark:text-gray-400">
                Explore the details of the Natural Language Processing
                Techniques course.
              </p>
            </FadeInComponent>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            <FadeInComponent>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Duration</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  8 weeks, 2 hours per week
                </p>
              </div>
            </FadeInComponent>
            <FadeInComponent>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Schedule</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Weekdays, 7 PM - 9 PM
                </p>
              </div>
            </FadeInComponent>
            <FadeInComponent>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Delivery Mode</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Online (live sessions)
                </p>
              </div>
            </FadeInComponent>
            <FadeInComponent>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Certification</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Certificate of Completion
                </p>
              </div>
            </FadeInComponent>
            <FadeInComponent>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Prerequisites</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Basic understanding of programming and machine learning
                </p>
              </div>
            </FadeInComponent>
            <FadeInComponent>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Language</h3>
                <p className="text-gray-500 dark:text-gray-400">English</p>
              </div>
            </FadeInComponent>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 flex flex-col items-center">
        <div className="container px-4 md:px-6">
          <div className="space-y-8">
            <div className="space-y-4 text-center">
              <h2 className="text-3xl text-center font-bold tracking-tighter sm:text-5xl">
                Frequently Asked Questions
              </h2>
              <p className=" text-center text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Get answers to the most common questions about our MLT program.
              </p>
            </div>
            <div className="space-y-4 md:ml-28 md:mr-28">
              <Collapsible className="space-y-2">
                <CollapsibleTrigger className="flex w-full items-center justify-between rounded-md bg-gray-100 px-4 py-3 text-lg font-medium transition-colors hover:bg-gray-200 focus:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:bg-gray-700">
                  <span>What is a Medical Laboratory Technologist (MLT)?</span>
                  <ChevronDownIcon className="h-5 w-5 transition-transform [&[data-state=open]]:rotate-180" />
                </CollapsibleTrigger>
                <CollapsibleContent className="px-4 py-3 text-gray-500 dark:text-gray-400">
                  A Medical Laboratory Technologist (MLT) is a healthcare
                  professional who performs laboratory tests and procedures to
                  help diagnose, treat, and prevent diseases. MLTs work in
                  various settings, including hospitals, diagnostic labs, and
                  research facilities, providing critical data that supports
                  medical decisions.
                </CollapsibleContent>
              </Collapsible>
              <Collapsible className="space-y-2">
                <CollapsibleTrigger className="flex w-full items-center justify-between rounded-md bg-gray-100 px-4 py-3 text-lg font-medium transition-colors hover:bg-gray-200 focus:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:bg-gray-700">
                  <span>
                    What qualifications do I need to enroll in the MLT program?
                  </span>
                  <ChevronDownIcon className="h-5 w-5 transition-transform [&[data-state=open]]:rotate-180" />
                </CollapsibleTrigger>
                <CollapsibleContent className="px-4 py-3 text-gray-500 dark:text-gray-400">
                  To enroll in our MLT program, you need a minimum of 3 simple
                  passes in A-levels, including chemistry, or an equivalent
                  foundation. Please check our admissions page for detailed
                  requirements.
                </CollapsibleContent>
              </Collapsible>
              <Collapsible className="space-y-2">
                <CollapsibleTrigger className="flex w-full items-center justify-between rounded-md bg-gray-100 px-4 py-3 text-lg font-medium transition-colors hover:bg-gray-200 focus:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:bg-gray-700">
                  <span>How long does the MLT program take to complete?</span>
                  <ChevronDownIcon className="h-5 w-5 transition-transform [&[data-state=open]]:rotate-180" />
                </CollapsibleTrigger>
                <CollapsibleContent className="px-4 py-3 text-gray-500 dark:text-gray-400">
                  {`Our MLT program is designed to be completed in 2 years. The program includes both classroom instruction and hands-on laboratory training.
`}
                </CollapsibleContent>
              </Collapsible>
              <Collapsible className="space-y-2">
                <CollapsibleTrigger className="flex w-full items-center justify-between rounded-md bg-gray-100 px-4 py-3 text-lg font-medium transition-colors hover:bg-gray-200 focus:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:bg-gray-700">
                  <span>
                    What kind of hands-on experience will I get in the program?
                  </span>
                  <ChevronDownIcon className="h-5 w-5 transition-transform [&[data-state=open]]:rotate-180" />
                </CollapsibleTrigger>
                <CollapsibleContent className="px-4 py-3 text-gray-500 dark:text-gray-400">
                  Students in our MLT program will gain extensive hands-on
                  experience in our state-of-the-art lab facilities. You will
                  learn to use advanced laboratory equipment and perform a wide
                  range of tests and procedures under the supervision of
                  experienced instructors.
                </CollapsibleContent>
              </Collapsible>
              <Collapsible className="space-y-2">
                <CollapsibleTrigger className="flex w-full items-center justify-between rounded-md bg-gray-100 px-4 py-3 text-lg font-medium transition-colors hover:bg-gray-200 focus:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:bg-gray-700">
                  <span>
                    Are there on-the-job training opportunities included in the
                    program?
                  </span>
                  <ChevronDownIcon className="h-5 w-5 transition-transform [&[data-state=open]]:rotate-180" />
                </CollapsibleTrigger>
                <CollapsibleContent className="px-4 py-3 text-gray-500 dark:text-gray-400">
                  Yes, our program includes on-the-job training opportunities
                  with our industry partners. These on-the-job trainings provide
                  real-world experience and can help you build professional
                  connections in the healthcare field.
                </CollapsibleContent>
              </Collapsible>
              <Collapsible className="space-y-2">
                <CollapsibleTrigger className="flex w-full items-center justify-between rounded-md bg-gray-100 px-4 py-3 text-lg font-medium transition-colors hover:bg-gray-200 focus:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:bg-gray-700">
                  <span>
                    What career opportunities are available after completing the
                    MLT program?
                  </span>
                  <ChevronDownIcon className="h-5 w-5 transition-transform [&[data-state=open]]:rotate-180" />
                </CollapsibleTrigger>
                <CollapsibleContent className="px-4 py-3 text-gray-500 dark:text-gray-400">
                  Graduates of our MLT program can pursue various career paths,
                  including roles in hospitals, diagnostic laboratories,
                  research facilities, public health organizations, and
                  educational institutions. Positions include Clinical
                  Laboratory Technologist, Blood Bank Technologist, Microbiology
                  Technologist, and more.
                </CollapsibleContent>
              </Collapsible>
           
              <Collapsible className="space-y-2">
                <CollapsibleTrigger className="flex w-full items-center justify-between rounded-md bg-gray-100 px-4 py-3 text-lg font-medium transition-colors hover:bg-gray-200 focus:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:bg-gray-700">
                  <span>
                    Can I work internationally with an MLT qualification from
                    this program?
                  </span>
                  <ChevronDownIcon className="h-5 w-5 transition-transform [&[data-state=open]]:rotate-180" />
                </CollapsibleTrigger>
                <CollapsibleContent className="px-4 py-3 text-gray-500 dark:text-gray-400">
                  Our MLT program is designed to meet international standards,
                  making our graduates competitive candidates for positions
                  around the world. However, specific certification and
                  regulatory requirements may vary by country. Alternatively,
                  feel free to contact us directly for assistance with your
                  application process.
                </CollapsibleContent>
              </Collapsible>
              <Collapsible className="space-y-2">
                <CollapsibleTrigger className="flex w-full items-center justify-between rounded-md bg-gray-100 px-4 py-3 text-lg font-medium transition-colors hover:bg-gray-200 focus:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:bg-gray-700">
                  <span>How do I apply to the MLT program?</span>
                  <ChevronDownIcon className="h-5 w-5 transition-transform [&[data-state=open]]:rotate-180" />
                </CollapsibleTrigger>
                <CollapsibleContent className="px-4 py-3 text-gray-500 dark:text-gray-400">
                  You can apply to our MLT program by visiting our admissions
                  page and completing the online application form. Be sure to
                  submit all required documents, including transcripts and any
                  prerequisite course information.
                </CollapsibleContent>
              </Collapsible>
           
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CourseContent;

function AwardIcon(props) {
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
      strokeLinejoin="round"
    >
      <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526" />
      <circle cx="12" cy="8" r="6" />
    </svg>
  );
}

function ClockIcon(props) {
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
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function ChevronDownIcon(props) {
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
      strokeLinejoin="round"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}
