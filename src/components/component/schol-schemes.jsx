import Link from "next/link";

export function ScholSchemes() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 ">
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
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="card-animation grid gap-4 rounded-lg border bg-white p-6 shadow-sm transition-transform duration-500 hover:shadow-md hover:bg-gray-50 hover:scale-105">
              <div>
                <h3 className="text-xl font-semibold text-gray-700">MERIT BASED SCHOLARSHIPS</h3>
                <p className="text-gray-600">Awarded to students with outstanding academic achievements.</p>
              </div>
            </div>
            <div className="card-animation grid gap-4 rounded-lg border bg-white p-6 shadow-sm transition-transform duration-500 hover:shadow-md hover:bg-gray-50 hover:scale-105">
              <div>
                <h3 className="text-xl font-semibold text-gray-700">Need-Based Scholarship</h3>
                <p className="text-gray-600">
                  Financial assistance for students with demonstrated financial need.
                </p>
              </div>
            </div>
            <div className="card-animation grid gap-4 rounded-lg border bg-white p-6 shadow-sm transition-transform duration-500 hover:shadow-md hover:bg-gray-50 hover:scale-105">
              <div>
                <h3 className="text-xl font-semibold text-gray-700">Athletic Scholarship</h3>
                <p className="text-gray-600">
                  Awarded to talented student-athletes to support their academic and athletic pursuits.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


