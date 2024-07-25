describe('Local Storage Kullanım',{testIsolation:false}, () => {
  

    it('Local Storage Kullanım', () => { 
        cy.visit('https://www.qrcode-monkey.com/').then(()=>{
            cy.log(localStorage.length)
            cy.log(window.localStorage.length)
            localStorage.setItem('Cypress Dersi','deneme')

                 cy.wait(2000).then(()=>{
                    localStorage.removeItem('Cypress Dersi','deneme')
                 })

                 cy.wait(1500).then(()=>{
                    localStorage.clear()
                 })
        })
      

    });

    it.only('Local Storage Kullanım 2', () => { 
        cy.visit('https://www.qrcode-monkey.com/').then(()=>{
            cy.wait(5000)
            cy.clearLocalStorage()
        })
      

    });




})
