describe("Boulangerie Main Page", () => {
  beforeEach(() => {
    cy.intercept(
      'GET',
      'https://rails-bread-face5cd9a02c.herokuapp.com/api/v1/countries/Brazil',
      { 
        statusCode: 200,
        fixture: "/mock-country.json",
      }
    )
    cy.visit('/');
  });

  it("should display the title of the application", () => {
    cy.get('h1').contains("Belongea's Boulangerie");
  });

  it("should display the intro to our application", () => {
    cy.get('h2').contains("Select a country from our world bakery");
  });

  it("should have a working home button that navigates to '/'", () => {
    cy.get('.nav-links a').contains('Home').click();
    cy.visit('/');
    cy.url().should('eq', Cypress.config('baseUrl'));
    cy.location("pathname").should("eq", "/");
  });

  it("should display a map container", () => {
    cy.get('.map-container').should('be.visible');
  });

});