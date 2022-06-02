import '../../styles/global.css';
import './styles.css';

export function Testimonials() {
  return(
    <>
      <section className='container' id='testimonials'>
        <header>
          <h2>Depoimentos de nossos clientes!</h2>
        </header>
        <div className='testimonials'>
          <div className="testimonial">
            <blockquote>
              <img src="https://randomuser.me/api/portraits/men/30.jpg" alt="Perfil Pedro Henrique" />
              <div className='person'>
                <p>
                  Tive uma experiência maravilhosa com a empresa Codar, sem dúvida uma das melhores.
                </p>
                <cite>
                  Pedro Henrique
                </cite>
              </div>
            </blockquote>
          </div>
          <div className="testimonial">
            <blockquote>
              <img src="https://randomuser.me/api/portraits/women/16.jpg" alt="Perfil Janine Silveira" />
              <div className='person'>
                <p>
                  A Codar é ótima, já sei que é aqui onde sempre vou buscar contato para novos desenvolvimentos!! 
                </p>
                  <cite>
                    Janine Silveira
                  </cite>
              </div>
              </blockquote>
          </div>
          <div className="testimonial">
            <blockquote>
              <img src="https://randomuser.me/api/portraits/men/92.jpg" alt="Perfil Anderson Oliveira" />
              <div className='person'>
                <p>
                  Processos bem simples e um contato muito atencioso, site desenvolvido exatamente como minha escola queria.
                </p>
                  <cite>
                    Anderson Oliveira
                  </cite>
              </div>
            </blockquote>
          </div>
        </div>
      </section>
    <div className="divider"></div>
    </>
  )
}