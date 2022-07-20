import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from "../../styles/Games.module.scss";
import Head from "next/head";
import AppOnec from "../../components/AppOneC";
import { AppOneM1,  AppTwoC ,AppOneEx1,AppOneEx2} from "../../components/AppOneC";
import AppOnec2 from "../../components/AppOneC2";
import CarouselApps from "../../components/CarouselApps";
import SideBarNav from "../../components/SideBarNav";
import GameNavbar from "../../components/GameNavbar";
import { AppOneC3} from "../../components/AppOneC2";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const app = () => {
  return (
    <div>
      <Head>
        <title>Apps</title>
      </Head>
      <GameNavbar />
      <section className={styles.mainContainer}>
        <SideBarNav />
        <section className={styles.sSection}>
          <div className={styles.sContainer}>
            <div className={`${styles.sGallery} ${styles.sGRadius}`}>
              <CarouselApps />
            </div>
          </div>
        </section>

        <AppOnec />
        <AppOneM1 />
        <AppOnec2 />
        <AppOneEx1 />
        <AppOneEx2 />
        <AppOneC3 />
        <AppOneM1 />
        <AppOnec />
        <AppTwoC />
      </section>
    </div>
  );
};

export default app;
