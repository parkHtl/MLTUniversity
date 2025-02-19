
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import React from "react";
import Image from "next/image";

export function ScholInfo() {
  return (
    (<div className="flex flex-col min-h-[100dvh]">
    <section className="w-full flex flex-col items-center justify-center py-5 md:py-5 lg:py-32 bg-cover bg-center relative ">
  <div className="absolute inset-0">
    <Image
      src="/images/CHA_7725.JPG"
      alt="Gems"
      layout="fill"
      objectFit="cover"
      className="object-cover"
    />
  </div>
  <div className="container relative px-4 md:px-6 flex flex-col items-center justify-center text-center space-y-6">
    <div className="max-w-3xl space-y-4 bg-white bg-opacity-80 p-6 rounded-lg shadow-lg">
      <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
        Scholarship Opportunities
      </h1>
      <p className="text-lg text-gray-500 md:text-xl dark:text-gray-400">
        {`Dreaming of a career as a Medical Laboratory Technologist but need financial assistance? We offer scholarships to help you achieve your goals. Click here to learn more about our scholarship opportunities and start your application process.`}
      </p>
    </div>
  </div>
</section>

      <section className={'w-full text-center pt-10'}>
        <h2
            className="text-3xl font-bold tracking-tighter text-primary-foreground sm:text-2xl md:text-3xl">
          {`PGC Education Scholarship Schemes`}
        </h2>
        <p
            className="text-lg  tracking-tighter text-gray-500 sm:text-lg md:text-xl">
          {`Up to 75% scholarships out of the course fees!
`}
        </p>
      </section>
      <section className={'w-full text-center'}>
        <p className="mx-auto max-w-[700px] text-primary-foreground md:text-xl mt-7">
          {`Our scholarships are designed to support dedicated students who are passionate about making a difference in healthcare. Don’t let financial barriers hold you back—apply for a scholarship today!`}  </p>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div
            className="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 md:px-6 ml-auto mr-auto">
          <Card>
            <CardHeader>
              <CardTitle>Merit-Based Scholarships</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mt-2">{`Awarded to students who demonstrate outstanding academic performance, involvement in extracurricular activities (such as clubs, societies, charity, or arts), or excellence in sports.`}</p>

              <ul className="text-muted-foreground mt-[10px]">
                <li>{`- Higher grades for Education`}</li>
                <li>{`- Extra Curricular Activity (clubs/societies/charity/arts)`}</li>
                <li>{`- Sports`}</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Financial Need-Based Scholarships</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Designed to assist students who require financial support to pursue
                their education, ensuring that financial barriers do not hinder their academic and career goals.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Special Excellence Scholarships</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mt-2">
                {`Granted to students who exhibit exceptional achievements or talents not covered by the other criteria, recognizing unique contributions and accomplishments.`}
              </p>
            </CardContent>
          </Card>
        </div>

        <br></br>
        
        <div className="flex justify-center mt-6">
    <div className="bg-card rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow text-center flex flex-col items-center bg-slate-300 hover:bg-gray-300 max-w-lg w-full">
      <div className="flex items-center gap-4 flex-col">
        <div className="bg-muted text-muted-foreground rounded-full p-3"></div>
        <h3 className="text-xl font-semibold">Scholarships Application Form</h3>
      </div>
      <p className="mt-2 text-muted-foreground">
        Fill out our PGC Education online Scholarship Application Form
      </p>
      <div className="flex gap-3 justify-center items-center mt-4 md:flex-row flex-col">
        <Link
          href="https://forms.gle/LzYReR8UBV3V12qX9"
          className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
          prefetch={false}
        >
          Apply Now
        </Link>
      </div>
    </div>
    </div>
        
      </section>

    </div>)
  );
}
