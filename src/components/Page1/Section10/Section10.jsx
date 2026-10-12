import "./Section10.scss"
import { Photo } from "../../../Images.js"
import { Link } from "react-router-dom"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from 'swiper/modules';
import "swiper/css"
import 'swiper/css/navigation';

const videos = [
    {img: Photo.Video1Page1Section10Image, title: "Крутой и городской? Обзор Kugoo XS Plus"},
    {img: Photo.Video2Page1Section10Image, title: "Крутой и городской? Обзор Kugoo XS Plus"},
    {img: Photo.Video3Page1Section10Image, title: "Крутой и городской? Обзор Kugoo XS Plus"},
    {img: Photo.Video1Page1Section10Image, title: "Крутой и городской? Обзор Kugoo XS Plus"},
    {img: Photo.Video2Page1Section10Image, title: "Крутой и городской? Обзор Kugoo XS Plus"},
    {img: Photo.Video3Page1Section10Image, title: "Крутой и городской? Обзор Kugoo XS Plus"},
    {img: Photo.Video1Page1Section10Image, title: "Крутой и городской? Обзор Kugoo XS Plus"},
    {img: Photo.Video2Page1Section10Image, title: "Крутой и городской? Обзор Kugoo XS Plus"},
    {img: Photo.Video3Page1Section10Image, title: "Крутой и городской? Обзор Kugoo XS Plus"},
    {img: Photo.Video1Page1Section10Image, title: "Крутой и городской? Обзор Kugoo XS Plus"},
    {img: Photo.Video2Page1Section10Image, title: "Крутой и городской? Обзор Kugoo XS Plus"},
    {img: Photo.Video3Page1Section10Image, title: "Крутой и городской? Обзор Kugoo XS Plus"},
    {img: Photo.Video1Page1Section10Image, title: "Крутой и городской? Обзор Kugoo XS Plus"},
    {img: Photo.Video2Page1Section10Image, title: "Крутой и городской? Обзор Kugoo XS Plus"},
    {img: Photo.Video3Page1Section10Image, title: "Крутой и городской? Обзор Kugoo XS Plus"},
    {img: Photo.Video1Page1Section10Image, title: "Крутой и городской? Обзор Kugoo XS Plus"},
    {img: Photo.Video2Page1Section10Image, title: "Крутой и городской? Обзор Kugoo XS Plus"},
    {img: Photo.Video3Page1Section10Image, title: "Крутой и городской? Обзор Kugoo XS Plus"},
    {img: Photo.Video1Page1Section10Image, title: "Крутой и городской? Обзор Kugoo XS Plus"},
    {img: Photo.Video2Page1Section10Image, title: "Крутой и городской? Обзор Kugoo XS Plus"},
    {img: Photo.Video3Page1Section10Image, title: "Крутой и городской? Обзор Kugoo XS Plus"},
    {img: Photo.Video1Page1Section10Image, title: "Крутой и городской? Обзор Kugoo XS Plus"},
    {img: Photo.Video2Page1Section10Image, title: "Крутой и городской? Обзор Kugoo XS Plus"},
    {img: Photo.Video3Page1Section10Image, title: "Крутой и городской? Обзор Kugoo XS Plus"},
    {img: Photo.Video1Page1Section10Image, title: "Крутой и городской? Обзор Kugoo XS Plus"},
    {img: Photo.Video2Page1Section10Image, title: "Крутой и городской? Обзор Kugoo XS Plus"},
    {img: Photo.Video3Page1Section10Image, title: "Крутой и городской? Обзор Kugoo XS Plus"},
]


export default function Section10(){

    return(
        <>
            <section className="page1_section10">
                <div className="page1_section10_inside">
                    <div className="page1_section10_inside_top">
                        <div className="page1_section10_inside_top_title">
                            <div>
                                <h1>ВИДЕООБЗОРЫ</h1>
                                <Link to="">Смотреть все видеообзоры <img src={Photo.ArrowPage1Section10Image} alt="" /></Link>
                            </div>
                            <p>Узнайте больше о самокатах Kugoo и посмотрите сравнительные обзоры разных моделей на нашем YouTube-канале.</p>
                        </div>
                        <Swiper
                            modules={[Navigation]}
                            navigation={true}
                            speed={800}
                            slidesPerView="auto"
                            spaceBetween={30}
                            className="page1_section10_inside_top_swiper"
                        >
                            {videos.map((meow, index) => (
                                <SwiperSlide key={index}>
                                    <article className="page1_section10_top_art">
                                        <div className="page1_section10_top_art_video"
                                            style={{
                                                backgroundImage: `url(${meow.img})`,
                                            }}
                                        >
                                            <button><img src={Photo.TrianglePage1Section8Image} alt="" /></button>
                                        </div>
                                        <h5>{meow.title}</h5>
                                    </article>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </section>
        </>
    )
}