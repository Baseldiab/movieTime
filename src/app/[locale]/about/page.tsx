import { Metadata } from "next";
import React from "react";
import TypingAnimation from "../components/typing";

export const metadata: Metadata = {
  title: "About movieTime",
  description: "MovTime for your favorite movie",
};

export default async function AboutPage() {
  return (
    <header className="my-6">
      <h1 className="text-center text-5xl text-primary mb-3 drop-shadow-xl">𝖒𝖔𝖛𝖎𝖊𝕿𝖎𝖒𝖊 App</h1>
      <hr className="bg-primary rounded-full border-0 w-20 h-1 mx-auto" />
      <TypingAnimation />
    </header>
  );
}
