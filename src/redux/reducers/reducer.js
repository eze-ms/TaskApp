import { LIST_TAREAS, CREATE_TAREA, DELETE_TAREA, READ_TAREA, UPDATE_TAREA } from '../actions/actionsTypes';

let datosIniciales = {
  siguiente_id: 1,
  tareas: [
   
  ],
  editable: {
    id: -1,
    titulo: '',
    descripcion: '',
  }
};

let reducer = (estado = datosIniciales, accion) => {
  switch (accion.type) {
    
    case LIST_TAREAS: {
      const nuevo_estado = { ...estado };
      return nuevo_estado;
    }
    case CREATE_TAREA: {
      let nuevaTarea = accion.data;
      console.log("NUEVA TAREA");
      console.log(nuevaTarea);
      nuevaTarea.id = estado.siguiente_id;
      nuevaTarea.estado = "En progreso";
      estado.tareas.push(nuevaTarea);
      estado.siguiente_id++;

      const nuevo_estado = { ...estado };
    }
    case DELETE_TAREA: {
      let id = accion.id;
      estado.tareas = estado.tareas.filter((item) => {
        return item.id !== id;
      });

      const nuevo_estado = { ...estado };
        return nuevo_estado;
    }
    case READ_TAREA: {
      
      const id = parseInt(accion.id);
      const tareaEncontrada = estado.tareas.find((tarea) => tarea.id === id);
      
      if (!tareaEncontrada) {
        return estado;
      }
      estado.editable = tareaEncontrada;

      const nuevo_estado = { ...estado };
        return nuevo_estado;
    }
    case UPDATE_TAREA: {
      const { id, tarea } = accion.payload;
      console.log(tarea);
      const tareaActualizada = estado.tareas.find((p) => p.id === id);
    
      if (!tareaActualizada) {
        return estado;
      }
      tareaActualizada.titulo = tarea.titulo;
      tareaActualizada.descripcion = tarea.descripcion;
      tareaActualizada.estado = tarea.estado;
      
      const nuevo_estado = { ...estado };
      console.log(nuevo_estado);
      return nuevo_estado;
    }
    default:
      return estado;
  }
};
export default reducer;
