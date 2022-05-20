import classNames from 'classnames';

// #region [Single Type]
export declare type BorderCollapseType = 'collapse' | 'separate';

export declare type TableLayoutType = 'auto' | 'fixed';
// #endregion

// #region [Components Props]
export interface TableProps {
  borderCollapse?: BorderCollapseType;
  tableLayout?: TableLayoutType;
}
// #endregion

// #region [Components ClassNames]
export const TableClassNames = (props: TableProps) => {
  const { borderCollapse, tableLayout } = props;
  return classNames({
    [`border-${borderCollapse}`]: borderCollapse,
    [`table-${tableLayout}`]: tableLayout,
  });
};
// #endregion
