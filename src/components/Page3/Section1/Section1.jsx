import "./Section1.scss"
import { Photo } from "../../../Images.js"
import { Link } from "react-router-dom"
import { useState } from "react"

const punkts = [
    {img: Photo.WalletPage3Section1Image, title: `Отсутствие демпинга — \n контроль цен и МРЦ`},
    {img: Photo.BoxPage3Section1Image, title: `Бесплатная доставка \n до любой ТК`},
    {img: Photo.UpdatePage3Section1Image, title: `Беспроблемный \n возврат и замена брака`},
    {img: Photo.PicturePage3Section1Image, title: `Готовый медиаконтент \n для вашего сайта и соцсетей`},
]

export default function Section1(){
    return(
        <>
            <section className="page3_section1">
                <div className="page3_section1_inside">
                    <div className="page3_section1_inside_field">
                        <div className="page3_section1_inside_field_left">
                            <div className="page3_section1_inside_field_left_title">
                                <h1 className="title_h1">ПОКУПАЙТЕ ТОВАРЫ KUGOO ПО ОПТОВЫМ ЦЕНАМ <br/> ОТ ОФИЦИАЛЬНОГО ДИЛЕРА</h1>
                                <p>Ваша прибыль — до 25% от закупочной стоимости 1 единицы товара</p>
                            </div>
                            <div className="page3_section1_inside_field_left_punkts">
                                {punkts.map((meow, index) => (
                                    <div className="page3_section1_inside_field_left_punkts_box" key={index}>
                                        <div>
                                            <img src={meow.img} alt="" />
                                        </div>
                                        <p>{meow.title}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="page3_section1_inside_field_right">
                            <div className="page3_section1_inside_field_right_title">
                                <h3>ПОЛУЧИТЕ ПРАЙС-ЛИСТ С ОПТОВЫМИ ЦЕНАМИ</h3>
                                <p>а также рассчитаем вашу прибыль от продажи товаров Kugoo</p>
                            </div>
                            <input className="page3_section1_inside_field_right_phone" type="phone" placeholder="+7 ( _ _ _ ) _ _ - _ _ - _ _"/>
                            <button>Скачать прайс-лист</button>
                            <div className="page3_section1_inside_field_right_checkbox">
                                <input type="checkbox" />
                                <p>Нажимая на кнопку, вы соглашаетесь на обработку персональных данных и <span>политикой конфиденциальности</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}