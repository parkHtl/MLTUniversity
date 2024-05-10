import React from "react";

function HowtoApply() {
  return (
    <div>
      <div className="flex flex-row gap-16 items-stretch ">
        <div className="flex w-[50%]  h-[500px] bg-slate-500">
          <div className="flex justify-center items-center  h-full">
            <img
              src="https://images.unsplash.com/photo-1549388604-817d15aa0110"
              alt="bed"
              className="h-[400px] w-[400px]"
            />
          </div>
        </div>
        <div className=" order-last">
          <div>
            <h1 className="text-3xl  font-bold pb-8">We Are A University Of Excellence!</h1>
            <p className="text-lg">
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
