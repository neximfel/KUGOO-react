import "./Section3.scss"
import { Photo } from "../../../Images.js"
import { Link } from "react-router-dom"
import { useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from 'swiper/modules';
import "swiper/css"
import 'swiper/css/navigation';

const punkts = [
    {title: "Гарантию на товары 1 месяц и возможность приобрести годовую гарантию"},
    {title: "Медиаконтент, который можно разместить на своем сайте и соцсетях"},
    {title: "Удобные способы оплаты — наличный и безналичный расчет"},
    {title: "Отсутствие демпинга на рынке за счет контролируемой МРЦ"},
]
const boxes = [
    {
        title: <>До <span>25%</span></>,
        text: `ваша прибыль с продажи \n единицы товара Kugoo`
    },
    {
        title: <>от <span>3 ШТ.</span></>,
        text: `минимальная \n оптовая партия`
    },
]
const certifs = [
    {img: Photo.CertificatePage3Section3Image},
    {img: Photo.CertificatePage3Section3Image},
    {img: Photo.CertificatePage3Section3Image},
    {img: Photo.CertificatePage3Section3Image},
    {img: Photo.CertificatePage3Section3Image},
    {img: Photo.CertificatePage3Section3Image},
    {img: Photo.CertificatePage3Section3Image},
    {img: Photo.CertificatePage3Section3Image},
]

export default function Section3(){
    return(
        <>
            <section className="page3_section3">
                <div className="page3_section3_inside">
                    <div className="page3_section3_inside_left">
                        <div className="page3_section3_inside_left_title">
                            <h1 className="title_h1">ВЫБИРАЙТЕ ПОПУЛЯРНЫЕ ТОВАРЫ БЕЗ НАЦЕНОК ПОСРЕДНИКОВ</h1>
                            <p>являясь официальным дилером Kugoo в России</p>
                        </div>
                        <div className="page3_section3_inside_left_punkts">
                            <h4>Сотрудничая с нами, вы получите:</h4>
                            <div className="page3_section3_inside_left_punkts_cats">
                                {punkts.map((meow, index) => (
                                    <div key={index}>
                                        <img src={Photo.CheckCirclePage2Section5Image} alt="" />
                                        <p>{meow.title}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="page3_section3_inside_left_boxes">
                            {boxes.map((meow, index) => (
                                <div key={index}>
                                    <h3>{meow.title}</h3>
                                    <p>{meow.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="page3_section3_inside_right">
                        <div className="page3_section3_inside_right_percent">
                            <h2>93%</h2>
                            <p>партнеров  становятся постоянными, благодаря нашему подходу</p>
                        </div>
                        <Swiper
                            modules={[Navigation]}
                            navigation={true}
                            speed={800}
                            slidesPerView="1"
                            spaceBetween={0}
                            className="page3_section3_inside_right_swiper"
                        >
                            {certifs.map((meow, index) => (
                                <SwiperSlide key={index}>
                                    <div>
                                        <img src={meow.img} alt="" />
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </section>
        </>
    )
}