import { useState } from "react";

import "./catalogo2.css"


import n2 from "/2.png"
import n3 from "/3.png"
import n4 from "/4.png"
import n5 from "/5.png"
import n6 from "/6.png"
import n7 from "/7.png"
import n8 from "/8.png"
import pa1 from "/PastaA1.jpeg"
import pa2 from "/PastaA2.jpeg"
import pa3 from "/PastaA3.jpeg"
import pa4 from "/PastaA4.jpeg"
import pa5 from "/PastaA5.jpeg"
import pa6 from "/PastaA6.jpeg"
import pa7 from "/PastaA7.jpeg"
import pa8 from "/PastaA8.jpeg"
import pa9 from "/PastaA9.jpeg"
import pa10 from "/PastaA10.jpeg"
import pa11 from "/PastaA11.jpeg"
import pa12 from "/PastaA12.jpeg"
import pa13 from "/PastaA13.jpeg"
import pa14 from "/PastaA14.jpeg"


import pb1 from "/PastaB1.jpeg"
import pb2 from "/PastaB2.jpeg"
import pb3 from "/PastaB3.jpeg"
import pb4 from "/PastaB4.jpeg"
import pb5 from "/PastaB5.jpeg"
import pb6 from "/PastaB6.jpeg"
import pb7 from "/PastaB7.jpeg"
import pb8 from "/PastaB8.jpeg"
import pb9 from "/PastaB9.jpeg"

//-----------------------------------------------------
// Blusas femininas
//-----------------------------------------------------

export function Catalogo({nome, referencia, desc,}) {
    return (
        <div className="container">

            <h1 className="h1Nome">{nome}</h1>
            <p className="pDesc">{desc}</p>
            <p className="pReferencia">{referencia}</p>

            <div className="smallContainer">
                <CatalogoRow img={n4}/>
                <CatalogoRow img={n3}/>
                <CatalogoRow img={n5}/>
                <CatalogoRow img={n6}/>
                <CatalogoRow img={n7}/>
                <CatalogoRow img={n8}/>
            </div>
        </div>
    )
}
//-----------------------------------------------------
// Conjunto Normal
//-----------------------------------------------------
export function Catalogo2({nome, referencia, desc,}) {
    return (
        <div className="container">

            <h1 className="h1Nome">{nome}</h1>
            <p className="pDesc">{desc}</p>
            <p className="pReferencia">{referencia}</p>

            <div className="smallContainer">
                <CatalogoRow img={pa1} />
                <CatalogoRow img={pa2} />
                <CatalogoRow img={pa3} />
                <CatalogoRow img={pa4} />
                <CatalogoRow img={pa5} />
                <CatalogoRow img={pa6} />
                <CatalogoRow img={pa7} />
                <CatalogoRow img={pa8} />
                <CatalogoRow img={pa9} />
                <CatalogoRow img={pa10} />
                <CatalogoRow img={pa11} />
                <CatalogoRow img={pa12} />
                <CatalogoRow img={pa13} />
                <CatalogoRow img={pa14} />
            </div>
        </div>
    )
}
//-----------------------------------------------------
// Conjunto Largo
//-----------------------------------------------------
export function Catalogo3({nome, referencia, desc,}) {
    return (
        <div className="container">

            <h1 className="h1Nome">{nome}</h1>
            <p className="pDesc">{desc}</p>
            <p className="pReferencia">{referencia}</p>

            <div className="smallContainer">
                <CatalogoRow img={pb1} />
                <CatalogoRow img={pb2} />
                <CatalogoRow img={pb3} />
                <CatalogoRow img={pb4} />
                <CatalogoRow img={pb5} />
                <CatalogoRow img={pb6} />
                <CatalogoRow img={pb7} />
                <CatalogoRow img={pb8} />
                <CatalogoRow img={pb9} />
            </div>
        </div>
    )
}
export function CatalogoRow({img, img2, img3, img4}) {

    return (
        <div className="row">
            <div className="col">
                <img src={img} alt="" className="img" />
             </div>
        </div>
    )
}

