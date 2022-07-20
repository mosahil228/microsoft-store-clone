import React from 'react';
import Head from "next/head";
import GameNavbar from "../../components/GameNavbar";
import GameSidebar2 from "../../components/GameSidebar2";
const entertainment_apps = () => {
  return (

    <div>
      <Head>
        <title>Entertainment apps</title>
      </Head>
      <GameNavbar />
      <GameSidebar2 />
    </div>
  )
}

export default entertainment_apps;