import './QuemSou2.css';

function QuemSou2() {
    return (
        <section className="quem-sou">
            <div className="quem-sou__texto">
                <h2 className="quem-sou__titulo">SOBRE MIM</h2>
                <h3 className="quem-sou__nome">Natalia Kieling</h3>
                <p>
                    ✦ Psicoterapeuta Reichiana
                </p>
                <p>
                    ✦ 2 anos
                </p>
                <p>
                    ✦  Me formei psicóloga pela UNESC mas cursei em<br /> duas  outras
                    universidades antes disso
                </p>
                <p>
                    ✦ Desde o início da graduação me encantei com os <br />conceitos de Freud e
                    da psicanálise,mas ao me deparar com Reich <br />compreendi a cura de uma maneira muito mais grandiosa, <br />
                    e hoje trabalho com a abordagem corporal
                </p>
                <p>
                    ✦ Acredito no poder do amor e do humor
                </p>
            </div>

            <div className="quem-sou__imagem">
                <img src="/psico1.png" alt="Foto de Natalia Kieling" />
            </div>
        </section>
    );
}

export default QuemSou2;
