import "./Section11.scss"
import { Photo } from "../../../Images.js"
import { Link } from "react-router-dom"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from 'swiper/modules';
import "swiper/css"
import 'swiper/css/navigation';

const art = [
    {
        img: Photo.Page1Section11Image1,
        title: "Как правильно заряжать электросамокат",
        text: "Один из первых вопросов, который волнует после покупки электросамоката.",
        date: "01.09.2021",
        views: "53"
    },
    {
        img: Photo.Page1Section11Image2,
        title: "Как правильно заряжать электросамокат",
        text: "Один из первых вопросов, который волнует после покупки электросамоката.",
        date: "01.09.2021",
        views: "53"
    },
    {
        img: Photo.Page1Section11Image3,
        title: "Как правильно заряжать электросамокат",
        text: "Один из первых вопросов, который волнует после покупки электросамоката.",
        date: "01.09.2021",
        views: "53"
    },
    {
        img: Photo.Page1Section11Image4,
        title: "Как правильно заряжать электросамокат",
        text: "Один из первых вопросов, который волнует после покупки электросамоката.",
        date: "01.09.2021",
        views: "53"
    },
    {
        img: Photo.Page1Section11Image1,
        title: "Как правильно заряжать электросамокат",
        text: "Один из первых вопросов, который волнует после покупки электросамоката.",
        date: "01.09.2021",
        views: "53"
    },
    {
        img: Photo.Page1Section11Image2,
        title: "Как правильно заряжать электросамокат",
        text: "Один из первых вопросов, который волнует после покупки электросамоката.",
        date: "01.09.2021",
        views: "53"
    },
    {
        img: Photo.Page1Section11Image3,
        title: "Как правильно заряжать электросамокат",
        text: "Один из первых вопросов, который волнует после покупки электросамоката.",
        date: "01.09.2021",
        views: "53"
    },
    {
        img: Photo.Page1Section11Image4,
        title: "Как правильно заряжать электросамокат",
        text: "Один из первых вопросов, который волнует после покупки электросамоката.",
        date: "01.09.2021",
        views: "53"
    },
    {
        img: Photo.Page1Section11Image1,
        title: "Как правильно заряжать электросамокат",
        text: "Один из первых вопросов, который волнует после покупки электросамоката.",
        date: "01.09.2021",
        views: "53"
    },
    {
        img: Photo.Page1Section11Image2,
        title: "Как правильно заряжать электросамокат",
        text: "Один из первых вопросов, который волнует после покупки электросамоката.",
        date: "01.09.2021",
        views: "53"
    },
    {
        img: Photo.Page1Section11Image3,
        title: "Как правильно заряжать электросамокат",
        text: "Один из первых вопросов, который волнует после покупки электросамоката.",
        date: "01.09.2021",
        views: "53"
    },
    {
        img: Photo.Page1Section11Image4,
        title: "Как правильно заряжать электросамокат",
        text: "Один из первых вопросов, который волнует после покупки электросамоката.",
        date: "01.09.2021",
        views: "53"
    },
]

export default function Section11(){

    return(
        <>
            <section className="page1_section11">
                <div className="page1_section11_inside">
                    <h1>НОВЫЕ СТАТЬИ В БЛОГЕ</h1>
                    <Swiper
                        modules={[Navigation]}
                        navigation={true}
                        speed={800}
                        slidesPerView="auto"
                        spaceBetween={30}
                        className="page1_section11_inside_swiper"
                    >
                        {art.map((meow, index) => (
                            <SwiperSlide key={index}>
                                <Link to="" className="page1_section11_inside_swiper_art">
                                    <div className="page1_section11_inside_swiper_art_top" style={{backgroundImage: `url(${meow.img})`}}></div>
                                    <div className="page1_section11_inside_swiper_art_bot">
                                        <h3>{meow.title}</h3>
                                        <p>{meow.text}</p>
                                        <div className="page1_section11_inside_swiper_art_bot_stats">
                                            <div><img src={Photo.DatePage1Section11Image} alt="" /><p>{meow.date}</p></div>
                                            <div><img src={Photo.ViewsPage1Section11Image} alt="" /><p>{meow.views}</p></div>
                                        </div>
                                    </div>
                                </Link>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </section>
        </>
    )
}