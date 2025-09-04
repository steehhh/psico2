import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <h2 className="footer__titulo">Título do seu site</h2>
      <p className="footer__info">123 Rua exemplo, Nova York NY</p>
      <p className="footer__info">(055) 99955-5555</p>
      <a href="mailto:e-mail@exemplo.com" className="footer__link">
        e-mail@exemplo.com
      </a>
    </footer>
  );
}

export default Footer;
