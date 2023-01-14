import { useState } from "react";

import "./catalogo2.css"


import n2 from "/2.png"
import n3 from "/3.png"
import n4 from "/4.png"
import n5 from "/5.png"
import n6 from "/6.png"
import n7 from "/7.png"
import n8 from "/8.png"
import logo from "/Logo_Majo.png"



export function Catalogo({nome, referencia, desc,}) {
    return (
        <div className="container">

            <h1 className="h1Nome">{nome}</h1>
            <p className="pDesc">{desc}</p>
            <p className="pReferencia">{referencia}</p>

            <div className="smallContainer">
                <CatalagoRow img1={n4} imgn1={n2} img2={n3} img3={n4} det="Mais detalhes"/>
                <CatalagoRow img1={n5} img2={n6} img3={n7} det="Mais detalhes"/>
                <CatalagoRow img1={n8} img2={n8} img3={n8} det="Mais detalhes"/>

            </div>
        </div>
    )
}

export function CatalagoRow({img1, imgn1, img2, img3, phref, det}) {
    
    const [btnState, setBtnState] = useState(false)
  
    function handleClick() {
        setBtnState(btnState => !btnState)
    }

    let displayNone = btnState ? false : ''
    
    let unToggleClassCheck = btnState ? true : false

    return (
        <div className="row">
            <div className="col">
                <img src={img1} alt=""  className={`img ${displayNone}`}/>
                <img src={imgn1} alt="" className={`img ${unToggleClassCheck}`} />
                <p></p>
                <button className="btn pDet" onClick={handleClick}>Mais detalhes</button>
                                   

            </div>
            <div className="col">
            <img src={img1} alt=""  className={`img ${displayNone}`}/>
                <img src={imgn1} alt="" className={`img ${unToggleClassCheck}`} />
                <p></p>
                <button className="btn pDet" onClick={handleClick}>Mais detalhes</button>     

            </div>
            <div className="col">
            <img src={img1} alt=""  className={`img ${displayNone}`}/>
                <img src={imgn1} alt="" className={`img ${unToggleClassCheck}`} />
                <p></p>
                <button className="btn pDet" onClick={handleClick}>Mais detalhes</button>

            </div>
        </div>
    )
}








// export function Detalhe({imgn1, imgn2, imgn3, img1, img2, img3, det}) {

//     const [btnState, setBtnState] = useState(false)
  
//     function handleClick() {
//         setBtnState(btnState => !btnState)
//     }
  
//     let toggleClassCheck = btnState ? ' active' : null
    
//     let unToggleClassCheck = btnState ? undefined : ' ativo'
     
//     return (
//         <div className={`btn ${toggleClassCheck}`}>

//             <img src={img1} alt=""  className="img img1"/>
//             <img src={imgn1} className={`${unToggleClassCheck}`} alt="" />
//             <button onClick={handleClick}>
//                 Mais detalhes
//           </button>

//             <img src={imgn2} className={`${unToggleClassCheck}`} alt="" />
//             <button onClick={handleClick}>
//                 Mais detalhes
//           </button>

//             <img src={imgn3} className={`${unToggleClassCheck}`} alt="" />
//             <button onClick={handleClick}>
//                 Mais detalhes
//           </button>

//         </div>
//     )
//   }