import "./Section4.scss"
import { Photo } from "../../../Images.js"
import { Link } from "react-router-dom"

export default function Section4(){

    return(
        <>
            <section className="page1_section4">
                <div className="page1_section4_inside">
                    <div className="page1_section4_inside_label">
                        <span>Акция</span>
                        <h2>БЕСПЛАТНАЯ ДОСТАВКА ЭЛЕКТРОСАМОКАТОВ ПО РОССИИ ДО 01.09</h2>
                        <Link to="">Подробнее</Link>
                    </div>
                </div>
            </section>
        </>
    )
}