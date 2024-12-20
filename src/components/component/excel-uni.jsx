
import Link from "next/link"
import Image from "next/image"

export function ExcelUni() {
  return (
    (<section className="w-full py-12 md:py-24 lg:py-32 flex justify-center">
      <div className="container px-4 md:px-6">
        <div
          className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <Image
            alt="University of Excellence"
            className="mx-auto aspect-video overflow-hidden rounded-xl  sm:w-full lg:order-last object-contain "
            src="/images/pgcLogo.png"
            width={500}
            height={500}
          />
          <div className="flex flex-col justify-center space-y-4 ml-10">
            <div className="space-y-2 ">
              <h1
                className="text-4xl font-bold tracking-tighter sm:text-6xl xl:text-7xl/none">
                PGC Education
              </h1>
              <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                Ranked among the top campuses in the world, PGC is renowned for its exceptional academic programs, cutting-edge research, and vibrant campus life. Discover a transformative educational experience that will empower you to reach new heights.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link
                className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                href="/apply">
                Apply Now
              </Link>
             
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link 
                className="inline-flex h-10 items-center justify-center rounded-md bg-white px-8 text-sm font-medium text-gray-900 shadow transition-colors hover:bg-gray-100/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                href="https://pgc.edu.lk/">
                More Info
              </Link>
             
            </div>
            </div>
          </div>
        </div>
      </div>
    </section>)
  );
}
