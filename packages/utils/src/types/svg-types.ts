import classNames from 'classnames';

import { ColorType } from './colors-types';

// #region [Single Type]
export declare type FillType = ColorType;

export declare type StrokeType = ColorType;

export declare type StrokeWidthType = '0' | '1' | '2';

// #region [Components Props]
export interface SVGProps {
  fill?: FillType;
  stroke?: StrokeType;
  strokeWidth?: StrokeWidthType;
}
// #endregion

// #region [Components ClassNames]
export const SVGClassNames = (props: SVGProps) => {
  const { fill, stroke, strokeWidth } = props;
  return classNames({
    [`fill-${fill}`]: fill,
    [`stroke-${stroke}`]: stroke,
    [`stroke-${strokeWidth}`]: strokeWidth,
  });
};
// #endregion
