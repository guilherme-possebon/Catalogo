import "./header.css"
import face from "/logo-facebook.jpg"
import insta from "/logo-instagram.jpg"
import whats from "/whats.png"
import logo from "/Logo Majo.png"
import map from "/maps.png"

function Header() {
    return (
            <div>
                <header>
                    <img src={logo} alt="Logo da empresa 'Majo'" className="imagem"/>

                </header>
                <nav>
                    <div className="container">
                        <ul>
                            <li><a href="https://pt-br.facebook.com/majoconfeccoes.com.br" target="blank_" ><img src={face} alt="" className="facebook" /></a></li>
                            <li><a href="https://www.instagram.com/majo_confeccoes/" target="blank_" ><img src={insta} alt="" className="instagram" /></a></li>
                            <li><a href="https://wa.me/5199126623" target="blank_" className="whatsa"><img src={whats} alt="" className="whats" /></a></li>
                            <li><a href="https://goo.gl/maps/zyS6tmxKhtrXQUCm9" target="blank_"><img src={map} alt="" className="maps" /></a></li>
                        </ul>
                        {/* <input type="search" /> */}
                    </div>

                </nav>

            </div>
    )
}

export default Header