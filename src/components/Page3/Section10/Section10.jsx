import "./Section10.scss"
import { Photo } from "../../../Images.js"
import { Link } from "react-router-dom"
import { useState } from "react"

const socials = [
    {img: Photo.VKPage3Section10Image, title: "Вконтакте", count: "3 300", class: "vk"},
    {img: Photo.InstagramPage3Section10Image, title: "Instagram", count: "10 602", class: "instagram"},
    {img: Photo.YouTubePage3Section10Image, title: "YouTube", count: "3 603", class: "youtube"},
    {img: Photo.TelegramPage3Section10Image, title: "Telegram", count: "432", class: "telegram"},
]

export default function Section10(){
    return(
        <>
            <section className="page3_section10">
                <div className="page3_section10_inside">
                    <div className="page3_section10_inside_text">
                        <h1 className="title_h1">ОБЩАЕМСЯ С КЛИЕНТАМИ, ЧТОБЫ ЗНАТЬ 
                            ПОЖЕЛАНИЯ И ПРЕДЛАГАТЬ ЛУЧШИЙ АССОРТИМЕНТ И СЕРВИС</h1>
                        <p>И еще приняли активное участие в выставке «Велокульт 2021»</p>
                        <Link to="" className="link_purple_a">Смотреть как это было <img src={Photo.ArrowPage3Section10Image} alt="" /></Link>
                    </div>
                    <div className="page3_section10_inside_socials">
                        {socials.map((meow, index) => (
                            <div className={`page3_section10_inside_socials_container ${meow.class}`} key={index}>
                                <div className="page3_section10_inside_socials_container_title">
                                    <img src={meow.img} alt="" />
                                    <h5>{meow.title}</h5>
                                </div>
                                <p>{meow.count}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}