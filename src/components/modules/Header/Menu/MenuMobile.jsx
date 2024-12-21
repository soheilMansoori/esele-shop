import React, { memo, useCallback, useState } from 'react'
import { Collapse } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import './MenuMobile.css'


const MenuMobile = memo(({ megaMenuItems }) => {
    const [isShowMenu, setIsShowMenu] = useState(false)
    const [isOpenCollapse, setIsOpenCollapse] = useState(false)
    const [searchValue, setSearchValue] = useState('')
    const [mainCollapseID, setMainCollapseID] = useState(null)

    const navigate = useNavigate()



    // navigate to the search page
    const searchHandler = useCallback((event) => {
        event.preventDefault()
        if (searchValue) {
            navigate(`/search/${searchValue}`)
        }
    }, [navigate, searchValue])

    return (
        <div className="mob-down-header">
            <div className="d-flex justify-content-between align-items-center pb-1 w-100 px-1 ">
                <div className="">
                    <div className="berger-menu">

                        <div className={`sc-dkzDqf ${isShowMenu ? 'gYsezf' : 'eoQfeT'}`}>
                            {isShowMenu ? (
                                <span className="back-menu-icon" onClick={() => setIsShowMenu(false)}>
                                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="40px" width="40px" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z"></path>
                                    </svg>
                                </span>

                            ) : (
                                <span className="menu" onClick={() => setIsShowMenu(true)}>
                                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" color="#fff" height="30px" width="30px" xmlns="http://www.w3.org/2000/svg" style={{ color: "rgb(255,255,255)" }}><path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"></path></svg>
                                </span>
                            )}
                        </div>

                        {/* gray shadow when open the response menu */}
                        {isShowMenu && (
                            <div className="sc-bczRLJ hVNCaP" onClick={() => setIsShowMenu(false)} />
                        )}

                        {/* menu items */}
                        <ul className={`sc-gsnTZi ${isShowMenu ? 'hIsEIG' : 'bJNKce'}`}>
                            {isShowMenu && (
                                <>
                                    {/* logo */}
                                    <div className="w-100 d-flex align-items-center justify-content-center">
                                        <div className="text-center text-left py-2 w-75">
                                            <img src="/img/logo/logo.webp" width="100" />
                                        </div>
                                    </div>

                                    {/* menu */}
                                    <div className="parent-mobile-menu mt-2">

                                        {/* hoem page link */}
                                        <div className="menu-mobile-item">
                                            <Link to="/" className="active">صفحه اصلی</Link>
                                        </div>

                                        {/* products */}
                                        {/* <div className="menu-mobile-item mt-1">
                                            <div className="has-child-item  row">
                                                <div className=" box-item-hasChild col-sm-10 col-md-10">
                                                    <a className="menu-mobile-item d-flex " href="/search">
                                                        <div className="my-auto py-1">
                                                            <span className="">محصولات</span>
                                                        </div>
                                                    </a>
                                                </div>
                                                <div className="menu-collapse col-sm-2 col-md-2">
                                                    <i className="fa fa-angle-down my-auto mr-1 ml-1 float-right" />
                                                </div>
                                            </div>
                                            <div className="m-0 menu-mobile-bg collapse">
                                                <span>
                                                    <div className="menu-mobile-item mt-1 mx-1">
                                                        <div className="has-child-item  row">
                                                            <div className=" box-item-hasChild col-sm-10 col-md-10">
                                                                <a className="menu-mobile-item d-flex " href="/category/لوازم-آرایشی">
                                                                    <div className="my-auto py-1">
                                                                        <span className="">لوازم آرایشی</span>
                                                                    </div>
                                                                </a>
                                                            </div>
                                                            <div className=" menu-collapse col-sm-2 col-md-2">
                                                                <i className="fa fa-angle-down my-auto mr-1 ml-1  float-right" />
                                                            </div>
                                                        </div>
                                                        <div className="m-0 collapse">
                                                            <span>
                                                                <div className="menu-mobile-item mt-1 mx-1">
                                                                    <div className="has-child-item  row">
                                                                        <div className=" box-item col-sm-12 col-md-12">
                                                                            <a className="menu-mobile-item d-flex " href="/category/آرایش-صورت">
                                                                                <div className="my-auto py-1">
                                                                                    <a className="menu-mobile-item" href="/category/آرایش-صورت">آرایش صورت</a>
                                                                                </div>
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="menu-mobile-item mt-1 mx-1">
                                                                    <div className="has-child-item  row">
                                                                        <div className=" box-item col-sm-12 col-md-12">
                                                                            <a className="menu-mobile-item d-flex " href="/category/آرایش-چشم">
                                                                                <div className="my-auto py-1">
                                                                                    <a className="menu-mobile-item" href="/category/آرایش-چشم">آرایش چشم</a>
                                                                                </div>
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="menu-mobile-item mt-1 mx-1">
                                                                    <div className="has-child-item  row">
                                                                        <div className=" box-item col-sm-12 col-md-12">
                                                                            <a className="menu-mobile-item d-flex " href="/category/آرایش-ابرو">
                                                                                <div className="my-auto py-1">
                                                                                    <a className="menu-mobile-item" href="/category/آرایش-ابرو">آرایش  ابرو</a>
                                                                                </div>
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="menu-mobile-item mt-1 mx-1">
                                                                    <div className="has-child-item  row">
                                                                        <div className=" box-item col-sm-12 col-md-12">
                                                                            <a className="menu-mobile-item d-flex " href="/category/آرایش-لب">
                                                                                <div className="my-auto py-1">
                                                                                    <a className="menu-mobile-item" href="/category/آرایش-لب">آرایش لب</a>
                                                                                </div>
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="menu-mobile-item mt-1 mx-1">
                                                                    <div className="has-child-item  row">
                                                                        <div className=" box-item col-sm-12 col-md-12">
                                                                            <a className="menu-mobile-item d-flex " href="/category/آرایش-ناخن">
                                                                                <div className="my-auto py-1">
                                                                                    <a className="menu-mobile-item" href="/category/آرایش-ناخن">آرایش ناخن</a>
                                                                                </div>
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="menu-mobile-item mt-1 mx-1">
                                                                    <div className="has-child-item  row">
                                                                        <div className=" box-item col-sm-12 col-md-12">
                                                                            <a className="menu-mobile-item d-flex " href="/category/ابزار-آرایشی">
                                                                                <div className="my-auto py-1">
                                                                                    <a className="menu-mobile-item" href="/category/ابزار-آرایشی">ابزار آرایشی</a>
                                                                                </div>
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="menu-mobile-item mt-1 mx-1">
                                                        <div className="has-child-item  row">
                                                            <div className=" box-item-hasChild col-sm-10 col-md-10">
                                                                <a className="menu-mobile-item d-flex" href="/category/لوازم-بهداشتی">
                                                                    <div className="my-auto py-1">
                                                                        <span className="">لوازم بهداشتی</span>
                                                                    </div>
                                                                </a>
                                                            </div>
                                                            <div className=" menu-collapse col-sm-2 col-md-2">
                                                                <i className="fa fa-angle-down my-auto mr-1 ml-1  float-right" />
                                                            </div>
                                                        </div>
                                                        <div className="m-0 collapse">
                                                            <span>
                                                                <div className="menu-mobile-item mt-1 mx-1">
                                                                    <div className="has-child-item  row">
                                                                        <div className=" box-item col-sm-12 col-md-12">
                                                                            <a className="menu-mobile-item d-flex " href="/category/محصولات-اصلاح">
                                                                                <div className="my-auto py-1">
                                                                                    <a className="menu-mobile-item" href="/category/محصولات-اصلاح">محصولات اصلاح</a>
                                                                                </div>
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="menu-mobile-item mt-1 mx-1">
                                                                    <div className="has-child-item  row">
                                                                        <div className=" box-item col-sm-12 col-md-12">
                                                                            <a className="menu-mobile-item d-flex " href="/category/بهداشت-دهان-و-دندان">
                                                                                <div className="my-auto py-1">
                                                                                    <a className="menu-mobile-item" href="/category/بهداشت-دهان-و-دندان">بهداشت دهان و دندان</a>
                                                                                </div>
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="menu-mobile-item mt-1 mx-1">
                                                                    <div className="has-child-item  row">
                                                                        <div className=" box-item col-sm-12 col-md-12">
                                                                            <a className="menu-mobile-item d-flex" href="/category/بهداشت-بانوان">
                                                                                <div className="my-auto py-1">
                                                                                    <a className="menu-mobile-item" href="/category/بهداشت-بانوان">بهداشت بانوان</a>
                                                                                </div>
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="menu-mobile-item mt-1 mx-1">
                                                        <div className="has-child-item  row">
                                                            <div className=" box-item-hasChild col-sm-10 col-md-10">
                                                                <a className="menu-mobile-item d-flex" href="/category/لوازم-پوست">
                                                                    <div className="my-auto py-1">
                                                                        <span className="">لوازم پوست</span>
                                                                    </div>
                                                                </a>
                                                            </div>
                                                            <div className=" menu-collapse col-sm-2 col-md-2">
                                                                <i className="fa fa-angle-down my-auto mr-1 ml-1 float-right" />
                                                            </div>
                                                        </div>
                                                        <div className="m-0 collapse">
                                                            <span>
                                                                <div className="menu-mobile-item mt-1 mx-1">
                                                                    <div className="has-child-item  row">
                                                                        <div className=" box-item col-sm-12 col-md-12">
                                                                            <a className="menu-mobile-item d-flex" href="/category/مراقبت-پوست">
                                                                                <div className="my-auto py-1">
                                                                                    <a className="menu-mobile-item" href="/category/مراقبت-پوست">مراقبت پوست</a>
                                                                                </div>
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="menu-mobile-item mt-1 mx-1">
                                                                    <div className="has-child-item  row">
                                                                        <div className=" box-item col-sm-12 col-md-12">
                                                                            <a className="menu-mobile-item d-flex " href="/category/پاک-کننده">
                                                                                <div className="my-auto py-1">
                                                                                    <a className="menu-mobile-item" href="/category/پاک-کننده">پاک کننده</a>
                                                                                </div>
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="menu-mobile-item mt-1 mx-1">
                                                                    <div className="has-child-item  row">
                                                                        <div className=" box-item col-sm-12 col-md-12">
                                                                            <a className="menu-mobile-item d-flex" href="/category/بر-اساس-کارکرد">
                                                                                <div className="my-auto py-1">
                                                                                    <a className="menu-mobile-item" href="/category/بر-اساس-کارکرد">بر اساس کارکرد</a>
                                                                                </div>
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="menu-mobile-item mt-1 mx-1">
                                                                    <div className="has-child-item  row">
                                                                        <div className=" box-item col-sm-12 col-md-12">
                                                                            <a className="menu-mobile-item d-flex " href="/category/بدن">
                                                                                <div className="my-auto py-1">
                                                                                    <a className="menu-mobile-item" href="/category/بدن">بدن</a>
                                                                                </div>
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="menu-mobile-item mt-1 mx-1">
                                                        <div className="has-child-item  row">
                                                            <div className=" box-item-hasChild col-sm-10 col-md-10">
                                                                <a className="menu-mobile-item d-flex " href="/category/لوزام-مو">
                                                                    <div className="my-auto py-1">
                                                                        <span className="">لوزام مو</span>
                                                                    </div>
                                                                </a>
                                                            </div>
                                                            <div className=" menu-collapse col-sm-2 col-md-2">
                                                                <i className="fa fa-angle-down my-auto mr-1 ml-1  float-right" />
                                                            </div>
                                                        </div>
                                                        <div className="m-0 collapse">
                                                            <span>
                                                                <div className="menu-mobile-item mt-1 mx-1">
                                                                    <div className="has-child-item  row">
                                                                        <div className=" box-item col-sm-12 col-md-12">
                                                                            <a className="menu-mobile-item d-flex " href="/category/رنگ-مو">
                                                                                <div className="my-auto py-1">
                                                                                    <a className="menu-mobile-item" href="/category/رنگ-مو">رنگ مو</a>
                                                                                </div>
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="menu-mobile-item mt-1 mx-1">
                                                                    <div className="has-child-item  row">
                                                                        <div className=" box-item col-sm-12 col-md-12">
                                                                            <a className="menu-mobile-item d-flex " href="/category/بهداشت-و-مراقب-مو">
                                                                                <div className="my-auto py-1">
                                                                                    <a className="menu-mobile-item" href="/category/بهداشت-و-مراقب-مو">بهداشت و مراقب مو</a>
                                                                                </div>
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="menu-mobile-item mt-1 mx-1">
                                                                    <div className="has-child-item  row">
                                                                        <div className=" box-item col-sm-12 col-md-12">
                                                                            <a className="menu-mobile-item d-flex " href="/category/حالت-دهنده-مو">
                                                                                <div className="my-auto py-1">
                                                                                    <a className="menu-mobile-item" href="/category/حالت-دهنده-مو">حالت دهنده مو</a>
                                                                                </div>
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="menu-mobile-item mt-1 mx-1">
                                                                    <div className="has-child-item  row">
                                                                        <div className=" box-item col-sm-12 col-md-12">
                                                                            <a className="menu-mobile-item d-flex " href="/category/ابزار-جانبی-مو">
                                                                                <div className="my-auto py-1">
                                                                                    <a className="menu-mobile-item" href="/category/ابزار-جانبی-مو">ابزار جانبی مو</a>
                                                                                </div>
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="menu-mobile-item mt-1 mx-1">
                                                        <div className="has-child-item  row">
                                                            <div className=" box-item-hasChild col-sm-10 col-md-10">
                                                                <a className="menu-mobile-item d-flex" href="/category/لوازم-برقی">
                                                                    <div className="my-auto py-1">
                                                                        <span className="">لوازم برقی</span>
                                                                    </div>
                                                                </a>
                                                            </div>
                                                            <div className=" menu-collapse col-sm-2 col-md-2">
                                                                <i className="fa fa-angle-down my-auto mr-1 ml-1  float-right" />
                                                            </div>
                                                        </div>
                                                        <div className="m-0 collapse">
                                                            <span>
                                                                <div className="menu-mobile-item mt-1 mx-1">
                                                                    <div className="has-child-item  row">
                                                                        <div className=" box-item col-sm-12 col-md-12">
                                                                            <a className="menu-mobile-item d-flex " href="/category/اصلاح-صورت-و-بدن">
                                                                                <div className="my-auto py-1">
                                                                                    <a className="menu-mobile-item" href="/category/اصلاح-صورت-و-بدن">اصلاح صورت و بدن</a>
                                                                                </div>
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="menu-mobile-item mt-1 mx-1">
                                                                    <div className="has-child-item  row">
                                                                        <div className=" box-item col-sm-12 col-md-12">
                                                                            <a className="menu-mobile-item d-flex " href="/category/محصولات-برقی-مو">
                                                                                <div className="my-auto py-1">
                                                                                    <a className="menu-mobile-item" href="/category/محصولات-برقی-مو">محصولات برقی مو</a>
                                                                                </div>
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="menu-mobile-item mt-1 mx-1">
                                                                    <div className="has-child-item  row">
                                                                        <div className=" box-item col-sm-12 col-md-12">
                                                                            <a className="menu-mobile-item d-flex " href="/category/سایر-لوازم-شخصی">
                                                                                <div className="my-auto py-1">
                                                                                    <a className="menu-mobile-item" href="/category/سایر-لوازم-شخصی">سایر لوازم شخصی</a>
                                                                                </div>
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="menu-mobile-item mt-1 mx-1">
                                                        <div className="has-child-item  row">
                                                            <div className=" box-item col-sm-12 col-md-12">
                                                                <a className="menu-mobile-item d-flex " href="/category/عطر-و-ادکلن">
                                                                    <div className="my-auto py-1">
                                                                        <a className="menu-mobile-item" href="/category/عطر-و-ادکلن">عطر و ادکلن</a>
                                                                    </div>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </span>
                                            </div>
                                        </div> */}
                                        <div className="menu-mobile-item mt-1">
                                            {/* collapse button */}
                                            <div className="has-child-item  row">
                                                <div className=" box-item-hasChild col-sm-10 col-md-10">
                                                    <Link to='shop' className="menu-mobile-item d-flex ">
                                                        <div className="my-auto py-1">
                                                            <span className="">محصولات</span>
                                                        </div>
                                                    </Link>
                                                </div>
                                                <div className="menu-collapse col-sm-2 col-md-2" onClick={() => setIsOpenCollapse(prevState => !prevState)}>
                                                    <i className="fa fa-angle-down my-auto mr-1 ml-1 float-right" />
                                                </div>
                                            </div>
                                            {/* collapse items */}
                                            <Collapse in={isOpenCollapse} className={`m-0 menu-mobile-bg collapse ${isOpenCollapse && 'show'}`}>
                                                <span>
                                                    {megaMenuItems.length ? (
                                                        <>
                                                            {megaMenuItems.map(item => (
                                                                <div className="menu-mobile-item mt-1 mx-1" key={item.id}>
                                                                    <div className="has-child-item  row">
                                                                        <div className=" box-item-hasChild col-sm-10 col-md-10">
                                                                            <Link to={`/category/${item.slug}`} className="menu-mobile-item d-flex" >
                                                                                <div className="my-auto py-1">
                                                                                    <span className="">{item.title}</span>
                                                                                </div>
                                                                            </Link>
                                                                        </div>
                                                                        <div className="menu-collapse col-sm-2 col-md-2">
                                                                            <i onClick={() => {
                                                                                if (mainCollapseID === item.id) {
                                                                                    setMainCollapseID(null);
                                                                                    return
                                                                                }
                                                                                setMainCollapseID(item.id)
                                                                            }} className="fa fa-angle-down my-auto mr-1 ml-1  float-right" />
                                                                        </div>
                                                                    </div>
                                                                    {/* childs items */}
                                                                    {item.products.length ? (
                                                                        <>
                                                                            <div className={`m-0 collapse ${mainCollapseID === item.id && 'show'}`}>
                                                                                <span>
                                                                                    {item.products.map(product => (
                                                                                        <div className="menu-mobile-item mt-1 mx-1" key={product.id}>
                                                                                            <div className="has-child-item  row">
                                                                                                <div className=" box-item col-sm-12 col-md-12">
                                                                                                    <Link to={`/product-info/${product.slug}`} className="menu-mobile-item d-flex ">
                                                                                                        <div className="my-auto py-1">
                                                                                                            <Link to={`/product-info/${product.slug}`} className="menu-mobile-item">{product.title}</Link>
                                                                                                        </div>
                                                                                                    </Link>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    ))}
                                                                                </span>
                                                                            </div>
                                                                        </>
                                                                    ) : null}
                                                                </div>
                                                            ))}
                                                        </>
                                                    ) : null}
                                                </span>
                                            </Collapse>
                                        </div>



                                        {/* menu links  */}
                                        <li className="mr-2 nav-item">
                                            <Link to='/shop' className="home-link">فروشگاه</Link>
                                        </li>
                                        <li className="mr-2 nav-item">
                                            <Link to="/contact-us" className="home-link">تماس با ما</Link>
                                        </li>
                                        <li className="mr-2 nav-item">
                                            <Link to="/about-us" className="home-link">درباره ما</Link>
                                        </li>
                                        <li className="mr-2 nav-item">
                                            <Link to="/articles" className="home-link">مقالات</Link>
                                        </li>
                                        <li className="mr-2 nav-item">
                                            <Link to="/rules" className="home-link">قوانین مقررات</Link>
                                        </li>

                                    </div>

                                </>
                            )}
                        </ul>

                    </div>

                </div>

                <div className="search-bar rounded">
                    <form className="d-flex search-web" onSubmit={searchHandler}>
                        <button className="search-btn" type="submit">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                                <path d="M11 20C15.9706 20 20 15.9706 20 11C20 6.02944 15.9706 2 11 2C6.02944 2 2 6.02944 2 11C2 15.9706 6.02944 20 11 20Z" stroke="#3C3A36" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                <path d="M18.9299 20.6898C19.4599 22.2898 20.6699 22.4498 21.5999 21.0498C22.4499 19.7698 21.8899 18.7198 20.3499 18.7198C19.2099 18.7098 18.5699 19.5998 18.9299 20.6898Z" stroke="#3C3A36" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                </path>
                            </svg>
                        </button>
                        <input value={searchValue} onChange={event => setSearchValue(event.target.value)} placeholder="جستجو نام محصول" aria-label="Search" type="search" className="search-web-input form-control" />
                    </form>
                </div>

            </div>
        </div>
    )
});

export default MenuMobile;




