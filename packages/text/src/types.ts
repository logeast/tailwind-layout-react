import {
  BaseProps,
  AccessibilityProps,
  BackgroundsProps,
  BordersProps,
  SizingProps,
  SpacingProps,
  TypographyProps,
} from '@tailwind-layout-react/utils';

export type TextUnionProps = BaseProps &
  SpacingProps &
  SizingProps &
  TypographyProps &
  BackgroundsProps &
  BordersProps &
  AccessibilityProps;

export interface TextProps extends TextUnionProps {
  as?:
    | 'b'
    | 'blockquote'
    | 'br'
    | 'code'
    | 'del'
    | 'em'
    | 'hr'
    | 'i'
    | 'ins'
    | 'mark'
    | 'p'
    | 'pre'
    | 'small'
    | 'span'
    | 'strong'
    | 'sub'
    | 'sup';
}
