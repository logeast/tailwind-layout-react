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
import {
  maxHeightType,
  maxWithType,
  minHeightType,
  minWithType,
  WidthOrHeightType
} from './sizing-types';
import { PaddingType, MarginType, SpaceType } from './spacing-types';

// Layout
export const aspectClass = (type?: AspectType) => type && `aspect-${type}`;
export const boxSizingClass = (type?: BoxSizingType) => type && `box-${type}`;
export const clearClass = (type?: ClearType) => type && `clear-${type}`;
export const columnsClass = (type?: ColumnsType) => type && `columns-${type}`;
export const displayClass = (type?: DisplayType) => type && `${type}`;
export const floatClass = (type?: FloatType) => type && `float-${type}`;
export const overflowClass = (type?: OverflowType) =>
  type && `overflow-${type}`;
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
