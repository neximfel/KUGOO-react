import "./Navigation.scss"
import { Photo } from "../../../Images.js"
import { Link } from "react-router-dom"
import { useState } from "react"


export default function Navigation(){
    return(
        <>
            <section className="page4_navigation">
                <div className="page4_navigation_inside">
                    <img src={Photo.HomePage4NavigationImage} alt="" />
                    <Link to="/">Главная</Link>
                    <p>/</p>
                    <Link to="">Тест-драйв</Link>
                </div>
            </section>
        </>
    )
}