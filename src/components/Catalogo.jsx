import "./catalogo.css"
import PropTypes from "prop-types"


function Catalogo({nome, referencia, img, desc, phref, det}) {
    return (
        <main className="main">
            <div className="div1">
                    <div className="div2">
                        <h1 className="h1Nome">{nome}</h1>
                        <p className="pDesc">{desc}</p>
                        <img src={img} alt="Imagens"  className="img"/>
                        <a href={phref} className="pDet">{det}</a>
                        <p className="pReferencia">{referencia}</p>
                    </div>
            </div>
        </main>
    )
}

export default Catalogo