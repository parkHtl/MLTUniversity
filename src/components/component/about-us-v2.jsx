
export function aboutUsV2() {
  return (
    (<div className="flex flex-col min-h-[100dvh]">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-primary">
        <div
          className="container px-4 md:px-6 flex flex-col items-center justify-center text-center space-y-4">
          <MountainIcon className="h-12 w-12 text-primary-foreground" />
          <h1
            className="text-4xl font-bold tracking-tighter text-primary-foreground sm:text-5xl md:text-6xl">
            About Acme Inc.
          </h1>
          <p className="max-w-[700px] text-primary-foreground md:text-xl/relaxed">
            {`Acme Inc. is a leading provider of innovative solutions for businesses of all sizes. Our team of dedicated
            professionals is committed to delivering exceptional results and driving the success of our clients.`}
          </p>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter mb-8 md:text-4xl">Meet the Team</h2>
          <div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            <div className="bg-background rounded-lg overflow-hidden shadow-lg">
              <div className="relative">
                <img
                  src="/placeholder.svg"
                  width="400"
                  height="400"
                  alt="John Doe"
                  className="w-full h-48 object-cover" />
                <div
                  className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent p-4">
                  <h3 className="text-lg font-bold text-white">John Doe</h3>
                  <p className="text-sm text-white">CEO</p>
                </div>
              </div>
              <div className="p-4">
                <p className="text-muted-foreground">
                  {`John is the visionary behind Acme Inc. With over 15 years of experience in the industry, he leads the
                  company with a passion for innovation and a commitment to excellence.`}
                </p>
              </div>
            </div>
            <div className="bg-background rounded-lg overflow-hidden shadow-lg">
              <div className="relative">
                <img
                  src="/placeholder.svg"
                  width="400"
                  height="400"
                  alt="Jane Smith"
                  className="w-full h-48 object-cover" />
                <div
                  className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent p-4">
                  <h3 className="text-lg font-bold text-white">Jane Smith</h3>
                  <p className="text-sm text-white">CTO</p>
                </div>
              </div>
              <div className="p-4">
                <p className="text-muted-foreground">
                  {` Jane is the technical mastermind behind Acme Inc. With a deep understanding of the latest
                  technologies, she leads the engineering team to deliver cutting-edge solutions.`}
                </p>
              </div>
            </div>
            <div className="bg-background rounded-lg overflow-hidden shadow-lg">
              <div className="relative">
                <img
                  src="/placeholder.svg"
                  width="400"
                  height="400"
                  alt="Michael Johnson"
                  className="w-full h-48 object-cover" />
                <div
                  className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent p-4">
                  <h3 className="text-lg font-bold text-white">Michael Johnson</h3>
                  <p className="text-sm text-white">Head of Sales</p>
                </div>
              </div>
              <div className="p-4">
                <p className="text-muted-foreground">
                  {`  Michael is the driving force behind Acme Inc.'s sales strategy. With his exceptional communication
                  skills and deep industry knowledge, he has helped the company expand its customer base.`}
                </p>
              </div>
            </div>
            <div className="bg-background rounded-lg overflow-hidden shadow-lg">
              <div className="relative">
                <img
                  src="/placeholder.svg"
                  width="400"
                  height="400"
                  alt="Emily Davis"
                  className="w-full h-48 object-cover" />
                <div
                  className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent p-4">
                  <h3 className="text-lg font-bold text-white">Emily Davis</h3>
                  <p className="text-sm text-white">Head of Marketing</p>
                </div>
              </div>
              <div className="p-4">
                <p className="text-muted-foreground">
                  {` Emily is the creative force behind Acme Inc.'s marketing campaigns. With her innovative approach and
                  deep understanding of the target audience, she has helped the company establish a strong brand
                  presence.`}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div
          className="container px-4 md:px-6 flex flex-col items-center justify-center text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter text-primary md:text-4xl">Years of Glorious History</h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
              {`  Acme Inc. has been a trusted name in the industry for over 50 years, delivering innovative solutions and
              exceptional customer service.`}
            </p>
          </div>
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter text-primary md:text-4xl">
              Programs Available for Students
            </h2>
            <ul className="text-muted-foreground md:text-xl/relaxed space-y-2">
              - Bachelor's Degree in Computer Science              <li>- Master's Degree in Business Administration</li>
              <li>{`- Diploma in Graphic Design`}</li>
              <li>{`- Certificate in Web Development`}</li>
            </ul>
          </div>
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter text-primary md:text-4xl">Graduation Rates</h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
              {` Acme Inc. boasts a 95% graduation rate, with our students going on to successful careers in their chosen
              fields.`}
            </p>
          </div>
        </div>
      </section>
    </div>)
  );
}

function MountainIcon(props) {
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
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>)
  );
}
