import * as React from 'react';
import { Frame } from 'tailwind-layout-react';

export type ButtonType = {
  type: 'primary' | 'secondary' | 'tertiary' | 'outline-primary' | 'outline-secondary' | 'outline-tertiary';
  children: React.ReactNode;
};

export const Button = (props: ButtonType) => {
  const { type, children } = props;
  return (
    <Frame as="button" px="2" py="1.5" borderWidth="2">
      {children}
    </Frame>
  );
};

Button.displayName = 'Button';
