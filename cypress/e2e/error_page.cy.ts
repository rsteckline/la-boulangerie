describe('Error page', () => {
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

  it('handles a 400 Bad Request error', () => {
    cy.intercept('GET', 'https://rails-bread-face5cd9a02c.herokuapp.com/api/v1/', {
      statusCode: 400,
      body: 'Bad Request'
    }).as('getBadRequest');
    cy.wait('@getBadRequest');
  });

  it('handles a 500 Internal Server error', () => {
    cy.intercept('GET', 'https://rails-bread-face5cd9a02c.herokuapp.com/api/v1/', {
      statusCode: 500,
      body: 'Internal Server Error'
    }).as('getServerError');
    cy.wait('@getServerError');
  });
})

describe('Should show an error page', () => {
  it("should show an appropriate error if the page doesn't exist", () => {
    cy.visit("http://localhost:3000/potato");
    cy.get(".error-message").should(
      "contain",
      "Sorry, this page doesn't exist."
    );
  });
})