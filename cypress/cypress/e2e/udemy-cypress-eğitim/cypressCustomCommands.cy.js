describe('Custom Commands', () => {

    beforeEach(() => {
        cy.visit('https://www.automationexercise.com/login')

    });
    it('Custom Commands Kullanım Örnek', () => {
        cy.login('sadsad@abc.com','parola')
 
 
 
     });
    
    it('Custom Commands Kullanım Örnek', () => {
       cy.login('sadsad@abc.com','parola')



    });
});