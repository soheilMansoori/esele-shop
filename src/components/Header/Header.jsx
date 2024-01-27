import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'


export default function Header() {
    return (
        <>
            <div className="d-flex web-view">
                <div className="header w-100">
                    <div className="top-head container-costumer py-1">
                        <div className="right-nav">
                            <div className="top-head-center d-flex align-items-center justify-content-center ">
                                <Link href="/">
                                    <img src="./img/logo1.webp" width="200" />
                                </Link>
                            </div>
                            <div className="top-head-left w-100">
                                <form className="d-flex search-web">
                                    <button className="search-btn" type="button">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                                            <path d="M11 20C15.9706 20 20 15.9706 20 11C20 6.02944 15.9706 2 11 2C6.02944 2 2 6.02944 2 11C2 15.9706 6.02944 20 11 20Z" stroke="#3C3A36" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M18.9299 20.6898C19.4599 22.2898 20.6699 22.4498 21.5999 21.0498C22.4499 19.7698 21.8899 18.7198 20.3499 18.7198C19.2099 18.7098 18.5699 19.5998 18.9299 20.6898Z" stroke="#3C3A36" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                        </svg>
                                    </button>
                                    <input placeholder="جستجو نام محصول" aria-label="Search" type="search" className="search-web-input form-control" />
                                </form>
                            </div>
                        </div>
                        <div className="top-head-right w-25">
                            <div className="user-panel">
                                <Link href="/authorize">
                                    <div className="bg-login">
                                        <div className="bg-btn-header bg-login-btn">
                                            <Link className="justify-content-center font-weight-normal" href="/authorize">
                                                <div className="d-flex align-items-center justify-content-center user-nav-panel">
                                                    <div>
                                                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M858.5 763.6a374 374 0 0 0-80.6-119.5 375.63 375.63 0 0 0-119.5-80.6c-.4-.2-.8-.3-1.2-.5C719.5 518 760 444.7 760 362c0-137-111-248-248-248S264 225 264 362c0 82.7 40.5 156 102.8 201.1-.4.2-.8.3-1.2.5-44.8 18.9-85 46-119.5 80.6a375.63 375.63 0 0 0-80.6 119.5A371.7 371.7 0 0 0 136 901.8a8 8 0 0 0 8 8.2h60c4.4 0 7.9-3.5 8-7.8 2-77.2 33-149.5 87.8-204.3 56.7-56.7 132-87.9 212.2-87.9s155.5 31.2 212.2 87.9C779 752.7 810 825 812 902.2c.1 4.4 3.6 7.8 8 7.8h60a8 8 0 0 0 8-8.2c-1-47.8-10.9-94.3-29.5-138.2zM512 534c-45.9 0-89.1-17.9-121.6-50.4S340 407.9 340 362c0-45.9 17.9-89.1 50.4-121.6S466.1 190 512 190s89.1 17.9 121.6 50.4S684 316.1 684 362c0 45.9-17.9 89.1-50.4 121.6S557.9 534 512 534z">
                                                            </path>
                                                        </svg>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <div className="bag-shop">
                                <div className="bg-login">
                                    <div className="bg-btn-header">
                                        <Link className="cart-button d-flex align-items-center " href="/cart">
                                            <div className="cart-icon-head">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" fill="none">
                                                    <path d="M9.91669 16.625C9.91669 18.865 11.76 20.7083 14 20.7083C16.24 20.7083 18.0834 18.865 18.0834 16.625" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M10.2783 2.33334L6.05499 6.56834" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M17.7217 2.33334L21.945 6.56834" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
                                                    <path d="M2.33331 9.15835C2.33331 7.00001 3.48831 6.82501 4.92331 6.82501H23.0766C24.5116 6.82501 25.6666 7.00001 25.6666 9.15835C25.6666 11.6667 24.5116 11.4917 23.0766 11.4917H4.92331C3.48831 11.4917 2.33331 11.6667 2.33331 9.15835Z" stroke="white" stroke-width="1.5"></path><path d="M4.08331 11.6667L5.72831 21.7467C6.10165 24.01 6.99998 25.6667 10.3366 25.6667H17.3716C21 25.6667 21.5366 24.08 21.9566 21.8867L23.9166 11.6667" stroke="white" stroke-width="1.5" stroke-linecap="round"></path>
                                                </svg></div>
                                            <div>
                                                <div className="d-flex flex-column align-items-center justify-content-center">
                                                    <div className="span-cart">
                                                        <div className="color-span">0 تومان</div>
                                                        <div className="count-product">0 محصول</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex dif-menu-bar">
                        <div className="w-100 container-costumer d-flex align-items-center justify-content-between">
                            <div className="menu-temp">
                                <div className="d-flex justify-content-between">
                                    <div className="mega-menu">
                                        <ul className="justify-content-center my-1 nav nav-pills">
                                            <li className="mr-2 product-btn nav-item">
                                                <Link className="child" href="/search">محصولات<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" className="ml-2" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M904 160H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0 624H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0-312H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z"></path></svg>
                                                </Link>
                                            </li>
                                            <li className="mr-2 nav-item">
                                                <Link aria-current="page" className="active-item active" href="/">صفحه اصلی</Link>
                                            </li>
                                            <li className="mr-2 nav-item">
                                                <Link className="" href="/gallery">گالری</Link>
                                            </li>
                                            <li className="mr-2 nav-item">
                                                <Link className="" href="/contact-us">تماس با ما</Link>
                                            </li>
                                            <li className="mr-2 nav-item">
                                                <Link className="" href="/about-us">درباره ما</Link>
                                            </li>
                                            <li className="mr-2 nav-item">
                                                <Link className="" href="/articles">مقالات</Link>
                                            </li><li className="mr-2 nav-item">
                                                <Link className="" href="/rules">قوانین و مقررات</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="call-box-web d-flex justify-content-center align-items-center">
                                <a href="https://t.me/Eseleshop">
                                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="26" width="26" xmlns="http://www.w3.org/2000/svg"><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.287 5.906c-.778.324-2.334.994-4.666 2.01-.378.15-.577.298-.595.442-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294.26.006.549-.1.868-.32 2.179-1.471 3.304-2.214 3.374-2.23.05-.012.12-.026.166.016.047.041.042.12.037.141-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8.154 8.154 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629.093.06.183.125.27.187.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.426 1.426 0 0 0-.013-.315.337.337 0 0 0-.114-.217.526.526 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09z">
                                    </path>
                                    </svg>
                                </a>
                                <a href="https://instagram.com/Esele_shop" className="ml-1"> <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="26" width="26" xmlns="http://www.w3.org/2000/svg"><path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z">
                                </path>
                                </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
