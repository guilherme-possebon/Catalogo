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
import pb1 from "/PastaB1.jpeg"
import pb2 from "/PastaB2.jpeg"
import pb3 from "/PastaB3.jpeg"
import pb4 from "/PastaB4.jpeg"
import pb5 from "/PastaB5.jpeg"
import pb6 from "/PastaB6.jpeg"
import pb7 from "/PastaB7.jpeg"



import logo from "/Logo_Majo.png"



export function Catalogo({nome, referencia, desc,}) {
    return (
        <div className="container">

            <h1 className="h1Nome">{nome}</h1>
            <p className="pDesc">{desc}</p>
            <p className="pReferencia">{referencia}</p>

            <div className="smallContainer">
                <CatalogoRow2 img={n4}/>
                <CatalogoRow2 img={n3}/>
                <CatalogoRow2 img={n5}/>
                <CatalogoRow2 img={n6}/>
                <CatalogoRow2 img={n7}/>
                <CatalogoRow2 img={n8}/>
            </div>
        </div>
    )
}
export function Catalogo2({nome, referencia, desc,}) {
    return (
        <div className="container">

            <h1 className="h1Nome">{nome}</h1>
            <p className="pDesc">{desc}</p>
            <p className="pReferencia">{referencia}</p>

            <div className="smallContainer">
                <CatalogoRow2 img={pa1} />
                <CatalogoRow2 img={pa2} />
                <CatalogoRow2 img={pa3} />
                <CatalogoRow2 img={pa4} />
                <CatalogoRow2 img={pa5} />
                <CatalogoRow2 img={pa6} />
                <CatalogoRow2 img={pa7} />
                <CatalogoRow2 img={pa8} />
                <CatalogoRow2 img={pa9} />
                <CatalogoRow2 img={pa10} />
            </div>
        </div>
    )
}
export function Catalogo3({nome, referencia, desc,}) {
    return (
        <div className="container">

            <h1 className="h1Nome">{nome}</h1>
            <p className="pDesc">{desc}</p>
            <p className="pReferencia">{referencia}</p>

            <div className="smallContainer">
                <CatalogoRow2 img={pb1} />
                <CatalogoRow2 img={pb2} />
                <CatalogoRow2 img={pb3} />
                <CatalogoRow2 img={pb4} />
                <CatalogoRow2 img={pb5} />
                <CatalogoRow2 img={pb6} />
                <CatalogoRow2 img={pb7} />
            </div>
        </div>
    )
}
export function CatalogoRow2({img, img2, img3, img4}) {

    return (
        <div className="row">
            <div className="col">
                <img src={img} alt="" className="img" />
             </div>
        </div>
    )
}

