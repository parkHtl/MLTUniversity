import AboutUs from '@/components/inhouse/AboutUs'
import React from 'react'

export default function page() {
  return (
      <div className=' px-2 w-screen'>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    About Us
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    We offer study abroad programmes, healthcare, education, immigration
                    services, and real estate development. PGC provides university
                    foundation, Diploma, Advance Diploma, Degree and Masters level
                    programs from leading Universities of the world. Our investment
                    portfolios are connected to Belarus, Finland, Portugal, Russia,
                    Sweden, the UK, and Uzbekistan. We have been active in the Sri
                    Lankan market since 1996. Our business is developing aggressively in
                    certain areas.
                  </p>
                </div>
              </div>
              <img
                  src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
                  width="550"
                  height="550"
                  alt="Team"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
              />
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter mb-8 md:text-4xl">Program Consultant and Academic
              Panel</h2>
            <div
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              <div className="bg-background rounded-lg overflow-hidden shadow-lg">
                <div className="relative">
                  <img
                      src="/images/fernando.jpeg"
                      width="400"
                      height="400"
                      alt="John Doe"
                      className="w-full h-48 object-cover"/>
                  <div
                      className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent p-4">
                    <h3 className="text-lg font-bold text-white">Dr. H.H.L.K. Fernando</h3>
                    <p className="text-sm text-white">MBBS,PGD, MSc, M Phil, PhD (Reading)</p>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-muted-foreground">
                    Senior Lecturer in Anatomy, Head Department of Medical Information and Digital Health
                  </p>
                </div>
              </div>
              <div className="bg-background rounded-lg overflow-hidden shadow-lg">
                <div className="relative">
                  <img
                      src="/images/sivanathan.jpeg"
                      width="400"
                      height="400"
                      alt="Jane Smith"
                      className="w-full h-48 object-cover"/>
                  <div
                      className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent p-4">
                    <h3 className="text-lg font-bold text-white">Dr. V. Sivanathan</h3>
                    <p className="text-sm text-white">MBBS, DFM</p>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-muted-foreground">
                    Chief Medical Officer – Park Hospital, Deputy Chairman – PGC Senate, honorary lecturer, programme
                    Consultant
                  </p>
                </div>
              </div>
              <div className="bg-background rounded-lg overflow-hidden shadow-lg">
                <div className="relative">
                  <img
                      src="/images/rasanjalee.jpeg"
                      width="400"
                      height="400"
                      alt="Michael Johnson"
                      className="w-full h-48 object-cover"/>
                  <div
                      className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent p-4">
                    <h3 className="text-lg font-bold text-white">Dr. Rasanjalee Abeywickrama</h3>
                    <p className="text-sm text-white">BA, M.Sc App.Gen.</p>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-muted-foreground">
                    Senior Programme, Consultant, Lecturing experience 14 years
                  </p>
                </div>
              </div>
              <div className="bg-background rounded-lg overflow-hidden shadow-lg">
                <div className="relative">
                  <img
                      src="/images/richard.jpeg"
                      width="400"
                      height="400"
                      alt="Emily Davis"
                      className="w-full h-48 object-cover"/>
                  <div
                      className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent p-4">
                    <h3 className="text-lg font-bold text-white">Mr. Richard Abeysinghe</h3>
                    <p className="text-sm text-white">MSc. OHS (Colombo), MBA (Reading) (Solent), Pg.Dip. OHS (Colombo),
                      BSc. Biomedical Science (Wolverhampton)</p>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-muted-foreground">
                    Head of Academics, Lecturing experience 4 years
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
  )
}
