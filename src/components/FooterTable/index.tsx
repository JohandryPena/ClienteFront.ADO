import React from "react";
import Pagination from "../Pagination";
import "./../../assets/css/pagination.css";

interface IProps {
  page: number;
  total: number;
  rowsPerPage: number;
  handleChangePage: (newPage: number) => void;
  handleChangeRowsPerPage: (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => void;
}

const FooterTable = ({
  page,
  total,
  rowsPerPage,
  handleChangePage,
  handleChangeRowsPerPage,
}: IProps) => {
  const option = [10, 20, 30, 40, 50, 60];

  return (
    <div className="container-card-grid">
      <div className="row">
        <div className="col-6">
          <label>
            <select
              name="rowsPerPages"
              id="rowsPerPages"
              value={rowsPerPage}
              onChange={handleChangeRowsPerPage}
            >
              {option.map((item: number, index: number) => (
                <option key={index} value={item}>
                  {item}
                </option>
              ))}
            </select>
            Items por página
          </label>
        </div>
        <div className="col-6 justify-content-end align-items-center">
          <Pagination
            currentPage={page}
            totalPages={Math.ceil(total / rowsPerPage)}
            handleChangePage={handleChangePage}
          />
        </div>
      </div>
    </div>
  );
};

export default FooterTable;
