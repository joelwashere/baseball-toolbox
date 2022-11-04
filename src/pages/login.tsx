import { NextPageWithLayout } from './_app';
import Head from 'next/head'
import { ReactElement } from 'react';
import { Layout } from '../components/layout';
import { LoginView } from '../views';

const Login: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Login</title>
        <meta name="description" content="login page." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LoginView />
    </>
  );
}

Login.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
  );
}
  
export default Login;