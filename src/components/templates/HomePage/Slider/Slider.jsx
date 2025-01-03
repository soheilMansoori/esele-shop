import { useEffect, useState } from 'react'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination, Autoplay } from 'swiper/modules';
import { Link } from 'react-router-dom';


export default function Slider() {
    const [sliders, setSliders] = useState([])
    const [windowWidth, setWindowWidth] = useState(null);

    useEffect(() => {
        setWindowWidth(window.innerWidth);
        // get slider items from server
        fetch(`${process.env.REACT_APP_BACKEND_BASE_URL}/sliders`)
            .then(res => res.json())
            .then(sliders => setSliders(sliders))
            .catch(error => console.log(error.message))


        const resizeHandler = () => setWindowWidth(window.innerWidth);
        window.addEventListener("resize", resizeHandler);
        return () => window.removeEventListener("resize", resizeHandler);
    }, [])

    return (
        <section className="section-introduction w-100">
            <div className="swiper-container swiper-container-initialized swiper-container-horizontal swiper-container-pointer-events swiper-container-rtl introduction mb-2">
                <Swiper
                    modules={[Pagination, Autoplay]}
                    pagination={{
                        clickable: true,
                    }}
                    autoplay={{
                        delay: 4000,
                        disableOnInteraction: false,
                    }}
                    className="swiper-wrapper"
                    id="swiper-wrapper-d6e5d2dc3104fdc77"
                    aria-live="off"
                    style={{ transform: "translate3d(0px, 0px, 0px)", transitionDuration: "0ms" }}
                >
                    {sliders.length && sliders.map((slider) => (
                        <SwiperSlide key={slider.id} className="swiper-slide swiper-slide-active" width="100" style={{ marginLeft: "50px", width: "100%" }}>
                            <Link to="#">
                                <img style={{ width: "100%", height: "auto" }} src={windowWidth > 768 ? slider.imgSrc : slider.responserImgSrc} alt='' />
                            </Link>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <span className="swiper-notification" aria-live="assertive" aria-atomic="true" />
            </div>
        </section>
    )
}


