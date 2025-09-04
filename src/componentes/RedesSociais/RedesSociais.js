import './RedesSociais.css'

function RedesSociais () {
    return(
        <section className='redes-sociais'>
            <h2 className='redes-sociais__titulo'>Siga-me nas redes sociais</h2>
            <ul className='redes-sociais__lista'>
                <li className='redes-sociais__item'>
                    <a  href="https://wa.me/55999341346" target='_blank' rel="noopener noreferrer" className='redes-sociais__link'>
                        <img src="/iconeWhatsApp.png" alt="WhatsApp" />
                    </a>
                </li>
            <li className='redes-sociais__item2'>
                <a href='https://www.instagram.com/nataliakpsi/' target='_blank' rel="noopener noreferrer" className='redes-sociais__link2' >
                     <img src="/iconeInstagram.png" alt="Instagram" />
                </a>
            </li>
            </ul>
        </section>
    )
}
export default RedesSociais