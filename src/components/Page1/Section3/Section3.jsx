import "./Section3.scss"
import { Photo } from "../../../Images.js"
import { Link } from "react-router-dom"
import { useState } from "react"

const article = [
    {title: "ПОДБОР МОДЕЛИ ЭЛЕКТРОСАМОКАТА", descr: "Пройдите тест и выберите электросамокат по своим критериям", bg: Photo.LeftPage1Section3Background},
    {title: "СЕРВИСНОЕ ОБСЛУЖИВАНИЕ", descr: "Крупнейший сервисный центр в России для продуктов Kugoo", bg: Photo.RightPage1Section3Background},
]

export default function Section3(){

    return(
        <>
            <section className="section3">
                <div className="section3_container">
                    {article.map((meow, index) => (
                        <article className="section3_container_art"
                            style={{
                                backgroundImage: `url(${meow.bg})`,
                                backgroundSize: `contain`,
                                backgroundPosition: `right`,
                                backgroundRepeat: `no-repeat`,
                            }}
                        >
                            <div className="section3_container_art_inside">
                                <h2>{meow.title}</h2>
                                <p>{meow.descr}</p>
                                <Link>Подобрать модель <img src={Photo.ArrowPage1Section3Image} alt="" /></Link>
                            </div>
                        </article>
                    ))}
                </div>
            </section>
        </>
    )
}