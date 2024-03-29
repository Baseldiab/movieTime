/* eslint-disable react-hooks/rules-of-hooks */
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { TLocale } from "./components/interfaces/global.interfaces";
import { NextIntlClientProvider, useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import MainNavbar from "./components/navbar/Navbar";
import { get_messages } from "@/i18n";
import TypingAnimation from "./components/others/typing";

const inter = Inter({ subsets: ["latin"] });

export interface LocaleParams {
  locale: TLocale;
}

export async function build_meta_data(locale: TLocale, routes: string[] = []): Promise<Metadata> {
  const t = await getTranslations(locale);
  // const t = await useTranslations();

  routes.push(t("app.name"));
  return {
    title: routes.join(" | "),
    description: t("app.description"),
    keywords: "",
  };
}
interface ParamsType extends LocaleParams {}

export async function generateMetadata({
  params: { locale },
}: {
  params: ParamsType;
}): Promise<Metadata> {
  return await build_meta_data(locale);
}

// export const metadata: Metadata = {
//   title: "MovieTime",
//   description: "MovTime for your favorite movie",
// };

export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: ParamsType;
}) {
  return (
    <html lang={locale} dir={locale === "ar" ? "rtl" : "ltr"}>
      <body
        className={`${inter.className} 
      // bg-mainBg
       `}
      >
        <NextIntlClientProvider locale={locale} messages={await get_messages(locale)}>
          <MainNavbar
            params={{
              locale: locale,
            }}
          />
          <main className="bg-mainBg  !h-[5000px] z-10">
            <div
              className="home-background fixed top-0 bottom-0 left-0 right-0 "
              style={{
                background: `url(/images/bg-homePage.webp) fixed center / cover`,
              }}
            ></div>
            <TypingAnimation />
            {children}
          </main>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
