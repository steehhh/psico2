import './Agendamento.css';

function Agendamento() {
  return (
    <section id='Agendamento' className="agendamento">
      <div className="agendamento__cabecalho">
        <h2 className="agendamento__titulo">Agendamento</h2>
        <div className="agendamento__linha"></div>
      </div>

      <div className="agendamento__grid">
        <div className="agendamento-card">
          <h3>Agende pelo WhatsApp</h3>
          <p>Consulte mais sobre preços e horários diretamente com a psicóloga.</p>
          <a
            href="https://wa.me/559993496423"
            target="_blank"
            rel="noopener noreferrer"
          >
            55 99349-6423
          </a>
        </div>

        <div className="agendamento-card">
          <h3>Ou pelo Instagram</h3>
          <p>Tire suas dúvidas e agende também pelo Instagram.</p>
          <a
            href="https://www.instagram.com/nataliakpsi/"
            target="_blank"
            rel="noopener noreferrer"
          >
            @nataliakpsi
          </a>
        </div>
      </div>
    </section>
  );
}

export default Agendamento;
