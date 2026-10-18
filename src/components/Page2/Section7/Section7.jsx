import "./Section7.scss"
import { Photo } from "../../../Images.js"
import { Link } from "react-router-dom"
import { useState } from "react"


export default function Section7(){
    return(
        <>
            <section className="page2_section7">
                <div className="page2_section7_inside">
                    <div className="page2_section7_inside_field">
                        <div className="page2_section7_inside_field_title">
                            <h1>ЗАБЕРЕМ ВАШ СКАМОКАТ ДЛЯ РЕМОНТА И ВЕРНЕМ ОБРАТНО</h1>
                            <p>Доставка электросамокатов в/из сервисного центра курьером в Москве.</p>
                        </div>
                        <div className="page2_section7_inside_field_punkts">
                            <h5>Что дает гидроизоляция:</h5>
                            <div className="page2_section7_inside_field_punkts_rows">
                                <div>
                                    <img src={Photo.CheckCirclePage2Section5Image} alt="" />
                                    <p>600 руб. в одну сторону</p>
                                </div>
                                <div>
                                    <img src={Photo.CheckCirclePage2Section5Image} alt="" />
                                    <p>1000 руб. туда-обратно</p>
                                </div>
                            </div>
                        </div>
                        <button className="purple_button">Заказать доставку</button>
                    </div>
                </div>
            </section>
        </>
    )
}