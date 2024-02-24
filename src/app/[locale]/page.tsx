import NowPlaying from "./components/home/home.NowPlaying-section";
import { Suspense } from "react";
import Image from "next/image";
import loadImg from "../../../public/images/loading.gif";
import { TLocale } from "./components/interfaces/global.interfaces";
import { useTranslations } from "next-intl";
import homeBg from "./images/bg-homePage.webp";

interface Props {
  params: {
    locale: TLocale;
  };
}

export default function Home({ params: { locale } }: Props) {
  const t = useTranslations();

  return (
    <main
      className="fixed h-screen w-screen"
      style={{
        background: `url(./images/bg-homePage.webp) fixed center / cover`,
      }}
    >
      <div className="home-container relative">
        {/* <Suspense
        fallback={
          <Image
          className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-28"
            src={loadImg}
            alt="loading..."
            width={50}
          />
        }
        >
      </Suspense> */}
        <NowPlaying />
        <h1 className="text-white">{t("fields.search")}</h1>
      </div>
    </main>
  );
}
