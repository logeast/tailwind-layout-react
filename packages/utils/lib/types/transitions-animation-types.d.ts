export declare type TransitionPropertyType = 'none' | true | 'colors' | 'opacity' | 'shadow' | 'transform';
export declare type TransitionDurationType = '75' | '100' | '150' | '200' | '300' | '500' | '700' | '1000';
export declare type TransitionTimingFunctionType = 'ease-linear' | 'ease-in' | 'ease-out' | 'ease-in-out';
export declare type TransitionDelayType = '75' | '100' | '150' | '200' | '300' | '500' | '700' | '1000';
export declare type AnimationType = 'none' | 'ping' | 'pulse' | 'bounce';
export interface TransitionsAndAnimationProps {
    transitionProperty?: TransitionPropertyType;
    transitionDuration?: TransitionDurationType;
    transitionTimingFunction?: TransitionTimingFunctionType;
    transitionDelay?: TransitionDelayType;
    animation?: AnimationType;
}
export declare const TransitionsAndAnimationClassNames: (props: TransitionsAndAnimationProps) => string;
//# sourceMappingURL=transitions-animation-types.d.ts.map