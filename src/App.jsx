import {Catalogo} from "./components/Catalogo"
import { Catalogo2 } from "./components/Catalogo"
import { Catalogo3 } from "./components/Catalogo"
import {Header} from "./components/Header"

function App() {

  return (
    <div className="App">
      <Header />

      <Catalogo nome="Blusa Térmica Feminina" referencia="959, 959-1" desc='Malha pettenati. Disponivel nos tamanhos: P ao G2' />
      <Catalogo2 nome="Pasta A" referencia="959, 959-1" desc='Descrição da pasta a' />
      <Catalogo3 nome="Pasta b" referencia="959, 959-1" desc='Descrição da pasta b' />
    </div>
  )
}

export default App
