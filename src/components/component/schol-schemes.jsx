
import Link from "next/link"

export function ScholSchemes() {
  return (
    (<section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="grid gap-8">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              PGC EDUCATION SCHOLARSHIP SCHEMES
            </h2>
            <p
              className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Up to 75% scholarships out of the course fees!
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div
              className="grid gap-4 rounded-lg border bg-background p-6 shadow-sm transition-all hover:shadow-md">
              <div>
                <h3 className="text-xl font-semibold">MERIT BASED SCHOLARSHIPS</h3>
                <p className="text-muted-foreground">Awarded to students with outstanding academic achievements.</p>
              </div>

            </div>
            <div
              className="grid gap-4 rounded-lg border bg-background p-6 shadow-sm transition-all hover:shadow-md">
              <div>
                <h3 className="text-xl font-semibold">Need-Based Scholarship</h3>
                <p className="text-muted-foreground">
                  Financial assistance for students with demonstrated financial need.
                </p>
              </div>

            </div>
            <div
              className="grid gap-4 rounded-lg border bg-background p-6 shadow-sm transition-all hover:shadow-md">
              <div>
                <h3 className="text-xl font-semibold">Athletic Scholarship</h3>
                <p className="text-muted-foreground">
                  Awarded to talented student-athletes to support their academic and athletic pursuits.
                </p>
              </div>

            </div>

          </div>
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
