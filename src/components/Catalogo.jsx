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

import tc1 from "/tc1.jpg"
import tc2 from "/tc2.jpg"

import cp1 from "/cp1.jpg"
import cp2 from "/cp2.jpg"
import cp3 from "/cp3.jpg"
import cp4 from "/cp4.jpg"
import cp5 from "/cp5.jpg"
import cp6 from "/cp6.jpg"
import cp7 from "/cp7.jpg"

export function Catalogo4({nome, referencia}) {
    return (
        <div className="container">

            <h1 className="h1Nome">{nome}</h1>
            <ul>
                <li>Conjuntos de renda poliamida;</li>
                <li>Disponiveis nos tamanhos: P, M, G, GG.</li>
            </ul>
            <p className="pReferencia">{referencia}</p>

            <div className="smallContainer">    
                <CatalogoRow img={cp1} cor={"Cropped (Corsandia)"} />
                <CatalogoRow img={cp2} cor={"Cropped (Fantástico)"} />
                <CatalogoRow img={cp3} cor={"Cropped (Romance)"} />
                <CatalogoRow img={cp4} cor={"Cropped (Rubi)"} />
                <CatalogoRow img={cp5} cor={"Cropped (ZigZag)"} />
                <CatalogoRow img={cp6} cor={"Cropped (Branco)"} />
                <CatalogoRow img={cp7} cor={"Cropped (Preto)"} />
            </div>
        </div>
    )
}
export function Catalogo5({nome, referencia}) {
    return (
        <div className="container">

            <h1 className="h1Nome">{nome}</h1>
            <ul>
                <li>Conjuntos de renda poliamida;</li>
                <li>Disponiveis nos tamanhos: P, M, G, GG.</li>
            </ul>
            <p className="pReferencia">{referencia}</p>

            <div className="smallContainer">    
                <CatalogoRow img={tc1} cor={"Tomara que caia (Branco)"} />
                <CatalogoRow img={tc2} cor={"Tomara que caia (Preto)"} />
            </div>
        </div>
    )
}
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
                <CatalogoRow img={n2} cor={"Detalhe interno da peça"}/>
                <CatalogoRow img={n4} cor={"Rosa"}/>
                <CatalogoRow img={n3} cor={"Azul-Bebê"}/>
                <CatalogoRow img={n5} cor={"Preto"}/>
                <CatalogoRow img={n6} cor={"Bordô"}/>
                <CatalogoRow img={n7} cor={"Rosa Escuro"}/>
                <CatalogoRow img={n8} cor={"Marinho"}/>
            </div>
        </div>
    )
}


//-----------------------------------------------------
// Conjunto Normal
//-----------------------------------------------------


export function Catalogo2({nome, referencia}) {
    return (
        <div className="container">

            <h1 className="h1Nome">{nome}</h1>
            <ul>
                <li>Conjuntos em mircrofibra, 90% poliamida e 10% elastano;</li>
                <li>Opções: Liso, meia renda, e renda;</li>
                <li>Disponiveis nos tamanhos: P, M, G, GG.</li>
            </ul>
            <p className="pReferencia">{referencia}</p>

            <div className="smallContainer">
                <CatalogoRow img={pa2} cor={"Pantera (Meia renda)"} />
                <CatalogoRow img={pa3} cor={"Pantera (Liso)"} />
                <CatalogoRow img={pa10} cor={"Pantera (Renda)"} />
                <CatalogoRow img={pa4} cor={"Romance (Liso)"} />
                <CatalogoRow img={pa6} cor={"Romance (Renda)"} />
                <CatalogoRow img={pa5} cor={"Sanremo (Liso)"} />
                <CatalogoRow img={pa11} cor={"Sanremo (Renda)"} />
                <CatalogoRow img={pa7} cor={"Branco (Liso)"} />
                <CatalogoRow img={pa12} cor={"Branco (Renda)"} />
                <CatalogoRow img={pa8} cor={"Chocolate (Renda)"} />
                <CatalogoRow img={pa9} cor={"Rubi (Liso)"} />
                <CatalogoRow img={pa13} cor={"Sandia (Renda)"} />
                <CatalogoRow img={pa14} cor={"Preto (Renda)"} />
                <CatalogoRow img={pa1} cor={"Fantástico (Renda)"} />
            </div>
        </div>
    )
}


//-----------------------------------------------------
// Conjunto Largo
//-----------------------------------------------------


export function Catalogo3({nome, referencia}) {
    return (
        <div className="container">

            <h1 className="h1Nome">{nome}</h1>
            <ul>
                <li>Conjuntos em mircrofibra, 90% poliamida e 10% elastano;</li>
                <li>Opções: Liso, meia renda, e renda;</li>
                <li>Disponiveis nos tamanhos: M, G, GG.</li>
            </ul>
            <p className="pReferencia">{referencia}</p>

            <div className="smallContainer">
                <CatalogoRow img={pb6} cor={"Sandia (Renda)"} />
                <CatalogoRow img={pb2} cor={"Sandia (Liso)"} />
                <CatalogoRow img={pb5} cor={"Fantástico (Liso)"} />
                <CatalogoRow img={pb8} cor={"Fantástico (Renda)"} />
                <CatalogoRow img={pb7} cor={"Romance (Liso)"} />
                <CatalogoRow img={pb9} cor={"Romance (Renda)"} />
                <CatalogoRow img={pb1} cor={"Preto (Liso)"} />
                <CatalogoRow img={pb3} cor={"Chocolate (Liso)"} />
                <CatalogoRow img={pb4} cor={"Pantera (Liso)"} />
            </div>
        </div>
    )
}

//-----------------------------------------------------
// 
//-----------------------------------------------------



//-----------------------------------------------------
// 
//-----------------------------------------------------


export function CatalogoRow({img, cor}) {

    return (
        <div className="row">
            <div className="col">
                <img src={img} alt="" className="img" />
                <p className="pCor">{cor}</p>
             </div>
        </div>
    )
}

