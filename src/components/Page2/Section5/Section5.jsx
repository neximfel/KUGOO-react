import "./Section5.scss"
import { Photo } from "../../../Images.js"
import { Link } from "react-router-dom"
import { useState } from "react"

const cont1 = [
    {
        title: "СДЕЛАЕМ ГИДРОИЗОЛЯЦИЮ ЭЛЕКТРОСАМОКАТА",
        sub_title: "которая позволит вам кататься в любую погоду",
        descr: "Гидроизоляция – это защита от проникновения воды. Электросамокат изнутри покрывается специальным веществом, которое предотвращает попадание любой влаги.",
        sub: "Что дает гидроизоляция?",
        pluses: [
            {plus: "Возможность выезжать в дождь или после дождя"},
            {plus: "Можно ездить в любое время года"},
            {plus: "Защита от влаги, пыли и грязи продлит срок беспроблемного использования."},
        ],
        dop_text: "Подробнее про гидроизоляцию прочитайте в ",
    },
]
const cont2 = [
    {
        title: "ПРОДЛИМ СРОК СЛУЖБЫ ВАШЕГОСАМОКАТА В 2 РАЗА",
        sub_title: "благодаря настройкам от специалистов с опытом 7+ лет",
        descr: "Перед продажей каждый покупатель может заказать у нас дополнительную услугу – настройка самоката. Для разных моделей Kugoo настройка может отличаться.",
        sub: "Что входит в настройку:",
        pluses: [
            {plus: "Регулировка натяжения тормозного троса"},
            {plus: "Регулировка положения тормозной ручки"},
            {plus: "Регулировка тормозных механизмов"},
            {plus: "Протяжка всех соединений"},
            {plus: "И еще более 35 работ."}
        ],
        dop_text: "Подробнее про настройку прочитайте в ",
    }
]

export default function Section5(){
    return(
        <>
            <section className="page2_section5">
                <div className="page2_section5_inside">
                    <div className="page2_section5_inside_top">
                        <div className="page2_section5_inside_top_video">
                            <button><img src={Photo.TrianglePage1Section8Image} alt="" /></button>
                        </div>
                        {cont1.map((meow, index) => (
                            <div className="page2_section5_inside_block_text" key={index}>
                                <div className="page2_section5_inside_block_text_title">
                                    <h1>{meow.title}</h1>
                                    <h5>{meow.sub_title}</h5>
                                </div>
                                <p>{meow.descr}</p>
                                <h3>{meow.sub}</h3>
                                <div className="page2_section5_inside_block_text_pluses">
                                    {cont1[0].pluses.map((meow, index) => (
                                        <div key={index}>
                                            <img src={Photo.CheckCirclePage2Section5Image} alt="" />
                                            <p>{meow.plus}</p>
                                        </div>
                                    ))}
                                </div>
                                <p className="page2_section5_inside_block_text_link">{meow.dop_text} <Link to="">нашей статье</Link></p>
                            </div>
                        ))}
                    </div>
                    <div className="page2_section5_inside_bot">
                        {cont2.map((meow, index) => (
                            <div className="page2_section5_inside_block_text" key={index}>
                                <div className="page2_section5_inside_block_text_title">
                                    <h1>{meow.title}</h1>
                                    <h5>{meow.sub_title}</h5>
                                </div>
                                <p>{meow.descr}</p>
                                <h4>{meow.sub}</h4>
                                <div className="page2_section5_inside_block_text_pluses">
                                    {cont2[0].pluses.map((meow, index) => (
                                        <div key={index}>
                                            <img src={Photo.CheckCirclePage2Section5Image} alt="" />
                                            <p>{meow.plus}</p>
                                        </div>
                                    ))}
                                </div>
                                <p className="page2_section5_inside_block_text_link">{meow.dop_text} <Link to=""> нашей статье</Link></p>
                            </div>
                        ))}
                        <div className="page2_section5_inside_bot_image"></div>
                    </div>
                </div>
            </section>
        </>
    )
}