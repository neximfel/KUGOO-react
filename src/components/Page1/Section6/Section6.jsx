import "./Section6.scss"
import { Photo } from "../../../Images.js"
import { Link } from "react-router-dom"

const list = [
    {text: "цены от завода-изготовителя Jilong;", img: Photo.TrianglePage1Section6Image},
    {text: "бесплатный тест-драйв самокатов;", img: Photo.TrianglePage1Section6Image},
    {text: "фирменную гарантию 1 год;", img: Photo.TrianglePage1Section6Image},
    {text: "ремонт и обслуживание от 1 дня в собственном сервисном центре;", img: Photo.TrianglePage1Section6Image},
    {text: "более 1 000 запчастей и аксессуаров в наличии", img: Photo.TrianglePage1Section6Image},
]

export default function Section6(){

    return(
        <>
            <section className="page1_section6">
                <div className="page1_section6_inside">
                    <div className="page1_section6_inside_left">
                        <div className="page1_section6_inside_left_panel">
                            <div className="page1_section6_inside_left_panel_text">
                                <h4>Тест-драйв в Москве</h4>
                                <p>Оцените все преимущества самокатов лично</p>
                            </div>
                            <Link to="">Подробнее <img src={Photo.ArrowPage1Section6Image} alt="" /></Link>
                        </div>
                    </div>
                    <div className="page1_section6_inside_right">
                        <div className="page1_section6_inside_right_title">
                            <h1>KUGOO-RUSSIA — ПЕРВЫЙ ОФИЦИАЛЬНЫЙ ДИЛЕР KUGOO KIRIN В РОССИИ</h1>
                            <p>Наша цель предоставить полный ассортимент современной продукции Kugoo Kirin, которая улучшает и упрощает жизнь. Стремимся подарить комфорт и эмоции, поэтому помогаем с выбором и внимательно относимся к сервисному обслуживанию.</p>
                        </div>
                        <div className="page1_section6_inside_right_descr">
                            <h5>Специализируемся исключительно на бренде Kugoo, поэтому вы получите:</h5>
                            <div className="page1_section6_inside_right_descr_list">
                                {list.map((meow, index) => (
                                    <div className="page1_section6_inside_right_descr_list_punkt" key={index}>
                                        <img src={meow.img} alt="" />
                                        <p>{meow.text}</p>
                                    </div>
                                ))}
                            </div>
                            <Link to="">Смотреть сертификат</Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}