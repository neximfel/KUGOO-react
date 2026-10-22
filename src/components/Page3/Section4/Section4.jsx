import "./Section4.scss"
import { Photo } from "../../../Images.js"

export default function Section4(){
    return(
        <>
            <section className="page3_section4">
                <div className="page3_section4_inside">
                    <div className="page3_section4_inside_field">
                        <h1>ДАВАЙТЕ ОБСУДИМ УСЛОВИЯ СОТРУДНИЧЕСТВА, КОТОРЫЕ 
                            ПОДХОДЯТ ИМЕННО ДЛЯ ВАШЕЙ КОМПАНИИ</h1>
                        <div>
                            <input type="phone" placeholder="+7 ( _ _ _ ) _ _ - _ _ - _ _"/>
                            <button>Скачать прайс-лист</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}