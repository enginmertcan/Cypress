export class Home {
    navigate(){
        cy.visit("https://www.cypress.io/")
        return this;

    }
    pricingBtn(){
        cy.get('nav>div>ul>li:nth-child(5)>a').click()

    }

}