// import components
import Header from '../../components/modules/Header/Header'
import Footer from '../../components/modules/Footer/Footer'

// import css module
import './Rules.css'
import { useEffect } from 'react'

export default function Rules() {
    useEffect(() => { document.title = "rules page" }, []);
    return (
        <>
            <Header />
            <main>
                <div className='rules'>
                    <div className="container-costumer">
                        <div className="title-contact">
                            <div className="position-relative title-home-page">
                                <div>
                                    <h2 className="text-header mt-2 ml-2 ml-md-0 ml-lg-0">قوانین و مقررات</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-12 col-md-8">
                                <div className="div-rules px-1">
                                    <h2>مهمترین اصل در تجارت اعتماد و احترام به خریدار است.</h2>

                                    <p>
                                        <svg className="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                                            <path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z">
                                            </path>
                                        </svg>
                                        تمام محصولات منحصر به فرد است و محصول ارسال شما، همان عکس و مشخصات ذکر شده می باشد.
                                    </p>

                                    <p>
                                        <svg className="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                                            <path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z">
                                            </path>
                                        </svg>
                                        قیمت در سایت تمام شده است و هزینه مالیات و غیره به آن اضافه نمی شود.
                                    </p>

                                    <p>
                                        <svg className="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                                            <path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z">
                                            </path>
                                        </svg>تغییر
                                        آدرس پس از ثبت سفارش امکان پذیر نمی باشد.
                                    </p>

                                    <p>
                                        <svg className="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                                            <path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z">
                                            </path>
                                        </svg>
                                        پس از تحویل ایرادات زمان حمل قابل بررسی نمی باشد.
                                    </p>

                                    <p className="d-flex">
                                        <svg className="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                                            <path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z">
                                            </path>
                                        </svg>
                                        تایید
                                        و پرداخت فاکتور توسط شما به منزله تایید تمامی موارد در بخش مقررات سایت فروشگاه آرایشی Esele می باشد.
                                    </p>
                                </div>
                            </div>
                            <div className="col">
                                <div className="w-100 left-image">
                                    <img src="./img/RulesPage/rules.png" className="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}
