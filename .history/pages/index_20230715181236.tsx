import Head from "next/head";
import Header from "./components/Header";

export default function Home() {
  return (
    <main>
      <Head>
        <title>IQIYI - Watch Asian drama show</title>
        <meta name="description" content="CLONE OF IQIYI WEBSITE" />
      </Head>
      <Header />
    </main>
  );
}
