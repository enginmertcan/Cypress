describe('cypress locator', () => {
    
    it('html element locate etme', () => {
        cy.get("#user-name") // id Locate etme
        cy.get(".login-box") //class locate Etme
        cy.get('input')// tag locate etme
        cy.get('input[name="user-name"]')//attribute locate
        cy.get('input[placeholder]:contains(")') //  Text İçeren element Locate
        cy.get('a').contains("Login")
        cy.contains("Login")
    }); 
});