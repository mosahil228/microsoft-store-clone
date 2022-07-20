import React from 'react';
import Head from "next/head";
import GameNavbar from "../../components/GameNavbar";
import GameSidebar3 from "../../components/GameSidebar3";
const helpfull_apps = () => {
  return (

    <div>
      <Head>
        <title>Helpfull apps</title>
      </Head>
      <GameNavbar />
      <GameSidebar3 />
    </div>
  )
}

export default helpfull_apps;