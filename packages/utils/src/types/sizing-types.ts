import classNames from 'classnames';

// #region [Single Type]
const numbers = [
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
  'full',
  'screen',
  'min',
  'max',
  'fit',
] as const;

const percents = [
  'auto',
  '1/2',
  '1/3',
  '2/3',
  '1/4',
  '2/4',
  '3/4',
  '1/5',
  '2/5',
  '3/5',
  '4/5',
  '1/6',
  '2/6',
  '3/6',
  '4/6',
  '5/6',
  '1/12',
  '2/12',
  '3/12',
  '4/12',
  '5/12',
  '6/12',
  '7/12',
  '8/12',
  '9/12',
  '10/12',
  '11/12',
] as const;

/**
 * Utilities for setting the width or height of an element.
 *
 * @example
 * h-1 - height: 0.25rem;  // 4px
 */
export declare type WidthOrHeightType = typeof numbers[number] | typeof percents[number];

export declare type minWithType = '0' | 'full' | 'min' | 'max' | 'fit';

export declare type maxWithType =
  | '0'
  | 'none'
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
  | '7xl'
  | 'full'
  | 'min'
  | 'max'
  | 'fit'
  | 'prose'
  | 'screen-sm'
  | 'screen-md'
  | 'screen-lg'
  | 'screen-xl'
  | 'screen-2xl';

export declare type minHeightType = '0' | 'full' | 'screen' | 'min' | 'max' | 'fit';

export declare type maxHeightType = typeof numbers[number];
// #endregion

// #region [Components Props]
export interface SizingProps {
  /**
   * Utilities for setting the width of an element.
   * @example
   * w-1 - width: 0.25rem; // 4px
   */
  width?: WidthOrHeightType;
  /**
   * Utilities for setting the minimum width of an element.
   */
  minWidth?: minWithType;
  maxWidth?: maxWithType;
  height?: WidthOrHeightType;
  minHeight?: minHeightType;
  maxHeight?: maxHeightType;
}
// #endregion

// #region [Components ClassNames]
export const SizingClassNames = (props: SizingProps) => {
  const { width, minWidth, maxWidth, height, minHeight, maxHeight } = props;
  return classNames({
    [`w-${width}`]: width,
    [`minW-${minWidth}`]: minWidth,
    [`maxW-${maxWidth}`]: maxWidth,
    [`h-${height}`]: height,
    [`minH-${minHeight}`]: minHeight,
    [`maxH-${maxHeight}`]: maxHeight,
  });
};
// #endregion
