import { Metadata } from "next";
import React from "react";
import TypingAnimation from "../components/others/typing";

export const metadata: Metadata = {
  title: "movieTime | About",
  description: "MovTime for your favorite movie",
};

export default async function AboutPage() {
  return (
    <>
      <header className="">
        <h1 className="text-center text-5xl text-primary mb-3 drop-shadow-xl">𝖒𝖔𝖛𝖎𝖊𝕿𝖎𝖒𝖊 App</h1>
        <hr className="bg-primary rounded-full border-0 w-20 h-1 mx-auto" />
        <TypingAnimation />
      </header>
    </>
  );
}
