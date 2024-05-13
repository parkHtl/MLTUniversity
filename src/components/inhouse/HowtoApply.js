import React from "react";
import Image from "next/image";

function HowtoApply() {
  return (
    <div>
      <div className="flex flex-col md:flex-row  ">
        <div className="md:w-[40%] bg-[#F8CA4D] flex justify-end items-center relative md:p-[50px]">
          <h2 className={'text-[30px] font-extrabold w-[65%] mr-auto'}>
            We are a university of excellence
          </h2>
          <div className="absolute -right-[13%] w-fit">
            <Image
                className={'object-cover rounded-[10px] object-center border-gray-300 border-b hover:scale-110 transform transition duration-500 ease-in-out'}
                src="/images/logo.png"
                width={200}
                height={200}
                alt="Logo"
            />
          </div>
        </div>
        <div className="w-full md:w-[60%] md:px-[100px] py-[30px]">
          <div className={'flex flex-col gap-[40px]'}>
            <h1 className="text-3xl  font-bold ">We Are A University Of Excellence!</h1>
            <p className={"text-gray-600 text-[20px] leading-10 text-justify"}>
              We offer study abroad programmes, healthcare, education,
              immigration services, and real estate development. PGC provides
              university foundation, Diploma, Advance Diploma, Degree and
              Masters level programs from leading Universities of the world. Our
              investment portfolios are connected to Belarus, Finland, Portugal,
              Russia, Sweden, the UK, and Uzbekistan. We have been active in the
              Sri Lankan market since 1996. Our business is developing
              aggressively in certain areas.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HowtoApply;
