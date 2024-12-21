import { useEffect, useContext, useState, useCallback } from 'react'

// import components
import Breadcrumb from '../../../components/modules/Breadcrumb/Breadcrumb'

// import formik package
import { useFormik } from 'formik'

// import component react-bootstrap
import { Form } from 'react-bootstrap'

// sweetalert modal
import swal from 'sweetalert'

// import auth context
import authContext from '../../../contexts/authContext/authContext'

export default function Address() {
    const auth = useContext(authContext)
    const [isOpenAddressForm, setIsOpenAddressForm] = useState(false)
    const [provinces, setProvinces] = useState([]);
    const [cities, setCities] = useState([]);
    const [address, setAddress] = useState([]);

    // get main Cities when onChanging provinces
    const getMainCities = useCallback((cityName) => {
        if (cityName !== '0' || cityName !== '-1') {
            fetch(`http://iran-locations-api.vercel.app/api/v1/cities?state=${cityName}`)
                .then(res => res.json())
                .then(data => setCities(data.cities))
                .catch(error => console.log(error.message))
        }
    }, [])

    // formik for validation and get input values
    const form = useFormik({
        initialValues: { state: '0', city: '0', address: '' },
        onSubmit: (values, { setSubmitting }) => {
            addNewAddress(values)
            setTimeout(() => {
                setSubmitting(false);
            }, 5000);
        },
        validate: (values) => {
            const errors = {}
            if (!values.address) {
                errors.address = 'وارد کردن آدرس الزامی میباشد'
            }

            if (values.state == '0' || values.state == '-1') {
                errors.state = 'وارد کردن استان الزامی میباشد'
            }

            if (values.city == '0') {
                errors.city = 'وارد کردن شهر الزامی میباشد'
            }

            return errors
        }
    });



    // get all addresses
    const getAllAddresses = useCallback(() => {
        fetch(`${process.env.REACT_APP_BACKEND_BASE_URL}/users/${auth.userID}`)
            .then(res => res.json())
            .then(data => setAddress(data.address))
            .catch(error => console.log(error.message))
    }, [auth])


    // remove address
    const removeAddress = useCallback((id) => {
        swal({
            title: 'آیا از حذف آدرس مطمعن هستید',
            icon: 'warning',
            buttons: ['نه', 'بله']
        }).then(result => {
            if (result) {
                const userInfos = { ...auth.userInfos, address: auth.userInfos.address.filter(item => item.id !== id) }
                fetch(`${process.env.REACT_APP_BACKEND_BASE_URL}/users/${auth.userID}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(userInfos)
                })
                    .then(res => res.json())
                    .then(data => {
                        auth.reRender()
                        getAllAddresses()
                    }).catch(error => console.log(error.message))
            }
        });
    }, [auth, getAllAddresses])


    // add new address
    const addNewAddress = useCallback(({ state, city, address }) => {
        const newUserAddress = {
            id: crypto.randomUUID(),
            state,
            city,
            address,
        }
        const userInfos = { ...auth.userInfos, address: [...auth.userInfos.address, newUserAddress] }
        fetch(`${process.env.REACT_APP_BACKEND_BASE_URL}/users/${auth.userID}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userInfos)
        })
            .then(res => res.json())
            .then(data => {
                auth.reRender()
                setIsOpenAddressForm(false)
                getAllAddresses()
            }).catch(error => console.log(error.message))
    }, [auth, getAllAddresses])


    useEffect(() => {
        document.title = "user-panel page";

        // get all provinces
        fetch('http://iran-locations-api.vercel.app/api/v1/states')
            .then(res => res.json())
            .then(data => setProvinces(data))
            .catch(error => console.log(error.message))

        // get all addresses 
        getAllAddresses()
    }, [auth, getAllAddresses])

    return (
        <div className="content-wrapper">
            <div className="content-header row">
                <div className="content-header-left col-md-9 col-12 mb-2">
                    <Breadcrumb title='آدرس' item='داشبورد' slug='/customer/dashboard' />
                </div>
                <div className="content-header-right text-md-right col-md-3 col-12 d-md-block d-none">
                </div>
            </div>
            <div className="data-list list-view">
                <button onClick={() => setIsOpenAddressForm(true)} type="button" className="add-new-btn mb-1 btn btn-outline-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="12" y1="5" x2="12" y2="19"></line>
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                    </svg>
                    <span className="align-middle">جدید</span>
                </button>
                <div className="data-list-header d-flex justify-content-between flex-wrap mb-2">
                    <div className="actions-left d-flex flex-wrap" />
                    <div className="actions-right d-flex flex-wrap mt-sm-0 mt-2">
                        <div className="my-auto mr-1 ml-1">جستجو</div>
                        <div className="filter-section my-auto">
                            <input type="text" className="form-control" />
                        </div>
                    </div>
                </div>
                {address.length ? (
                    <>
                        {address.map(address => (
                            <div className="row" key={address.id}>
                                <div className="col-sm-12 col-md-6">
                                    <div className="card">
                                        <div className="card-body">
                                            <h5>آدرس</h5>
                                            <div>
                                                <div className="customer-address">
                                                    {/* remove icon */}
                                                    <svg onClick={() => removeAddress(address.id)} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="cursor-pointer text-danger mt-1">
                                                        <polyline points="3 6 5 6 21 6"></polyline>
                                                        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                                                    </svg>
                                                </div>{address.address}</div>
                                            <div className="mt-1 border-top pt-1 row">
                                                <div className="col-sm-12 col-md-4">
                                                    <div className="d-flex">استان :<span className="mr-1 ml-1">{address.state}</span></div>
                                                </div>
                                                <div className="col-sm-12 col-md-4">شهر :<span className="mr-1 ml-1">{address.city}</span></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </>
                ) : (
                    <div className="w-100 alert alert-danger text-center">اطلاعاتی برای نمایش وجود ندارد.</div>
                )}

                {/* address form  */}
                <div className={`data-list-sidebar ${isOpenAddressForm && "show"}`}>
                    <div className="data-list-sidebar-header mt-2 px-2 d-flex justify-content-between">
                        <svg onClick={() => setIsOpenAddressForm(false)} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                    </div>
                    <div className="scrollbar-container data-list-fields px-2 mt-3 ps ps__rtl ps--active-y">
                        <div className="data-list list-view">
                            <form onSubmit={form.handleSubmit} className="av-invalid">

                                <div>
                                    <label htmlFor="provinces" className="mb-1"> استان </label>
                                    {/* <div className="my-0 mb-1 css-2b097c-container" id="provinces">
                                        <span aria-live="polite" aria-atomic="false" aria-relevant="additions text" className="css-7pg0cj-a11yText" />
                                        <div className="css-yk16xz-control">
                                            <div className=" css-1hwfws3">
                                                <div className="css-1wa3eu0-placeholder">
                                                </div>
                                                <div className="css-1g6gooi">
                                                    <div className="" style={{ display: "inline-block" }}>
                                                        <input autocapitalize="none" autocomplete="off" autocorrect="off" id="react-select-5-input" spellcheck="false" tabIndex="0" type="text" aria-autocomplete="list" value="" style={{ boxSizing: "content-box", width: "2px", background: "0px center", border: "0px", fontSize: "inherit", opacity: 1, outline: "0px", padding: "0px", color: "inherit" }} />
                                                        <div style={{ position: "absolute", top: "0px", left: "0px", visibility: "hidden", height: "0px", overflow: "scroll", whiteSpace: "pre", fontSize: "14px", fontFamily: "IRANSans", fontWeight: "400", fontStyle: "normal", letterSpacing: "normal", textTransform: "none" }}>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className=" css-1wy0on6">
                                                <span className=" css-1okebmr-indicatorSeparator" />
                                                <div className=" css-tlfecz-indicatorContainer" aria-hidden="true">
                                                    <svg height="20" width="20" viewBox="0 0 20 20" aria-hidden="true" focusable="false" className="css-8mmkcg">
                                                        <path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"></path>
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                        <input name="provinces" type="hidden" value="" />
                                    </div> */}
                                    <Form.Select
                                        className='my-0 mb-1'
                                        name='state'
                                        value={form.values.state}
                                        onChange={(event) => {
                                            form.handleChange(event)
                                            getMainCities(event.target.value)
                                        }}
                                    >
                                        <option value="0">لطفا استان را انتخاب نمایید</option>
                                        {provinces.length ? (
                                            <>
                                                {provinces.map(state => (
                                                    <option value={state.name} key={state.id}>{state.name}</option>
                                                ))}
                                            </>
                                        ) : (
                                            <option value="-1">درحال دریافت ...</option>
                                        )}
                                    </Form.Select>
                                    {form.errors.state && (<div className="text-danger my-1">{form.errors.state}</div>)}
                                </div>

                                <div>
                                    <label htmlFor="cities" className="mb-1"> شهر </label>
                                    {/* <div className="my-0 mb-1 css-2b097c-container" id="cities">
                                        <span aria-live="polite" aria-atomic="false" aria-relevant="additions text" className="css-7pg0cj-a11yText" />
                                        <div className="css-yk16xz-control">
                                            <div className="css-1hwfws3">
                                                <div className=" css-1wa3eu0-placeholder">
                                                </div>
                                                <div className="css-1g6gooi">
                                                    <div className="" style={{ display: "inline-block" }}>
                                                        <input autocapitalize="none" autocomplete="off" autocorrect="off" id="react-select-7-input" spellcheck="false" tabIndex="0" type="text" aria-autocomplete="list" value="" style={{ boxSizing: "content-box", width: "2px", background: "0px center", border: "0px", fontSize: "inherit", opacity: 1, outline: "0px", padding: "0px", color: "inherit" }} />
                                                        <div style={{ position: "absolute", top: "0px", left: "0px", visibility: "hidden", height: "0px", overflow: "scroll", whiteSpace: "pre", fontSize: "14px", fontFamily: "IRANSans", fontWeight: "400", fontStyle: "normal", letterSpacing: "normal", textTransform: "none" }}>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="css-1wy0on6">
                                                <span className=" css-1okebmr-indicatorSeparator" />
                                                <div className=" css-tlfecz-indicatorContainer" aria-hidden="true">
                                                    <svg height="20" width="20" viewBox="0 0 20 20" aria-hidden="true" focusable="false" className="css-8mmkcg">
                                                        <path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"></path>
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                        <input name="cities" type="hidden" value="" />
                                    </div> */}
                                    <Form.Select
                                        name='city'
                                        className='my-0 mb-1'
                                        value={form.values.city}
                                        onChange={form.handleChange}
                                    >
                                        <option value="0">لطفا شهر را انتخاب نمایید</option>
                                        {cities.length ? (
                                            <>
                                                {cities.map(city => (
                                                    <option value={city.name} key={city.id}>{city.name}</option>
                                                ))}
                                            </>
                                        ) : null}
                                    </Form.Select>
                                    {form.errors.city && (<div className="text-danger my-1">{form.errors.city}</div>)}
                                </div>

                                <div className="form-group">
                                    <label htmlFor="address" className="my-0 mb-1">آدرس</label>
                                    <textarea
                                        name="address"
                                        value={form.values.address}
                                        onChange={form.handleChange}
                                        onBlur={form.handleBlur}
                                        className="is-untouched is-pristine av-invalid form-control"
                                    />
                                    {form.errors.address && form.touched.address && (<div className="text-danger my-1">{form.errors.address}</div>)}
                                </div>

                                <div className="text-center form-group">
                                    <div className="react-ripples w-100" style={{ position: "relative", display: "inline-flex", overflow: "hidden" }}>
                                        <button type='submit' className="w-100 btn btn-outline-primary">ثبت</button>
                                        <s style={{ position: "absolute", borderRadius: "50%", opacity: 0, width: "35px", height: "35px", transform: "translate(-50%, -50%)", pointerEvents: "none" }} />
                                    </div>
                                </div>

                            </form>
                        </div>
                        <div className="ps__rail-x" style={{ left: "0px", bottom: "0px" }}>
                            <div className="ps__thumb-x" tabIndex="0" style={{ left: "0px", width: "0px" }} />
                        </div>
                        <div className="ps__rail-y" style={{ top: "0px", left: "393px", height: "310px" }}>
                            <div className="ps__thumb-y" tabIndex="0" style={{ top: "0px", height: "225px" }} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

