import { useCallback, useEffect, useState } from 'react'

// import components
import ProductBox from '../../components/templates/ShopPage/ProductBox/ProductBox';
import Pagination from '../../components/modules/Pagination/Pagination';
import Header from '../../components/modules/Header/Header';
import Footer from '../../components/modules/Footer/Footer';

// import Link and url SearchParams
import { Link, useSearchParams } from 'react-router-dom'

// import models from react-bootstrap
import { Form } from 'react-bootstrap'

// import swiper 
import { Swiper, SwiperSlide } from 'swiper/react'

// swiper require module
import { Autoplay } from 'swiper/modules'

// import css module
import './Shop.css'

export default function Shop() {
    // const [price, setPrice] = useState('')
    const [searchParams] = useSearchParams();
    const [isShowFilteredBox, setIsShowFilteredBox] = useState(false)
    const [products, setProducts] = useState([])
    const [productsData, setProductsData] = useState({})
    const [sort, setSort] = useState('new')
    const [categories, setCategories] = useState([])

    const page = searchParams.get("page") || 1;

    // get all products from server
    const getAllProducts = useCallback(() => {
        fetch(`${process.env.REACT_APP_BACKEND_BASE_URL}/products?_sort=${sort}&_page=${page}&_per_page=8`)
            .then(res => res.json())
            .then(data => {
                setProductsData(data)
                setProducts(data.data)
            })
            .catch(error => console.log(error.message))
    }, [page, sort])

    // get all categories from server 
    const getAllCategories = useCallback(() => {
        fetch(`${process.env.REACT_APP_BACKEND_BASE_URL}/categories`)
            .then(res => res.json())
            .then(categories => {
                // console.log("categories => ", categories)
                setCategories(categories)
            })
            .catch(error => console.log(error.message))
    }, [])

    // Handler sort products by price  
    const sortByPrice = useCallback((event) => {
        console.log('value => ', event.target.value);
        // fetch(`process.env.REACT_APP_BACKEND_BASE_URL/products?newPrice_gt=${event.target.value}`)
        //     .then(res => res.json())
        //     .then(data => console.log(data))
        //     .catch(error => console.log(error.message));
    }, [])

    // response selector for sort products 
    const selectHandler = useCallback((event) => {
        // console.log('value => ', event.target.value);
        setSort(event.target.value)
    }, [])


    useEffect(() => {
        document.title = "shop page"
        // get products from server
        getAllProducts()

        // get all categories from server 
        getAllCategories()

    }, [page, sort, getAllProducts, getAllCategories])

    return (
        <>
            <Header />
            <main className="category-page p-5">
                <label className="text-large mb-2">دسته بندی ها</label>
                <div className="swiper-container swiper-container-initialized swiper-container-horizontal swiper-container-pointer-events swiper-container-rtl info-cards">
                    <Swiper
                        breakpoints={{
                            0: {
                                slidesPerView: 1,
                                spaceBetween: 10,
                            },
                            425: {
                                spaceBetween: 10,
                                slidesPerView: 2,
                            },
                            768: {
                                spaceBetween: 10,
                                slidesPerView: 3,
                            },
                            1024: {
                                spaceBetween: 10,
                                slidesPerView: 4,
                            },
                        }}
                        loop={true}
                        grabCursor={true}
                        modules={[Autoplay]}
                        autoplay={{
                            delay: 4000,
                            disableOnInteraction: false,
                        }}
                        className="swiper-wrapper"
                        id="swiper-wrapper-82ea02a5c810e8afe"
                        aria-live="polite"
                    >
                        {categories?.length && categories.map((category) => (
                            <SwiperSlide key={category.id} className="swiper-slide swiper-slide-active" role="group" aria-label="1 / 6" style={{ width: "271.667px", marginLeft: "40px" }}>
                                <Link to={`/category/${category.slug}`}>
                                    <div className="info-card card">
                                        <div className="stats-card-body d-flex justify-content-center flex-column text-center pb-2 pt-2 card-body">
                                            <div className="image-wrapper">
                                                <img src={category.imgSrc} />
                                            </div>
                                            <div className="title-section">
                                                <h2 className="text-bold-600 mt-1 mb-25"></h2>
                                                <p className="mb-0">{category.name}</p>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>


                <div className="ecommerce-application">
                    {/* sidebar */}
                    <div className={`sidebar-section ${isShowFilteredBox && 'd-none'}`}>
                        <div role="navigation" style={{ position: "absolute", inset: "0px", overflow: "hidden" }}>
                            <div className="sidebar-shop" style={{ zIndex: 2, position: " absolute", top: "0px", bottom: "0px", transition: "-webkit-transform 0.3s ease-out 0s", willChange: "transform", overflowY: "auto", left: "0px", transform: `translateX(${isShowFilteredBox ? "-100%" : "0%"})`, boxShadow: "rgba(0, 0, 0, 0.15) 2px 2px 4px" }}>
                                <div className="card">
                                    <div className="p-2 card-body">
                                        <div className="price-slider">
                                            <div className="price-slider-title d-flex align-items-center justify-content-between">
                                                <h6 className="filter-title mb-0">محدوده قیمت</h6>
                                                <div className="close-filter-phone d-none" onClick={() => setIsShowFilteredBox(true)}>
                                                    <button className="btn bg-transparent p-0">
                                                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="text-dark" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z"></path>
                                                        </svg>
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="price-slider mt-1">
                                                <Form.Range dir='ltr' onChange={sortByPrice} min='0' max='100' />
                                            </div>
                                            <br />
                                            <p>از<span className="mx-1">100,000</span>تومان</p>
                                            <p>تا<span className="mx-1">6,599,000</span>تومان</p>
                                            <div className="clear-filters">
                                                <div className="react-ripples w-100 d-block" style={{ position: "relative", display: "inline-flex", overflow: " hidden" }}>
                                                    <button type="button" className="btn-block btn btn-primary">اعمال فیلتر</button>
                                                    <s style={{ position: "absolute", borderRadius: "50%", opacity: 0, width: "35px", height: "35px", transform: "translate(-50%, -50%)", pointerEvents: "none" }}>
                                                    </s>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div style={{ zIndex: 1, position: "fixed", inset: "0px", opacity: 0, visibility: "hidden", transition: "opacity 0.3s ease-out 0s, visibility 0.3s ease-out 0s", backgroundColor: "rgba(0, 0, 0, 0.3)" }}>
                            </div>
                            <div className="sidebar-children d-none" style={{ position: "absolute", inset: "0px 0px 0px 260px", overflowY: "auto", transition: " left 0.3s ease-out 0s, right 0.3s ease-out 0s" }}>""</div>
                        </div>
                    </div>

                    <div className="shop-content">
                        <div className="m-auto align-items-center justify-content-center row">
                            {/* all product count */}
                            <div className="col-sm-12">
                                <div className="title-wrapper mb-2 d-flex justify-content-between">
                                    <h6 className="title">
                                        <span></span>
                                    </h6>
                                    <span>
                                        <span className="mr-1 ml-1">{productsData.items}</span>کالا</span>
                                </div>
                            </div>
                            {/* products filters */}
                            <div className="col-sm-12">
                                <div className="view-order-options mb-2">
                                    {/* <svg className="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true selected">
                                        <path d="M3 18h6v-2H3v2zM3 6v2h18V6H3zm0 7h12v-2H3v2z"></path>
                                    </svg> */}
                                    مرتب سازی براساس
                                    <button type="button" onClick={() => setSort('new')} className={`p-0 mx-2 sort btn btn-white ${sort === 'new' && 'selected'}`}>جدیدترین</button>
                                    <button type="button" onClick={() => setSort('count')} className={`p-0 mx-2 sort btn btn-white ${sort === 'count' && 'selected'}`}>پر فروش ترین</button>
                                    <button type="button" onClick={() => setSort('newPrice')} className={`p-0 mx-2 sort btn btn-white ${sort === 'newPrice' && 'selected'}`}>گران ترین</button>
                                    <button type="button" onClick={() => setSort('cheapest')} className={`p-0 mx-2 sort btn btn-white ${sort === 'cheapest' && 'selected'}`}>ارزان ترین</button>
                                    <button type="button" onClick={() => setSort('offerPrcend')} className={`p-0 mx-2 sort btn btn-white ${sort === 'offerPrcend' && 'selected'}`}>تخفیف ویژه</button>
                                </div>
                            </div>
                            {/* filter in response mode */}
                            <div className="col-sm-12">
                                <div className="ecommerce-header-items">
                                    <div className="result-toggler w-25 d-flex align-items-center">
                                        <div className="shop-sidebar-toggler d-block d-lg-none" onClick={() => setIsShowFilteredBox(false)}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>
                                            </svg>فیلتر</div>
                                    </div>

                                    {/* <div className="view-options d-flex justify-content-end d-lg-none w-75">
                                        <div className="React-Select css-2b097c-container">

                                            <span aria-live="polite" aria-atomic="false" aria-relevant="additions text" className="css-7pg0cj-a11yText" />

                                            <div className="select__control css-yk16xz-control">
                                                <div className="select__value-container css-1hwfws3">
                                                    <div className="select__placeholder css-1wa3eu0-placeholder">انتخاب...</div>
                                                    <div className="css-1g6gooi">
                                                        <div className="select__input" style={{ display: "inline-block" }}>
                                                            <input autoCapitalize="none" autoComplete="off" autoCorrect="off" id="react-select-2-input" spellCheck="false" tabIndex="0" type="text" aria-autocomplete="list" style={{ boxSizing: "content-box", width: "2px", background: "0px center", border: "0px", fontSize: "inherit", opacity: 1, outline: "0px", padding: "0px", color: "inherit" }} />
                                                            <div style={{ position: "absolute", top: "0px", left: "0px", visibility: "hidden", height: "0px", overflow: "scroll", whiteSpace: "pre", fontSize: "14px", fontFamily: "IRANSans", fontWeight: "400", fontStyle: "normal", letterLpacing: "normal", textTransform: "none" }}>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="select__indicators css-1wy0on6">
                                                    <span className="select__indicator-separator css-1okebmr-indicatorSeparator">
                                                    </span>
                                                    <div className="select__indicator select__dropdown-indicator css-tlfecz-indicatorContainer" aria-hidden="true">
                                                        <svg height="20" width="20" viewBox="0 0 20 20" aria-hidden="true" focusable="false" className="css-8mmkcg">
                                                            <path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z">
                                                            </path>
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>

                                            <input name="sort" type="hidden" />
                                        </div>
                                    </div> */}
                                    <Form.Select onChange={selectHandler} className='w-25 d-block d-lg-none' aria-label="Default select example">
                                        <option value='new'>جدید ترین</option>
                                        <option value="count">پر فروش ترین</option>
                                        <option value="newPrice">گران ترین</option>
                                        <option value="cheapest">ارزان ترین</option>
                                        <option value="offerPrcend">تخفیف ویژه</option>
                                    </Form.Select>
                                </div>
                            </div>
                            {/* products boxes */}
                            <div className="col-sm-12 products m-auto">
                                <div className="m-auto row">
                                    {/* product box */}
                                    {products?.length && products.map((product) => (
                                        <div key={product.id} className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-3">
                                            <ProductBox {...product} />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        {/* pagination */}
                        <Pagination currentPage={page} pagesCount={productsData.pages} prev={productsData.prev} next={productsData.next} />
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}
