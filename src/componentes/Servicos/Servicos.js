import './Servicos.css';

function Servicos() {
  return (
    <section id='Servicos' className="servicos">
      <div className="servicos__cabecalho">
        <h2 className="servicos__titulo">Meus Serviços</h2>
        <div className="servicos__linha"></div>
      </div>

      <div className="servicos__grid">
        <div className="servico-card">
          <h3>Consultoria Estratégica em Psicologia</h3>
          <p className="preco">R$ 255 por sessão.</p>
          <p className="descricao">
            Nossa abordagem especializada ajuda indivíduos e organizações a identificar e superar barreiras psicológicas.
            Oferecemos planos personalizados focados no desenvolvimento pessoal e no fortalecimento de equipes.
          </p>
          <button onClick={() => window.location.href = "#Agendamento"}>Agende agora</button>
        </div>

        <div className="servico-card">
          <h3>Consultório Aconchego</h3>
          <p className="preco">R$ 385 por sessão.</p>
          <p className="descricao">
            Oferecemos sessões de terapia individualizadas focadas no bem-estar mental e emocional, conduzidas por psicólogos altamente qualificados.
            Nosso objetivo é proporcionar um ambiente seguro e acolhedor para cada paciente.
          </p>
          <button onClick={() => window.location.href = "#Agendamento"}>Agende agora</button>
        </div>

        <div className="servico-card">
          <h3>Análise Avançada</h3>
          <p className="preco">R$ 515 por análise.</p>
          <p className="descricao">
            Oferecemos serviços de pesquisa detalhados para apoiar decisões estratégicas.
            Nossa equipe utiliza metodologias rigorosas para garantir insights precisos e confiáveis.
          </p>
          <button onClick={() => window.location.href = "#Agendamento"}>Agende agora</button>
        </div>
      </div>
    </section>
  );
}

export default Servicos;
