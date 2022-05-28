import classnames from 'classnames';

import { TextProps } from './types';
import {
  AccessibilityClassNames,
  BackgroundsClassNames,
  BordersClassNames,
  SizingClassNames,
  SpacingClassNames,
  TypographyClassNames,
} from '../utils/types';

const Text = (props: TextProps) => {
  const {
    // Base
    className,
    style,
    children,

    as: Tag = 'span',
    ...others
  } = props;

  const renderCls = classnames(
    SpacingClassNames(props),
    SizingClassNames(props),
    TypographyClassNames(props),
    BackgroundsClassNames(props),
    BordersClassNames(props),
    AccessibilityClassNames(props),
    className
  );

  return (
    <Tag className={renderCls} style={style} {...others}>
      {children}
    </Tag>
  );
};

Text.displayName = 'Text';

export default Text;