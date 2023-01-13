import Catalogo from "./components/Catalogo"
import './appCss.css'
import Header from "./components/Header"
import n2 from "/2.jpeg"
import n3 from "/3.jpeg"
import n4 from "/4.jpeg"
import n5 from "/5.jpeg"
import n6 from "/6.jpeg"
import n7 from "/7.jpeg"
import n8 from "/8.jpeg"

function App() {

  return (
    <div className="App">
      <Header />

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
