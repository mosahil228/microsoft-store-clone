import React from 'react';
import Head from "next/head";
import GameNavbar from "../../components/GameNavbar";
import {GameSidebarXbox} from "../../components/GameSidebar";
const xbox_games = () => {
  return (

    <div>
      <Head>
        <title>XBox Game</title>
      </Head>
      <GameNavbar />
      <GameSidebarXbox />
    </div>
  )
}

export default xbox_games;