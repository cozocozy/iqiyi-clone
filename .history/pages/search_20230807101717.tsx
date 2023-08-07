import React from "react";

type Props = {};

function search({}: Props) {
  return (
    <main id="top" className="mx-4 lg:mx-12 scroll-smooth bg-gray-950">
      <Head>
        <title>IQIYI - Watch Asian Drama Shows Anime Movie Free Online</title>
        <meta name="description" content="CLONE OF IQIYI WEBSITE" />
      </Head>
      <Header />
      <Sidebar />
      <h1>search</h1>
      <Footer />
      <Link href="#top">
        <footer className="sticky bottom-5 w-full  cursor-pointer z-50">
          <div className="flex justify-end items-center">
            <HiChevronUp className=" h-12 w-12 bg-emerald-600 rounded-full cursor-pointer lg:h-14 lg:w-14 hover:bg-emerald-500 transition-all ease-in-out animate-bounce" />
          </div>
        </footer>
      </Link>
    </main>
  );
}

export default search;
