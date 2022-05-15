import { ColorType } from './colors';

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
