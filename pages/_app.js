
import '../styles/globals.css'
import { SessionProvider } from "next-auth/react"
import Footer from './../components/bbc/Footer';
import Headers from '../components/bbc/Header';
import Header from '../components/Blood/Header';
import Navbar from '../components/Blood/Navber/Navber';

function MyApp({ Component,  
  pageProps: { session, ...pageProps } }) {
  return (
    <div>
    
       <SessionProvider session={session}>
      {/* <Headers/>  */}
  <Navbar/>
  <Component {...pageProps} />
  {/* <Footer/> */}
  </SessionProvider>
  </div>
  )
}

export default MyApp
