"use client";

import Link from "next/link";
import React from "react";
import Logo from "./Logo";
import { usePathname } from "next/navigation";
import SearchForm from "./SearchForm";
import { IconButton, Typography } from "@mui/material";
import { LocalProps } from "../interfaces/local.props.interface";

export default function MainNavbar({ params: { locale } }: LocalProps) {
  const pathname = usePathname();
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener("resize", () => window.innerWidth > 640 && setOpenNav(false));
  }, []);

  const navList = (
    <ul className="nav__list py-2 flex flex-col  sm:mb-0 sm:mt-0 sm:flex-row sm:items-center gap-4 sm:gap-6">
      <li>
        <Link className={`nav__link ${pathname === `/${locale}` ? "active" : ""}`} href="/">
          home
        </Link>
      </li>
      <li>
        <Link
          className={`nav__link ${pathname === `/${locale}/about` ? "active" : ""}`}
          href="/about"
        >
          about
        </Link>
      </li>
    </ul>
  );

  return (
    <nav className="text-primary sm:py-4 md:py-6 py-2">
      <div className="nav__container myContainer sticky top-0 z-10 rounded-none border-0 px-4  lg:px-8  bg-transparent">
        <div className="nav__content grid md:grid-cols-4 grid-cols-2 items-center justify-between">
          <Logo />
          <div className="md:col-span-2 col-span-4 md:order-none order-last">
            <SearchForm />
          </div>
          <div className="nav__lgScreen flex  justify-end gap-4">
            <div className="mr-4 hidden sm:block">{navList}</div>
            {/* <IconButton
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
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </IconButton> */}
          </div>
          {/* <Collapse className="nav__smScreen col-span-4  sm:hidden" open={openNav}>
            {navList}
          </Collapse> */}
        </div>
      </div>
    </nav>
  );
}
