import React from 'react';
import Calendar from './Calendar';
import Chat from './Chat';
import ProyectosSection from './ProyectosSection';
import './Inicio.css';

function Inicio() {
  return (
    <div className='box-section-calendar-chat'>
      <ProyectosSection />
      <div className='box-calendar-chat'>
        <Calendar />
        <Chat />
      </div>
    </div>
  );
}

export default Inicio;
