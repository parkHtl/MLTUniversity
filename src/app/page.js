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

export default function Home() {
  return (
    <div className=" px-3 py-5  min-h-[200vh] w-full">
      <HeroComponent />
      <div className="mt-2">
        <CourseContent />
      </div>

      <div className="flex flex-col md:flex-row items-center md:items-center md:gap-16 mt-8 md:mt-12">
        <div className="md:ml-0 -ml-12">
        <GlobeDemo />
        </div>
        <div className=" md:py-0 flex flex-col md:mt-0 -mt-32 gap-4 md:gap-6">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">
            FURTHER EDUCATION OPPORTUNITIES
          </h2>
          <p className="text-gray-600 text-base md:text-lg md:lg:text-xl leading-7 md:leading-8 text-justify">
            The PGC Diploma in MLT students could opt to transfer to any
            healthcare related (Bio Medicine, Bio Technology, Nursing,
            Microbiology, Biology Medical Laboratory Science, etc.) In
            corresponding year of bachelors overseas in more than 60 University
            partners in over 20 countries including and but not limiting to
            Canada, UK, Australia, France, Singapore, Malaysia. Contact PATHE
            Study Aboard for more information.
            <a
              href="www.pathestudyabroad.lk"
              className="text-blue-600 hover:underline"
            >
              www.pathestudyabroad.lk
            </a>
          </p>
        </div>
      </div>

      <div className={"my-[60px]"}>
        {" "}
        <BentoGrid />
      </div>
      <div className="mt-16">
        
          {" "}
          <ImageGridAndText />
        
      </div>
      <div className=" mt-5 md:ml-5 text-[#1F3042] md:text-start text-center underline font-semibold text-xl">
        
          <Link href="/fulldetails">Full Course Details  &rarr;</Link> 
        
      </div>
      <FadeInComponent>
        <div>
          <h2 className={"text-3xl text-justify font-bold mt-[50px]"}>
            FURTHER EDUCATION OPPORTUNITIES
          </h2>
          <StickyScrollReveal />
        </div>
      </FadeInComponent>

      <div className="mt-16">
        
          <Partners />
       
      </div>
      <div className="mt-16">
        <FadeInComponent>
          <HowtoApply />
        </FadeInComponent>
      </div>
    </div>
  );
}
