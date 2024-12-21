import { useEffect } from 'react'
import Breadcrumb from '../../../components/modules/Breadcrumb/Breadcrumb'

export default function Invoices() {
    useEffect(() => document.title = "user-panel page");

    return (
        <div className="content-wrapper">
            <div className="content-header row">
                <div className="content-header-left col-md-9 col-12 mb-2">
                    <Breadcrumb title='فاکتور ها' item='داشبورد' slug='/customer/dashboard' />
                </div>
                <div className="content-header-right text-md-right col-md-3 col-12 d-md-block d-none">
                </div>
            </div>
            <div className="row">
                <div className="col-sm-12">
                    <div className="data-list list-view">
                        <header className="sc-idiyUo bbDPMO">
                            <div className="data-list-header d-flex justify-content-between flex-wrap">
                                <div className="actions-left d-flex flex-wrap">
                                </div>
                                <div className="actions-right d-flex flex-wrap mt-sm-0 mt-2">
                                    <div className="my-auto mr-2 ml-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="cursor-pointer">
                                            <polyline points="23 4 23 10 17 10"></polyline>
                                            <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"></path>
                                        </svg>
                                    </div>
                                    <div className="data-list-rows-dropdown mr-1 d-md-block d-none dropdown">
                                        <button type="button" aria-haspopup="true" aria-expanded="false" className="sort-dropdown btn">
                                            <span className="align-middle mx-50">نمایش 10 از 0</span>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <polyline points="6 9 12 15 18 9"></polyline>
                                            </svg>
                                        </button>
                                        <div tabIndex="-1" role="menu" aria-hidden="true" className="dropdown-menu">
                                            <a tabIndex="0" role="menuitem" className="dropdown-item">10</a>
                                            <a tabIndex="0" role="menuitem" className="dropdown-item">50</a>
                                            <a tabIndex="0" role="menuitem" className="dropdown-item">100</a>
                                            <a tabIndex="0" role="menuitem" className="dropdown-item">همه</a>
                                        </div>
                                    </div>
                                    <div className="filter-section">
                                        <input type="text" className="form-control" />
                                    </div>
                                </div>
                            </div>
                        </header>
                        <div className='w-100 my-2 alert alert-danger text-center'>اطلاعاتی برای نمایش وجود ندارد</div>
                    </div>
                </div>
            </div>
        </div>

    )
}
