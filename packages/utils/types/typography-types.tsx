import classNames from 'classnames';
import { ColorType } from './colors-types';

// #region [Single Type]
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

export declare type FontItalicType = boolean;

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

export declare type LetterSpacingType = 'tighter' | 'tight' | 'normal' | 'wide' | 'wider' | 'widest';

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

export declare type TextColorType = ColorType;

export declare type TextDecorationType = 'underline' | 'overline' | 'line-through' | 'no-underline';

export declare type TextDecorationColorType = ColorType;

export declare type TextDecorationStyleType = 'solid' | 'double' | 'dotted' | 'dashed' | 'wavy';

export declare type TextDecorationThicknessType = 'auto' | 'from-font' | '0' | '1' | '2' | '4' | '8';

export declare type TextUnderlineOffsetType = 'auto' | '0' | '1' | '2' | '4' | '8';

export declare type TextTransformType = 'uppercase' | 'lowercase' | 'capitalize' | 'normal-case';

export declare type TextOverflowType = 'truncate' | 'text-ellipsis' | 'text-clip';

const widthes = [
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
] as const;

export declare type TextIndentType = typeof widthes[number];

export declare type VerticalAlignType =
  | 'baseline'
  | 'top'
  | 'middle'
  | 'bottom'
  | 'text-top'
  | 'text-bottom'
  | 'sub'
  | 'super';

export declare type WhitespaceType = 'normal' | 'nowrap' | 'pre' | 'pre-line' | 'pre-wrap';

export declare type WordBreakType = 'normal' | 'words' | 'all';
// #endregion

// #region [Components Props]
export interface TypographyProps {
  fontFamily?: FontFamilyType;
  fontSize?: FontSizeType;
  FontSmoothing?: FontSmoothingType;
  fontItalic?: FontItalicType;
  fontWeight?: FontWeightType;
  fontVariant?: FontVariantNumericType;
  tracking?: LetterSpacingType;
  letterSpacing?: LetterSpacingType;
  leading?: LineHeightType;
  lineHeight?: LineHeightType;
  listType?: ListStyleType;
  listPos?: ListStylePositionType;
  align?: TextAlignmentType;
  color?: TextColorType;
  decoration?: TextDecorationType;
  decorationColor?: TextDecorationColorType;
  decorationStyle?: TextDecorationStyleType;
  decorationThickness?: TextDecorationThicknessType;
  underlineOffset?: TextUnderlineOffsetType;
  textTransform?: TextTransformType;
  textOverflow?: TextOverflowType;
  textIndent?: TextIndentType;
  verticalAlign?: VerticalAlignType;
  whiteSpace?: WhitespaceType;
  wordBreak?: WordBreakType;

  // Todo: Don't forget Content
}
// #endregion

// #region [Components ClassNames]
export const typographyClassNames = (props: TypographyProps) => {
  const {
    fontFamily,
    fontSize,
    FontSmoothing,
    fontItalic,
    fontWeight,
    fontVariant,
    tracking,
    letterSpacing,
    leading,
    lineHeight,
    listType,
    listPos,
    align,
    color,
    decoration,
    decorationColor,
    decorationStyle,
    decorationThickness,
    underlineOffset,
    textTransform,
    textOverflow,
    textIndent,
    verticalAlign,
    whiteSpace,
    wordBreak,
  } = props;

  return classNames({
    [`font-${fontFamily}`]: fontFamily,
    [`text-${fontSize}`]: fontSize,
    [`smoothing-${FontSmoothing}`]: FontSmoothing,
    italic: fontItalic,
    'not-italic': fontItalic === false,
    [`font-${fontWeight}`]: fontWeight,
    fontVariant,
    [`tracking-${tracking}`]: tracking,
    [`tracking-${letterSpacing}`]: letterSpacing,
    [`leading-${leading}`]: leading,
    [`leading-${lineHeight}`]: lineHeight,
    [`list-${listType}`]: listType,
    [`list-${listPos}`]: listPos,
    [`text-${align}`]: align,
    [`text-${color}`]: color,
    decoration,
    [`decoration-${decorationColor}`]: decorationColor,
    [`decoration-${decorationStyle}`]: decorationStyle,
    [`decoration-${decorationThickness}`]: decorationThickness,
    [`underline-offset-${underlineOffset}`]: underlineOffset,
    textTransform,
    [`text-${textOverflow}`]: textOverflow,
    [`indent-${textIndent}`]: textIndent,
    [`align-${verticalAlign}`]: verticalAlign,
    [`space-${whiteSpace}`]: whiteSpace,
    [`break-${wordBreak}`]: wordBreak,
  });
};
// #endregion
