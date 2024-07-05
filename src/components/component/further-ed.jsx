
import Link from "next/link"
import FadeInComponent from "@/components/inhouse/fadeInComponent";

export function FurtherEd() {
  return (
    (<section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800 flex flex-col justify-center">
      <div className=" px-4 md:px-6 ">
        <FadeInComponent>
          <div
            className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Explore Our Diversity
              </h2>
              <p
                className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                UN Consortium
                United Network Consortium (UN Consortium) is a leading diversified conglomerate in Sri Lanka with over 20 years of history and expanded subseries in a various businesses and investments.

              </p>
            </div>
          </div>
        </FadeInComponent>
        <div
          className="mx-auto grid max-w-5xl gap-6 py-12 sm:grid-cols-2 lg:grid-cols-3">
          <FadeInComponent>
            <div
              className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm  dark:bg-gray-950 dark:border-gray-800">
              <div className="grid gap-2">
                <img
                  alt="Web Development Bootcamp"
                  className="rounded-lg object-cover w-full aspect-[4/3]"
                  height={300}
                  src="/images/2.png"
                  width={400} />
                <h3 className="text-xl font-semibold">Our Business Areas
                </h3>
                <p className="text-gray-500 dark:text-gray-400">Healthcare, Rehabilitation & long term care projects, Property development, Luxury serviced apartments , Education, Migration solutions, Overseas student placement, Artificial intelligence & Deep learning.
                </p>

              </div>
            </div>
          </FadeInComponent>
          <FadeInComponent>
            <div
              className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm  dark:bg-gray-950 dark:border-gray-800">
              <div className="grid gap-2">
                <img
                  alt="Data Science Certification"
                  className="rounded-lg object-cover w-full aspect-[4/3]"
                  height={300}
                  src="/images/4.png"
                  width={400} />
                <h3 className="text-xl font-semibold">Park Hospitals
                </h3>
                <p className="text-gray-500 dark:text-gray-400">{`Park Hospital, founded in 1976 and renamed in 2003,
                   has over 45 years of healthcare experience. Owned by shareholders and guided by the motto "Committed to Safeguard Your Health,"
                    it offers quality, affordable medical services. Centrally located in Colombo-5 with ample parking, the newly refurbished hospital
                     provides quick access to personalized care.
                `}
                </p>

              </div>
            </div>
          </FadeInComponent>
          <FadeInComponent>
            <div
              className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm  dark:bg-gray-950 dark:border-gray-800">
              <div className="grid gap-2">
                <img
                  alt="Digital Marketing Masterclass"
                  className="rounded-lg object-cover w-full aspect-[4/3]"
                  height={300}
                  src="/images/6.png"
                  width={400} />
                <h3 className="text-xl font-semibold">PGC Education
                </h3>
                <p className="text-gray-500 dark:text-gray-400">PGC Education with an excellent history of more than a decade introduced an innovative educational format for learning health sciences.
                </p>

              </div>
            </div>
          </FadeInComponent>
          <FadeInComponent>
            <div
              className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm  dark:bg-gray-950 dark:border-gray-800">
              <div className="grid gap-2">
                <img
                  alt="Digital Marketing Masterclass"
                  className="rounded-lg object-cover w-full aspect-[4/3]"
                  height={300}
                  src="/images/B1.JPG"
                  width={400} />
                <h3 className="text-xl font-semibold">Crown Properties


                </h3>
                <p className="text-gray-500 dark:text-gray-400">Modern, Spacious & Luxury Serviced Apartments in central Colombo.

                </p>

              </div>
            </div>
          </FadeInComponent>
          <FadeInComponent>
            <div
              className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm  dark:bg-gray-950 dark:border-gray-800">
              <div className="grid gap-2">
                <img
                  alt="Digital Marketing Masterclass"
                  className="rounded-lg object-cover w-full aspect-[4/3]"
                  height={300}
                  src="/images/Picture1.jpg"
                  width={400} />
                <h3 className="text-xl font-semibold">PATHE Study Abroad

                </h3>
                <p className="text-gray-500 dark:text-gray-400">PATHE STUDY ABROAD was established in 1992 with the primary objective of addressing the need to provide assistance to an ever-growing demand for Sri Lankan professionals and students to study in foreign countries. Over the years, it has emerged as one of the leading education and career consulting companies in Sri Lanka.

                </p>

              </div>
            </div>
          </FadeInComponent>
          <FadeInComponent>
            <div
              className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm  dark:bg-gray-950 dark:border-gray-800">
              <div className="grid gap-2">
                <img
                  alt="Digital Marketing Masterclass"
                  className="rounded-lg object-cover w-full aspect-[4/3]"
                  height={300}
                  src="/images/Picture2.jpg"
                  width={400} />
                <h3 className="text-xl font-semibold">Visa Global


                </h3>
                <p className="text-gray-500 dark:text-gray-400">A leading Migration Services Provider in Sri Lanka, handle the whole process of visa application and procurement, whilst guiding and assisting you throughout the migration process.


                </p>

              </div>
            </div>
          </FadeInComponent>

        </div>
      </div>
    </section>)
  );
}

function ArrowRightIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>)
  );
}
