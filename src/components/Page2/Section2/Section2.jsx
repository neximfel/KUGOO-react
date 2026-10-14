import "./Section2.scss"
import { Photo } from "../../../Images.js"
import { Link } from "react-router-dom"

const about_us_left = [
    {title: "РЕМОНТ ОТ 1 ДНЯ", descr: "Устраним любую неисправность. Обычно делаем это за 1-3 дня, если ремонт \n сложный — предупредим заранее."},
    {title: "РЕМОНТИРУЕМ ТОЛЬКО ТО, ЧТО СЛОМАЛОСЬ", descr: "Не навязываем услуги, диагностируем \n и заранее обговариваем стоимость ремонта."},
    {title: "ОРИГИНАЛЬНЫЕ ЗАПЧАСТИ", descr: "Благодаря прямой связи с производителем имеем в наличии все необходимые новые комплектующие для ремонта."},
]
const about_us_right = [
    {title: "ГАРАНТИЯ", descr: "14 дней на ремонт"},
    {title: "БЕСПЛАТНЫЙ РЕМОНТ", descr: "в течение 1 года после покупки"},
    {title: "РАСШИРЕННАЯ ГАРАНТИЯ", descr: "до 36 месяцев"},
]

export default function Section2(){

    return(
        <>
            <section className="page2_section2">
                <div className="page2_section2_inside">
                    <h1>ПРОВЕДИ ДИАГНОСТИКУ {`\n`} И ОТРЕМОНТИРУЕМ ЛЮБУЮ НЕИСПРАВНОСТЬ</h1>
                    <div className="page2_section2_inside_mid">
                        <div className="page2_section2_inside_mid_text left">
                            {about_us_left.map((meow, index) => (
                                <div key={index}>
                                    <h3>{meow.title}</h3>
                                    <p>{meow.descr}</p>
                                </div>
                            ))}
                        </div>
                        <div className="page2_section2_inside_mid_center">
                            <div className="page2_section2_inside_mid_center_a">
                                <div className="page2_section2_inside_mid_center_a_b">
                                    <button className="page2_section2_inside_mid_center_a_b_button"><img src={Photo.TrianglePage1Section8Image} alt="" /></button>
                                </div>
                            </div>
                        </div>
                        <div className="page2_section2_inside_mid_text right">
                            {about_us_right.map((meow, index) => (
                                <div key={index}>
                                    <h3>{meow.title}</h3>
                                    <p>{meow.descr}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}