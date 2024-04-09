"use client"

import { useEffect, useState } from "react";

const Pagination = ({ setPage, page, lastPage }) => {

    const [maxPagination, setMaxPagination] = useState(5);

    const handleButtonPrev = () => {
        if(page > 1) {
            setPage(p => p - 1);
            scrollTo({
                top: 0,
                behavior: 'smooth'
            })
        }
    }

    const handleButtonNext = () => {
        if(page < lastPage) {
            setPage(p => p + 1);
            scrollTo({
                top: 0,
                behavior: 'smooth'
            })
        }
    }

    const currentPage = (page, maxPagination, nth) => {
        const n = Math.ceil(page / maxPagination);
        return (maxPagination * (n - 1)) + nth;
    }

    const handleCurrentClick = (event) => {
        const page = parseInt(event.target.textContent);
        setPage(page);
        scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    return (
        <ul className="flex flex-wrap mt-5 mb-2">
            {
                page > 1 ?
                <li><button onClick={handleButtonPrev} className="border-t-2 border-l-2 border-b-2 border-t-neutral-400 border-l-neutral-400 border-b-neutral-400">&lt;</button></li> :
                null
            }
            

            <li><button onClick={handleCurrentClick} className={`${page === currentPage(page, maxPagination, 1) ? 'active' : ''} border-t-2 border-l-2 border-b-2 border-t-neutral-400 border-l-neutral-400 border-b-neutral-400`}>{currentPage(page, maxPagination, 1)}</button></li>

            <li><button onClick={handleCurrentClick} className={`${page === currentPage(page, maxPagination, 2) ? 'active' : ''} border-t-2 border-l-2 border-b-2 border-t-neutral-400 border-l-neutral-400 border-b-neutral-400`}>{currentPage(page, maxPagination, 2)}</button></li>

            <li><button onClick={handleCurrentClick} className={`${page === currentPage(page, maxPagination, 3) ? 'active' : ''} border-t-2 border-l-2 border-b-2 border-t-neutral-400 border-l-neutral-400 border-b-neutral-400`}>{currentPage(page, maxPagination, 3)}</button></li>

            <li><button onClick={handleCurrentClick} className={`${page === currentPage(page, maxPagination, 4) ? 'active' : ''} border-t-2 border-l-2 border-b-2 border-t-neutral-400 border-l-neutral-400 border-b-neutral-400`}>{currentPage(page, maxPagination, 4)}</button></li>

            <li><button onClick={handleCurrentClick} className={`${page === currentPage(page, maxPagination, 5) ? 'active' : ''} border-t-2 border-l-2 border-b-2 border-t-neutral-400 border-l-neutral-400 border-b-neutral-400`}>{currentPage(page, maxPagination, 5)}</button></li>

            {
                page < lastPage ? 
                <li><button onClick={handleButtonNext} className="border-2 border-neutral-400">&gt;</button></li> :
                null
            }

        </ul>
    )
}

export default Pagination;