describe('Back Forward Kullanımı', () => {
  
    it('Cypress io gidip tarayıcıda ileri geri komutları', () => {
        
        cy.visit('https://www.cypress.io/')
        cy.get('nav>div>ul>li:nth-child(5)>a').click()
        cy.title().should('eq','Scale Open-Source Testing with Cypress Cloud | Cypress Cloud Pricing')


        cy.go(-1)
        cy.title().should('eq','Testing Frameworks for Javascript | Write, Run, Debug | Cypress')

        cy.go(+1)
        cy.title().should('eq','Scale Open-Source Testing with Cypress Cloud | Cypress Cloud Pricing')

    });
})
