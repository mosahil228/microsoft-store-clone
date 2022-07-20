import React from 'react';
import styles from "../styles/Games.module.scss";
import Link from "next/link";
import { MdHomeFilled } from "react-icons/md";
import { IoGameControllerOutline } from "react-icons/io5";
import { IoApps } from "react-icons/io5";
import { IoHelpCircleOutline } from "react-icons/io5";
import { VscLibrary } from "react-icons/vsc";
import { useRouter } from 'next/router';

const SideBarNav = ({rout,routColor,rout1,routColor1}) => {
  const router = useRouter();
  return (
   <>
   <div className={styles.sidebar}>
          <div className={styles.sideItems}>
            <div className={styles.leftSide}>
              <div className={`${styles.leftItems} ${styles.leftItems4} ${router.pathname == "/"||router.pathname == "/gamestore" ? styles.leftItems3 : styles.leftItems2}`}>
                <Link href="/gamestore">
                  <a>
                    <MdHomeFilled
                      className={`${styles.leftIcon} ${styles.leftIcon3} ${router.pathname == "/"||router.pathname == "/gamestore" ? styles.leftIcon2 : styles.leftIcon} `}
                    />
                    <span  className={`${router.pathname == "/"||router.pathname == "/gamestore" ? styles.spanNone : styles.spanBlock}`}>Home</span>
                  </a>
                </Link>
              </div>
              
              <div className={`${styles.leftItems} ${routColor1}  ${router.pathname == "/gamestore/games" ? styles.leftItems3 : styles.leftItems2}`}>
                <Link href="/gamestore/games">
                  <a>
                    <IoGameControllerOutline className={`${styles.leftIcon} ${router.pathname == "/gamestore/games" ? styles.leftIcon4 : ""} ${rout1}`} />
                    <span className={`${router.pathname == "/gamestore/games" ? styles.spanNone : styles.spanBlock}`}>Gaming</span>
                  </a>
                </Link>
              </div>
              <div className={`${styles.leftItems} ${routColor} ${router.pathname == "/gamestore/apps" ? styles.leftItems3 : styles.leftItems2}`} >
                <Link href="/gamestore/apps">
                  <a >
                    <IoApps className={`${styles.leftIcon} ${router.pathname == "/gamestore/apps" ? styles.leftIcon4 : ""} ${rout}` } />
                    <span  className={`${router.pathname == "/gamestore/apps" ? styles.spanNone : styles.spanBlock}`}>Apps</span>
                  </a>
                </Link>
              </div>
            </div>
            <div className={`${styles.leftSide} ${styles.leftSide2}`}>
              <div className={`${styles.leftItems}  ${router.pathname == "/gamestore/library" ? styles.leftItems3 : styles.leftItems2}`}>
                <Link href="/gamestore/library">
                  <a >
                    <VscLibrary className={`${styles.leftIcon} ${router.pathname == "/gamestore/library" ? styles.leftIcon4 : ""}`} />
                    <span className={`${router.pathname == "/gamestore/library" ? styles.spanNone : styles.spanBlock}`}>Library</span>
                  </a>
                </Link>
              </div>
              <div className={`${styles.leftItems} ${styles.leftItems2}`}>
                <Link href="https://support.microsoft.com/en-us" >
                  <a target="_blank" className={router.pathname == "/gamestore" ? "active" : ""}>
                    <IoHelpCircleOutline className={styles.leftIcon} />
                    <span>Help</span>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
   </>
  )
}

export default SideBarNav;