import "./Header.scss"
import { Photo } from "../../Images.js"
import { Link } from "react-router-dom"

export default function Header(){
    return(
        <>
            <header>
                <div className="header_inside">
                    <div className="header_inside_top">
                        <div className="header_inside_top_left">
                            <ul>
                                <Link to=""></Link>
                                <Link to=""></Link>
                                <Link to=""></Link>
                            </ul>
                            <div>
                                <ul>
                                    <Link to=""></Link>
                                    <Link to=""></Link>                                
                                    <Link to=""></Link>   
                                </ul>                             
                            </div>
                        </div>
                        <div className="header_inside_top_right">
                            <p>+7 (800) 505-54-61</p>
                            <button><img src={Photo.PlusHeaderImage} alt="" /></button>
                        </div>
                    </div>
                    <nav>
                        <Link to="">KUGOO</Link>
                        <button><img src={Photo.ListHeaderImage} alt="" />Каталог</button>
                        <div className="header_nav_search_panel">
                            <button className="header_nav_search_panel_vezde">Везде<img src={Photo.TriangleHeaderImage} alt="" /></button>
                            <div>
                                <input type="text" placeholder="Искать самокат KUGO"/>
                                <button><img src={Photo.SearchHeaderImage} alt="" /></button>
                            </div>                            
                        </div>

                    </nav>
                    <div className="header_inside_bot">
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
                </div>
            </header>
        </>
    )
}