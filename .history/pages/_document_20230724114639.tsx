import { Html, Head, Main, NextScript } from "next/document";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Header />
        <Sidebar />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
