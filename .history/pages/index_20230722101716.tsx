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
      <section className="text-xl font-semibold p-3">
        <div>Popular on iQIYI</div>
      </section>
      <section className="text-xl font-semibold p-3">
        <div>Top Rated for you</div>
      </section>
      <section className="text-xl font-semibold p-3">
        <div>Top Rated</div>
      </section>
      <section className="text-xl font-semibold p-3">
        <div>Upcoming</div>
      </section>
      <section className="text-xl font-semibold p-3">
        <div>Latest</div>
      </section>
    </main>
  );
}
