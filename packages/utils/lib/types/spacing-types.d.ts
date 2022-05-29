declare const sizesOrAmounts: readonly ["0", "px", "0.5", "1", "1.5", "2", "2.5", "3", "3.5", "4", "5", "6", "7", "8", "9", "10", "11", "12", "14", "16", "20", "24", "28", "32", "36", "40", "44", "48", "52", "56", "60", "64", "72", "80", "96"];
export declare type PaddingType = typeof sizesOrAmounts[number];
export declare type MarginType = typeof sizesOrAmounts[number];
export declare type SpaceType = 'reverse' | typeof sizesOrAmounts[number];
export interface SpacingProps {
    p?: PaddingType;
    px?: PaddingType;
    py?: PaddingType;
    pt?: PaddingType;
    pr?: PaddingType;
    pb?: PaddingType;
    pl?: PaddingType;
    m?: MarginType;
    mx?: MarginType;
    my?: MarginType;
    mt?: MarginType;
    mr?: MarginType;
    mb?: MarginType;
    ml?: MarginType;
    spaceX?: SpaceType;
    spaceY?: SpaceType;
}
export declare const SpacingClassNames: (props: SpacingProps) => string;
export {};
//# sourceMappingURL=spacing-types.d.ts.map