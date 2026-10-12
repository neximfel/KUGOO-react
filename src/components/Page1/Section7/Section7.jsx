import "./Section7.scss"
import { Photo } from "../../../Images.js"
import { Link } from "react-router-dom"
import { useState } from "react"

const navigation_buttons = [
    {title: "Интернет-магазин"},
    {title: "Сервисный центр"}
]
const dop_cards = [
    [{title: "Больше в сервисе", img: Photo.DopCard2Page1Section7Image, link: ""}],
    [{title: "Больше в каталоге", img: Photo.DopCard1Page1Section7Image, link: ""}],
]
const cards1 = [
    {img: Photo.CartPage1Section7Image, title: "Х товаров в каталоге", descr: "Выбирайте товар, который подходит по цене и характеристикам. Если товара нет в наличии — мы сообщим вам о его поступлении.", link: ""},
    {img: Photo.WalletPage1Section7Image, title: "5 способов оплаты", descr: "Вы можете оплатить покупку наличными, картой, онлайн на сайте, через интернет-банкинг или в кредит от «Сбербанка».", link: ""},
    {img: Photo.GarantPage1Section7Image, title: "Полная документация и гарантия 1 год", descr: "При покупке вам выдается кассовый чек, товарный чек и гарантийный талон – эти документы дают право на гарантийное обслуживание.", link: ""},
    {img: Photo.DeliveryPage1Section7Image, title: "Отправка заказа день в день", descr: "Отправляем заказы по всей России день в день или забирайте товар самостоятельно в магазинах в Москве, Санкт-Петербурге и Краснодаре", link: ""},
    {img: Photo.DiscountPage1Section7Image, title: "Рассрочка без переплат", descr: "В нашем магазине можно приобрести любой товар в рассрочку", link: "Подробнее про условия рассрочки"},
]
const cards2 = [
    {img: Photo.CartPage1Section7Image, title: "Ремонт от 1 дня", descr: "Устраним любую неисправность. Обычно делаем это за 1-3 дня, если ремонт сложный — предупредим заранее.", link: ""},
    {img: Photo.WalletPage1Section7Image, title: "Гидроизоляция для долгой службы", descr: "Покроем электросамокат изнутри специальным веществом, которое предотвратит попадание влаги и позволит кататься в любое время года.", link: ""},
    {img: Photo.GarantPage1Section7Image, title: "Ремонтируем только то, что сломалось", descr: "Не навязываем услуги, диагностируем и заранее обговариваем стоимость ремонта.", link: ""},
    {img: Photo.DeliveryPage1Section7Image, title: "Даем гарантию 14 дней на ремонт", descr: "", link: ""},
    {img: Photo.DiscountPage1Section7Image, title: "Оригинальные запчасти", descr: "Благодаря прямой связи с производителем имеем в наличии все необходимые новые комплектующие для ремонта.", link: ""},
]
const all_cards = [cards1, cards2]

export default function Section7(){

    const [isCurrent, setIsCurrent] = useState(0)

    return(
        <>
            <section className="page1_section7">
                <div className="page1_section7_inside">
                    <div className="page1_section7_inside_title">
                        <h1>ПРЕДЛАГАЕМ САМЫЕ ВЫГОДНЫЕ ЦЕНЫ НА ПРОДУКТЫ KUGOO ЗА СЧЕТ ПРЯМЫХ ПОСТАВОК</h1>
                        <p>и заботимся об удобстве покупателей</p>
                    </div>
                    <div className="page1_section7_inside_buttons">
                        {navigation_buttons.map((meow, index) => (
                            <button
                                key={index}
                                className={isCurrent === index ? "active" : ""}
                                onClick={() => setIsCurrent(index)}
                            >{meow.title}</button>
                        ))}
                    </div>
                    <div className="page1_section7_inside_main">
                        {all_cards[isCurrent].map((meow, index) => (
                            <article
                                className="page1_section7_inside_main_art"
                                key={index}
                            >
                                <img src={meow.img} alt="" />
                                <div>
                                    <h3>{meow.title}</h3>
                                    <span><p>{meow.descr}</p><Link to="">{meow.link}</Link></span>
                                </div>
                            </article>
                        ))}
                        {dop_cards[isCurrent].map((meow, index) => (
                            <article
                                className="page1_section7_inside_main_dop_art"
                                key={index}
                                style={{
                                    backgroundImage: `url(${meow.img})`,
                                    backgroundSize: `contain`,
                                    backgroundPosition: `right`,
                                    backgroundRepeat: `no-repeat`,
                                }}
                            >
                                <div className="page1_section7_inside_main_dop_art_inside">
                                    <h3>{meow.title}</h3>
                                    <Link to={meow.link}>Перейти <img src={Photo.ArrowPage1Section7Image} alt="" /></Link>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}