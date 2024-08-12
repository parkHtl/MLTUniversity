
import ImageGridAndText from "@/components/inhouse/ImageGridAndText";

import Partners from "@/components/inhouse/Partners";
import FadeInComponent from "@/components/inhouse/fadeInComponent";

import CourseContent from "@/components/inhouse/CourseContent";
import {FurtherEd} from "@/components/component/further-ed";
import {ExcelUni} from "@/components/component/excel-uni";
import {AdmissionCrit} from "@/components/component/admission-crit";
import React from "react";

import {ScholSchemes} from "@/components/component/schol-schemes";

import NewHeroSection from "@/components/inhouse/NewHeroSection";
import {StudentReviews} from "@/components/component/student-reviews";
import {VideoStream} from "@/components/component/video-stream";
import Country from "@/components/inhouse/Country";
import {AffilComp} from "@/components/component/affilComp";

export default function Home() {
  return (
      <div className=" px-3 py-5  min-h-[200vh] w-full">
          <div>
              <NewHeroSection/>
          </div>


          <div className="md:-mt-44 -mt-32">
              <CourseContent/>
          </div>
          <div className="">

              <StudentReviews/>

          </div>
          <div className="">

              <VideoStream/>

          </div>

          <div className={"my-[60px]"}>

              <AdmissionCrit/>
          </div>
          <div className="mt-16">

              {" "}
              <ImageGridAndText/>

          </div>

          <FadeInComponent>
              <div>
                  <h2 className={"text-3xl text-center font-bold mt-[50px] mb-10"}>
                      FURTHER EDUCATION OPPORTUNITIES
                  </h2>
                  {/* <StickyScrollReveal/> */}
                  <Country/>
              </div>
          </FadeInComponent>
          <div className="mt-2">
              <ScholSchemes/>
          </div>

          <div className="mt-16">

              <Partners/>

          </div>
          <div className="mt-16">
              <FadeInComponent>
                  <ExcelUni/>
              </FadeInComponent>
          </div>
          <div className="mt-2">
              <FurtherEd/>
          </div>
          <div className="mt-2">
              <AffilComp/>
          </div>
          {/*<div className="mt-16">*/}
          {/*    <FAQ/>*/}
          {/*</div>*/}
      </div>
  );
}
