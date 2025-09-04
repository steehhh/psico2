import Header from './componentes/Header/Header';
import Hero from './componentes/Hero/Hero'
import QuemSou from './componentes/QuemSou/QuemSou'
import QuemSou2 from './componentes/QuemSou2/QuemSou2'
import RedesSociais from './componentes/RedesSociais/RedesSociais'
import Servicos from './componentes/Servicos/Servicos'
import Agendamento from './componentes/Agendamento/Agendamento'
import Footer from './componentes/Footer/Footer'

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <QuemSou />
      <QuemSou2  />
      <RedesSociais />
      <Servicos />
      <Agendamento />
      <Footer />
    </div>
  );
}

export default App;
