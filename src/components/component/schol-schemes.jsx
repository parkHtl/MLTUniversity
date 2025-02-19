import Link from "next/link";

export function ScholSchemes() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-12 bg-gray-50 ">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-8">
          <div className="space-y-2 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-800">
              PGC EDUCATION SCHOLARSHIP SCHEMES
            </h2>
            <p className="max-w-[700px] mx-auto text-gray-600 md:text-xl lg:text-base xl:text-xl">
              Up to 75% scholarships out of the course fees!
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
            <div className="card-animation grid gap-4 rounded-lg border bg-white p-6 shadow-sm transition-transform duration-500 hover:shadow-md hover:bg-gray-50 hover:scale-105">
              <div>
                <h3 className="text-xl font-semibold text-gray-700">MERIT BASED SCHOLARSHIPS</h3>
                <p className="text-gray-600">Awarded to students with outstanding academic achievements.</p>
                <br></br>
                <Link
                  href="/scholarships"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                  prefetch={false}>
                Learn More
              </Link>
              </div>
            </div>
            <div className="card-animation grid gap-4 rounded-lg border bg-white p-6 shadow-sm transition-transform duration-500 hover:shadow-md hover:bg-gray-50 hover:scale-105">
              <div>
                <h3 className="text-xl font-semibold text-gray-700">Need-Based Scholarship</h3>
                <p className="text-gray-600">
                  Financial assistance for students with demonstrated financial need.
                </p>
                <br></br>
                <Link
                  href="/scholarships"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                  prefetch={false}>
                Learn More
              </Link>
              </div>
            </div>
            {/* <div className="card-animation grid gap-4 rounded-lg border bg-white p-6 shadow-sm transition-transform duration-500 hover:shadow-md hover:bg-gray-50 hover:scale-105">
              <div>
                <h3 className="text-xl font-semibold text-gray-700">Athletic Scholarship</h3>
                <p className="text-gray-600">
                  Awarded to talented student-athletes to support their academic and athletic pursuits.
                </p>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}


