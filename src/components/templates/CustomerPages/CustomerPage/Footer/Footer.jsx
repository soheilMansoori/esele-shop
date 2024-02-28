import React from 'react'

export default function Footer() {
    return (
        <footer className="footer footer-light footer-static">
            <p className="mb-0 clearfix">
                <span className="float-md-left d-block d-md-inline-block mt-25">
                    کلیه حقوق متعلق به
                    <a href="https://barantm.ir" target="_blank" rel="noopener noreferrer">
                        سهیل منصوری
                    </a> است. © 2024
                </span>
            </p>
            <div style={{ position: "fixed", bottom: "50px", right: "30px", cursor: "pointer", transitionDuration: "0.2s", transitionTimingFunction: "linear", transitionDelay: "0s", opacity: 0, visibility: "hidden", transitionProperty: "opacity, visibility" }}>
                <button className="btn-icon scroll-top btn btn-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="12" y1="19" x2="12" y2="5"></line>
                        <polyline points="5 12 12 5 19 12"></polyline>
                    </svg>
                </button>
            </div>
        </footer>
    )
}
