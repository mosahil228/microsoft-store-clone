import React,{useState,useEffect} from 'react';
import Image from 'next/image';
import { GoSearch } from "react-icons/go";
import Link from "next/link";
import logo from "../public/logo.svg"
import g5 from "../public/google.png"
import styles from "../styles/Games.module.scss";
import {HiOutlineArrowLeft} from "react-icons/hi";
import {useRouter} from "next/router";
import useAuthStore from '../store/authStore';
import {googleLogout } from '@react-oauth/google';
const GameNavbar = () => {
  const router=useRouter();
  const { userProfile, removeUser} = useAuthStore();
  const [user,setUser]=useState();
  useEffect(() => {
   setUser(userProfile)
  
    
  }, [userProfile])

  const back=()=>{
    router.back();
  }
  return (
    <>
         <header className={styles.header}>
        <nav>
          <div className={styles.navbar}>
            <div className={styles.navItems}>
              <div className={styles.leftNav}>
             {<HiOutlineArrowLeft className={`${router.pathname == "/gamestore"? styles.backN : styles.backB}`} onClick={back}/>}
               
                <Image src={logo} width={25} height={25}/>
                <h4>Soft Store</h4>
              </div>
              <div className={styles.midNav}>
                <div className={styles.midItems}>
                  <input
                    type="text"
                    placeholder="Search apps, games, movies and more"
                    autoComplete="off"
                  />

                  <GoSearch className={styles.searchIcon} />
                </div>
              </div>
              <div className={styles.rightNav}>
                {user?(<div className={styles.rightNav}><Link href="/">
                  <a onClick={()=>{googleLogout();removeUser();}}><Image width={40} height={40} alt="logo" src={user.image}/></a>
                </Link>
                <Link href="/">
                  <a className={styles.rightUser} onClick={()=>{googleLogout();removeUser();}}>{user.userName}</a>
                </Link></div>):<div className={styles.rightNav}>
                <Link href="/"><a><Image  src={g5} width={40} height={40} alt="logo"/></a></Link>
                </div>}
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  )
}

export default GameNavbar;