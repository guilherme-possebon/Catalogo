import {Catalogo, Catalogo2, Catalogo3, Catalogo4, Catalogo5,} from "./components/Catalogo"
import {Header} from "./components/Header"

function App() {

  return (
    <div className="App">
      <Header />

      <Catalogo nome="Blusa Térmica Feminina" referencia="959, 959-1" desc='Malha Pettenati. Disponivel nos tamanhos: P ao G2' />
      <Catalogo2 nome="Lingerie" referencia="921" />
      <Catalogo3 nome="Lingerie" referencia="968"/>
      <Catalogo4 nome={"Cropped"} referencia={'921-5'} />
      <Catalogo5 nome={"Tomara que caia"} referencia={'939-2'} />
    </div>
  )
}

export default App
