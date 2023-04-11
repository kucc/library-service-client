import "@/styles/globals.css";
import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";

import { RecoilRoot } from "recoil";
import StyledComponentsRegistry from "../../lib/registry";

const queryClient = new QueryClient();

export default function App({ Component, pageProps }) {
  return (
    <>
      <RecoilRoot>
        <QueryClientProvider client={queryClient}>
          <StyledComponentsRegistry>
            <Component {...pageProps} />
          </StyledComponentsRegistry>
        </QueryClientProvider>
      </RecoilRoot>
    </>
  );
}
