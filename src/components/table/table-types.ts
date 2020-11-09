import * as React from 'react';

export type Cell = React.ComponentType<any>;
export type Order = 'ASC' | 'DESC';
export type Align = 'left' | 'center' | 'right' | 'justify';

export interface Sort {
  field: string;
  order: Order;
}

export interface ColumnProps {
  name: string;
  Cell?: Cell;
  HeaderCell?: (props: { column: ColumnProps }) => JSX.Element | null;
  label?: string;
  width?: string;
  colSpan?: number;
  align?: Align;
}

export interface ExpandSchema {
  key: string;
  columns: React.ReactNode | React.ReactNode[];
  children: ExpandSchema;
}
