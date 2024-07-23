
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"

export function VideoStream() {
  return (
    (<div
      className="flex flex-col items-center justify-start w-full h-fit px-4 md:px-6 ">
      <div className="w-full max-w-4xl">
        <div className="space-y-4">
          <div className="relative w-full overflow-hidden rounded-lg aspect-video">
            <video className="w-full h-full" controls poster={'/images/thumbnail.png'}>
              <source
                src="/videos/1.mp4"
                type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </div>)
  );
}

function PlayIcon(props) {
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
      <polygon points="6 3 20 12 6 21 6 3" />
    </svg>)
  );
}


function Volume2Icon(props) {
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
      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
      <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
      <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
    </svg>)
  );
}
