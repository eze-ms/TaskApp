import React from 'react';
import './ProyectosSection.css';



function ProyectosSection() {
  
  return (
    <section className="section-one">
      
        <div className='container-box-projects'>
          <h2 className='tittle-section'>Proyectos</h2>
          <div className='box-grid-projects'>
          <ul className='container-box-proyectos'>
            <li>
              <div className="project-details">
                <div className="box-logo-empresa">
                  <img src='./assets/school.png' alt='logo' className="logo-img"></img>
                </div>
                <div className="detail-task">
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                </div>
                <div className="detail-bar">
                  <div className='box-progress-bar'>
                    <span className='progress-bar'>Progreso</span>
                    <span className='progress-bar'>70%</span>
                  </div>  
                  <progress id="file" max="100" value="70" className='bar'>70%</progress>
                </div>
              </div>
            </li>
            <li>
              <div className="project-details">
                <div className="box-logo-empresa">
                  <img src='./assets/bird_2.png' alt='logo' className="logo-img"></img>
                </div>
                <div className="detail-task">
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                </div>
                <div className="detail-bar">
                  <div className='box-progress-bar'>
                    <span className='progress-bar'>Progreso</span>
                    <span className='progress-bar'>45%</span>
                  </div>  
                  <progress id="file" max="100" value="45" className='bar'></progress>
                </div>
              </div>
            </li>
            <li>
              <div className="project-details">
                <div className="box-logo-empresa">
                  <img src='./assets/previer.png' alt='logo' className="logo-img"></img>
                </div>
                <div className="detail-task">
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                </div>
                <div className="detail-bar">
                  <div className='box-progress-bar'>
                    <span className='progress-bar'>Progreso</span>
                    <span className='progress-bar'>60%</span>
                  </div>  
                  <progress id="file" max="100" value="60" className='bar'></progress>
                </div>
              </div>
            </li>
            <li>
              <div className="project-details">
                <div className="box-logo-empresa">
                  <img src='./assets/christmas_2012.png' alt='logo' className="logo-img"></img>
                </div>
                <div className="detail-task">
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                </div>
                <div className="detail-bar">
                  <div className='box-progress-bar'>
                    <span className='progress-bar'>Progreso</span>
                    <span className='progress-bar'>90%</span>
                  </div>  
                  <progress id="file" max="100" value="90" className='bar'></progress>
                </div>
              </div>
            </li>
          </ul>
          </div>
        </div>
      
    </section>
  );
}

export default ProyectosSection;
