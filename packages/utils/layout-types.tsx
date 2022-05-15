export declare type AspectType = 'auto' | 'square' | 'video';

export declare type BoxSizingType = 'border' | 'content';

export declare type ClearType = 'left' | 'right' | 'both' | 'none';

export declare type ColumnsType =
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
  | 'auto'
  | '3xs'
  | '2xs'
  | 'xs'
  | 'sm'
  | 'md'
  | 'lg'
  | 'xl'
  | '2xl'
  | '3xl'
  | '4xl'
  | '5xl'
  | '6xl'
  | '7xl';

export declare type DisplayType =
  | 'block'
  | 'inline-block'
  | 'inline'
  | 'flex'
  | 'inline-flex'
  | 'table'
  | 'inline-table'
  | 'table-caption'
  | 'table-cell'
  | 'table-column'
  | 'table-column-group'
  | 'table-footer-group'
  | 'table-header-group'
  | 'table-row-group'
  | 'table-row'
  | 'flow-root'
  | 'grid'
  | 'inline-grid'
  | 'contents'
  | 'list-item'
  | 'hidden';

export declare type FloatType = 'left' | 'right' | 'none';

const comomSpaces = [
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
export declare type PaddingType = typeof comomSpaces;

export declare type MarginType = typeof comomSpaces;

export declare type SpaceType = 'reverse' | typeof comomSpaces;

export declare type OverflowType =
  | 'auto'
  | 'hidden'
  | 'clip'
  | 'visible'
  | 'scroll'
  | 'x-auto'
  | 'y-auto'
  | 'x-hidden'
  | 'y-hidden'
  | 'x-clip'
  | 'y-clip'
  | 'x-visible'
  | 'y-visible'
  | 'x-scroll'
  | 'y-scroll';

export declare type PositionType =
  | 'static'
  | 'fixed'
  | 'absolute'
  | 'relative'
  | 'sticky';

export declare type VisibleType = 'visible' | 'invisible';

export declare type ZIndex = '0' | '10' | '20' | '30' | '40' | '50' | 'auto';
