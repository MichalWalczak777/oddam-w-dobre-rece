import React from "react";
import { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";

const HomeFundationsDisplay = ({ data, header }) => {
  const [fundationsList, setFundationsList] = useState(data);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setFundationsList(data);
    setCurrentPage(1);
  }, [data]);

  const fundationsPerPage = 3;
  const indexOfLastFundation = currentPage * fundationsPerPage;
  const indexOfFirstFundation = indexOfLastFundation - fundationsPerPage;
  const currentFundations = fundationsList?.slice(
    indexOfFirstFundation,
    indexOfLastFundation
  );

  const pageNumbers = [];
  for (
    let i = 1;
    i <= Math.ceil(fundationsList.length / fundationsPerPage);
    i++
  ) {
    pageNumbers.push(i);
  }

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber.selected + 1);
  };

  return (
    <div className="homeFundationsDisplay">
      <p className="homeFundationsDisplay-header">{header}</p>
      <ul className="homeFundationsDisplay-list">
        {currentFundations?.map((fundation, i) => (
          <li key={fundation.name}>
            <div className="homeFundationsDisplay-fundationDataBox">
              <p className="homeFundationsDisplay-fundationName">
                {fundation.name}
              </p>
              <p className="homeFundationsDisplay-fundationDescription">
                {fundation.description}
              </p>
            </div>
            <p className="homeFundationsDisplay-fundationNeeds">
              {fundation.needs}
            </p>
          </li>
        ))}
      </ul>
      {pageNumbers.length > 1 && (
        <ReactPaginate
          previousLabel={""}
          nextLabel={""}
          breakLabel={"..."}
          breakClassName={"break"}
          pageCount={pageNumbers.length}
          forcePage={currentPage - 1}
          marginPagesDisplayed={2}
          pageRangeDisplayed={3}
          onPageChange={paginate}
          containerClassName={"pagination-container"}
          subContainerClassName={"pagination-page"}
          activeClassName={"pagination-current-page"}
        />
      )}
    </div>
  );
};

export default HomeFundationsDisplay;
