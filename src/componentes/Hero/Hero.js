import './Hero.css'

function Hero() {
    return (
        <div id='Hero' className='Hero'>
            <h1>Sua jornada para o bem-estar começa aqui.</h1>
            <p>Com empatia e compreensão, <br />
                ofereço um espaço seguro <br />
                para que você possa se conhecer melhor <br />
                e seguir em frente com mais confiança.</p>
            <button onClick={() => window.location.href = "#QuemSou2"} type='button' className='hero_button'>SAIBA MAIS</button>
        </div>
    )
}

export default Hero