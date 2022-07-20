import React from "react";
import styles from "../styles/Games.module.scss";
import Link from "next/link";;
import Image from "next/image";
import { AppOneM4 } from "../components/AppOneC";
import SideBarNav from "../components/SideBarNav";

const GameSidebar2 = () => {
  return (
    <>
      <section className={styles.mainContainer}>  
        <SideBarNav/>
        <section className={styles.sSection2}>
        <div className={styles.sContainer}>
          <div className={`${styles.sGallery2} ${styles.sGalleryI}`}>
            <Image src="/as2.png" width="1620" height="880" alt="img" />
            <div>
              <div className={styles.cContent}>
                <h2>Best entertainment apps</h2>
                <p className={styles.contentP}>
                  Discover apps to watch the best movies, Tv series, and sports, Stream the music you love and more.
                </p>
                <Link href="/"><a><button>See all apps</button></a></Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <AppOneM4 />
      </section>
     
    </>
  );
};

export default GameSidebar2;
