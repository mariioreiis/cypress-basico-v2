Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function() {
    cy.get('#firstName').type('Mario')
    cy.get('#lastName').type('Reis')
    cy.get('#email').type('mario@gmail.com')
    cy.get('#open-text-area').type('Aqui está sendo testado um input no campo de texto')
    cy.contains('button','Enviar').click()
  })

