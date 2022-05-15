import * as React from 'react';
import {
  BackgroundAttachmentType,
  BackgroundClipType,
  BackgroundColorType,
  BackgroundOriginType,
  BackgroundPositionType,
  BackgroundRepeatType,
  BackgroundSizeType,
  BackgroundGradientDirectionType,
  BackgroundGradientColorStopsType
} from './backgrounds-types';
import {
  BorderRadiusType,
  BorderWidthType,
  BorderColorType,
  BorderStyleType,
  DivideWidthType,
  DivideColorType,
  DivideStyleType,
  OutlineWidthType,
  OutlineColorType,
  OutlineStyleType,
  OutlineOffsetType,
  RingWidthType,
  RingColorType,
  RingOffsetType,
  RingOffsetColorType
} from './borders-types';
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
} from './layout-types';
import { maxHeightType, maxWithType, minHeightType, minWithType, WidthOrHeightType } from './sizing-types';
import { PaddingType, MarginType, SpaceType } from './spacing-types';
import {
  FontFamilyType,
  FontSizeType,
  FontSmoothingType,
  FontItalicType,
  FontWeightType,
  FontVariantNumericType,
  LetterSpacingType,
  LineHeightType,
  ListStyleType,
  ListStylePositionType,
  TextAlignmentType,
  TextColorType,
  TextDecorationColorType,
  TextDecorationStyleType,
  TextDecorationThicknessType,
  TextDecorationType,
  TextOverflowType,
  TextTransformType,
  TextUnderlineOffsetType,
  WordBreakType,
  TextIndentType,
  VerticalAlignType,
  WhitespaceType
} from './typography-types';

// ===============

export interface BaseProps {
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

export interface LayoutProps {
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
}

export interface SpacingProps {
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
}

export interface SizingProps {
  w?: WidthOrHeightType;
  minW?: minWithType;
  maxW?: maxWithType;
  h?: WidthOrHeightType;
  minH?: minHeightType;
  maxH?: maxHeightType;
}

export interface TypographyProps {
  font?: FontFamilyType;
  size?: FontSizeType;
  smoothing?: FontSmoothingType;
  italic?: FontItalicType;
  weight?: FontWeightType;
  variant?: FontVariantNumericType;
  tracking?: LetterSpacingType;
  letterSpacing?: LetterSpacingType;
  leading?: LineHeightType;
  lineH?: LineHeightType;
  listType?: ListStyleType;
  listPos?: ListStylePositionType;
  align?: TextAlignmentType;
  color?: TextColorType;
  decoration?: TextDecorationType;
  decorationColor?: TextDecorationColorType;
  decorationStyle?: TextDecorationStyleType;
  decorationThickness?: TextDecorationThicknessType;
  underlineOffset?: TextUnderlineOffsetType;
  textTransform?: TextTransformType;
  textOverflow?: TextOverflowType;
  textIndent?: TextIndentType;
  verticalAlign?: VerticalAlignType;
  whiteSpace?: WhitespaceType;
  break?: WordBreakType;

  // Todo: Don't forget Content
}

export interface BackgroundsProps {
  bgAttachment?: BackgroundAttachmentType;
  bgClip?: BackgroundClipType;
  bgColor?: BackgroundColorType;
  bgOrigin?: BackgroundOriginType;
  bgPosition?: BackgroundPositionType;
  bgRepeat?: BackgroundRepeatType;
  bgSize?: BackgroundSizeType;
  bgGradientDirection?: BackgroundGradientDirectionType;
  bgGradientFromColor?: BackgroundGradientColorStopsType;
  bgGradientViaColor?: BackgroundGradientColorStopsType;
  bgGradientToColor?: BackgroundGradientColorStopsType;
}

export interface BordersProps {
  rounded?: BorderRadiusType;
  borderW?: BorderWidthType;
  borderXW?: BorderWidthType;
  borderYW?: BorderWidthType;
  borderTW?: BorderWidthType;
  borderRW?: BorderWidthType;
  borderBW?: BorderWidthType;
  borderLW?: BorderWidthType;
  borderColor?: BorderColorType;
  borderStyle?: BorderStyleType;
  divideXW?: DivideWidthType;
  divideYW?: DivideWidthType;
  divideColor?: DivideColorType;
  divideStyle?: DivideStyleType;
  outlineW?: OutlineWidthType;
  outlineColor?: OutlineColorType;
  outlineStyle?: OutlineStyleType;
  outlineOffset?: OutlineOffsetType;
  ringW?: RingWidthType;
  ringColor?: RingColorType;
  ringOffset?: RingOffsetType;
  ringOffsetColor?: RingOffsetColorType;
}
