import React, { Component } from 'react';
import './ListadeTareas.css';
import { connect } from 'react-redux';
import { borrarTarea } from '../redux/actions/actionsTypes';
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";

class ListadeTareas extends Component {
  constructor() {
    super();
    this.state = {
      open: false,
      nuevaTarea: "", 
      texto: "",
    };
  }

  borrarTarea = (tareaId) => {
        this.props.borrarTarea(tareaId);
  }

  toggleCarpeta = () => {
    const { mostrarTextarea } = this.state;
    this.setState((prevState) => ({
      ...prevState,
      open: false, // Cambia open a false para cerrar la modal
    }));
  };
   handleSave = () => {
    this.toggleCarpeta();
    
  };
  
  filtrarTareas(estadoFiltrado) {
    return this.props.datos.tareas.filter(tarea => tarea.estado === estadoFiltrado);
  }
  render() {
    const tareasEnProgreso = this.filtrarTareas(this.props.estado);
  
    return (
      <div className="list-wrapper">
        <h2 className="titulo-estado-tarea">{this.props.titulo}</h2>
          
        <ul className="list-to-do-progreso">
          {tareasEnProgreso.map((tarea, index) => (
            <li key={index} className="editar">
                {tarea.titulo}
                <div className="box-editar-borrar">

                  <button type="button" onClick={()=>{
                      this.props.handleOpenModal(tarea.id)
                  }} className="boton-editar">
                      Editar
                      <AiOutlineEdit/>
                  </button>

                  <button type="button" onClick={() => {
                    this.borrarTarea(tarea.id); 
                  }} className="boton-borrar">
                      Borrar
                      <AiOutlineDelete/>
                  </button>
                </div>                             
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(estado, props) {
  return {
    datos: estado,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    borrarTarea: (id) => dispatch(borrarTarea(id)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ListadeTareas);
