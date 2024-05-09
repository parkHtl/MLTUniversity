import HowtoApply from "@/components/inhouse/HowtoApply";
import ImageGridAndText from "@/components/inhouse/ImageGridAndText";
import { BentoGrid } from "@/components/inhouse/bentoGrid";
import Header from "@/components/inhouse/header";
import SimpleCard from "@/components/mui/SimpleCard";

export default function Home() {
  return (
    <main className="">
      <div>

      </div>
      
      <div>
        <ImageGridAndText/>
      </div>
      <div>
        <BentoGrid></BentoGrid>
      </div>
      <div>
        <HowtoApply></HowtoApply>
      </div>
      
    </main>
  );
}
