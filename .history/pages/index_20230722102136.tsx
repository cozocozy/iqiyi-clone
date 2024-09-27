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
      <section className="text-xl font-bold py-2 px-4 xl:text-3xl xl:px-13">
        <div>Popular on iQIYI</div>
      </section>
      <section className="text-xl font-bold p-2 px-4 xl:text-3xl xl:px-13">
        <div>Top Rated for you</div>
      </section>
      <section className="text-xl font-bold p-2 px-4 xl:text-3xl xl:px-13">
        <div>Now Playing</div>
      </section>
      <section className="text-xl font-bold p-2 px-4 xl:text-3xl xl:px-13">
        <div>Upcoming</div>
      </section>
      <section className="text-xl font-bold p-2 px-4 xl:text-3xl xl:px-13">
        <div>Latest</div>
      </section>
    </main>
  );
}
