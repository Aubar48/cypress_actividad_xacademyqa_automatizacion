describe('First Test', () => {
    beforeEach('should visit the page', () => {

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    });
    it('should find the title', () => {
        cy.get('img').should('be.visible');
        cy.get('textarea').eq('0').type('First Test');

    });

});