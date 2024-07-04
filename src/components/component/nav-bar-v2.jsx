
import Link from "next/link"
import { Drawer, DrawerTrigger, DrawerContent } from "@/components/ui/drawer"
import { Button } from "@/components/ui/button"
import React from "react";

export function NavBarV2() {
  return (
    (<header
        className="flex h-16 w-full items-center justify-between bg-background px-4 md:px-6">
      <div className={"w-[70px] h-full"}>
        <img
            className={
              "object-cover rounded-[10px] object-center border-gray-300 border-b"
            }
            src="images/pgcLogo.png"
            width={200}
            height={200}
            alt="//Logo"
        />
      </div>
      <nav className="hidden items-center gap-6 text-sm font-medium md:flex">

        <Link href="/" className="hover:underline" prefetch={false}>
          Home
        </Link>

        <Link href="/contactus" className="hover:underline" prefetch={false}>
          Contact Us
        </Link>
        <Link href="/aboutus" className="hover:underline" prefetch={false}>
          About Us
        </Link>
          <Link
              href="/apply"
              className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
              prefetch={false}
          >
              Apply Now
          </Link>
      </nav>
      <Drawer>
        <DrawerTrigger asChild>
          <Button variant="outline" size="icon" className="md:hidden">
            <MenuIcon className="h-6 w-6"/>
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </DrawerTrigger>
        <DrawerContent className={'bg-white'}>
          <div className="grid gap-1 p-4 text-center">
              <DrawerTrigger asChild>
            <Link href="/" className="hover:underline bg-gray-200 p-[10px] rounded-2xl" prefetch={false}>
              Home
            </Link>
              </DrawerTrigger>
              <DrawerTrigger asChild>
            <Link href="/contactus" className="hover:underline bg-gray-200 p-[10px] rounded-2xl" prefetch={false}>
              Contact Us
            </Link>
              </DrawerTrigger>
              <DrawerTrigger asChild>
                  <Link href="/aboutus" className="hover:underline bg-gray-200 p-[10px] rounded-2xl" prefetch={false}>
                      About Us
                  </Link>
              </DrawerTrigger>
              <DrawerTrigger asChild>
                <Link href="/apply" className="hover:underline bg-gray-200 p-[10px] rounded-2xl" prefetch={false}>
                  Apply Now
                </Link>
              </DrawerTrigger>
          </div>
        </DrawerContent>
      </Drawer>
    </header>)
  );
}

function MenuIcon(props) {
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
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>)
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
