import Header from './componentes/Header/Header';
import Hero from './componentes/Hero/Hero'
import QuemSou from './componentes/QuemSou/QuemSou'
import QuemSou2 from './componentes/QuemSou2/QuemSou2'
import RedesSociais from './componentes/RedesSociais/RedesSociais'
import Servicos from './componentes/Servicos/Servicos'
import Agendamento from './componentes/Agendamento/Agendamento'
import Footer from './componentes/Footer/Footer'
import Background from './componentes/Background/Background';

function App() {
  return (
    <div className="App">
      <Background />
      <Header />
      <Hero />
      <QuemSou />
      <QuemSou2  />
      <Servicos />
      <Agendamento />
      <RedesSociais />
      <Footer />
    </div>
  );
}

export default App;
