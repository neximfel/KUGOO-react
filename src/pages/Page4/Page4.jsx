import { Link } from "react-router-dom"
import "./Page4.scss"
import Navigation from "../../components/Page4/Navigation/Navigation.jsx"
import Section1 from "../../components/Page4/Section1/Section1.jsx"

export default function Page4(){
    return(
        <>
            <Navigation/>
            <div className="page4_div_container1">
                <Section1/>

            </div>
        </>
    )
}