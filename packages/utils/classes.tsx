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
  ZIndex
} from './layout-types';

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

export const zIndexClass = (type?: ZIndex) => type && `z-${type}`;
