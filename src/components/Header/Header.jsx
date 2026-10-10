import "./Header.scss"
import { Photo } from "../../Images.js"
import { Link } from "react-router-dom"

export default function Header(){
    return(
        <>
            <header className="header">
                <div className="header_top">
                    <div className="header_top_inside">
                        <div className="header_top_inside_left">
                            <ul>
                                <Link to="">Сервис</Link>
                                <Link to="">Сотрудничество</Link>
                                <Link to="">Заказать звонок</Link>
                            </ul>
                            <div>
                                <ul>
                                    <Link to=""><img src={Photo.ViberHeaderImage} alt="" /></Link>
                                    <Link to=""><img src={Photo.WhatsappHeaderImage} alt="" /></Link>                                
                                    <Link to=""><img src={Photo.TelegramHeaderImage} alt="" /></Link>   
                                </ul>
                            </div>
                        </div>
                        <div className="header_top_inside_right">
                            <p>+7 (800) 505-54-61</p>
                            <button><img src={Photo.PlusHeaderImage} alt="" /></button>
                        </div>
                    </div>
                </div>
                <nav>
                    <div className="header_nav_inside">
                        <Link to="" className="header_nav_inside_logo">KUGOO</Link>
                        <button className="header_nav_inside_catalog"><img src={Photo.ListHeaderImage} alt="" />Каталог</button>
                        <div className="header_nav_inside_search_panel">
                            <button className="header_nav_inside_search_panel_vezde">Везде<img src={Photo.TriangleHeaderImage} alt="" /></button>
                            <div>
                                <input type="text" placeholder="Искать самокат KUGO"/>
                                <button><img src={Photo.SearchHeaderImage} alt="" /></button>
                            </div>
                        </div>
                        <div className="header_nav_inside_right">
                            <Link to="" className="header_nav_inside_right_button"><img src={Photo.BalanceHeaderImage} alt="" /></Link>
                            <Link to="" className="header_nav_inside_right_button"><img src={Photo.HeartHeaderImage} alt="" /></Link>
                            <Link to="" className="header_nav_inside_right_button"><img src={Photo.CartHeaderImage} alt="" />Корзина</Link>
                        </div>
                    </div>
                </nav>
                <div className="header_bot">
                    <ul>
                        <Link to="">О магазине</Link>
                        <Link to="">
                            Доставка и оплата
                            <span>Доступная рассрочка</span>
                        </Link>
                        <Link to="">Тест-драйв</Link>
                        <Link to="">Блог</Link>
                        <Link to="">Контакты</Link>
                        <Link to="">
                            Акции
                            <span>%</span>
                        </Link>
                    </ul>
                </div>
            </header>
        </>
    )
}