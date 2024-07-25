const {faker} = require('@faker-js/faker')

let fakeEmail=faker.internet.email()
let fakePassword=faker.internet.password()
let fakeName =faker.name.firstName()
describe('FAker Js Kullanımı', () => {
    
    it('Fakerjs ile örnek test', () => {
        cy.visit('https://www.automationexercise.com/login')
        cy.get("input[data-qa='login-email']").type(fakeName)
        cy.get("input[data-qa='login-password']").type(fakePassword)
        cy.get("button[data-qa='login-button']").click()

    });


    it('Fakerjs 2 ile örnek test', () => {
        cy.visit('https://www.automationexercise.com/login')
        cy.get("input[data-qa='login-email']").type(fakeName)
        cy.get("input[data-qa='login-password']").type(fakePassword)
        cy.get("button[data-qa='login-button']").click()


        // cy.get("input[data-qa='login-email']").should("eq","")


    });
});