describe('Alias Then Kullanım Örneği', () => {
    
    it('KUllanım Örneği', () => {

            let itemlength

        cy.visit('https://shopist.io/')
        cy.get('.navbar-section a').as('NavbarMenus') //Alias Örnek
        cy.get('@NavbarMenus').then(($el)=>{
            itemlength=$el.length

        }).each(($el,index)=>{  
            cy.get('@NavbarMenus').should('be.visible')
            cy.log("Navbar Menu" +index+ ":"+ $el.text())

            if($el.text().includes('sofa')){
                cy.wrap($el).click()
            }
        })
    });
});