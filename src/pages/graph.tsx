import { NextPageWithLayout } from './_app';
import { ReactElement } from 'react';
import Head from 'next/head'
import { Layout } from '../components/layout';
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
    <Layout>
      {page}
    </Layout>
  );
}
    
export default Graph;