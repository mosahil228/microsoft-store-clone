import React from "react";
import styles from "../styles/Games.module.scss";
// import Link from "next/link";
// import Image from "next/image";
// import { AppOneM4 } from "../components/AppOneC";
import { AppThreeC } from "../components/AppOneC";
import SideBarNav from "../components/SideBarNav";

const GameSidebarCol = () => {
  return (
    <>
      <section className={styles.mainContainer}>
        <SideBarNav />
        <AppThreeC />
      </section>
    </>
  );
};

export default GameSidebarCol;
