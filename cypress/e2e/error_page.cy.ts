describe('Error Handling for Bad Paths', () => {
  it('redirects to an error page or shows an error message for a non-existent route', () => {
    cy.visit('/some/nonexistent/route');
    cy.get('.error-message').should('exist');
    cy.get('.error-message').should('contain', 'Sorry, this page doesn\'t exist.');
  });

  it("should return to the main page when the Home button is clicked", () => {
    cy.visit('/some/nonexistent/route');
    cy.contains('Home').click();
    cy.location("pathname").should("eq", "/");
  });

});
