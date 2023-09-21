import React from 'react'
import { Pagination } from 'react-bootstrap'

function TablePagination(props) {
  
  const totalPages = Math.ceil(props.list.length / props.itemsPerPage);

  const handlePageChange = (page) => {
    props.setCurrentPage(page);
  };

  const handlePrevPage = () => {
    if (props.currentPage > 1) {
      props.setCurrentPage(props.currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (props.currentPage < totalPages) {
      props.setCurrentPage(props.currentPage + 1);
    }
  };


  return (
    <div className="pagination">
        <Pagination>
          <Pagination.Prev className="pagination_item" onClick={handlePrevPage} disabled={props.currentPage === 1}/>
          {Array.from({length: totalPages}, (_, index) => (
            <Pagination.Item 
              className="pagination_item"
              key={index}
              active={index + 1 === props.currentPage}
              onClick={() => handlePageChange(index + 1)}
            >
              {index + 1}
            </Pagination.Item>
          ))}
          <Pagination.Next
            className="pagination_item"
            onClick={handleNextPage}
            disabled={props.currentPage === totalPages}
          />
        </Pagination>
      </div>
  )
}

export default TablePagination