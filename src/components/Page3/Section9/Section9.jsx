import "./Section9.scss"
import { Photo } from "../../../Images.js"
import { Link } from "react-router-dom"
import { Swiper, SwiperSlide } from "swiper/react"
import { FreeMode, Mousewheel } from "swiper/modules"
import "swiper/css"
import "swiper/css/free-mode"


const review = {
    pfp: Photo.PfpPage1Section9Image,
    name: "Илья М.",
    stat: "Знаток города 2 уровня",
    stars: Photo.StarsPage1Section9Image,
    date: "23 сентября 2020",
    text: "Магазин очень понравился, быстро обслужили, персонал хорошо знает свой товар, вежливо и грамотно консультирует, ассортимент внушительный, а если чего нет сейчас в наличии, то можно без проблем заказать на сайте, так что всем рекомендую!"
}
const reps = [
    {img: Photo.Page1Section9Image1},
    {img: Photo.Page1Section9Image2},
    {img: Photo.Page1Section9Image3, ...review},
    {img: Photo.Page1Section9Image4, ...review},
    {img: Photo.Page1Section9Image5},
    {img: Photo.Page1Section9Image1},
    {img: Photo.Page1Section9Image2},
    {img: Photo.Page1Section9Image3, ...review},
    {img: Photo.Page1Section9Image4, ...review},
    {img: Photo.Page1Section9Image5},
    {img: Photo.Page1Section9Image1},
    {img: Photo.Page1Section9Image2},
    {img: Photo.Page1Section9Image3, ...review},
    {img: Photo.Page1Section9Image4, ...review},
    {img: Photo.Page1Section9Image5},
    {img: Photo.Page1Section9Image1},
    {img: Photo.Page1Section9Image2},
    {img: Photo.Page1Section9Image3, ...review},
    {img: Photo.Page1Section9Image4, ...review},
    {img: Photo.Page1Section9Image5},
    {img: Photo.Page1Section9Image1},
    {img: Photo.Page1Section9Image2},
    {img: Photo.Page1Section9Image3, ...review},
    {img: Photo.Page1Section9Image4, ...review},
    {img: Photo.Page1Section9Image5},
    {img: Photo.Page1Section9Image1},
    {img: Photo.Page1Section9Image2},
    {img: Photo.Page1Section9Image3, ...review},
    {img: Photo.Page1Section9Image4, ...review},
    {img: Photo.Page1Section9Image5},
    {img: Photo.Page1Section9Image1},
    {img: Photo.Page1Section9Image2},
    {img: Photo.Page1Section9Image3, ...review},
    {img: Photo.Page1Section9Image4, ...review},
    {img: Photo.Page1Section9Image5},
    {img: Photo.Page1Section9Image1},
    {img: Photo.Page1Section9Image2},
    {img: Photo.Page1Section9Image3, ...review},
    {img: Photo.Page1Section9Image4, ...review},
    {img: Photo.Page1Section9Image5},
    {img: Photo.Page1Section9Image6},
    {img: Photo.Page1Section9Image7},
    {img: Photo.Page1Section9Image8, ...review},
    {img: Photo.Page1Section9Image9},
    {img: Photo.Page1Section9Image10},
    {img: Photo.Page1Section9Image11},
    {img: Photo.Page1Section9Image12, ...review},
    {img: Photo.Page1Section9Image6},
    {img: Photo.Page1Section9Image7},
    {img: Photo.Page1Section9Image8, ...review},
    {img: Photo.Page1Section9Image9},
    {img: Photo.Page1Section9Image10},
    {img: Photo.Page1Section9Image11},
    {img: Photo.Page1Section9Image12, ...review},
    {img: Photo.Page1Section9Image6},
    {img: Photo.Page1Section9Image7},
    {img: Photo.Page1Section9Image8, ...review},
    {img: Photo.Page1Section9Image9},
    {img: Photo.Page1Section9Image10},
    {img: Photo.Page1Section9Image11},
    {img: Photo.Page1Section9Image12, ...review},
    {img: Photo.Page1Section9Image6},
    {img: Photo.Page1Section9Image7},
    {img: Photo.Page1Section9Image8, ...review},
    {img: Photo.Page1Section9Image9},
    {img: Photo.Page1Section9Image10},
    {img: Photo.Page1Section9Image11},
    {img: Photo.Page1Section9Image12, ...review},
    {img: Photo.Page1Section9Image6},
    {img: Photo.Page1Section9Image7},
    {img: Photo.Page1Section9Image8, ...review},
    {img: Photo.Page1Section9Image9},
    {img: Photo.Page1Section9Image10},
    {img: Photo.Page1Section9Image11},
    {img: Photo.Page1Section9Image12, ...review},
    {img: Photo.Page1Section9Image6},
    {img: Photo.Page1Section9Image7},
    {img: Photo.Page1Section9Image8, ...review},
    {img: Photo.Page1Section9Image9},
    {img: Photo.Page1Section9Image10},
    {img: Photo.Page1Section9Image11},
    {img: Photo.Page1Section9Image12, ...review},
    {img: Photo.Page1Section9Image6},
    {img: Photo.Page1Section9Image7},
    {img: Photo.Page1Section9Image8, ...review},
    {img: Photo.Page1Section9Image9},
    {img: Photo.Page1Section9Image10},
    {img: Photo.Page1Section9Image11},
    {img: Photo.Page1Section9Image12, ...review},
    {img: Photo.Page1Section9Image6},
    {img: Photo.Page1Section9Image7},
    {img: Photo.Page1Section9Image8, ...review},
    {img: Photo.Page1Section9Image9},
    {img: Photo.Page1Section9Image10},
    {img: Photo.Page1Section9Image11},
    {img: Photo.Page1Section9Image12, ...review},
]
const half = reps.length/2;
const row1 = reps.slice(0, half)
const row2 = reps.slice(half)

