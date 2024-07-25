import { slowCypressDown } from 'cypress-slow-down'

const {faker} = require('@faker-js/faker')


let fakeEmail=faker.internet.email()
let fakePassword=faker.internet.password()
let fakeName =faker.name.firstName()

slowCypressDown(false)
describe('Slow Down Kullanımı', () => {
    
    it('slowdown ile örnek test', () => {
        cy.slowDown(3000)
        cy.visit('https://www.automationexercise.com/login')
        cy.get("input[data-qa='login-email']").type(fakeEmail)
        cy.get("input[data-qa='login-password']").type(fakePassword)
        cy.get("button[data-qa='login-button']").click()
        cy.slowDownEnd()

    });


    it('slowdown 2 ile örnek test', () => {
        cy.visit('https://www.automationexercise.com/login')
        cy.get("input[data-qa='login-email']").type(fakeName)
        cy.get("input[data-qa='login-password']").type(fakePassword)
        cy.get("button[data-qa='login-button']").click()


        // cy.get("input[data-qa='login-email']").should("eq","")


    });
});