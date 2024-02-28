import { useContext, useEffect, useState } from 'react'
// import components
import Breadcrumb from '../../../components/modules/Breadcrumb/Breadcrumb'
import authContext from '../../../contexts/authContext/authContext'

// import Link
import { Link } from 'react-router-dom'

// sweetalert modal 
import swal from 'sweetalert'

export default function Interest() {
    const auth = useContext(authContext)
    const [interestProducts, setInterestProducts] = useState([])

    useEffect(() => {
        // get all favorites from server
        getAllFavorites()
    }, [auth])

    // remove product favorites from server
    const removeFromFavorites = (productID) => {
        swal({
            title: 'آیا از حذف محصول ازعلاقه مندی ها مطمعن هستید',
            icon: 'warning',
            buttons: ['خیر', 'بله'],
        }).then(result => {
            if (result) {
                const mainFavorites = auth.userInfos.favorites.filter(product => product.id !== productID)
                const mainUserInfos = { ...auth.userInfos, favorites: mainFavorites }
                fetch(`http://localhost:4000/users/${auth.userInfos.id}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(mainUserInfos),
                })
                    .then(res => res.json())
                    .then(() => {
                        auth.reRender()
                        getAllFavorites()
                    })
                    .catch(error => console.log(error.message))
            }
        })

    }

    // get all favorites for server
    function getAllFavorites() {
        fetch(`http://localhost:4000/users/${auth.userID}`)
            .then(res => res.json())
            .then(data => setInterestProducts(data.favorites))
            .catch(error => console.log(error.message))
    }

    return (
        <div className="content-wrapper">
            <div className="content-header row">
                <div className="content-header-left col-md-9 col-12 mb-2">
                    <Breadcrumb title='علاقه مندی' item='داشبورد' slug='/customer/dashboard' />
                </div>
                <div className="content-header-right text-md-right col-md-3 col-12 d-md-block d-none">
                </div>
            </div>

            <div className="data-list list-view">

                <div className="data-list-header d-flex justify-content-end flex-wrap mb-2">
                    <form>
                        <div className="actions-left d-flex  flex-wrap mt-sm-0 mt-2">
                            <div className="my-auto mr-1 ml-1">جستجو</div>
                            <div className="filter-section my-auto">
                                <input type="text" className="form-control" />
                            </div>
                        </div>
                    </form>
                </div>

                <div className="favorites-wrapper row">
                    {interestProducts.length ? (
                        <>
                            {interestProducts.map(product => (
                                <div key={product.id} className="col-sm-12 col-md-6">
                                    <div className="card">
                                        <div className="position-relative card-body">
                                            <div className="cursor-pointer">
                                                <div className="d-flex">
                                                    <div className="item-img text-center">
                                                        <Link to={`/product-info/${product.slug}`}>
                                                            <img className="favorite-customer-image" src={product.imgSrc} alt="favorite" />
                                                        </Link>
                                                    </div>
                                                    <div className="my-auto mr-1 ml-1">{product.title}</div>
                                                </div>
                                                <div className="my-auto mr-1 ml-1 pt-1">{product.description.slice(0, 90)} ... </div>
                                            </div>
                                            <button onClick={() => removeFromFavorites(product.id)} type="button" className="p-0 remove-btn text-danger btn btn-secondary">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                    <polyline points="3 6 5 6 21 6"></polyline>
                                                    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </>
                    ) : <div className='w-100 alert alert-danger text-center'>محصول مورد علاقه ای وجود ندارد</div>}
                </div>

            </div>

        </div>
    )
}
