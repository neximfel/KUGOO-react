import "./Section12.scss"
import { Photo } from "../../../Images.js"
import { Link } from "react-router-dom"
import { useState } from "react"


export default function Section8(){

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

                    </div>
                    <div className="footer_inside_mid">

                    </div>
                    <div className="footer_inside_bot">

                    </div>
                </div>
            </footer>
        </>
    )
}