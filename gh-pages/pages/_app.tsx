import '../styles/globals.css';

import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Frame } from 'tailwind-layout-react';

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
        <Frame bgColor="amber-100" borderWidth="8">
          xxx
        </Frame>
        <div className="px-auto text-white">xxxxxx</div>
      </NavigationProvider>
    </>
  );
}

export default MyApp;