export default function Section9(){

    return(
        <>
            <section className="page1_section9">
                <div className="page1_section9_inside">
                    <div className="page1_section9_inside_title">
                        <h1>1 600+ ПОЛОЖИТЕЛЬНЫХ ОЦЕНОК ПОКУПАТЕЛЕЙ О ПРОДУКТАХ KUGOO</h1>
                        <Link to="">Читать отзывы на Янедкс <img src={Photo.ArrowPage1Section9Image} alt="" /></Link>
                    </div>
                    <Swiper
                            className="page1_section9_inside_swiper"
                            modules={[FreeMode, Mousewheel]}
                            slidesPerView="auto"
                            grabCursor={true}
                            resistanceRatio={0.85}
                            freeMode={{
                                enabled: true,
                                momentum: true,
                                sticky: false,
                                momentumVelocityRatio: 1,
                                momentumRatio: 0.3,
                                minimumVelocity: 0.02,
                            }}
                    >
                        <SwiperSlide>
                            <div className="page1_section9_inside_swiper_main">
                                <div className="page1_section9_inside_swiper_main_row">
                                    {row1.map((meow, index) => (
                                        <article key={index} className="page1_section9_inside_swiper_main_row_art">
                                            <img src={meow.img} alt="" draggable={false} className="page1_section9_inside_swiper_main_row_art_bg_img"/>
                                            <div className="page1_section9_inside_swiper_main_row_art_rev">
                                                <div className="page1_section9_inside_swiper_main_row_art_rev_profile">
                                                    <img src={meow.pfp} alt="" />
                                                    <div>
                                                        <h4>{meow.name}</h4>
                                                        <p>{meow.stat}</p>
                                                    </div>
                                                </div>
                                                <div className="page1_section9_inside_swiper_main_row_art_rev_rate">
                                                    <img src={meow.stars} alt="" />
                                                    <p>{meow.date}</p>
                                                </div>
                                                <p className="page1_section9_inside_swiper_main_row_art_rev_text">{meow.text}</p>
                                            </div>
                                        </article>
                                    ))}
                                </div>
                                <div className="page1_section9_inside_swiper_main_row">
                                    {row2.map((meow, index) => (
                                        <article key={index} className="page1_section9_inside_swiper_main_row_art">
                                            <img src={meow.img} alt="" draggable={false} className="page1_section9_inside_swiper_main_row_art_bg_img"/>
                                            <div className="page1_section9_inside_swiper_main_row_art_rev">
                                                <div className="page1_section9_inside_swiper_main_row_art_rev_profile">
                                                    <img src={meow.pfp} alt="" />
                                                    <div>
                                                        <h4>{meow.name}</h4>
                                                        <p>{meow.stat}</p>
                                                    </div>
                                                </div>
                                                <div className="page1_section9_inside_swiper_main_row_art_rev_rate">
                                                    <img src={meow.stars} alt="" />
                                                    <p>{meow.date}</p>
                                                </div>
                                                <p className="page1_section9_inside_swiper_main_row_art_rev_text">{meow.text}</p>
                                            </div>
                                        </article>
                                    ))}
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </section>
        </>
    )
}