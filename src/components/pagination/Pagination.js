import React from 'react';
import ReactPaginate from 'react-paginate';
import "../../styles/Pagination.css"

const Pagination = ({ itemsPerPage, totalItems, onPageChange }) => {
    const pageCount = Math.ceil(totalItems / itemsPerPage);
  
    const handlePageClick = (event) => {
      const selectedPage = event.selected;
        onPageChange(selectedPage);
    };
  return (
    <div className='pagination-container'>
        <ReactPaginate
        previousLabel="<"
        nextLabel=">"
        breakLabel="..."
        breakClassName="break-me"
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageClick}
        containerClassName="pagination"
        subContainerClassName="pages pagination"
        activeClassName="active"
      />
    </div>
  )
}

export default Pagination;