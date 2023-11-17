import React from "react";
import { TableProps } from "../../interfaces";

const Table: React.FC<TableProps> = ({ headers, children }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          {headers.map((header, index) => (
            <th key={index}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>{children}</tbody>
    </table>
  );
};

export { Table };
