import "./Section3.scss"
import { Photo } from "../../../Images.js"
import { Link } from "react-router-dom"
import { useState } from "react"

const hits = [
    {perk: "ХИТ", class_name: "hit", balance_img: Photo.BalanceHeaderImage, main_img: Photo.VehiclePage1Section2Image, title: "Kugoo Kirin M4", battery_img: Photo.BatteryPage1Section2Image, battery_text: "2000 mAh", power_img: Photo.PowerPage1Section2Image, power_text: "1,2 л.с.", speed_img: Photo.SpeedPage1Section2Image, speed_text: "60 км/ч", time_img: Photo.TimePage1Section2Image, time_text: "5 часов", true_price: "39 900 ₽", current_price: "29 900 ₽", cart_img: Photo.CartPage1Section2Image, heart_img: Photo.HeartPage1Section2Image},
    {perk: "Новинка", class_name: "new", balance_img: Photo.BalanceHeaderImage, main_img: Photo.VehiclePage1Section2Image, title: "Kugoo Kirin M4", battery_img: Photo.BatteryPage1Section2Image, battery_text: "2000 mAh", power_img: Photo.PowerPage1Section2Image, power_text: "1,2 л.с.", speed_img: Photo.SpeedPage1Section2Image, speed_text: "60 км/ч", time_img: Photo.TimePage1Section2Image, time_text: "5 часов", true_price: "39 900 ₽", current_price: "29 900 ₽", cart_img: Photo.CartPage1Section2Image, heart_img: Photo.HeartPage1Section2Image},
    {perk: "ХИТ", class_name: "hit", balance_img: Photo.BalanceHeaderImage, main_img: Photo.VehiclePage1Section2Image, title: "Kugoo Kirin M4", battery_img: Photo.BatteryPage1Section2Image, battery_text: "2000 mAh", power_img: Photo.PowerPage1Section2Image, power_text: "1,2 л.с.", speed_img: Photo.SpeedPage1Section2Image, speed_text: "60 км/ч", time_img: Photo.TimePage1Section2Image, time_text: "5 часов", true_price: "39 900 ₽", current_price: "29 900 ₽", cart_img: Photo.CartPage1Section2Image, heart_img: Photo.HeartPage1Section2Image},
    {perk: "Новинка", class_name: "new", balance_img: Photo.BalanceHeaderImage, main_img: Photo.VehiclePage1Section2Image, title: "Kugoo Kirin M4", battery_img: Photo.BatteryPage1Section2Image, battery_text: "2000 mAh", power_img: Photo.PowerPage1Section2Image, power_text: "1,2 л.с.", speed_img: Photo.SpeedPage1Section2Image, speed_text: "60 км/ч", time_img: Photo.TimePage1Section2Image, time_text: "5 часов", true_price: "39 900 ₽", current_price: "29 900 ₽", cart_img: Photo.CartPage1Section2Image, heart_img: Photo.HeartPage1Section2Image},
]

export default function Section3(){

    const [isPre, setIsPre] = useState([])

    const togglePre = (index) => {
    setIsPre(prev => {
        if (prev.includes(index)) {
            return prev.filter(i => i !== index)
        } else {
            return [...prev, index]
        }
    })}

    return(
        <>
            <section className="page4_section3">
                <div className="page4_section3_inside">
                    <h1 className="title_h1">СЕЙЧАС ДЛЯ ТЕСТ ДРАЙВА И ОБУЧЕНИЯ ДОСТУПНЫ СЛЕДУЮЩИЕ МОДЕЛИ</h1>
                    <div className="page4_section3_articles">
                        {hits.map((meow, index) => (
                            <article
                                className="page4_section3_article"
                                key={index}
                            >
                                <div className="page4_section3_article_top">
                                    <div className="page4_section3_article_top_perk">
                                        <span className={`page4_section3_article_top_perk_${meow.class_name}`}>{meow.perk}</span>
                                        <div><img src={meow.balance_img} alt="" /></div>
                                    </div>
                                    <img className="page4_section3_article_top_main_img" src={meow.main_img} alt="" />
                                </div>
                                <div className="page4_section3_article_inside">
                                    <h2>{meow.title}</h2>
                                    <div className="page4_section3_article_inside_stats">
                                        <div>
                                            <img src={meow.battery_img} alt="" />
                                            <p>{meow.battery_text}</p>
                                        </div>
                                        <div>
                                            <img src={meow.power_img} alt="" />
                                            <p>{meow.power_text}</p>
                                        </div>
                                        <div>
                                            <img src={meow.speed_img} alt="" />
                                            <p>{meow.speed_text}</p>
                                        </div>
                                        <div>
                                            <img src={meow.time_img} alt="" />
                                            <p>{meow.time_text}</p>
                                        </div>
                                    </div>
                                    <div className="page4_section3_article_inside_panel">
                                        <div className="page4_section3_article_inside_panel_text">
                                            <p className="page4_section3_article_inside_panel_text_true_price">{meow.true_price}</p>
                                            <p className="page4_section3_article_inside_panel_text_current_price">{meow.current_price}</p>
                                        </div>
                                        <div className="page4_section3_article_inside_panel_buttons">
                                            <button><img src={meow.cart_img} alt="" /></button>
                                            <button><img src={meow.heart_img} alt="" /></button>
                                        </div>
                                    </div>
                                    <button
                                        onClick={() => togglePre(index)}
                                        className={`page4_section3_article_inside_buy_button ${isPre.includes(index) ? "preordered" : ""}`}
                                    >
                                        {isPre.includes(index) ? "Оформить предзаказ" : "Купить в 1 клик"}
                                    </button>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}