import { BaseProps } from '../utils/props';
import {
  AccessibilityProps,
  BackgroundsProps,
  BordersProps,
  SizingProps,
  SpacingProps,
  TypographyProps,
} from '../utils/types';

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
    | 'sup'
}
