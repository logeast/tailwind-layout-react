import * as React from 'react';

export interface BaseProps {
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  [x: string]: any;
}
