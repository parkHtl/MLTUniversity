import React from "react";
import Image from "next/image";
import Link from "next/link";

function HowtoApply() {
  return (
    <div>
      <div className="flex flex-col md:flex-row  ">
        <div className="md:w-[40%] w-[full] md:h-[380px]  h-[200px] bg-[#F8CA4D] rounded-2xl flex  items-center relative md:p-[50px]">
          <Link
            className={
              "md:text-6xl text-3xl ml-6 md:m-10  font-extrabold md:w-[65%]  w-[50%] mr-auto "
            }
            href="https://pgc.edu.lk/how-to-apply/"
          >
            How to Apply &rarr;
          </Link>

          <div className="absolute md:-right-[13%] md:ml-0 ml-[55%]  w-fit">
            <Image
              className={
                " md:h-[250px] md:w-[200px] h-[140px] w-[125px] rounded-[10px] md:object-center  border-gray-300 border-b hover:scale-110 transform transition duration-500 ease-in-out"
              }
              src="/images/pgcLogo.png"
              width={200}
              height={200}
              alt="Logo"
            />
          </div>
        </div>
        <div className="w-full md:w-[60%] md:px-[100px] py-[30px]">
          <div className={"flex flex-col gap-[40px]"}>
            <h1 className="text-3xl  font-bold ">
              We Are A University Of Excellence!
            </h1>
            <p className={"text-gray-600 md:text-[20px] text-lg md:leading-10  text-justify"}>
              We offer study abroad programmes, healthcare, education,
              immigration services, and real estate development. PGC provides
              university foundation, Diploma, Advance Diploma, Degree and
              Masters level programs from leading Universities of the world. Our
              investment portfolios are connected to Belarus, Finland, Portugal,
              Russia, Sweden, the UK, and Uzbekistan. We have been active in the
              Sri Lankan market since 1996. Our business is developing
              aggressively in certain areas
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HowtoApply;
