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
const cards = [
    {perk: "ХИТ", balance_img: Photo.BalanceHeaderImage, main_img: Photo.VehiclePage1Section2Image, title: "Kugoo Kirin M4", battery_img: Photo.BatteryPage1Section2Image, battery_text: "2000 mAh", power_img: Photo.PowerPage1Section2Image, power_text: "1,2 л.с.", speed_img: Photo.SpeedPage1Section2Image, speed_text: "60 км/ч", time_img: Photo.TimePage1Section2Image, time_text: "5 часов", true_price: "39 900 ₽", current_price: "29 900 ₽", cart_img: Photo.CartPage1Section2Image, heart_img: Photo.HeartPage1Section2Image},
    {perk: "Новинка", balance_img: Photo.BalanceHeaderImage, main_img: Photo.VehiclePage1Section2Image, title: "Kugoo Kirin M4", battery_img: Photo.BatteryPage1Section2Image, battery_text: "2000 mAh", power_img: Photo.PowerPage1Section2Image, power_text: "1,2 л.с.", speed_img: Photo.SpeedPage1Section2Image, speed_text: "60 км/ч", time_img: Photo.TimePage1Section2Image, time_text: "5 часов", true_price: "39 900 ₽", current_price: "29 900 ₽", cart_img: Photo.CartPage1Section2Image, heart_img: Photo.HeartPage1Section2Image},
    {perk: "ХИТ", balance_img: Photo.BalanceHeaderImage, main_img: Photo.VehiclePage1Section2Image, title: "Kugoo Kirin M4", battery_img: Photo.BatteryPage1Section2Image, battery_text: "2000 mAh", power_img: Photo.PowerPage1Section2Image, power_text: "1,2 л.с.", speed_img: Photo.SpeedPage1Section2Image, speed_text: "60 км/ч", time_img: Photo.TimePage1Section2Image, time_text: "5 часов", true_price: "39 900 ₽", current_price: "29 900 ₽", cart_img: Photo.CartPage1Section2Image, heart_img: Photo.HeartPage1Section2Image},
    {perk: "Новинка", balance_img: Photo.BalanceHeaderImage, main_img: Photo.VehiclePage1Section2Image, title: "Kugoo Kirin M4", battery_img: Photo.BatteryPage1Section2Image, battery_text: "2000 mAh", power_img: Photo.PowerPage1Section2Image, power_text: "1,2 л.с.", speed_img: Photo.SpeedPage1Section2Image, speed_text: "60 км/ч", time_img: Photo.TimePage1Section2Image, time_text: "5 часов", true_price: "39 900 ₽", current_price: "29 900 ₽", cart_img: Photo.CartPage1Section2Image, heart_img: Photo.HeartPage1Section2Image},
    {perk: "ХИТ", balance_img: Photo.BalanceHeaderImage, main_img: Photo.VehiclePage1Section2Image, title: "Kugoo Kirin M4", battery_img: Photo.BatteryPage1Section2Image, battery_text: "2000 mAh", power_img: Photo.PowerPage1Section2Image, power_text: "1,2 л.с.", speed_img: Photo.SpeedPage1Section2Image, speed_text: "60 км/ч", time_img: Photo.TimePage1Section2Image, time_text: "5 часов", true_price: "39 900 ₽", current_price: "29 900 ₽", cart_img: Photo.CartPage1Section2Image, heart_img: Photo.HeartPage1Section2Image},
    {perk: "Новинка", balance_img: Photo.BalanceHeaderImage, main_img: Photo.VehiclePage1Section2Image, title: "Kugoo Kirin M4", battery_img: Photo.BatteryPage1Section2Image, battery_text: "2000 mAh", power_img: Photo.PowerPage1Section2Image, power_text: "1,2 л.с.", speed_img: Photo.SpeedPage1Section2Image, speed_text: "60 км/ч", time_img: Photo.TimePage1Section2Image, time_text: "5 часов", true_price: "39 900 ₽", current_price: "29 900 ₽", cart_img: Photo.CartPage1Section2Image, heart_img: Photo.HeartPage1Section2Image},
    {perk: "ХИТ", balance_img: Photo.BalanceHeaderImage, main_img: Photo.VehiclePage1Section2Image, title: "Kugoo Kirin M4", battery_img: Photo.BatteryPage1Section2Image, battery_text: "2000 mAh", power_img: Photo.PowerPage1Section2Image, power_text: "1,2 л.с.", speed_img: Photo.SpeedPage1Section2Image, speed_text: "60 км/ч", time_img: Photo.TimePage1Section2Image, time_text: "5 часов", true_price: "39 900 ₽", current_price: "29 900 ₽", cart_img: Photo.CartPage1Section2Image, heart_img: Photo.HeartPage1Section2Image},
    {perk: "Новинка", balance_img: Photo.BalanceHeaderImage, main_img: Photo.VehiclePage1Section2Image, title: "Kugoo Kirin M4", battery_img: Photo.BatteryPage1Section2Image, battery_text: "2000 mAh", power_img: Photo.PowerPage1Section2Image, power_text: "1,2 л.с.", speed_img: Photo.SpeedPage1Section2Image, speed_text: "60 км/ч", time_img: Photo.TimePage1Section2Image, time_text: "5 часов", true_price: "39 900 ₽", current_price: "29 900 ₽", cart_img: Photo.CartPage1Section2Image, heart_img: Photo.HeartPage1Section2Image},
]

export default function Section2(){

    const [isCurrent, setIsCurrent] = useState(0)

    return(
        <>
            <section className="section2">
                <div className="section2_inside">
                    <div className="section2_inside_title">
                        <h1>ЭЛЕКТРОСАМОКАТЫ</h1>
                        <div className="section2_inside_title_buttons">
                            {navigation_buttons.map((meow, index) => (
                                <button
                                    key={index}
                                    className={isCurrent === index ? "active" : ""}
                                    onClick={() => setIsCurrent(index)}
                                >{meow.title}</button>
                            ))}
                        </div>
                    </div>
                    <div className="section2_inside_main">
                        {cards.map((meow, index) => (
                            <article
                                key={index}
                            >
                                <div className="section2_article_top">
                                    <div className="section2_article_top_perk">
                                        <span>{meow.perk}</span>
                                        <div><img src={meow.balance_img} alt="" /></div>
                                    </div>
                                    <img src={meow.main_img} alt="" />
                                </div>
                                <div className="section2_article_inside">
                                    <h2>{meow.title}</h2>
                                    
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