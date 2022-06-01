import * as React from 'react';
import {
  BaseProps,
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
} from '@tailwind-layout-react/utils';

export type FlexUnionProps = BaseProps &
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

export interface FlexProps extends FlexUnionProps {
  as?: React.ElementType;
}
