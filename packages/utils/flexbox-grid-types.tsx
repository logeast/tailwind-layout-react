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
  'full'
] as const;

export declare type FlexBasisType = typeof sizes;

export declare type FlexDirectionType =
  | 'row'
  | 'row-reverse'
  | 'col'
  | 'col-reverse';

export declare type FlexWrapType = 'wrap' | 'wrap-reverse' | 'nowrap';

export declare type FlexType = '0' | 'auto' | 'initial' | 'none';

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

export declare type JustifyOrAlignOrPlaceContentType =
  | 'start'
  | 'end'
  | 'center'
  | 'between'
  | 'around'
  | 'evenly';

export declare type JustifyOrAlignOrPlaceItemsType =
  | 'start'
  | 'end'
  | 'center'
  | 'stretch';

export declare type JustifyOrAlignOrPlaceSelfType =
  | 'auto'
  | 'start'
  | 'end'
  | 'center'
  | 'stretch';

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

export declare type GridColumnOrRowsAutoType = 'auto';

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

export declare type GridTemplateRowsType =
  | '1'
  | '2'
  | '3'
  | '4'
  | '5'
  | '6'
  | 'none';

export declare type GridRowSpanType =
  | '1'
  | '2'
  | '3'
  | '4'
  | '5'
  | '6'
  | '7'
  | 'full';

export declare type GridRowStartOrEndType =
  | '1'
  | '2'
  | '3'
  | '4'
  | '5'
  | '6'
  | '7'
  | 'auto';

export declare type GridAutoFlowType =
  | 'row'
  | 'col'
  | 'row-dense'
  | 'col-dense';

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
  '96'
] as const;

export declare type GapType = typeof gapSizes;
