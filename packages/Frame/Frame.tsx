import * as React from 'react';
import classnames from 'classnames';
import {
  boxSizingClass,
  displayClass,
  overflowClass,
  positionClass,
  visibleClass,
  zIndexClass,
} from '../utils/classes';
import { FrameProps } from './types';

const Frame = (props: FrameProps) => {
  const {
    className,
    style,
    children,
    boxSizing,
    display,
    overflow,
    position,
    visible,
    zIndex,
  } = props;

  const renderCls = classnames(
    boxSizingClass(boxSizing),
    displayClass(display),
    overflowClass(overflow),
    positionClass(position),
    visibleClass(visible),
    zIndexClass(zIndex),
    className
  );

  return (
    <div className={renderCls} style={style}>
      {children}
    </div>
  );
};

Frame.displayName = 'Frame';

export default Frame;
