// ***********************************************
// This example commands.js shows you how to
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
// Cypress.Commands.add('login', (email, password) => { ... })
//
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

import 'cypress-shadow-dom';
import 'cypress-file-upload';
require('cypress-delete-downloads-folder').addCustomCommand();


import customCommandsLoginPage from "../pageObjectModel/customCommandsLoginPage";
Cypress.Commands.add('login',(username,password)=>{
    customCommandsLoginPage.usernameField.type(username)
    customCommandsLoginPage.passwordField.type(password)
    customCommandsLoginPage.loginBtn.click()
    
})

//with Session
// Custom command to log in with a session
Cypress.Commands.add('loginWithSession', (username, password) => {
    cy.session([username, password], () => {
        cy.visit('https://react-redux.realworld.io/login');
        cy.contains('Sign in').click();
        cy.get("input[placeholder='Email']").type(username);
        cy.get("input[placeholder='Password']").type(password);
        cy.get("button[type='submit']").click();
        cy.get('div#main li:nth-child(2) > a').should('be.visible').and('contain', 'New Post');
    });
});

Cypress.Commands.add('login', (username, password) => {
        cy.session([username, password], () => {
        cy.visit('https://react-redux.realworld.io/login');
        cy.contains('Sign in').click();
        cy.get("input[placeholder='Email']").type(username);
        cy.get("input[placeholder='Password']").type(password);
        cy.get("button[type='submit']").click();
        cy.get('div#main li:nth-child(2) > a').should('be.visible').and('contain', 'New Post');
    });
});

