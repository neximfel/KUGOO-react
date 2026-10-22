import "./Section1.scss"
import { Photo } from "../../../Images.js"
import { Link } from "react-router-dom"
import { useState } from "react"


export default function Section1(){
    return(
        <>
            <section className="page4_section1">
                <div className="page4_section1_inside">
                    <div className="page4_section1_inside_field">
                        <div className="page4_section1_inside_field_geo">
                            <img src={Photo.GeoPage4Section1Image} alt="" />
                            <p className="page4_section1_inside_field_geo_text">Восточно-Кругликовская улица, 86</p>
                            <p className="page4_section1_inside_field_geo_time">Вт - Сб 10:00 - 20:00</p>
                        </div>
                        <div className="page4_section1_inside_field_title">                            
                            <h1>ЗАПИШИТЕСЬ НА БЕСПЛАТНЫЙ ТЕСТ-ДРАЙВ ЭЛЕКТРОСАМОКАТОВ</h1>
                            <p>в Москве без ограничения по времени</p>
                        </div>
                        <div className="page4_section1_inside_field_punkts">
                            <div className="page4_section1_inside_field_punkts_box">
                                <div><img src={Photo.ScooterPage4Section1Image} alt="" /></div>
                                <p>Поймете, какая модель вам подходит</p>
                            </div>
                            <div className="page4_section1_inside_field_punkts_box">
                                <div><img src={Photo.EnergyPage4Section1Image} alt="" /></div>
                                <p>Проверите лучшие самокаты в деле</p>
                            </div>
                        </div>
                        <button>Записаться</button>
                    </div>
                </div>
            </section>
        </>
    )
}