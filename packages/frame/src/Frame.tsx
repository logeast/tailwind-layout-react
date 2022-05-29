import * as React from 'react';
import classnames from 'classnames';

import { FrameProps } from './types';
import {
  AccessibilityClassNames,
  BackgroundsClassNames,
  BordersClassNames,
  EffectsClassNames,
  FiltersClassNames,
  FlexAndGridClassNames,
  FlexboxClassNames,
  GridClassNames,
  InteractivityClassNames,
  LayoutClassNames,
  SizingClassNames,
  SpacingClassNames,
  SVGClassNames,
  TableClassNames,
  TransitionsAndAnimationClassNames,
  TypographyClassNames,
} from '../../utils/types';

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
    LayoutClassNames(props),
    FlexboxClassNames(props),
    GridClassNames(props),
    FlexAndGridClassNames(props),
    SpacingClassNames(props),
    SizingClassNames(props),
    TypographyClassNames(props),
    BackgroundsClassNames(props),
    BordersClassNames(props),
    EffectsClassNames(props),
    FiltersClassNames(props),
    TransitionsAndAnimationClassNames(props),
    InteractivityClassNames(props),
    SVGClassNames(props),
    TableClassNames(props),
    AccessibilityClassNames(props),
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
