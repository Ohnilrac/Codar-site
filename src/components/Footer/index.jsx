import '../../styles/global.css';
import './styles.css';
import '../../assets/Icons/style.css'


export function Footer() {
  return(
    <footer id='footer'>
      <div className="container">
          <header className="header-footer">
            <a className="logo" href="">Codar.</a>
            <p>Criamos websites incríveis</p>
          </header>
        <div>
          <h2>Sobre</h2>
          <p>Amamos criar soluções e entregar sites incríveis</p>
        </div>
        <div className="contact">
          <h2>Contato</h2>
          <ul>
            <li><i className="icon-map-pin"></i>
              123 Av.Manjar - Nárnia</li>
            <li><i className="icon-phone"></i>
              +55 96 2321-3131</li>
            <li><i className="icon-mail"></i>
              contato@codar.com</li>
          </ul>
        </div>
        <div className="socials">
          <h2>Redes sociais</h2>
          <a href="https://www.facebook.com" target="_blank"><i className="icon-facebook"></i></a>
          <a href="https://www.instagram.com" target="_blank"><i
          className="icon-instagram"></i></a>
          <a href="https://twitter.com/home" target="_blank"><i
          className="icon-twitter"></i></a>
        </div>
      </div>
    </footer>
  )
}