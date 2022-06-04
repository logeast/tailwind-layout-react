import * as React from 'react';
import { Frame } from 'tailwind-layout-react';

import { NavigationContext, NavigationContextType } from '../providers';

export type HeaderType = {
  children?: React.ReactNode;
};

const Header = (props: HeaderType) => {
  const { children } = props;

  const { setOpen } = React.useContext(NavigationContext) as NavigationContextType;

  return (
    <Frame as="header" position="sticky" height="14" bgColor="gray-900" color="white" backdropBlur backdropOpacity="10">
      {children}
    </Frame>
  );
};

Header.displayName = 'Header';

export default Header;
