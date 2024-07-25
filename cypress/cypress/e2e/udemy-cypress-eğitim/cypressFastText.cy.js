describe('Fast Text Kullanımı', () => {
  
    it('Fast Text Kullanımı', () => {
        cy.visit('https://www.automationexercise.com/contact_us')
        cy.get('#message').type('ldneme hızlı test yazdırma jhkdsakjhdksjahkj hdsak hsakd hkajsdh kjsahdkjsahdaksh mcznxöm8 asujasdönbnb yasdıuasdnömdasnd udqlnasdmönad udksajhdkjsahdmms u asdjakshdaks hdsöa sabdasmnbdaskdhsa d jhaskdhsakdhk jsdak ha')
    });

    it('Fast Text Kullanımı 2', () => {
        cy.visit('https://www.automationexercise.com/contact_us')
        cy.get('#message').type('ldneme hızlı test yazdırma jhkdsakjhdksjahkj hdsak hsakd hkajsdh kjsahdkjsahdaksh mcznxöm8 asujasdönbnb yasdıuasdnömdasnd udqlnasdmönad udksajhdkjsahdmms u asdjakshdaks hdsöa sabdasmnbdaskdhsa d jhaskdhsakdhk jsdak ha',{delay:0})
    });
})
