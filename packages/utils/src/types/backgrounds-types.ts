import classNames from 'classnames';

import { ColorType } from './colors-types';

// #region [Single Type]
export declare type BackgroundAttachmentType = 'fixed' | 'local' | 'scroll';

export declare type BackgroundClipType = 'border' | 'padding' | 'content' | 'text';

export declare type BackgroundColorType = ColorType;

export declare type BackgroundOriginType = 'border' | 'padding' | 'content';

export declare type BackgroundPositionType =
  | 'bottom'
  | 'center'
  | 'left'
  | 'left-bottom'
  | 'left-top'
  | 'right'
  | 'right-bottom'
  | 'right-top'
  | 'top';

export declare type BackgroundRepeatType =
  | 'repeat'
  | 'no-repeat'
  | 'repeat-x'
  | 'repeat-y'
  | 'repeat-round'
  | 'repeat-space';

export declare type BackgroundSizeType = 'auto' | 'cover' | 'contain';

export declare type BackgroundGradientDirectionType = 'none' | 't' | 'tr' | 'r' | 'br' | 'b' | 'bl' | 'l' | 'tl';

export declare type BackgroundGradientColorStopsType = ColorType;
// #endregion

// #region [Components Props]
export interface BackgroundsProps {
  bgAttachment?: BackgroundAttachmentType;
  bgClip?: BackgroundClipType;
  bgColor?: BackgroundColorType;
  bgOrigin?: BackgroundOriginType;
  bgPosition?: BackgroundPositionType;
  bgRepeat?: BackgroundRepeatType;
  bgSize?: BackgroundSizeType;
  bgGradientDirection?: BackgroundGradientDirectionType;
  bgGradientFromColor?: BackgroundGradientColorStopsType;
  bgGradientViaColor?: BackgroundGradientColorStopsType;
  bgGradientToColor?: BackgroundGradientColorStopsType;
}
// #endregion

// #region [Components ClassNames]
export const BackgroundsClassNames = (props: BackgroundsProps) => {
  const {
    bgAttachment,
    bgClip,
    bgColor,
    bgOrigin,
    bgPosition,
    bgRepeat,
    bgSize,
    bgGradientDirection,
    bgGradientFromColor,
    bgGradientViaColor,
    bgGradientToColor,
  } = props;
  return classNames({
    [`bg-${bgAttachment}`]: bgAttachment,
    [`bg-clip-${bgClip}`]: bgClip,
    [`bg-${bgColor}`]: bgColor,
    [`bg-origin-${bgOrigin}`]: bgOrigin,
    [`bg-${bgPosition}`]: bgPosition,
    [`bg-${bgRepeat}`]: bgRepeat,
    [`bg-${bgSize}`]: bgSize,
    [`bg-gradient-${bgGradientDirection}`]: bgGradientDirection && bgGradientDirection !== 'none',
    [`bg-none`]: bgGradientDirection === 'none',
    [`from-${bgGradientFromColor}`]: bgGradientFromColor,
    [`via-${bgGradientViaColor}`]: bgGradientViaColor,
    [`to-${bgGradientToColor}`]: bgGradientToColor,
  });
};
// #endregion
