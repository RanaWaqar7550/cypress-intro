describe('ALW Login page via hooks', () => {
    // hooks

    // 1
    before(() => {
        cy.debug('test has started');
    });

    // 2
    beforeEach(() => {
        cy.visit('/');
    });

    // 3
    afterEach(() => {
        window.location.href = Cypress.config.baseUrl;
    });

    // 4
    after(() => {
        // assertion
        cy.get("div[class^='Sidebar_profile__name']").contains('Rana Waqar');
    });

    it('Visit login page hooks', () => {
        cy.get('#email').type('rana.waqar@edly.io');
        cy.get('#password').type('Alw123');
        cy.get("button[class^='NewButton_btn-small']").click();
    });

    it ('Second test case hooks', () => {
        cy.fixture('login').then(({username, email, password}) => {
            cy.get('#email').type(email);
            cy.get('#password').type(password);
            cy.get("button[class^='NewButton_btn-small']").click();
        });
    });
});
