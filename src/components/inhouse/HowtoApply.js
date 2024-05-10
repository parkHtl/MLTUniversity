import React from "react";
import Image from "next/image";

function HowtoApply() {
  return (
    <div>
      <div className="flex ">
        <div className="w-[40%] bg-[#F8CA4D] flex justify-end items-center relative p-[50px]">
          <h2 className={'text-[35px] font-extrabold w-[70%] mr-auto'}>
            We are a university of excellence
          </h2>
          <div className="absolute -right-[13%] w-fit">
            <Image
                className={'object-cover rounded-[10px] object-center border-gray-300 border-b'}
                src="/images/logo.png"
                width={200}
                height={200}
                alt="Logo"
            />
          </div>
        </div>
        <div className="w-[60%] px-[100px] py-[30px]">
          <div className={'flex flex-col gap-[40px]'}>
            <h1 className="text-3xl  font-bold ">MLT BEYOND 2023</h1>
            <p className="text-lg text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              nec purus sit amet tortor tincidunt rhoncus Gathering momentum
              from the promising journey over the past successful years, NSBM
              sets the green university experience to the next level with the
              Phase II. This giant step in crafting a future of greater impact
              gives unwavering faith to envision the university’s vision and
              purpose from a broader perspective. The Phase 2 developments in
              another 15 acres of land adjoining the existing premises are
              currently in progress and believed to be a key driver of the
              NSBM’s future growth to further expand its services and
              opportunities to the generations to come as well as to impact the
              world at large. The master plan for Phase II encompasses the
              following main facilities.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HowtoApply;
