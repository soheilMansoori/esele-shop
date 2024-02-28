import { useEffect, useState } from 'react'

// import components
import Header from '../../components/modules/Header/Header'
import Footer from '../../components/modules/Footer/Footer'
import ProductBox from '../../components/modules/Products/ProductBox/ProductBox'
import ArticlesBox from '../../components/modules/Articles/ArticlesBox/ArticlesBox'

// import url search params
import { useParams } from 'react-router-dom'

export default function Search() {
    const [products, setProducts] = useState([])
    const [articles, setArticles] = useState([])
    const { searchValue } = useParams()

    useEffect(() => {
        // Automatically scrolls to top whenever page reload
        window.scrollTo(0, 0)

        // get all products from server
        getProducts()

        // get all articles from server
        getArticles()
    }, [searchValue])


    // get all articles from server
    function getArticles() {
        fetch(`http://localhost:4000/articles`)
            .then(res => res.json())
            .then(data => {
                const mainArticles = data.filter((item) => item.title.includes(searchValue))
                console.log('mainArticles => ', mainArticles);
                setArticles(mainArticles)
            }).catch(error => console.log(error.message))
    }
    
    // get all products from server
    function getProducts() {
        fetch(`http://localhost:4000/products`)
            .then(res => res.json())
            .then(data => {
                const mainProducts = data.filter((item) => item.title.includes(searchValue))
                // console.log('mainProducts => ', mainProducts);
                setProducts(mainProducts)
            }).catch(error => console.log(error.message))
    }

    return (
        <>
            <Header />
            <main className='p-0'>
                <div className="p-2 w-100">

                    {/* Products  */}
                    <div className="article row mb-5">
                        <div className="col-sm-12">
                            <h1 className="font-large-1">محصولات</h1>
                            {products.length ? (
                                <div className="row">
                                    <div className="col-sm-12 m-auto">
                                        <div className="m-auto row">
                                            {products.length && products.map((product) => (
                                                <div key={product.id} className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-2">
                                                    <ProductBox {...product} />
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                            ) : 'هیچ محصولی یافت نشد'}

                        </div>
                    </div>



                    {/* Articles */}
                    <div className="article row">
                        <div className="col-sm-12 col-md-12">
                            <h1 className="font-large-1">مقالات</h1>
                            <div className="row">
                                {articles.length ? (
                                    <>
                                        {articles.length && articles.map((article) => (
                                            <div key={article.id} className='col-sm-12 col-sm-2 col-md-3'>
                                                <ArticlesBox {...article} />
                                            </div>
                                        ))}
                                    </>
                                ) : 'هیچ مقالیه ایی یافت شد'}
                            </div>
                        </div>
                    </div>

                </div>
            </main>
            <Footer />
        </>
    )
}
