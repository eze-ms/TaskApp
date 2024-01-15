import React from 'react';
import './NoEncontrada.css';
import { Link } from 'react-router-dom';

function NoEncontrada() {
  return (
    <div className='custom-not-found'>
      <div className='box-oops'>
        <h1>Oops!</h1>
        <img src='./assets/chatbot.png' alt='chatbot-icon' className='chat-bot'></img>
      </div>
      
      <h2>404-PÁGINA NO ENCONTRADA</h2>
      <p>La página que estás intentando visitar no existe o no está disponible.</p>

      <div className="d-grid gap-2 d-md-block">
        <Link to="/" className="btn btn-primary" role="button">Ir al inicio</Link>
      </div>
    </div>
  );
}

export default NoEncontrada;
