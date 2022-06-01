import * as React from 'react';
import classNames from 'classnames';
import { useRouter } from 'next/router';
import Frame from 'tailwind-layout-react';

export type LayoutType = {
  children: React.ReactNode;
};

const Layout = (props: LayoutType) => {
  const { children } = props;

  const router = useRouter();
  return <Frame>{children}</Frame>;
};

Layout.displayName = 'Layout';

export default Layout;
