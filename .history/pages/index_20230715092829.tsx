import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  <Head>
    <title>My Porfolio</title>
    <meta name="description" content="Generated by Create Next Stack." />
  </Head>;
  return <main className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}></main>;
}
