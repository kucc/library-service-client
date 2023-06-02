import "@/styles/globals.css";
import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import Head from "next/head";
import { RecoilRoot } from "recoil";
import StyledComponentsRegistry from "../../lib/registry";
import { ThemeProvider } from "@material-tailwind/react";

const queryClient = new QueryClient();

export default function App({ Component, pageProps }) {
  const meta = {
    title: "KUCC 도서관리 시스템",
    description: "고려대학교 중앙컴퓨터동아리 KUCC의 도서관리 시스템입니다.",
    image: "logo512.png",
  };
  return (
    <>
      <Head>
        <title>KUChaek</title>
        <meta name="description" content={meta.description} />
        <meta name="keywords" content="kucc, 도서관리, 고려대학교, 컴퓨터동아리" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content={meta.title} />
        <meta property="og:description" content={meta.description} />

        <meta name="twitter:card" content="summary" />
        <meta property="twitter:title" content={meta.title} />
        <meta property="twitter:description" content={meta.description} />
      </Head>{" "}
      <RecoilRoot>
        <QueryClientProvider client={queryClient}>
          <StyledComponentsRegistry>
            <ThemeProvider>
              <Component {...pageProps} />
            </ThemeProvider>
          </StyledComponentsRegistry>
        </QueryClientProvider>
      </RecoilRoot>
    </>
  );
}
