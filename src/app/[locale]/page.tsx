/* eslint-disable react-hooks/rules-of-hooks */
import NowPlaying from "./components/home/home.NowPlaying-section";
import { Suspense } from "react";
import Image from "next/image";
import loadImg from "../../../public/images/loading.gif";
import { TLocale } from "./components/interfaces/global.interfaces";
import { useTranslations } from "next-intl";
import homeBg from "./images/bg-homePage.webp";
import MainNavbar from "./components/navbar/Navbar";
import { LocalProps } from "./components/interfaces/local.props.interface";
import { LocaleParams, build_meta_data } from "./layout";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({
  params: { locale },
}: {
  params: LocaleParams;
}): Promise<Metadata> {
  const t = await getTranslations(locale);
  return build_meta_data(locale, [t("pages.home")]);
}

export default async function HomePage({ params: { locale } }: LocalProps) {
  const t = await getTranslations(locale);

  return (
    <main className="bg-mainBg  !h-[5000px]">
      {/* <MainNavbar
        params={{
          locale: locale,
        }}
      /> */}
      <div
        className="home-background fixed top-0 bottom-0 left-0 right-0 h-screen w-screen"
        style={{
          background: `url(./images/bg-homePage.webp) fixed center / cover`,
        }}
      ></div>
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
      {/* <h1 className="text-white">{t("fields.search")}</h1> */}
    </main>
  );
}
