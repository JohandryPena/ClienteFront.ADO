import { ReactNode } from "react";

export interface TableRowProps {
  data: ReactNode[];
}

export interface TableProps {
  headers: string[];
  children: React.ReactElement<TableRowProps>[];
}
