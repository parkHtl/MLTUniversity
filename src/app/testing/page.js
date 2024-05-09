import SimpleCard from "@/components/mui/SimpleCard";
import ImageCard from "@/components/mui/ImageCard";
import React from "react";
import { BentoGrid } from "@/components/inhouse/bentoGrid";
import AboutUs from "@/components/inhouse/AboutUs";

function page() {
  return (
    <>
      <div>{/* <SimpleCard /> */}</div>
      <div className=" m-5">
        <ImageCard />
        {/*<SimpleCard />*/}
        <BentoGrid />
      </div>
    </>
  );
}

export default page;
