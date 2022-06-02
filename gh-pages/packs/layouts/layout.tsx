import { useRouter } from 'next/router';
import * as React from 'react';
import { Frame } from 'tailwind-layout-react';

import Header from './header';

export type LayoutType = {
  children?: React.ReactNode;
};

export const Layout = (props: LayoutType) => {
  const { children } = props;

  const router = useRouter();
  return (
    <Frame fontFamily="sans">
      <Header>header</Header>
      {children}
    </Frame>
  );
};

Layout.displayName = 'Layout';

export default Layout;
