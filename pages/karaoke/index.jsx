import Head from "next/head";
import React from "react";

export default function Karaoke() {
  return (
    <>
      <Head>
        <title>Karaoke</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="main">
        <h1 className="text-5xl font-bold flex justify-center">Karaoke page</h1>
      </div>
    </>
  );
}
