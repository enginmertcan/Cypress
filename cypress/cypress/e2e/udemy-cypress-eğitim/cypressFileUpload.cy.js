describe('Cypress File Upload', () => {
  

    it('Dosya Yükleme -1', () => {
        cy.visit('https://www.qrcode-monkey.com/')
        cy.get('div:nth-child(3) > div.pane-header > h3').click()
        cy.get('.loader').attachFile({filePath:"foto.png"}, {subjectType:"drag-n-drop"})
    });



    it('Dosya Yükleme -2', () => {
        cy.visit('https://www.qrcode-monkey.com/')
        cy.get('div:nth-child(3) > div.pane-header > h3').click({ force: true });

const fileName='foto.png'
cy.fixture('foto.png').then(Cypress.Blob.base64StringToBlob) // Convert İslemi için
.then((fileContent)=>{

    cy.get('.loader').attachFile(
        {fileContent,fileName,mimeType:"image/**"},{subjectType:"drag-n-drop"}
    )

})



    
    });
})
