import React, { useState } from "react";
import Image from "next/image";
import AllGamesApi from "./AllGamesApi";
import GameFilter from "./GameFilter";
import AppFilter from "./AppFilter";
import AllAppsApi from "./AllAppsApi";
import { VscListFilter } from "react-icons/vsc";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import styles from "../styles/Games.module.scss";
import {
  MdOutlineStarPurple500,
  MdOutlineStarOutline,
  MdOutlineStarHalf,
} from "react-icons/md";


const GameAllComp = (props) => {
    const [itemsGames, setItemsGames] = useState(AllGamesApi);
    const filterGames = (categoryItem) => {
      const updatedItem = AllGamesApi.filter((curElem) => {
        return curElem.popular === categoryItem;
      });
      const updatedItem2 = AllGamesApi.filter((curElem) => {
        return curElem.category === categoryItem;
      });
      setItemsGames(updatedItem);
    };
    const filterGamesCat = (category) => {
      const updatedItem2 = AllGamesApi.filter((curElem) => {
        return curElem.category === category;
      });
      setItemsGames(updatedItem2);
    };
    const filterGames2 = (categoryItem) => {
      setItemsGames(AllGamesApi);
    };
    const [collapse, setCollapse] = useState(styles.filterCollapse);
    const [rotate, setRotate] = useState(styles.rotateN);
    const toggleAccordian = () => {
      setCollapse(
        collapse === styles.filterCollapse
          ? styles.activeCollapse
          : styles.filterCollapse
      );
      setRotate(rotate === styles.rotateN ? styles.rotateY : styles.rotateN);
    };
    const[dNone,setDNone]=useState(styles.dNone);
    const[dBlock,setDBlock]=useState(styles.dBlock);
    const displayNone = () => {
        setDNone(styles.dNone);
        setDBlock(styles.dBlock);
    };
    const displayBlock = () => {
        setDBlock(styles.dNone);
        setDNone(styles.dBlock);
    };


    // apps use state..
    const [itemsApps, setItemsApps] = useState(AllAppsApi);
    const filterApps = (categoryItem) => {
      const updatedItem = AllAppsApi.filter((curElem) => {
        return curElem.popular === categoryItem;
      });
      const updatedItem2 = AllAppsApi.filter((curElem) => {
        return curElem.category === categoryItem;
      });
      setItemsApps(updatedItem);
    };
    const filterAppsCat = (category) => {
      const updatedItem2 = AllAppsApi.filter((curElem) => {
        return curElem.category === category;
      });
      setItemsApps(updatedItem2);
    };
    const filterApps2 = (categoryItem) => {
      setItemsApps(AllAppsApi);
    };
   
   
    return (
      <>
        <section className={`${styles.sSection} ${dBlock}`}>
          <div className={styles.sContainer}>
            <div className={styles.midContainer}>
              <div className={styles.freeApps}>
                <div className={`${styles.appHeading} ${styles.appHeadingAll}`}>
                  <div className={styles.leftHead}>
                    <h3>Top free Games</h3>
                  </div>
                  <div className={styles.rightHead}>
                    <button
                      className={styles.rightHeadBtn}
                      onClick={toggleAccordian}
                    >
                      <span>
                        <VscListFilter /> Filters
                      </span>
                      <span>
                        <MdOutlineKeyboardArrowDown className={rotate} />
                      </span>
                    </button>
                  </div>
                </div>
                <div className={collapse}>
                  <GameFilter filterGames={filterGames}  displayBlock={displayBlock } filterGames2={filterGames2} filterGamesCat={filterGamesCat}/>
                </div>
                
                <div className={`${styles.appCard} ${styles.appCardAll} ${styles.resAllGames}`}>
                  {itemsGames.map((curElem,ind) => {
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
          {/* ///appps section. */}
        <section className={`${styles.sSection} ${dNone}`}>
        <div className={styles.sContainer}>
          <div className={styles.midContainer}>
            <div className={styles.freeApps}>
              <div className={`${styles.appHeading} ${styles.appHeadingAll}`}>
                <div className={styles.leftHead}>
                  <h3>Top free apps</h3>
                </div>
                <div className={styles.rightHead}>
                  <button
                    className={styles.rightHeadBtn}
                    onClick={toggleAccordian}
                  >
                    <span>
                      <VscListFilter /> Filters
                    </span>
                    <span>
                      <MdOutlineKeyboardArrowDown className={rotate} />
                    </span>
                  </button>
                </div>
              </div>
              <div className={collapse}>
                <AppFilter displayNone={displayNone}  filterApps={filterApps} filterApps2={filterApps2} filterAppsCat={filterAppsCat}/>
              </div>
              
              <div className={`${styles.appCard} ${styles.appCardAll} ${styles.resAllCard}`}>
                {itemsApps.map((curElem,ind) => {
                  const { id, img, title, mark, ratingNo, free } = curElem;
                  return (
                    
                      <div
                        className={`${styles.aCards} ${styles.aCards5}`}
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
export default GameAllComp;