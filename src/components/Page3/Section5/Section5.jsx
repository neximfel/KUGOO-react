import "./Section5.scss"
import { Photo } from "../../../Images.js"

export default function Section5(){
    return(
        <>
            <section className="page3_section5">
                <div className="page3_section5_inside">
                    <div className="page3_section5_inside_title">
                        <h1>
                            ДОСТАВЛЯЕМ СО СКЛАДОВ ПО <span>МОСКВЕ, <br/> КРАСНОДАРУ 
                            И МИНСКУ БЕСПЛАТНО</span>, ПО РОССИИ — <br/> ЛЮБОЙ 
                            ТРАНСПОРТНОЙ КОМПАНИЕЙ НА ВАШ ВЫБОР
                        </h1>
                        <p>
                            Ежегодно оформляем и доставляем более 1 000 оптовых 
                            и розничных заказов. Всегда в наличии на складах весь 
                            ассортимент, представленный в каталоге.
                        </p>
                    </div>
                    <div className="page3_section5_inside_map">
                        <img src={Photo.MapPage3Section5Image} alt="" />
                    </div>
                </div>
            </section>
        </>
    )
}