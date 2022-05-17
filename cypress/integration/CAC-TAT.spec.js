/// <reference types="Cypress" />
describe('Central de Atendimento ao Cliente TAT', function() {

    const user = {}
    beforeEach(() => {
        cy.visit('./src/index.html')
      })

    it('verifica o título da aplicação', function() {
        cy.title().should('eq', 'Central de Atendimento ao Cliente TAT')
    })

    it('preenche os campos obrigatórios e envia o formulário', function(){
        cy.get('#firstName').type('Mario')
        cy.get('#lastName').type('Reis')
        cy.get('#email').type('mario@gmail.com')
        cy.get('#open-text-area').type('Estou realizando um teste, preciso digitar algo longo para testar o delay do cypress Mussum Ipsum cacilds vidis litro abertis Mé faiz elementum girarzis  nisi eros vermeio Nullam volutpat risus nec leo commodo  ut interdum diam laoreet Sed non consequat odio Atirei o pau no gatis, per gatis num morreusA ordem dos tratores não altera o pão duris')
        cy.get('.button').click()
        cy.get('.success').should('be.visible')
    }  
    )

    it('exibe mensagem de erro ao submeter o formulário com um email com formatação inválida', function(){
        cy.get('#firstName').type('Mario')
        cy.get('#lastName').type('Reis')
        cy.get('#email').type('mariotesteemailerrado')
        cy.get('#open-text-area').type('Estou realizando um teste')
        cy.get('.button').click()
        cy.get('.error > strong').should('be.visible')

    })

    it('Validar se o campo número permanece vazio inserindo outro tipo de dado', function(){
        cy.get('#firstName').type('Mario')
        cy.get('#lastName').type('Reis')
        cy.get('#email').type('mario@gmail.com')
        cy.get('#phone').type('numeros').should('have.value', '')
        cy.get('#open-text-area').type('Estou realizando um teste')
        cy.get('.button').click()
        cy.get('.success').should('be.visible')
    })

    it('exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário', function(){
        cy.get('#firstName').type('Mario')
        cy.get('#lastName').type('Reis')
        cy.get('#email').type('mario@gmail.com')
        cy.get('#phone-checkbox').click()
        cy.get('#open-text-area').type('Estou realizando um teste')
        cy.get('.button').click()
        cy.get('.error > strong').should('be.visible')
    })

    it('preenche e limpa os campos nome, sobrenome, email e telefone', function(){
        cy.get('#firstName').type('Mario').should('have.value', 'Mario')
        .clear().should('have.value', '')
        cy.get('#lastName').type('Reis').should('have.value', 'Reis')
        .clear().should('have.value', '')
        cy.get('#email').type('mario@gmail.com').should('have.value', 'mario@gmail.com')
        .clear().should('have.value', '')
        cy.get('#phone').type('1234567').should('have.value', '1234567')
        .clear().should('have.value', '')
    })

    it('exibe mensagem de erro ao submeter o formulário sem preencher os campos obrigatórios', function(){
        cy.get('.button').click()
        cy.get('.error > strong').should('be.visible')
    })

    it('envia o formulário com sucesso usando um comando customizado', function(){
        cy.fillMandatoryFieldsAndSubmit()
    })

    it('preenche os campos obrigatórios e envia o formulário', function(){
        cy.contains('Nome').type('Mario')
        cy.contains('Sobrenome').type('Reis')
        cy.contains('E-mail').type('mario@gmail.com')
        cy.contains('Como podemos te ajudar?')
        cy.get('#open-text-area').type('Estou realizando um teste')
        cy.get('[type="submit"]').should('be.visible')
        cy.contains('button','Enviar').click()
        cy.contains('Mensagem enviada com sucesso.')
     }  
    )

  })
  