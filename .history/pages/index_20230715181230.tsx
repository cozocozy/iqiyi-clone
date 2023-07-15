import Head from "next/head";
import Header from "./components/Header";

export default function Home() {
  return (
    <main>
      <Head>
        <title>IQIYI - Watch </title>
        <meta name="description" content="CLONE OF IQIYI WEBSITE" />
      </Head>
      <Header />
    </main>
  );
}
