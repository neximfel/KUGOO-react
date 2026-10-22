import "./Section6.scss"
import { Photo } from "../../../Images.js"

const top = [
    {
        arrow: "",
        div:<>
                <div>
                    <img src={Photo.Page3Section6Image1} alt="" />
                </div>
                <h4>Покупатель</h4>
            </>,
    },
    {
        arrow: Photo.ArrowRightPage3Section6Image,
        div: "",
    },
    {
        arrow: "",
        div:<>
                <div>
                    <img src={Photo.Page3Section6Image2} alt="" />
                </div>
                <h4>Делает заказ</h4>
            </>,
    },
    {
        arrow: Photo.ArrowRightPage3Section6Image,
        div: "",
    },
    {
        arrow: "",
        div:<>
                <div>
                    <img src={Photo.Page3Section6Image3} alt="" />
                </div>
                <h4>Оплачивает вам</h4>
            </>,
    },
    {
        arrow: Photo.ArrowRightPage3Section6Image,
        div: "",
    },
    {
        arrow: "",
        div:<>
                <div>
                    <img src={Photo.Page3Section6Image4} alt="" />
                </div>
                <h4>Продавец (Вы)</h4>
            </>,
    },
]
const bot = [
    {
        arrow: "",
        div:<>
                <div>
                    <img src={Photo.Page3Section6Image5} alt="" />
                </div>
                <h4>Отправка покупателю</h4>
            </>,
    },
    {
        arrow: Photo.ArrowLeftPage3Section6Image,
        div: "",
    },
    {
        arrow: "",
        div:<>
                <div>
                    <img src={Photo.Page3Section6Image6} alt="" />
                </div>
                <h4>Товар</h4>
            </>,
    },
    {
        arrow: Photo.ArrowLeftPage3Section6Image,
        div: "",
    },
    {
        arrow: "",
        div:<>
                <div>
                    <img src={Photo.Page3Section6Image7} alt="" />
                </div>
                <h4>Поставщик (Мы) <br/> обрабатывает заказ</h4>
            </>,
    },
    {
        arrow: Photo.ArrowLeftPage3Section6Image,
        div: "",
    },
    {
        arrow: "",
        div:<>
                <div>
                    <img src={Photo.Page3Section6Image8} alt="" />
                </div>
                <h4>Заказывает товар <br/> на адрес покупателя</h4>
            </>,
    },
]

export default function Section6(){
    return(
        <>
            <section className="page3_section6">
                <div className="page3_section6_inside">
                    <div className="page3_section6_inside_title">
                        <h1 className="title_h1">ПОКУПАЙТЕ ТОВАР ТОГДА, КОГДА ПОЛУЧИТЕ НА НЕГО ЗАКАЗ И ОПЛАТУ ОТ СВОЕГО КЛИЕНТА</h1>
                        <p>За 4 года разработали удобную схему дропшипинга</p>
                    </div>
                    <div className="page3_section6_inside_main">
                        <div className="page3_section6_inside_main_line">
                            {top.map((meow, index) => (
                                <div className="page3_section6_inside_main_line_container" key={index}>
                                    <div className="page3_section6_inside_main_line_container_box">
                                        {meow.div}
                                    </div>
                                    <img src={meow.arrow} alt=""/>
                                </div>
                            ))}
                        </div>
                        <div className="page3_section6_inside_main_mid">
                            <div className="page3_section6_inside_main_mid_arrow"><img src={Photo.ArrowTopPage3Section6Image} alt=""/></div>
                            <div className="page3_section6_inside_main_mid_arrow"><img src={Photo.ArrowBotPage3Section6Image} alt=""/></div>
                        </div>
                        <div className="page3_section6_inside_main_line">
                            {bot.map((meow, index) => (
                                <div className="page3_section6_inside_main_line_container" key={index}>
                                    <div className="page3_section6_inside_main_line_container_box">
                                        {meow.div}
                                    </div>
                                    <img src={meow.arrow} alt=""/>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}