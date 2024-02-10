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

  it("should return to the main page when the Home button is clicked", () => {
    cy.contains('Home').click();
    cy.location("pathname").should("eq", "/");
  });

  it("should display the country name", () => {
    cy.get('h2').contains('Breads from Brazil');
  });

  it("should display the country history", () => {
    cy.get('p').contains('Brazil, the largest country in South America,');
  });

  it("should display the country culinary history", () => {
    cy.get('p').contains('Brazil\'s culinary history is a vibrant tapestry of flavors,');
  });

  it("should list the breads for that country", () => {
    const breads = ["Pão de Queijo", "Beiju", "Bolo de Milho", "Broa"];
    breads.forEach(bread => {
      cy.get('ul').contains(bread);
    });
  });

});