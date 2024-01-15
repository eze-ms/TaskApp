import React, { useState } from 'react';
import { AiOutlineClose, AiOutlinePlus } from 'react-icons/ai';
import './Proyectos.css';
import Editor from './Editor';
import ListaDeTareas from './ListaDeTareas';
import { nuevaTarea, leerTarea, actualizarTarea, borrarTarea } from '../redux/actions/actionsTypes';
import { connect } from 'react-redux';
import { useFormik } from 'formik';

function Proyectos(props) {
  const [editing, setEditing] = useState(false); // Estado para controlar edición/creación
  const [formState, setFormState] = useState({
    nuevaTarea: '',
    open: false, // Estado para el modal
    editorId: -1,
});
  
  const guardarTareaEnRedux = () => { 
    setFormState({...formState, open: false});
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    props.leerTarea(value); // Actualiza el valor de formValues.nuevaTarea
  };
  
  const handleOpenModal = (id = -1) => {
    let tareaEditada = null; 
    
    if (id >= 0) {
      tareaEditada = props.datos.tareas.find((tarea) => tarea.id == id);
    } 
  
    setFormState((prevState) => ({
      ...prevState,
      open: true,
      editorId: id,
      tareaEditada: tareaEditada, 
    }));
  };
  
  const handleClose = () => {
    setFormState((prevState) => ({
      ...prevState,
      open: false,
    }));
  };

  const toggleCarpeta = () => {
    setFormState((prevState) => ({
      ...prevState,
      open: false, // Cambia open a false para cerrar la modal
    }));
  
    setEditing(true); // Cambia a true después de guardar

  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    toggleCarpeta();
  };

  const formik = useFormik({
    initialValues: {
      nuevaTarea: '', 
    },
    onSubmit: (values) => {
      // Validación manual
      if (!values.nuevaTarea) {
        
        alert('El campo de nueva tarea es obligatorio');
      } else {
       
        toggleCarpeta();
      }
    },
  });


  return (
    <div className='container'>
      <form onSubmit={formik.handleSubmit}>
      <div className='list-wrapper'>
        <h2 className="titulo-estado-tarea">Nueva tarea</h2>
          <div className="anyadir">
            <input
              type="text"
              id="nuevaTarea"
              name="nuevaTarea"
              value={formik.values.nuevaTarea}
              onChange={formik.handleChange}
              placeholder="Escribir una tarea"
            />
            <div className="box-anyadir">
              <AiOutlinePlus />
              {/* Abre el modal al hacer clic en "Añada una tarea" */}
              <button type="button" onClick={handleOpenModal} className="boton-anyadir">
                Añada tarea2
              </button>
            </div>
          </div>
       
      </div>
    </form>
      
      <ListaDeTareas handleOpenModal={handleOpenModal} estado={"En progreso"} titulo="En Progreso"  />
      <ListaDeTareas handleOpenModal={handleOpenModal} estado={"Finalizada"} titulo="Finalizadas" />

      <Editor
        tituloTarea={formik.values.nuevaTarea} 
        onSave={guardarTareaEnRedux}
        showModal={formState.open}
        ocultarModal={handleClose}
        eliminar={() => {
          props.borrarTarea(formState.editorId);
        }}
        tareaEditada={formState.tareaEditada}
    />    
    </div>
  );
}

function mapStateToProps(estado, props) {
  return {
    datos: estado,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    nuevaTarea: (tarea) => dispatch(nuevaTarea(tarea)),
    leerTarea: (id) => dispatch(leerTarea(id)),
    actualizarTarea: (id, tarea) => dispatch(actualizarTarea(id, tarea)),
    borrarTarea: (id) => dispatch(borrarTarea(id)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Proyectos);




    
   

