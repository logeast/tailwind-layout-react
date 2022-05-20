import classNames from 'classnames';

// #region [Single Type]
const sizes = [
  '0',
  '1',
  '2',
  '3',
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
  'auto',
  'px',
  '0.5',
  '1.5',
  '2.5',
  '3.5',
  '1/2',
  '1/3',
  '2/3',
  '1/4',
  '2/4',
  '3/4',
  '1/5',
  '2/5',
  '3/5',
  '4/5',
  '1/6',
  '2/6',
  '3/6',
  '4/6',
  '5/6',
  '1/12',
  '2/12',
  '3/12',
  '4/12',
  '5/12',
  '6/12',
  '7/12',
  '8/12',
  '9/12',
  '10/12',
  '11/12',
  'full',
] as const;

export declare type FlexBasisType = typeof sizes[number];

export declare type FlexDirectionType = 'row' | 'row-reverse' | 'col' | 'col-reverse';

export declare type FlexWrapType = 'wrap' | 'wrap-reverse' | 'nowrap';

export declare type FlexType = '0' | 'auto' | 'initial' | 'none';

export declare type FlexGrowType = boolean;

export declare type FlexShrinkType = boolean;

export declare type OrderType =
  | '1'
  | '2'
  | '3'
  | '4'
  | '5'
  | '6'
  | '7'
  | '8'
  | '9'
  | '10'
  | '11'
  | '12'
  | 'first'
  | 'last'
  | 'none';

export declare type JustifyOrAlignOrPlaceContentType = 'start' | 'end' | 'center' | 'between' | 'around' | 'evenly';

export declare type JustifyOrAlignOrPlaceItemsType = 'start' | 'end' | 'center' | 'stretch';

export declare type JustifyOrAlignOrPlaceSelfType = 'auto' | 'start' | 'end' | 'center' | 'stretch';

export declare type GridTemplateColumnsType =
  | '1'
  | '2'
  | '3'
  | '4'
  | '5'
  | '6'
  | '7'
  | '8'
  | '9'
  | '10'
  | '11'
  | '12'
  | 'none';

export declare type GridColumnOrRowsAutoType = boolean;

export declare type GridColumnSpanType =
  | '1'
  | '2'
  | '3'
  | '4'
  | '5'
  | '6'
  | '7'
  | '8'
  | '9'
  | '10'
  | '11'
  | '12'
  | 'full';

export declare type GridColumnStartOrEndType =
  | '1'
  | '2'
  | '3'
  | '4'
  | '5'
  | '6'
  | '7'
  | '8'
  | '9'
  | '10'
  | '11'
  | '12'
  | '13'
  | 'auto';

export declare type GridTemplateRowsType = '1' | '2' | '3' | '4' | '5' | '6' | 'none';

export declare type GridRowSpanType = '1' | '2' | '3' | '4' | '5' | '6' | '7' | 'full';

export declare type GridRowStartOrEndType = '1' | '2' | '3' | '4' | '5' | '6' | '7' | 'auto';

export declare type GridAutoFlowType = 'row' | 'col' | 'row-dense' | 'col-dense';

export declare type GridAutoColumnsOrRowsType = 'auto' | 'min' | 'max' | 'fr';

