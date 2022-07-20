import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from "../styles/Games.module.scss";
import Link from "next/link";
import { Carousel } from "react-responsive-carousel";
// import Carousel from "react-responsive-carousel/lib/js/components/Carousel/index";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const CarouselHome = () => {

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
          <img src="/rev1.png" alt="img" />
          <div className={styles.carItem}>
            <span className={styles.spanFree}>Free</span>
            <h4>The alterlife was the beginning</h4>
            <p>Watch now only on Prime video</p>
            <Link href="/">
              <a>
                <button>See details</button>
              </a>
            </Link>
          </div>
        </div>
        <div className={styles.carImages}>
          <img src="/rev2.png" alt="img" />
          <div className={styles.carItem}>
            <div className={styles.passCar}>
              <p className={styles.xBoxPass2}>GAME PASS</p>
              <span className={styles.passFree}>Free</span>
            </div>
            <h4>Fortnite Cauchemars</h4>
            <p>Enjoy the play of adventure & more</p>
            <Link href="/">
              <a>
                <button>See details</button>
              </a>
            </Link>
          </div>
        </div>
        <div className={styles.carImages}>
          <img src="/rev3.png" alt="img" />
          <div className={styles.carItem}>
            <span className={styles.spanFree}>Free</span>
            <h4>Discord</h4>
            <p>Imagine your Life in a new Field</p>
            <Link href="/">
              <a>
                <button>See details</button>
              </a>
            </Link>
          </div>
        </div>
        <div className={styles.carImages}>
          <img src="/rev4.png" alt="img" />
          <div className={styles.carItem}>
            <span className={styles.spanFree}>Free</span>
            <h4>CoralDraw Graphics Suite</h4>
            <p>Pro illustration, layout, Graphics and more</p>
            <Link href="/">
              <a>
                <button>See details</button>
              </a>
            </Link>
          </div>
        </div>
        <div className={styles.carImages}>
          <img src="/rev5.png" alt="img" />
          <div className={styles.carItem}>
            <div className={styles.passCar}>
              <p className={styles.xBoxPass2}>GAME PASS</p>
              <span className={styles.passFree}>Free</span>
            </div>
            <h4>Hidden Games</h4>
            <p>Take your time to fight with Boss</p>
            <Link href="/">
              <a>
                <button>See details</button>
              </a>
            </Link>
          </div>
        </div>
        <div className={styles.carImages}>
          <img src="/rev6.png" alt="img" />
          <div className={styles.carItem}>
            <span className={styles.spanFree}>Free</span>
            <h4>Racing games</h4>
            <p>Rev up to high-speed action</p>
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

export default CarouselHome;
