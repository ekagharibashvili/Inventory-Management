import React, { MouseEventHandler } from "react";
import { Button } from "react-bootstrap";

interface Props {
  currentPage: number;
  totalPages: number;
  handlePagination: MouseEventHandler<HTMLButtonElement>;
}

const Pagination: React.FC<Props> = ({
  currentPage,
  totalPages,
  handlePagination,
}) => {
  return (
    <div className="d-flex justify-content-center align-items-center my-3">
      <Button
        variant="secondary"
        className="mx-2"
        disabled={currentPage === 1}
        onClick={handlePagination}
        value="-1"
      >
        Previous Page
      </Button>
      <span className="mx-2">{`${currentPage} / ${Math.round(totalPages)}`}</span>
      <Button
        variant="secondary"
        className="mx-2"
        disabled={currentPage === totalPages}
        onClick={handlePagination}
        value="1"
      >
        Next Page
      </Button>
    </div>
  );
};

export default Pagination;
