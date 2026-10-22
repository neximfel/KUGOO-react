import { Link } from "react-router-dom"
import "./Page3.scss"
import Section1 from "../../components/Page3/Section1/Section1.jsx"
import Section2 from "../../components/Page3/Section2/Section2.jsx"
import Section3 from "../../components/Page3/Section3/Section3.jsx"
import Section4 from "../../components/Page3/Section4/Section4.jsx"
import Section5 from "../../components/Page3/Section5/Section5.jsx"
import Section6 from "../../components/Page3/Section6/Section6.jsx"
import Section7 from "../../components/Page3/Section7/Section7.jsx"

export default function Page3(){
    return(
        <>
            <div className="page3_div_container1">
                <Section1/>
                    <Section2/>
                        <Section3/>
                            <Section4/>
                                <Section5/>
                                    <Section6/>
                                        <Section7/>
            </div>
        </>
    )
}