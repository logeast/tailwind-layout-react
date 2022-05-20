import classNames from 'classnames';
import { stringOrBooleanCls } from '../classes';

// #region [Single Type]
export declare type TransitionPropertyType = 'none' | true | 'colors' | 'opacity' | 'shadow' | 'transform';

export declare type TransitionDurationType = '75' | '100' | '150' | '200' | '300' | '500' | '700' | '1000';

export declare type TransitionTimingFunctionType = 'ease-linear' | 'ease-in' | 'ease-out' | 'ease-in-out';

export declare type TransitionDelayType = '75' | '100' | '150' | '200' | '300' | '500' | '700' | '1000';

export declare type AnimationType = 'none' | 'ping' | 'pulse' | 'bounce';
// #endregion

// #region [Components Props]
export interface TransformsProps {
  transitionProperty?: TransitionPropertyType;
  transitionDuration?: TransitionDurationType;
  transitionTimingFunction?: TransitionTimingFunctionType;
  transitionDelay?: TransitionDelayType;
  animation?: AnimationType;
}
// #endregion

// #region [Components ClassNames]
export const TransformsClassNames = (props: TransformsProps) => {
  const { transitionProperty, transitionDuration, transitionTimingFunction, transitionDelay, animation } = props;

  return classNames(stringOrBooleanCls(transitionProperty, 'transition'), {
    [`duration-${transitionDuration}`]: transitionDuration,
    transitionTimingFunction,
    [`delay-${transitionDelay}`]: transitionDelay,
    [`animation-${animation}`]: animation,
  });
};
// #endregion
