import { ColorType } from './colors-types';
export declare type BackgroundAttachmentType = 'fixed' | 'local' | 'scroll';
export declare type BackgroundClipType = 'border' | 'padding' | 'content' | 'text';
export declare type BackgroundColorType = ColorType;
export declare type BackgroundOriginType = 'border' | 'padding' | 'content';
export declare type BackgroundPositionType = 'bottom' | 'center' | 'left' | 'left-bottom' | 'left-top' | 'right' | 'right-bottom' | 'right-top' | 'top';
export declare type BackgroundRepeatType = 'repeat' | 'no-repeat' | 'repeat-x' | 'repeat-y' | 'repeat-round' | 'repeat-space';
export declare type BackgroundSizeType = 'auto' | 'cover' | 'contain';
export declare type BackgroundGradientDirectionType = 'none' | 't' | 'tr' | 'r' | 'br' | 'b' | 'bl' | 'l' | 'tl';
export declare type BackgroundGradientColorStopsType = ColorType;
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
export declare const BackgroundsClassNames: (props: BackgroundsProps) => string;
//# sourceMappingURL=backgrounds-types.d.ts.map