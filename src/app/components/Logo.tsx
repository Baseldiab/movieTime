import Image from "next/image";
import Link from "next/link";
import React from "react";
import logoImg from "public/logo.svg";

export default function Logo() {
  return (
    <Link className="sm:text-3xl text-2xl flex items-center" href="/">
      <Image className="md:w-8 w-5 md:h-8 h-5" src={logoImg} alt="logo" />
      <span>𝖒𝖔𝖛𝖎𝖊𝕿𝖎𝖒𝖊</span>
    </Link>
  );
}
