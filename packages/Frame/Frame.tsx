import * as React from 'react';
import classnames from 'classnames';
import {
  aspectClass,
  boxSizingClass,
  clearClass,
  columnsClass,
  displayClass,
  floatClass,
  heightClass,
  marginBottomClass,
  marginClass,
  marginLeftClass,
  marginRightClass,
  marginTopClass,
  marginXClass,
  marginYClass,
  maxHeightClass,
  maxWidthClass,
  minHeightClass,
  minWidthClass,
  overflowClass,
  paddingBottomClass,
  paddingClass,
  paddingLeftClass,
  paddingRightClass,
  paddingTopClass,
  paddingXClass,
  paddingYClass,
  positionClass,
  spaceXClass,
  spaceYClass,
  visibleClass,
  widthClass,
  zIndexClass
} from '../utils/classes';
import { FrameProps } from './types';

const Frame = (props: FrameProps) => {
  const {
    // Base
    className,
    style,
    children,

    // Layout
    aspect,
    boxSizing,
    clear,
    columns,
    display,
    float,
    overflow,
    position,
    visible,
    zIndex,

    // Space
    p,
    px,
    py,
    pt,
    pr,
    pb,
    pl,
    m,
    mx,
    my,
    mt,
    mr,
    mb,
    ml,
    spaceX,
    spaceY,

    // Sizing
    w,
    minW,
    maxW,
    h,
    minH,
    maxH
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

    // Spacing
    paddingClass(p),
    paddingXClass(px),
    paddingYClass(py),
    paddingTopClass(pt),
    paddingRightClass(pr),
    paddingBottomClass(pb),
    paddingLeftClass(pl),
    marginClass(m),
    marginXClass(mx),
    marginYClass(my),
    marginTopClass(mt),
    marginRightClass(mr),
    marginBottomClass(mb),
    marginLeftClass(ml),
    spaceXClass(spaceX),
    spaceYClass(spaceY),

    // Sizing
    widthClass(w),
    minWidthClass(minW),
    maxWidthClass(maxW),
    heightClass(h),
    minHeightClass(minH),
    maxHeightClass(maxH),

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
