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
  FontItalicType,
  FontSizeType,
  FontSmoothingType,
  FontVariantNumericType,
  FontWeightType,
  LetterSpacingType,
  LineHeightType,
  ListStylePositionType,
  ListStyleType,
  TextAlignmentType,
  TextColorType,
  TextDecorationColorType,
  TextDecorationStyleType,
  TextDecorationThicknessType,
  TextDecorationType,
  TextIndentType,
  TextOverflowType,
  TextTransformType,
  TextUnderlineOffsetType,
  VerticalAlignType,
  WhitespaceType,
  WordBreakType
} from './typography-types';

// Layout
export const aspectClass = (type?: AspectType) => type && `aspect-${type}`;
export const boxSizingClass = (type?: BoxSizingType) => type && `box-${type}`;
export const clearClass = (type?: ClearType) => type && `clear-${type}`;
export const columnsClass = (type?: ColumnsType) => type && `columns-${type}`;
export const displayClass = (type?: DisplayType) => type && `${type}`;
export const floatClass = (type?: FloatType) => type && `float-${type}`;
export const overflowClass = (type?: OverflowType) => type && `overflow-${type}`;
export const positionClass = (type?: PositionType) => type && `${type}`;
export const visibleClass = (type?: VisibleType) => type && `${type}`;
export const zIndexClass = (type?: ZIndexType) => type && `z-${type}`;

// Spacing
export const paddingClass = (type?: PaddingType) => type && `p-${type}`;
export const paddingXClass = (type?: PaddingType) => type && `px-${type}`;
export const paddingYClass = (type?: PaddingType) => type && `py-${type}`;
export const paddingTopClass = (type?: PaddingType) => type && `pt-${type}`;
export const paddingRightClass = (type?: PaddingType) => type && `pr-${type}`;
export const paddingBottomClass = (type?: PaddingType) => type && `pb-${type}`;
export const paddingLeftClass = (type?: PaddingType) => type && `pl-${type}`;
export const marginClass = (type?: MarginType) => type && `m-${type}`;
export const marginXClass = (type?: MarginType) => type && `mx-${type}`;
export const marginYClass = (type?: MarginType) => type && `my-${type}`;
export const marginTopClass = (type?: MarginType) => type && `mt-${type}`;
export const marginRightClass = (type?: MarginType) => type && `mr-${type}`;
export const marginBottomClass = (type?: MarginType) => type && `mb-${type}`;
export const marginLeftClass = (type?: MarginType) => type && `ml-${type}`;
export const spaceXClass = (type?: SpaceType) => type && `space-x-${type}`;
export const spaceYClass = (type?: SpaceType) => type && `space-y-${type}`;

// Sizing
export const widthClass = (type?: WidthOrHeightType) => type && `w-${type}`;
export const minWidthClass = (type?: minWithType) => type && `min-w-${type}`;
export const maxWidthClass = (type?: maxWithType) => type && `max-w-${type}`;
export const heightClass = (type?: WidthOrHeightType) => type && `h-${type}`;
export const minHeightClass = (type?: minHeightType) => type && `min-h-${type}`;
export const maxHeightClass = (type?: maxHeightType) => type && `max-h-${type}`;

// Typography
export const fontClass = (type?: FontFamilyType) => type && `font-${type}`;
export const sizeClass = (type?: FontSizeType) => type && `text-${type}`;
export const smoothingClass = (type?: FontSmoothingType) => type && `${type}`;
export const italicClass = (type?: FontItalicType) => (type === false ? 'not-italic' : 'italic');
export const weightClass = (type?: FontWeightType) => type && `font-${type}`;
export const variantClass = (type?: FontVariantNumericType) => type && `${type}`;
export const trackingClass = (type?: LetterSpacingType) => type && `tracking-${type}`;
export const letterSpacingClass = (type?: LetterSpacingType) => type && `tracking-${type}`;
export const leadingClass = (type?: LineHeightType) => type && `leading-${type}`;
export const lineHeightClass = (type?: LineHeightType) => type && `leading-${type}`;
export const listTypeClass = (type?: ListStyleType) => type && `list-${type}`;
export const listPosClass = (type?: ListStylePositionType) => type && `list-${type}`;
export const alignClass = (type?: TextAlignmentType) => type && `text-${type}`;
export const colorClass = (type?: TextColorType) => type && `text-${type}`;
export const decorationClass = (type?: TextDecorationType) => type && `${type}`;
export const decorationColorClass = (type?: TextDecorationColorType) => type && `decoration-${type}`;
export const decorationStyleClass = (type?: TextDecorationStyleType) => type && `decoration-${type}`;
export const decorationThicknessClass = (type?: TextDecorationThicknessType) => type && `decoration-${type}`;
export const underlineOffsetClass = (type?: TextUnderlineOffsetType) => type && `underline-offset-${type}`;
export const textTransformClass = (type?: TextTransformType) => type && `${type}`;
export const textOverflowClass = (type?: TextOverflowType) => type && `${type}`;
export const textIndentClass = (type?: TextIndentType) => type && `indent-${type}`;
export const verticalAlignClass = (type?: VerticalAlignType) => type && `align-${type}`;
export const whiteSpaceClass = (type?: WhitespaceType) => type && `whitespace-${type}`;
export const breakClass = (type?: WordBreakType) => type && `break-${type}`;

