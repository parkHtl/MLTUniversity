import FadeInComponent from "@/components/inhouse/fadeInComponent";
import React from "react";

export function AdmissionCrit() {
  return (
    (<section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800 flex flex-col items-center">
      <div className="container px-4 md:px-6">
        <FadeInComponent>
          <div
              className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Admission Criteria</h2>
              <p
                  className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Learn about the key requirements to get admitted to our course.
              </p>
            </div>
          </div>
        </FadeInComponent>
        <FadeInComponent>
          <div
              className="mx-auto grid max-w-5xl items-start gap-6 py-12 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <p className="text-gray-500 dark:text-gray-400">
                Entry requires one of the following prerequisites:
              </p>

              <ul className="list-disc space-y-2 pl-6 text-gray-500 dark:text-gray-400">
                <li>Qualify in the GCE Advanced Level/ High school with a Chemistry as a subject</li>
                <li>Conditional admissions with requirement to complete chemistry module are encouraged for those qualified in Advanced Level but lacking chemistry as a subject</li>
                <li>A foundation program for a university degree that is recognized by UGC recognized degree awarding institution</li>
                <li>Recognized MLT Certificate</li>
              </ul>

            </div>
            <img
                alt="Admission Criteria"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
                height="310"
                src="/images/2.png"
                width="550"/>
          </div>
        </FadeInComponent>
      </div>
    </section>)
  );
}
