// actionsTypes.js
export const LIST_TAREAS = 'LIST_TAREA';
export const CREATE_TAREA = 'CREATE_TAREA';
export const DELETE_TAREA = 'DELETE_TAREA';
export const READ_TAREA = 'READ_TAREA';
export const UPDATE_TAREA = 'UPDATE_TAREA';

export function listaTodasLasTareas() {
  return {
    type: LIST_TAREAS
  };
}

export function nuevaTarea(data) {
  return {
    type: CREATE_TAREA,
    data,
  };
}

export function borrarTarea(id) {
  return {
    type: DELETE_TAREA,
    id,
  };
}

export function leerTarea(id) {
  return {
    type: READ_TAREA,
    id,
  };
}

export function actualizarTarea(id, tarea) {
  return {
    type: UPDATE_TAREA,
    payload: { id, tarea },
  };
}
