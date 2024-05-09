import React from "react";
import Textcontent from "@/components/inhouse/Textcontent";
import ImageCard from "@/components/mui/ImageCard";

function page() {
  return (
    <div>
      <div className="flex flex-row gap-16 justify-between ml-10 mr-10  ">
        <div className=" flex-auto w-[40%]  ">
          <Textcontent />
        </div>
        <div className="flex-end  ">
        <ImageCard />
        </div>
      </div>
    </div>
  );
}

export default page;
