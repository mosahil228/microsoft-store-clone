import React from "react";
import styles from "../styles/Games.module.scss";
import Link from "next/link";;
import Image from "next/image";
import { AppOneM3,AppOneM6,AppOneM4 } from "../components/AppOneC";
import SideBarNav from "../components/SideBarNav";

const GameSidebar = () => {
  return (
    <>
      <section className={styles.mainContainer}>  
        <SideBarNav/>
        <section className={styles.sSection2}>
        <div className={styles.sContainer}>
          <div className={styles.sGallery2}>
            <Image src="/ac.jpg" width="1720" height="880" alt="img" />
            <div>
              <div className={styles.cContent}>
                <h2>Action Games</h2>
                <p className={styles.contentP}>
                  Give your brain a muscle power to stay strong infront of your enemies and make them believe that you are the best in game.
                </p>
                <Link href="/"><a><button>See all games</button></a></Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <AppOneM3 />
      </section>
     
    </>
  );
};
const GameSidebarXbox = () => {
  return (
    <>
      <section className={styles.mainContainer}>  
        <SideBarNav/>
        <section className={styles.sSection2}>
        <div className={styles.sContainer}>
          <div className={styles.sGallery2}>
            <Image src="/h2.png" width="1820" height="980" alt="img" />
            <div>
              <div className={styles.cContent}>
                <h2>Best of XBox Game studios</h2>
                <p className={styles.contentP}>
                  Play some of the biggest game franchises in History on your Pc.
                </p>
                <Link href="/"><a><button>See all games</button></a></Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <AppOneM6 />
      </section>
     
    </>
  );
};
const GameSidebarHidden = () => {
  return (
    <>
      <section className={styles.mainContainer}>  
        <SideBarNav/>
        <section className={styles.sSection2}>
        <div className={styles.sContainer}>
          <div className={styles.sGallery2}>
            <Image src="/h1.png" width="1820" height="980" alt="img" />
            <div>
              <div className={styles.cContent}>
                <h2>Hidden object games</h2>
                <p className={styles.contentP}>
                  Immerse yourself in mysterious stories,gergeous scenes,and thrilling twists.
                </p>
                <Link href="/"><a><button>See all games</button></a></Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <AppOneM6 />
      </section>
     
    </>
  );
};
const GameSidebarCasino = () => {
  return (
    <>
      <section className={styles.mainContainer}>  
        <SideBarNav/>
        <section className={styles.sSection2}>
        <div className={styles.sContainer}>
          <div className={styles.sGallery2}>
            <Image src="/h5.png" width="1820" height="980" alt="img" />
            <div>
              <div className={styles.cContent}>
                <h2>Casino games</h2>
                <p className={styles.contentP}>
                  Blackjack,poker,and slots. You don't have to fly to Las Vegas to enjoy this collection of your favourite casino games.
                </p>
                <Link href="/"><a><button>See all games</button></a></Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <AppOneM6 />
      </section>
     
    </>
  );
};
const GameSidebarMind = () => {
  return (
    <>
      <section className={styles.mainContainer}>  
        <SideBarNav/>
        <section className={styles.sSection2}>
        <div className={styles.sContainer}>
          <div className={styles.sGallery2}>
            <Image src="/h3.png" width="1820" height="980" alt="img" />
            <div>
              <div className={styles.cContent}>
                <h2>Mind games</h2>
                <p className={styles.contentP}>
                  Improve your mind skill to solve the puzzle problem.
                </p>
                <Link href="/"><a><button>See all games</button></a></Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <AppOneM6 />
      </section>
     
    </>
  );
};
const GameSidebarEditing = () => {
  return (
    <>
      <section className={styles.mainContainer}>  
        <SideBarNav/>
        <section className={styles.sSection2}>
        <div className={styles.sContainer}>
          <div className={styles.sGallery2}>
            <Image src="/h4.png" width="1820" height="980" alt="img" />
            <div>
              <div className={styles.cContent}>
                <h2>Best photo and vedio editing apps</h2>
                <p className={styles.contentP}>
                  Turn your favourite photos into wok of art and these great apps.
                </p>
                <Link href="/"><a><button>See all games</button></a></Link>
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

export default GameSidebar;
export {GameSidebarXbox,GameSidebarHidden,GameSidebarCasino,GameSidebarEditing,GameSidebarMind};
