import "./Section9.scss"
import { Photo } from "../../../Images.js"
import { Link } from "react-router-dom"
import { useState } from "react"

const art = [
    {img: Photo.Work1Page2Section9Image},
    {img: Photo.Work2Page2Section9Image},
    {img: Photo.Work3Page2Section9Image},
    {img: Photo.Work4Page2Section9Image},
    {img: Photo.Work5Page2Section9Image},
    {img: Photo.Work6Page2Section9Image},
]

export default function Section9(){
    return(
        <>
            <section className="page2_section9">
                <div className="page2_section9_inside">
                    <div className="page2_section9_inside_title">
                        <h1>ПОСМОТРИТЕ <br/> НА ПРОЦЕСС РАБОТЫ</h1>
                        <div className="page2_section9_inside_title_right">
                            <img src={Photo.ItemsPage2Section9Image} alt="" />
                            <div>
                                <p className="page2_section9_gray">В среднем</p>
                                <h3>350 доработок</h3>
                                <p className="page2_section9_white">специалисты выполняют за 1 месяц</p>
                            </div>
                        </div>
                    </div>
                    <div className="page2_section9_inside_main">
                        {art.map((meow, index) => (
                            <img src={meow.img} alt="" key={index}/>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}