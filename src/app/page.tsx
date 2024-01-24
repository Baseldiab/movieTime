import NowPlaying from "./components/NowPlaying-section";
import { Suspense } from "react";
import Image from "next/image";
import loadImg from "../../public/images/loading.gif";

export default function Home() {
  return (
    <main className="">
      <Suspense
        fallback={
          <Image
            className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-28"
            src={loadImg}
            alt="loading..."
            width={50}
          />
        }
      >
        <NowPlaying />
      </Suspense>
    </main>
  );
}
