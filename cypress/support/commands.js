Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function() {
    cy.get('#firstName').type(Cypress.env('name'))
    cy.get('#lastName').type(Cypress.env('lastName'))
    cy.get('#email').type(Cypress.env('email'))
    cy.get('#open-text-area').type('Aqui está sendo testado um input no campo de texto')
    cy.contains('button','Enviar').click()
  })

