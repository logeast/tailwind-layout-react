import {
  BackgroundsProps,
  BaseProps,
  BordersProps,
  LayoutProps,
  SizingProps,
  SpacingProps,
  TypographyProps,
} from '../utils/props';

export type FrameProps = BaseProps &
  LayoutProps &
  SpacingProps &
  SizingProps &
  TypographyProps &
  BackgroundsProps &
  BordersProps;
