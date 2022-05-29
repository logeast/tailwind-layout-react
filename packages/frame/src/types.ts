import React from 'react';
import { BaseProps } from '../../utils/props';
import {
  AccessibilityProps,
  BackgroundsProps,
  BordersProps,
  EffectsProps,
  FiltersProps,
  FlexAndGridProps,
  FlexboxProps,
  GridProps,
  InteractivityProps,
  LayoutProps,
  SizingProps,
  SpacingProps,
  SVGProps,
  TableProps,
  TransitionsAndAnimationProps,
  TypographyProps,
} from '../../utils/types';

export type FrameUnionProps = BaseProps &
  LayoutProps &
  FlexboxProps &
  GridProps &
  FlexAndGridProps &
  SpacingProps &
  SizingProps &
  TypographyProps &
  BackgroundsProps &
  BordersProps &
  EffectsProps &
  FiltersProps &
  TransitionsAndAnimationProps &
  InteractivityProps &
  SVGProps &
  TableProps &
  AccessibilityProps;

export interface FrameProps extends FrameUnionProps {
  as?: React.ElementType;
}
