import "./Section4.scss"
import { Photo } from "../../../Images.js"
import { Link } from "react-router-dom"
import { useState } from "react"


export default function Section4(){
    return(
        <>
            <section className="page2_section4">
                <div className="page2_section4_inside">
                    <div className="page2_section4_inside_field">
                        <span>Услуга</span>
                        <h1>ОПРЕДЕЛИМ ПРИЧИНУ НЕИСПРАВНОСТИ УДАЛЕННО ИЛИ НА ДИАГНОСТИКЕ!</h1>
                        <button>Записатьсяна диагностику</button>
                    </div>
                </div>
            </section>
        </>
    )
}