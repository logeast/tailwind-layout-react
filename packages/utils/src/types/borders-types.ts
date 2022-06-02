import classNames from 'classnames';

import { stringOrBooleanCls } from '../classes';
import { ColorType } from './colors-types';

// #region [Single Type]
export declare type BorderRadiusType = 'none' | 'sm' | true | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | 'full';

export declare type BorderWidthType = '0' | '2' | '4' | '8' | true;

export declare type BorderColorType = ColorType;

export declare type BorderStyleType = 'solid' | 'dashed' | 'dotted' | 'double' | 'hidden' | 'none';

export declare type DivideWidthType = '0' | '2' | '4' | '8' | true | 'reverse';

export declare type DivideColorType = ColorType;

export declare type DivideStyleType = 'solid' | 'dashed' | 'dotted' | 'double' | 'hidden' | 'none';

export declare type OutlineWidthType = '0' | '1' | '2' | '4' | '8';

export declare type OutlineColorType = ColorType;

export declare type OutlineStyleType = 'none' | true | 'dashed' | 'dotted' | 'double' | 'hidden';

export declare type OutlineOffsetType = '0' | '1' | '2' | '4' | '8';

export declare type RingWidthType = '0' | '1' | '2' | true | '4' | '8' | 'inset';

export declare type RingColorType = ColorType;

export declare type RingOffsetType = '0' | '1' | '2' | '4' | '8';

export declare type RingOffsetColorType = ColorType;
// #endregion

// #region [Components Props]
export interface BordersProps {
  rounded?: BorderRadiusType;
  radius?: BorderRadiusType;
  borderRadius?: BorderRadiusType;
  borderWidth?: BorderWidthType;
  borderXWidth?: BorderWidthType;
  borderYWidth?: BorderWidthType;
  borderTWidth?: BorderWidthType;
  borderRWidth?: BorderWidthType;
  borderBWidth?: BorderWidthType;
  borderLWidth?: BorderWidthType;
  borderColor?: BorderColorType;
  borderStyle?: BorderStyleType;
  divideXWidth?: DivideWidthType;
  divideYWidth?: DivideWidthType;
  divideColor?: DivideColorType;
  divideStyle?: DivideStyleType;
  outlineWidth?: OutlineWidthType;
  outlineColor?: OutlineColorType;
  outlineStyle?: OutlineStyleType;
  outlineOffset?: OutlineOffsetType;
  ringWidth?: RingWidthType;
  ringColor?: RingColorType;
  ringOffset?: RingOffsetType;
  ringOffsetColor?: RingOffsetColorType;
}
// #endregion

// #region [Components ClassNames]
export const BordersClassNames = (props: BordersProps) => {
  const {
    rounded,
    radius,
    borderRadius,
    borderWidth,
    borderXWidth,
    borderYWidth,
    borderTWidth,
    borderRWidth,
    borderBWidth,
    borderLWidth,
    borderColor,
    borderStyle,
    divideXWidth,
    divideYWidth,
    divideColor,
    divideStyle,
    outlineWidth,
    outlineColor,
    outlineStyle,
    outlineOffset,
    ringWidth,
    ringColor,
    ringOffset,
    ringOffsetColor,
  } = props;
  return classNames(
    stringOrBooleanCls(rounded, 'rounded'),
    stringOrBooleanCls(radius, 'rounded'),
    stringOrBooleanCls(borderRadius, 'rounded'),
    stringOrBooleanCls(borderWidth, 'border'),
    stringOrBooleanCls(borderXWidth, 'border-x'),
    stringOrBooleanCls(borderYWidth, 'border-y'),
    stringOrBooleanCls(borderTWidth, 'border-t'),
    stringOrBooleanCls(borderRWidth, 'border-r'),
    stringOrBooleanCls(borderBWidth, 'border-b'),
    stringOrBooleanCls(borderLWidth, 'border-l'),
    stringOrBooleanCls(divideXWidth, 'divide-x'),
    stringOrBooleanCls(divideYWidth, 'divide-y'),
    stringOrBooleanCls(outlineWidth, 'outline'),
    stringOrBooleanCls(ringWidth, 'ring'),
    {
      [`border-${borderColor}`]: borderColor,
      [`border-${borderStyle}`]: borderStyle,
      [`divide-${divideColor}`]: divideColor,
      [`divide-${divideStyle}`]: divideStyle,
      [`outline-${outlineColor}`]: outlineColor,
      [`outline-${outlineStyle}`]: outlineStyle,
      [`outline-${outlineOffset}`]: outlineOffset,
      [`ring-${ringColor}`]: ringColor,
      [`ring-offset-${ringOffset}`]: ringOffset,
      [`ring-offset-${ringOffsetColor}`]: ringOffsetColor,
    },
  );
};
// #endregion
