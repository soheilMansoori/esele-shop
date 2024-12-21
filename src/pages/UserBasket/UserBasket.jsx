import { useContext, useState, useEffect, useCallback } from 'react'
// import components
import Header from '../../components/modules/Header/Header'
import Footer from '../../components/modules/Footer/Footer'
import authContext from '../../contexts/authContext/authContext'

// react-toastify import
import { ToastContainer, toast, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// import sweetalert
import swal from 'sweetalert'

// css module
import './UserBasket.css'

export default function UserBasket() {
    const auth = useContext(authContext)
    const [userBasket, setUserBasket] = useState([])
    const [basketProductsPrice, setBasketProductsPrice] = useState(null)

    // notifies start
    const removeProductFromBasketNotify = useCallback(() => toast.error('محصول مورد نظر ازسبد خرید حذف شد', {
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
    // add product notification
    const addProductNotify = useCallback(() => toast.success('یک محصول به سبد اضافه شد', {
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
    // remove one item from the basket notification
    const reduceTheProductNotify = useCallback(() => toast.warn('یک محصول از سبد کم شد', {
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
    // add to orders notification
    const addToOrdersNotify = useCallback(() => toast.success('سفارش شما با موفقیت ثبت شد', {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Slide,

    }), [])
    // notifies end



    // get user basket items from server 
    const getUserBasket = useCallback(() => {
        fetch(`${process.env.REACT_APP_BACKEND_BASE_URL}/users/${auth.userID}`)
            .then(res => res.json())
            .then(user => {
                const { userBasket } = user
                setUserBasket(user.userBasket)
                setBasketProductsPrice(userBasket.reduce((a, b) => a + (b.newPrice * b.inBasket), 0))
            })
            .catch(error => console.log(error.message));
    }, [auth])

    // remove all products from the basket
    const emptyUserBasket = useCallback(() => {
        swal({
            title: 'آیا از خالی کردن سبد خرید خود مطمعن هستید؟',
            icon: 'warning',
            buttons: ['نه', 'بله'],
        }).then(result => {
            if (result) {
                return fetch(`${process.env.REACT_APP_BACKEND_BASE_URL}/users/${auth.userID}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ ...auth.userInfos, userBasket: [] }),
                })
                    .then(res => res.json())
                    .then(() => {
                        getUserBasket()
                        auth.reRender(Math.random())
                    })
                    .catch(error => console.log(error.message));
            }
        })
    }, [auth, getUserBasket])

    // remove one product from the basket
    const removeProductFromBasket = useCallback((mainProductID) => {
        fetch(`${process.env.REACT_APP_BACKEND_BASE_URL}/users/${auth.userID}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ ...auth.userInfos, userBasket: userBasket.filter(product => product.id !== mainProductID) }),
        }).then(res => res.json())
            .then(data => {
                auth.reRender(Math.random())
                getUserBasket()
                removeProductFromBasketNotify()
            })
            .catch(error => console.log(error.message));
    }, [userBasket, auth, getUserBasket, removeProductFromBasketNotify])

    // add anther product to the basket
    const addProduct = useCallback((mainProductID) => {
        const newUserBasket = auth.userInfos.userBasket.map(product => {
            if (product.id === mainProductID) {
                return { ...product, inBasket: product.inBasket + 1 }
            }
            return product
        })
        const userInfos = { ...auth.userInfos, userBasket: newUserBasket }

        fetch(`${process.env.REACT_APP_BACKEND_BASE_URL}/users/${auth.userID}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userInfos),
        }).then(res => res.json())
            .then(data => {
                auth.reRender(Math.random())
                getUserBasket()
                addProductNotify()
            })
            .catch(error => console.log(error.message));

    }, [auth, addProductNotify, getUserBasket]);

    // remove one item from the basket
    const reduceTheProduct = useCallback((mainProductID) => {
        const newUserBasket = auth.userInfos.userBasket.map(product => {
            if (product.id === mainProductID) {
                return { ...product, inBasket: product.inBasket - 1 }
            }
            return product
        })
        const userInfos = { ...auth.userInfos, userBasket: newUserBasket }

        fetch(`${process.env.REACT_APP_BACKEND_BASE_URL}/users/${auth.userID}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userInfos),
        }).then(res => res.json())
            .then(data => {
                auth.reRender(Math.random())
                getUserBasket()
                reduceTheProductNotify()
            })
            .catch(error => console.log(error.message));

    }, [auth, reduceTheProductNotify, getUserBasket]);


    // add to user orders
    const addToOrders = useCallback(() => {
        swal({
            title: 'آیا مطمعن هستید از سفارش خود ؟',
            icon: 'warning',
            buttons: ['نه', 'بله'],
        }).then(result => {
            if (result) {

                let options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' };
                let today = new Date().toLocaleDateString('fa-IR', options);

                const userOrders = [...auth.userInfos.orders, { id: crypto.randomUUID(), date: today, products: [...auth.userInfos.userBasket] }]
                const userInfos = { ...auth.userInfos, userBasket: [], orders: userOrders };

                fetch(`${process.env.REACT_APP_BACKEND_BASE_URL}/users/${auth.userID}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(userInfos),
                }).then(res => res.json())
                    .then(data => {
                        auth.reRender(Math.random())
                        getUserBasket()
                        addToOrdersNotify()
                    })
                    .catch(error => console.log(error.message));
            }
        })
    }, [auth, getUserBasket, addToOrdersNotify]);


    useEffect(() => {
        document.title = "user-basket page";

        // get user basket infos from server
        getUserBasket()
    }, [getUserBasket])

    return (
        <>
            <Header />
            <main className="cart p-lg-5">
                <h4 className="px-2">سبد خرید</h4>
                {userBasket?.length ? (
                    <>
                        <div className="d-flex cart-product">
                            <div className="cart-items">
                                {userBasket.map(product => (
                                    <div key={product.id} className="box-product mr-2 my-1">
                                        <div className="image-wrapper">
                                            <img src={product.imgSrc} />
                                        </div>
                                        <div className="detail-item">
                                            <div className="detail-product">
                                                <div className="name-price">
                                                    <span>{product.title}</span>
                                                    <div className="price">
                                                        <p className="text-line-through card-text">{product.prevPrice.toLocaleString()}تومان</p>
                                                        <p className="text-bold text-large card-text">{product.newPrice.toLocaleString()}تومان</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <div role="group" className="MuiButtonGroup-root my-1 my-md-0" aria-label="outlined primary button group">
                                                    <button onClick={() => addProduct(product.id)} className="MuiButtonBase-root MuiButton-root MuiButton-outlined MuiButtonGroup-grouped MuiButtonGroup-groupedHorizontal MuiButtonGroup-groupedOutlined MuiButtonGroup-groupedOutlinedHorizontal MuiButtonGroup-groupedOutlinedPrimary MuiButton-outlinedPrimary" tabIndex="0" type="button">
                                                        <span className="MuiButton-label">+</span>
                                                        <span className="MuiTouchRipple-root"></span>
                                                    </button>
                                                    <button className="MuiButtonBase-root MuiButton-root MuiButton-outlined MuiButtonGroup-grouped MuiButtonGroup-groupedHorizontal MuiButtonGroup-groupedOutlined MuiButtonGroup-groupedOutlinedHorizontal MuiButtonGroup-groupedOutlinedPrimary MuiButton-outlinedPrimary Mui-disabled Mui-disabled" tabIndex="-1" type="button" disabled="">
                                                        <span className="MuiButton-label">{product.inBasket}</span>
                                                    </button>
                                                    <button disabled={product.inBasket == 1} onClick={() => reduceTheProduct(product.id)} className="MuiButtonBase-root MuiButton-root MuiButton-outlined MuiButtonGroup-grouped MuiButtonGroup-groupedHorizontal MuiButtonGroup-groupedOutlined MuiButtonGroup-groupedOutlinedHorizontal MuiButtonGroup-groupedOutlinedPrimary MuiButton-outlinedPrimary" tabIndex="0" type="button">
                                                        <span className="MuiButton-label">-</span>
                                                        <span className="MuiTouchRipple-root"></span>
                                                    </button>
                                                </div>
                                                <button className="delete-item">
                                                    <i className="fa fa-trash p-1"></i>
                                                    <span onClick={() => removeProductFromBasket(product.id)}>حذف</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="product-check my-1 ml-2">
                                <div className="product-checkBox px-1">
                                    <div className="box-sub">
                                        <div className="show-shopping">
                                            <h5>جمع سبد خرید</h5>
                                            <span className="text-large text-bold">{basketProductsPrice.toLocaleString()}<small className="text-bold"> تومان</small></span>
                                        </div>
                                        <button className="btn-continue" onClick={addToOrders}>ادامه فرآیند خرید</button>
                                        <button className="btn-continue bg-danger mt-2" onClick={emptyUserBasket}>خالی کردن سبد خرید</button>
                                        <p>هزینه‌ی ارسال در ادامه بر اساس آدرس، زمان و نحوه‌ی ارسال انتخابی شما‌ محاسبه و به این مبلغ اضافه خواهد شد</p>
                                    </div>
                                </div>
                                <div className="look px-1 my-1">
                                    <p>کالاهای موجود در سبد شما ثبت و رزرو نشده‌اند، برای ثبت سفارش مراحل بعدی را تکمیل کنید.</p>
                                </div>
                            </div>
                        </div>
                    </>
                ) : (
                    <div className="empty d-flex justify-content-center align-items-center flex-column">
                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="9" cy="21" r="1"></circle>
                            <circle cx="20" cy="21" r="1"></circle>
                            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                        </svg>
                        <p className="py-3">در حال حاضر، کالایی در سبد خرید شما موجود نیست.</p>
                    </div >
                )
                }
            </main >
            <ToastContainer />
            <Footer />
        </>
    )
}


