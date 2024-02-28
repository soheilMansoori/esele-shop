import { useEffect, useState } from 'react'

// import component
import ArticlesBox from '../../../modules/Articles/ArticlesBox/ArticlesBox'

// import swiper package
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

// import required modules
import { Autoplay } from 'swiper/modules';
import { Link } from 'react-router-dom';


export default function Articles() {
    const [articles, setArticles] = useState([])
    useEffect(() => {
        // get all articles from server whit limitations
        fetch('http://localhost:4000/articles?_limit=5')
            .then(res => res.json())
            .then(articles => setArticles(articles))
            .catch(error => console.log(error.message))
    }, [])
    return (
        <section className="w-100 position-relative article-section-container news-bg">
            <div className="news-box">
                <div className="bg-white container-fluid">
                    <div className="title-home-article  d-flex align-items-center justify-content-between container-costumer border-bottom">
                        <div className="">
                            <div className="position-relative title-home-page">
                                <div className="text-header-home">
                                    <h2 className="p-1">خواندنی ها</h2>
                                </div>
                            </div>
                        </div>
                        <Link to='/articles' className="link-top px-2 py-1">مشاهده بیشتر<svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="m10.998 16 5-4-5-4v3h-9v2h9z"></path><path d="M12.999 2.999a8.938 8.938 0 0 0-6.364 2.637L8.049 7.05c1.322-1.322 3.08-2.051 4.95-2.051s3.628.729 4.95 2.051S20 10.13 20 12s-.729 3.628-2.051 4.95-3.08 2.051-4.95 2.051-3.628-.729-4.95-2.051l-1.414 1.414c1.699 1.7 3.959 2.637 6.364 2.637s4.665-.937 6.364-2.637C21.063 16.665 22 14.405 22 12s-.937-4.665-2.637-6.364a8.938 8.938 0 0 0-6.364-2.637z"></path></svg>
                        </Link>
                    </div>
                    <div>

                        <div className="swiper-container swiper-container-initialized swiper-container-horizontal swiper-container-pointer-events swiper-container-rtl container-costumer" modules="function e(){for(var t,r,n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];if(1===a.length&amp;&amp;a[0].constructor&amp;&amp;&quot;Object&quot;===Object.prototype.toString.call(a[0]).slice(8,-1)?r=a[0]:(t=a[0],r=a[1]),r||(r={}),r=Object(l.e)({},r),t&amp;&amp;!r.el&amp;&amp;(r.el=t),r.el&amp;&amp;Object(o.a)(r.el).length>1){var s=[];return Object(o.a)(r.el).each((function(t){var n=Object(l.e)({},r,{el:t});s.push(new e(n))})),s}var p=this;p.__swiper__=!0,p.support=c(),p.device=u({userAgent:r.userAgent}),p.browser=d(),p.eventsListeners={},p.eventsAnyListeners=[],&quot;undefined&quot;===typeof p.modules&amp;&amp;(p.modules={}),Object.keys(p.modules).forEach((function(e){var t=p.modules[e];if(t.params){var n=Object.keys(t.params)[0],a=t.params[n];if(&quot;object&quot;!==typeof a||null===a)return;if([&quot;navigation&quot;,&quot;pagination&quot;,&quot;scrollbar&quot;].indexOf(n)>=0&amp;&amp;!0===r[n]&amp;&amp;(r[n]={auto:!0}),!(n in r)||!(&quot;enabled&quot;in a))return;!0===r[n]&amp;&amp;(r[n]={enabled:!0}),&quot;object&quot;!==typeof r[n]||&quot;enabled&quot;in r[n]||(r[n].enabled=!0),r[n]||(r[n]={enabled:!1})}}));var h=Object(l.e)({},C);return p.useParams(h),p.params=Object(l.e)({},h,D,r),p.originalParams=Object(l.e)({},p.params),p.passedParams=Object(l.e)({},r),p.params&amp;&amp;p.params.on&amp;&amp;Object.keys(p.params.on).forEach((function(e){p.on(e,p.params.on[e])})),p.params&amp;&amp;p.params.onAny&amp;&amp;p.onAny(p.params.onAny),p.$=o.a,Object(l.e)(p,{enabled:p.params.enabled,el:t,classNameNames:[],slides:Object(o.a)(),slidesGrid:[],snapGrid:[],slidesSizesGrid:[],isHorizontal:function(){return&quot;horizontal&quot;===p.params.direction},isVertical:function(){return&quot;vertical&quot;===p.params.direction},activeIndex:0,realIndex:0,isBeginning:!0,isEnd:!1,translate:0,previousTranslate:0,progress:0,velocity:0,animating:!1,allowSlideNext:p.params.allowSlideNext,allowSlidePrev:p.params.allowSlidePrev,touchEvents:function(){var e=[&quot;touchstart&quot;,&quot;touchmove&quot;,&quot;touchend&quot;,&quot;touchcancel&quot;],t=[&quot;mousedown&quot;,&quot;mousemove&quot;,&quot;mouseup&quot;];return p.support.pointerEvents&amp;&amp;(t=[&quot;pointerdown&quot;,&quot;pointermove&quot;,&quot;pointerup&quot;]),p.touchEventsTouch={start:e[0],move:e[1],end:e[2],cancel:e[3]},p.touchEventsDesktop={start:t[0],move:t[1],end:t[2]},p.support.touch||!p.params.simulateTouch?p.touchEventsTouch:p.touchEventsDesktop}(),touchEventsData:{isTouched:void 0,isMoved:void 0,allowTouchCallbacks:void 0,touchStartTime:void 0,isScrolling:void 0,currentTranslate:void 0,startTranslate:void 0,allowThresholdMove:void 0,focusableElements:p.params.focusableElements,lastClickTime:Object(l.h)(),clickTimeout:void 0,velocities:[],allowMomentumBounce:void 0,isTouchEvent:void 0,startMoving:void 0},allowClick:!0,allowTouchMove:p.params.allowTouchMove,touches:{startX:0,startY:0,currentX:0,currentY:0,diff:0},imagesToLoad:[],imagesLoaded:0}),p.useModules(),p.emit(&quot;_swiper&quot;),p.params.init&amp;&amp;p.init(),p}">
                            <Swiper
                                breakpoints={{
                                    0: {
                                        spaceBetween: 10,
                                        slidesPerView: 1,
                                    },
                                    425: {
                                        spaceBetween: 10,
                                        slidesPerView: 2,
                                    },
                                    768: {
                                        spaceBetween: 10,
                                        slidesPerView: 3,
                                    },
                                    1024: {
                                        spaceBetween: 10,
                                        slidesPerView: 4,
                                    },
                                    1400: {
                                        spaceBetween: 10,
                                        slidesPerView: 5,
                                    }
                                }}
                                loop={true}
                                grabCursor={true}
                                modules={[Autoplay]}
                                autoplay={{
                                    delay: 4000,
                                    disableOnInteraction: false,
                                }}
                                className="swiper-wrapper"
                                id="swiper-wrapper-dc268a26da2810dd10"
                                aria-live="polite"
                            >
                                {articles.length && articles.map((article) => (
                                    <SwiperSlide key={article.id} className="swiper-slide d-flex align-items-center justify-content-center swiper-slide-active" style={{ width: "323.542px", marginLeft: "20px" }}>
                                        <ArticlesBox {...article} />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}
