import * as React from 'react';
import classnames from 'classnames';
import {
  AccessibilityClassNames,
  BackgroundsClassNames,
  BordersClassNames,
  SizingClassNames,
  SpacingClassNames,
  TypographyClassNames,
} from '@tailwind-layout-react/utils';

import { TextProps } from './types';

const Text = (props: TextProps) => {
  const {
    // Base
    className,
    style,
    children,

    as: Tag = 'span',
  } = props;

  const renderCls = classnames(
    SpacingClassNames(props),
    SizingClassNames(props),
    TypographyClassNames(props),
    BackgroundsClassNames(props),
    BordersClassNames(props),
    AccessibilityClassNames(props),
    className,
  );

  return (
    <Tag className={renderCls} style={style}>
      {children}
    </Tag>
  );
};

Text.displayName = 'Text';

export default Text;
