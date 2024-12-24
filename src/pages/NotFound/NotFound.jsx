import { useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
    useEffect(() => { document.title = "404 page" }, []);

    return (
        <div className="position-relative">
            <div className="error-container">
                <h2>متاسفانه صفحه مورد نظر شما یافت نشد.</h2>
                <i>404</i>
                <Link to="/">
                    <button className="neonShadow px-2">بازگشت به صفحه اصلی</button>
                </Link>
            </div>
        </div>
    )
}
