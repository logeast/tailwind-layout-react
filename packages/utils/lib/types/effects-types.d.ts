import { ColorType } from './colors-types';
export declare type BoxShadowType = 'sm' | true | 'md' | 'lg' | 'xl' | '2xl' | 'inner' | 'none';
export declare type BoxShadowColorType = ColorType;
export declare type OpacityType = '0' | '5' | '10' | '20' | '25' | '30' | '40' | '50' | '60' | '70' | '75' | '80' | '90' | '95' | '100';
export declare type MixBlendModeType = 'normal' | 'multiply' | 'screen' | 'overlay' | 'darken' | 'lighten' | 'color-dodge' | 'color-burn' | 'hard-light' | 'soft-light' | 'difference' | 'exclusion' | 'hue' | 'saturation' | 'color' | 'luminosity';
export declare type BackgroundBlendModeType = 'normal' | 'multiply' | 'screen' | 'overlay' | 'darken' | 'lighten' | 'color-dodge' | 'color-burn' | 'hard-light' | 'soft-light' | 'difference' | 'exclusion' | 'hue' | 'saturation' | 'color' | 'luminosity';
export interface EffectsProps {
    shadow?: BoxShadowType;
    shadowColor?: BoxShadowColorType;
    opacity?: OpacityType;
    mixBlend?: MixBlendModeType;
    bgBlend?: BackgroundBlendModeType;
}
export declare const EffectsClassNames: (props: EffectsProps) => string;
//# sourceMappingURL=effects-types.d.ts.map