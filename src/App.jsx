import {Catalogo} from "./components/Catalogo"
import { Catalogo2 } from "./components/Catalogo"
import { Catalogo3 } from "./components/Catalogo"
import {Header} from "./components/Header"

function App() {

  return (
    <div className="App">
      <Header />

      <Catalogo nome="Blusa Térmica Feminina" referencia="959, 959-1" desc='Malha Pettenati. Disponivel nos tamanhos: P ao G2' />
      <Catalogo2 nome="Lingerie" referencia="921" />
      <Catalogo3 nome="Lingerie" referencia="968"/>
    </div>
  )
}

export default App
