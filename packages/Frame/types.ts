import { BaseProps } from '../utils/basic-props';
import {
  AspectType,
  BoxSizingType,
  ClearType,
  ColumnsType,
  DisplayType,
  FloatType,
  OverflowType,
  PositionType,
  VisibleType,
  ZIndexType
} from '../utils/layout-types';
import {
  maxHeightType,
  maxWithType,
  minHeightType,
  minWithType,
  WidthOrHeightType
} from '../utils/sizing-types';
import { MarginType, PaddingType, SpaceType } from '../utils/spacing-types';

export interface FrameProps extends BaseProps {
  // Layout
  aspect?: AspectType;
  boxSizing?: BoxSizingType;
  clear?: ClearType;
  columns?: ColumnsType;
  display?: DisplayType;
  float?: FloatType;
  overflow?: OverflowType;
  position?: PositionType;
  visible?: VisibleType;
  zIndex?: ZIndexType;

  // Space
  p?: PaddingType;
  px?: PaddingType;
  py?: PaddingType;
  pt?: PaddingType;
  pr?: PaddingType;
  pb?: PaddingType;
  pl?: PaddingType;
  m?: MarginType;
  mx?: MarginType;
  my?: MarginType;
  mt?: MarginType;
  mr?: MarginType;
  mb?: MarginType;
  ml?: MarginType;
  spaceX?: SpaceType;
  spaceY?: SpaceType;

  // Sizing
  w?: WidthOrHeightType;
  minW?: minWithType;
  maxW?: maxWithType;
  h?: WidthOrHeightType;
  minH?: minHeightType;
  maxH?: maxHeightType;
}
