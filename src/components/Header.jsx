import "./header.css"
import logo from "/Logo_Majo.png"
import { FaFacebookSquare, FaWhatsappSquare, FaMapMarkedAlt, FaInstagramSquare } from "react-icons/fa";

export function Header() {
    const style = { color: "white" ,fontSize: "2em", marginRight: '5px' }
    return (
            <div>
                <header>
                    <img src={logo} alt="Logo da empresa 'Majo'" className="imagem"/>

                </header>
                <nav>
                    <div className="headerContainer">
                        <ul className="ul">
                            <li><a href="https://pt-br.facebook.com/majoconfeccoes.com.br" target="blank_" ><FaFacebookSquare style={style}/></a></li>
                            <li><a href="https://www.instagram.com/majo_confeccoes/" target="blank_" ><FaInstagramSquare style={style}/></a></li>
                            <li><a href="https://wa.me/5199126623" target="blank_"><FaWhatsappSquare style={style}/></a></li>
                            <li><a href="https://goo.gl/maps/zyS6tmxKhtrXQUCm9" target="blank_"><FaMapMarkedAlt style={style}/></a></li>
                        </ul>
                        {/* <input type="search" /> */}
                    </div>

                </nav>

            </div>
    )
}
