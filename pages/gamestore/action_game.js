import React from 'react';
import Head from "next/head";
import GameNavbar from "../../components/GameNavbar";
import GameSidebar from "../../components/GameSidebar";
const action_game = () => {
  return (

    <div>
      <Head>
        <title>Action Game</title>
      </Head>
      <GameNavbar />
      <GameSidebar />
    </div>
  )
}

export default action_game;