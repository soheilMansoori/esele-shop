import React from 'react'
import { Link } from 'react-router-dom'

export default function ProductBox({ id, title, newPrice, prevPrice, offerPrcend, imgSrc, slug, isInStock }) {
    return (
        <div className="product-card card">
            <div className="card-content">
                <div className="image-wrapper">
                    {isInStock && offerPrcend ? (
                        <div className="MuiChip-root">
                            <span className="MuiChip-label">{offerPrcend}%</span>
                        </div>
                    ) : null}
                    <Link to={`/product-info/${slug}`} className="d-flex justify-content-center align-items-center w-100 h-100">
                        <img className="card-img-top card-img-top-search" src={imgSrc} alt={slug} />
                    </Link>
                </div>
                <div className="flex-colum d-flex justify-content-around align-items-center align-items-md-start px-1 card-body">
                    <div className="card-text-box">
                        <h3 className="card-title">{title}</h3>
                    </div>
                    <div className="d-flex align-items-end justify-content-center footer-card mt-2">
                        <div className="price d-flex flex-column align-items-center justify-content-around">
                            {isInStock && prevPrice && (
                                <div className="text-toman offer text-line-through text-danger text-small">
                                    <span>{prevPrice}تومان</span>
                                </div>
                            )}
                            {isInStock && newPrice && (
                                <div className="text-toman text-bold mb-0">
                                    <span>{newPrice}تومان</span>
                                </div>
                            )}
                            {!isInStock && (
                                <div className="text-left no-exist">
                                    <span className="over-end"> ناموجود</span>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

