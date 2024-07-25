// // Test to add a new article
// describe('Cypress Session Kullanımı', () => {
//     beforeEach(() => {
//         const username = 'deneme54@abc.com';
//         const password = '545454';
//         cy.loginWithSession(username, password);
//     });
                                // YAPAMADIM.
//     it('Siteye Git bir makale ekle', () => {
//         // Uncaught exceptions handler
//         Cypress.on('uncaught:exception', (err, runnable) => {
//             // Return false to prevent the error from failing the test
//             return false;
//         });

//         cy.visit('https://react-redux.realworld.io/login');
//         cy.contains('New Post').click();
//         // cy.wait(8000)
//         cy.get("input[placeholder='Article Title']").type("deneme1");
//         cy.get("input[placeholder='What's this article about?']").type("deneme2");
//         cy.get("textarea[placeholder='Write your article (in markdown)']").type("deneme3"); // textarea olmalı
//         cy.get("input[placeholder='Enter tags']").type("deneme4");
//         cy.contains('Publish Article').click();
//         cy.contains('Edit Article').should('be.visible');
//     });
// });