describe("BreadList Page", () => {
  beforeEach(() => {
    cy.intercept(
      'GET',
      'https://rails-bread-face5cd9a02c.herokuapp.com/api/v1/breads/Brazil',
      {
        statusCode: 200,
        fixture: "/mock-country.json",
      }
    );
    cy.visit('/breads/Brazil');
  });

  it("should display the country name and description", () => {
    cy.get('h2').contains('Breads from Brazil');
    cy.get('p').contains('Pão de queijo is a famous Brazilian cheese bread');
  });

  it("should list the breads for that country", () => {
    const breads = ["Pão de Queijo", "Beiju", "Bolo de Milho", "Broa"];
    breads.forEach(bread => {
      cy.get('ul').contains(bread);
    });
  });

});