import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { SideBar } from '../components/SideBar';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <div className="">
        <SideBar />
        <Component {...pageProps} />
      </div>
    </>
  )
}

export default MyApp;
