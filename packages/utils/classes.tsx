import {
  BoxSizingType,
  DisplayType,
  OverflowType,
  PositionType,
  VisibleType,
  ZIndex,
} from './types';

export const boxSizingClass = (type?: BoxSizingType) => type && `box-${type}`;
export const displayClass = (type?: DisplayType) => type && `${type}`;
export const overflowClass = (type?: OverflowType) =>
  type && `overflow-${type}`;
export const positionClass = (type?: PositionType) => type && `${type}`;
export const visibleClass = (type?: VisibleType) => type && `${type}`;
export const zIndexClass = (type?: ZIndex) => type && `z-${type}`;
