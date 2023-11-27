describe('Prueba de Inicio de Sesión en ZeroQ', () => {
  it('Debe iniciar sesión con credenciales válidas', () => {
    cy.visit('https://zeroq.cl/welcome');
    cy.get('.sc-bZnhIo > :nth-child(2) > .sc-iTONeN').type('lalvarado@zeroq.cl');
    cy.get('.sc-cTQhss > .sc-iTONeN').type('!Sierra21');
    cy.get('.sc-bZnhIo > .sc-jOrMOR').click();

  });
});
