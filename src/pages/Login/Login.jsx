import { useCallback, useContext, useEffect, useState } from 'react'

// import formik package
import { useFormik } from 'formik'

// import Link and redirect 
import { Link, useNavigate } from 'react-router-dom'

// import auth context 
import authContext from '../../contexts/authContext/authContext'

export default function Login() {
    const [serverError, setServerError] = useState('')
    const auth = useContext(authContext)
    const [isOpenMenu, setIsOpenMenu] = useState(false)
    const navigate = useNavigate()

    useEffect(() => document.title = "login page")

    // formik for validation and get inputs values 
    const form = useFormik({
        initialValues: { username: '', password: '' },
        onSubmit: (values, { setSubmitting }) => {
            handleSubmit(values)
            setTimeout(() => {
                setSubmitting(false);
            }, 5000);
        },
        validate: (values) => {
            const errors = {}
            const userNameRegex = new RegExp(/^\w{5,12}$/)
            const passwordRegex = new RegExp(/^\w{5,12}$/)
            if (!userNameRegex.test(values.username)) {
                errors.username = 'نام کاربری درست نمیباشد'
            }

            if (!passwordRegex.test(values.password)) {
                errors.password = 'رمز عبور درست نمیباشد'
            }
            return errors
        },
    })

    // Handle login  
    const handleSubmit = useCallback(({ username, password }) => {
        fetch(`${process.env.REACT_APP_BACKEND_BASE_URL}/users?username=${username}&password=${password}`)
            .then(res => res.json())
            .then(data => {
                // console.log('data => ', data);
                const mainUser = data[0];
                // console.log(mainUser);
                if (mainUser) {
                    auth.login(mainUser.token, mainUser)
                    navigate('/')
                } else {
                    setServerError('کاربری با این مشخصات یافت نشد')
                }

            })
            .catch(error => console.log(error.message))
    }, [auth, navigate])

    return (
        <div className="full-layout wrapper bg-full-screen-image blank-page dark-layout login-page">
            <div className="app-content">
                <div className="content-wrapper">
                    <div className="content-body">
                        <div className="flexbox-container">
                            <main className="main w-100">
                                <div className="m-0 justify-content-center row">
                                    <div className="d-flex justify-content-center col-md-6 col-lg-4" style={{ maxWidth: "500px" }}>
                                        <div className="card" style={{ maxWidth: "350px" }}>
                                            <div className="m-0 row">
                                                <div className="p-0 col-md-12 col-lg-12">
                                                    <div className="card">
                                                        <div className="w-100 pt-1 pb-1">
                                                            <div className="card-title">
                                                                <div className="position-absolute position-left-0 position-top-0 p-1">
                                                                    <Link to='/' aria-current="page" className="d-flex text-black login-header-back-home active">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                                            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                                                                            <polyline points="9 22 9 12 15 12 15 22"></polyline>
                                                                        </svg>
                                                                        <div className="my-auto mr-1 ml-1">صفحه اصلی</div>
                                                                    </Link>
                                                                </div>
                                                                <h4 className="text-center w-100 pt-3">
                                                                    <div className="w-100 d-flex justify-content-center">
                                                                        <Link to="/">
                                                                            <img src="./img/logo/logo.webp" alt="logo" width="250px" />
                                                                        </Link>
                                                                    </div>
                                                                </h4>
                                                            </div>
                                                        </div>
                                                        <div className="h-100 pt-1  card-body">
                                                            <div className="text-center my-auto">
                                                                <form onSubmit={form.handleSubmit} className="step-wrapper col-lg-12 m-auto form-group row align-items-center mb-2 av-invalid">
                                                                    {serverError && <div className='text-danger my-1 fw-bold'>{serverError}</div>}
                                                                    <div className="col-lg-12 p-0">
                                                                        <div className="col-lg-12 row p-0 m-0 justify-content-between">
                                                                            <div className="col-12 p-0">

                                                                                <div className="form-group">
                                                                                    <label className="mb-1 d-flex">نام کاربری</label>
                                                                                    <input
                                                                                        name="username"
                                                                                        value={form.values.username}
                                                                                        onChange={form.handleChange}
                                                                                        onBlur={form.handleBlur}
                                                                                        dir="rtl"
                                                                                        autocomplete="off"
                                                                                        type="text"
                                                                                        className="form-control is-untouched is-pristine av-invalid form-control"
                                                                                    />
                                                                                    {form.errors.username && form.touched.username && (<div className="text-danger d-flex mt-1">{form.errors.username}</div>)}
                                                                                </div>
                                                                                <div className="form-group">
                                                                                    <label className="mb-1 d-flex">رمز عبور</label>
                                                                                    <input
                                                                                        name="password"
                                                                                        value={form.values.password}
                                                                                        onChange={form.handleChange}
                                                                                        onBlur={form.handleBlur}
                                                                                        dir="rtl"
                                                                                        autocomplete="off"
                                                                                        type="text"
                                                                                        className="form-control is-untouched is-pristine av-invalid form-control"
                                                                                    />
                                                                                    {form.errors.password && form.touched.password && <div className="text-danger d-flex mt-1">{form.errors.password}</div>}
                                                                                </div>

                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="w-100 d-flex justify-content-between">
                                                                        <button type="submit" className="w-100 submit-btn mt-2 mx-0 btn bg-primary text-white" disabled={form.isSubmitting}>{form.isSubmitting ? 'درحال ارسال ...' : 'بررسی'}</button>
                                                                    </div>
                                                                    <Link to='/sign-in' className='w-100 d-flex justify-content-center mt-1'>
                                                                        حساب کاربری ندارید ؟‌
                                                                    </Link>
                                                                </form>
                                                            </div>
                                                            {isOpenMenu && <div className='cardbox-shadow' />}
                                                            <div className="login-card-footer">
                                                                <div className="title" onMouseEnter={() => setIsOpenMenu(true)}>شبکه های اجتماعی</div>
                                                                <div className={`collapse ${isOpenMenu && 'show'}`}>
                                                                    <div className="card" onMouseLeave={() => setIsOpenMenu(false)}>
                                                                        <div className="card-body">
                                                                            <div className="cardbox d-flex justify-content-center my-0">
                                                                                <a href="#" className="card instagram" title="Esele_shop">
                                                                                    <span></span>
                                                                                    <span></span>
                                                                                    <span></span>
                                                                                    <span></span>
                                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                                                                                </a>
                                                                                <a href="#" className="card telegram" title="Eseleshop">
                                                                                    <span></span>
                                                                                    <span></span>
                                                                                    <span></span>
                                                                                    <span></span>
                                                                                    <svg className="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M9.78 18.65l.28-4.23 7.68-6.92c.34-.31-.07-.46-.52-.19L7.74 13.3 3.64 12c-.88-.25-.89-.86.2-1.3l15.97-6.16c.73-.33 1.43.18 1.15 1.3l-2.72 12.81c-.19.91-.74 1.13-1.5.71L12.6 16.3l-1.99 1.93c-.23.23-.42.42-.83.42z"></path></svg>
                                                                                </a>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </main>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

