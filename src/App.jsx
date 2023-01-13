import Catalogo from "./components/Catalogo"
import './appCss.css'


function App() {

  return (
    <div className="App">
      <header>
        <img src="https://drive.google.com/file/d/1abALBz2E9YuF8pWcxJaKJnQnij2wzVeI/view?usp=share_link" alt="Logo da empresa 'Majo' "/>
        <a href="https://pt-br.facebook.com/majoconfeccoes.com.br" target="blank_" ><img src="https://drive.google.com/file/d/1-fa06BU1P69FW7gmeU9UtnYtfv3Cmi6e/view?usp=share_link" alt="" className="facebook" /></a>
        <a href="https://www.instagram.com/majo_confeccoes/" target="blank_" ><img src="https://drive.google.com/file/d/1ZN5J6YfdzGTqnhkOa4Lgmzqie6zOFLT0/view?usp=share_link" alt="" className="instagram" /></a>
        <a href="https://wa.me/5199126623" target="blank_"><img src="https://drive.google.com/file/d/1fOH0-Z8vt7lS4Ofj6RAHO2mwZq94fLLy/view?usp=share_link" alt="" className="whats" /></a>
      </header>

      <Catalogo nome="Blusa Feminina" referencia="959, 959-1" img="https://drive.google.com/file/d/1KVricWwHW8iUVzRNoaatoegVhcmNSULy/view?usp=share_link" desc='Blusa térmica feminina, malha pettenati. Disponivel nos tamanhos: P ao G2' det='Mais detalhes' phref="#" />
      <hr />
      <Catalogo nome="Blusa Feminina" referencia="959, 959-1" img="https://drive.google.com/file/d/15_q7ztmrUs08Go0lhLIIf5MV88StYbQZ/view?usp=share_link" desc='Blusa térmica feminina, malha pettenati. Disponivel nos tamanhos: P ao G2' det='Mais detalhes' phref="#" />
      <hr />
      <Catalogo nome="Blusa Feminina" referencia="959, 959-1" img="https://drive.google.com/file/d/1F1um7cosnTlKNtlPkRoAQxTPHCttECHm/view?usp=share_link" desc='Blusa térmica feminina, malha pettenati. Disponivel nos tamanhos: P ao G2' det='Mais detalhes' phref="#" />
      <hr />
      <Catalogo nome="Blusa Feminina" referencia="959, 959-1" img="https://drive.google.com/file/d/1slPOMlcah0b7SiV-yabnLXft72PXj7fP/view?usp=share_link" desc='Blusa térmica feminina, malha pettenati. Disponivel nos tamanhos: P ao G2' det='Mais detalhes' phref="#" />
      <hr />
      <Catalogo nome="Blusa Feminina" referencia="959, 959-1" img="https://drive.google.com/file/d/14ioDt-STZ0oOWrNhT_dYlg0nnGWHebyW/view?usp=share_link" desc='Blusa térmica feminina, malha pettenati. Disponivel nos tamanhos: P ao G2' det='Mais detalhes' phref="#" />
      <hr />
      <Catalogo nome="Blusa Feminina" referencia="959, 959-1" img="https://drive.google.com/file/d/1Gw-NSh2skpeo_d_b8N7GeTtVO-M523rB/view?usp=share_link" desc='Blusa térmica feminina, malha pettenati. Disponivel nos tamanhos: P ao G2' det='Mais detalhes' phref="#" />
      <hr />
      
      
    </div>
  )
}

export default App
