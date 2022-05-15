import * as React from 'react';
import classnames from 'classnames';
import {
  aspectClass,
  boxSizingClass,
  clearClass,
  columnsClass,
  displayClass,
  floatClass,
  overflowClass,
  positionClass,
  visibleClass,
  zIndexClass
} from '../utils/classes';
import { FrameProps } from './types';

const Frame = (props: FrameProps) => {
  const {
    aspect,
    className,
    clear,
    children,
    columns,
    boxSizing,
    display,
    float,
    overflow,
    position,
    style,
    visible,
    zIndex
  } = props;

  const renderCls = classnames(
    aspectClass(aspect),
    boxSizingClass(boxSizing),
    clearClass(clear),
    columnsClass(columns),
    displayClass(display),
    floatClass(float),
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
