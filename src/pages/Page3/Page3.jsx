import { Link } from "react-router-dom"
import "./Page3.scss"
import Section1 from "../../components/Page3/Section1/Section1.jsx"
import Section2 from "../../components/Page3/Section2/Section2.jsx"
import Section8 from "../../components/Page3/Section8/Section8.jsx"
import Section9 from "../../components/Page3/Section9/Section9.jsx"
import Section10 from "../../components/Page3/Section10/Section10.jsx"
import Section11 from "../../components/Page3/Section11/Section11.jsx"
import Section12 from "../../components/Page3/Section12/Section12.jsx"

export default function Page3(){
    return(
        <>
            <div className="page3_div_container1">
                <Section1/>
                    <Section2/>
                        <Section8/>
                            <Section9/>
                                <Section10/>
                                    <Section11/>
                                        <Section12/>
            </div>
        </>
    )
}