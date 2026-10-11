import { Link } from "react-router-dom"
import "./Page1.scss"
import Section1 from "../../components/Page1/Section1/Section1.jsx"
import Section2 from "../../components/Page1/Section2/Section2.jsx"
import Section3 from "../../components/Page1/Section3/Section3.jsx"
import Section4 from "../../components/Page1/Section4/Section4.jsx"
import Section5 from "../../components/Page1/Section5/Section5.jsx"
import Section6 from "../../components/Page1/Section6/Section6.jsx"

export default function Page1(){
    return(
        <>
            <div className="page1_div_container1">
                <div className="page1_div_container2">
                    <Section1/>
                        <Section2/>
                </div>
                    <Section3/>
                        <Section4/>
                            <Section5/>
                                <Section6/>
            </div>
        </>
    )
}