import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from "../../styles/Games.module.scss";
import Head from "next/head";
import  { GamesFive,GameSix } from "../../components/AppOneC";
import { AppOneM1, AppOneM2, AppTwoC } from "../../components/AppOneC";
import AppOnec2 from "../../components/AppOneC2";
import CarouselGames from "../../components/CarouselGames";
import SideBarNav from "../../components/SideBarNav";
import GameNavbar from "../../components/GameNavbar";
import { AppOneG1 } from "../../components/AppOneC2";
import "react-responsive-carousel/lib/styles/carousel.min.css";


const games = () => {
  return (
    <div>
      <Head>
        <title>Games</title>
      </Head>
      <GameNavbar />
      <section className={styles.mainContainer}>
        <SideBarNav />
        <section className={styles.sSection}>
          <div className={styles.sContainer}>
            <div className={`${styles.sGallery} ${styles.sGRadius}`}>
              <CarouselGames />
            </div>
          </div>
        </section>

        <GamesFive />
        <GameSix />
        <AppOneG1 />
        <AppOneM2 />
        <AppOnec2 />
        <AppOneM1 />
        <AppTwoC />
      </section>
    </div>
  );
};

export default games;
