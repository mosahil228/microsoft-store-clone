import React from 'react';
import Head from "next/head";
import GameNavbar from "../../components/GameNavbar";
import GameSidebarCol from "../../components/GameSidebarCol";
const collections = () => {
  return (

    <div>
      <Head>
        <title>Collections</title>
      </Head>
      <GameNavbar />
      <GameSidebarCol />
    </div>
  )
}

export default collections;