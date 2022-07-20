import React from 'react';
import Head from "next/head";
import GameNavbar from "../../components/GameNavbar";
import GameSidebarLib from "../../components/GameSidebarLib";
const library = () => {
  return (

    <div>
      <Head>
        <title>Library</title>
      </Head>
      <GameNavbar />
      <GameSidebarLib />
    </div>
  )
}

export default library;