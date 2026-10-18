import "./Section6.scss"
import { Photo } from "../../../Images.js"
import { Link } from "react-router-dom"
import { useState } from "react"

const buttons_nav = [
    {title: "Гидроизоляция"},
    {title: "Настройка"},
    {title: "Гидроизоляция + настройка"},
]
const page1 = [
    {title: "Kogoo S3", price: "2 790 ₽"},
    {title: "Kogoo S3 Pro", price: "2 790 ₽"},
    {title: "Kogoo S1", price: "2 790 ₽"},
    {title: "Kogoo M2 Pro", price: "2 790 ₽"},
    {title: "Kogoo HX", price: "2 790 ₽"},
    {title: "Kogoo HX Pro", price: "2 790 ₽"},
    {title: "Kogoo ES3", price: "3 490 ₽"},
    {title: "Kogoo G-Max", price: "3 490 ₽"},
    {title: "Kogoo C1", price: "3 490 ₽"},        
    {title: "Kogoo M2", price: "2 790 ₽"},
    {title: "Kogoo Max Speed", price: "2 790 ₽"},
    {title: "Kogoo M4", price: "2 790 ₽"},
    {title: "Kogoo M4 Pro 13/17/18 Ah", price: "2 790 ₽"},
    {title: "Kogoo M5", price: "2 790 ₽"},
    {title: "Kogoo G1", price: "2 790 ₽"},
    {title: "Kogoo G2 Pro", price: "3 490 ₽"},
    {title: "Kogoo G-Booster", price: "3 490 ₽"},
    {title: "Kogoo GX", price: "3 490 ₽"},
]
const page2 = [
    {title: "Kogoo S3", price: "3 790 ₽"},
    {title: "Kogoo S3 Pro", price: "3 790 ₽"},
    {title: "Kogoo S1", price: "3 790 ₽"},
    {title: "Kogoo M2 Pro", price: "3 790 ₽"},
    {title: "Kogoo HX", price: "3 790 ₽"},
    {title: "Kogoo HX Pro", price: "3 790 ₽"},
    {title: "Kogoo ES3", price: "4 490 ₽"},
    {title: "Kogoo G-Max", price: "4 490 ₽"},
    {title: "Kogoo C1", price: "4 490 ₽"},
    {title: "Kogoo M2", price: "3 790 ₽"},
    {title: "Kogoo Max Speed", price: "3 790 ₽"},
    {title: "Kogoo M4", price: "3 790 ₽"},
    {title: "Kogoo M4 Pro 13/17/18 Ah", price: "3 790 ₽"},
    {title: "Kogoo M5", price: "3 790 ₽"},
    {title: "Kogoo G1", price: "3 790 ₽"},
    {title: "Kogoo G2 Pro", price: "4 490 ₽"},
    {title: "Kogoo G-Booster", price: "4 490 ₽"},
    {title: "Kogoo GX", price: "4 490 ₽"},
]
const page3 = [
    {title: "Kogoo S3", price: "4 790 ₽"},
    {title: "Kogoo S3 Pro", price: "4 790 ₽"},
    {title: "Kogoo S1", price: "4 790 ₽"},
    {title: "Kogoo M2 Pro", price: "4 790 ₽"},
    {title: "Kogoo HX", price: "4 790 ₽"},
    {title: "Kogoo HX Pro", price: "4 790 ₽"},
    {title: "Kogoo ES3", price: "5 490 ₽"},
    {title: "Kogoo G-Max", price: "5 490 ₽"},
    {title: "Kogoo C1", price: "5 490 ₽"},
    {title: "Kogoo M2", price: "4 790 ₽"},
    {title: "Kogoo Max Speed", price: "4 790 ₽"},
    {title: "Kogoo M4", price: "4 790 ₽"},
    {title: "Kogoo M4 Pro 13/17/18 A h", price: "4 790 ₽"},
    {title: "Kogoo M5", price: "4 790 ₽"},
    {title: "Kogoo G1", price: "4 790 ₽"},
    {title: "Kogoo G2 Pro", price: "5 490 ₽"},
    {title: "Kogoo G-Booster", price: "5 490 ₽"},
    {title: "Kogoo GX", price: "5 490 ₽"},
]
const all_pages = [page1, page2, page3]

export default function Section6(){

    const [isCurrent, setIsCurrent] = useState(0)
    
    return(
        <>
            <section className="page2_section6">
                <div className="page2_section6_inside">
                    <div className="page2_section6_inside_title">
                        <h1>СТОИМОСТЬ ГИДРОИЗОЛЯЦИИ И НАСТРОЙКИ</h1>
                        <p>Для версии MAX и VIP гидроизоляция и настройка — бесплатно</p>
                    </div>
                    <div className="page2_section6_inside_buttons">
                        {buttons_nav.map((meow, index) => (
                            <button
                                key={index}
                                className={`nav_section_buttons ${isCurrent === index ? "active" : ""}`}
                                onClick={() => setIsCurrent(index)}
                            >{meow.title}</button>
                        ))}
                    </div>
                    <div className="page2_section6_inside_main">
                        {all_pages[isCurrent].map((meow, index) => (
                            <div className="page2_section6_inside_main_cell" key={index}>
                                <p>{meow.title}</p>
                                <h1>{meow.price}</h1>
                            </div>
                        ))}
                    </div>
                    <button className="purple_button">Заказать гидроизоляцию</button>
                </div>
            </section>
        </>
    )
}