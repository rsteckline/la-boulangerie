describe("BreadDetail Page", () => {
  beforeEach(() => {
    cy.intercept(
      'GET',
      'https://rails-bread-face5cd9a02c.herokuapp.com/api/v1/breads/Brazil/Pão%20de%20Queijo',
      {
        statusCode: 200,
        fixture: "/mock-country.json",
      }
    );
    cy.visit(encodeURI('/breads/Brazil/Pão de Queijo'));
  });

  it("should display the bread name and description", () => {
    cy.get('h2').contains('Pão de Queijo');
    cy.get('h3').contains('Pão de queijo is a famous Brazilian cheese bread made with cassava flour and cheese, resulting in a chewy and cheesy delight.');
  });

  it("should display the bread recipe", () => {
    cy.get('.recipeDetail').contains('Ingredients:');
    cy.get('.recipeDetail').contains('500g tapioca flour');
    cy.get('.recipeDetail').contains('bake at 375°F (190°C) for 15-20 minutes.');
  });

  it("should have a working home button that navigates to '/'", () => {
    cy.get('.nav-links a').contains('Home').click();
    cy.url().should('eq', Cypress.config('baseUrl'));
  });
  
  it("should navigate back to the bread list page using browser back action", () => {
    cy.visit('/breads/Brazil');
    cy.url().should('include', '/breads/Brazil');
    cy.get('h2').contains('Breads from Brazil').should('be.visible');
  });
  

});