import "./Section7.scss"
import { Photo } from "../../../Images.js"

const punkts = [
    {text: "индивидуальный прайс-лист"},
    {text: "расчет прогнозируемой прибыли и сроков окупаемости"},
    {text: "бренд-зону Kugoo"},
    {text: "разработку сайта"},
    {text: "и еще +15 услуг под ключ"},
]

export default function Section7(){
    return(
        <>
            <section className="page3_section7">
                <div className="page3_section7_inside">
                    <div className="page3_section7_inside_field">
                        <div className="page3_section7_inside_field_text">
                            <span>Бесплатно</span>
                            <h1 className="title_h1">ПОЛУЧИТЕ ГОТОВЫЙ ПЛАН РАЗВИТИЯ БИЗНЕСА 
                                <br/> ПО ПРОДАЖЕ ТОВАРОВ KUGOO</h1>
                            <div className="page3_section7_inside_field_text_punkts">
                                <h5>Подготовим для вас бизнес-план, который включает:</h5>
                                <div className="page3_section7_inside_field_text_punkts_boxes">
                                    {punkts.map((meow, index) => (
                                        <div key={index}>
                                            <img src={Photo.CheckTopPage3Section7Image} alt="" />
                                            <p>{meow.text}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="page3_section7_inside_field_right">
                            <div className="page3_section7_inside_field_right_title">
                                <h3>ПОЛУЧИТЕ ПРАЙС-ЛИСТ С ОПТОВЫМИ ЦЕНАМИ</h3>
                                <p>а также рассчитаем вашу прибыль от продажи товаров Kugoo</p>
                            </div>
                            <input className="page3_section7_inside_field_right_phone" type="phone" placeholder="+7 ( _ _ _ ) _ _ - _ _ - _ _"/>
                            <button>Скачать прайс-лист</button>
                            <div className="page3_section7_inside_field_right_checkbox">
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