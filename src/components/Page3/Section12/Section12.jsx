import "./Section12.scss"
import { Photo } from "../../../Images.js"
import { Link } from "react-router-dom"
import { useState } from "react"

const punkts = [
    {title: "Ознакомитесь с актуальным каталогом;"},
    {title: "Узнаете, какие категории товаров пользуются наибольшим спросом;"},
    {title: "Получите доступ к выгодным ценам на закупку оптом."},
]

export default function Section12(){
    return(
        <>
            <section className="page3_section12">
                <div className="page3_section12_inside">
                    <div className="page3_section12_inside_field">
                        <div className="page3_section12_inside_field_left">
                            <h1 className="title_h1">ОБСУДИТЕ ИНДИВИДУАЛЬНОЕ КОММЕРЧЕСКОЕ ПРЕДЛОЖЕНИЕ 
                                С ЛИЧНЫМ МЕНЕДЖЕРОМ
                            </h1>
                            <div className="page3_section12_inside_fielf_left_punkts">
                                {punkts.map((meow, index) => (
                                    <div key={index} className="page3_section12_inside_fielf_left_punkts_box">
                                        <img src={Photo.CheckCirclePage2Section5Image} alt="" />
                                        <p>{meow.title}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="page3_section12_inside_field_right">
                            <div className="page3_section12_inside_field_right_title">
                                <h3>ПОЛУЧИТЕ ПРАЙС-ЛИСТ С ОПТОВЫМИ ЦЕНАМИ</h3>
                                <p>а также рассчитаем вашу прибыль от продажи товаров Kugoo</p>
                            </div>
                            <input className="page3_section12_inside_field_right_phone" type="phone" placeholder="+7 ( _ _ _ ) _ _ - _ _ - _ _"/>
                            <button>Скачать прайс-лист</button>
                            <div className="page3_section12_inside_field_right_checkbox">
                                <input type="checkbox" />
                                <p>Нажимая на кнопку, вы соглашаетесь на обработку персональных данных и <span>политикой конфиденциальности</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}