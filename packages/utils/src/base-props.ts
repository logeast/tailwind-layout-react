import * as React from 'react';

export interface BaseProps {
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [x: string]: any;
}
