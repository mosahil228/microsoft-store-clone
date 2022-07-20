import React from "react";
import Image from "next/image";
import {gameApi4,gameApi6} from "./gameApi";
import styles from "../styles/Games.module.scss";
import {
  MdOutlineStarPurple500,
  MdOutlineStarOutline,
  MdOutlineStarHalf,
} from "react-icons/md";
import gameApi2 from "./gameApi2";
import Link from "next/link";

const AppOneC2=()=>{
  return (
    <>
      <section className={styles.sSection}>
          <div className={styles.sContainer}>
            <div className={styles.midContainer}>
              <div className={styles.essentialApps}>
                <div className={styles.mainEss}>
                  <div className={styles.leftEssItem}>
                    <h3>Essential apps</h3>
                    <p>Take your Windows experience to new heights with these must-have apps</p>
                    <Link href="/"><a><button>See all</button></a></Link>
                  </div>
                  <div className={styles.appCard}>
                    {gameApi2.map((curElem,ind) => {
                      const { id, img, title, mark,ratingNo,free } = curElem;
                      return (
                        
                        <div className={styles.aCards2} key={ind}>
                          <div className={styles.topCardItem}>
                            <div className={styles.cardImg}>
                              <Image
                                src={img}
                                width="120"
                                height="120"
                                alt="img"
                              />
                            </div>
                          </div>
                          <div className={styles.botCardItem}>
                            <div className={styles.bTopItems}>
                              <h4>{title}</h4>
                              <p>{mark}</p>
                              <div className={styles.rating}>
                                <span>
                                  <MdOutlineStarPurple500 />
                                </span>
                                <span>
                                  <MdOutlineStarPurple500 />
                                </span>
                                <span>
                                  <MdOutlineStarPurple500 />
                                </span>
                                <span>
                                  <MdOutlineStarHalf />
                                </span>
                                <span>
                                  <MdOutlineStarOutline />
                                </span>
                                <span className={styles.ratingNo}>{ratingNo}</span>
                              </div>
                            </div>
                            <div className={styles.bbItems}>
                              <p>{free}</p>
                            </div>
                          </div>
                         </div>
                        
                      );
                    })}
                </div>
                </div>
              </div>
            </div>
          </div>
        </section>
    </>
  )
}
const AppOneC3=()=>{
  return (
    <>
      <section className={styles.sSection}>
          <div className={styles.sContainer}>
            <div className={styles.midContainer}>
              <div className={`${styles.essentialApps} ${styles.essentialApps2}`}>
                <div className={styles.mainEss}>
                  <div className={styles.leftEssItem}>
                    <h3>Best entertainment apps</h3>
                    <p>Discover apps to watch the best movies, Tv series, and sports. Stream the music you love and more.</p>
                    <Link href="/"><a><button>See all</button></a></Link>
                  </div>
                  <div className={styles.appCard}>
                    {gameApi4.map((curElem,ind) => {
                      const { id, img, title, mark,ratingNo,free } = curElem;
                      return (
                        
                        <div className={`${styles.aCards2} ${styles.aCards3}`} key={ind}>
                          <div className={styles.topCardItem}>
                            <div className={styles.cardImg}>
                              <Image
                                src={img}
                                width="120"
                                height="120"
                                alt="img"
                              />
                            </div>
                          </div>
                          <div className={styles.botCardItem}>
                            <div className={styles.bTopItems}>
                              <h4>{title}</h4>
                              <p>{mark}</p>
                              <div className={styles.rating}>
                                <span>
                                  <MdOutlineStarPurple500 />
                                </span>
                                <span>
                                  <MdOutlineStarPurple500 />
                                </span>
                                <span>
                                  <MdOutlineStarPurple500 />
                                </span>
                                <span>
                                  <MdOutlineStarHalf />
                                </span>
                                <span>
                                  <MdOutlineStarOutline />
                                </span>
                                <span className={styles.ratingNo}>{ratingNo}</span>
                              </div>
                            </div>
                            <div className={styles.bbItems}>
                              <p>{free}</p>
                            </div>
                          </div>
                         </div>
                        
                      );
                    })}
                </div>
                </div>
              </div>
            </div>
          </div>
        </section>
    </>
  )
}

// ..
const AppOneG1=(props)=>{
  return (
    <>
      <section className={styles.sSection}>
          <div className={styles.sContainer}>
            <div className={styles.midContainer}>
              <div className={`${styles.essentialApps} ${styles.essentialApps3}`}>
                <div className={styles.mainEss}>
                  <div className={styles.leftEssItem}>
                    <h3>Feautured Free games</h3>
                    <p>Explore free fun to play games and find a new favourite you want.</p>
                    <Link href="/"><a><button>See all</button></a></Link>
                  </div>
                  <div className={styles.appCard}>
                    {gameApi6.map((curElem,ind) => {
                      const { id, img, title, mark,ratingNo,free } = curElem;
                      return (
                        
                        <div className={styles.aCards2} key={ind}>
                          <div className={`${styles.topCardItem} ${styles.topCardItem2}`}>
                            <div className={`${styles.cardImg} ${styles.cardImg4}`}>
                              <Image
                                src={img}
                                width="313"
                                height="446"
                                alt="img"
                              />
                            </div>
                          </div>
                          <div className={`${styles.botCardItem} ${styles.botCardItem2}`}>
                            <div className={styles.bTopItems}>
                              <h4>{title}</h4>
                              <p>{mark}</p>
                              <div className={styles.rating}>
                                <span>
                                  <MdOutlineStarPurple500 />
                                </span>
                                <span>
                                  <MdOutlineStarPurple500 />
                                </span>
                                <span>
                                  <MdOutlineStarPurple500 />
                                </span>
                                <span>
                                  <MdOutlineStarHalf />
                                </span>
                                <span>
                                  <MdOutlineStarOutline />
                                </span>
                                <span className={styles.ratingNo}>{ratingNo}</span>
                              </div>
                            </div>
                            <div className={styles.bbItems}>
                              <p>{free}</p>
                            </div>
                          </div>
                         </div>
                        
                      );
                    })}
                </div>
                </div>
              </div>
            </div>
          </div>
        </section>
    </>
  )
}
export default AppOneC2;
export  {AppOneC3,AppOneG1};