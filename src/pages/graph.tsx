import { NextPageWithLayout } from './_app';
import { ReactElement } from 'react';
import Head from 'next/head'
import { SideBarLayout } from '../components/sidebar-layout';
import { GraphView } from '../views';

const Graph: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Graph</title>
        <meta name="description" content="data view page." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <GraphView />
    </>
  );
}


Graph.getLayout = function getLayout(page: ReactElement) {
  return (
    <SideBarLayout>
      {page}
    </SideBarLayout>
  );
}
    
export default Graph;