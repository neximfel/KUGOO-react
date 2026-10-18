import "./Section8.scss"
import { Photo } from "../../../Images.js"
import { Link } from "react-router-dom"
import { useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from 'swiper/modules';
import "swiper/css"
import 'swiper/css/navigation';

const boxes = [
    {
        img: Photo.Page2Section8Image1,
        text: (
            <>
                Специалисты сервисного центра <span>подготавливают самокаты </span> 
                к отправке вам, <span>проводят техническое обслуживание, тюнингуют </span> 
                и при необходимости <span>ремонтируют </span> их
            </>
        )
    },
    {
        img: Photo.Page2Section8Image2,
        text: (
            <>
                Консультант сервисного центра <span>сопровождает вас </span> 
                на протяжении всего времени эксплуатации и <span>помогает решить 
                возникающие вопросы.</span>
            </>
        )
    },
]
const art = [
    {pfp: Photo.Pfp1Page2Section8Image, name: "Дмитрий Никитенко", job: "Руководитель сервисного центра"},
    {pfp: Photo.Pfp2Page2Section8Image, name: "Анастасия Горина", job: "Заместитель директора"},
    {pfp: Photo.Pfp3Page2Section8Image, name: "Юлия Кортич", job: "Менеджер по продажам"},
    {pfp: Photo.Pfp4Page2Section8Image, name: "Сергей Бойко", job: "Мастер по ремонту самокатов"},
    {pfp: Photo.Pfp5Page2Section8Image, name: "Дмитрий Никитенко", job: "Руководитель сервисного центра"},
    {pfp: Photo.Pfp1Page2Section8Image, name: "Дмитрий Никитенко", job: "Руководитель сервисного центра"},
    {pfp: Photo.Pfp2Page2Section8Image, name: "Анастасия Горина", job: "Заместитель директора"},
    {pfp: Photo.Pfp3Page2Section8Image, name: "Юлия Кортич", job: "Менеджер по продажам"},
    {pfp: Photo.Pfp4Page2Section8Image, name: "Сергей Бойко", job: "Мастер по ремонту самокатов"},
    {pfp: Photo.Pfp5Page2Section8Image, name: "Дмитрий Никитенко", job: "Руководитель сервисного центра"},
    {pfp: Photo.Pfp1Page2Section8Image, name: "Дмитрий Никитенко", job: "Руководитель сервисного центра"},
    {pfp: Photo.Pfp2Page2Section8Image, name: "Анастасия Горина", job: "Заместитель директора"},
    {pfp: Photo.Pfp3Page2Section8Image, name: "Юлия Кортич", job: "Менеджер по продажам"},
    {pfp: Photo.Pfp4Page2Section8Image, name: "Сергей Бойко", job: "Мастер по ремонту самокатов"},
    {pfp: Photo.Pfp5Page2Section8Image, name: "Дмитрий Никитенко", job: "Руководитель сервисного центра"},
    {pfp: Photo.Pfp1Page2Section8Image, name: "Дмитрий Никитенко", job: "Руководитель сервисного центра"},
    {pfp: Photo.Pfp2Page2Section8Image, name: "Анастасия Горина", job: "Заместитель директора"},
    {pfp: Photo.Pfp3Page2Section8Image, name: "Юлия Кортич", job: "Менеджер по продажам"},
    {pfp: Photo.Pfp4Page2Section8Image, name: "Сергей Бойко", job: "Мастер по ремонту самокатов"},
    {pfp: Photo.Pfp5Page2Section8Image, name: "Дмитрий Никитенко", job: "Руководитель сервисного центра"},
    {pfp: Photo.Pfp1Page2Section8Image, name: "Дмитрий Никитенко", job: "Руководитель сервисного центра"},
    {pfp: Photo.Pfp2Page2Section8Image, name: "Анастасия Горина", job: "Заместитель директора"},
    {pfp: Photo.Pfp3Page2Section8Image, name: "Юлия Кортич", job: "Менеджер по продажам"},
    {pfp: Photo.Pfp4Page2Section8Image, name: "Сергей Бойко", job: "Мастер по ремонту самокатов"},
    {pfp: Photo.Pfp5Page2Section8Image, name: "Дмитрий Никитенко", job: "Руководитель сервисного центра"},
    {pfp: Photo.Pfp1Page2Section8Image, name: "Дмитрий Никитенко", job: "Руководитель сервисного центра"},
    {pfp: Photo.Pfp2Page2Section8Image, name: "Анастасия Горина", job: "Заместитель директора"},
    {pfp: Photo.Pfp3Page2Section8Image, name: "Юлия Кортич", job: "Менеджер по продажам"},
    {pfp: Photo.Pfp4Page2Section8Image, name: "Сергей Бойко", job: "Мастер по ремонту самокатов"},
    {pfp: Photo.Pfp5Page2Section8Image, name: "Дмитрий Никитенко", job: "Руководитель сервисного центра"},
    {pfp: Photo.Pfp1Page2Section8Image, name: "Дмитрий Никитенко", job: "Руководитель сервисного центра"},
    {pfp: Photo.Pfp2Page2Section8Image, name: "Анастасия Горина", job: "Заместитель директора"},
    {pfp: Photo.Pfp3Page2Section8Image, name: "Юлия Кортич", job: "Менеджер по продажам"},
    {pfp: Photo.Pfp4Page2Section8Image, name: "Сергей Бойко", job: "Мастер по ремонту самокатов"},
    {pfp: Photo.Pfp5Page2Section8Image, name: "Дмитрий Никитенко", job: "Руководитель сервисного центра"},
    {pfp: Photo.Pfp1Page2Section8Image, name: "Дмитрий Никитенко", job: "Руководитель сервисного центра"},
    {pfp: Photo.Pfp2Page2Section8Image, name: "Анастасия Горина", job: "Заместитель директора"},
    {pfp: Photo.Pfp3Page2Section8Image, name: "Юлия Кортич", job: "Менеджер по продажам"},
    {pfp: Photo.Pfp4Page2Section8Image, name: "Сергей Бойко", job: "Мастер по ремонту самокатов"},
    {pfp: Photo.Pfp5Page2Section8Image, name: "Дмитрий Никитенко", job: "Руководитель сервисного центра"},
    {pfp: Photo.Pfp1Page2Section8Image, name: "Дмитрий Никитенко", job: "Руководитель сервисного центра"},
    {pfp: Photo.Pfp2Page2Section8Image, name: "Анастасия Горина", job: "Заместитель директора"},
    {pfp: Photo.Pfp3Page2Section8Image, name: "Юлия Кортич", job: "Менеджер по продажам"},
    {pfp: Photo.Pfp4Page2Section8Image, name: "Сергей Бойко", job: "Мастер по ремонту самокатов"},
    {pfp: Photo.Pfp5Page2Section8Image, name: "Дмитрий Никитенко", job: "Руководитель сервисного центра"},
]

export default function Section8(){
    return(
        <>
            <section className="page2_section8">
                <div className="page2_section8_top">
                    <h1>КОМАНДА СЕРВИСНОГО ЦЕНТРА</h1>
                    <div className="page2_section8_top_box">
                        {boxes.map((meow, index) => (
                            <div key={index}>
                                <img src={meow.img} alt="" />
                                <p>{meow.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <Swiper
                    modules={[Navigation]}
                    navigation={true}
                    speed={800}
                    slidesPerView="auto"
                    spaceBetween={30}
                    className="page2_section8_swiper"
                >
                    {art.map((meow, index) => (
                        <SwiperSlide key={index}>
                            <Link to="" className="page2_section8_swiper_art">
                                <img src={meow.pfp} alt="" />
                                <div className="page2_section8_swiper_art_text">
                                    <h4>{meow.name}</h4>
                                    <p>{meow.job}</p>
                                </div>
                            </Link>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </section>
        </>
    )
}