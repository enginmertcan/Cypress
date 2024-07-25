describe('Cypress Fixtıure Kullanımı', () => {

    beforeEach(() => {
        cy.visit('https://www.automationexercise.com/login')

    });

    it('Cypress Fixtıure Kullanımı Invalid  Username Valid Password Örnek', () => {
        cy.fixture("loginData").as('credentials') //as verdikten sonra get içinde @tagıyla kullanılabilri tıklanılabilir yapılır takma isime    
        cy.get('@credentials').then((data)=>{


        cy.login(data.invalidUsername,data.validPassword)

        })
     });
    
    it('Cypress Fixtıure Kullanımı Valid Username Invalid password', () => {
        cy.fixture("loginData").as('credentials')
        cy.get('@credentials').then((data)=>{
        cy.login(data.validUsername,data.invalidPassword)
    })
    });

    it('then ornek', () => {
        cy.get('#price').then(()=>{
            cy.get('.priceFields').should('be.visible').type('100')
        })
    });

    // it('then ornek', () => {
    //     cy.fixture("loginData").as('credentials')
    //     cy.get('@credentials').each('$el')    
    
    // });
});