import { useState, useEffect, useContext, useCallback } from 'react'
// import components
import Breadcrumb from '../../../components/modules/Breadcrumb/Breadcrumb'
import authContext from '../../../contexts/authContext/authContext'

// import react-bootstrap components
import { Table } from 'react-bootstrap'

// sweetalert modal
import swal from 'sweetalert'

export default function Comments() {
    const auth = useContext(authContext)
    const [comments, setComments] = useState([])

    useEffect(() => {
        document.title = "user-panel page";
        
        // get all comments
        fetch(`${process.env.REACT_APP_BACKEND_BASE_URL}/comments?userID=${auth.userID}`)
            .then(res => res.json())
            .then(data => setComments(data))
            .catch(error => console.error(error.message));
    }, [auth])

    // show comment description in modal 
    const showDescription = useCallback((description) => {
        swal({
            title: description,
            icon: 'info',
            buttons: 'بستن',
        })
    }, [])

    return (
        <div className="content-wrapper">
            <div className="content-header row">
                <div className="content-header-left col-md-9 col-12 mb-2">
                    <Breadcrumb title='نظرات' slug='/customer/dashboard' item='داشبورد' />
                </div>
                <div className="content-header-right text-md-right col-md-3 col-12 d-md-block d-none">
                </div>
            </div>
            <div className="row">
                <div className="col-sm-12">
                    <div className="data-list list-view">
                        <header className="sc-idiyUo bbDPMO">
                            <div className="data-list-header d-flex justify-content-between flex-wrap">
                                <div className="actions-left d-flex flex-wrap">
                                </div>
                                <div className="actions-right d-flex flex-wrap mt-sm-0 mt-2">
                                    <div className="my-auto mr-2 ml-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="cursor-pointer">
                                            <polyline points="23 4 23 10 17 10"></polyline>
                                            <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"></path>
                                        </svg>
                                    </div>
                                    <div className="data-list-rows-dropdown mr-1 d-md-block d-none dropdown">
                                        <button type="button" aria-haspopup="true" aria-expanded="false" className="sort-dropdown btn btn-">
                                            <span className="align-middle mx-50">نمایش 10 از 0</span>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <polyline points="6 9 12 15 18 9"></polyline>
                                            </svg>
                                        </button>
                                        <div tabIndex="-1" role="menu" aria-hidden="true" className="dropdown-menu">
                                            <a tabIndex="0" role="menuitem" className="dropdown-item">10</a>
                                            <a tabIndex="0" role="menuitem" className="dropdown-item">50</a>
                                            <a tabIndex="0" role="menuitem" className="dropdown-item">100</a>
                                            <a tabIndex="0" role="menuitem" className="dropdown-item">همه</a>
                                        </div>
                                    </div>
                                    <div className="filter-section">
                                        <input type="text" className="form-control" />
                                    </div>
                                </div>
                            </div>
                        </header>
                        {comments.length ? (
                            <>
                                <Table striped bordered hover responsive='md' className='my-2'>
                                    <thead>
                                        <tr>
                                            <th>ID</th>
                                            <th>عنوان</th>
                                            <th>توضیحات</th>
                                            <th>وضعیت</th>
                                            <th>تاریخ</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {comments.map(comment => (
                                            <tr key={comment.id}>
                                                <td>
                                                    <div className='badge text-black p-1'>
                                                        {comment.id}
                                                    </div>
                                                </td>
                                                <td className='p-1'>
                                                    <div className='badge text-black p-1'>
                                                        {comment.title}
                                                    </div>
                                                </td>
                                                <td className='p-1' onClick={() => showDescription(comment.description)} >
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="cursor-pointer">
                                                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                                        <circle cx="12" cy="12" r="3"></circle>
                                                    </svg>
                                                </td>
                                                <td>
                                                    {comment.accepted ? (
                                                        <div className='badge badge-success  p-1'>تایید شده</div>
                                                    ) : (
                                                        <div className="badge badge-warning p-1">در انتظار تایید</div>
                                                    )}
                                                </td>
                                                <td className='p-1'>
                                                    <div className='badge text-black p-1'>{comment.date}</div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </Table>
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


