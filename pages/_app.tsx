import { Adsense } from "../components/adsense";
import { Aside } from "../components/aside";
import { Header } from "../components/header";
import "../styles/global.css";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main className="container__full">
      <Header />
      <section className="content">
        <Aside />
        <Component {...pageProps} />
        <section className="aside__right content-flex content-flex-center-column">
          <Adsense dataAdSlot="7566066303" />
        </section>
      </section>
      <section className="adsense__footer content-flex content-flex-center">
        <Adsense dataAdSlot="3678792188" />
      </section>
    </main>
  );
}

export default MyApp;
