import React from "react";

export default function Pagination({
  totalPages,
  currentPage,
  maxVisiblePages = 10,
  onPageChange,
}) {
  const renderPagination = () => {
    let pages = [];
    const breakLabel = <span className="px-2">...</span>;
    
    if (totalPages <= maxVisiblePages) {
      // If total pages are less than the visible max
      for (let i = 1; i <= totalPages; i++) {
        pages.push(
          <button
            key={i}
            className={`btn ${
              currentPage === i ? "btn-secondary" : "btn-outline-secondary"
            } me-2`}
            onClick={() => onPageChange(i)}
          >
            {i}
          </button>
        );
      }
    } else {
      // If total pages exceed the visible max
      const firstPage = 1;
      const lastPage = totalPages;
      const startPage = Math.max(currentPage - 1, 2);
      const endPage = Math.min(currentPage + 1, totalPages - 1);
      
      
      // Always show the first page
      pages.push(
        <button
          key={firstPage}
          className={`btn ${
            currentPage === firstPage
              ? "btn-secondary"
              : "btn-outline-secondary"
          } me-2`}
          onClick={() => onPageChange(firstPage)}
        >
          {firstPage}
        </button>
      );

      // Add break label before the start pages
      if (startPage > 2) {
        pages.push(<span key="start-break">{breakLabel}</span>);
      }

      // Show pages around the current page
      for (let i = startPage; i <= endPage; i++) {
        pages.push(
          <button
            key={i}
            className={`btn ${
              currentPage === i ? "btn-secondary" : "btn-outline-secondary"
            } me-2`}
            onClick={() => onPageChange(i)}
          >
            {i}
          </button>
        );
      }

      // Add break label after the end pages
      if (endPage < totalPages - 1) {
        pages.push(<span key="end-break">{breakLabel}</span>);
      }

      // Always show the last page
      pages.push(
        <button
          key={lastPage}
          className={`btn ${
            currentPage === lastPage ? "btn-secondary" : "btn-outline-secondary"
          } me-2`}
          onClick={() => onPageChange(lastPage)}
        >
          {lastPage}
        </button>
      );
    }
    return pages;
  };
  return (
    <>
      <div className="d-flex justify-content-center mt-4">
        <button
          className="btn btn-outline-secondary me-2"
          disabled={currentPage === 1}
          onClick={() => onPageChange(currentPage - 1)}
        >
          Previous
        </button>
        {renderPagination()}
        <button
          className="btn btn-outline-secondary ms-2"
          disabled={currentPage === totalPages}
          onClick={() => onPageChange(currentPage + 1)}
        >
          Next
        </button>
      </div>
    </>
  );
}
