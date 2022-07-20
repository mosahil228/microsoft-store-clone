import '../styles/globals.css';
import { useState, useEffect } from 'react';
import LoadingBar from 'react-top-loading-bar'
import { useRouter } from 'next/router'
import { GoogleOAuthProvider } from '@react-oauth/google';




function MyApp({ Component, pageProps}) {
  const router = useRouter();
  const [progress, setProgress] = useState(0)

 
  
  useEffect(() => {
    router.events.on('routeChangeStart', () => {
      setProgress(40)
    })
    router.events.on('routeChangeComplete', () => {
      setProgress(100)
    })

  }, []);
  return <GoogleOAuthProvider clientId={`${process.env.NEXT_PUBLIC_GOOGLE_API_TOKEN}`} >
    <LoadingBar
      color='#373F45'
      progress={progress}
      onLoaderFinished={() => setProgress(0)}
    />
    
    <Component {...pageProps} />
  </GoogleOAuthProvider>

}

export default MyApp
