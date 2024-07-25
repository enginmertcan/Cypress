describe.only('Shadow And Find Kullanımı', () => { //doğru çalışmıyor 
    //yukarıdan aşağıya gelinir arayış yaparak cookie accept all kısmına kdar gidilir 
    before(() => {
        cy.on('uncaught:exception',(err,runnable)=>{return false})  // Uncaught Exception hatası alınıyorsa kullanırız
    });
    
    it('shadow find kullanımına örnek test', () => {
        cy.visit('https://shop.mercedes-benz.co.uk/new')
        cy.get('cnm-cookie-banner[settings-id="fph8XBqir"]').shadow()
        .shadow()
        .find()
        
    });

});

describe('Shadow And Find Kullanımı', () => {
    before(() => {
        cy.on('uncaught:exception',(err,runnable)=>{return false}) 
    });
    
    it('Visits the Kitchen Sink', () => {
        cy.visit('https://example.cypress.io')
        cy.contains('type').click()
        cy.url().should('include', '/acti')

        cy.get('.action-email').type('fakes@email.com')

       .should('have.value', 'fakes@email.com')


      })

}); 