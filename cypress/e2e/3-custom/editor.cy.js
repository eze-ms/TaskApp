describe('ListaDeTareas', () => {
    beforeEach(() => {
     
      cy.visit('http://localhost:3000/');
    });
  
    it('debería llamar a la función borrarTarea al hacer clic en el botón de borrar', () => {
      
      cy.get('.boton-borrar').click();
  
      
      cy.should(() => {
        expect(mockBorrarTarea).to.have.been.called;
      });
    });
  
    it('debería llamar a la función handleOpenModal al hacer clic en el botón de editar', () => {
     
      cy.get('.boton-editar').click();
  
     
      cy.should(() => {
        expect(mockHandleOpenModal).to.have.been.called;
      });
    });
  });
  