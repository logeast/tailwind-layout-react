import * as React from 'react';
import classnames from 'classnames';
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
} from '@tailwind-layout-react/utils';

import { FlexProps } from './types';

const Flex = (props: FlexProps) => {
  const {
    // Base
    className,
    style,
    children,

    as: Tag = 'div',
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
    <Tag className={renderCls} style={style}>
      {children}
    </Tag>
  );
};

Flex.displayName = 'Flex';

export default Flex;
