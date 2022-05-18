import React from 'react';
import { BaseProps } from '../utils/props';
import {
  BackgroundsProps,
  BordersProps,
  LayoutProps,
  SizingProps,
  SpacingProps,
  TypographyProps,
} from '../utils/types';

export type FrameUnionProps = BaseProps &
  LayoutProps &
  SpacingProps &
  SizingProps &
  TypographyProps &
  BackgroundsProps &
  BordersProps;

export interface FrameProps extends FrameUnionProps {
  as?: React.ElementType;
}
