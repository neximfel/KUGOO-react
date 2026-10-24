import "./Footer.scss"
import { Photo } from "../../Images.js"
import { Link } from "react-router-dom"
import { useState } from "react"

const pays = [
    {img: Photo.ApplePayFooterImage},
    {img: Photo.GooglePayFooterImage},
    {img: Photo.MaestroPayFooterImage},
    {img: Photo.MasterPayFooterImage},
    {img: Photo.WebmoneyPayFooterImage},
    {img: Photo.QiwiPayFooterImage},
    {img: Photo.VisaPayFooterImage},
    
]
const chats = [
    {img: Photo.ViberFooterImage, url: "https://www.viber.com/"},
    {img: Photo.TelegramFooterImage, url: "https://telegram.org"},
    {img: Photo.WhatsAppFooterImage, url: "https://www.whatsapp.com"},
]
const servcies = [
    {title: "Вконтакте", count: "3 300",img: Photo.VKLogoFooterImage, url: "https://vk.ru/"},
    {title: "Instagram", count: "10 602",img: Photo.InstagramLogoFooterImage, url: "https://www.instagram.com/"},
    {title: "YouTube", count: "3 603",img: Photo.YouTubeLogoFooterImage, url: "https://www.youtube.com/"},
    {title: "Telegram", count: "432",img: Photo.TelegramLogoFooterImage, url: "https://telegram.org"},
]
const catalog = [
    {text: "Электросамокаты"},
    {text: "Электроскутеры"},
    {text: "Электровелосипеды"},
    {text: "Электровелосипеды"},
]
const for_customers = [
    {text: "Сервисный центр", link: "/page2"},
    {text: "Блог", link: ""},
    {text: "Доставка и оплата", link: ""},
    {text: "Сотрудничество", link: "/page3"},
    {text: "Рассрочка", link: ""},
    {text: "Контакты", link: ""},
    {text: "Тест-драйв", link: "/page4"},
    {text: "Акции", link: ""},
]
const contacts1 = [
    {title: "Call-центр", number: "+7 (800) 505-54-61", text: "Пн-Вс 10:00 - 20:00"},
    {title: "Сервисный центр", number: "+7 (499) 350-76-92", text: "Пн-Вс 10:00 - 20:00"},
]
const contacts2 = [
    {title: `Магазин в Москве \n ул. Ткацкая, 5 стр. 16`, text: "+7 (499) 406 15 87"},
    {title: `Магазин в Санкт-Петербурге \n ул. Фрунзе, 2`, text: "+7 (499) 406 15 87"},
    {title: `Магазин в Краснодаре \n ул. Восточно-Кругликовская, 86`, text: "+ 7 (800) 505 54 61"},
]

export default function Footer(){

    return(
        <>
            <footer className="footer">
                <div className="footer_top">
                    <div className="footer_top_inside">
                        <h2>ОСТАВЬТЕ СВОЮ ПОЧТУ И СТАНЬТЕ ПЕРВЫМ, КТО ПОЛУЧИТ СКИДКУ НА НОВЫЕ САМОКАТЫ</h2>
                        <div>
                            <input type="email" placeholder="Введите Ваш email"/>
                            <button>Подписаться</button>
                        </div>
                    </div>
                </div>
                <div className="footer_inside">
                    <div className="footer_inside_top">
                        <div className="footer_inside_top_catalog">
                            <h3>Каталог товаров</h3>
                            <div>
                                {catalog.map((meow, index) => (
                                    <Link to="" key={index}>{meow.text}</Link>
                                ))}
                            </div>
                        </div>
                        <div className="footer_inside_top_for_customers">
                            <h3>Покупателям</h3>
                            <div>
                                {for_customers.map((meow, index) => (
                                    <Link to={meow.link} key={index}>{meow.text}</Link>
                                ))}
                            </div>
                        </div>
                        <div className="footer_inside_top_contacts">
                            <div>
                                <h3>Контакты</h3>
                                <button>Заказать звонок</button>
                            </div>
                            <div className="footer_inside_top_contacts_punkts">
                                <div className="footer_inside_top_contacts_punkts_container">
                                    {contacts1.map((meow, index) => (
                                        <div key={index}>
                                            <p className="footer_punkts_title1">{meow.title}</p>
                                            <h2>{meow.number}</h2>
                                            <p className="footer_punkts_descr">{meow.text}</p>
                                        </div>
                                    ))}
                                </div>
                                <div className="footer_inside_top_contacts_punkts_container">
                                    {contacts2.map((meow, index) => (
                                        <div key={index}>
                                            <p className="footer_punkts_title2">{meow.title}</p>
                                            <p className="footer_punkts_descr">{meow.text}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer_inside_mid">
                        <Link to="" className="header_nav_inside_logo">KUGOO</Link>
                        <div className="footer_inside_mid_avaibles">
                            <div><img src={Photo.GooglePlayFooterImage} alt="" /></div>
                            <div><img src={Photo.AppStoreFooterImage} alt="" /></div>
                        </div>
                        <div className="footer_inside_mid_servcies">
                            {servcies.map((meow, index) => (
                                <a href={meow.url} key={index} className="footer_inside_mid_servcies_art">
                                    <img src={meow.img} alt="" />
                                    <div>
                                        <h4>{meow.title}</h4>
                                        <p>{meow.count}</p>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>
                    <div className="footer_inside_bot">
                        <div className="footer_inside_bot_left">
                            <p>Реквизиты</p>
                            <p>Политика конфиденциальности</p>
                        </div>
                        <div className="footer_inside_bot_right">
                            <div className="footer_inside_bot_right_pays">
                                {pays.map((meow, index) => (
                                    <div key={index}><img src={meow.img} alt="" /></div>
                                ))}
                            </div>
                            <div className="footer_inside_bot_right_chat">
                                <p>Online чат:</p>
                                {chats.map((meow, index) => (
                                    <a href={meow.url} key={index}><img src={meow.img} alt="" /></a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}