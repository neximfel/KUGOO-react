import "./Section8.scss"
import { Photo } from "../../../Images.js"
import { Link } from "react-router-dom"
import { useState } from "react"



export default function Section8(){
    return(
        <>
            <section className="page3_section8">
                <div className="page3_section8_inside">
                    <div className="page3_section8_inside_text">
                        <h1 className="title_h1">KUGOO — САМЫЙ ПОПУЛЯРНЫЙ БРЕНД ЭЛЕКТРОТРАНСПОРТА В РОССИИ</h1>
                        <p>Количество поисковых запросов от потенциальных клиентов в 2020 г. 
                            по сравнению с 2019 г. выросло в 2 раза согласно сервису оценки 
                            спроса и популярности.</p>
                        <p>Kugoo имеет лидирующие позиции среди конкурирующих брендов: спрос 
                            на продукцию от завода Jilong выше в несколько раз.</p>
                    </div>
                    <div className="page3_section8_inside_img">
                        <img src={Photo.BackgroundPage3section8Image} alt="" />
                    </div>
                </div>
            </section>
        </>
    )
}