import { useEffect, useState } from "react";
// import { Adsense } from "../components/adsense";
import { Aside } from "../components/aside";
import { Header } from "../components/header";
import "../styles/global.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { pageview } from "../lib/gtag";
// import { Analytics } from "../components/analytics";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [theme, setTheme] = useState("light");
  const [isNoBlog, setIsNoBlog] = useState(true);
  useEffect(() => {
    const handleRouteChange = (url: string) => {
      pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);
  function handlerTheme() {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  }
  return (
    <>
      {isNoBlog ? (
        <Component {...pageProps} setIsNoBlog={setIsNoBlog} />
      ) : (
        <main className={`container__full ${theme}`}>
          <Header handlerTheme={handlerTheme} theme={theme} />
          <section className="content">
            <Aside />
            <Component {...pageProps} theme={theme} setIsNoBlog={setIsNoBlog} />
            {/* <section className="aside__right content-flex content-flex-center-column">
          <Adsense dataAdSlot="7566066303" />
        </section> */}
          </section>
          {/* <section className="adsense__footer content-flex content-flex-center">
        <Adsense dataAdSlot="3678792188" />
      </section> */}
          {/* <Analytics /> */}
        </main>
      )}
    </>
  );
}

export default MyApp;
