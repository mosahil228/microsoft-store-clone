import React from 'react';
import Head from "next/head";
import GameNavbar from "../../components/GameNavbar";
import {GameSidebarMind} from "../../components/GameSidebar";
const mind_games= () => {
  return (

    <div>
      <Head>
        <title>Editing apps</title>
      </Head>
      <GameNavbar />
      <GameSidebarMind />
    </div>
  )
}

export default mind_games;