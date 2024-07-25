describe('Multi-Origin Authentication Test', () => {
    it('should log in to the main site and then to the second origin', () => {
        // Ana siteye git
        cy.visit('https://example.com');
        
        // Ana sitede oturum açma
        cy.get('input[name="username"]').type('your-username');
        cy.get('input[name="password"]').type('your-password');
        cy.get('button[type="submit"]').click();

        // İkinci kökene git ve oturum aç
        cy.origin('https://login.example.com', () => {
            cy.visit('/login');

            cy.get('input[name="username"]').type('your-username');
            cy.wait(4000)
            cy.get('input[name="password"]').type('your-password');
            cy.get('button[type="submit"]').click();

            // Giriş başarılı olduğunu doğrula
            cy.url().should('include', '/dashboard');
            cy.get('h1').should('contain', 'Welcome');
        });

        // Ana kökene geri dön ve doğrulama yap
        cy.visit('https://example.com/profile');
        cy.get('h1').should('contain', 'Your Profile');
    });
});