// Backgrounds
export const bgAttachmentClass = (type?: BackgroundAttachmentType) => type && `bg-${type}`;
export const bgClipClass = (type?: BackgroundClipType) => type && `bg-clip-${type}`;
export const bgColorClass = (type?: BackgroundColorType) => type && `bg-${type}`;
export const bgOriginClass = (type?: BackgroundOriginType) => type && `bg-origin-${type}`;
export const bgPositionClass = (type?: BackgroundPositionType) => type && `bg-${type}`;
export const bgRepeatClass = (type?: BackgroundRepeatType) => type && `bg-${type}`;
export const bgSizeClass = (type?: BackgroundSizeType) => type && `bg-${type}`;
export const bgGradientDirectionClass = (type?: BackgroundGradientDirectionType) =>
  type && type === 'none' ? 'bg-none' : `bg-gradient-to-${type}`;
export const bgGradientFromColorClass = (type?: BackgroundGradientColorStopsType) => type && `from-${type}`;
export const bgGradientViaColorClass = (type?: BackgroundGradientColorStopsType) => type && `via-${type}`;
export const bgGradientToColorClass = (type?: BackgroundGradientColorStopsType) => type && `to-${type}`;

// Border
export const roundedClass = (type?: BorderRadiusType) => type && `rounded-${type}`;
export const borderWClass = (type?: BorderWidthType) => type && `border-${type}`;
export const borderXWClass = (type?: BorderWidthType) => type && `border-x-${type}`;
export const borderYWClass = (type?: BorderWidthType) => type && `border-y-${type}`;
export const borderTWClass = (type?: BorderWidthType) => type && `border-t-${type}`;
export const borderRWClass = (type?: BorderWidthType) => type && `border-r-${type}`;
export const borderBWClass = (type?: BorderWidthType) => type && `border-b-${type}`;
export const borderLWClass = (type?: BorderWidthType) => type && `border-l-${type}`;
export const borderColorClass = (type?: BorderColorType) => type && `border-${type}`;
export const borderStyleClass = (type?: BorderStyleType) => type && `border-${type}`;
export const divideXWClass = (type?: DivideWidthType) => (type && type === true ? 'divide-x' : `divide-x-${type}`);
export const divideYWClass = (type?: DivideWidthType) => (type && type === true ? 'divide-y' : `divide-y-${type}`);
export const divideColorClass = (type?: DivideColorType) => type && `divide-${type}`;
export const divideStyleClass = (type?: DivideStyleType) => type && `divide-${type}`;
export const outlineWClass = (type?: OutlineWidthType) => type && `outline-${type}`;
export const outlineColorClass = (type?: OutlineColorType) => type && `outline-${type}`;
export const outlineStyleClass = (type?: OutlineStyleType) => (type && type === true ? 'outline' : `outline-${type}`);
export const outlineOffsetClass = (type?: OutlineOffsetType) => type && `outline-offset-${type}`;
export const ringWClass = (type?: RingWidthType) => (type && type === true ? 'ring' : `ring-${type}`);
export const ringColorClass = (type?: RingColorType) => type && `ring-${type}`;
export const ringOffsetClass = (type?: RingOffsetType) => type && `ring-offset-${type}`;
export const ringOffsetColorClass = (type?: RingOffsetColorType) => type && `ring-offset-${type}`;
