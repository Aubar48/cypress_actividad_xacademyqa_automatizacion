describe('First Test', {testisolation :false}, () => {
    beforeEach('should visit the page', () => {
        cy.clearCookies();
    });
    it('should find the title', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        cy.get('input[name="username"]').type('Admin');
        cy.get('input[name="password"]').type('admin123');
        cy.get('button[type="submit"]').click();
        cy.wait(2000)
    });
    it('test after login', () => {
        cy.get('h6').contains('Dashboard')
        cy.get('.oxd-userdropdown-tab').click();
        cy.get('.oxd-userdropdown-link').contains('Logout').click();
    });
});