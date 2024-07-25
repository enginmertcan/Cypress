describe('Cypress Write File ', () => {
    
    it('Write File ', () => {
        
        cy.writeFile('CypressWriteFileDoc/exampleFile.txt','sifirdan cypress dersleasdasdsaari \n')
        cy.writeFile('CypressWriteFileDoc/exampleFile.txt','Bu eğitim Seviyesinde sıfırdan ileri seviyeye cypress',{flag:'a+'})

    });
});