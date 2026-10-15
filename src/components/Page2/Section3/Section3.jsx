import "./Section3.scss"
import { Photo } from "../../../Images.js"
import { Link } from "react-router-dom"
import { useState } from "react"

const buttons_nav = [
    {title: "Электросамокаты"},
    {title: "Электровелосипеды"},
    {title: "Робот-пылесос"},
    {title: "Электровелосипеды"},
]
const product1 = [
    {name: "Kugoo Kirin M4", services:[
        {service: "", value: "1510"},{service: "", value: "1610"},{service: "", value: "1710"},{service: "", value: "1810"},{service: "", value: "1910"},{service: "", value: "2010"}
    ]},
    {name: "Kugoo Kirin S2", services:[
        {service: "", value: "2510"},{service: "", value: "2610"},{service: "", value: "2710"},{service: "", value: "2810"},{service: "", value: "2910"},{service: "", value: "3010"}
    ]},
    {name: "Kugoo Kirin M5", services:[
        {service: "", value: "3510"},{service: "", value: "3610"},{service: "", value: "3710"},{service: "", value: "3810"},{service: "", value: "3910"},{service: "", value: "4010"}
    ]},
    {name: "Kugoo Kirin M7", services:[
        {service: "", value: "4510"},{service: "", value: "4610"},{service: "", value: "4710"},{service: "", value: "4810"},{service: "", value: "4910"},{service: "", value: "5010"}
    ]},
    {name: "Kugoo Kirin M8", services:[
        {service: "", value: "5510"},{service: "", value: "5610"},{service: "", value: "5710"},{service: "", value: "5810"},{service: "", value: "5910"},{service: "", value: "6010"}
    ]},
]
const product2 = [
    {name: "Электровелосипед 1", services:[
        {service: "", value: "1520"},{service: "", value: "1620"},{service: "", value: "1720"},{service: "", value: "1820"},{service: "", value: "1920"},{service: "", value: "2020"}
    ]},
    {name: "Электровелосипед 2", services:[
        {service: "", value: "2520"},{service: "", value: "2620"},{service: "", value: "2720"},{service: "", value: "2820"},{service: "", value: "2920"},{service: "", value: "3020"}
    ]},
    {name: "Электровелосипед 3", services:[
        {service: "", value: "3520"},{service: "", value: "3620"},{service: "", value: "3720"},{service: "", value: "3820"},{service: "", value: "3920"},{service: "", value: "4020"}
    ]},
    {name: "Электровелосипед 4", services:[
        {service: "", value: "4520"},{service: "", value: "4620"},{service: "", value: "4720"},{service: "", value: "4820"},{service: "", value: "4920"},{service: "", value: "5020"}
    ]},
    {name: "Электровелосипед 5", services:[
        {service: "", value: "5520"},{service: "", value: "5620"},{service: "", value: "5720"},{service: "", value: "5820"},{service: "", value: "5920"},{service: "", value: "6020"}
    ]},
]
const product3 = [
    {name: "Робот-пылесос 1", services:[
        {service: "", value: "1530"},{service: "", value: "1630"},{service: "", value: "1730"},{service: "", value: "1830"},{service: "", value: "1930"},{service: "", value: "2030"}
    ]},
    {name: "Робот-пылесос 2", services:[
        {service: "", value: "2530"},{service: "", value: "2630"},{service: "", value: "2730"},{service: "", value: "2830"},{service: "", value: "2930"},{service: "", value: "3030"}
    ]},
    {name: "Робот-пылесос 3", services:[
        {service: "", value: "3530"},{service: "", value: "3630"},{service: "", value: "3730"},{service: "", value: "3830"},{service: "", value: "3930"},{service: "", value: "4030"}
    ]},
    {name: "Робот-пылесос 4", services:[
        {service: "", value: "4530"},{service: "", value: "4630"},{service: "", value: "4730"},{service: "", value: "4830"},{service: "", value: "4930"},{service: "", value: "5030"}
    ]},
    {name: "Робот-пылесос 5", services:[
        {service: "", value: "5530"},{service: "", value: "5630"},{service: "", value: "5730"},{service: "", value: "5830"},{service: "", value: "5930"},{service: "", value: "6030"}
    ]},
]
const product4 = [
    {name: "Электровелосипед 6", services:[
        {service: "", value: "1540"},{service: "", value: "1640"},{service: "", value: "1740"},{service: "", value: "1840"},{service: "", value: "1940"},{service: "", value: "2040"}
    ]},
    {name: "Электровелосипед 7", services:[
        {service: "", value: "2540"},{service: "", value: "2640"},{service: "", value: "2740"},{service: "", value: "2840"},{service: "", value: "2940"},{service: "", value: "3040"}
    ]},
    {name: "Электровелосипед 8", services:[
        {service: "", value: "3540"},{service: "", value: "3640"},{service: "", value: "3740"},{service: "", value: "3840"},{service: "", value: "3940"},{service: "", value: "4040"}
    ]},
    {name: "Электровелосипед 9", services:[
        {service: "", value: "4540"},{service: "", value: "4640"},{service: "", value: "4740"},{service: "", value: "4840"},{service: "", value: "4940"},{service: "", value: "5040"}
    ]},
    {name: "Электровелосипед 10", services:[
        {service: "", value: "5540"},{service: "", value: "5640"},{service: "", value: "5740"},{service: "", value: "5840"},{service: "", value: "5940"},{service: "", value: "6040"}
    ]},
]
const all = [product1, product2, product3, product4]

export default function Section3(){

    const navButtonSwitch = (index) => {
        setIsCurrent(index)
        setIsProduct(0)
    }

    const [isCurrent, setIsCurrent] = useState(0)
    const [isProduct, setIsProduct] = useState(0)

    return(
        <>
            <section className="page2_section3">
                <div className="page2_section3_inside">
                    <div className="page2_section3_inside_top">
                        <div className="page2_section3_inside_top_title">
                            <h1>СТОИМОСТЬ РЕМОНТА</h1>
                            <p>Точную стоимость работ вам озвучит специалист сервисного центра после диагностики. Примерные цены на ремонт без учета запчастей смотрите ниже.</p>                        
                        </div>
                        <div className="page2_section3_inside_top_buttons">
                            {buttons_nav.map((meow, index) => (
                                <button
                                    key={index}
                                    className={`nav_section_buttons ${isCurrent === index ? "active" : ""}`}
                                    onClick={() => navButtonSwitch(index)}
                                >{meow.title}</button>
                            ))}
                        </div>
                    </div>
                    <div className="page2_section3_inside_bot">
                        <div className="page2_section3_inside_bot_left">
                            {all[isCurrent].map((meow, index) => (
                                <button
                                    key={index}
                                    onClick={() => setIsProduct(index)}
                                    className={isProduct === index ? "active" : ""}
                                >{meow.name}</button>
                            ))}
                        </div>
                        <div className="page2_section3_inside_bot_right">
                            {all[isCurrent][isProduct].services.map((meow, index) => (
                                <div className="page2_section3_inside_bot_right_service" key={index}>
                                    <p>Замена/установка контроллера</p>
                                    <h4>от {meow.value} руб.</h4>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}