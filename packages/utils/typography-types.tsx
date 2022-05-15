import { colorCommon, colors } from './colors';

export declare type FontFamilyType = 'sans' | 'serif' | 'mono';

export declare type FontSizeType =
  | 'xs'
  | 'sm'
  | 'base'
  | 'lg'
  | 'xl'
  | '2xl'
  | '3xl'
  | '4xl'
  | '5xl'
  | '6xl'
  | '7xl'
  | '8xl'
  | '9xl';

export declare type FontSmoothingType = 'antialiased' | 'subpixel-antialiased';

export declare type FontWeightType =
  | 'thin'
  | 'extralight'
  | 'light'
  | 'normal'
  | 'medium'
  | 'semibold'
  | 'bold'
  | 'extrabold'
  | 'black';

export declare type FontVariantNumericType =
  | 'normal-nums'
  | 'ordinal'
  | 'slashed-zero'
  | 'lining-nums'
  | 'oldstyle-nums'
  | 'proportional-nums'
  | 'tabular-nums'
  | 'diagonal-fractions'
  | 'stacked-fractions';

export declare type LetterSpacingType =
  | 'tighter'
  | 'tight'
  | 'normal'
  | 'wide'
  | 'wider'
  | 'widest';

export declare type LineHeightType =
  | '3'
  | '4'
  | '5'
  | '6'
  | '7'
  | '8'
  | '9'
  | '10'
  | 'none'
  | 'tight'
  | 'snug'
  | 'normal'
  | 'relaxed'
  | 'loose';

export declare type ListStyleType = 'none' | 'disc' | 'decimal';

export declare type ListStylePositionType = 'inside' | 'outside';

export declare type TextAlignmentType = 'left' | 'center' | 'right' | 'justify';

export declare type TextColorType = typeof colorCommon | typeof colors;

export declare type TextDecorationType =
  | 'underline'
  | 'overline'
  | 'line-through'
  | 'no-underline';

export declare type TextDecorationColorType =
  | typeof colorCommon
  | typeof colors;

export declare type TextDecorationStyleType =
  | 'solid'
  | 'double'
  | 'dotted'
  | 'dashed'
  | 'wavy';

export declare type TextDecorationThicknessType =
  | 'auto'
  | 'from-font'
  | '0'
  | '1'
  | '2'
  | '4'
  | '8';

export declare type TextUnderlineOffset = 'auto' | '0' | '1' | '2' | '4' | '8';
