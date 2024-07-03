
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"

export function AboutUsv3() {
  return (
    (<div className="flex flex-col min-h-[100dvh]">
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div
            className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1
                  className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Meet the Team Behind Our Success
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  {`  Our talented and dedicated team is the driving force behind our company's growth and innovation.`}
                </p>
              </div>
            </div>
            <img
              src="/placeholder.svg"
              width="550"
              height="550"
              alt="Team"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square" />
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <div
              className="flex flex-col items-center justify-center space-y-4 text-center">
              <Avatar className="w-24 h-24">
                <AvatarImage src="/placeholder-user.jpg" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div className="space-y-1">
                <h3 className="text-xl font-bold">John Doe</h3>
                <p className="text-sm text-muted-foreground">CEO</p>
              </div>
              <p className="text-sm text-muted-foreground">
                {` John is the visionary behind our company, leading the team with his strategic insights and innovative
                thinking.`}
              </p>
            </div>
            <div
              className="flex flex-col items-center justify-center space-y-4 text-center">
              <Avatar className="w-24 h-24">
                <AvatarImage src="/placeholder-user.jpg" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div className="space-y-1">
                <h3 className="text-xl font-bold">Jane Doe</h3>
                <p className="text-sm text-muted-foreground">CTO</p>
              </div>
              <p className="text-sm text-muted-foreground">
                {`Jane is our technical mastermind, driving the development of our cutting-edge products and ensuring
                seamless operations.`}
              </p>
            </div>
            <div
              className="flex flex-col items-center justify-center space-y-4 text-center">
              <Avatar className="w-24 h-24">
                <AvatarImage src="/placeholder-user.jpg" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div className="space-y-1">
                <h3 className="text-xl font-bold">Bob Smith</h3>
                <p className="text-sm text-muted-foreground">Head of Design</p>
              </div>
              <p className="text-sm text-muted-foreground">
                {` Bob is the creative genius behind our visually stunning designs, ensuring our brand stands out in the
                market.`}
              </p>
            </div>
            <div
              className="flex flex-col items-center justify-center space-y-4 text-center">
              <Avatar className="w-24 h-24">
                <AvatarImage src="/placeholder-user.jpg" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div className="space-y-1">
                <h3 className="text-xl font-bold">Sarah Lee</h3>
                <p className="text-sm text-muted-foreground">Head of Marketing</p>
              </div>
              <p className="text-sm text-muted-foreground">
                {`Sarah is the driving force behind our successful marketing campaigns, helping us reach and engage our
                target audience.`}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>)
  );
}
