import { useContext, useState, useEffect, useCallback } from 'react'

// import Link and redirect 
import { Link } from 'react-router-dom'

// import auth context
import authContext from '../../../contexts/authContext/authContext'

export default function Dashboard() {
    const auth = useContext(authContext)
    const [orders, setOrders] = useState([]);
    const [favorites, setFavorites] = useState([]);
    // const navigate = useNavigate()

    // get all favorites from server
    const getAllFavorites = useCallback(() => {
        fetch(`${process.env.REACT_APP_BACKEND_BASE_URL}/users/${auth.userID}`)
            .then(res => res.json())
            .then(data => setFavorites(data.favorites))
            .catch(error => console.log(error.message))
    }, [auth]);

    // get all orders from server
    const getAllOrders = useCallback(() => {
        fetch(`${process.env.REACT_APP_BACKEND_BASE_URL}/users/${auth.userID}`)
            .then(res => {
                if (res.ok) {
                    return res.json()
                }
            })
            .then(data => {
                const mainData = data.orders?.slice(0, 3)
                setOrders(mainData)
            })
            .catch(error => console.log(error.message))

    }, [auth]);

    useEffect(() => {
        document.title = "user-panel page";

        // get all favorites from server
        getAllFavorites()
        // get all orders from server
        getAllOrders()
    }, [auth, getAllFavorites, getAllOrders])


    return (
        <div className="content-wrapper">
            <div className="row">
                <div className="col-sm-12 col-md-6">
                    <div className="card">
                        <div className="card-header">
                            سفارشات باز
                            <span>
                                <Link to="/customer/orders">نمایش همه</Link>
                            </span>
                        </div>
                        <div className="card-body">
                            {orders.length ? (
                                <>
                                    {orders.map(order => (
                                        order.products.slice(0, 3).map(product => (
                                            <Link key={product.id} to={`/product-info/${product.slug}`} className="d-flex border-bottom mb-1 pb-1">
                                                <div className="item-img text-center">
                                                    <img className="favorite-customer-dashboard-image" src={product.imgSrc} alt="order" />
                                                </div>
                                                <div className="my-auto mr-1 ml-1">
                                                    {product.title}
                                                    <div className="my-auto pt-1">
                                                        {product.description?.slice(0, 90)}
                                                    </div>
                                                </div>
                                            </Link>
                                        ))
                                    ))}
                                </>
                            ) : (
                                <div className="text-center">سفارشی وجود ندارد</div>
                            )}
                        </div>
                    </div>
                </div>
                <div className="col-sm-12 col-md-6">
                    <div className="card">
                        <div className="card-header">
                            علاقه مندی ها
                            <span>
                                <Link to="/customer/interest">نمایش همه</Link>
                            </span>
                        </div>
                        <div className="card-body">
                            {favorites.length ? (
                                <>
                                    {favorites.slice(0, 3).map(product => (
                                        <Link key={product.id} to={`/product-info/${product.slug}`} className="d-flex border-bottom mb-1 pb-1">
                                            <div className="item-img text-center">
                                                <img className="favorite-customer-dashboard-image" src={product.imgSrc} alt="favorite" />
                                            </div>
                                            <div className="my-auto mr-1 ml-1">
                                                {product.title}
                                                <div className="my-auto pt-1">
                                                    {product.description.slice(0, 90)}
                                                </div>
                                            </div>
                                        </Link>
                                    ))}
                                </>
                            ) : (
                                <div className="text-center">محصول مورد علاقه ای وجود ندارد</div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

