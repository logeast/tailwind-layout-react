import classNames from 'classnames';
import { booleanCls } from '../classes';

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
  const { srOnly } = props;
  return classNames(booleanCls(srOnly, { trueCls: 'sr-only', falseCls: 'not-sr-only' }));
};
// #endregion
