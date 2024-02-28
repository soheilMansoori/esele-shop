import { Link } from 'react-router-dom'

export default function AboutUs() {
    return (
        <section className="container-costumer section-about my-2 my-md-5">
            <div className="about-home container-costumer">
                <div className="flex-column-reverse flex-md-row position-relative row">
                    <img src="/img/HomePage/AboutUs/barg3.png" className="barg-1" />
                    <img src="/img/HomePage/AboutUs/barg5.png" className="barg-2" />
                    <img src="/img/HomePage/AboutUs/barg2.png" className="barg-3" />
                    <div className="right-item p-1 px-2 px-md-1 col-sm-12 col-md-8 col-lg-7">
                        <img src="/img/HomePage/AboutUs/about-title.webp" className="w-50" />
                        <p className="text-justify ">
                            اِسل یک فروشگاه آنلاین است که در زمینه فروش انواع لوازم آرایشی فعالیت می‌کند. ما به عنوان یک فروشنده معتبر، بهترین برندها و محصولات با کیفیت را به مشتریان ارائه می‌دهیم. در اِسل، متعهد هستیم که بهترین تجربه خرید را برای مشتریانمان فراهم کنیم. مجموعه‌ای از بهترین برندهای لوازم آرایشی را در سایت اِسل پیدا خواهید کرد. ما با توجه به استانداردهای بالا در انتخاب محصولات، همیشه از برندهای معتبر و مشهور در صنعت آرایش استفاده می‌کنیم.
                        </p>
                        <Link to='/about-us' className="position-relative zindex-1">
                            <button type="button" title="درباره ما" className="btn btn-primary">درباره ما</button>
                        </Link>
                    </div>
                    <div className="image-left col-sm-12 col-md-4 col-lg-5">
                        <img src="/img/HomePage/AboutUs/about-image.webp" className="w-100" />
                    </div>
                </div>
            </div>
        </section>
    )
}
