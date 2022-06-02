import '../../styles/global.css';
import './styles.css';
import '../../assets/Icons/style.css'

import Coding from '../../assets/coding_.png';

export function More() {
  return (
    <>
      <section className='container' id='more'>
      <div className='more'>
        <div className='image'>
          <img src={ Coding } alt="Uma mão digitando" />
        </div>
        <div className='text'>
          <div className="list">
            <ul>
              <li><i className='icon-check'></i>
                Domínio personalizado
                </li>
              <li><i className='icon-check'></i>
                Hospedagem
                </li>
              <li><i className='icon-check'></i>
                Site responsivo
                </li>
              <li><i className='icon-check'></i>
                Redes sociais
                </li>
              <li><i className='icon-check'></i>
                Chat online
                </li>
              <li><i className='icon-check'></i>
                Blog integrado
                </li>
            </ul>
          </div>
          <div className='form-geral'>
              <p>Nossa equipe está à disposição!</p>
            <form>
              <label className='sr-only' htmlFor='contact'>Seu número para contato</label>
              <input type="number" placeholder='Seu número' id='contact' />
              <button className="button">Ligamos para você</button>
            </form>
          </div>
        </div>
      </div>
    </section>
    <div className='divider'></div>
    </>
  )
}