import {Collapsible, CollapsibleContent, CollapsibleTrigger} from "@/components/ui/collapsible";
import {ChevronDownIcon} from "lucide-react";
import React from "react";

const FAQ = ()=>{
    return (
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
                            <CollapsibleTrigger
                                className="flex w-full items-center justify-between rounded-md bg-gray-100 px-4 py-3 text-lg font-medium transition-colors hover:bg-gray-200 focus:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:bg-gray-700">
                                <span>What is a Medical Laboratory Technologist (MLT)?</span>
                                <ChevronDownIcon
                                    className="h-5 w-5 transition-transform [&[data-state=open]]:rotate-180"/>
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
                            <CollapsibleTrigger
                                className="flex w-full items-center justify-between rounded-md bg-gray-100 px-4 py-3 text-lg font-medium transition-colors hover:bg-gray-200 focus:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:bg-gray-700">
                  <span>
                    What qualifications do I need to enroll in the MLT program?
                  </span>
                                <ChevronDownIcon
                                    className="h-5 w-5 transition-transform [&[data-state=open]]:rotate-180"/>
                            </CollapsibleTrigger>
                            <CollapsibleContent className="px-4 py-3 text-gray-500 dark:text-gray-400">
                                To enroll in our MLT program, you need a minimum of 3 simple
                                passes in A-levels, including chemistry, or an equivalent
                                foundation. Please check our admissions page for detailed
                                requirements.
                            </CollapsibleContent>
                        </Collapsible>
                        <Collapsible className="space-y-2">
                            <CollapsibleTrigger
                                className="flex w-full items-center justify-between rounded-md bg-gray-100 px-4 py-3 text-lg font-medium transition-colors hover:bg-gray-200 focus:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:bg-gray-700">
                                <span>How long does the MLT program take to complete?</span>
                                <ChevronDownIcon
                                    className="h-5 w-5 transition-transform [&[data-state=open]]:rotate-180"/>
                            </CollapsibleTrigger>
                            <CollapsibleContent className="px-4 py-3 text-gray-500 dark:text-gray-400">
                                {`Our MLT program is designed to be completed in 2 years. The program includes both classroom instruction and hands-on laboratory training.
`}
                            </CollapsibleContent>
                        </Collapsible>
                        <Collapsible className="space-y-2">
                            <CollapsibleTrigger
                                className="flex w-full items-center justify-between rounded-md bg-gray-100 px-4 py-3 text-lg font-medium transition-colors hover:bg-gray-200 focus:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:bg-gray-700">
                  <span>
                    What kind of hands-on experience will I get in the program?
                  </span>
                                <ChevronDownIcon
                                    className="h-5 w-5 transition-transform [&[data-state=open]]:rotate-180"/>
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
                            <CollapsibleTrigger
                                className="flex w-full items-center justify-between rounded-md bg-gray-100 px-4 py-3 text-lg font-medium transition-colors hover:bg-gray-200 focus:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:bg-gray-700">
                  <span>
                    Are there on-the-job training opportunities included in the
                    program?
                  </span>
                                <ChevronDownIcon
                                    className="h-5 w-5 transition-transform [&[data-state=open]]:rotate-180"/>
                            </CollapsibleTrigger>
                            <CollapsibleContent className="px-4 py-3 text-gray-500 dark:text-gray-400">
                                Yes, our program includes on-the-job training opportunities
                                with our industry partners. These on-the-job trainings provide
                                real-world experience and can help you build professional
                                connections in the healthcare field.
                            </CollapsibleContent>
                        </Collapsible>
                        <Collapsible className="space-y-2">
                            <CollapsibleTrigger
                                className="flex w-full items-center justify-between rounded-md bg-gray-100 px-4 py-3 text-lg font-medium transition-colors hover:bg-gray-200 focus:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:bg-gray-700">
                  <span>
                    What career opportunities are available after completing the
                    MLT program?
                  </span>
                                <ChevronDownIcon
                                    className="h-5 w-5 transition-transform [&[data-state=open]]:rotate-180"/>
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
                            <CollapsibleTrigger
                                className="flex w-full items-center justify-between rounded-md bg-gray-100 px-4 py-3 text-lg font-medium transition-colors hover:bg-gray-200 focus:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:bg-gray-700">
                  <span>
                    Can I work internationally with an MLT qualification from
                    this program?
                  </span>
                                <ChevronDownIcon
                                    className="h-5 w-5 transition-transform [&[data-state=open]]:rotate-180"/>
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
                            <CollapsibleTrigger
                                className="flex w-full items-center justify-between rounded-md bg-gray-100 px-4 py-3 text-lg font-medium transition-colors hover:bg-gray-200 focus:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:bg-gray-700">
                                <span>How do I apply to the MLT program?</span>
                                <ChevronDownIcon
                                    className="h-5 w-5 transition-transform [&[data-state=open]]:rotate-180"/>
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
    );
}

export default FAQ;