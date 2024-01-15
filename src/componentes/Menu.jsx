import React from 'react';
import { Link } from 'react-router-dom';
import './Menu.css';
import { RxDashboard,RxBackpack } from "react-icons/rx";
import { BiMessageAltDetail } from "react-icons/bi";
import { AiOutlineTeam } from "react-icons/ai";
import { TfiSettings } from "react-icons/tfi";


function Menu() {
  return (
    <aside>
      <nav>
        <ul>
          <li><RxDashboard className='icon-home'/><Link to="/">Home</Link></li>
          <li><RxBackpack className='icon-home'/><Link to="/Proyectos">Proyectos</Link></li>
          <li><BiMessageAltDetail className='icon-home'/><Link to="/Mensajes">Mensajes</Link></li>          
          <li><AiOutlineTeam className='icon-home'/><Link to="/Equipo">Equipo</Link></li>        
          <li><TfiSettings className='icon-home'/><Link to="/Herramientas">Herramientas</Link></li>
        </ul>
      </nav>
    </aside>
  );
}

export default Menu;
