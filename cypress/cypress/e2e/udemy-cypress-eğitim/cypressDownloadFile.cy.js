describe('Cypress Download File', () => {

after(() => {
    cy.deleteDownloadsFolder()
});
    it('Cypress Download File', () => {
        cy.on('uncaught:exception', (err, runnable) => {
            return false;
        });
        
        cy.visit('https://demoqa.com/upload-download')
        cy.get('#downloadButton').click() //1
        cy.get('a.btn-primary').click()        //2


    });
})
