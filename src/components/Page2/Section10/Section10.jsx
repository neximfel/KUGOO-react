import "./Section10.scss"
import { Photo } from "../../../Images.js"
import { Link } from "react-router-dom"
import { useState } from "react"

const quests = [
    {
        title: "Есть ли гарантия на ремонт?",
        answer: `нет`,
        svg: Photo.SvgPage1Section12Image,
    },
    {
        title: "Есть ли ваш сервисный центр в моем городе?",
        answer: `нет`,
        svg: Photo.SvgPage1Section12Image,
    },
    {
        title: "Как специалист может решить проблему удаленно?",
        answer: `никак`,
        svg: Photo.SvgPage1Section12Image,
    },
    {
        title: "Самокат был приобретен у вас, но я нахожусь в городе, где нет вашего сервисного центра. Как вы будете, в случае чего, ремонтировать мой самокат по гарантии?",
        answer: `не будем`,
        svg: Photo.SvgPage1Section12Image,
    },
    {
        title: "У меня сделана гидроизоляция. Мне придется заново платить за нее после ремонта?",
        answer: `да`,
        svg: Photo.SvgPage1Section12Image,
    },
    {
        title: "Можете ли вы сделать ремонт по гарантии, если самокат был куплен не в вашем магазине?",
        answer: `нет`,
        svg: Photo.SvgPage1Section12Image,
    },
    {
        title: "Как осуществляется сервисное обслуживание в моем городе? Где гарантия, что меня обслужат?",
        answer: `никак. гарантий нет`,
        svg: Photo.SvgPage1Section12Image,
    },
    {
        title: "Как специалист может решить проблему удаленно?",
        answer: `никак`,
        svg: Photo.SvgPage1Section12Image,
    },
    {
        title: "Осуществляете ли вы ремонт с выездом мастера на дом?",
        answer: `нет`,
        svg: Photo.SvgPage1Section12Image,
    },
    {
        title: "Какие запчасти используются при ремонте?",
        answer: `дешевые`,
        svg: Photo.SvgPage1Section12Image,
    },
    {
        title: "Какие документы выдаются после завершения ремонта?",
        answer: `поддельные`,
        svg: Photo.SvgPage1Section12Image,
    },
]


export default function Section10(){

    const [isOpen, setIsOpen] = useState()
    const toggleQuestion = (que) => {
        setIsOpen((prev) => (prev === que ? null : que))
    }

    return(
        <>
            <section className="page2_section10">
                <div className="page2_section10_inside">
                    <h1>ОТВЕЧАЕМ НА ВОПРОСЫ ПОЛЬЗОВАТЕЛЕЙ</h1>
                    <div className="page2_section10_inside_answers">
                        {quests.map((meow, index) => (
                            <article
                                className="page2_section10_inside_answers_art"
                            >
                                <div className="page2_section10_inside_answers_art_title" onClick={() => toggleQuestion(index)}>
                                    <h4>{meow.title}</h4>
                                    <img src={meow.svg} alt="" className={isOpen === index ? "opened" : ""}/>
                                </div>
                                <p
                                    className={isOpen === index ? "opened" : ""}
                                >{meow.answer}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}