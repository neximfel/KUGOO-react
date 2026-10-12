import "./Section2.scss"
import { Photo } from "../../../Images.js"
import { Link } from "react-router-dom"
import { useState } from "react"

const navigation_buttons = [
    {title: "Хиты продаж"},
    {title: "Для города"},
    {title: "Для взрослых"},
    {title: "Для детей"},
]
const hits = [
    {perk: "ХИТ", class_name: "hit", balance_img: Photo.BalanceHeaderImage, main_img: Photo.VehiclePage1Section2Image, title: "Kugoo Kirin M4", battery_img: Photo.BatteryPage1Section2Image, battery_text: "2000 mAh", power_img: Photo.PowerPage1Section2Image, power_text: "1,2 л.с.", speed_img: Photo.SpeedPage1Section2Image, speed_text: "60 км/ч", time_img: Photo.TimePage1Section2Image, time_text: "5 часов", true_price: "39 900 ₽", current_price: "29 900 ₽", cart_img: Photo.CartPage1Section2Image, heart_img: Photo.HeartPage1Section2Image},
    {perk: "Новинка", class_name: "new", balance_img: Photo.BalanceHeaderImage, main_img: Photo.VehiclePage1Section2Image, title: "Kugoo Kirin M4", battery_img: Photo.BatteryPage1Section2Image, battery_text: "2000 mAh", power_img: Photo.PowerPage1Section2Image, power_text: "1,2 л.с.", speed_img: Photo.SpeedPage1Section2Image, speed_text: "60 км/ч", time_img: Photo.TimePage1Section2Image, time_text: "5 часов", true_price: "39 900 ₽", current_price: "29 900 ₽", cart_img: Photo.CartPage1Section2Image, heart_img: Photo.HeartPage1Section2Image},
    {perk: "ХИТ", class_name: "hit", balance_img: Photo.BalanceHeaderImage, main_img: Photo.VehiclePage1Section2Image, title: "Kugoo Kirin M4", battery_img: Photo.BatteryPage1Section2Image, battery_text: "2000 mAh", power_img: Photo.PowerPage1Section2Image, power_text: "1,2 л.с.", speed_img: Photo.SpeedPage1Section2Image, speed_text: "60 км/ч", time_img: Photo.TimePage1Section2Image, time_text: "5 часов", true_price: "39 900 ₽", current_price: "29 900 ₽", cart_img: Photo.CartPage1Section2Image, heart_img: Photo.HeartPage1Section2Image},
    {perk: "Новинка", class_name: "new", balance_img: Photo.BalanceHeaderImage, main_img: Photo.VehiclePage1Section2Image, title: "Kugoo Kirin M4", battery_img: Photo.BatteryPage1Section2Image, battery_text: "2000 mAh", power_img: Photo.PowerPage1Section2Image, power_text: "1,2 л.с.", speed_img: Photo.SpeedPage1Section2Image, speed_text: "60 км/ч", time_img: Photo.TimePage1Section2Image, time_text: "5 часов", true_price: "39 900 ₽", current_price: "29 900 ₽", cart_img: Photo.CartPage1Section2Image, heart_img: Photo.HeartPage1Section2Image},
    {perk: "ХИТ", class_name: "hit", balance_img: Photo.BalanceHeaderImage, main_img: Photo.VehiclePage1Section2Image, title: "Kugoo Kirin M4", battery_img: Photo.BatteryPage1Section2Image, battery_text: "2000 mAh", power_img: Photo.PowerPage1Section2Image, power_text: "1,2 л.с.", speed_img: Photo.SpeedPage1Section2Image, speed_text: "60 км/ч", time_img: Photo.TimePage1Section2Image, time_text: "5 часов", true_price: "39 900 ₽", current_price: "29 900 ₽", cart_img: Photo.CartPage1Section2Image, heart_img: Photo.HeartPage1Section2Image},
    {perk: "Новинка", class_name: "new", balance_img: Photo.BalanceHeaderImage, main_img: Photo.VehiclePage1Section2Image, title: "Kugoo Kirin M4", battery_img: Photo.BatteryPage1Section2Image, battery_text: "2000 mAh", power_img: Photo.PowerPage1Section2Image, power_text: "1,2 л.с.", speed_img: Photo.SpeedPage1Section2Image, speed_text: "60 км/ч", time_img: Photo.TimePage1Section2Image, time_text: "5 часов", true_price: "39 900 ₽", current_price: "29 900 ₽", cart_img: Photo.CartPage1Section2Image, heart_img: Photo.HeartPage1Section2Image},
    {perk: "ХИТ", class_name: "hit", balance_img: Photo.BalanceHeaderImage, main_img: Photo.VehiclePage1Section2Image, title: "Kugoo Kirin M4", battery_img: Photo.BatteryPage1Section2Image, battery_text: "2000 mAh", power_img: Photo.PowerPage1Section2Image, power_text: "1,2 л.с.", speed_img: Photo.SpeedPage1Section2Image, speed_text: "60 км/ч", time_img: Photo.TimePage1Section2Image, time_text: "5 часов", true_price: "39 900 ₽", current_price: "29 900 ₽", cart_img: Photo.CartPage1Section2Image, heart_img: Photo.HeartPage1Section2Image},
    {perk: "Новинка", class_name: "new", balance_img: Photo.BalanceHeaderImage, main_img: Photo.VehiclePage1Section2Image, title: "Kugoo Kirin M4", battery_img: Photo.BatteryPage1Section2Image, battery_text: "2000 mAh", power_img: Photo.PowerPage1Section2Image, power_text: "1,2 л.с.", speed_img: Photo.SpeedPage1Section2Image, speed_text: "60 км/ч", time_img: Photo.TimePage1Section2Image, time_text: "5 часов", true_price: "39 900 ₽", current_price: "29 900 ₽", cart_img: Photo.CartPage1Section2Image, heart_img: Photo.HeartPage1Section2Image},
]
const cities = [
    {perk: "Для города", class_name: "new", balance_img: Photo.BalanceHeaderImage, main_img: Photo.VehiclePage1Section2Image, title: "Kugoo Kirin M4", battery_img: Photo.BatteryPage1Section2Image, battery_text: "2000 mAh", power_img: Photo.PowerPage1Section2Image, power_text: "1,2 л.с.", speed_img: Photo.SpeedPage1Section2Image, speed_text: "60 км/ч", time_img: Photo.TimePage1Section2Image, time_text: "5 часов", true_price: "39 900 ₽", current_price: "29 900 ₽", cart_img: Photo.CartPage1Section2Image, heart_img: Photo.HeartPage1Section2Image},
    {perk: "Для города", class_name: "new", balance_img: Photo.BalanceHeaderImage, main_img: Photo.VehiclePage1Section2Image, title: "Kugoo Kirin M4", battery_img: Photo.BatteryPage1Section2Image, battery_text: "2000 mAh", power_img: Photo.PowerPage1Section2Image, power_text: "1,2 л.с.", speed_img: Photo.SpeedPage1Section2Image, speed_text: "60 км/ч", time_img: Photo.TimePage1Section2Image, time_text: "5 часов", true_price: "39 900 ₽", current_price: "29 900 ₽", cart_img: Photo.CartPage1Section2Image, heart_img: Photo.HeartPage1Section2Image},
    {perk: "Для города", class_name: "new", balance_img: Photo.BalanceHeaderImage, main_img: Photo.VehiclePage1Section2Image, title: "Kugoo Kirin M4", battery_img: Photo.BatteryPage1Section2Image, battery_text: "2000 mAh", power_img: Photo.PowerPage1Section2Image, power_text: "1,2 л.с.", speed_img: Photo.SpeedPage1Section2Image, speed_text: "60 км/ч", time_img: Photo.TimePage1Section2Image, time_text: "5 часов", true_price: "39 900 ₽", current_price: "29 900 ₽", cart_img: Photo.CartPage1Section2Image, heart_img: Photo.HeartPage1Section2Image},
    {perk: "Для города", class_name: "new", balance_img: Photo.BalanceHeaderImage, main_img: Photo.VehiclePage1Section2Image, title: "Kugoo Kirin M4", battery_img: Photo.BatteryPage1Section2Image, battery_text: "2000 mAh", power_img: Photo.PowerPage1Section2Image, power_text: "1,2 л.с.", speed_img: Photo.SpeedPage1Section2Image, speed_text: "60 км/ч", time_img: Photo.TimePage1Section2Image, time_text: "5 часов", true_price: "39 900 ₽", current_price: "29 900 ₽", cart_img: Photo.CartPage1Section2Image, heart_img: Photo.HeartPage1Section2Image},
    {perk: "Для города", class_name: "new", balance_img: Photo.BalanceHeaderImage, main_img: Photo.VehiclePage1Section2Image, title: "Kugoo Kirin M4", battery_img: Photo.BatteryPage1Section2Image, battery_text: "2000 mAh", power_img: Photo.PowerPage1Section2Image, power_text: "1,2 л.с.", speed_img: Photo.SpeedPage1Section2Image, speed_text: "60 км/ч", time_img: Photo.TimePage1Section2Image, time_text: "5 часов", true_price: "39 900 ₽", current_price: "29 900 ₽", cart_img: Photo.CartPage1Section2Image, heart_img: Photo.HeartPage1Section2Image},
    {perk: "Для города", class_name: "new", balance_img: Photo.BalanceHeaderImage, main_img: Photo.VehiclePage1Section2Image, title: "Kugoo Kirin M4", battery_img: Photo.BatteryPage1Section2Image, battery_text: "2000 mAh", power_img: Photo.PowerPage1Section2Image, power_text: "1,2 л.с.", speed_img: Photo.SpeedPage1Section2Image, speed_text: "60 км/ч", time_img: Photo.TimePage1Section2Image, time_text: "5 часов", true_price: "39 900 ₽", current_price: "29 900 ₽", cart_img: Photo.CartPage1Section2Image, heart_img: Photo.HeartPage1Section2Image},
    {perk: "Для города", class_name: "new", balance_img: Photo.BalanceHeaderImage, main_img: Photo.VehiclePage1Section2Image, title: "Kugoo Kirin M4", battery_img: Photo.BatteryPage1Section2Image, battery_text: "2000 mAh", power_img: Photo.PowerPage1Section2Image, power_text: "1,2 л.с.", speed_img: Photo.SpeedPage1Section2Image, speed_text: "60 км/ч", time_img: Photo.TimePage1Section2Image, time_text: "5 часов", true_price: "39 900 ₽", current_price: "29 900 ₽", cart_img: Photo.CartPage1Section2Image, heart_img: Photo.HeartPage1Section2Image},
    {perk: "Для города", class_name: "new", balance_img: Photo.BalanceHeaderImage, main_img: Photo.VehiclePage1Section2Image, title: "Kugoo Kirin M4", battery_img: Photo.BatteryPage1Section2Image, battery_text: "2000 mAh", power_img: Photo.PowerPage1Section2Image, power_text: "1,2 л.с.", speed_img: Photo.SpeedPage1Section2Image, speed_text: "60 км/ч", time_img: Photo.TimePage1Section2Image, time_text: "5 часов", true_price: "39 900 ₽", current_price: "29 900 ₽", cart_img: Photo.CartPage1Section2Image, heart_img: Photo.HeartPage1Section2Image},
]
const adults = [
    {perk: "Для взрослых", class_name: "hit", balance_img: Photo.BalanceHeaderImage, main_img: Photo.VehiclePage1Section2Image, title: "Kugoo Kirin M4", battery_img: Photo.BatteryPage1Section2Image, battery_text: "2000 mAh", power_img: Photo.PowerPage1Section2Image, power_text: "1,2 л.с.", speed_img: Photo.SpeedPage1Section2Image, speed_text: "60 км/ч", time_img: Photo.TimePage1Section2Image, time_text: "5 часов", true_price: "39 900 ₽", current_price: "29 900 ₽", cart_img: Photo.CartPage1Section2Image, heart_img: Photo.HeartPage1Section2Image},
    {perk: "Для взрослых", class_name: "hit", balance_img: Photo.BalanceHeaderImage, main_img: Photo.VehiclePage1Section2Image, title: "Kugoo Kirin M4", battery_img: Photo.BatteryPage1Section2Image, battery_text: "2000 mAh", power_img: Photo.PowerPage1Section2Image, power_text: "1,2 л.с.", speed_img: Photo.SpeedPage1Section2Image, speed_text: "60 км/ч", time_img: Photo.TimePage1Section2Image, time_text: "5 часов", true_price: "39 900 ₽", current_price: "29 900 ₽", cart_img: Photo.CartPage1Section2Image, heart_img: Photo.HeartPage1Section2Image},
    {perk: "Для взрослых", class_name: "hit", balance_img: Photo.BalanceHeaderImage, main_img: Photo.VehiclePage1Section2Image, title: "Kugoo Kirin M4", battery_img: Photo.BatteryPage1Section2Image, battery_text: "2000 mAh", power_img: Photo.PowerPage1Section2Image, power_text: "1,2 л.с.", speed_img: Photo.SpeedPage1Section2Image, speed_text: "60 км/ч", time_img: Photo.TimePage1Section2Image, time_text: "5 часов", true_price: "39 900 ₽", current_price: "29 900 ₽", cart_img: Photo.CartPage1Section2Image, heart_img: Photo.HeartPage1Section2Image},
    {perk: "Для взрослых", class_name: "hit", balance_img: Photo.BalanceHeaderImage, main_img: Photo.VehiclePage1Section2Image, title: "Kugoo Kirin M4", battery_img: Photo.BatteryPage1Section2Image, battery_text: "2000 mAh", power_img: Photo.PowerPage1Section2Image, power_text: "1,2 л.с.", speed_img: Photo.SpeedPage1Section2Image, speed_text: "60 км/ч", time_img: Photo.TimePage1Section2Image, time_text: "5 часов", true_price: "39 900 ₽", current_price: "29 900 ₽", cart_img: Photo.CartPage1Section2Image, heart_img: Photo.HeartPage1Section2Image},
    {perk: "Для взрослых", class_name: "hit", balance_img: Photo.BalanceHeaderImage, main_img: Photo.VehiclePage1Section2Image, title: "Kugoo Kirin M4", battery_img: Photo.BatteryPage1Section2Image, battery_text: "2000 mAh", power_img: Photo.PowerPage1Section2Image, power_text: "1,2 л.с.", speed_img: Photo.SpeedPage1Section2Image, speed_text: "60 км/ч", time_img: Photo.TimePage1Section2Image, time_text: "5 часов", true_price: "39 900 ₽", current_price: "29 900 ₽", cart_img: Photo.CartPage1Section2Image, heart_img: Photo.HeartPage1Section2Image},
    {perk: "Для взрослых", class_name: "hit", balance_img: Photo.BalanceHeaderImage, main_img: Photo.VehiclePage1Section2Image, title: "Kugoo Kirin M4", battery_img: Photo.BatteryPage1Section2Image, battery_text: "2000 mAh", power_img: Photo.PowerPage1Section2Image, power_text: "1,2 л.с.", speed_img: Photo.SpeedPage1Section2Image, speed_text: "60 км/ч", time_img: Photo.TimePage1Section2Image, time_text: "5 часов", true_price: "39 900 ₽", current_price: "29 900 ₽", cart_img: Photo.CartPage1Section2Image, heart_img: Photo.HeartPage1Section2Image},
    {perk: "Для взрослых", class_name: "hit", balance_img: Photo.BalanceHeaderImage, main_img: Photo.VehiclePage1Section2Image, title: "Kugoo Kirin M4", battery_img: Photo.BatteryPage1Section2Image, battery_text: "2000 mAh", power_img: Photo.PowerPage1Section2Image, power_text: "1,2 л.с.", speed_img: Photo.SpeedPage1Section2Image, speed_text: "60 км/ч", time_img: Photo.TimePage1Section2Image, time_text: "5 часов", true_price: "39 900 ₽", current_price: "29 900 ₽", cart_img: Photo.CartPage1Section2Image, heart_img: Photo.HeartPage1Section2Image},
    {perk: "Для взрослых", class_name: "hit", balance_img: Photo.BalanceHeaderImage, main_img: Photo.VehiclePage1Section2Image, title: "Kugoo Kirin M4", battery_img: Photo.BatteryPage1Section2Image, battery_text: "2000 mAh", power_img: Photo.PowerPage1Section2Image, power_text: "1,2 л.с.", speed_img: Photo.SpeedPage1Section2Image, speed_text: "60 км/ч", time_img: Photo.TimePage1Section2Image, time_text: "5 часов", true_price: "39 900 ₽", current_price: "29 900 ₽", cart_img: Photo.CartPage1Section2Image, heart_img: Photo.HeartPage1Section2Image},
]
const kids = [
    {perk: "Для детей", class_name: "new", balance_img: Photo.BalanceHeaderImage, main_img: Photo.VehiclePage1Section2Image, title: "Kugoo Kirin M4", battery_img: Photo.BatteryPage1Section2Image, battery_text: "2000 mAh", power_img: Photo.PowerPage1Section2Image, power_text: "1,2 л.с.", speed_img: Photo.SpeedPage1Section2Image, speed_text: "60 км/ч", time_img: Photo.TimePage1Section2Image, time_text: "5 часов", true_price: "39 900 ₽", current_price: "29 900 ₽", cart_img: Photo.CartPage1Section2Image, heart_img: Photo.HeartPage1Section2Image},
    {perk: "Для детей", class_name: "new", balance_img: Photo.BalanceHeaderImage, main_img: Photo.VehiclePage1Section2Image, title: "Kugoo Kirin M4", battery_img: Photo.BatteryPage1Section2Image, battery_text: "2000 mAh", power_img: Photo.PowerPage1Section2Image, power_text: "1,2 л.с.", speed_img: Photo.SpeedPage1Section2Image, speed_text: "60 км/ч", time_img: Photo.TimePage1Section2Image, time_text: "5 часов", true_price: "39 900 ₽", current_price: "29 900 ₽", cart_img: Photo.CartPage1Section2Image, heart_img: Photo.HeartPage1Section2Image},
    {perk: "Для детей", class_name: "new", balance_img: Photo.BalanceHeaderImage, main_img: Photo.VehiclePage1Section2Image, title: "Kugoo Kirin M4", battery_img: Photo.BatteryPage1Section2Image, battery_text: "2000 mAh", power_img: Photo.PowerPage1Section2Image, power_text: "1,2 л.с.", speed_img: Photo.SpeedPage1Section2Image, speed_text: "60 км/ч", time_img: Photo.TimePage1Section2Image, time_text: "5 часов", true_price: "39 900 ₽", current_price: "29 900 ₽", cart_img: Photo.CartPage1Section2Image, heart_img: Photo.HeartPage1Section2Image},
    {perk: "Для детей", class_name: "new", balance_img: Photo.BalanceHeaderImage, main_img: Photo.VehiclePage1Section2Image, title: "Kugoo Kirin M4", battery_img: Photo.BatteryPage1Section2Image, battery_text: "2000 mAh", power_img: Photo.PowerPage1Section2Image, power_text: "1,2 л.с.", speed_img: Photo.SpeedPage1Section2Image, speed_text: "60 км/ч", time_img: Photo.TimePage1Section2Image, time_text: "5 часов", true_price: "39 900 ₽", current_price: "29 900 ₽", cart_img: Photo.CartPage1Section2Image, heart_img: Photo.HeartPage1Section2Image},
    {perk: "Для детей", class_name: "new", balance_img: Photo.BalanceHeaderImage, main_img: Photo.VehiclePage1Section2Image, title: "Kugoo Kirin M4", battery_img: Photo.BatteryPage1Section2Image, battery_text: "2000 mAh", power_img: Photo.PowerPage1Section2Image, power_text: "1,2 л.с.", speed_img: Photo.SpeedPage1Section2Image, speed_text: "60 км/ч", time_img: Photo.TimePage1Section2Image, time_text: "5 часов", true_price: "39 900 ₽", current_price: "29 900 ₽", cart_img: Photo.CartPage1Section2Image, heart_img: Photo.HeartPage1Section2Image},
    {perk: "Для детей", class_name: "new", balance_img: Photo.BalanceHeaderImage, main_img: Photo.VehiclePage1Section2Image, title: "Kugoo Kirin M4", battery_img: Photo.BatteryPage1Section2Image, battery_text: "2000 mAh", power_img: Photo.PowerPage1Section2Image, power_text: "1,2 л.с.", speed_img: Photo.SpeedPage1Section2Image, speed_text: "60 км/ч", time_img: Photo.TimePage1Section2Image, time_text: "5 часов", true_price: "39 900 ₽", current_price: "29 900 ₽", cart_img: Photo.CartPage1Section2Image, heart_img: Photo.HeartPage1Section2Image},
    {perk: "Для детей", class_name: "new", balance_img: Photo.BalanceHeaderImage, main_img: Photo.VehiclePage1Section2Image, title: "Kugoo Kirin M4", battery_img: Photo.BatteryPage1Section2Image, battery_text: "2000 mAh", power_img: Photo.PowerPage1Section2Image, power_text: "1,2 л.с.", speed_img: Photo.SpeedPage1Section2Image, speed_text: "60 км/ч", time_img: Photo.TimePage1Section2Image, time_text: "5 часов", true_price: "39 900 ₽", current_price: "29 900 ₽", cart_img: Photo.CartPage1Section2Image, heart_img: Photo.HeartPage1Section2Image},
    {perk: "Для детей", class_name: "new", balance_img: Photo.BalanceHeaderImage, main_img: Photo.VehiclePage1Section2Image, title: "Kugoo Kirin M4", battery_img: Photo.BatteryPage1Section2Image, battery_text: "2000 mAh", power_img: Photo.PowerPage1Section2Image, power_text: "1,2 л.с.", speed_img: Photo.SpeedPage1Section2Image, speed_text: "60 км/ч", time_img: Photo.TimePage1Section2Image, time_text: "5 часов", true_price: "39 900 ₽", current_price: "29 900 ₽", cart_img: Photo.CartPage1Section2Image, heart_img: Photo.HeartPage1Section2Image},
]
const all = [hits, cities, adults, kids]

