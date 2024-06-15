
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
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Expand Your Horizons</h2>
              <p
                  className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Discover our wide range of educational opportunities to help you grow and succeed.
              </p>
            </div>
          </div>
        </FadeInComponent>
        <div
            className="mx-auto grid max-w-5xl gap-6 py-12 sm:grid-cols-2 lg:grid-cols-3">
          <FadeInComponent>
            <div
                className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-950 dark:border-gray-800">
              <div className="grid gap-2">
                <img
                    alt="Web Development Bootcamp"
                    className="rounded-lg object-cover w-full aspect-[4/3]"
                    height={300}
                    src="/images/2.png"
                    width={400}/>
                <h3 className="text-xl font-semibold">Assured admission to bachelors</h3>
                <p className="text-gray-500 dark:text-gray-400">PGC Diploma in MLT Students are assured admission to bachelors studies within an
                  existing framework of articulation agreements</p>

              </div>
            </div>
          </FadeInComponent>
          <FadeInComponent>
            <div
                className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-950 dark:border-gray-800">
              <div className="grid gap-2">
                <img
                    alt="Data Science Certification"
                    className="rounded-lg object-cover w-full aspect-[4/3]"
                    height={300}
                    src="/images/4.png"
                    width={400}/>
                <h3 className="text-xl font-semibold">Transfer to overseas</h3>
                <p className="text-gray-500 dark:text-gray-400">students could opt to transfer to any healthcare related
                  (Bio Medicine, Bio Technology, Nursing, Microbiology, Biology Medical Laboratory Science,
                  etc.) In corresponding year of bachelors overseas</p>

              </div>
            </div>
          </FadeInComponent>
          <FadeInComponent>
            <div
                className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-950 dark:border-gray-800">
              <div className="grid gap-2">
                <img
                    alt="Digital Marketing Masterclass"
                    className="rounded-lg object-cover w-full aspect-[4/3]"
                    height={300}
                    src="/images/6.png"
                    width={400}/>
                <h3 className="text-xl font-semibold">University partners</h3>
                <p className="text-gray-500 dark:text-gray-400">More than 60 University partners in
                  over 20 countries including and but not limiting to Canada, UK, Australia, France,
                  Singapore, Malaysia</p>

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
        <path d="M5 12h14"/>
        <path d="m12 5 7 7-7 7"/>
      </svg>)
  );
}
