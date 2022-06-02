import '../styles/globals.css';

import type { AppProps } from 'next/app';
import Head from 'next/head';

import { Layout, NavigationProvider } from '../packs';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <link rel="icon" type="image/png" sizes="96x96" href="/favicon.png" />
      </Head>
      <NavigationProvider>
        <Layout />
      </NavigationProvider>
    </>
  );
}

export default MyApp;
