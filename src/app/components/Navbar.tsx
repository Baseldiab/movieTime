"use client";

import Link from "next/link";
import React from "react";
import Logo from "./Logo";
import { usePathname } from "next/navigation";
import { Collapse, Typography, IconButton } from "@material-tailwind/react";

export default function MainNavbar() {
  const pathname = usePathname();
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth > 640 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 sm:mb-0 sm:mt-0 sm:flex-row sm:items-center sm:gap-6">
      <Typography as="li" variant="small">
        <Link
          className={`nav__link ${pathname === "/" ? "active" : ""}`}
          href="/"
        >
          home
        </Link>
      </Typography>
      <Typography as="li" variant="small">
        <Link
          className={`nav__link ${pathname === "/about" ? "active" : ""}`}
          href="/about"
        >
          about
        </Link>
      </Typography>
    </ul>
  );

  return (
    <nav className="text-primary sm:py-4 md:py-6 py-2 border-b border-primary">
      <div className="myContainer sticky top-0 z-10 rounded-none border-0 px-4  lg:px-8  bg-transparent">
        <div className="flex items-center justify-between">
          <Logo />
          <div className="flex items-center gap-4">
            <div className="mr-4 hidden sm:block">{navList}</div>

            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent sm:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
        <Collapse className="sm:hidden" open={openNav}>
          {navList}
        </Collapse>
      </div>
    </nav>
  );
}
