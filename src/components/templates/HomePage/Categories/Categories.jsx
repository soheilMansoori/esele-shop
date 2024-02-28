import { useEffect, useState } from 'react'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';


// import required modules
import { Autoplay } from 'swiper/modules';
import { Link } from 'react-router-dom';



export default function Categories() {
    const [categories, setCategories] = useState([])
    useEffect(() => {
        // get all categories from server
        fetch('http://localhost:4000/categories')
            .then(res => res.json())
            .then(categories => setCategories(categories))
            .catch(error => console.log(error.message))
    }, [])

    return (
        <>
            <section className="w-100 position-relative my-0 my-md-2">
                <div className="category-parents container-costumer">
                    <div className="mobile-cat mx-auto row">
                        <div className="swiper-container swiper-container-initialized swiper-container-horizontal swiper-container-pointer-events swiper-container-rtl info-cards w-100 container p-1">
                            <Swiper
                                breakpoints={{
                                    0: {
                                        width: 0,
                                        slidesPerView: 2,
                                    },
                                    425: {
                                        width: 425,
                                        slidesPerView: 2,
                                    },
                                    768: {
                                        width: 768,
                                        slidesPerView: 3,
                                    },
                                    1024: {
                                        width: 1024,
                                        slidesPerView: 4,
                                    },
                                }}
                                slidesPerView={5}
                                spaceBetween={0}
                                grabCursor={true}
                                modules={[Autoplay]}
                                autoplay={{
                                    delay: 4000,
                                    disableOnInteraction: false,
                                }}
                                className="swiper-wrapper"
                                id="swiper-wrapper-75877565ddcac912"
                                aria-live="off"
                            >
                                {categories.length && categories.map((category) => (
                                    <SwiperSlide key={category.id} className="swiper-slide d-flex flex-column align-items-center justify-content-center swiper-slide-prev" role="group" aria-label={`${category.id}/${categories.length}`} style={{ width: "202.182px" }}>
                                        <div className="category-parents d-flex align-items-center justify-content-center ">
                                            <div className="category-box  d-flex align-items-center justify-content-center">
                                                <div className="d-flex flex-column align-items-center justify-content-center">
                                                    <div className="category-box-image">
                                                        <Link to={`/category/${category.slug}`}>
                                                            <img src={category.imgSrc} className='p-1' width="100%" />
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                            <span className="swiper-notification" aria-live="assertive" aria-atomic="true" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

