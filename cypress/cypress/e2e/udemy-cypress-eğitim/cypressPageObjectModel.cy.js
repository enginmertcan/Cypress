import { Home } from "../../pageObjectModel/Home";
import HomeSecond from "../../pageObjectModel/HomeSecond";

 const homepagePom= new Home()


describe('Page Object Model', () => {
    
    it('PAge OBject model kullanım ornekleri ', () => {
        homepagePom.navigate().
                pricingBtn()
    });
});
describe('Page Object 2.Model', () => {

    it.only('PAge OBject model kullanım ornekleri ', () => {
        HomeSecond.navigate()
        HomeSecond.pricingBtn.should('be.visible').and('contain',"Pricing").click()
    });
    
});