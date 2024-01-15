import React from 'react';
import { shallow } from 'enzyme';
import Editor from './componentes/Editor';

const mockNuevaTarea = jest.fn();
const mockActualizarTarea = jest.fn();
const mockOnSave = jest.fn();

describe('Editor Component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Editor
        showModal={true}
        ocultarModal={() => {}}
        onSave={mockOnSave}
        nuevaTarea={mockNuevaTarea}
        actualizarTarea={mockActualizarTarea}
      />
    );
  });

  it('Debe manejar el envío del formulario', () => {
    const mockEvent = {
      preventDefault: jest.fn(),
    };

    wrapper.find('form').simulate('submit', mockEvent);

    expect(mockEvent.preventDefault).toHaveBeenCalled();
  });

  it('Debe manejar el cambio de estado en select', () => {
    const selectElement = wrapper.find('select');

    // Simula el cambio de estado seleccionando "Finalizada"
    selectElement.simulate('change', { target: { name: 'estado', value: 'Finalizada' } });

    // Verifica que el estado del componente se haya actualizado correctamente
    expect(wrapper.state('formValues')).toEqual({
      titulo: '',
      descripcion: '',
      estado: 'Finalizada',
    });
  });
});
