import classNames from 'classnames';

// #region [Single Type]
export declare type AspectType = 'auto' | 'square' | 'video';

export declare type ContainerType = boolean;

export declare type ColumnsType =
  | '1'
  | '2'
  | '3'
  | '4'
  | '5'
  | '6'
  | '7'
  | '8'
  | '9'
  | '10'
  | '11'
  | '12'
  | 'auto'
  | '3xs'
  | '2xs'
  | 'xs'
  | 'sm'
  | 'md'
  | 'lg'
  | 'xl'
  | '2xl'
  | '3xl'
  | '4xl'
  | '5xl'
  | '6xl'
  | '7xl';

export declare type BreakAfterType = 'auto' | 'avoid' | 'all' | 'avoid-page' | 'page' | 'left' | 'right' | 'column';

export declare type BreakBeforeType = 'auto' | 'avoid' | 'all' | 'avoid-page' | 'page' | 'left' | 'right' | 'column';

export declare type BreakInsideType = 'auto' | 'avoid' | 'avoid-page' | 'avoid-column';

export declare type BoxDecorationBreakType = 'clone' | 'slice';

export declare type BoxSizingType = 'border' | 'content';

export declare type DisplayType =
  | 'block'
  | 'inline-block'
  | 'inline'
  | 'flex'
  | 'inline-flex'
  | 'table'
  | 'inline-table'
  | 'table-caption'
  | 'table-cell'
  | 'table-column'
  | 'table-column-group'
  | 'table-footer-group'
  | 'table-header-group'
  | 'table-row-group'
  | 'table-row'
  | 'flow-root'
  | 'grid'
  | 'inline-grid'
  | 'contents'
  | 'list-item'
  | 'hidden';

export declare type FloatType = 'left' | 'right' | 'none';

export declare type ClearType = 'left' | 'right' | 'both' | 'none';

export declare type IsolationType = true | 'auto';

export declare type ObjectFitType = 'contain' | 'cover' | 'fill' | 'none' | 'scale-down';

export declare type ObjectPositionType =
  | 'bottom'
  | 'center'
  | 'left'
  | 'left-bottom'
  | 'left-top'
  | 'right'
  | 'right-bottom'
  | 'right-top'
  | 'top';

export declare type OverflowType = 'auto' | 'hidden' | 'clip' | 'visible' | 'scroll';

export declare type OverscrollBehaviorType =
  | 'auto'
  | 'contain'
  | 'none'
  | 'y-auto'
  | 'y-contain'
  | 'y-none'
  | 'x-auto'
  | 'x-contain'
  | 'x-none';

export declare type PositionType = 'static' | 'fixed' | 'absolute' | 'relative' | 'sticky';

const sizes = [
  '0',
  'px',
  '0.5',
  '1',
  '1.5',
  '2',
  '2.5',
  '3',
  '3.5',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '10',
  '11',
  '12',
  '14',
  '16',
  '20',
  '24',
  '28',
  '32',
  '36',
  '40',
  '44',
  '48',
  '52',
  '56',
  '60',
  '64',
  '72',
  '80',
  '96',
  '1/2',
  '1/3',
  '2/3',
  '1/4',
  '2/4',
  '3/4',
  'full',
] as const;

export declare type TopRrightBottomLeftType = typeof sizes[number];

export declare type VisibleType = boolean;

export declare type ZIndexType = '0' | '10' | '20' | '30' | '40' | '50' | 'auto';
// #endregion

// #region [Components Props]
export interface LayoutProps {
  aspect?: AspectType;
  container?: ContainerType;
  columns?: ColumnsType;
  breakAfter?: BreakAfterType;
  breakBefore?: BreakBeforeType;
  breakInside?: BreakInsideType;
  boxDecorationBreak?: BoxDecorationBreakType;
  boxSizing?: BoxSizingType;
  display?: DisplayType;
  float?: FloatType;
  clear?: ClearType;
  isolate?: IsolationType;
  objectFit?: ObjectFitType;
  objectPosition?: ObjectPositionType;
  overflow?: OverflowType;
  overflowX?: OverflowType;
  overflowY?: OverflowType;
  overscrollBehavior?: OverscrollBehaviorType;
  position?: PositionType;
  inset?: TopRrightBottomLeftType;
  insetX?: TopRrightBottomLeftType;
  insetY?: TopRrightBottomLeftType;
  top?: TopRrightBottomLeftType;
  right?: TopRrightBottomLeftType;
  bottom?: TopRrightBottomLeftType;
  left?: TopRrightBottomLeftType;
  visible?: VisibleType;
  zIndex?: ZIndexType;
}
// #endregion

// #region [ClassName functions]

// #endregion

// #region [Components ClassNames]
export const LayoutClassNames = (props: LayoutProps) => {
  const {
    aspect,
    container,
    columns,
    breakAfter,
    breakBefore,
    breakInside,
    boxDecorationBreak,
    boxSizing,
    display,
    float,
    clear,
    isolate,
    objectFit,
    objectPosition,
    overflow,
    overflowX,
    overflowY,
    overscrollBehavior,
    position,
    inset,
    insetX,
    insetY,
    top,
    right,
    bottom,
    left,
    visible,
    zIndex,
  } = props;
  return classNames({
    [`aspect-${aspect}`]: aspect,
    container: container,
    [`columns-${columns}`]: columns,
    [`break-after-${breakAfter}`]: breakAfter,
    [`break-before-${breakBefore}`]: breakBefore,
    [`break-inside-${breakInside}`]: breakInside,
    [`box-decoration-break-${boxDecorationBreak}`]: boxDecorationBreak,
    [`box-${boxSizing}`]: boxSizing,
    [`${display}`]: display,
    [`float-${float}`]: float,
    [`clear-${clear}`]: clear,
    [`isolate-${isolate}`]: isolate && typeof isolate !== 'boolean',
    isolate: isolate && typeof isolate === 'boolean',
    [`object-${objectFit}`]: objectFit,
    [`object-${objectPosition}`]: objectPosition,
    [`overflow-${overflow}`]: overflow,
    [`overflow-x-${overflow}`]: overflowX,
    [`overflow-y-${overflow}`]: overflowY,
    [`overscroll-${overscrollBehavior}`]: overscrollBehavior,
    [`${position}`]: position,
    [`inset-${inset}`]: inset,
    [`insetX-${insetX}`]: insetX,
    [`insetY-${insetY}`]: insetY,
    [`top-${top}`]: top,
    [`right-${right}`]: right,
    [`bottom-${bottom}`]: bottom,
    [`left-${left}`]: left,
    [`visible`]: visible,
    [`invisible`]: visible === false,
    [`z-${zIndex}`]: zIndex,
  });
};
// #endregion
