import Catalogo from "./components/Catalogo"
import './appCss.css'


function App() {

  return (
    <div className="App">
      <header>
        <img src="/Logo Majo.png" alt="Logo da empresa 'Majo' "/>
        <a href="https://pt-br.facebook.com/majoconfeccoes.com.br" target="blank_" ><img src="/logo-facebook.jpg" alt="" className="facebook" /></a>
        <a href="https://www.instagram.com/majo_confeccoes/" target="blank_" ><img src="/logo-instagram.jpg" alt="" className="instagram" /></a>
        <a href="https://wa.me/5199126623" target="blank_"><img src="/whats.png" alt="" className="whats" /></a>
      </header>

      <Catalogo nome="Blusa Feminina" referencia="959, 959-1" img="/3.jpeg" desc='Blusa térmica feminina, malha pettenati. Disponivel nos tamanhos: P ao G2' det='Mais detalhes' phref="#" />
      <hr />
      <Catalogo nome="Blusa Feminina" referencia="959, 959-1" img="/4.jpeg" desc='Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi voluptates aliquid aut! Officiis dignissimos, quae optio placeat doloribus nulla. Iusto illum quis quibusdam excepturi perspiciatis laborum labore soluta nihil ab!' det='Mais detalhes' phref="#" />
      <hr />
      <Catalogo nome="Blusa Feminina" referencia="959, 959-1" img="/5.jpeg" desc='Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi voluptates aliquid aut! Officiis dignissimos, quae optio placeat doloribus nulla. Iusto illum quis quibusdam excepturi perspiciatis laborum labore soluta nihil ab!' det='Mais detalhes' phref="#" />
      <hr />
      <Catalogo nome="Blusa Feminina" referencia="959, 959-1" img="/6.jpeg" desc='Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi voluptates aliquid aut! Officiis dignissimos, quae optio placeat doloribus nulla. Iusto illum quis quibusdam excepturi perspiciatis laborum labore soluta nihil ab!' det='Mais detalhes' phref="#" />
      <hr />
      <Catalogo nome="Blusa Feminina" referencia="959, 959-1" img="/7.jpeg" desc='Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi voluptates aliquid aut! Officiis dignissimos, quae optio placeat doloribus nulla. Iusto illum quis quibusdam excepturi perspiciatis laborum labore soluta nihil ab!' det='Mais detalhes' phref="#" />
      <hr />
      <Catalogo nome="Blusa Feminina" referencia="959, 959-1" img="/8.jpeg" desc='Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi voluptates aliquid aut! Officiis dignissimos, quae optio placeat doloribus nulla. Iusto illum quis quibusdam excepturi perspiciatis laborum labore soluta nihil ab!' det='Mais detalhes' phref="#" />
      <hr />
      
      
    </div>
  )
}

export default App
