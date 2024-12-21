import { useEffect, useState } from 'react'
// import components
import ArticlesBox from '../../components/modules/Articles/ArticlesBox/ArticlesBox'
import Header from '../../components/modules/Header/Header'
import Footer from '../../components/modules/Footer/Footer'
// import Link and get and set Search Params
import { Link, useSearchParams } from 'react-router-dom'

export default function Articles() {
    const [searchParams] = useSearchParams()
    const sort = searchParams.get('sort') || ''
    const [articles, setArticles] = useState([])

    useEffect(() => {
        document.title = "articles page";

        // get all categories from server
        fetch(`${process.env.REACT_APP_BACKEND_BASE_URL}/articles?category=${sort}`)
            .then(res => res.json())
            .then(articles => setArticles(articles))
            .catch(error => console.log(error.message))
    }, [searchParams, sort])

    return (
        <>
            <Header />
            <main className='p-0'>
                <div className="p-2 w-100 articles-page">
                    <div className="article row">
                        {/* Articles */}
                        <div className="col-sm-12 col-md-9">
                            <h1 className="font-large-1">مقالات</h1>
                            {/* Articles box */}
                            <div className="row">
                                {articles.length && articles.map((article) => (
                                    <div className='col-sm-12 col-sm-2 col-md-4' key={article.id}>
                                        <ArticlesBox {...article} />
                                    </div>
                                ))}
                            </div>
                        </div>
                        {/* side bar */}
                        <div className="col-sm-12 col-md-3 mt-5">
                            <div className="card">
                                <div className="card-body">
                                    <h4>دسته بندی ها</h4>
                                    <hr />
                                    <ul className="list-unstyled">
                                        <li className="list-inline">
                                            <Link to="/articles">همه</Link>
                                        </li>
                                        <li className="list-inline">
                                            <Link to="/articles?sort=خواندنی">خواندنی (3) </Link>
                                        </li>
                                        <li className="list-inline">
                                            <Link to="/articles?sort=دانستنی">دانستنی (2) </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}

