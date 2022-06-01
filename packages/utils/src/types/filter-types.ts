import classNames from 'classnames';

import { booleanCls, stringOrBooleanCls } from '../classes';

// #region [Single Type]
export declare type BlurType = 'none' | 'sm' | true | 'md' | 'lg' | 'xl' | '2xl' | '3xl';

export declare type BrightnessType = '0' | '50' | '75' | '90' | '95' | '100' | '105' | '110' | '125' | '150' | '200';

export declare type ContrastType = '0' | '50' | '75' | '100' | '125' | '150' | '200';

export declare type DropShadowType = 'none' | 'sm' | true | 'md' | 'lg' | 'xl' | '2xl';

export declare type GrayscaleType = boolean;

export declare type HueRotateType = '0' | '15' | '30' | '60' | '90' | '180';

export declare type InvertType = boolean;

export declare type SaturateType = '0' | '50' | '100' | '150' | '200';

export declare type SepiaType = boolean;

export declare type BackdropBlurType = 'none' | 'sm' | true | 'md' | 'lg' | 'xl' | '2xl' | '3xl';

export declare type BackdropBrightnessType =
  | '0'
  | '50'
  | '75'
  | '90'
  | '95'
  | '100'
  | '105'
  | '110'
  | '125'
  | '150'
  | '200';

export declare type BackdropContrastType = '0' | '50' | '75' | '100' | '125' | '150' | '200';

export declare type BackdropGrayscaleType = boolean;

export declare type BackdropHueRotateType = '0' | '15' | '30' | '60' | '90' | '180';

export declare type BackdropInvertType = boolean;

export declare type BackdropOpacityType =
  | '0'
  | '5'
  | '10'
  | '20'
  | '25'
  | '30'
  | '40'
  | '50'
  | '60'
  | '70'
  | '75'
  | '80'
  | '90'
  | '95'
  | '100';

export declare type BackdropSaturateType = '0' | '50' | '100' | '150' | '200';

export declare type BackdropSepiaType = boolean;

// #endregion

// #region [Components Props]
export interface FiltersProps {
  blur?: BlurType;
  brightness?: BrightnessType;
  contrast?: ContrastType;
  dropShadow?: DropShadowType;
  grayscale?: GrayscaleType;
  hueRotate?: HueRotateType;
  invert?: InvertType;
  saturate?: SaturateType;
  sepia?: SepiaType;
  backdropBlur?: BackdropBlurType;
  backdropBrightness?: BackdropBrightnessType;
  backdropContrast?: BackdropContrastType;
  backdropGrayscale?: BackdropGrayscaleType;
  backdropHueRotate?: BackdropHueRotateType;
  backdropInvert?: BackdropInvertType;
  backdropOpacity?: BackdropOpacityType;
  backdropSaturate?: BackdropSaturateType;
  backdropSepia?: BackdropSepiaType;
}
// #endregion

// #region [Components ClassNames]
export const FiltersClassNames = (props: FiltersProps) => {
  const {
    blur,
    brightness,
    contrast,
    dropShadow,
    grayscale,
    hueRotate,
    invert,
    saturate,
    sepia,
    backdropBlur,
    backdropBrightness,
    backdropContrast,
    backdropGrayscale,
    backdropHueRotate,
    backdropInvert,
    backdropOpacity,
    backdropSaturate,
    backdropSepia,
  } = props;

  return classNames(
    stringOrBooleanCls(blur, 'blur'),
    stringOrBooleanCls(backdropBlur, 'backdrop-blur'),
    stringOrBooleanCls(dropShadow, 'drop-shadow'),
    booleanCls(grayscale, { trueCls: 'grayscale', falseCls: 'grayscale-0' }),
    booleanCls(invert, { trueCls: 'invert', falseCls: 'invert-0' }),
    booleanCls(sepia, { trueCls: 'sepia', falseCls: 'sepia-0' }),
    booleanCls(backdropGrayscale, { trueCls: 'backdrop-grayscale', falseCls: 'backdrop-grayscale-0' }),
    booleanCls(backdropInvert, { trueCls: 'backdrop-invert', falseCls: 'backdrop-invert-0' }),
    booleanCls(backdropSepia, { trueCls: 'sepia-grayscale', falseCls: 'sepia-grayscale-0' }),
    {
      [`brightness-${brightness}`]: brightness,
      [`contrast-${contrast}`]: contrast,
      [`drop-shadow-${dropShadow}`]: dropShadow,
      [`hue-rotate-${hueRotate}`]: hueRotate,
      [`saturate-${saturate}`]: saturate,
      [`backdrop-brightness-${backdropBrightness}`]: backdropBrightness,
      [`backdrop-contrast-${backdropContrast}`]: backdropContrast,
      [`backdrop-hue-rotate-${backdropHueRotate}`]: backdropHueRotate,
      [`backdrop-opacity-${backdropOpacity}`]: backdropOpacity,
      [`backdrop-saturate-${backdropSaturate}`]: backdropSaturate,
    },
  );
};
// #endregion
