describe('Cypress Assertion Kullanımı', () => {
    
    it('Assertion Kullanım Ornekleri', () => {
        cy.visit("https://shopist.io/")
        cy.title().should("eq","Shop.ist")
        cy.url().should('contain','shop')
        
        cy.get("#main > div > section > a > div > div:nth-child(1)").should('be.visible')
        cy.get("#main > div > section > a > div > div:nth-child(1)").should('be.visible').and('contain','Shop')
        cy.get("#main > div > section > a > div > div:nth-child(1)").should('contain','Shop')
        cy.get("#main > div > section > a > div > div:nth-child(1)").should('have.text','Shop the look')
        cy.get("#main > div > section > a > div > div:nth-child(1)").should('have.length',1)
        cy.get("#main > div > section > a > div > div:nth-child(1)").its('length').and('eq',1)
        cy.get("#main > div > section > a ").should('have.attr','href','/department/chairs')
        





    });
});