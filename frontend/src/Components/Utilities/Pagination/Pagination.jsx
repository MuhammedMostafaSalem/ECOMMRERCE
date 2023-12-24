import React from 'react'
import ReactPaginate from 'react-paginate';
import './Pagination.css'

const Pagination = ({pageCount, onPress}) => {
    const handlePageClick = (data) => {
        onPress(data.selected + 1)
        console.log(data.selected + 1)
    }
    return (
        <div>
            <ReactPaginate
                breakLabel="..."
                nextLabel="Next"
                onPageChange={handlePageClick}
                marginPagesDisplayed={2}
                pageRangeDisplayed={2}
                pageCount={pageCount}
                previousLabel="Prev"
                pageClassName="page-item"
                pageLinkClassName="page-link linkPage"
                previousClassName="page-item"
                nextClassName="page-item"
                previousLinkClassName="page-link linkPage"
                nextLinkClassName="page-link linkPage"
                breakClassName="page-item"
                breakLinkClassName="page-link"
                activeClassName="active"
                containerClassName="pagination justify-content-center p-3"
            />
        </div>
    )
}

export default Pagination