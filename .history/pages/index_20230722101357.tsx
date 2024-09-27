import Head from "next/head";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Slider from "./components/Slider";

export default function Home() {
  return (
    <main>
      <Head>
        <title>IQIYI - watch Asian drama shows anime movie free online</title>
        <meta name="description" content="CLONE OF IQIYI WEBSITE" />
      </Head>
      <Header />
      <Sidebar />
      <Slider />
      <section>
        <div>Popular</div>
      </section>
      <section>
        <div>Now Playing</div>
      </section>
      <section>
        <div>Top Rated</div>
      </section>
      <section>
        <div>Upcoming</div>
      </section>
      <section>
        <div>Latest</div>
      </section>
    </main>
  );
}
