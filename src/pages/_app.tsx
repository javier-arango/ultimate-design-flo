import "../styles/variables.css";
import "../styles/globals.css";

import type { AppProps } from "next/app";
import { NavBar, NavBarInfo, Footer } from "../components";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <NavBarInfo />
      <NavBar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
