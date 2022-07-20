import React from 'react';
import Head from "next/head";
import GameNavbar from "../../components/GameNavbar";
import {GameSidebarEditing} from "../../components/GameSidebar";
const editing_apps = () => {
  return (

    <div>
      <Head>
        <title>Editing apps</title>
      </Head>
      <GameNavbar />
      <GameSidebarEditing />
    </div>
  )
}

export default editing_apps;