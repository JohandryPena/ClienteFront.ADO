type IProps = {
  currentPage: number;
  totalPages: number;
  handleChangePage: (page: number) => void;
};

const Pagination = ({ currentPage, totalPages, handleChangePage }: IProps) => {
  const getPageRange = () => {
    const range = [];
    let startPage;
    let endPage;

    if (totalPages <= 5) {
      startPage = 0;
      endPage = totalPages - 1;
    } else if (currentPage <= 3) {
      startPage = 0;
      endPage = 3;
    } else if (currentPage >= totalPages - 3) {
      startPage = totalPages - 4;
      endPage = totalPages - 1;
    } else {
      startPage = currentPage - 1;
      endPage = currentPage + 1;
    }

    for (let i = startPage; i <= endPage; i++) {
      range.push(i);
    }

    return range;
  };

  const renderPagination = () => {
    const range = getPageRange();
    const paginationItems = [];

    if (range[0] !== 0) {
      paginationItems.push(
        <div className="col-auto p-0" key="button-1">
          <button
            className={`btn ${currentPage === 0 && "active"}`}
            onClick={() => handleChangePage(0)}
          >
            1
          </button>
        </div>
      );
      if (range.length > 1)
        paginationItems.push(
          <div className="col-auto p-0" key="ellipsis-1">
            <span className="ellipsis"> . . . </span>
          </div>
        );
    }

    range.forEach((page) => {
      const isActive = page === currentPage;
      paginationItems.push(
        <div className="col-auto p-0" key={`page-${page}`}>
          <button
            key={page}
            className={`btn ${isActive && "active"}`}
            onClick={() => handleChangePage(page)}
          >
            {page + 1}
          </button>
        </div>
      );
    });

    if (range[range.length - 1] + 1 !== totalPages && totalPages > 5) {
      paginationItems.push(
        <div className="col-auto p-0" key="ellipsis-2">
          <span className="ellipsis"> . . . </span>
        </div>
      );
      paginationItems.push(
        <div className="col-auto p-0" key="button-2">
          <button
            className={`btn ${currentPage === totalPages && "active"}`}
            onClick={() => handleChangePage(totalPages - 1)}
          >
            {totalPages}
          </button>
        </div>
      );
    }

    return paginationItems;
  };

  return (
    <div className="row container-pagination justify-content-center justify-content-md-end">
      <div className="col-auto p-0">
        <button
          className="btn"
          onClick={() => handleChangePage(currentPage - 1)}
          disabled={currentPage === 0}
        >
          <span>
            <svg
              width="8"
              height="12"
              viewBox="0 0 8 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.41 10.59L2.83 6L7.41 1.41L6 0L0 6L6 12L7.41 10.59Z"
                fill="black"
              />
            </svg>
          </span>
        </button>
      </div>
      {renderPagination()}
      <div className="col-auto p-0">
        <button
          className="btn"
          onClick={() => handleChangePage(currentPage + 1)}
          disabled={currentPage + 1 === totalPages}
        >
          <span className="icono-arrow-left"></span>
        </button>
      </div>
    </div>
  );
};

export default Pagination;
