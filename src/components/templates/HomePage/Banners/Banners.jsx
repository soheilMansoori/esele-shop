import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function Banners() {
    const [banners, setBanners] = useState([])
    useEffect(() => {
        // get all of banners from server
        fetch(`${process.env.REACT_APP_BACKEND_BASE_URL}/banners`)
            .then(res => res.json())
            .then(banners => setBanners(banners))
            .catch(error => console.log(error.message))
    }, [])
    return (
        <section className="w-100 mt-1 ">
            <div className="banners w-100 container-costumer row">
                {banners.length && banners.map((banner) => (
                    <div className="w-100 pl-md-0 col-sm-12 col-md-6" key={banner.id}>
                        <div className="banner-card-wrapper">
                            <Link to={`/category/${banner.slug}`}>
                                <div className="card-wrapper">
                                    <div className="card mb-1 mb-md-2">
                                        <div className="imgBx">
                                            <div>
                                                <img src={banner.imgSrc} alt="banner" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
