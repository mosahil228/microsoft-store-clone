import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from "../../styles/Games.module.scss";
import Head from "next/head";
import {AppOneAll} from "../../components/AppOneC";
import SideBarNav from "../../components/SideBarNav";
import GameNavbar from "../../components/GameNavbar";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {useRouter} from 'next/router'

const all_apps = () => {
  const router=useRouter();
  return (
    <div>
      <Head>
        <title>All Applications</title>
      </Head>
      <GameNavbar/>
      <section className={styles.mainContainer}>
        <SideBarNav routColor={styles.leftItems3} rout={`${router.pathname == "/gamestore/all_apps"? styles.leftIcon4 : ""}`}/>
        <AppOneAll />
      </section>
    </div>
  );
};

export default all_apps;
