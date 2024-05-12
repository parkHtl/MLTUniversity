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

export default function Home() {
  return (
    <div>
      <FadeInComponent><HeroComponent /></FadeInComponent>

        <FadeInComponent>
            <div className={"flex mt-[50px]"}>
                <GlobeDemo/>
                <div className={" py-[50px] flex flex-col gap-[30px] justify-center "}>
                    <h2 className={"text-3xl font-bold"}>
                        FURTHER EDUCATION OPPORTUNITIES
                    </h2>
                    <p className={"text-gray-600 text-[20px] leading-10 text-justify"}>
                        The PGC Diploma in MLT students could opt to transfer to any
                        healthcare related (Bio Medicine, Bio Technology, Nursing,
                        Microbiology, Biology Medical Laboratory Science, etc.) In
                        corresponding year of bachelors overseas in more than 60 University
                        partners in over 20 countries including and but not limiting to
                        Canada, UK, Australia, France, Singapore, Malaysia. Contact PATHE
                        Study Aboard for more information. www.pathestudyabroad.lk
                    </p>
                </div>
            </div>
        </FadeInComponent>
        <div className={"my-[60px]"}>
            <FadeInComponent> <BentoGrid/></FadeInComponent>
        </div>
        <div className="mt-16">
            <FadeInComponent> <ImageGridAndText/></FadeInComponent>

        </div>
        <FadeInComponent>
            <div>
                <h2 className={"text-3xl font-bold mt-[50px]"}>
                    FURTHER EDUCATION OPPORTUNITIES
                </h2>
                <StickyScrollReveal/>
            </div>
        </FadeInComponent>

        <div className="mt-16">
            <FadeInComponent><Partners/></FadeInComponent>
        </div>
        <div className="mt-16">
            <FadeInComponent><HowtoApply/></FadeInComponent>
        </div>
    </div>
  );
}
