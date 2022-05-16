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
  zIndexClass,
} from '../utils/classes';

import { FrameProps } from './types';

const Frame = (props: FrameProps) => {
  const {
    // Base
    className,
    style,
    children,
  } = props;

  const renderCls = classnames(
    // Layout
    aspectClass(props.aspect),
    boxSizingClass(props.boxSizing),
    clearClass(props.clear),
    columnsClass(props.columns),
    displayClass(props.display),
    floatClass(props.float),
    overflowClass(props.overflow),
    positionClass(props.position),
    visibleClass(props.visible),
    zIndexClass(props.zIndex),

    // Spacing
    paddingClass(props.p),
    paddingXClass(props.px),
    paddingYClass(props.py),
    paddingTopClass(props.pt),
    paddingRightClass(props.pr),
    paddingBottomClass(props.pb),
    paddingLeftClass(props.pl),
    marginClass(props.m),
    marginXClass(props.mx),
    marginYClass(props.my),
    marginTopClass(props.mt),
    marginRightClass(props.mr),
    marginBottomClass(props.mb),
    marginLeftClass(props.ml),
    spaceXClass(props.spaceX),
    spaceYClass(props.spaceY),

    // Sizing
    widthClass(props.w),
    minWidthClass(props.minW),
    maxWidthClass(props.maxW),
    heightClass(props.h),
    minHeightClass(props.minH),
    maxHeightClass(props.maxH),

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
