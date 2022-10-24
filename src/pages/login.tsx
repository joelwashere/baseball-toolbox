import type { NextPage } from 'next'
import Head from 'next/head'
import { LoginView } from '../views';

const Login: NextPage = () => {

  return (
    <div>
      <Head>
        <title>Login</title>
        <meta name="description" content="login page." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LoginView />
    </div>
  );
    
}
  
export default Login;