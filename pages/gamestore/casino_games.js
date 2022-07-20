import React from 'react';
import Head from "next/head";
import GameNavbar from "../../components/GameNavbar";
import {GameSidebarCasino} from "../../components/GameSidebar";
const casino_games = () => {
  return (

    <div>
      <Head>
        <title>XBox Game</title>
      </Head>
      <GameNavbar/>
      <GameSidebarCasino />
    </div>
  )
}

export default casino_games;