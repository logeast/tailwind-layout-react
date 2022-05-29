import { ColorType } from './colors-types';
export declare type AccentColorType = ColorType;
export declare type AppearanceType = 'none';
export declare type CursorType = 'auto' | 'default' | 'pointer' | 'wait' | 'text' | 'move' | 'help' | 'not-allowed' | 'none' | 'context-menu' | 'progress' | 'cell' | 'crosshair' | 'vertical-text' | 'alias' | 'copy' | 'no-drop' | 'grab' | 'grabbing' | 'all-scroll' | 'col-resize' | 'row-resize' | 'n-resize' | 'e-resize' | 's-resize' | 'w-resize' | 'ne-resize' | 'nw-resize' | 'se-resize' | 'sw-resize' | 'ew-resize' | 'ns-resize' | 'nesw-resize' | 'nwse-resize' | 'zoom-in' | 'zoom-out';
export declare type CaretType = ColorType;
export declare type PointerEventsType = 'none' | 'auto';
export declare type ResizeType = 'none' | 'x' | 'y' | true;
export declare type ScrollBehaviorType = 'auto' | 'smooth';
declare const sizes: readonly ["0", "px", "0.5", "1", "1.5", "2", "2.5", "3", "3.5", "4", "5", "6", "7", "8", "9", "10", "11", "12", "14", "16", "20", "24", "28", "32", "36", "40", "44", "48", "52", "56", "60", "64", "72", "80", "96"];
export declare type ScrollMarginType = typeof sizes[number];
export declare type ScrollPaddingType = typeof sizes[number];
export declare type ScrollSnapAlignType = 'start' | 'end' | 'center' | 'align-none';
export declare type ScrollSnapStopType = 'normal' | 'always';
export declare type ScrollSnapTypeType = 'none' | 'x' | 'y' | 'both' | 'mandatory' | 'proximity';
export declare type TouchActionType = 'auto' | 'none' | 'pan-x' | 'pan-left' | 'pan-right' | 'pan-y' | 'pan-up' | 'pan-down' | 'pinch-zoom' | 'manipulation';
export declare type UserSelectType = 'none' | 'text' | 'all' | 'auto';
export declare type WillChangeType = 'auto' | 'scroll' | 'contents' | 'transform';
export interface InteractivityProps {
    accentColor?: AccentColorType;
    appearance?: AppearanceType;
    cursor?: CursorType;
    caret?: CaretType;
    pointerEvents?: PointerEventsType;
    resize?: ResizeType;
    scrollBehavior?: ScrollBehaviorType;
    scrollMargin?: ScrollMarginType;
    scrollMX?: ScrollMarginType;
    scrollMY?: ScrollMarginType;
    scrollMT?: ScrollMarginType;
    scrollMR?: ScrollMarginType;
    scrollMB?: ScrollMarginType;
    scrollML?: ScrollMarginType;
    scrollPadding?: ScrollPaddingType;
    scrollPX?: ScrollPaddingType;
    scrollPY?: ScrollPaddingType;
    scrollPT?: ScrollPaddingType;
    scrollPR?: ScrollPaddingType;
    scrollPB?: ScrollPaddingType;
    scrollPL?: ScrollPaddingType;
    scrollSnapAlign?: ScrollSnapAlignType;
    scrollSnapStop?: ScrollSnapStopType;
    scrollSnapType?: ScrollSnapTypeType;
    touchAction?: TouchActionType;
    userSelect?: UserSelectType;
    willChange?: WillChangeType;
}
export declare const InteractivityClassNames: (props: InteractivityProps) => string;
export {};
//# sourceMappingURL=interactivity-types.d.ts.map