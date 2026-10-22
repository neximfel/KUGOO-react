import "./Section2.scss"
import { Photo } from "../../../Images.js"
import { Link } from "react-router-dom"
import { useState } from "react"

const punkts1 = [
    {punkt: <><p><b>Понять </b>подходит ли вам конкретная модель;</p></>},
    {punkt: <><p><b>Испытать </b>самокат в «реальной жизни»;</p></>},
    {punkt: <><p><b>Оценить </b>удобство хранения и эксплуатации;</p></>},
    {punkt: <><p><b>Узнать </b>реальные характеристики и возможности модели.</p></>},
]
const punkts2 = [
    {punkt: "Как подготовить самокат к поездке;"},
    {punkt: "Как «завести» самокат;"},
    {punkt: "Как вести себя во время поездки и обезопасить себя и окружающих;"},
    {punkt: "Как складывать и раскладывать электросамокат;"},
    {punkt: "Как ухаживать за своим девайсом."},
]

export default function Section2(){
    return(
        <>
            <section className="page4_section2">
                <div className="page4_section2_inside">
                    <div className="page4_section2_inside_field">
                        <div className="page4_section2_inside_field_top">
                            <div className="page4_section2_inside_field_top_text">
                                <h1 className="title_h1">ОПРЕДЕЛИТЕ МАКСИМАЛЬНО ПОДХОДЯЩУЮ ВАМ 
                                    МОДЕЛЬ НЕ ТЕОРЕТИЧЕСКИ, А НА ПРАКТИКЕ</h1>
                                <div className="page4_section2_inside_field_top_text_punkts">
                                    <p className="page4_section2_inside_field_top_text_punkts_subtitle">
                                        Тест-драйв поможет:</p>
                                    <div className="page4_section2_inside_field_top_text_punkts_boxes">
                                        {punkts1.map((meow, index) => (
                                            <div key={index}>
                                                <img src={Photo.CheckCirclePage2Section5Image} alt="" />
                                                <p>{meow.punkt}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="page4_section2_inside_field_bot">
                            <div className="page4_section2_inside_field_bot_text">
                                <h1 className="title_h1">НАУЧИМ ПРАВИЛЬНОЙ И БЕЗОПАСНОЙ ЕЗДЕ 
                                    В ГОРОДЕ ВАС ИЛИ ВАШЕГО РЕБЕНКА</h1>
                                <div className="page4_section2_inside_field_bot_text_punkts">
                                    <p className="page4_section2_inside_field_bot_text_punkts_subtitle">
                                        На обучении специалист расскажет:</p>
                                    <div className="page4_section2_inside_field_bot_text_punkts_boxes">
                                        {punkts2.map((meow, index) => (
                                            <div key={index}>
                                                <img src={Photo.CheckCirclePage2Section5Image} alt="" />
                                                <p>{meow.punkt}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}