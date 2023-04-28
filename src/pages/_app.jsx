import Nav from "@/components/nav";
import "@/styles/globals.css";
import { createContext, useState } from "react";

export const MainContext = createContext("");

export default function App({ Component, pageProps }) {
  const [projectDetails, setProjectDetails] = useState({});
  const [activePage, setActivePage] = useState("home");
  return (
    <MainContext.Provider
      value={{ projectDetails, setProjectDetails, activePage, setActivePage }}
    >
      <div className="flex justify-center w-full bg-light">
        <div className="flex max-w-[768px] h-full min-h-screen text-main-text box-border">
          <nav className="w-1/5">
            <Nav />
          </nav>
          <main className="w-4/5 min-w-[615px] border-l-2 border-slate-500/10">
            <Component {...pageProps} />
          </main>
        </div>
      </div>
    </MainContext.Provider>
  );
}
