import "@/styles/globals.css";
import { DefaultSeo } from "next-seo";
import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";
import React, { ComponentType } from 'react';
// import { ComponentType, ReactElement } from 'react';


/**
  @description SEO를 위해 본인의 정보로 수정해주세요.
 */
const DEFAULT_SEO = {
  title: "손치원 | Developer",
  description: "안녕하세요, 개발자 손치원입니다.",
  canonical: "https://www.chiwon.com/",
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "https://www.chiwon.com/",
    title: "손치원 | Dev",
    site_name: "손치원 | Developer",
    images: [
      {
        url: "/share.png",
        width: 285,
        height: 167,
        alt: "손치원 | Developer",
      },
    ],
  },
  additionalLinkTags: [
    {
      rel: "icon",
      href: "/favicon.ico",
    },
  ],
  additionalMetaTags: [
    {
      name: "application-name",
      content: "손치원 | Developer",
    },
    {
      name: "msapplication-tooltip",
      content: "손치원 | Developer",
    },
    {
      name: "viewport",
      content: "width=device-width, initial-scale=1",
    },
  ],
};

const App: React.FC<AppProps & { Component: ComponentType<any> }> = ({ Component, pageProps }) => {

  return (
    <>
      <DefaultSeo {...DEFAULT_SEO} />
      <ThemeProvider attribute="class">
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
};

export default App;
