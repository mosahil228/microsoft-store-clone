import React from "react";
import Image from "next/image";
import gameApi from "./gameApi";
import ColCards from "./ColCards";
import GameAllComp from "./GameAllComp";
import AppAllComp from "./AppAllComp";
import  { GameSixApi ,GameSevenApi} from "./AllGamesApi";
import {
  gameApi3,
  gameApi5,
  gameApi7,
  gameApi8,
  gameApi9,
  gameApi11,
  gameApiEx1,
  gameApiEx2,
} from "./gameApi";
import styles from "../styles/Games.module.scss";
import {
  MdOutlineStarPurple500,
  MdOutlineStarOutline,
  MdOutlineStarHalf,
} from "react-icons/md";
import Link from "next/link";

const AppOneC = () => {
  return (
    <>
      <section className={styles.sSection}>
        <div className={styles.sContainer}>
          <div className={styles.midContainer}>
            <div className={styles.freeApps}>
              <div className={styles.appHeading}>
                <div className={styles.leftHead}>
                  <h3>Top free apps</h3>
                </div>
                <div className={styles.rightHead}>
                  <Link href="/gamestore/all_apps">
                    <a>See all</a>
                  </Link>
                </div>
              </div>
              <div className={styles.appGridcard}>
                {gameApi.map((curElem,ind) => {
                  const { id, img, title, mark, ratingNo, free } = curElem;
                  return (
                      <div key={ind} className={styles.aGridcard}>
                        <div className={styles.topCardItem}>
                          <div className={styles.cardImg}>
                            <Image
                              src={img}
                              width="80"
                              height="80"
                              alt="img"
                            />
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
                                <span className={styles.ratingNo}>
                                  {ratingNo}
                                </span>
                              </div>
                            </div>

                          </div>
                          


                        </div>
                        <div className={styles.bbItems}>
                            <p>{free}</p>
                        </div>
                      </div>
                    
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
const AppOneAll = (props) => {
  return (
    <AppAllComp />
  )
};
const GameOneAll = (props) => {
  return (
    <>
      <GameAllComp />
    </>
  )

}
const GamesFive = (props) => {
  return (
    <>
     <section className={styles.sSection}>
          <div className={styles.sContainer}>
            <div className={styles.midContainer}>
              <div className={styles.freeApps}>

              <div className={styles.appHeading}>
                <div className={styles.leftHead}>
                  <h3>Best selling games</h3>
                </div>
                <div className={styles.rightHead}>
                  <Link href="/gamestore/all_games">
                    <a>See all</a>
                  </Link>
                </div>
              </div>
                
                <div className={`${styles.appCard} ${styles.appCardAll} ${styles.resCardAll}`}>
                  {GameSixApi.map((curElem,ind) => {
                    const { id, img, title, mark, ratingNo, free } = curElem;
                    return (
                      
                      <div
                          className={`${styles.aCards} ${styles.aCardsMine}`}
                          key={ind}
                        >
                          <div className={styles.topCardItem}>
                            <div
                              className={`${styles.cardImg} ${styles.cardImg5}`}
                            >
                              <Image
                                src={img}
                                height="454"
                                width="345"
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
                                <span className={styles.ratingNo}>
                                  {ratingNo}
                                </span>
                              </div>
                            </div>
                            <div className={styles.bbItems}>
                              <p className={styles.xBoxPass}>GAME PASS</p>
                              <p className={styles.freeP}>{free}</p>
                            </div>
                          </div>
                        </div>
                      
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>
    </>
  )

}
export const GameSix = (props) => {
  return (
    <>
     <section className={styles.sSection}>
          <div className={styles.sContainer}>
            <div className={styles.midContainer}>
              <div className={styles.freeApps}>

              <div className={styles.appHeading}>
                <div className={styles.leftHead}>
                  <h3>Notable pc Games</h3>
                </div>
                <div className={styles.rightHead}>
                  <Link href="/gamestore/all_games">
                    <a>See all</a>
                  </Link>
                </div>
              </div>
                
                <div className={`${styles.appCard} ${styles.appCardAll} ${styles.resCardAll}`}>
                  {GameSevenApi.map((curElem,ind) => {
                    const { id, img, title, mark, ratingNo, free } = curElem;
                    return (
                      
                      <div
                          className={`${styles.aCards} ${styles.aCardsMine}`}
                          key={ind}
                        >
                          <div className={styles.topCardItem}>
                            <div
                              className={`${styles.cardImg} ${styles.cardImg5}`}
                            >
                              <Image
                                src={img}
                                height="454"
                                width="345"
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
                                <span className={styles.ratingNo}>
                                  {ratingNo}
                                </span>
                              </div>
                            </div>
                            <div className={styles.bbItems}>
                              <p className={styles.xBoxPass}>GAME PASS</p>
                              <p className={styles.freeP}>{free}</p>
                            </div>
                          </div>
                        </div>
                      
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>
    </>
  )

}


const AppOneM1 = () => {
  return (
    <>
      <section className={styles.sSection}>
        <div className={styles.sContainer}>
          <div className={styles.midContainer}>
            <div className={styles.freeApps}>
              <div className={styles.appHeading}>
                <div className={styles.leftHead}>
                  <h3>Best video streaming apps</h3>
                </div>
              </div>
              <div className={styles.appCard}>
                {gameApi3.map((curElem,ind) => {
                  const { img, title, mark, ratingNo, free } = curElem;
                  return (
                      <div className={`${styles.aCards} ${styles.resAcards}`} key={ind}>
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
                              <span className={styles.ratingNo}>
                                {ratingNo}
                              </span>
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
      </section>
    </>
  );
};
export const AppOneEx1 = () => {
  return (
    <>
      <section className={styles.sSection}>
        <div className={styles.sContainer}>
          <div className={styles.midContainer}>
            <div className={styles.freeApps}>
              <div className={styles.appHeading}>
                <div className={styles.leftHead}>
                  <h3>Best common apps</h3>
                </div>
              </div>
              <div className={styles.appCard}>
                {gameApiEx1.map((curElem,ind) => {
                  const { id, img, title, mark, ratingNo, free } = curElem;
                  return (
                    
                      <div className={`${styles.aCards} ${styles.resAcards}`} key={ind}>
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
                              <span className={styles.ratingNo}>
                                {ratingNo}
                              </span>
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
      </section>
    </>
  );
};
export const AppOneEx2 = () => {
  return (
    <>
      <section className={styles.sSection}>
        <div className={styles.sContainer}>
          <div className={styles.midContainer}>
            <div className={styles.freeApps}>
              <div className={styles.appHeading}>
                <div className={styles.leftHead}>
                  <h3>Best Productivity apps</h3>
                </div>
              </div>
              <div className={styles.appCard}>
                {gameApiEx2.map((curElem,ind) => {
                  const { id, img, title, mark, ratingNo, free } = curElem;
                  return (
                    
                      <div className={`${styles.aCards} ${styles.resAcards}`} key={ind}>
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
                              <span className={styles.ratingNo}>
                                {ratingNo}
                              </span>
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
      </section>
    </>
  );
};

const AppOneM2 = () => {
  return (
    <>
      <section className={styles.sSection}>
        <div className={styles.sContainer}>
          <div className={styles.midContainer}>
            <div className={styles.freeApps}>
              <div className={styles.appHeading}>
                <div className={styles.leftHead}>
                  <h3>Best selling games</h3>
                </div>
                <div className={styles.rightHead}>
                  <Link href="/gamestore/all_games">
                    <a>See all</a>
                  </Link>
                </div>
              </div>
              <div className={styles.appCard}>
                {gameApi5.map((curElem,ind) => {
                  const { id, img, title, mark, ratingNo, free } = curElem;
                  return (
                    
                      <div
                        className={`${styles.aCards} ${styles.resAcards} ${styles.aCards3}`}
                        key={ind}
                      >
                        <div className={styles.topCardItem}>
                          <div
                            className={`${styles.cardImg} ${styles.cardImg2}`}
                          >
                            <Image
                              src={img}
                              height="454"
                              width="345"
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
                              <span className={styles.ratingNo}>
                                {ratingNo}
                              </span>
                            </div>
                          </div>
                          <div className={styles.bbItems}>
                            <p className={styles.freeP}>{free}</p>
                          </div>
                        </div>
                      </div>
                    
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
const AppOneM3 = () => {
  return (
    <>
      <section className={styles.sSection}>
        <div className={styles.sContainer}>
          <div className={styles.midContainer}>
            <div className={styles.freeApps}>
              <div className={`${styles.appCard} ${styles.appCard2} ${styles.resAppCard10}`}>
                {gameApi7.map((curElem,ind) => {
                  const { id, img, title, mark, ratingNo, free } = curElem;
                  return (
                    
                      <div
                        className={`${styles.aCards} ${styles.aCards4}`}
                        key={ind}
                      >
                        <div className={styles.topCardItem}>
                          <div
                            className={`${styles.cardImg} ${styles.cardImg5}`}
                          >
                            <Image
                              src={img}
                              height="454"
                              width="345"
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
                              <span className={styles.ratingNo}>
                                {ratingNo}
                              </span>
                            </div>
                          </div>
                          <div className={styles.bbItems}>
                            <p className={styles.freeP}>{free}</p>
                          </div>
                        </div>
                      </div>
                    
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
const AppOneM4 = () => {
  return (
    <>
      <section className={styles.sSection}>
        <div className={styles.sContainer}>
          <div className={styles.midContainer}>
            <div className={styles.freeApps}>
              <div className={`${styles.appCard} ${styles.appCard2} ${styles.resAppCard11}`}>
                {gameApi8.map((curElem,ind) => {
                  const { id, img, title, mark, ratingNo, free } = curElem;
                  return (
                    
                      <div
                        className={`${styles.aCards} ${styles.aCards6}`}
                        key={ind}
                      >
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
                              <span className={styles.ratingNo}>
                                {ratingNo}
                              </span>
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
      </section>
    </>
  );
};
const AppOneM5 = () => {
  return (
    <>
      <section className={styles.sSection}>
        <div className={styles.sContainer}>
          <div className={styles.midContainer}>
            <div className={styles.freeApps}>
              <div className={`${styles.appCard} ${styles.appCard2} ${styles.resAppCard11}`}>
                {gameApi9.map((curElem,ind) => {
                  const { id, img, title, mark, ratingNo, free } = curElem;
                  return (
                    
                      <div
                        className={`${styles.aCards} ${styles.aCards6}`}
                        key={ind}
                      >
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
                              <span className={styles.ratingNo}>
                                {ratingNo}
                              </span>
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
      </section>
    </>
  );
};

// two c...
const AppTwoC = () => {
  return (
    <>
      <section className={styles.sSection}>
        <div className={styles.sContainer}>
          <div className={styles.midContainer}>
            <div className={styles.freeApps}>
              <div className={styles.appHeading}>
                <div className={styles.leftHead}>
                  <h3>Top free apps</h3>
                </div>
                <div className={styles.rightHead}>
                  <Link href="/gamestore/collections">
                    <a>See all</a>
                  </Link>
                </div>
              </div>
              <div className={styles.gameCollection}>
                <div className={styles.collectionItem}>
                  <div className={styles.gameCard}>
                    <Link href="/gamestore/entertainment_apps">
                      <a>
                        <img
                          src="/as2.png"
                          alt="img"
                        />
                      </a>
                    </Link>
                    <div className={styles.cContent}>
                      <h2>Best entertainment apps</h2>
                      <p className={styles.contentP}>
                        Enjoy hit movies, Tv,anyShows - anytime, anywhere.
                      </p>
                    </div>
                  </div>
                  <div className={styles.gameCard}>
                    <Link href="/gamestore/action_game">
                      <a>
                        <img
                          src="/ac.jpg"
                          alt="img"
                        />
                      </a>
                    </Link>
                    <div className={styles.cContent}>
                      <h2>Action Games</h2>
                      <p className={styles.contentP}>
                        Put your Brain power to the Game.
                      </p>
                    </div>
                  </div>

                  <div className={styles.gameCard}>
                    <Link href="/gamestore/helpfull_apps">
                      <a>
                        <img
                          src="/ac2.png"
                          alt="img"
                        />
                      </a>
                    </Link>

                    <div>
                      <div className={styles.cContent}>
                        <h2>Connect and stay informed</h2>
                        <p className={styles.contentP}>
                          Catch up on news and stay connected.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
const AppThreeC = () => {
  return (
    <>
      <section className={styles.sSection}>
        <div className={styles.sContainer}>
          <div className={styles.midContainer}>
            <div className={styles.freeApps}>
              <div className={styles.appHeading}>
                <div className={styles.leftHead}>
                  <h3>Collections</h3>
                </div>
              </div>
              <div className={styles.colContainer}>
                <ColCards
                  link="/gamestore/xbox_games"
                  src="/h2.png"
                  h2="Best of Xbox Game studios"
                  para="Great game for everyone"
                />
                <ColCards
                  link="/gamestore/hidden_object_games"
                  src="/h1.png"
                  h2="Hidden object Games"
                  para="Explore mysteries and mythic worlds"
                />
                <ColCards
                  link="/gamestore/casino_games"
                  src="/h5.png"
                  h2="Casino Games"
                  para="Play-vegas style games"
                />
                <ColCards
                  link="/gamestore/editing_apps"
                  src="/h4.png"
                  h2="Best photo editing apps"
                  para="Create amazing photo and videos"
                />
                <ColCards
                  link="/gamestore/helpfull_apps"
                  src="/ac2.png"
                  h2="Connect and stay informed"
                  para="Catch up on news and stay connected."
                />
                <ColCards
                  link="/gamestore/action_game"
                  src="/ac.jpg"
                  h2="Action games"
                  para="Put your Brain power to the Game."
                />
                <ColCards
                  link="/gamestore/mind_games"
                  src="/h3.png"
                  h2="Mind Games"
                  para="Use your logic to conquer in game"
                />
                <ColCards
                  link="/gamestore/entertainment_apps"
                  src="/as2.png"
                  h2="Best entertainment apps"
                  para="Enjoy hit movies, Tv,anyShows - anytime, anywhere."
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
const AppOneM6 = () => {
  return (
    <>
      <section className={styles.sSection}>
        <div className={styles.sContainer}>
          <div className={styles.midContainer}>
            <div className={styles.freeApps}>
              <div className={`${styles.appCard} ${styles.appCard2} ${styles.resAppCard10}`}>
                {gameApi11.map((curElem,ind) => {
                  const { id, img, title, mark, ratingNo, free } = curElem;
                  return (
                    
                      <div
                        className={`${styles.aCards} ${styles.aCards4}`}
                        key={ind}
                      >
                        <div className={styles.topCardItem}>
                          <div
                            className={`${styles.cardImg} ${styles.cardImg5}`}
                          >
                            <Image
                              src={img}
                              height="454"
                              width="345"
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
                              <span className={styles.ratingNo}>
                                {ratingNo}
                              </span>
                            </div>
                          </div>
                          <div className={styles.bbItems}>
                            <p className={styles.xBoxPass}>GAME PASS</p>
                            <p className={styles.freeP}>{free}</p>
                          </div>
                        </div>
                      </div>
                    
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AppOneC;
export {
  AppOneM1,
  AppOneM2,
  AppTwoC,
  AppOneM3,
  AppOneM4,
  AppOneM5,
  AppOneM6,
  AppThreeC,
  AppOneAll,
  GameOneAll,
  GamesFive,
};
