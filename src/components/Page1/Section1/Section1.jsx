import "./Section1.scss"
import { Photo } from "../../../Images.js"
import { Link } from "react-router-dom"

export default function Section1(){
    return(
        <>
            <section className="section1">
                <div className="section1_top">
                    <div className="section1_top_inside">
                        <span>Новинка</span>
                        <div className="section1_top_inside_title">
                            <h1>ЭЛЕКТРОСАМОКАТЫ KUGOO KIRIN ОТ ОФИЦИАЛЬНОГО ДИЛЕРА</h1>
                            <p>с бесплатной доставкой по РФ от 1 дня</p>
                            <Link to="">Перейти в каталог</Link>
                        </div>
                        <div className="section1_top_inside_slider">
                            <button></button>
                            <p>1 - — 5</p>
                            <button></button>
                        </div>
                    </div>
                </div>
                <div className="section1_bot">
                    <div className="section1_bot_text">
                        <h2>ГАРАНТИЯ 1 ГОД</h2>
                        <p>на весь ассортимент</p>
                    </div>
                    <div className="section1_bot_text">
                        <h2>РАССРОЧКА</h2>
                        <p>от 6 месяцев</p>
                    </div>
                    <div className="section1_bot_text">
                        <h2>ПОДАРКИ</h2>
                        <p>и бонусы к покупкам</p>
                    </div>
                    <div className="section1_bot_yandex">
                        <img src={Photo.YandexPage1Section1Image} alt="" />
                        <div>
                            <p>Яндекс отзывы</p>
                            <span><img src={Photo.StarPage1Section1Image} alt="" />4,9</span>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}