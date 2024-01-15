import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { nuevaTarea, leerTarea, actualizarTarea, borrarTarea } from '../redux/actions/actionsTypes';
import { useNavigate } from 'react-router-dom';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { MdLabelOutline } from "react-icons/md";
import { BiCopy } from "react-icons/bi";
import { BsCalendar2Date, BsPersonPlus } from "react-icons/bs";
import { AiOutlinePaperClip, AiOutlineDelete } from "react-icons/ai";
import './Editor.css'

function Editor(props) {
  const navigate = useNavigate();
  
  const initialValues = {
    titulo: '',
    descripcion: '',
    estado: 'En progreso'
  };

  const [formValues, setFormValues] = useState(initialValues);

  useEffect(() => {
    if (props.showModal == false)
      return;

    // Si la tarea del editor no es nueva, carga los datos desde Redux
    if (props.tareaEditada != null) {
      // no es una tarea nueva, vamos a editarla
      setFormValues({
        titulo: props.tareaEditada.titulo,
        descripcion: props.tareaEditada.descripcion,
        estado: props.tareaEditada.estado,
      });      
    } else {
      // es una tarea nueva
      setFormValues({ ...initialValues, titulo: props.tituloTarea } );
    }
  }, [props.showModal]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const datosTarea = {
      titulo: formValues.titulo,
      descripcion: formValues.descripcion,
      estado: formValues.estado,
    };

    if (props.tareaEditada == null) {
      props.nuevaTarea(datosTarea); 
    } else {
      props.actualizarTarea(props.tareaEditada.id, datosTarea);
    }

    props.onSave(); // Llama a OnSave pasada desde Proyectos
    // navigate('/proyectos');
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div>
      <Modal
        open={props.showModal}
        onClose={props.ocultarModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="window-modal"
      >
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 500,
            height: 485,
            borderRadius: 2,
            bgcolor: 'background.paper',
            boxShadow: 24,
            p: 4,
          }}
        >
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {formValues.titulo}
          </Typography>

          {/* TEXTAREA */}
          <div className='box-modal'>
            <div className='container-textarea-button-select'>
            <textarea
              value={formValues.descripcion}
              onChange={handleChange}
              name="descripcion"
              placeholder="Añadir una descripción más detallada..."
              className="custom-textArea"
            />
            <select className="custom-estado" onChange={handleChange} name="estado" value={formValues.estado}>
              <option value="En progreso">En progreso</option>
              <option value="Finalizada">Finalizada</option>
            </select>
            <form onSubmit={handleSubmit}>        
              <button type="submit" className="boton-guardar">Guardar </button>
            </form>
            </div>
           
              {/* Lista de herramientas */}
            <div className="tools-list">
              <h2 className='acciones'>Acciones</h2>
              <div className='box-acciones'>
                <MdLabelOutline/>
                <button className="tool-button">Etiquetas</button>
              </div>
              <div className='box-acciones'>
                <BiCopy/>
                <button className="tool-button">Copiar</button>
              </div>
              <div className='box-acciones'>
                <BsPersonPlus/>
                <button className="tool-button">Miembros</button>
              </div>
              <div className='box-acciones'>
                <BsCalendar2Date/>
                <button className="tool-button">Fechas</button>
              </div>
              <div className='box-acciones'>
                <AiOutlinePaperClip/>
                <button className="tool-button">Adjuntar</button>
              </div>
              <div className='box-acciones'>
                <AiOutlineDelete/>
                <button
                  onClick={() => {
                    props.eliminar(); // Esta línea ejecutará la función eliminar pasada desde Proyectos
                  }}
                  className="tool-button"
                  >
                  Borrar
                </button>
              </div>
            </div>
          </div>
        </Box>
      </Modal>            
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

export default connect(mapStateToProps, mapDispatchToProps)(Editor);
