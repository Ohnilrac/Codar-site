import '../../styles/global.css';
import './styles.css';

export function Nav() {

  return (
    <header className="header" id='header'>
      <nav className="container">
        <a className="logo" href="">Codar<span>.</span></a>
        <div className="menu">
          <ul>
            <li>
              <a href="">Início</a>
            </li>
            <li>
              <a href="">Serviços</a>
            </li>
            <li>
              <a href="">Contato</a>
            </li>
            <button className="visible">Login</button>
          </ul>
        </div>
      </nav>
    </header>
  )
}
