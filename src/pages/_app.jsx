import Nav from "@/components/nav";
import "@/styles/globals.css";
import Head from "next/head";
import { createContext, useState } from "react";

export const MainContext = createContext("");

export default function App({ Component, pageProps }) {
  const [projectDetails, setProjectDetails] = useState({});
  const [activePage, setActivePage] = useState("home");
  return (
    <>
      <Head>
        <title>Franklin Assa</title>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="fav/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="fav/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="fav/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <MainContext.Provider
        value={{ projectDetails, setProjectDetails, activePage, setActivePage }}
      >
        <div className="flex justify-center w-full bg-light">
          <div
            className="flex max-w-[768px] h-full min-h-screen text-main-text box-border"
            role="container"
            s
          >
            <nav className="w-1/5">
              <Nav />
            </nav>
            <main className="w-4/5 min-w-[615px] border-l-2 border-slate-500/10">
              <Component {...pageProps} />
            </main>
          </div>
        </div>
      </MainContext.Provider>
    </>
  );
}
