import { useEffect, useState, useContext } from 'react'
// import components
import RelatedProducts from '../../components/templates/ProdcutInfoPage/RelatedProducts/RelatedProducts'
import ProductInfos from '../../components/templates/ProdcutInfoPage/ProductInfo/ProductInfo'
import Header from '../../components/modules/Header/Header'
import Footer from '../../components/modules/Footer/Footer'
import authContext from '../../contexts/authContext/authContext'

// import Link and url search params
import { useNavigate, Link, useParams } from 'react-router-dom'

// import formik packet
import { useFormik } from 'formik'

// react-toastify import
import { ToastContainer, toast, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ProductInfo() {
    const auth = useContext(authContext)
    const navigate = useNavigate()
    const [productInfo, setProductInfo] = useState({})
    const [tab, setTab] = useState('descriptions')
    const [isPositiveComment, setIsPositiveComment] = useState(true)
    const [comments, setComments] = useState([])
    const params = useParams()

    // notifies
    const sendCommentNotify = () => toast.success('کامنت شما ثبت شد ', {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Slide,

    })


    // form validation for comments 
    const form = useFormik({
        initialValues: { title: '', description: '' },
        onSubmit: (values, { setSubmitting }) => {
            sendComment(values);
            setTimeout(() => {
                setSubmitting(false);
            }, 5000);
        },

        validate: values => {
            const errors = {}
            if (!values.title) {
                errors.title = 'عنوان کامنت را وارد کنید'
            }

            if (!values.description) {
                errors.description = 'متن کامنت را وارد کنید'
            }

            return errors
        },
    })


    useEffect(() => {
        // Automatically scrolls to top whenever page reload
        window.scrollTo(0, 0)

        // get main product info 
        getMainProductInfo()

        // get product comments
        getAllComments()

    }, [params]);

    // send new Comment
    const sendComment = ({ title, description }) => {
        let options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' };
        let today = new Date().toLocaleDateString('fa-IR', options);
        const mainComment = {
            id: crypto.randomUUID(),
            userID: auth.userID,
            productID: productInfo.id,
            date: today,
            title,
            description,
            isPositiveComment,
            isShow: false,
            accepted: false,
            answer: []
        };
        fetch(`http://localhost:4000/comments`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(mainComment)
        }).then(response => response.json())
            .then((data) => {
                // empty comments inputs
                form.values.title = ''
                form.values.description = ''
                // get all comments for real time rendering
                getAllComments()
                sendCommentNotify()
            })
            .catch(error => console.log(error.message));

    }

    // get main product form server
    function getMainProductInfo() {
        fetch(`http://localhost:4000/products?title=${params.name}`)
            .then(res => res.json())
            .then(data => {
                if (data.length) {
                    const mainProduct = data[0];
                    setProductInfo(mainProduct)
                    // console.log("data is => ", data);
                } else {
                    navigate('/404', { replace: true });
                }
            }).catch(error => console.log(error.message));
    }

    // get all Comments from server
    function getAllComments() {
        fetch(`http://localhost:4000/comments?productID=${productInfo.id}`)
            .then(res => res.json())
            .then(data => setComments(data))
            .catch(error => console.log(error.message));
    }

    return (
        <>
            <Header />
            <main className="product-page container-costumer">
                <div className="overflow-hidden app-ecommerce-details p-lg-5 ">
                    {/* product info */}
                    <ProductInfos info={productInfo} />

                    {/* product details and comments */}
                    <div className="section-details p-1 my-1">
                        <ul className="nav nav-tabs">

                            <li className="nav-item" onClick={() => setTab('descriptions')}>
                                <a className={`nav-link ${tab === 'descriptions' && 'active'}`}>
                                    <label>
                                        <h3>توضیحات</h3>
                                    </label>
                                </a>
                            </li>

                            <li className="nav-item" onClick={() => setTab('comments')}>
                                <a className={`nav-link ${tab === 'comments' && 'active'}`}>
                                    <label>
                                        <h3 className="title">نظرات</h3>
                                    </label>
                                </a>
                            </li>

                        </ul>
                        <div className="tab-content">
                            {/* descriptions */}
                            <div className={`tab-pane ${tab === 'descriptions' && 'active'}`}>
                                <div className="mt-2 details">
                                    <p>
                                        <br />
                                    </p>
                                    <ul className="feature" style={{ marginRight: "0px", marginBottom: "0px", marginLeft: "0px", paddingTop: "0px", paddingRight: "var(--li-pl)", paddingBottom: "0px", paddingLeft: "0px", border: "0px", verticalAlign: "baseline", fontFamily: "iranyekan, sans-serif", fontStretch: "inherit", lineHeight: "inherit", listStylePosition: "initial", listStyleImage: "initial", caretColor: " rgb(119, 119, 119)", color: "rgb(119, 119, 119)", webkitTapHighlightColor: "rgba(0, 0, 0, 0)", webkitTextSizeAdjust: "100%" }}>
                                        <li style={{ marginTop: "0px", marginRight: "0px", marginBottom: "var(--li-mb)", marginLeft: "0px", padding: "0px", border: "0px", verticalAlign: "baseline", fontFamily: "inherit", fontStyle: "inherit", fontVariantCaps: "inherit", fontStretch: "inherit", lineHeight: "inherit", position: "relative", listStyle: "none" }}>بسیار مغذی</li>
                                        <li style={{ marginTop: "0px", marginRight: "0px", marginBottom: "var(--li-mb)", marginLeft: "0px", padding: "0px", border: "0px", verticalAlign: "baseline", fontFamily: "inherit", fontStyle: "inherit", fontVariantCaps: "inherit", fontStretch: "inherit", lineHeight: "inherit", position: "relative", listStyle: "none" }}>کنترل کننده قدرتمند چربی پوست</li>
                                        <li style={{ marginTop: "0px", marginRight: "0px", marginBottom: "var(--li-mb)", marginLeft: "0px", padding: "0px", border: "0px", verticalAlign: "baseline", fontFamily: "inherit", fontStyle: "inherit", fontVariantCaps: "inherit", fontStretch: "inherit", lineHeight: "inherit", position: "relative", listStyle: "none" }}>مناسب انواع پوست</li>
                                        <li style={{ marginTop: "0px", marginRight: "0px", marginBottom: "var(--li-mb)", marginLeft: "0px", padding: "0px", border: "0px", verticalAlign: "baseline", fontFamily: "inherit", fontStyle: "inherit", fontVariantCaps: "inherit", fontStretch: "inherit", lineHeight: "inherit", position: "relative", listStyle: "none" }}>پاک کننده عمیق منافذ پوست</li>
                                        <li style={{ marginTop: "0px", marginRight: "0px", marginBottom: "var(--li-mb)", marginLeft: "0px", padding: "0px", border: "0px", verticalAlign: "baseline", fontFamily: "inherit", fontStyle: "inherit", fontVariantCaps: "inherit", fontStretch: "inherit", lineHeight: "inherit", position: "relative", listStyle: "none" }}>از بین برنده موثر جوش سر سیاه</li>
                                        <li style={{ marginTop: "0px", marginRight: "0px", marginBottom: "var(--li-mb)", marginLeft: "0px", padding: "0px", border: "0px", verticalAlign: "baseline", fontFamily: "inherit", fontStyle: "inherit", fontVariantCaps: "inherit", fontStretch: "inherit", lineHeight: "inherit", position: "relative", listStyle: "none" }}>کوچک کننده منافذ</li>
                                        <li style={{ margin: "0px", padding: "0px", border: "0px", verticalAlign: "baseline", fontFamily: "inherit", fontStyle: "inherit", fontVariantCaps: "inherit", fontStretch: "inherit", lineHeight: "inherit", position: "relative", listStyle: "none" }}>مرطوب کننده پوست</li>
                                    </ul>
                                </div>
                                <br />
                            </div>
                            {/* comments */}
                            <div className={`tab-pane ${tab === 'comments' && 'active'}`}>
                                <div id="comments" className="comments mt-2">
                                    <div className="comment">
                                        <div className="submit-comment mt-2">
                                            <h4>ثبت نظر</h4>
                                            <form onSubmit={form.handleSubmit} className="forms av-invalid">
                                                <div className="row">
                                                    <div className="col-sm-12 col-md-12 col-lg-8">
                                                        <div className="title-comment mb-2 form-group">
                                                            <input
                                                                name="title"
                                                                value={form.values.title}
                                                                onChange={form.handleChange}
                                                                onBlur={form.handleBlur}
                                                                placeholder="عنوان نظر"
                                                                type="text"
                                                                className="input-title is-untouched is-pristine av-invalid form-control"
                                                            />
                                                            {form.errors.title && form.touched.title && (<div className='text-danger mt-1'>{form.errors.title}</div>)}
                                                        </div>
                                                        <div className="subject-comment form-group">
                                                            <div className="form-group">
                                                                <textarea
                                                                    name="description"
                                                                    value={form.values.description}
                                                                    onChange={form.handleChange}
                                                                    onBlur={form.handleBlur}
                                                                    placeholder="متن نظر خود را اینجا بنویسید"
                                                                    rows="3"
                                                                    className="is-untouched is-pristine av-invalid form-control"
                                                                />
                                                                {form.errors.description && form.touched.description && (<div className='text-danger mt-1'>{form.errors.description}</div>)}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="mt-2 row">
                                                    <div className="biding align-items-center col-sm-4 col-md-2">
                                                        <div className="not-to-bid d-flex">
                                                            <div className={isPositiveComment ? 'btn-defaultBid' : "btn-NotBid"} onClick={() => setIsPositiveComment(false)}>
                                                                <button type="button" className="btn-binding">
                                                                    <svg className="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                                                                        <path d="M15 3H6c-.83 0-1.54.5-1.84 1.22l-3.02 7.05c-.09.23-.14.47-.14.73v2c0 1.1.9 2 2 2h6.31l-.95 4.57-.03.32c0 .41.17.79.44 1.06L9.83 23l6.59-6.59c.36-.36.58-.86.58-1.41V5c0-1.1-.9-2-2-2zm4 0v12h4V3h-4z">
                                                                        </path>
                                                                    </svg>
                                                                </button>
                                                            </div>
                                                        </div>
                                                        <div className="to-bid d-flex">
                                                            <div className={isPositiveComment ? "btn-ToBid" : "btn-defaultBid"} onClick={() => setIsPositiveComment(true)}>
                                                                <button type="button" className="btn-binding">
                                                                    <svg className="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                                                                        <path d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-2z">
                                                                        </path>
                                                                    </svg>
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-8 col-md-6">
                                                        <div className={`d-flex align-items-start align-items-sm-center ${auth.isLoggedIn ? 'justify-content-end' : 'justify-content-between'} flex-column flex-sm-row`}>
                                                            {!auth.isLoggedIn && (<span>برای ثبت نظر، ابتدا باید وارد حساب کاربری خود شوید</span>)}
                                                            {auth.isLoggedIn ? (
                                                                <button type="submit" className="btn-sign-up btn btn-secondary">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2">
                                                                        </path>
                                                                        <circle cx="12" cy="7" r="4"></circle>
                                                                    </svg>
                                                                    ثبت نظر
                                                                </button>

                                                            ) : (
                                                                <Link to='/login'>
                                                                    <button type="button" className="btn-sign-up btn btn-secondary">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2">
                                                                            </path>
                                                                            <circle cx="12" cy="7" r="4"></circle>
                                                                        </svg>
                                                                        ورود
                                                                    </button>
                                                                </Link>
                                                            )}
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div >

                    {/* Related products */}
                    < RelatedProducts />
                </div >
            </main >
            <ToastContainer />
            <Footer />
        </>
    )
}