export default function Section2(){

    const [isCurrent, setIsCurrent] = useState(0)
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
            <section className="page1_section2">
                <div className="page1_section2_inside">
                    <div className="page1_section2_inside_title">
                        <h1>ЭЛЕКТРОСАМОКАТЫ</h1>
                        <div className="page1_section2_inside_title_buttons">
                            {navigation_buttons.map((meow, index) => (
                                <button
                                    key={index}
                                    className={isCurrent === index ? "active" : ""}
                                    onClick={() => setIsCurrent(index)}
                                >{meow.title}</button>
                            ))}
                        </div>
                    </div>
                    <div className="page1_section2_inside_main">
                        {all[isCurrent].map((meow, index) => (
                            <article
                                className="page1_section2_article"
                                key={index}
                            >
                                <div className="page1_section2_article_top">
                                    <div className="page1_section2_article_top_perk">
                                        <span className={`page1_section2_article_top_perk_${meow.class_name}`}>{meow.perk}</span>
                                        <div><img src={meow.balance_img} alt="" /></div>
                                    </div>
                                    <img className="page1_section2_article_top_main_img" src={meow.main_img} alt="" />
                                </div>
                                <div className="page1_section2_article_inside">
                                    <h2>{meow.title}</h2>
                                    <div className="page1_section2_article_inside_stats">
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
                                    <div className="page1_section2_article_inside_panel">
                                        <div className="page1_section2_article_inside_panel_text">
                                            <p className="page1_section2_article_inside_panel_text_true_price">{meow.true_price}</p>
                                            <p className="page1_section2_article_inside_panel_text_current_price">{meow.current_price}</p>
                                        </div>
                                        <div className="page1_section2_article_inside_panel_buttons">
                                            <button><img src={meow.cart_img} alt="" /></button>
                                            <button><img src={meow.heart_img} alt="" /></button>
                                        </div>
                                    </div>
                                    <button
                                        onClick={() => togglePre(index)}
                                        className={`page1_section2_article_inside_buy_button ${isPre.includes(index) ? "preordered" : ""}`}
                                    >
                                        {isPre.includes(index) ? "Оформить предзаказ" : "Купить в 1 клик"}
                                    </button>
                                </div>
                            </article>
                        ))}
                    </div>
                    <Link to="" className="watch_all">Смотреть все</Link>
                </div>
            </section>
        </>
    )
}