import { useEffect, useState } from 'react'

// import Link
import { Link } from 'react-router-dom'

// import component
import ProductBox from '../../../modules/Products/ProductBox/ProductBox'


// import swiper package
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

// import required modules
import { Autoplay } from 'swiper/modules';


export default function LatestProducts() {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch(`${process.env.REACT_APP_BACKEND_BASE_URL}/products?_sort=id&_limit=15`)
            .then(res => res.json())
            .then(products => setProducts(products))
            .catch(error => console.log(error.message))
    }, [])

    return (
        <section className="w-100  mb-1">
            <div className="container-costumer">
                <div className="product-box-2 ">
                    <div className="align-items-center justify-content-center img-phone d-none position-relative">
                        <img className="image-bg-2" src="./img/HomePage/LatestProducts/new-product-background.png" />
                        <div className="d-flex align-items-start justify-content-center flex-column zindex-1">
                            <img src="./img/HomePage/LatestProducts/new-product-title.webp" className="w-100" />
                            <Link className="text-white" to="/search">مشاهده بیشتر<svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="m10.998 16 5-4-5-4v3h-9v2h9z"></path><path d="M12.999 2.999a8.938 8.938 0 0 0-6.364 2.637L8.049 7.05c1.322-1.322 3.08-2.051 4.95-2.051s3.628.729 4.95 2.051S20 10.13 20 12s-.729 3.628-2.051 4.95-3.08 2.051-4.95 2.051-3.628-.729-4.95-2.051l-1.414 1.414c1.699 1.7 3.959 2.637 6.364 2.637s4.665-.937 6.364-2.637C21.063 16.665 22 14.405 22 12s-.937-4.665-2.637-6.364a8.938 8.938 0 0 0-6.364-2.637z"></path></svg>
                            </Link>
                        </div>
                    </div>
                    <div className="w-100 px-md-1 px-0  mb-md-0 offer-box">
                        <div className="img-product-right">
                            <div className="img-web position-relative">
                                <img className="image-bg-2" src="./img/HomePage/LatestProducts/new-product-background.png" />
                                <div className="product-offer d-flex position-relative">
                                    <Link className="" to="/shop">مشاهده بیشتر<svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="m10.998 16 5-4-5-4v3h-9v2h9z"></path><path d="M12.999 2.999a8.938 8.938 0 0 0-6.364 2.637L8.049 7.05c1.322-1.322 3.08-2.051 4.95-2.051s3.628.729 4.95 2.051S20 10.13 20 12s-.729 3.628-2.051 4.95-3.08 2.051-4.95 2.051-3.628-.729-4.95-2.051l-1.414 1.414c1.699 1.7 3.959 2.637 6.364 2.637s4.665-.937 6.364-2.637C21.063 16.665 22 14.405 22 12s-.937-4.665-2.637-6.364a8.938 8.938 0 0 0-6.364-2.637z"></path></svg>
                                    </Link>
                                    <img src="./img/HomePage/LatestProducts/new-product-title.webp" className="ml-1" />
                                </div>
                            </div>
                        </div>
                        <div className="box-product mt-md-1 mt-lg-1 pr-0 pr-md-2">
                            <div className="products">
                                <div className="swiper-container swiper-container-initialized swiper-container-horizontal swiper-container-pointer-events swiper-container-rtl info-cards px-0 px-md-1">
                                    <Swiper
                                        breakpoints={{
                                            0: {
                                                slidesPerView: 2,
                                            },
                                            425: {
                                                slidesPerView: 2,
                                            },
                                            768: {
                                                slidesPerView: 3,
                                            },
                                            1024: {
                                                slidesPerView: 4,
                                            },
                                        }}
                                        spaceBetween={0}
                                        slidesPerView={5}
                                        grabCursor={true}
                                        modules={[Autoplay]}
                                        autoplay={{
                                            delay: 4000,
                                            disableOnInteraction: false,
                                        }}
                                        className="swiper-wrapper"
                                        id="swiper-wrapper-75a184af29cacbe2"
                                        aria-live="off"
                                    >
                                        {products.length && products.reverse().map((product) => (
                                            <SwiperSlide key={product.id} className="swiper-slide position-relative" role="group" aria-label={`${product.id} / ${products.length}`} style={{ width: "237.273px" }}>
                                                <ProductBox {...product} />
                                            </SwiperSlide>
                                        ))}
                                    </Swiper>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}


