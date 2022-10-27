import type { AppProps } from 'next/app'
import { SideBar } from '../components/SideBar';

import '../styles/globals.css'

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
