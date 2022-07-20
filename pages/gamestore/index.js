import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from "../../styles/Games.module.scss";
import Head from "next/head";
import AppOnec from "../../components/AppOneC";
import { AppOneM1, AppOneM2, AppTwoC } from "../../components/AppOneC";
import AppOnec2 from "../../components/AppOneC2";
import CarouselHome from "../../components/CarouselHome";
import SideBarNav from "../../components/SideBarNav";
import GameNavbar from "../../components/GameNavbar";
import { AppOneC3, AppOneG1 } from "../../components/AppOneC2";
import "react-responsive-carousel/lib/styles/carousel.min.css";


const index = () => {

  
  return (
    <div>
      <Head>
        <title>Soft Store</title>
      </Head>
      <GameNavbar />
      <section className={styles.mainContainer}>
        <SideBarNav />
        <section className={styles.sSection}>
          <div className={styles.sContainer}>
            <div className={`${styles.sGallery} ${styles.sGRadius}`}>
              <CarouselHome />
            </div>
          </div>
        </section>

        <AppOnec />
        <AppOnec2 />
        <AppOneM1 />
        <AppOneC3 />
        <AppOneM2 />
        <AppOneG1 />
        <AppTwoC />
      </section>
    </div>
  );
};

export default index;
