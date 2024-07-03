import AboutUs from "@/components/inhouse/AboutUs";
import FadeInComponent from "@/components/inhouse/fadeInComponent";
import React from "react";

export default function Page() {
  return (
    <div className="px-2 w-screen">
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <FadeInComponent>
            <div className="space-y-2 flex-col justify-center items-center">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl text-center ">
                About Us
              </h1>
              <p className="max-w-[] text-gray-700 md:text-xl text-center pt-10">
                We offer study abroad programmes, healthcare, education,
                immigration services, and real estate development. PGC provides
                university foundation, Diploma, Advance Diploma, Degree and
                Masters level programs from leading Universities of the world.
                Our investment portfolios are connected to Belarus, Finland,
                Portugal, Russia, Sweden, the UK, and Uzbekistan. We have been
                active in the Sri Lankan market since 1996. Our business is
                developing aggressively in certain areas.
              </p>
            </div>
            </FadeInComponent>

            <FadeInComponent>
              <img
                src="/images/6.png"
                width="600"
                height="400"
                alt="MLT Course"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
              />
            </FadeInComponent>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter mb-8 md:text-4xl text-center">
            Program Consultant and Academic Panel
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {[
              {
                src: "/images/fernando.jpeg",
                name: "Dr. H.H.L.K. Fernando",
                qualifications: "MBBS,PGD, MSc, M Phil, PhD (Reading)",
                description:
                  "Senior Lecturer in Anatomy, Head Department of Medical Information and Digital Health",
              },
              {
                src: "/images/sivanathan.jpeg",
                name: "Dr. V. Sivanathan",
                qualifications: "MBBS, DFM",
                description:
                  "Chief Medical Officer – Park Hospital, Deputy Chairman – PGC Senate, honorary lecturer, programme Consultant",
              },
              {
                src: "/images/rasanjalee.jpeg",
                name: "Dr. Rasanjalee Abeywickrama",
                qualifications: "BA, M.Sc App.Gen.",
                description:
                  "Senior Programme, Consultant, Lecturing experience 14 years",
              },
              {
                src: "/images/richard.jpeg",
                name: "Mr. Richard Abeysinghe",
                qualifications:
                  "MSc. OHS (Colombo), MBA (Reading) (Solent), Pg.Dip. OHS (Colombo), BSc. Biomedical Science (Wolverhampton)",
                description: "Head of Academics, Lecturing experience 4 years",
              },
            ].map((member, index) => (
              
              <div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-lg transform transition duration-500 hover:scale-105"
              >
                <div className="relative">
                  <img
                    src={member.src}
                    width="400"
                    height="400"
                    alt={member.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent p-4">
                    <h3 className="text-lg font-bold text-white">
                      {member.name}
                    </h3>
                    <p className="text-sm text-white">
                      {member.qualifications}
                    </p>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-gray-700">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
