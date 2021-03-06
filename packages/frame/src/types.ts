import {
  AccessibilityProps,
  BackgroundsProps,
  BaseProps,
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
} from '@tailwind-layout-react/utils';
import * as React from 'react';

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
