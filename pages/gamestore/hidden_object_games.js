import React from 'react';
import Head from "next/head";
import GameNavbar from "../../components/GameNavbar";
import {GameSidebarHidden} from "../../components/GameSidebar";
const hidden_object_games = () => {
  return (

    <div>
      <Head>
        <title>Hidden object games</title>
      </Head>
      <GameNavbar />
      <GameSidebarHidden />
    </div>
  )
}

export default hidden_object_games;