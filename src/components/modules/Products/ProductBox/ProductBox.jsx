import React from 'react'
import { Link } from 'react-router-dom'



export default function ProductBox({ id, title, newPrice, prevPrice, offerPrcend, imgSrc, slug, isInStock }) {
    return (
        <div title={title} className="quick-product card">
            {offerPrcend ? (
                <div className="MuiChip-root">
                    <span className="MuiChip-label">{offerPrcend}%</span>
                </div>
            ) : null}
            <Link to={`/product-info/${slug}`}>
                <div className="image-wrapper">
                    <img className="card-img-top quick-img" src={imgSrc} alt={title} />
                </div>
            </Link>
            <div className="flex-colum d-flex justify-content-around align-items-center align-items-md-start p-1 card-body">
                <div className="card-text-box">
                    <Link to={`/product-info/${slug}`}>
                        <h3 className="card-title ">{title}</h3>
                        <div className="product-subtitle d-none">
                            <p />
                        </div>
                    </Link>
                </div>
                <div className="d-flex align-items-end justify-content-center footer-card mt-1">
                    {!isInStock ? (
                        <div className="price">
                            <p className="text-muted text-center no-exist card-text">
                                <span className="over-end">اتمام موجودی</span>
                            </p>
                        </div>

                    ) : (
                        <div className="price d-flex flex-column align-items-end" style={{ width: "fit-content" }}>
                            <p className="text-toman text-bold d-flex card-text">
                                <span>{newPrice?.toLocaleString()}</span>
                                تومان
                            </p>
                            {prevPrice ? (
                                <p className="text-toman text-line-through text-smaller d-flex  text-muted card-text">
                                    <span>{prevPrice?.toLocaleString()}</span>
                                    تومان
                                </p>

                            ) : null}
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}


