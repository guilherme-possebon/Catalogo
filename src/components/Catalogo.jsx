import "./catalogo2.css"
import PropTypes from "prop-types"
import CatalagoRow from "./CatalogoRow.jsx"
import n2 from "/2-removebg-preview.png"
import n3 from "/3-removebg-preview.png"
import n4 from "/4-removebg-preview.png"
import n5 from "/5-removebg-preview.png"
import n6 from "/6-removebg-preview.png"
import n7 from "/7-removebg-preview.png"
import n8 from "/8-removebg-preview.png"
import logo from "/Logo_Majo-removebg-preview.png"


function Catalogo({nome, referencia, desc,}) {
    return (
        <div className="container">

            <h1 className="h1Nome">{nome}</h1>
            <p className="pDesc">{desc}</p>
            <p className="pReferencia">{referencia}</p>

            <div className="smallContainer">
                <CatalagoRow img1={n2} img2={n3} img3={n4} det="Mais detalhes"/>
                <CatalagoRow img1={n5} img2={n6} img3={n7} det="Mais detalhes"/>
                <CatalagoRow img1={n8} img2={logo} img3={logo} det="Mais detalhes"/>

            </div>
        </div>
    )
}

export default Catalogo