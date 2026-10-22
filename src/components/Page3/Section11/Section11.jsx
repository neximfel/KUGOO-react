import "./Section11.scss"
import { Photo } from "../../../Images.js"
import { Link } from "react-router-dom"
import { useState } from "react"

const quests = [
    {
        title: "Когда происходит отправка заказа?",
        answer: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc varius.`,
        svg: Photo.SvgPage1Section12Image,
    },
    {
        title: "Есть ли гарантия на товары?",
        answer: `Lorem ipsum dolor sit amet, varius.`,
        svg: Photo.SvgPage1Section12Image,
    },
    {
        title: "Сколько стоит доставка товара до клиента?",
        answer: `Lorem ipsum consectetur adipiscing elit. Nunc varius.`,
        svg: Photo.SvgPage1Section12Image,
    },
    {
        title: "Проверяется ли товар перед отправкой?",
        answer: `Lorem ipsum dolor sit amet. Nunc varius.`,
        svg: Photo.SvgPage1Section12Image,
    },
    {
        title: "Какими ТК вы отправляете заказы?",
        answer: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
        svg: Photo.SvgPage1Section12Image,
    },
]


export default function Section11(){

    const [isOpen, setIsOpen] = useState()
    const toggleQuestion = (que) => {
        setIsOpen((prev) => (prev === que ? null : que))
    }

    return(
        <>
            <section className="page3_section11">
                <div className="page3_section11_inside">
                    <h1>ОТВЕЧАЕМ НА ВОПРОСЫ ПОЛЬЗОВАТЕЛЕЙ</h1>
                    <div className="page3_section11_inside_answers">
                        {quests.map((meow, index) => (
                            <article
                                className="page3_section11_inside_answers_art"
                            >
                                <div className="page3_section11_inside_answers_art_title" onClick={() => toggleQuestion(index)}>
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