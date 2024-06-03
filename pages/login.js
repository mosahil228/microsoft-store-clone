import React from 'react'
import two from "../public/two.svg"
import styles from "../styles/Games.module.scss";
import Image from 'next/image';
import Link from "next/link"
import iL from "../public/iL.gif"
import iG from "../public/iG.png"
import iI from "../public/iI.gif"
import iGm from "../public/iGm.png"
import { GoogleLogin, googleLogout } from '@react-oauth/google';
import { createOrGetUser } from '../utils';
import useAuthStore from '../store/authStore';
import router from 'next/router';

const login = () => {
    
    
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const {userProfile,addUser,removeUser}=useAuthStore();
    if(userProfile){
        router.push("/gamestore")
    }
    return (
        <>
            <div className={styles.storeLogin}>
                <div className={styles.loginMain}>

                    <div className={styles.loginLeft}>

                        <div className={styles.imgG}>
                            <Image width={40} height={40} src={two} />
                        </div>
                        <h1>Login</h1>
                        <p>login to dummy play store!</p>
                        <GoogleLogin text={"continue_with"} theme={"filled_blue"} width="304px" onSuccess={(response) =>createOrGetUser(response,addUser)} onError={() => console.log("error")} />
                        <div className={styles.orContainer}>
                            <div className={styles.line}></div>
                            <span>Or</span>
                            <div className={styles.line}></div>
                        </div>
                        <Link href="/gamestore">
                        <div className={styles.gFree} >
                           
                                <a>
                                    Start Free
                                </a>
                            
                        </div>
                        </Link>
                       
                        <div className={styles.gFooter}>
                            <p>Contact me!</p>
                            <div className={styles.cLinks}>
                                <Link href="https://www.linkedin.com/in/ritik-kumar-448753222/">
                                    <a target="_blank"> <Image src={iL} width={40} height={40} alt="git" /></a>
                                </Link>
                              
                                <Link href="mailto:ritikshm30@gmail.com">
                                    <a target="_blank"><Image src={iGm} width={40} height={40} alt="git" /></a>
                                </Link>
                            </div>


                        </div>
                       


                    </div>
                    <div className={styles.loginRight}>

                    </div>
                </div>
            </div>
        </>
    )
}

export default login