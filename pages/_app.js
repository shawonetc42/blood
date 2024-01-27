
import '../styles/globals.css'
import { SessionProvider } from "next-auth/react"
import Navbar from '../components/Blood/Navber/Navber';

function MyApp({ Component,  
  pageProps: { session, ...pageProps } }) {
  return (
    <div>
    
       <SessionProvider session={session}>
      {/* <Headers/>  */}

  <Component {...pageProps} />
  {/* <Footer/> */}
  </SessionProvider>
  </div>
  )
}

export default MyApp
