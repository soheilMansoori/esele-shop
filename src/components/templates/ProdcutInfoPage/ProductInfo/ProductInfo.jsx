import { memo, useCallback, useContext, useEffect, useState } from 'react'
import authContext from '../../../../contexts/authContext/authContext'
import { useNavigate } from 'react-router-dom'

import { ToastContainer, toast, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProductInfos = memo(({ info }) => {
    const navigate = useNavigate()
    const auth = useContext(authContext)
    const [isFavorite, setIsFavorite] = useState(false)
    const [isFullScreen, setIsFullScreen] = useState(false)

    // notifies
    const addToFavoritesNotify = useCallback(() => toast.success('محصول به علاقه مندی حالا اضافه شد', {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Slide,
    }), []);

    const addToBasketWhenNotLoginNotify = useCallback(() => toast.error('برای افزودن به سبد خرید ابتدا وارد حساب کاربری خود شوید', {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Slide,
    }), []);

    const removeFromFavoritesNotify = useCallback(() => toast.warn('محصول از علاقه مندی ها حذف شد', {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Slide,
    }), []);

    const addToBasketNotify = useCallback(() => toast.success('محصول به سبد خرید اضافه شد', {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Slide,
    }), []);


    useEffect(() => {
        setIsFavorite(auth.userInfos.favorites?.some((item) => item.id === info.id))
    }, [info, auth])

    const addToBasket = useCallback(() => {
        if (auth.isLoggedIn) {
            const newProduct = { ...info, inBasket: 1 };
            const userBasket = auth.userInfos.userBasket
            const isInBasket = userBasket?.some((item) => item.id === newProduct.id)
            if (isInBasket) {
                for (let item of userBasket) {
                    if (item.id === newProduct.id) {
                        item.inBasket += 1;
                        break;
                    }
                }
            } else {
                userBasket.push(newProduct);
            }
            // console.log('userBasket: ', userBasket);

            const mainUserInfos = { ...auth.userInfos, userBasket }

            fetch(`${process.env.REACT_APP_BACKEND_BASE_URL}/users/${auth.userID}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(mainUserInfos),
            })
                .then(res => res.json())
                .then(user => {
                    auth.reRender(Math.random())
                    addToBasketNotify()
                }).catch(error => console.log(error.message));
        }

    }, [auth, addToBasketNotify, info])

    const addToFavorites = useCallback(() => {
        if (auth.isLoggedIn) {
            const favorites = [...auth.userInfos.favorites, info]
            const mainUserInfos = { ...auth.userInfos, favorites }
            setIsFavorite(true)
            fetch(`${process.env.REACT_APP_BACKEND_BASE_URL}/users/${auth.userID}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(mainUserInfos),
            })
                .then(res => res.json())
                .then(user => {
                    auth.reRender(Math.random())
                    addToFavoritesNotify()
                })
                .catch(error => console.log(error.message));
        } else {
            navigate('/login')
        }
    }, [auth, addToFavoritesNotify, info, navigate])

    const removeFromFavorites = useCallback(() => {
        const favorites = auth.userInfos.favorites.filter(item => item.id !== info.id)
        const mainUserInfos = { ...auth.userInfos, favorites }
        setIsFavorite(false)
        fetch(`${process.env.REACT_APP_BACKEND_BASE_URL}/users/${auth.userID}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(mainUserInfos),
        })
            .then(res => res.json())
            .then(user => {
                auth.reRender(Math.random())
                removeFromFavoritesNotify()
            })
            .catch(error => console.log(error.message));
    }, [auth, info, removeFromFavoritesNotify])

    return (
        <>
            <div className="pb-0">
                <div className="mb-5 mt-2 row">
                    <div className="image-wrapper mb-2 mb-md-0 col-sm-12 col-md-5">
                        <div className="position-sticky">
                            <div className="image-gallery" aria-live="polite">
                                <div className="image-gallery-content bottom">
                                    <div className="image-gallery-slide-wrapper bottom">
                                        <div className="image-gallery-slides">
                                            <div aria-label="Go to Slide 1" tabIndex="-1" className="image-gallery-slide  center " role="button" style={{ display: "inheri", transform: "translate3d(0%, 0px, 0px)" }}>
                                                <img className="image-gallery-image" src={info.imgSrc} alt="" srcSet="" height="" width="" sizes="" title="" loading="eager" />
                                            </div>
                                        </div>
                                        <button onClick={() => setIsFullScreen(true)} type="button" className="image-gallery-icon image-gallery-fullscreen-button" aria-label="Open Fullscreen">
                                            <svg className="image-gallery-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3">
                                                </path>
                                            </svg>
                                        </button>
                                    </div>
                                    <div className="image-gallery-thumbnails-wrapper bottom thumbnails-swipe-horizontal">
                                        <div className="image-gallery-thumbnails">
                                            <nav className="image-gallery-thumbnails-container" aria-label="Thumbnail Navigation" style={{ transform: "translate3d(0px, 0px, 0px)", transition: "all 450ms ease-out 0s" }}>
                                                <button type="button" tabIndex="0" aria-pressed="true" aria-label="Go to Slide 1" className="image-gallery-thumbnail active">
                                                    <span className="image-gallery-thumbnail-inner">
                                                        <img className="image-gallery-thumbnail-image" src={info.imgSrc} />
                                                    </span>
                                                </button>
                                            </nav>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-7">
                        <h3>{info.title}</h3>
                        <p className="text-muted text-small d-flex">
                            <span>
                                <a to="#" className="nav-link">لوازم پوست / </a>
                            </span>
                            <span>
                                <a to="#" className="nav-link">مراقبت پوست</a>
                            </span>
                        </p>
                        <hr />
                        <div className="mt-2 row">
                            <div className="border-left-bottom col-sm-12 col-md-6 col-lg-6 col-xl-6">
                                <div className="card-features">
                                    <div className="p-1">
                                        <div className="justify-content-start d-flex align-items-center">
                                            <i className="fa fa-truck mr-1" />
                                            <div>تحویل اکسپرس</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="border-right-bottom col-sm-12 col-md-6 col-lg-6 col-xl-6">
                                <div className="card-features">
                                    <div className="p-1">
                                        <div className="justify-content-start d-flex align-items-center">
                                            <i className="fa fa-medal mr-1" />
                                            <div>تضمین اصل بودن کالا</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="border-left-top col-sm-12 col-md-6 col-lg-6 col-xl-6">
                                <div className="card-features">
                                    <div className="p-1">
                                        <div className="justify-content-start d-flex align-items-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
                                                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z">
                                                </path>
                                            </svg>
                                            <div>کیفیت بالا</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="border-right-top col-sm-12 col-md-6 col-lg-6 col-xl-6">
                                <div className="card-features">
                                    <div className="p-1">
                                        <div className="justify-content-start d-flex align-items-center">
                                            <i className="fa fa-headphones-alt mr-1" />
                                            <div>پشتیبانی</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-100">
                        </div>
                        <div className="row">
                            <div className="col-sm-12 col-md-6">
                                <div className="my-50 d-flex justify-content-between">
                                    <div>
                                        <span className="text-success">
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-6">
                                <div className="favourite">
                                    {isFavorite ? (
                                        <button onClick={removeFromFavorites}>
                                            <span class="material-icons MuiIcon-root fas fa-heart">
                                            </span>
                                        </button>
                                    ) : (
                                        <button onClick={addToFavorites}>
                                            <span className="material-icons MuiIcon-root far fa-heart">
                                            </span>
                                        </button>
                                    )}

                                    <span className="cursor-pointer">افزودن به علاقه مندی ها</span>
                                </div>
                            </div>
                        </div>
                        <hr />
                        <div className="mt-1 row">
                            <div className="my-auto col-sm-12 col-md-6">
                                <div className="action-btns">
                                    <div className="react-ripples w-100" style={{ position: "relative", display: "inline-flex", overflow: "hidden" }}>
                                        <button type="button" className="mr-1 mb-1 btn btn-primary">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6">
                                            </path>
                                            </svg>
                                            {auth.isLoggedIn ? (
                                                <span onClick={addToBasket} className="align-middle ml-50">افزودن به سبد خرید</span>
                                            ) : (
                                                <span onClick={() => addToBasketWhenNotLoginNotify()} className="align-middle ml-50">افزودن به سبد خرید</span>
                                            )}
                                        </button>
                                        <s style={{ position: "absolute", borderRadius: "50%", opacity: 0, width: "35px", height: "35px", transform: "translate(-50%, -50%)", pointerEvents: "none" }}></s>
                                    </div>
                                </div>
                            </div>
                            <div className="my-auto col-sm-12 col-md-6">
                                <div className="d-flex flex-wrap justify-content-end product-price">
                                    <div>
                                        <p className="">
                                            قیمت
                                            <span className="mr-1 ml-1 text-line-through">{info.prevPrice}</span>تومان</p>
                                        <p className="">
                                            قیمت نهایی
                                            <span className="mr-1 ml-1">{info.newPrice}</span>
                                            تومان
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
            <ToastContainer />
        </>
    )
});

export default ProductInfos;