const gapSizes = [
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

export declare type GapType = typeof gapSizes[number];
// #endregion

// #region [Components Props]
export interface FlexboxProps {
  flexBasis?: FlexBasisType;
  flexDirection?: FlexDirectionType;
  flexWrap?: FlexWrapType;
  flex?: FlexType;
  flexGrow?: FlexGrowType;
  flexShrink?: FlexShrinkType;
}

export interface GridProps {
  gridCols?: GridTemplateColumnsType;
  gridColAuto?: GridColumnOrRowsAutoType;
  gridColSpan?: GridColumnSpanType;
  gridColStart?: GridColumnStartOrEndType;
  gridColEnd?: GridColumnStartOrEndType;
  gridRows?: GridTemplateRowsType;
  gridRowAuto?: GridColumnOrRowsAutoType;
  gridRowSpan?: GridRowSpanType;
  gridRowStart?: GridRowStartOrEndType;
  gridRowEnd?: GridRowStartOrEndType;
  gridAutoFlow?: GridAutoFlowType;
  gridAutoCols?: GridAutoColumnsOrRowsType;
  gridAutoRows?: GridAutoColumnsOrRowsType;
}

export interface FlexAndGridProps {
  order?: OrderType;
  gap?: GapType;
  gapX?: GapType;
  gapY?: GapType;
  justifyContent?: JustifyOrAlignOrPlaceContentType;
  justifyItems?: JustifyOrAlignOrPlaceItemsType;
  justifySelf?: JustifyOrAlignOrPlaceSelfType;
  alignContent?: JustifyOrAlignOrPlaceContentType;
  alignItems?: JustifyOrAlignOrPlaceItemsType;
  alignSelf?: JustifyOrAlignOrPlaceSelfType;
  placeContent?: JustifyOrAlignOrPlaceContentType;
  placeItems?: JustifyOrAlignOrPlaceItemsType;
  placeSelf?: JustifyOrAlignOrPlaceSelfType;
}
// #endregion

// #region [Components ClassNames]
export const FlexboxClassNames = (props: FlexboxProps) => {
  const { flexBasis, flexDirection, flexWrap, flex, flexGrow, flexShrink } = props;
  return classNames({
    [`basis-${flexBasis}`]: flexBasis,
    [`flex-${flexDirection}`]: flexDirection,
    [`flex-${flexWrap}`]: flexWrap,
    [`flex-${flex}`]: flex,
    [`grow-${flexGrow}`]: flexGrow,
    [`shrink-${flexShrink}`]: flexShrink,
  });
};

export const GridClassNames = (props: GridProps) => {
  const {
    gridCols,
    gridColAuto,
    gridColSpan,
    gridColStart,
    gridColEnd,
    gridRows,
    gridRowAuto,
    gridRowSpan,
    gridRowStart,
    gridRowEnd,
    gridAutoFlow,
    gridAutoCols,
    gridAutoRows,
  } = props;
  return classNames({
    [`grid-cols-${gridCols}`]: gridCols,
    [`gridColAuto-${gridColAuto}`]: gridColAuto,
    [`col-span`]: gridColSpan,
    [`col-start-${gridColStart}`]: gridColStart,
    [`col-end-${gridColEnd}`]: gridColEnd,
    [`grid-rows-${gridRows}`]: gridRows,
    [`row-auto`]: gridRowAuto,
    [`row-span-${gridRowSpan}`]: gridRowSpan,
    [`row-start-${gridRowStart}`]: gridRowStart,
    [`row-end-${gridRowEnd}`]: gridRowEnd,
    [`grid-flow-${gridAutoFlow}`]: gridAutoFlow,
    [`auto-cols-${gridAutoCols}`]: gridAutoCols,
    [`auto-rows-${gridAutoRows}`]: gridAutoRows,
  });
};

export const FlexAndGridClassNames = (props: FlexAndGridProps) => {
  const {
    order,
    gap,
    gapX,
    gapY,
    justifyContent,
    justifyItems,
    justifySelf,
    alignContent,
    alignItems,
    alignSelf,
    placeContent,
    placeItems,
    placeSelf,
  } = props;
  return classNames({
    [`order-${order}`]: order,
    [`gap-${gap}`]: gap,
    [`gapX-${gapX}`]: gapX,
    [`gapY-${gapY}`]: gapY,
    [`justify-${justifyContent}`]: justifyContent,
    [`justify-items-${justifyItems}`]: justifyItems,
    [`justify-self-${justifySelf}`]: justifySelf,
    [`content-${alignContent}`]: alignContent,
    [`items-${alignItems}`]: alignItems,
    [`self-${alignSelf}`]: alignSelf,
    [`place-content-${placeContent}`]: placeContent,
    [`place-items-${placeItems}`]: placeItems,
    [`place-self-${placeSelf}`]: placeSelf,
  });
};
// #endregion
