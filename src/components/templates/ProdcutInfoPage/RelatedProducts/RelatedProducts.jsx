import { useEffect, useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';

export default function RelatedProducts() {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch(`${process.env.REACT_APP_BACKEND_BASE_URL}/products`)
            .then(res => res.json())
            .then(data => setProducts(data.slice(0, 12)))
            .catch(error => console.log(error.message));
    }, [])


    return (
        <section className="container-fluid w-100">
            <div className="products width-style p-0">
                <div className="title-wrapper mb-2 d-flex justify-content-between">
                    <h2 className="title ml-3 ml-md-0">محصولات مرتبط</h2>
                </div>
                <div className="swiper-container swiper-container-initialized swiper-container-horizontal swiper-container-pointer-events swiper-container-rtl products-slider px-2">
                    <Swiper
                        breakpoints={{
                            0: {
                                spaceBetween: 10,
                                slidesPerView: 1,
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
                        modules={[Navigation]}
                        navigation={true}
                        className="swiper-wrapper"
                        id="swiper-wrapper-3a764647fab63b6f"
                        aria-live="off"
                    >
                        {products.length ? products.map(product => (
                            <SwiperSlide key={product.id} className="swiper-slide" style={{ width: "242.667px", marginLeft: "20px" }}>
                                <div className=" quick-product card">
                                    {product.offerPrcend ? (
                                        <div className="MuiChip-root">
                                            <span className="MuiChip-label">{product.offerPrcend} %</span>
                                        </div>
                                    ) : null}
                                    <Link to={`/product-info/${product.slug}`}>
                                        <div className="image-wrapper">
                                            <img className="card-img-top quick-img" src={product.imgSrc} />
                                        </div>
                                    </Link>
                                    <div className="flex-colum d-flex justify-content-around align-items-center align-items-md-start p-1 card-body">
                                        <div className="card-text-box">
                                            <Link to={`/product-info/${product.slug}`}>
                                                <h3 className="card-title ">{product.title}</h3>
                                                <div className="product-subtitle d-none">
                                                    <p></p>
                                                </div>
                                            </Link>
                                        </div>
                                        <div className="d-flex align-items-end justify-content-center footer-card mt-1">
                                            <div className="price d-flex flex-column align-items-end" style={{ width: "fit-content" }}>
                                                <p className="text-toman text-bold d-flex card-text">
                                                    <span>{product.prevPrice?.toLocaleString()}</span>تومان
                                                </p>
                                                <p className="text-toman text-line-through text-smaller d-flex  text-muted card-text">
                                                    <span>{product.newPrice?.toLocaleString()}</span>تومان
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        )) : null}
                    </Swiper>
                    <span className="swiper-notification" aria-live="assertive" aria-atomic="true" />
                </div>
            </div>
        </section>
    )
}
