import { useState, useEffect, useContext } from 'react'
// import components
import Breadcrumb from '../../../components/modules/Breadcrumb/Breadcrumb'

// import react-bootstrap components
import { Table, Dropdown } from 'react-bootstrap'

// import Link
import { Link } from 'react-router-dom'

// import auth context 
import authContext from '../../../contexts/authContext/authContext'

export default function Orders() {
    const auth = useContext(authContext)
    const [orders, setOrders] = useState([])
    const [sort] = useState(100)

    useEffect(() => {
        document.title = "user-panel page";

        // get all orders form server
        fetch(`${process.env.REACT_APP_BACKEND_BASE_URL}/users/${auth.userID}`)
            .then(res => res.json())
            .then(data => setOrders(data.orders))
            .catch(error => console.log(error.message));
    }, [auth, sort])

    return (
        <div className="content-wrapper">
            <div className="content-header row">
                <div className="content-header-left col-md-9 col-12 mb-2">
                    <Breadcrumb title='سفارشات' item='داشبورد' slug='/customer/dashboard' />
                </div>
                <div className="content-header-right text-md-right col-md-3 col-12 d-md-block d-none" />
            </div>
            <div className="row">
                <div className="col-sm-12">
                    <div className="data-list list-view">
                        <header className="sc-kgflAQ gtlPOX">
                            <div className="data-list-header d-flex justify-content-between flex-wrap">
                                <div className="actions-left d-flex flex-wrap" />
                                <div className="actions-right d-flex flex-wrap mt-sm-0 mt-2">
                                    {/* drop down */}
                                    <Dropdown className="data-list-rows-dropdown mr-1 d-md-block d-none dropdown">
                                        <Dropdown.Toggle variant='' id="dropdown-basic" type="button" aria-haspopup="true" className="sort-dropdown btn btn-">
                                            <span className="align-middle mx-50">نمایش 10 از 0</span>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <polyline points="6 9 12 15 18 9"></polyline>
                                            </svg>
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu className="dropdown-menu">
                                            <Dropdown.Item className="dropdown-item">10</Dropdown.Item>
                                            <Dropdown.Item className="dropdown-item">50</Dropdown.Item>
                                            <Dropdown.Item className="dropdown-item">100</Dropdown.Item>
                                            <Dropdown.Item className="dropdown-item">همه</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>

                                    {/* search input */}
                                    <div className="filter-section">
                                        <input type="text" className="form-control" />
                                    </div>
                                </div>
                            </div>
                        </header>
                        {orders.length ? (
                            <>
                                {orders.map(order => (
                                    <div key={order.id}>
                                        {/* table */}
                                        <div className='my-3'>
                                            سفارش های ثبت شده در تاریخ
                                            {' ' + order.date}
                                        </div>
                                        <Table striped bordered hover responsive>
                                            <thead>
                                                <tr>
                                                    <th>ID</th>
                                                    <th>نام محصول</th>
                                                    <th>تعداد خرید</th>
                                                    <th>قیمت نهایی</th>
                                                    <th>درصد تخفیف</th>
                                                    <th>دسته بندی</th>
                                                    <th>لینک محصول</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {order.products.map(product => (
                                                    <tr key={product.id}>
                                                        <td className='p-1'>
                                                            <div className='badge p-1 text-black'>
                                                                {product.id}
                                                            </div>
                                                        </td>
                                                        <td className='p-1'>
                                                            <div className='badge p-1 text-black'>
                                                                {product.title}
                                                            </div>
                                                        </td>
                                                        <td className='p-1'>
                                                            <div className='badge p-1 text-black'>
                                                                {product.inBasket}
                                                            </div>
                                                        </td>
                                                        <td className='p-1'>
                                                            <div className='badge p-1 text-black'>
                                                                {product.newPrice?.toLocaleString()}
                                                            </div>
                                                        </td>
                                                        <td className='p-1'>
                                                            <div className='badge p-1 text-black'>
                                                                % {product.offerPrcend}
                                                            </div>
                                                        </td>
                                                        <td className='p-1'>
                                                            <div className='badge p-1 text-black'>
                                                                {product.category}
                                                            </div>
                                                        </td>
                                                        <td className='p-1'>
                                                            <div className='badge badge-primary p-1 w-100'>
                                                                <Link to={`/product-info/${product.slug}`}>
                                                                    لینک
                                                                </Link>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </Table>
                                    </div>
                                ))}
                            </>
                        ) : (
                            <div className="w-100 alert alert-danger text-center my-3">اطلاعاتی برای نمایش وجود ندارد.</div>
                        )}
                    </div>
                </div>
            </div>
        </div >
    )
}
