describe('Before After Kullanimi', () => {
    
    beforeEach(() => {
        cy.log('BeforEach Kullanımı - Cypress Test')
        cy.visit('https://www.automationexercise.com/')
    });

    afterEach(() => {
        cy.log('AfterEach Kullanımı ici örnek')
    });

    it('Basligi Dogrula', () => {
        cy.title().should('eq','Automation Exercise')
    });

    it('url Dogrula', () => {
        cy.url().should('include','automation')
    });

    it('hostname Dogrula', () => {
        cy.location('hostname').should('include','automation')
    });

});