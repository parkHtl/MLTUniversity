
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import React from "react";

export function ScholInfo() {
  return (
    (<div className="flex flex-col min-h-[100dvh]">
      <section
          className="w-full py-12 md:py-24 lg:py-32 bg-primary bg-gray-900 flex flex-col justify-center items-center mb-4 bg-[url('/images/3.png')] bg-cover ">
        <div className="container px-4 md:px-6 text-center ">
          <div className="space-y-4">
            <h1
                className="text-3xl font-bold tracking-tighter text-primary-foreground sm:text-5xl md:text-6xl">
              Scholarship Opportunities
            </h1>
            <p className="mx-auto max-w-[700px] text-primary-foreground md:text-xl">
              {`Dreaming of a career as a Medical Laboratory Technician but need financial assistance? We offer scholarships to help you achieve your goals. Click here to learn more about our scholarship opportunities and start your application process.`}
            </p>
          </div>
        </div>
      </section>
      <section className={'w-full text-center'}>
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
      </section>

    </div>)
  );
}
