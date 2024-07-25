describe('ViewPort Kullanımı', () => {
  
    it('Viewport With Number', () => {
        cy.visit('https://shopist.io/')

         cy.viewport(1200,1000)

    });

    it('Viewport With String', () => {
        cy.visit('https://shopist.io/')
        cy.viewport('macbook-16')
        // cy.viewport(1200,1000)

    });

    
    it('Viewport With String', () => {
        cy.visit('https://shopist.io/')
        cy.viewport('iphone-se2')
        // cy.viewport(1200,1000)

    });
})
