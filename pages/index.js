import React, { useState, useEffect } from "react";
import Home from "./home";
import logo from "../public/logo.png"
import spinner from "../public/spinner.gif"
import useAuthStore from '../store/authStore';
import { useRouter } from "next/router";
import styles from "../styles/Games.module.scss"
import Image from "next/image"

const index = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    let cancel = false;
    setLoading(true)
    setTimeout(() => {
      if (cancel) return;
      setLoading(false)
    }, 3000);
    return () => {
      cancel = true;
    }

  }, []);
  const router = useRouter();
  const [user, setUser] = useState();
  const { userProfile } = useAuthStore();
  useEffect(() => {
    setUser(userProfile)
  }, [userProfile])



  return (
    <>{loading ? <div className={styles.loadingMenu}>
      <Image src={logo} width={95} height={95} alt="" />
      <div  className={styles.loadingImg2}><Image src={spinner} width={30} height={30} alt="" /></div>
      

    </div> : <Home />}

    </>

  );
};

export default index;
