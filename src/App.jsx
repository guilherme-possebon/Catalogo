import {Catalogo} from "./components/Catalogo"
import {Header} from "./components/Header"

function App() {

  return (
    <div className="App">
      <Header />

      <Catalogo nome="Blusa Térmica Feminina" referencia="959, 959-1" desc='Malha pettenati. Disponivel nos tamanhos: P ao G2' />
    </div>
  )
}

export default App
