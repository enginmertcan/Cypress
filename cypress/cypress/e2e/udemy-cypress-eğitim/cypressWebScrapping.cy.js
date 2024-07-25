describe('Web Scrapping', () => {

    it('write file to txt for products', () => {
        cy.step('Sayfaya YÖnleniyrouz')
        cy.visit('https://shopist.io/department/chairs')
        cy.step('Description Classı içindeki sandalye adı ve fiyatlarınıu uzunluğu')
        cy.get('.description').as('chairsPrice').its('length').should('eq',9)
        const results =[]

        cy.get('@chairsPrice').each(($el,index)=>{
            cy.step('Sonucları Logluyoruz')

            cy.log("Results:"+index+"-"+$el.text())
            results.push($el.text())

        }).then(()=>{
            cy.step("Logları file yazdırıyoruz")

            cy.writeFile('CypressWriteFileDoc/chairsPrice.txt',results)
        })
    });

})

