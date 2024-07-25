describe('Env Variable Kullanımı', () => {
    
    it('Ortam Değişkenleri Kullanımı', () => {
        cy.visit((Cypress.env('amazon')))
        
    });
});