import { useFormik } from 'formik'
import { useNavigate } from 'react-router-dom'
// sweetalert
import swal from 'sweetalert'

export default function ContactUsForm() {
    const navigate = useNavigate()
    
    const form = useFormik({
        initialValues: { name: '', email: '', description: '' },
        onSubmit: (values, { setSubmitting }) => {
            sendForm(values)
            setTimeout(() => {
                setSubmitting(false)
            }, 8000);

        },
        validate: (values) => {
            const errors = {}
            if (!values.name) {
                errors.name = 'وارد کردن نام و نام خواندگی الزامی است'
            }
            const emailRegExp = new RegExp(/^\w+@gmail\.\w{2,3}$/)
            if (!values.email) {
                errors.email = 'وارد کردن ایمیل الزامی میباشد'
            }
            if (!emailRegExp.test(values.email)) {
                errors.email = 'ایمیل معتبر نمیباشد'
            }
            if (!values.description) {
                errors.description = 'وارد کردن متن پیام الزامی میباشد'
            }
            return errors
        }

    })

    function sendForm(form) {
        let options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' };
        let today = new Date().toLocaleDateString('fa-IR', options);

        fetch('http://localhost:4000/contacts', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
            },
            body: JSON.stringify({ date: today, ...form })
        }).then(res => {
            if (res.ok) {
                swal({
                    title: 'پیام شما با موفقعیت ثبت شد با تشکر از شما',
                    icon: 'success',
                    buttons: 'Ok',
                }).then(() => navigate('/'))
            } else {
                throw new Error('cant send')
            }
        }).catch(error => console.log(error.message))

    }

    return (
        <div className="contact_us shadow mt-0 text-center p-0 rounded mt-md-4 row">
            {/* form */}
            <div className="col-sm-12 col-md-12 col-lg-6">
                <h2 className="mt-2 mb-2">تماس با ما</h2>
                <form onSubmit={form.handleSubmit} className="mt-2 p-0 p-lg-3 p-md-3 av-invalid">
                    <div className="text-left form-group">
                        <label htmlFor="name" className="mb-1">نام و نام خانوادگی</label>
                        <input name='name' onChange={form.handleChange} onBlur={form.handleBlur} value={form.values.name} placeholder="لطفا نام و نام خانوادگی را وارد کنید" type="text" className="is-touched is-pristine av-invalid is-invalid form-control" />
                        {form.errors.name && form.touched.name && (<div type="invalid" className="invalid-feedback">{form.errors.name}</div>)}
                    </div>

                    <div className="text-left form-group">
                        <label htmlFor="email" className="mb-1">ایمیل</label>
                        <input name='email' onChange={form.handleChange} onBlur={form.handleBlur} value={form.values.email} placeholder="لطفاایمیل را وارد کنید" type="text" className="is-touched is-pristine av-invalid is-invalid form-control" />
                        {form.errors.email && form.touched.email && (<div type="invalid" className="invalid-feedback">{form.errors.email}</div>)}
                    </div>

                    <div className="text-left form-group">
                        <label htmlFor="description" className="mb-1">پیام</label>
                        <textarea name='description' onChange={form.handleChange} onBlur={form.handleBlur} value={form.values.message} placeholder="پیام های خود را در اینجا بنویسید" required="" id="description" className="is-touched is-pristine av-invalid is-invalid form-control" style={{ height: "84px" }}></textarea>
                        {form.errors.description && form.touched.description && (<div type="invalid" className="invalid-feedback">{form.errors.description}</div>)}
                    </div>
                    {/* submit btn */}
                    <div className="d-flex justify-content-center">
                        <div className="text-center w-100 d-flex justify-content-center form-group">
                            <div className="react-ripples w-100" style={{ position: "relative", display: "inline-flex", overflow: " hidden" }}>
                                <button disabled={form.isSubmitting} type='submit' className="w-75 btn btn-secondary">{form.isSubmitting ? 'درحال ارسال ...' : 'ثبت درخواست تماس'}</button>
                                <s style={{ position: " absolute", borderRadius: "50%", opacity: 0, width: "35px", height: "35px", transform: "translate(-50%, -50%)", pointerEvents: " none" }}>
                                </s>
                            </div>
                        </div>
                    </div>
                </form>
            </div>

            {/* phone number and social icons */}
            <div className="p-0 col-sm-12 col-md-12 col-lg-6">
                <div className="info rounded">
                    <div className="mt-2  mt-md-2 px-3 info-contact">
                        <div className="d-flex align-items-center">
                            <div className="icon-contact mr-1">
                                <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="20" width="20" xmlns="http://www.w3.org/2000/svg">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                    <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"></path><path d="M15 7a2 2 0 0 1 2 2"></path>
                                    <path d="M15 3a6 6 0 0 1 6 6"></path>
                                </svg>
                            </div>
                            <span className="d-flex w-75">شماره تلفن : &nbsp;<a href="tel: 09394188459"> 09394188459</a>
                            </span>
                        </div>
                        <div className="d-flex justify-content-center align-items-center mb-1">
                            <div className="icon-contact mr-1">
                                <a href="https://t.me/Eseleshop" className="text-white">
                                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="30" width="30" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.287 5.906c-.778.324-2.334.994-4.666 2.01-.378.15-.577.298-.595.442-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294.26.006.549-.1.868-.32 2.179-1.471 3.304-2.214 3.374-2.23.05-.012.12-.026.166.016.047.041.042.12.037.141-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8.154 8.154 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629.093.06.183.125.27.187.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.426 1.426 0 0 0-.013-.315.337.337 0 0 0-.114-.217.526.526 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09z">
                                        </path>
                                    </svg>
                                </a>
                            </div>
                            <div className="icon-contact mr-1">
                                <a href="https://instagram.com/Esele_shop" className="text-white">
                                    <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="30" width="30" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5">
                                        </line>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
