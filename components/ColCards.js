import React from "react";
import Image from "next/image";
import styles from "../styles/Games.module.scss";
import Link from "next/link";

const ColCards = (props) => {
  return (
    <>
      <Link href={props.link}>
        <a>
          <div className={styles.col}>
            <Image src={props.src} width="1920" height="1080" alt="img" />

            <div className={styles.cContent}>
              <h2>{props.h2}</h2>
              <p className={styles.contentP}>{props.para}</p>
            </div>
          </div>
        </a>
      </Link>
    </>
  );
};

export default ColCards;
