describe('ALW Login page', () => {
    it ('Visit login page', () => {
        cy.visit('/');
        cy.get('#email').type('rana.waqar@edly.io');
        cy.get('#password').type('Alw123');
        cy.get("button[class^='NewButton_btn-small']").click();
        // assertion
        cy.get("div[class^='Sidebar_profile__name']").contains('Rana Waqar');

        window.location.href = Cypress.config.baseUrl;
    });

    it ('Login via fixtures data', () => {
        cy.fixture('login').then(({ username, email, password }) => {
            cy.visit('/');
            cy.get('#email').type(email);
            cy.get('#password').type(password);
            cy.get("button[class^='NewButton_btn-small']").click();
            // assertion
            cy.get("div[class^='Sidebar_profile__name']").contains(username);
        });
    });
});
