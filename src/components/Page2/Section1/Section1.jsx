import "./Section1.scss"
import { Photo } from "../../../Images.js"
import { Link } from "react-router-dom"

const punkts = [
    {img: Photo.LocatePage2Section1Image, title: `Сервисные центры в Москве, \n Санкт-Петербурге и Краснодаре`},
    {img: Photo.GuardPage2Section1Image, title: `Гарантия 14 дней \n на ремонт`},
    {img: Photo.GearPage2Section1Image, title: `Всегда в наличии оригинальные \n запчасти от производителя`},
]

export default function Section1(){

    return(
        <>
            <section className="page2_section1">
                <div className="page2_section1_inside">
                    <div className="page2_section1_inside_place">
                        <div className="page2_section1_inside_place_text">
                            <h1>РЕМОНТ И ОБСЛУЖИВАНИЕ ТОВАРОВ KUGOO KIRIN</h1>
                            <p>в фирменных сервисных центрах</p>
                        </div>
                        <div className="page2_section1_inside_place_punkts">
                            {punkts.map((meow, index) => (
                                <div className="page2_section1_inside_place_punkts_box">
                                    <div><img src={meow.img} alt="" /></div>
                                    <p>{meow.title}</p>
                                </div>
                            ))}
                        </div>
                        <button>Записаться</button>
                    </div>
                </div>
            </section>
        </>
    )
}