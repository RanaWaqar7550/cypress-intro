describe('ALW Login page via Command', () => {

    it('Visit login page', () => {
        cy.login();
        // assertion
        cy.get("div[class^='Sidebar_profile__name']").contains('Rana Waqar');
    });
});
