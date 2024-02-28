import { useEffect, useState } from 'react'

// import components
import Header from '../../components/modules/Header/Header'
import Footer from '../../components/modules/Footer/Footer'

// import Link and url params 
import { Link, useParams } from 'react-router-dom'

// react-toastify import
import { ToastContainer, toast, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// import css module  
import './ArticleInfo.css'

export default function ArticleInfo() {
  const [articleInfo, setArticleInfo] = useState({})

  // params
  const { name } = useParams()
  // notifies
  const shareHandlerNotify = () => toast.success('!!!! کپی شد', {
    position: "bottom-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    transition: Slide,

  })

  useEffect(() => {
    // Automatically scrolls to top whenever page reload
    window.scrollTo(0, 0)

    // get all articles from server
    fetch(`http://localhost:4000/articles?title=${name}`)
      .then(res => res.json())
      .then(articleInfo => setArticleInfo(...articleInfo))
      .catch(error => console.log(error.message))
  }, [])

  // Handler for copy in user clipboard
  const shareHandler = () => {
    navigator.clipboard.writeText(`http://localhost:3000/article-info/${name}`)
      .then(() => shareHandlerNotify())
      .catch(error => console.log('cant copy', error.message))
  }

  return (
    <>
      <Header />
      <main className='p-0'>
        <div className="mt-4 w-100 article-page">
          <div className="article row">
            <div className="col-sm-12 col-md-9">
              <div className="image-wrapper d-flex justify-content-center align-items-center">
                <img className="w-100" src={articleInfo.imgSrc} width='100%' />
              </div>
              <h2 className="article-title">{articleInfo.title}</h2>
              <div className="box-info">
                <div className="d-flex share" onClick={shareHandler}>
                  <svg className="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z">
                    </path>
                  </svg>
                  اشتراک گذاری
                </div>
                <div className="d-flex align-items-center date">
                  <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeSmall" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z">
                    </path>
                    <path d="M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z">
                    </path>
                  </svg>
                  {articleInfo.date}
                </div>
                <div className="d-flex align-items-center views">
                  <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeSmall" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 6c3.79 0 7.17 2.13 8.82 5.5C19.17 14.87 15.79 17 12 17s-7.17-2.13-8.82-5.5C4.83 8.13 8.21 6 12 6m0-2C7 4 2.73 7.11 1 11.5 2.73 15.89 7 19 12 19s9.27-3.11 11-7.5C21.27 7.11 17 4 12 4zm0 5c1.38 0 2.5 1.12 2.5 2.5S13.38 14 12 14s-2.5-1.12-2.5-2.5S10.62 9 12 9m0-2c-2.48 0-4.5 2.02-4.5 4.5S9.52 16 12 16s4.5-2.02 4.5-4.5S14.48 7 12 7z">
                    </path>
                  </svg>
                  {articleInfo.visit} بازدید
                </div>
              </div>
              <div className="content-text p-1 card">
                <p style={{ textAlign: "justify" }}>
                  <span style={{ color: "rgb(33, 37, 41)", fontSize: "14.4px" }}>
                    {articleInfo.description}
                  </span>
                  <br />
                </p>
              </div>
            </div>
            <div className="rel-aside col-sm-12 col-md-3">
              <div className="rel-box">

                {/* <div className="card">
                  <div className="card-body">
                    <h4>مقالات مرتبط</h4>
                    <hr />
                    <ul className="list-unstyled">
                      <li className="list-inline">
                        <a href="/article/راهنمای-انتخاب-عطر-یا-ادکلن-مناسب">راهنمای انتخاب عطر یا ادکلن مناسب</a>
                      </li>
                      <li className="list-inline">
                        <a href="/article/کیفیت-لوازم-آرایشی-در-چیست">کیفیت لوازم آرایشی در چیست؟</a>
                      </li>
                    </ul>
                  </div>
                </div> */}

                <div className="card">
                  <div className="card-body">
                    <h4>دسته بندی ها</h4>
                    <hr />
                    <ul className="list-unstyled">
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
        </div>
      </main>
      <ToastContainer />
      <Footer />
    </>
  )
}

