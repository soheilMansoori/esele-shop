import React from 'react'
import { Link } from 'react-router-dom'

export default function Breadcrumb({ item, title, slug }) {
    return (
        <div className="row breadcrumbs-top">
            <div className="col-12">
                <h2 className="content-header-title float-left mb-0">{title}</h2>
                <div className="breadcrumb-wrapper vx-breadcrumbs d-sm-block d-none col-12">
                    <ol className="" aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item">
                                <Link to={slug}>{item}</Link>
                            </li>
                        </ol>
                    </ol>
                </div>
            </div>
        </div>
    )
}
