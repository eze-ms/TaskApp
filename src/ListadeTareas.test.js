import React from 'react';
import { shallow } from 'enzyme';
import ListaDeTareas from './componentes/ListaDeTareas';

// Mock de la función borrarTarea y handleOpenModal
const mockBorrarTarea = jest.fn();
const mockHandleOpenModal = jest.fn();

describe('ListaDeTareas', () => {
  it('debería llamar a la función borrarTarea al hacer clic en el botón de borrar', () => {
    const wrapper = shallow(
      <ListaDeTareas titulo="Tareas en Progreso" estado="enProgreso" borrarTarea={mockBorrarTarea} />
    );

    const botonBorrar = wrapper.find('.boton-borrar'); // Asume que el botón tiene una clase CSS

    // Simula hacer clic en el botón de borrar
    botonBorrar.simulate('click');

    // Verifica que la función borrarTarea haya sido llamada
    expect(mockBorrarTarea).toHaveBeenCalled();
  });

  it('debería llamar a la función handleOpenModal al hacer clic en el botón de editar', () => {
    const wrapper = shallow(
      <ListaDeTareas
        titulo="Tareas en Progreso"
        estado="enProgreso"
        borrarTarea={mockBorrarTarea}
        handleOpenModal={mockHandleOpenModal}
      />
    );

    const botonEditar = wrapper.find('.boton-editar'); // Asume que el botón tiene una clase CSS

    // Simula hacer clic en el botón de editar
    botonEditar.simulate('click');

    // Verifica que la función handleOpenModal haya sido llamada
    expect(mockHandleOpenModal).toHaveBeenCalled();
  });
});
