import React from 'react'

function Paginator({ totalUsersCount, pageSize, currentPage, onPageChanged }) {
  let pagesCount = Math.ceil(totalUsersCount / pageSize);
  let pages = []

  for (let index = 1; index <= pagesCount; index++) {
    pages.push(index);
  }

  let pagesItems = pages.map(page => {
    return (
      <div key={page} className={page === currentPage ? "pagination__item pagination__item_active" : "pagination__item"}
        onClick={() => onPageChanged(page)}>{page}</div>
    );
  });
  debugger;
  return pagesItems;
};

export default Paginator;