import HowtoApply from "@/components/inhouse/HowtoApply";
import ImageGridAndText from "@/components/inhouse/ImageGridAndText";
import Header from "@/components/inhouse/header";
import SimpleCard from "@/components/mui/SimpleCard";
import {Globe} from "@/components/acui/glob";
import {GlobeDemo} from "@/components/inhouse/GlobalAnimation";
import {InfiniteMovingCardsScroll} from "@/components/inhouse/infinityCard";
import {HeroComponent} from "@/components/inhouse/HeroComponent";
import {BentoGrid} from "@/components/inhouse/bentoGrid";

export default function Home() {
  return (
      <div>
          <HeroComponent/>

          <div className={'flex mt-[50px]'}>
              <GlobeDemo/>
              <div className={' py-[50px] flex flex-col gap-[30px] justify-center font-bold'}>
                  <h2 className={'text-3xl'}>Global Community: Diverse Perspectives</h2>
                  <p className={'text-gray-600'}>Embrace the rich tapestry of cultures, traditions, and viewpoints that
                      converge
                      within our university's global community.
                      Our institution proudly hosts students from around the world,
                      fostering an environment where diversity thrives and differences are celebrated.
                      Explore the myriad of perspectives that enrich our academic discourse and contribute to a
                      vibrant campus experience.</p>
              </div>
          </div>
         <div className={'my-[6' +
             '0px]'}> <BentoGrid/></div>
          <div>
              <ImageGridAndText/>
          </div>
          <div>
              <InfiniteMovingCardsScroll/>
          </div>
          <div>
              <HowtoApply></HowtoApply>
          </div>


      </div>
  );
}
