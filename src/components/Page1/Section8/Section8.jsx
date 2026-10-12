import "./Section8.scss"
import { Photo } from "../../../Images.js"
import { Link } from "react-router-dom"

export default function Section8(){

    return(
        <>
            <section className="page1_section8">
                <div className="page1_section8_inside">
                    <button><img src={Photo.TrianglePage1Section8Image} alt="" /></button>
                </div>
            </section>
        </>
    )
}