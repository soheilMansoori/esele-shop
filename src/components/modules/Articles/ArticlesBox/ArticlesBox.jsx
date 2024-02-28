import React from 'react'
import { Link } from 'react-router-dom'

export default function ArticlesBox({ id, title, description, date, imgSrc, slug }) {
    return (
        <div>
            <div className="card-article-hover">
                <Link to={`/article-info/${slug}`}>
                    <div className="news card">
                        <div className="overflow-hidden article-image">
                            <div className="article-img d-flex align-items-center justify-content-center ">
                                <img src={imgSrc} className="cursor-pointer" width='100%'/>
                            </div>
                            <span className="create-at">
                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" fontSize="small" className="date-icon mr-1" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M7 11h2v2H7v-2zm14-5v14c0 1.1-.9 2-2 2H5a2 2 0 01-2-2l.01-14c0-1.1.88-2 1.99-2h1V2h2v2h8V2h2v2h1c1.1 0 2 .9 2 2zM5 8h14V6H5v2zm14 12V10H5v10h14zm-4-7h2v-2h-2v2zm-4 0h2v-2h-2v2z"></path></svg>
                                {date}
                            </span>
                        </div>
                        <div className="article-section py-0 card-body">
                            <div className="row-article">
                                <div>
                                    <h4 className=" cursor-pointer title-article-card">{title}</h4>
                                    <div className="news-desc div-description">{description?.slice(0, 15).concat('...')}</div>
                                </div>
                                <div className="news-links">
                                    <div className="article-bottom-container text-right">
                                        <Link className="more-desc" to={`/article-info/${slug}`}>مشاهده بیشتر</Link>
                                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" className="more-icon" height="20px" width="20px" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z"></path></svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    )
}



