import HowtoApply from "@/components/inhouse/HowtoApply";
import ImageGridAndText from "@/components/inhouse/ImageGridAndText";
import Header from "@/components/inhouse/header";
import SimpleCard from "@/components/mui/SimpleCard";
import { Globe } from "@/components/acui/glob";
import { GlobeDemo } from "@/components/inhouse/GlobalAnimation";
import { InfiniteMovingCardsScroll } from "@/components/inhouse/infinityCard";
import { HeroComponent } from "@/components/inhouse/HeroComponent";
import { BentoGrid } from "@/components/inhouse/bentoGrid";

export default function Home() {
  return (
    <div>
      <HeroComponent />

      <div className={"flex mt-[50px]"}>
        <GlobeDemo />
        <div
          className={
            " py-[50px] flex flex-col gap-[30px] justify-center font-bold"
          }
        >
          <h2 className={"text-3xl"}>FURTHER EDUCATION OPPORTUNITIES</h2>
          <p className={"text-gray-600"}>
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
      <div className={"my-[60px]"}>

        <BentoGrid />
      </div>
      <div>
        <ImageGridAndText />
      </div>
      <div>
        <InfiniteMovingCardsScroll />
      </div>
      <div>
        <HowtoApply></HowtoApply>
      </div>
    </div>
  );
}
