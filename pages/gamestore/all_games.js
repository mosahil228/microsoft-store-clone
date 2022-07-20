import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from "../../styles/Games.module.scss";
import Head from "next/head";
import {GameOneAll} from "../../components/AppOneC";
import SideBarNav from "../../components/SideBarNav";
import GameNavbar from "../../components/GameNavbar";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {useRouter} from 'next/router'

const all_apps = () => {
  const router=useRouter()
  return (
    <div>
      <Head>
        <title>All Games</title>
      </Head>
      <GameNavbar  />
      <section className={styles.mainContainer}>
        <SideBarNav routColor1={styles.leftItems3} rout1={`${router.pathname == "/gamestore/all_games"? styles.leftIcon4 : ""}`}/>
        <GameOneAll />
      </section>
    </div>
  );
};

export default all_apps;
