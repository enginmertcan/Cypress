 class HomeSecond {
    navigate(){
        cy.visit("https://www.cypress.io/")

    }
    get pricingBtn(){
       return cy.get('nav>div>ul>li:nth-child(5)>a')

    }
}
export default new HomeSecond()
