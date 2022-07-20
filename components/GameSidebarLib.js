import React, { useState } from "react";
import styles from "../styles/Games.module.scss";
import SideBarNav from "../components/SideBarNav";
import Link from "next/link";
import Image from "next/image";
import { AiOutlineCloudDownload } from "react-icons/ai";
import { BsThreeDots } from "react-icons/bs";
import { gameApi10 } from "./gameApi";
const GameSidebarLib = () => {
  const [sorts, setSorted] = useState({
    sort: "asc",
  });
  const [sortBtnName, setSortBtnName] = useState("Sort by name");
  const sortBtn = () => {
    if (sorts.sort == "asc") {
      setSorted({
        sort: "desc",
      });
      const sorted = items.sort((a, b) => {
        const isReversed = sorts === "asc" ? -1 : 1;
        return isReversed * a.title1.localeCompare(b.title1);
      });
      setSortBtnName("Default");
    } else {
      setSorted({
        sort: "asc",
      });
      const sorted = items.sort((a, b) => {
        const isReversed = sorts === "asc" ? 1 : -1;
        return a.Nid - b.Nid;
      });
      setSortBtnName("Sort by name");
    }
  };
  const [items, setItems] = useState(gameApi10);
  const filterItem = (categoryItem) => {
    const updatedItem = gameApi10.filter((curElem2) => {
      return curElem2.category === categoryItem;
    });
    setItems(updatedItem);
  };
  

  return (
    <>
      <section className={`${styles.mainContainer} ${styles.gameBg}`}>
        <SideBarNav />
        <section className={styles.sSection2}>
          <div className={`${styles.sContainer} ${styles.libContainer}`}>
            <div className={styles.midContainer}>
              <div className={styles.libMain}>
                <div className={styles.libHeaderT}>
                  <h3>Library</h3>
                </div>
                <div className={styles.libHeaderB}>
                  <div className={styles.libLeftC}>
                    <h4>Updates & downloads</h4>
                    <p>
                      Check for additional updates by clicking "Get updates"
                    </p>
                  </div>
                  <div className={styles.libRightC}>
                    <div className={styles.tooltip}>No updates available</div>
                    <button>Get updates</button>
                  </div>
                </div>
              </div>
              <div className={styles.libFilter}>
                <div className={styles.filterLeft}>
                  <div className={styles.filterItems}>
                    <button onClick={() => setItems(gameApi10)}>All</button>
                  </div>
                  <div className={styles.filterItems}>
                    <button onClick={() => filterItem("Apps")}>Apps</button>
                  </div>
                  <div className={styles.filterItems}>
                    <button onClick={() => filterItem("game")}>Games</button>
                  </div>
                  <div className={styles.filterItems}>
                    <button onClick={() => filterItem("Movie")}>
                      Movies & Tv
                    </button>
                  </div>
                  <div className={styles.filterItems}>
                    <button onClick={() => filterItem("Apps")}>
                      Include with device
                    </button>
                  </div>
                </div>
                <div className={styles.filterRight}>
                  <div className={styles.filterItems}>
                    <button onClick={sortBtn}>{sortBtnName}</button>
                  </div>
                </div>
              </div>
              {items.map((curElem,ind) => {
                const { id, img, title1, title2, Apps, date } = curElem;
                return (
                  
                    <div className={styles.filterAppContainer} key={ind}>
                      <div className={styles.filterAppItems}>
                        <div className={`${styles.f1App} ${styles.f1AppF1}`}>
                          <div className={styles.f1Logo}>
                            <Image
                              src={img}
                              width="120"
                              height="120"
                              alt="img"
                            />
                          </div>
                          <div className={styles.f1Heading}>
                            <h4>{title1}</h4>
                            <p>{title2}</p>
                          </div>
                        </div>
                        <div className={`${styles.f1App} ${styles.f1AppF2}`}>
                          <h4>{Apps}</h4>
                        </div>
                        <div className={`${styles.f1App} ${styles.f1AppF3}`}>
                          <h4>{date}</h4>
                        </div>
                        <div className={`${styles.f1App} ${styles.f1AppF4}`}>
                          <div className={styles.f1Download}>
                            <Link href="/gamestore/library">
                              <a>
                                <AiOutlineCloudDownload />
                              </a>
                            </Link>
                          </div>
                          <div className={styles.f1Dots}>
                            <button>
                              <BsThreeDots />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  
                );
              })}
            </div>
          </div>
        </section>
      </section>
    </>
  );
};
export default GameSidebarLib;
