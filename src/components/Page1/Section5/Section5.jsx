import "./Section5.scss"
import { Photo } from "../../../Images.js"
import { Link } from "react-router-dom"

const cards = [
    {title: "Робот-пылесос", price: "от 29 900 ₽", img: Photo.Page1Section5Background1},
    {title: "Электровелосипеды", price: "от 29 900 ₽", img: Photo.Page1Section5Background2},
    {title: "Весы", price: "от 29 900 ₽", img: Photo.Page1Section5Background3},
    {title: "Робот-пылесос", price: "от 29 900 ₽", img: Photo.Page1Section5Background1},
    {title: "Весы", price: "от 29 900 ₽", img: Photo.Page1Section5Background3},
    {title: "Робот-пылесос", price: "от 29 900 ₽", img: Photo.Page1Section5Background1},
    {title: "Электровелосипеды", price: "от 29 900 ₽", img: Photo.Page1Section5Background2},
    {title: "Весы", price: "от 29 900 ₽", img: Photo.Page1Section5Background3},
]

export default function Section5(){

    return(
        <>
            <section className="page1_section5">
                <div className="page1_section5_inside">
                    <div className="page1_section5_inside_title">
                        <h1>ПОПУЛЯРНЫЕ КАТЕГОРИИ</h1>
                        <div className="page1_section5_inside_title_proof">
                            <img src={Photo.PfpWomanPage1Section5image} alt="" />
                            <div>
                                <p>Менеджер ответит на любой ваш вопрос о продуктах Kugoo</p>
                                <Link to="">Задать вопрос</Link>
                            </div>
                        </div>
                    </div>
                    <div className="page1_section5_inside_main">
                        {cards.map((meow, index) => (
                            <article
                                key={index}
                                className="page1_section5_inside_main_art"
                                style={{
                                    backgroundImage: `url(${meow.img})`,
                                    backgroundSize: `contain`,
                                    backgroundPosition: `center`,
                                    backgroundRepeat: `no-repeat`,
                                }}
                            >
                                <div className="page1_section5_inside_main_art_text">
                                    <h4>{meow.title}</h4>
                                    <p>{meow.price}</p>
                                </div>
                            </article>
                        ))}
                    </div>
                    <Link to="" className="watch_all">Смотреть все</Link>
                </div>
            </section>
        </>
    )
}