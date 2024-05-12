import React from "react";
import Textcontent from "@/components/inhouse/Textcontent";
import ImageCard from "@/components/mui/ImageCard";

function ImageGridAndText() {
  return (
    <div className="flex flex-col items-center justify-center md:flex-row md:gap-16 md:justify-between">
      <div className="w-full md:w-2/5">
        <Textcontent />
      </div>
      <div className="mt-8 md:mt-0 w-full md:w-3/5">
        <ImageCard />
      </div>
    </div>
  );
}

export default ImageGridAndText;
