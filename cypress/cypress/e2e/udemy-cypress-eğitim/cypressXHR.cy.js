describe('XHR kullanımı', () => {
    
    it('cy.req Kullanımı', () => {
        cy.request('https://jsonplaceholder.cypress.io/comments').should((response)=>{
            expect(response.status).to.eq(200)
            expect(response.body).to.have.length(500)
            expect(response).to.have.property('headers')

        })
        

    });

    it('cy.req Kullanımı 2', () => {
        cy.request({
            url:'https://jsonplaceholder.cypress.io/comments',
            method:'GET'   
        }).then((response)=>{
                expect(response.status).to.eq(200)
            expect(response.body).to.have.length(500)
            expect(response).to.have.property('headers')
        })

        })
        it('cy.req Kullanımı 3', () => {
            cy.request('https://jsonplaceholder.cypress.io/comments')
            .its('status')
            //its('content-type')
            .should('eq',200)
           
            })        




    it('cy.intercept Kullanimi', () => {
        cy.intercept('GET','url gireceksiniz').as('abc')
        cy.visit('https://example.cypress.io') //kendi url
        cy.get('#loginbutton').click()
        cy.get('#username').type('deneme')
        cy.get('#password').type('test')
        cy.get('#btn').click()

        cy.wait('@abc')

    });
    

});
