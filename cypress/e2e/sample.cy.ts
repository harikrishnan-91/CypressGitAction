describe('Sample Test', () => {
  it('Visits the Cypress site', () => {
    cy.visit('https://www.cypress.io');
    cy.contains('Test').should('exist');
  });
});
