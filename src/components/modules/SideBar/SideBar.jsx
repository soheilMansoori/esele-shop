import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function SideBar({ isOpenSideBar, setIsOpenSideBar }) {
    const [openMenu, setOpenMenu] = useState(false)
    const location = useLocation()

    return (
        <>
            {/* slider bar in sm */}
            <div className='d-block d-md-none'>
                <div className={`main-menu menu-fixed menu-light menu-accordion menu-shadow theme-primary ${isOpenSideBar ? 'collapsed' : 'hide-sidebar'} `}>
                    <div className="navbar-header">
                        <ul className="nav navbar-nav flex-row">
                            <li className="nav-item mr-auto">
                                <Link to='/' className='navbar-brand'>
                                    <h2 className="brand-text mb-0">آرایشی اِسل</h2>
                                </Link>
                            </li>
                            <li className="nav-item nav-toggle">
                                <div className="nav-link modern-nav-toggle">
                                    <div onClick={() => setIsOpenSideBar(false)}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="toggle-icon icon-x d-none d-xl-block font-medium-4 text-primary" data-tour="toggle-icon">
                                            <circle cx="12" cy="12" r="10"></circle>
                                            <circle cx="12" cy="12" r="3"></circle>
                                        </svg>
                                    </div>
                                    <div onClick={() => setIsOpenSideBar(false)}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="toggle-icon icon-x d-block d-xl-none font-medium-4 text-primary">
                                            <line x1="18" y1="6" x2="6" y2="18"></line>
                                            <line x1="6" y1="6" x2="18" y2="18"></line>
                                        </svg>
                                    </div>
                                </div>
                            </li>
                        </ul>
                        <div className="shadow-bottom d-none" />
                    </div>
                    <div className="scrollbar-container main-menu-content overflow-hidden ps ps__rtl">
                        <ul className="navigation navigation-main" style={{ touchAction: "pan-y", userSelect: "none", _webkitUserDrag: " none", _webkitTapHighlightColor: "rgba(0, 0, 0, 0)" }}>
                            <li className={`nav-item ${location.pathname === "/customer/dashboard" && 'active'}`}>
                                <Link to="/customer/dashboard" className='d-flex justify-content-start'>
                                    <div className="menu-text">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                                            <polyline points="9 22 9 12 15 12 15 22"></polyline>
                                        </svg>
                                        <span className="menu-item menu-title">داشبورد</span>
                                    </div>
                                </Link>
                            </li>
                            <li className={`nav-item ${location.pathname === "/customer/interest" && 'active'}`}>
                                <Link to="/customer/interest" className="d-flex justify-content-start">
                                    <div className="menu-text">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                                        </svg>
                                        <span className="menu-item menu-title">علاقه مندی ها</span>
                                    </div>
                                </Link>
                            </li>
                            <li className={`nav-item ${location.pathname === "/customer/orders" && 'active'}`}>
                                <Link to="/customer/orders" className="d-flex justify-content-start">
                                    <div className="menu-text">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path>
                                            <polyline points="13 2 13 9 20 9"></polyline>
                                        </svg>
                                        <span className="menu-item menu-title">سفارشات</span>
                                    </div>
                                </Link>
                            </li>
                            <li className={`nav-item ${location.pathname === "/customer/comments" && 'active'}`}>
                                <Link to="/customer/comments" className="d-flex justify-content-start">
                                    <div className="menu-text">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                                        </svg>
                                        <span className="menu-item menu-title">نظرات</span>
                                    </div>
                                </Link>
                            </li>
                            <li className={`nav-item ${location.pathname === "/customer/address" && 'active'}`}>
                                <Link to="/customer/address" className="d-flex justify-content-start">
                                    <div className="menu-text">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <circle cx="12" cy="12" r="10"></circle>
                                            <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon>
                                        </svg>
                                        <span className="menu-item menu-title">آدرس</span>
                                    </div>
                                </Link>
                            </li>
                            <li className={`nav-item ${location.pathname === "/customer/invoices" && 'active'}`}>
                                <Link to="/customer/invoices" className="d-flex justify-content-start">
                                    <div className="menu-text">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
                                            <rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>
                                        </svg>
                                        <span className="menu-item menu-title">فاکتور ها</span>
                                    </div>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div >

                {/* shadow */}
                < div className="sidenav-overlay" onClick={() => setIsOpenSideBar(false)} />
            </div>

            {/* slider bar in md */}
            <div className='d-none d-md-block'
                onMouseEnter={() => !isOpenSideBar && setOpenMenu(true)}
                onMouseLeave={() => !isOpenSideBar && setOpenMenu(false)}
            >
                <div className={`main-menu menu-fixed menu-light menu-accordion menu-shadow theme-primary ${openMenu ? null : 'collapsed'}`} >
                    <div className="navbar-header">
                        <ul className="nav navbar-nav flex-row">
                            <li className="nav-item mr-auto">
                                <Link to='/' aria-current="page" className="navbar-brand active">
                                    <h2 className="brand-text mb-0">آرایشی اِسل</h2>
                                </Link>
                            </li>
                            <li className="nav-item nav-toggle">
                                <div className="nav-link modern-nav-toggle">
                                    {isOpenSideBar ? (
                                        <div onClick={() => {
                                            setIsOpenSideBar(false)
                                            setOpenMenu(false)
                                        }}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="toggle-icon icon-x d-none d-xl-block font-medium-4 text-primary" data-tour="toggle-icon">
                                                <circle cx="12" cy="12" r="10"></circle>
                                                <circle cx="12" cy="12" r="3"></circle>
                                            </svg>
                                        </div>
                                    ) : (
                                        <div onClick={() => setIsOpenSideBar(true)}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="toggle-icon icon-x d-none d-xl-block font-medium-4 text-primary">
                                                <circle cx="12" cy="12" r="10"></circle>
                                            </svg>
                                        </div>
                                    )}
                                </div>
                            </li>
                        </ul>
                        <div className="shadow-bottom d-none" />
                    </div>

                    <div className="scrollbar-container main-menu-content overflow-hidden ps ps__rtl">
                        <ul className="navigation navigation-main" style={{ touchAction: "pan-y", userSelect: "none", _webkitUserDrag: " none", _webkitTapHighlightColor: "rgba(0, 0, 0, 0)" }}>

                            <li className={`nav-item ${location.pathname === '/customer/dashboard' && "active"}`}>
                                <Link to="/customer/dashboard" className="d-flex justify-content-start">
                                    <div className="menu-text">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                                            <polyline points="9 22 9 12 15 12 15 22"></polyline>
                                        </svg>
                                        <span className="menu-item menu-title">داشبورد</span>
                                    </div>
                                </Link>
                            </li>

                            <li className={`nav-item ${location.pathname === '/customer/interest' && "active"}`}>
                                <Link to="/customer/interest" className="d-flex justify-content-start">
                                    <div className="menu-text">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                                        </svg>
                                        <span className="menu-item menu-title">علاقه مندی ها</span>
                                    </div>
                                </Link>
                            </li>
                            <li className={`nav-item ${location.pathname === '/customer/orders' && "active"}`}>
                                <Link to="/customer/orders" className="d-flex justify-content-start">
                                    <div className="menu-text">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path>
                                            <polyline points="13 2 13 9 20 9"></polyline>
                                        </svg>
                                        <span className="menu-item menu-title">سفارشات</span>
                                    </div>
                                </Link>
                            </li>
                            <li className={`nav-item ${location.pathname === '/customer/comments' && "active"}`}>
                                <Link to="/customer/comments" className="d-flex justify-content-start">
                                    <div className="menu-text">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                                        </svg>
                                        <span className="menu-item menu-title">نظرات</span>
                                    </div>
                                </Link>
                            </li>
                            <li className={`nav-item ${location.pathname === '/customer/address' && "active"}`}>
                                <Link to="/customer/address" className="d-flex justify-content-start">
                                    <div className="menu-text">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <circle cx="12" cy="12" r="10"></circle>
                                            <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon>
                                        </svg>
                                        <span className="menu-item menu-title">آدرس</span>
                                    </div>
                                </Link>
                            </li>
                            <li className={`nav-item ${location.pathname === '/customer/invoices' && "active"}`}>
                                <Link to="/customer/invoices" className="d-flex justify-content-start">
                                    <div className="menu-text">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
                                            <rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>
                                        </svg>
                                        <span className="menu-item menu-title">فاکتور ها</span>
                                    </div>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div >
            </div>
        </>
    )
}