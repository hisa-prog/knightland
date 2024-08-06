import React from "react";
import Head from "next/head";
import Script from 'next/script'

const Layout = ({ children }: React.PropsWithChildren<any>) => {

  return (
    <>
      <Head>
        <title>Knight Lands</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Play:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Stoke&display=swap" rel="stylesheet" />
        {/* <link rel="apple-touch-icon" sizes="76x76" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" /> */}
        {/* <link rel="manifest" href="/site.webmanifest" /> */}
        {/* <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#161819" /> */}
        {/* <meta name="msapplication-TileColor" content="#da532c" /> */}
        {/* <meta name="theme-color" content="#ffffff" /> */}
        <meta property="og:title" content="Own Land,Craft Weapons, Earn Crypto" />
        <meta name="description" content="Get Ready For The Worlds First MMORPG On Terra" />
        <meta property="og:description" content="Get Ready For The Worlds First MMORPG On Terra" />
        <meta name="og:keywords" content="Crypto, MMORPG, Terra, NFT, Token" />
        <meta name="og:image" content="/meta.jpg" />
        <script defer src="https://unpkg.com/smoothscroll-polyfill@0.4.4/dist/smoothscroll.min.js" />
      </Head>
      {children}
    </>
  )
}

export default Layout;