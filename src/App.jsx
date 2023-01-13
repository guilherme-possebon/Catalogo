import Catalogo from "./components/Catalogo"
import './appCss.css'
import n2 from "../public/2.jpeg"
import n3 from "../public/3.jpeg"
import n4 from "../public/4.jpeg"
import n5 from "../public/5.jpeg"
import n6 from "../public/6.jpeg"
import n7 from "../public/7.jpeg"
import n8 from "../public/8.jpeg"
import face from "../public/logo-facebook.jpg"
import insta from "../public/logo-instagram.jpg"
import whats from "../public/whats.png"
import logo from "../public/Logo Majo.png"


function App() {

  return (
    <div className="App">
      <header>
        <img src={logo} alt="Logo da empresa 'Majo' "/>
        <a href="https://pt-br.facebook.com/majoconfeccoes.com.br" target="blank_" ><img src={face} alt="" className="facebook" /></a>
        <a href="https://www.instagram.com/majo_confeccoes/" target="blank_" ><img src={insta} alt="" className="instagram" /></a>
        <a href="https://wa.me/5199126623" target="blank_"><img src={whats} alt="" className="whats" /></a>
      </header>

      <Catalogo nome="Blusa Feminina" referencia="959, 959-1" img={n2} desc='Blusa térmica feminina, malha pettenati. Disponivel nos tamanhos: P ao G2' det='Mais detalhes' phref="#" />
      <hr />
      <Catalogo nome="Blusa Feminina" referencia="959, 959-1" img={n3} desc='Blusa térmica feminina, malha pettenati. Disponivel nos tamanhos: P ao G2' det='Mais detalhes' phref="#" />
      <hr />
      <Catalogo nome="Blusa Feminina" referencia="959, 959-1" img={n4} desc='Blusa térmica feminina, malha pettenati. Disponivel nos tamanhos: P ao G2' det='Mais detalhes' phref="#" />
      <hr />
      <Catalogo nome="Blusa Feminina" referencia="959, 959-1" img={n5} desc='Blusa térmica feminina, malha pettenati. Disponivel nos tamanhos: P ao G2' det='Mais detalhes' phref="#" />
      <hr />
      <Catalogo nome="Blusa Feminina" referencia="959, 959-1" img={n6} desc='Blusa térmica feminina, malha pettenati. Disponivel nos tamanhos: P ao G2' det='Mais detalhes' phref="#" />
      <hr />
      <Catalogo nome="Blusa Feminina" referencia="959, 959-1" img={n7} desc='Blusa térmica feminina, malha pettenati. Disponivel nos tamanhos: P ao G2' det='Mais detalhes' phref="#" />
      <hr />
      <Catalogo nome="Blusa Feminina" referencia="959, 959-1" img={n8} desc='Blusa térmica feminina, malha pettenati. Disponivel nos tamanhos: P ao G2' det='Mais detalhes' phref="#" />
      <hr />
      
      
    </div>
  )
}

export default App
