describe('Test Isloation Kullanımı', {testIsolation:false} ,() => {
  

    it('Test Isloation Kullanımı -1', () => {
        cy.visit('https://www.qrcode-monkey.com/')
        cy.get('div:nth-child(3) > div.pane-header > h3').click()
        cy.get('.loader').attachFile({filePath:"foto.png"}, {subjectType:"drag-n-drop"})
    });



    it('Test Isloation Kullanımı -2', () => {

const fileName='foto2.png'
cy.fixture('foto2.png').then(Cypress.Blob.base64StringToBlob) // Convert İslemi için
.then((fileContent)=>{

    cy.get('.loader').attachFile(
        {fileContent,fileName,mimeType:"image/**"},{subjectType:"drag-n-drop"}
    )

})



    
    });
})
