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
      <section className="text-lg">
        <div>Popular</div>
      </section>
      <section className="text-lg">
        <div>Now Playing</div>
      </section>
      <section className="text-lg">
        <div>Top Rated</div>
      </section>
      <section className="text-lg">
        <div>Upcoming</div>
      </section>
      <section className="text-lg">
        <div>Latest</div>
      </section>
    </main>
  );
}
