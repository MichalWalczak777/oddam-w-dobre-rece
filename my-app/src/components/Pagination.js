import ReactPaginate from 'react-paginate';

const Pagination = ({positionsPerPage, positionsTotal, paginate}) => {

    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(positionsTotal/positionsPerPage); i++){
        pageNumbers.push(i);
    }

    if (pageNumbers.length === 0 || pageNumbers.length ===1){
        return null;
    }
    else{
        return (
            <ReactPaginate
            previousLabel={"previous"}
            nextLabel={"next"}
            breakLabel={"..."}
            breakClassName={"break"}
            pageCount={pageNumbers.length}
            marginPagesDisplayed={2}
            pageRangeDisplayed={3}
            onPageChange={paginate}
            containerClassName={"pagination-container"}
            subContainerClassName={"pagination-page"}
            activeClassName={"pagination-current-page"}
            />
            )
    }
    

}

export default Pagination;