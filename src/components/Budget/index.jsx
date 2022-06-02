import '../../styles/global.css';
import './styles.css';

import Code from '../../assets/video_call.png';

export function Budget() {

  return (
    <>
      <section className='container' id="budget">
        <div className='budget'>
          <div>
            <img src={ Code } alt="Uma video chamada" />
          </div>
          <div className='text'>
            <p>Alavanque seu negócio com um</p>
            <h1>Website incrível</h1>
            <button className="button">Solicitar orçamento</button>
          </div>
        </div>
      </section>
      <div className='divider'></div>
    </>
  )
}