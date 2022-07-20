import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from "../styles/Games.module.scss";
import Link from "next/link";
import { Carousel } from "react-responsive-carousel";
// import Carousel from "react-responsive-carousel/lib/js/components/Carousel/index";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const CarouselApps = () => {

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
          <img src="/ap1.png" alt="img" />
          <div className={styles.carItem}>
            <div className={styles.passCar}>
              <p className={styles.xBoxPass2}>GET PASS</p>
              <span className={styles.passFree}>Free</span>
            </div>
            <h4>Adobe PhotoShop 2.0</h4>
            <p>Make your skills strong</p>
            <Link href="/">
              <a>
                <button>See details</button>
              </a>
            </Link>
          </div>
        </div>
        <div className={styles.carImages}>
          <img src="/ap2.png" alt="img" />
          <div className={styles.carItem}>
            <div className={styles.passCar}>
              <p className={styles.xBoxPass2}>GET PASS</p>
              <span className={styles.passFree}>Free</span>
            </div>
            <h4>Figma - Create the Destiny</h4>
            <p>Enjoy the tool of editing & more</p>
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

export default CarouselApps;
