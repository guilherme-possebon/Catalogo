import "./catalogo2.css"

function CatalagoRow({img1, img2, img3, phref, det}) {

    return (
        <div className="row">
            <div className="col">
                <img src={img1} alt=""  className="img img1"/>
                <p className="pDet"><a href={phref}>{det}</a></p>

            </div>
            <div className="col">
                <img src={img2} alt=""className="img img2"/>
                <p className="pDet"><a href={phref}>{det}</a></p>

            </div>
            <div className="col">
                <img src={img3} alt=""  className="img img3"/>
                <p className="pDet"><a href={phref}>{det}</a></p>

            </div>
        </div>
    )
}

export default CatalagoRow