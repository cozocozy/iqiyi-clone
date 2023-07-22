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
      <section className="flex flex-row justify-center items-center max-w-sm text-xl font-bold p-2 px-4 xl:text-3xl xl:mx-10 xl:my-4">
        <div className="block">Popular on iQIYI</div>
        <img src="https://wallpapercave.com/wp/wp5709958.jpg" alt="" />
        <img src="https://wallpapercave.com/wp/wp5709958.jpg" alt="" />
      </section>
      <section className="text-xl font-bold p-2 px-4 xl:text-3xl xl:mx-10 xl:my-4">
        <div>Top Rated for you</div>
      </section>
      <section className="text-xl font-bold p-2 px-4 xl:text-3xl xl:mx-10 xl:my-4">
        <div>Now Playing</div>
      </section>
      <section className="text-xl font-bold p-2 px-4 xl:text-3xl xl:mx-10 xl:my-4">
        <div>Upcoming</div>
      </section>
      <section className="text-xl font-bold p-2 px-4 xl:text-3xl xl:mx-10 xl:my-4">
        <div>Latest</div>
      </section>
    </main>
  );
}
