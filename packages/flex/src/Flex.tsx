import { Frame } from '@tailwind-layout-react/frame';
import * as React from 'react';

import { FlexProps } from './types';

const Flex = (props: FlexProps) => {
  const { inline, justifyContent, justifyCenter, alignItems, itemsCenter, placeContent, placeContentCenter, children } =
    props;

  return (
    <Frame
      display={inline ? 'inline-flex' : 'flex'}
      justifyContent={justifyCenter ? 'center' : justifyContent}
      alignItems={itemsCenter ? 'center' : alignItems}
      placeContent={placeContentCenter ? 'center' : placeContent}
    >
      {children}
    </Frame>
  );
};

Flex.displayName = 'Flex';

export default Flex;
