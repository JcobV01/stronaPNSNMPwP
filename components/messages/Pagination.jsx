import React from 'react'

const Pagination = ({handlePrevPage, handlePageChange, handleNextPage, currentPage, totalPages}) => {
    return (
        <div className='flex items-center justify-end mt-[20px] gap-2'>
            <button onClick={() => handlePageChange(1)} disabled={currentPage === 1} className='text-[24.5px] font-light'>&laquo;</button>
            <button onClick={handlePrevPage} disabled={currentPage === 1} className='text-[20px] font-light'>&lt;</button>

            {/* Zawsze pokazuj stronę 1, ale nie duplikuj jej */}
            {currentPage > 1 && (
                <button onClick={() => handlePageChange(1)} className={`font-light text-[20px] ${currentPage === 1 ? 'font-medium text-[25px]' : ''}`}>1</button>
            )}

            {/* Pokazuje "..." jeśli obecna strona jest większa niż 3 i ostatnia strona jest większa niż 4 */}
            {currentPage > 3 && totalPages > 4 && <span className='font-light text-[20px]'>&hellip;</span>}

            {/* Pokazuje stronę 2, jeśli jest potrzebna */}
            {currentPage > 2 && (
                <button onClick={() => handlePageChange(currentPage - 1)} className='font-light text-[20px]'>{currentPage - 1}</button>
            )}

            {/* Pokazuje aktualną stronę */}
            <button className='font-medium text-[25px]'>{currentPage}</button>

            {/* Pokazuje stronę 4, jeśli jest potrzebna */}
            {currentPage < totalPages - 1 && (
                <button onClick={() => handlePageChange(currentPage + 1)} className='font-light text-[20px]'>{currentPage + 1}</button>
            )}

            {/* Pokazuje "..." jeśli obecna strona jest mniejsza niż ostatnia strona minus 1 */}
            {currentPage < totalPages - 2 && totalPages > 4 && <span className='font-light text-[20px]'>&hellip;</span>}

            {/* Zawsze pokazuj ostatnią stronę, ale nie duplikuj jej */}
            {currentPage < totalPages && (
                <button onClick={() => handlePageChange(totalPages)} className={`font-light text-[20px] ${currentPage === totalPages ? 'font-medium text-[25px]' : ''}`}>{totalPages}</button>
            )}

            <button onClick={handleNextPage} disabled={currentPage === totalPages} className='text-[20px] font-light'>&gt;</button>
            <button onClick={() => handlePageChange(totalPages)} disabled={currentPage === totalPages} className='text-[24.5px] font-light'>&raquo;</button>
        </div>
    )
}

export default Pagination