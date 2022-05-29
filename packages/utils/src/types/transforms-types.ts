import classNames from 'classnames';

// #region [Single Type]
export declare type ScaleType = '0' | '50' | '75' | '90' | '95' | '100' | '105' | '110' | '125' | '150' | '200';

export declare type RotateType = '0' | '1' | '2' | '3' | '6' | '12' | '45' | '90' | '180';

export declare type TranslateType =
  | '0'
  | 'px'
  | '0.5'
  | '1'
  | '1.5'
  | '2'
  | '2.5'
  | '3'
  | '3.5'
  | '4'
  | '5'
  | '6'
  | '7'
  | '8'
  | '9'
  | '10'
  | '11'
  | '12'
  | '14'
  | '16'
  | '20'
  | '24'
  | '28'
  | '32'
  | '36'
  | '40'
  | '44'
  | '48'
  | '52'
  | '56'
  | '60'
  | '64'
  | '72'
  | '80'
  | '96'
  | '1/2'
  | '1/3'
  | '2/3'
  | '1/4'
  | '2/4'
  | '3/4'
  | 'full';

export declare type SkewType = '0' | '1' | '2' | '3' | '6' | '12';

export declare type TransformOriginType =
  | 'center'
  | 'top'
  | 'top-right'
  | 'right'
  | 'bottom-right'
  | 'bottom'
  | 'bottom-left'
  | 'left'
  | 'top-left';
// #endregion

// #region [Components Props]
export interface TransformsProps {
  scale?: ScaleType;
  scaleX?: ScaleType;
  scaleY?: ScaleType;
  rotate?: RotateType;
  translateX?: TranslateType;
  translateY?: TranslateType;
  skewX?: SkewType;
  skewY?: SkewType;
  transformOrigin?: TransformOriginType;
}
// #endregion

// #region [Components ClassNames]
export const TransformsClassNames = (props: TransformsProps) => {
  const { scale, scaleX, scaleY, rotate, translateX, translateY, skewX, skewY, transformOrigin } = props;
  return classNames({
    [`scale-${scale}`]: scale,
    [`scale-x-${scale}`]: scaleX,
    [`scale-y-${scale}`]: scaleY,
    [`rotate-${rotate}`]: rotate,
    [`translate-x-${translateX}`]: translateX,
    [`translate-y-${translateY}`]: translateY,
    [`skew-x-${skewX}`]: skewX,
    [`skew-y-${skewY}`]: skewY,
    [`origin-${transformOrigin}`]: transformOrigin,
  });
};
// #endregion
