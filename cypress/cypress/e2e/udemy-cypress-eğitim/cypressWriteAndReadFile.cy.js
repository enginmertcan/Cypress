describe('Cypress Write File', () => {
    
    it('Write File', () => {
        // Dosya yazma işlemi
        cy.writeFile('CypressWriteFileDoc/exampleFile.txt', 'sifirdan cypress dersleasdasdsaari \n');
        cy.writeFile('CypressWriteFileDoc/exampleFile.txt', 'Bu eğitim Seviyesinde sıfırdan ileri seviyeye cypress', { flag: 'a+' });
    });
});

describe('Cypress Read File', () => {
    
    it('Read File', () => {
        // Dosya okuma işlemi
        cy.readFile('CypressWriteFileDoc/exampleFile.txt').should('contain', 'sifirdan');
    });
});
