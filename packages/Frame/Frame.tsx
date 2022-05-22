import * as React from 'react';
import classnames from 'classnames';

import { FrameProps } from './types';
import {
  backgroundsClassNames,
  bordersClassNames,
  layoutClassNames,
  sizingClassNames,
  spacingClassNames,
  typographyClassNames,
} from '../utils/types';

const Frame = (props: FrameProps) => {
  const {
    // Base
    className,
    style,
    children,

    as: Tag = 'div',
    ...others
  } = props;

  const renderCls = classnames(
    layoutClassNames(props),
    spacingClassNames(props),
    sizingClassNames(props),
    typographyClassNames(props),
    backgroundsClassNames(props),
    bordersClassNames(props),
    className
  );

  return (
    <Tag className={renderCls} style={style} {...others}>
      {children}
    </Tag>
  );
};

Frame.displayName = 'Frame';

export default Frame;
