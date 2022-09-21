describe('ALW Login page', {
    viewportHeight: 667,
    viewportWidth: 375,
}, () => {

    it ('Visit login page', () => {
        cy.visit('/');
        cy.get('#email').type('rana.waqar@edly.io');
        cy.get('#password').type('Alw123');
        cy.get("button[class^='NewButton_btn-small']").click();
        // assertion
        cy.get("div[class^='Sidebar_profile__name']").contains('Rana Waqar');

        window.location.href = Cypress.config.baseUrl;
    });

    // ['iphone-8', 'ipad-2', 'landscape'].forEach((size) => {
    //     it (`Visit login page ${size}`, () => {
    //         cy.viewport(size);
    //         cy.visit('/');
    //         cy.get('#email').type('rana.waqar@edly.io');
    //         cy.get('#password').type('Alw123');
    //         cy.get("button[class^='NewButton_btn-small']").click();
    //         // assertion
    //         cy.get("div[class^='Sidebar_profile__name']").contains('Rana Waqar');
    //
    //         window.location.href = Cypress.config.baseUrl;
    //     });
    // });
});
