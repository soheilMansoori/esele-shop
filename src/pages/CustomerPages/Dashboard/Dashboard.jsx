import { useContext, useState, useEffect } from 'react'

// import Link and redirect 
import { Link, useNavigate } from 'react-router-dom'

// import auth context
import authContext from '../../../contexts/authContext/authContext'

export default function Dashboard() {
    const auth = useContext(authContext)
    const [orders, setOrders] = useState([]);
    const [favorites, setFavorites] = useState([]);
    const navigate = useNavigate()

    useEffect(() => {
        // get all favorites from server
        getAllFavorites()
        // get all orders from server
        getAllOrders()
    }, [auth])

    // get all favorites from server
    function getAllFavorites() {
        fetch(`http://localhost:4000/users/${auth.userID}`)
            .then(res => res.json())
            .then(data => setFavorites(data.favorites))
            .catch(error => console.log(error.message))
    };

    // get all orders from server
    function getAllOrders() {
        fetch(`http://localhost:4000/users/${auth.userID}`)
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

    }

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

