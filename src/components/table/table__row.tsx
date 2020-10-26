import * as React from 'react';
import { BEM, tag } from '@redneckz/react-bem-helper';

import { get } from './get';
import { DefaultCell } from './default-cell';
// eslint-disable-next-line import/no-cycle
import { ExpandedRowContent } from './expanded-row-content';

import styles from './table.module.scss';

interface Props {
  className?: string;
  item: { [key: string]: unknown };
  columns: any[];
  index: number;
  color?: 'blue' | 'gray' | 'yellow';
  expandedColumns?: any[];
  expandedContentKey?: string;
  expandedRows?: string[];
  nested?: boolean;
  nestedLast?: boolean;
}

export const TableRow = BEM(styles).row(
  ({
    className,
    item,
    columns,
    index,
    expandedContentKey = '',
    color,
    expandedColumns = [],
    expandedRows,
  }: Props) => (
    <>
      <tr className={className}>
        {columns.map((column) => {
          const {
            Cell: ColumnCell, name, colSpan, width, align, sortableAlign,
          } = column;
          const Cell = ColumnCell || DefaultCell;
          return (
            <CellContent key={name} colSpan={colSpan} style={{ width }} align={align} sortableAlign={sortableAlign}>
              <Cell value={get(item, name)} item={item} rowIndex={index} />
            </CellContent>
          );
        })}
      </tr>
      {color && (
        <ExpandedRowContent
          data={item[expandedContentKey]}
          expandedColumns={expandedColumns}
          expandedRows={expandedRows}
        />
      )}
    </>
  ),
);

const CellContent = BEM(styles).cellContent(tag('td')({
  align: 'left',
  sortableAlign: false,
} as { colSpan?: number; align: string; sortableAlign?: boolean}));
