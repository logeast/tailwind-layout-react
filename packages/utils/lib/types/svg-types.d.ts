import { ColorType } from './colors-types';
export declare type FillType = ColorType;
export declare type StrokeType = ColorType;
export declare type StrokeWidthType = '0' | '1' | '2';
export interface SVGProps {
    fill?: FillType;
    stroke?: StrokeType;
    strokeWidth?: StrokeWidthType;
}
export declare const SVGClassNames: (props: SVGProps) => string;
//# sourceMappingURL=svg-types.d.ts.map