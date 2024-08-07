import HowtoApply from "@/components/inhouse/HowtoApply";
import ImageGridAndText from "@/components/inhouse/ImageGridAndText";
import Header from "@/components/inhouse/header";
import SimpleCard from "@/components/mui/SimpleCard";
import { Globe } from "@/components/acui/glob";
import { GlobeDemo } from "@/components/inhouse/GlobalAnimation";
import { InfiniteMovingCardsScroll } from "@/components/inhouse/infinityCard";
import { HeroComponent } from "@/components/inhouse/HeroComponent";
import { BentoGrid } from "@/components/inhouse/bentoGrid";
import { StickyScrollReveal } from "@/components/inhouse/stickyScroll";
import Partners from "@/components/inhouse/Partners";
import FadeInComponent from "@/components/inhouse/fadeInComponent";
import Link from "next/link";
import CourseContent from "@/components/inhouse/CourseContent";
import {FurtherEd} from "@/components/component/further-ed";
import {ExcelUni} from "@/components/component/excel-uni";
import {AdmissionCrit} from "@/components/component/admission-crit";
import {Collapsible, CollapsibleContent, CollapsibleTrigger} from "@/components/ui/collapsible";
import React from "react";
import {ChevronDownIcon} from "lucide-react";
import FAQ from "@/components/inhouse/faq";
import {ScholSchemes} from "@/components/component/schol-schemes";

import NewHeroSection from "@/components/inhouse/NewHeroSection";
import {StudentReviews} from "@/components/component/student-reviews";
import {VideoStream} from "@/components/component/video-stream";
import Country from "@/components/inhouse/Country";

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

              <StudentReviews />

          </div>
          <div className="">

              <VideoStream />

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
          {/*<div className="mt-16">*/}
          {/*    <FAQ/>*/}
          {/*</div>*/}
      </div>
  );
}
