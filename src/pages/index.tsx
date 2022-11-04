//Rebound Studios, 2022
//Author: Joel Williams

import Head from 'next/head'
import { ReactElement } from 'react'

import { NextPageWithLayout } from './_app'
import { HomeView } from '../views'
import { Layout } from '../components/layout'

const Home: NextPageWithLayout = () => {
  return (
    <div>
      <Head>
        <title>Baseball Toolbox</title>
        <meta name="description" content="Baseball Toolbox homepage" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomeView />
    </div>
  );  
}

Home.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}

export default Home;
