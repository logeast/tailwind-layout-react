import classNames from 'classnames';

// #region [Single Type]
const sizesOrAmounts = [
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

export declare type PaddingType = typeof sizesOrAmounts[number];

export declare type MarginType = typeof sizesOrAmounts[number];

export declare type SpaceType = 'reverse' | typeof sizesOrAmounts[number];
// #endregion

// #region [Components Props]
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
// #endregion

// #region [Components ClassNames]
export const SpacingClassNames = (props: SpacingProps) => {
  const { p, px, py, pt, pr, pb, pl, m, mx, my, mt, mr, mb, ml, spaceX, spaceY } = props;

  return classNames({
    [`p-${p}`]: p,
    [`px-${px}`]: px,
    [`py-${py}`]: py,
    [`pt-${pt}`]: pt,
    [`pr-${pr}`]: pr,
    [`pb-${pb}`]: pb,
    [`pl-${pl}`]: pl,
    [`m-${m}`]: m,
    [`mx-${mx}`]: mx,
    [`my-${my}`]: my,
    [`mt-${mt}`]: mt,
    [`mr-${mr}`]: mr,
    [`mb-${mb}`]: mb,
    [`ml-${ml}`]: ml,
    [`spaceX-${spaceX}`]: spaceX,
    [`spaceY-${spaceY}`]: spaceY,
  });
};
// #endregion
