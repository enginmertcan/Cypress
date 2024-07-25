describe('Cypress İlk Test', () => {
    it('İlk Test', () => {
        cy.visit('https://www.automationexercise.com/')
        cy.title().should('eq',"Automation Exercise")
        cy.url().should('eq','https://www.automationexercise.com/')
        
    });
    it('İKinci Test', () => {
        
        cy.visit('https://www.automationexercise.com/')
        cy.title().should('include',"Automation")
        cy.url().should('include','automationexercise.com/')
        
    });
});