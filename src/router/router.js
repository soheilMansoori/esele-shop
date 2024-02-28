import { lazy, Suspense } from 'react'
import { Navigate } from 'react-router-dom'

// loading component
import Loading from '../components/modules/Loading/Loading'

// public routes
const LazyHome = lazy(() => import('../pages/Home/Home'))
const LazyLogin = lazy(() => import('../pages/Login/Login'))
const LazySignIn = lazy(() => import('../pages/Signin/Signin'))
const LazyContactUs = lazy(() => import('../pages/ContactUs/ContactUs'))
const LazyAboutUs = lazy(() => import('../pages/AboutUs/AboutUs'))
const LazyRules = lazy(() => import('../pages/Rules/Rules'))
const LazyArticles = lazy(() => import('../pages/Articles/Articles'))
const LazyArticleInfo = lazy(() => import('../pages/ArticleInfo/ArticleInfo'))
const LazyShop = lazy(() => import('../pages/Shop/Shop'))
const LazyCategory = lazy(() => import('../pages/Category/Category'))
const LazySearch = lazy(() => import('../pages/Search/Search'))
const LazyProductInfo = lazy(() => import('../pages/ProductInfo/ProductInfo'))
const LazyUserBasket = lazy(() => import('../pages/UserBasket/UserBasket'))
const LazyNotFound = lazy(() => import('../pages/NotFound/NotFound'))

// Customer pages
const LazyCustomer = lazy(() => import("../pages/CustomerPages/Customer/Customer"));
const LazyDashboard = lazy(() => import("../pages/CustomerPages/Dashboard/Dashboard"));
const LazyInterest = lazy(() => import("../pages/CustomerPages/Interest/Interest"));
const LazyOrders = lazy(() => import("../pages/CustomerPages/Orders/Orders"));
const LazyComments = lazy(() => import("../pages/CustomerPages/Comments/Comments"));
const LazyAddress = lazy(() => import("../pages/CustomerPages/Address/Address"));
const LazyInvoices = lazy(() => import("../pages/CustomerPages/Invoices/Invoices"));


const router = (isLogin, isAdmin) => {
    const localStorageData = JSON.parse(localStorage.getItem('user'))

    const publicRoutes = [
        { path: '/', element: <Suspense fallback={<Loading />}><LazyHome /></Suspense> },
        { path: '/contact-us', element: <Suspense fallback={<Loading />}><LazyContactUs /></Suspense> },
        { path: '/about-us', element: <Suspense fallback={<Loading />}><LazyAboutUs /></Suspense> },
        { path: '/rules', element: <Suspense fallback={<Loading />}><LazyRules /></Suspense> },
        { path: '/articles', element: <Suspense fallback={<Loading />}><LazyArticles /></Suspense> },
        { path: '/article-info/:name', element: <Suspense fallback={<Loading />}><LazyArticleInfo /></Suspense> },
        { path: '/shop', element: <Suspense fallback={<Loading />}><LazyShop /></Suspense> },
        { path: '/category/:name', element: <Suspense fallback={<Loading />}><LazyCategory /></Suspense> },
        { path: '/search/:searchValue', element: <Suspense fallback={<Loading />}><LazySearch /></Suspense> },
        { path: '/product-info/:name', element: <Suspense fallback={<Loading />}><LazyProductInfo /></Suspense> },
        { path: '/user-basket', element: <Suspense fallback={<Loading />}><LazyUserBasket /></Suspense> },
        { path: '/login', element: <Suspense fallback={<Loading />}><LazyLogin /></Suspense> },
        { path: '/sign-in', element: <Suspense fallback={<Loading />}><LazySignIn /></Suspense> },
        { path: '*', element: <Suspense fallback={<Loading />}><LazyNotFound /></Suspense> },
    ];
    const customerRoutes = [
        {
            path: '/customer/*',
            element: isLogin || localStorageData?.token ? <Suspense fallback={<Loading />}><LazyCustomer /></Suspense> : <Navigate to='/login' replace />,
            children: [
                { path: 'dashboard', element: <Suspense fallback={<Loading />}><LazyDashboard /></Suspense> },
                { path: 'interest', element: <Suspense fallback={<Loading />}><LazyInterest /></Suspense> },
                { path: 'orders', element: <Suspense fallback={<Loading />}><LazyOrders /></Suspense> },
                { path: 'comments', element: <Suspense fallback={<Loading />}><LazyComments /></Suspense> },
                { path: 'address', element: <Suspense fallback={<Loading />}><LazyAddress /></Suspense> },
                { path: 'invoices', element: <Suspense fallback={<Loading />}><LazyInvoices /></Suspense> },
                { path: '*', element: <Navigate to='/404' replace /> }
            ]
        }
    ]

    const adminRoutes = [
        {
            path: '/admin/*',
            element: '',
            children: [
                { path: 'dashboard', element: '' },
                { path: 'customers', element: '' },
                { path: 'orders', element: '' },
                { path: 'invoices', element: '' },
                { path: 'products', element: '' },
                { path: 'product/view', element: '' },
                { path: 'product/variety', element: '' },
                { path: 'prices', element: '' },
                { path: 'coupons', element: '' },
                { path: 'coupons', element: '' },
                { path: 'send-goods', element: '' },
                { path: 'profile', element: '' },
                { path: 'contactForm', element: '' },
                { path: 'comments', element: '' },
                { path: 'article-category', element: '' },
                { path: 'article', element: '' },
                { path: 'categories', element: '' },


            ],
        }
    ]

    return [...publicRoutes, ...customerRoutes, ...adminRoutes]
}

export default router
