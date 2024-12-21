import React, { memo, useCallback, useEffect, useState } from 'react'
import { useSearchParams, useLocation } from 'react-router-dom';

const Pagination = memo(({ pagesCount, currentPage, prev, next }) => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [pages, setPages] = useState([]);
    const location = useLocation();

    useEffect(() => {
        pagesCount && setPages(Array.from(Array(Number(pagesCount)).keys()))
        if (pages.length > 6) {
            let breakNumber = pages.length - 6
            let copyPages = [...pages]
            copyPages.splice(3, breakNumber, '...')
            setPages(copyPages)
        }

    }, [pagesCount, pages])


    const nextPage = useCallback(() => {
        // console.log('click next');
        next && setSearchParams({ page: next })
    }, [next, setSearchParams])

    const previousPage = useCallback(() => {
        // console.log('click prev');
        prev && setSearchParams({ page: prev })
    }, [prev, setSearchParams]);

    const setPage = useCallback((pageNumber) => {
        pageNumber && setSearchParams({ page: pageNumber })
    }, [setSearchParams])

    const showMore = useCallback(() => {
        return setPages(Array.from(Array(Number(pagesCount)).keys()))
    }, [pagesCount])

    return (
        <div className="data-list-header d-flex justify-content-center mt-5 flex-wrap mb-2">
            <div className="actions-left d-flex flex-wrap">
                <ul className="vx-pagination separated-pagination pagination-end pagination-sm">
                    {/* previous btn */}
                    <li className={`previous ${prev && 'disabled'}`} onClick={previousPage}>
                        <a tabIndex="0" role="button" aria-disabled="true" aria-label="Previous page" rel="prev">
                            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="15 18 9 12 15 6"></polyline>
                            </svg>
                        </a>
                    </li>

                    {pages?.length && pages?.map((page, index) => {
                        if (page == '...') {
                            return <li key={index}>
                                <a role="button">
                                    ...
                                </a>
                            </li>
                        }
                        return (
                            <li key={index} className={`${currentPage == page + 1 && 'active'}`} onClick={() => setPage(page + 1)}>
                                <a role="button">
                                    {page + 1}
                                </a>
                            </li>
                        )
                    })}

                    {/* next btn */}
                    <li className={`next ${next && 'disabled'}`} onClick={nextPage}>
                        <a tabIndex="0" role="button" aria-disabled="false" aria-label="Next page" rel="next">
                            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="9 18 15 12 9 6">
                                </polyline>
                            </svg>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
})


export default Pagination;