// ***********************************************
// 
import LoginPage from "../integration/PageObject/LoginPage"
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('userL', (email, password) => { ... })
//this.data.users.forEach((element) => {

//import LoginPage from "../integration/PageObject/LoginPage"
    const loginPage = new LoginPage()
    Cypress.Commands.add('userLogin', (email, password) => { 
    //cy.log(this.data.username)
    loginPage.getUserNameField().type(email)
    loginPage.getPasswordField().type(password)
    loginPage.getLoginClickButton().click().wait(500)

    })
    //cy.get('.title').should('not.exist')
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })