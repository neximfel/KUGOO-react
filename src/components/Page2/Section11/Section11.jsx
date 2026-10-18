import "./Section11.scss"
import { Photo } from "../../../Images.js"
import { Link } from "react-router-dom"
import { useState } from "react"

const geo = [
    {city: "МОСКВА", place: "Ткацкая улица, 5с16", time: "Пн - Вс 10:00 - 19:00", number: "+7 (499) 350-76-92", link: "https://maps.app.goo.gl/XT6FQNeKo1NWhPpj9"},
    {city: "САНКТ-ПЕТЕРБУРГ", place: "Фрунзе улица, 2", time: "Пн - Вс 10:00 - 20:00", number: "+7 (499) 350-76-92", link: "https://maps.app.goo.gl/rr8ncPhhSseRHcQE7"},
    {city: "КРАСНОДАР", place: "Восточно-Кругликовская улица, 86", time: "Вт - Сб 10:00 - 20:00", number: "+7 (499) 350-76-92", link: "https://maps.app.goo.gl/azz85aAM5MqCrUzMA"},
]

export default function Section11(){
    return(
        <>
            <section className="page2_section11">
                <div className="page2_section11_inside">
                    <h1 className="title_h1">АДРЕСА СЕРВИСНЫХ ЦЕНТРОВ</h1>
                    <div className="page2_section11_inside_container">
                        <div className="page2_section11_inside_container_main">
                            <div className="page2_section11_inside_container_main_columns">
                                {geo.map((meow, index) => (
                                    <div className="page2_section11_inside_container_main_columns_column" key={index}>
                                        <h2>{meow.city}</h2>
                                        <div className="page2_section11_inside_container_main_columns_column_stat">
                                            <img src={Photo.GeoPage2Section11Image} alt="" />
                                            <div className="page2_section11_inside_container_main_columns_column_stat_text">
                                                <h4>{meow.place}</h4>
                                                <p>{meow.time}</p>
                                                <a className="link_purple_a" href={meow.link} target="_blank">Смотреть на карте</a>
                                            </div>
                                        </div>
                                        <div className="page2_section11_inside_container_main_columns_column_number">
                                            <img src={Photo.PhonePage2Section11Image} alt="" />
                                            <h3>{meow.number}</h3>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="page2_section11_inside_container_main_warn">
                                <img src={Photo.WarnPage2Section11Image} alt="" />
                                <p>При себе иметь паспорт для прохождения через пропускной пункт</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}