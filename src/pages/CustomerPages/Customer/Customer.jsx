import { useContext, useEffect, useState } from 'react'
// import components
import SideBar from '../../../components/modules/SideBar/SideBar'
import Footer from '../../../components/templates/CustomerPages/CustomerPage/Footer/Footer'

// import Link and redirect
import { Link, Outlet, useNavigate } from 'react-router-dom'

// import sweetalert for modals 
import swal from 'sweetalert'

// import auth context
import authContext from '../../../contexts/authContext/authContext'

export default function Customer() {
    const [isOpenSideBar, setIsOpenSideBar] = useState(true)
    const auth = useContext(authContext)
    const navigate = useNavigate()

    useEffect(() => { document.title = "user-panel page" }, []);

    // logout Handler 
    const logoutHandler = () => {
        // modal for confirm logout user
        swal({
            title: 'آیا از حساب کاربری خود میخواهید خارج شوید',
            icon: 'warning',
            buttons: ['خیر', 'بله']
        }).then(result => {
            if (result) {
                // user logged out
                auth.logout()
                // navigate user to Home page
                navigate('/', { replace: true })
            }
        })
    }


    return (
        <div className={`wrapper vertical-layout theme-primary navbar-floating ${!isOpenSideBar && 'menu-collapsed'}`}>
            <div className="menu-swipe-area d-xl-none d-block vh-100" style={{ touchAction: "pan-y", userSelect: "none", _webkitUserDrag: " none", _webkitTapHighlightColor: "rgba(0, 0, 0, 0)" }}></div>
            <SideBar
                isOpenSideBar={isOpenSideBar}
                setIsOpenSideBar={setIsOpenSideBar}
            />

            <div className="app-content content">
                <div className="content-overlay" />
                <div className="header-navbar-shadow" />

                {/* nav bar */}
                <nav className="header-navbar navbar-expand-lg navbar navbar-with-menu navbar-shadow navbar-light floating-nav navbar">
                    <div className="navbar-wrapper">
                        <div className="navbar-container content">
                            <div className="navbar-collapse d-flex justify-content-between align-items-center" id="navbar-mobile">
                                <div className="bookmark-wrapper">
                                    <div className="mr-auto float-left bookmark-wrapper d-flex align-items-center">
                                        <ul className="navbar-nav d-xl-none">
                                            <li className="mobile-menu mr-auto nav-item">
                                                <a className="nav-menu-main menu-toggle hidden-xs is-active nav-link">
                                                    <div onClick={() => setIsOpenSideBar(true)}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ficon">
                                                            <line x1="3" y1="12" x2="21" y2="12"></line>
                                                            <line x1="3" y1="6" x2="21" y2="6"></line>
                                                            <line x1="3" y1="18" x2="21" y2="18"></line>
                                                        </svg>
                                                    </div>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <nav className="d-flex justify-content-between w-100">
                                    <ul className="nav navbar-nav navbar-nav-user my-auto" />
                                    <ul className="nav navbar-nav navbar-nav-user">
                                        <li className="my-auto">
                                            <Link to='/' className="mr-2 ml-2">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                                                    <polyline points="9 22 9 12 15 12 15 22"></polyline>
                                                </svg>
                                            </Link>
                                        </li>
                                        <div className="user-nav d-sm-flex d-none">
                                            <span className="user-name text-bold-600">{auth.userInfos.username}</span>
                                        </div>
                                        <span data-tour="logout-panel" onClick={logoutHandler}>
                                            <a>
                                                <span className="align-middle">
                                                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className="mr-1" height="22" width="22" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M16 13v-2H7V8l-5 4 5 4v-3z"></path><path d="M20 3h-9c-1.103 0-2 .897-2 2v4h2V5h9v14h-9v-4H9v4c0 1.103.897 2 2 2h9c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2z"></path>
                                                    </svg>
                                                </span>
                                            </a>
                                        </span>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </nav>


                {/* content */}
                <Outlet />
            </div>

            <Footer />

        </div>
    )
}


