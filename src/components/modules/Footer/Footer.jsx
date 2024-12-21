import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
    const [categories, setCategories] = useState([])
    useEffect(() => {
        // get all categories from server
        fetch(`${process.env.REACT_APP_BACKEND_BASE_URL}/categories`)
            .then(res => res.json())
            .then(data => setCategories(data))
            .catch(error => console.log(error.message))
    }, [])

    return (
        <div className="footer-web">
            <div className="web-footer">
                <div className="px-0 py-2 mx-auto mb-3 container-costumer row">
                    <div className="about-shop-footer col-12 col-sm-6 col-md-3">
                        <div className="d-flex align-items-center justify-content-start">
                            <h3 className="my-2 my-md-0 my-lg-0">درباره فروشگاه</h3>
                        </div>
                        <div className="mt-1">
                            <p className="text-justify line-height-2">اِسل یک فروشگاه آنلاین است که در زمینه فروش انواع لوازم آرایشی فعالیت می‌کند. ما به عنوان یک فروشنده معتبر، بهترین برندها و محصولات با کیفیت را به مشتریان ارائه می‌دهیم. در اِسل، متعهد هستیم که بهترین تجربه خرید را برای مشتریانمان فراهم کنیم. مجموعه‌ای از بهترین برندهای لوازم آرایشی را در سایت اِسل پیدا خواهید کرد. ما با توجه به استانداردهای بالا در انتخاب محصولات، همیشه از برندهای معتبر و مشهور در صنعت آرایش استفاده می‌کنیم.</p>
                            <div className="social-media-footer">
                                <div className="d-flex align-items-center div-social-footer rounded">
                                    <a href="#" className="">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                                    </a>
                                    <a href="#" className="">
                                        <svg className="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M9.78 18.65l.28-4.23 7.68-6.92c.34-.31-.07-.46-.52-.19L7.74 13.3 3.64 12c-.88-.25-.89-.86.2-1.3l15.97-6.16c.73-.33 1.43.18 1.15 1.3l-2.72 12.81c-.19.91-.74 1.13-1.5.71L12.6 16.3l-1.99 1.93c-.23.23-.42.42-.83.42z"></path></svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="QuickLink-footer pl-0 pl-md-4 pl-lg-5 col-12 col-sm-6 col-md-2">
                        <h3>لینک دسترسی سریع</h3>
                        <div className="pages-link">
                            <Link to="/">
                                <div className="page-details">صفحه اصلی</div>
                            </Link>
                            <Link to="/contact-us">
                                <div className="page-details">تماس با ما</div>
                            </Link>
                            <Link to="/articles">
                                <div className="page-details">مقالات</div>
                            </Link>
                            <Link to="/rules">
                                <div className="page-details">قوانین مقررات</div>
                            </Link>
                            <Link to="/about-us">
                                <div className="page-details">درباره ما</div>
                            </Link>
                        </div>
                    </div>
                    <div className="product-footer pl-0 pl-md-4 pl-lg-4 col-12 col-sm-6 col-md-2">
                        <h3>محصولات</h3>
                        <div className="pages-link">
                            {categories ? (
                                <>
                                    {categories.map(category => (
                                        <Link to={`/category/${category.name}`} key={category.id}>
                                            <div className="page-details">{category.name}</div>
                                        </Link>
                                    ))}
                                </>
                            ) : null}
                        </div>
                    </div>
                    <div className="address-footer col-12 col-sm-6 col-md-3">
                        <h3>تماس با ما</h3>
                        <div className="d-flex justify-content-center align-items-start flex-column address">
                            <div className="pages-link">
                                <div className="page-details">
                                    <div className="mt-0 mt-md-2">
                                        <h5>تلفن :</h5>
                                        <p>
                                            <a href="tel: 09109336202" target="_blank" title="09109336202" rel="noopener" className="text-dark nav-link"> 09109336202</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="e-nemad  col-12 col-sm-6 col-md-2">
                        <h3>با اعتماد خرید کنید</h3>
                        <div className="d-flex flex-row flex-md-column flex-lg-row align-items-center justify-content-around mt-2 item-nemad">
                            <div className="mr-1 bg-white">
                                <a className="w-50 bg-white">
                                    <img
                                        src="/img/Symbols/e-nemad.jpg"
                                        style={{ cursor: "pointer" }}
                                        width="120px"
                                    />
                                </a>
                            </div>
                            <div className="mr-2">
                                <img
                                    src='/img/Symbols/zarinpal.png'
                                    width="100px"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="copyright container-costumer">
                    <span>کلیه حق و حقوق وبسایت برای <a className="text-bold"> فروشگاه اِسل </a>  محفوظ است.</span>
                    <div>
                        <span>© 2024 - این وبسایت توسط <span>
                            <a className="text-bold ">سهیل منصوری جهت رزومه</a></span> طراحی و تولید شده است.</span>
                    </div>
                </div>
            </div>
            <div className="div-contact">
                <div className="hidden-support">
                    <div className="title-support">
                        <h2>برای مشاوره خرید تماس بگیرید</h2>
                        <hr />
                        <div className="text-center text-dark">برای تماس کلیک کنید
                            <div className="button-support mr-1">
                                <a href="tel: 09109336202" target="_blank" title="09109336202" rel="noopener" className="nav-link">09109336202<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg></a></div><div className="button-support mr-1"><a href="tel:+989120713966" target="_blank" title="09120713966" rel="noopener" className="nav-link">09120713966<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                                </a>
                            </div>
                            <div className="button-support mr-1">
                                <a href="tel: 09109336202" target="_blank" title="09109336202" rel="noopener" className="nav-link"> 09109336202<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
