import classNames from 'classnames';

// #region [Single Type]
export declare type ScreenReadersType = boolean;
// #endregion

// #region [Components Props]
export interface AccessibilityProps {
  srOnly?: ScreenReadersType;
}
// #endregion

// #region [Components ClassNames]
export const AccessibilityClassNames = (props: AccessibilityProps) => {
  return classNames({
    'sr-only': props.srOnly,
    'not-sr-only': props.srOnly === false,
  });
};
// #endregion
