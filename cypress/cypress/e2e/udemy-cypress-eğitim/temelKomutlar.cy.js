describe('Temel Komutlar', () => {
    //it.only bloğu çalışır sadece
    //it.skip atlama yapar
    //describe bloğuna yazılırsa olan hepsi atlanır
    it.only('Temel Komutlar cy.visit Kullaımı', () => {
        cy.visit("/") //baseurl tanımlandıysa
        cy.visit("/commands") //baseurl tanımlandıysa
        cy.visit("https://example.cypress.io/commands") //baseurl tanımlanmadıysa
        cy.visit({
            url:"https://example.cypress.io/",//tanımlanmadıysa
            method:"GET"
        })
  });
        it('temel komutlar cy.title', () => {
            cy.title().should('eq',"cypres..io")//title tam eşitlik sğalıyorsa 
            cy.title().should('include',"cypres") //title içerisinde cypress geçiyorsa doğrular
            cy.title().should('contain',"cypress")

    });
    it('Temel Komutlar cy.url ve cy.location', () => {
        cy.url().should("eq","https://example.cypress.io/")//url tam eşitlik sğalamalı
        cy.url().should("include","/commands")


        cy.location('pathname').should("eq","/commands") // gidilen pathi doğrulamış olur
        cy.location('protocol').should('eq',"https")// gidilen protokolü doğrular
        cy.location('hostname').should("eq","https://example.cypress.io/")//tam eşitlikte doğrylar
        cy.location('hostname').should('include',"cypress.io") //cypress io içerirse hostname doğrular
        
    });
    it('Temel Komutlar cy.get Kullanimi', () => {
        
        cy.get("#button").click// do
        cy.get('#button').as('deneme') //cy.get('@deneme')
        cy.get('a[href="example.cypress.io"]')
        cy.get('.dropdown-menu-list')
        cy.get('div.button')
        cy.get('ul li:first')
    });

    it('Temel Komutlar cy.log .kullanınım ', () => {
        cy.log("Temel Komut cy.log Kullanımı ") //Testte tıkanmaya yanlı şgiden yeri görmeyi veya selektördkei hatayı 
        cy.log("be.visible")    //doğrulama amaçlı kullanılmaz
        cy.log("Bir Mesaj ",['bir msj','iki msj','uc']) //[bir mesaj,iki mesaj,uc mesaj]
    });

});