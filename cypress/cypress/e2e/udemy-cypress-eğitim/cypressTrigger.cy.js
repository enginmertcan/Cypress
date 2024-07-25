describe('Trigger Kullanımı', () => {
    
    it('Mouseover Kullanımı', () => {
        cy.visit('https://www.amazon.de/')
        cy.get('span#nav-link-accountList-nav-line-1').trigger('mouseover')
        cy.get('div#nav-al-wishlist a:nth-child(2) > span').click()

    });

    it('Mouseover Kullanımı 2', () => {
        cy.visit('https://www.amazon.de/')
        cy.get('span#nav-link-accountList-nav-line-1').trigger('mousedown',{button:0}) // mousenin sol butonuna
        cy.get('div#nav-al-wishlist a:nth-child(7) > span').click({force: true})

    });
});