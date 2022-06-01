import classNames from 'classnames';

import { stringOrBooleanCls } from '../classes';
import { ColorType } from './colors-types';

// #region [Single Type]
export declare type BoxShadowType = 'sm' | true | 'md' | 'lg' | 'xl' | '2xl' | 'inner' | 'none';

export declare type BoxShadowColorType = ColorType;

export declare type OpacityType =
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

export declare type MixBlendModeType =
  | 'normal'
  | 'multiply'
  | 'screen'
  | 'overlay'
  | 'darken'
  | 'lighten'
  | 'color-dodge'
  | 'color-burn'
  | 'hard-light'
  | 'soft-light'
  | 'difference'
  | 'exclusion'
  | 'hue'
  | 'saturation'
  | 'color'
  | 'luminosity';

export declare type BackgroundBlendModeType =
  | 'normal'
  | 'multiply'
  | 'screen'
  | 'overlay'
  | 'darken'
  | 'lighten'
  | 'color-dodge'
  | 'color-burn'
  | 'hard-light'
  | 'soft-light'
  | 'difference'
  | 'exclusion'
  | 'hue'
  | 'saturation'
  | 'color'
  | 'luminosity';

// #endregion

// #region [Components Props]
export interface EffectsProps {
  shadow?: BoxShadowType;
  shadowColor?: BoxShadowColorType;
  opacity?: OpacityType;
  mixBlend?: MixBlendModeType;
  bgBlend?: BackgroundBlendModeType;
}
// #endregion

// #region [Components ClassNames]
export const EffectsClassNames = (props: EffectsProps) => {
  const { shadow, shadowColor, opacity, mixBlend, bgBlend } = props;
  return classNames(stringOrBooleanCls(shadow, 'shadow'), {
    [`shadow-color-${shadowColor}`]: shadowColor,
    [`opacity-${opacity}`]: opacity,
    [`mix-blend-${mixBlend}`]: mixBlend,
    [`bg-blend-${bgBlend}`]: bgBlend,
  });
};
// #endregion
