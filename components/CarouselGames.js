import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from "../styles/Games.module.scss";
import Link from "next/link";
import { Carousel } from "react-responsive-carousel";
// import Carousel from "react-responsive-carousel/lib/js/components/Carousel/index";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const CarouselGames = () => {

  return (
    <>
      <Carousel
        className={styles.carousel}
        autoPlay={true}
        // swipeable={true}
        fade={true}
        showStatus={false}
        showIndicators={false}
        thumbWidth={220}
        autoFocus={true}
        useKeyboardArrows={true}
        infiniteLoop={true}
      >
        <div className={styles.carImages}>
          <img src="/ag1.png" alt="img" />
          <div className={styles.carItem}>
            <div className={styles.passCar}>
              <p className={styles.xBoxPass2}>GET PASS</p>
              <span className={styles.passFree}>Free</span>
            </div>
            <h4>MineCraft</h4>
            <p>Show your skills to make Awesome home</p>
            <Link href="/">
              <a>
                <button>See details</button>
              </a>
            </Link>
          </div>
        </div>
        <div className={styles.carImages}>
          <img src="/ag2.png" alt="img" />
          <div className={styles.carItem}>
            <div className={styles.passCar}>
              <p className={styles.xBoxPass2}>GET PASS</p>
              <span className={styles.passFree}>Free</span>
            </div>
            <h4>1917 - The WAR</h4>
            <p>Let the war begins</p>
            <Link href="/">
              <a>
                <button>See details</button>
              </a>
            </Link>
          </div>
        </div>
        <div className={styles.carImages}>
          <img src="/ag3.png" alt="img" />
          <div className={styles.carItem}>
            <div className={styles.passCar}>
              <p className={styles.xBoxPass2}>GET PASS</p>
              <span className={styles.passFree}>Free</span>
            </div>
            <h4>Burnout revenge</h4>
            <p>Best racing game ever</p>
            <Link href="/">
              <a>
                <button>See details</button>
              </a>
            </Link>
          </div>
        </div>
        <div className={styles.carImages}>
          <img src="/ag4.png" alt="img" />
          <div className={styles.carItem}>
            <div className={styles.passCar}>
              <p className={styles.xBoxPass2}>GET PASS</p>
              <span className={styles.passFree}>Free</span>
            </div>
            <h4>Gorn</h4>
            <p>Adventure best game is here</p>
            <Link href="/">
              <a>
                <button>See details</button>
              </a>
            </Link>
          </div>
        </div>
        
        
      </Carousel>
    </>
  );
};

export default CarouselGames;
