import Head from "next/head";
import { Inter } from "@next/font/google";
import home from "./home";
import Navbar from "./../components/Navbar";

export default function Home() {
  return (
    <>
      <Head>
        <title>Cryptobase - Your Full Stack Crypto App</title>
        <meta name="description" content="Cryptobase - Everything-Crypto" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700;800&family=Oswald:wght@200;300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <main>
        <Navbar />
      </main>
    </>
  );
}
