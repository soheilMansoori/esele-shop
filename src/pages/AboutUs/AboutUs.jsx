import Header from '../../components/modules/Header/Header'
import Footer from '../../components/modules/Footer/Footer'
import { useEffect } from 'react'

export default function AboutUs() {
    useEffect(() => {
        document.title = "about-us page";
    })
    return (
        <>
            <Header />
            <main className='p-0'>
                <div className='about-container container-costumer position-relative'>
                    <div className="text-left ml-2">
                        <div className="position-relative title-home-page">
                            <div>
                                <h2 className="text-left">درباره ما</h2>
                            </div>
                        </div>
                    </div>
                    <div className="bg-about  d-flex flex-column mx-auto mt-2 align-items-center justify-content-center">
                        <div className="about-bottom position-relative d-flex flex-column flex-lg-row">
                            <div className="about-image-phone d-none">
                                <img src="./img/AboutUsPage/about-img.webp" className="w-100" />
                            </div>
                            <div className="w-100  shadow px-3 mt-0 mt-md-2 box-about">
                                <h1 className="my-2 brand-name">فروشگاه لوازم آرایشی بهداشتی <span className="text-primary">اِسل</span>
                                </h1>
                                <div>
                                    <p className=" w-100 text-justify line-height-2">اِسل یک فروشگاه آنلاین است که در زمینه فروش انواع لوازم آرایشی فعالیت می‌کند. ما به عنوان یک فروشنده معتبر، بهترین برندها و محصولات با کیفیت را به مشتریان ارائه می‌دهیم. در اِسل، متعهد هستیم که بهترین تجربه خرید را برای مشتریانمان فراهم کنیم. مجموعه‌ای از بهترین برندهای لوازم آرایشی را در سایت اِسل پیدا خواهید کرد. ما با توجه به استانداردهای بالا در انتخاب محصولات، همیشه از برندهای معتبر و مشهور در صنعت آرایش استفاده می‌کنیم. از برندهای معروفی مانند<ul><li>MAC</li><li>NARS</li><li>Urban</li><li>Decay</li><li>Bobbi Brown</li></ul>و بسیاری دیگر پشتیبانی می‌کنیم. با انتخاب محصولات از این برندها، مطمئن باشید که شما در حال خرید محصولات با کیفیت و اصالت هستید. مشتریان ما در اِسل از انتخاب وسیعی از محصولات آرایشی برخوردار هستند. از لوازم آرایش صورت، چشم، لب، و ناخن تا لوازم آرایشی پوست و مو، همه را در فروشگاه آنلاین ما پیدا خواهید کرد. همچنین، انواع لوازم آرایشی حرفه‌ای و ابزارهای آرایشی نیز در فروشگاه ما موجود است. یکی از اهداف ما در اِسل، ارائه بهترین قیمت‌ها به مشتریان است. ما با تلاش برای ارتقاء روابط مستمر با تامین کنندگان و بهره‌برداری از راهکارهای بهینه‌سازی هزینه، محصولاتی با قیمت مناسب را به شما ارائه می‌دهیم. ما به دنبال این هستیم که مشتریانمان از خرید لوازم آرایشی با کیفیت و همچنین با قیمتی مقرون به صرفه بهره‌مند شوند. در اِسل، تجربه خرید آسان و مطمئن برای مشتریان ما اولویت است. از رابط کاربری ساده و دوستانه سایت تا امکاناتی مانند پرداخت امن و ارسال سریع، همه چیز برای رضایت شما طراحی شده است. همچنین، تیم پشتیبانی ما همواره آماده پاسخگویی به سوالات و رفع مشکلات شماست. با انتخاب اِسل برای خرید لوازم آرایشی، شما بهترین و معترین برندهای آرایشی را در یک مکان خواهید داشت و قادر خواهید بود با اطمینان و آسانی از محصولات مورد نیاز خود استفاده کنید. ما در اِسل به ارائه تجربه خریدی بی‌نظیر و رضایت‌بخش برای همه مشتریانمان علاقه‌مندیم.</p>
                                </div>
                            </div>
                            <div className="about-image d-flex justify-content-end">
                                <img src="./img/AboutUsPage/about-img.webp" width="450px" height="550px" />
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}
