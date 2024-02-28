import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import authContext from '../../../../contexts/authContext/authContext'
import swal from 'sweetalert'

// react-toastify import
import { ToastContainer, toast, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function Navbar() {
    const [searchValue, setSearchValue] = useState('')
    const [isOpenDropdown, setIsOpenDropdown] = useState(false)
    const [basketProductsCount, setBasketProductsCount] = useState(null)
    const [basketProductsPrice, setBasketProductsPrice] = useState(null)
    const auth = useContext(authContext)
    const navigate = useNavigate()


    // notifies
    const logoutNotify = () => toast.success('از حساب کاربری خود خارج شدید', {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Slide,

    })

    useEffect(() => {
        fetch(`http://localhost:4000/users/${auth.userID}`)
            .then(res => res.json())
            .then(user => {
                const { userBasket } = user
                setBasketProductsCount(userBasket.length)
                setBasketProductsPrice(userBasket.reduce((a, b) => a + (b.newPrice * b.inBasket), 0))
            })
            .catch(error => console.log(error.message));
    }, [auth.render])

    // navigate to the search page
    const searchHandler = (event) => {
        event.preventDefault()
        if (searchValue) {
            navigate(`/search/${searchValue}`)
        }
    }

    const logoutHandler = () => {
        swal({
            title: 'آیا از حساب کاربری خود میخواهید خارج شوید',
            icon: 'warning',
            buttons: ['خیر', 'بله']
        }).then(result => {
            if (result) {
                // user logged out
                auth.logout()
                logoutNotify()
            }
        })
    }

    return (
        <>
            <div className="top-head container-costumer py-1">
                <div className="right-nav">
                    <div className="top-head-center d-flex align-items-center justify-content-center ">
                        <Link to="/">
                            <img src="/img/logo/logo.webp" width="200" />
                        </Link>
                    </div>
                    <div className="top-head-left w-100">
                        <form className="d-flex search-web" onSubmit={searchHandler}>
                            <button type='submit' className="search-btn">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"><path d="M11 20C15.9706 20 20 15.9706 20 11C20 6.02944 15.9706 2 11 2C6.02944 2 2 6.02944 2 11C2 15.9706 6.02944 20 11 20Z" stroke="#3C3A36" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M18.9299 20.6898C19.4599 22.2898 20.6699 22.4498 21.5999 21.0498C22.4499 19.7698 21.8899 18.7198 20.3499 18.7198C19.2099 18.7098 18.5699 19.5998 18.9299 20.6898Z" stroke="#3C3A36" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                            </button>
                            <input value={searchValue} onChange={(event) => setSearchValue(event.target.value)} placeholder="جستجو نام محصول" aria-label="Search" type="search" className="search-web-input form-control" />
                        </form>
                    </div>
                </div>
                <div className="top-head-right w-25 ">
                    <div className="user-panel">
                        {auth.isLoggedIn ? (
                            <div className={`dropdown-user dropdown ${isOpenDropdown && 'show'}`} onClick={() => setIsOpenDropdown(prevState => !prevState)}>
                                <li aria-haspopup="true" className="dropdown-user-link" aria-expanded="false">
                                    <div className="bg-login">
                                        <div className="bg-btn-header bg-login-btn">
                                            <div className="user-nav m-auto">
                                                <div className="user-nav-panel d-flex flex-column align-items-center justify-content-center">
                                                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M858.5 763.6a374 374 0 0 0-80.6-119.5 375.63 375.63 0 0 0-119.5-80.6c-.4-.2-.8-.3-1.2-.5C719.5 518 760 444.7 760 362c0-137-111-248-248-248S264 225 264 362c0 82.7 40.5 156 102.8 201.1-.4.2-.8.3-1.2.5-44.8 18.9-85 46-119.5 80.6a375.63 375.63 0 0 0-80.6 119.5A371.7 371.7 0 0 0 136 901.8a8 8 0 0 0 8 8.2h60c4.4 0 7.9-3.5 8-7.8 2-77.2 33-149.5 87.8-204.3 56.7-56.7 132-87.9 212.2-87.9s155.5 31.2 212.2 87.9C779 752.7 810 825 812 902.2c.1 4.4 3.6 7.8 8 7.8h60a8 8 0 0 0 8-8.2c-1-47.8-10.9-94.3-29.5-138.2zM512 534c-45.9 0-89.1-17.9-121.6-50.4S340 407.9 340 362c0-45.9 17.9-89.1 50.4-121.6S466.1 190 512 190s89.1 17.9 121.6 50.4S684 316.1 684 362c0 45.9-17.9 89.1-50.4 121.6S557.9 534 512 534z"></path></svg><span className="lonin-badge"><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z"></path>
                                                    </svg>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                {/* drop down items */}
                                <div tabIndex="-1" role="menu" aria-hidden="true" className="drop-menu dropdown-menu">
                                    <button type="button" tabIndex="0" role="menuitem" className="border-bottom d-flex align-items-center justify-content-center username-item-drop-down dropdown-item">
                                        <span className="align-middle text-center">{auth.userInfos.username}</span>
                                    </button>
                                    <Link to="/customer/dashboard" tabIndex="0" role="menuitem" className="dropdown-item">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-50">
                                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                                            <circle cx="12" cy="7" r="4"></circle>
                                        </svg>
                                        <span className="align-middle username-drop-down">پنل</span>
                                    </Link>
                                    <button onClick={logoutHandler} tabIndex="0" role="menuitem" className="dropdown-item">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-50">
                                            <path d="M18.36 6.64a9 9 0 1 1-12.73 0"></path>
                                            <line x1="12" y1="2" x2="12" y2="12"></line>
                                        </svg>
                                        <span className="align-middle">خروج</span>
                                    </button>
                                </div>

                            </div>
                        ) : (
                            <Link to="/login">
                                <div className="bg-login">
                                    <div className="bg-btn-header bg-login-btn ">
                                        <Link to="/login" className="justify-content-center font-weight-normal">
                                            <div className="d-flex align-items-center justify-content-center user-nav-panel 0">
                                                <div>
                                                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M858.5 763.6a374 374 0 0 0-80.6-119.5 375.63 375.63 0 0 0-119.5-80.6c-.4-.2-.8-.3-1.2-.5C719.5 518 760 444.7 760 362c0-137-111-248-248-248S264 225 264 362c0 82.7 40.5 156 102.8 201.1-.4.2-.8.3-1.2.5-44.8 18.9-85 46-119.5 80.6a375.63 375.63 0 0 0-80.6 119.5A371.7 371.7 0 0 0 136 901.8a8 8 0 0 0 8 8.2h60c4.4 0 7.9-3.5 8-7.8 2-77.2 33-149.5 87.8-204.3 56.7-56.7 132-87.9 212.2-87.9s155.5 31.2 212.2 87.9C779 752.7 810 825 812 902.2c.1 4.4 3.6 7.8 8 7.8h60a8 8 0 0 0 8-8.2c-1-47.8-10.9-94.3-29.5-138.2zM512 534c-45.9 0-89.1-17.9-121.6-50.4S340 407.9 340 362c0-45.9 17.9-89.1 50.4-121.6S466.1 190 512 190s89.1 17.9 121.6 50.4S684 316.1 684 362c0 45.9-17.9 89.1-50.4 121.6S557.9 534 512 534z"></path></svg>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </Link>
                        )}
                    </div>
                    <div className="bag-shop">
                        <div className="bg-login">
                            <div className="bg-btn-header">
                                <Link className="cart-button d-flex align-items-center " to="/user-basket">
                                    <div className="cart-icon-head">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" fill="none"><path d="M9.91669 16.625C9.91669 18.865 11.76 20.7083 14 20.7083C16.24 20.7083 18.0834 18.865 18.0834 16.625" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path><path d="M10.2783 2.33334L6.05499 6.56834" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path><path d="M17.7217 2.33334L21.945 6.56834" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path><path d="M2.33331 9.15835C2.33331 7.00001 3.48831 6.82501 4.92331 6.82501H23.0766C24.5116 6.82501 25.6666 7.00001 25.6666 9.15835C25.6666 11.6667 24.5116 11.4917 23.0766 11.4917H4.92331C3.48831 11.4917 2.33331 11.6667 2.33331 9.15835Z" stroke="white" strokeWidth="1.5"></path><path d="M4.08331 11.6667L5.72831 21.7467C6.10165 24.01 6.99998 25.6667 10.3366 25.6667H17.3716C21 25.6667 21.5366 24.08 21.9566 21.8867L23.9166 11.6667" stroke="white" strokeWidth="1.5" strokeLinecap="round"></path></svg>
                                    </div>
                                    <div>
                                        <div className="d-flex flex-column align-items-center justify-content-center">
                                            <div className="span-cart">
                                                <div className="color-span">{basketProductsPrice ? basketProductsPrice : 0} تومان</div>
                                                <div className="count-product">{basketProductsCount ? basketProductsCount : 0} محصول</div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </>
    )
}

