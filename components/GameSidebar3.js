import React from "react";
import styles from "../styles/Games.module.scss";
import Link from "next/link";;
import Image from "next/image";
import { AppOneM5 } from "../components/AppOneC";
import SideBarNav from "../components/SideBarNav";

const GameSidebar3 = () => {
  return (
    <>
      <section className={styles.mainContainer}>  
        <SideBarNav/>
        <section className={styles.sSection2}>
        <div className={styles.sContainer}>
          <div className={`${styles.sGallery2} ${styles.sGalleryI}`}>
            <Image src="/ac2.png" width="1620" height="880" alt="img" />
            <div>
              <div className={styles.cContent}>
                <h2>Connect and stay informed</h2>
                <p className={styles.contentP}>
                  Use these helpful apps to get news, listen to podcasts and stay connected.
                </p>
                <Link href="/"><a><button>See all apps</button></a></Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <AppOneM5 />
      </section>
     
    </>
  );
};


export default GameSidebar3;

