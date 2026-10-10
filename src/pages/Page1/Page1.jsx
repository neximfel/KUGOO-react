import { Link } from "react-router-dom"
import "./Page1.scss"
import Section1 from "../../components/Page1/Section1/Section1.jsx"
import Section2 from "../../components/Page1/Section2/Section2.jsx"

export default function Page1(){
    return(
        <>
            <Section1/>
                <Section2/>
        </>
    )
}