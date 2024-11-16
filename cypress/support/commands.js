
Cypress.Commands.add('verifyImagesVisible', () => {
    cy.get('img[src="/images/rbp-logo.jpg"]').should('be.visible');
    cy.get('img[src="/images/room2.jpg"]').should('be.visible');
});

Cypress.Commands.add('verifyHotelInfo', () => {
    // Verificar información del hotel
    cy.get('.col-sm-5 > p').eq(0) // Verifica el primer párrafo
        .find('.fa.fa-home')
        .should('exist').and('be.visible');
    cy.get('.col-sm-5 > p').eq(0).should('contain.text', 'Shady Meadows B&B');

    cy.get('.col-sm-5 > p').eq(1).should('contain.text', 'The Old Farmhouse, Shady Street, Newfordburyshire, NE1 410S');

    cy.get('.col-sm-5 > p').eq(2)
        .find('.fa.fa-phone')
        .should('exist').and('be.visible');
    cy.get('.col-sm-5 > p').eq(2).should('contain.text', '012345678901');

    cy.get('.col-sm-5 > p').eq(3)
        .find('.fa.fa-envelope')
        .should('exist').and('be.visible');
    cy.get('.col-sm-5 > p').eq(3).should('contain.text', 'fake@fakeemail.com');
});

Cypress.Commands.add('verifyContactError', () => {
    // Verificar información del hotel
    cy.get('.alert').should('be.visible')
    cy.get('p').contains('Subject must be between 5 and 100 characters.')
    cy.get('p').contains('Subject may not be blank')
    cy.get('p').contains('Name may not be blank')
    cy.get('p').contains('Message must be between 20 and 2000 characters.')
    cy.get('p').contains('Message may not be blank')
    cy.get('p').contains('Email may not be blank')
    cy.get('p').contains('Phone may not be blank')
    cy.get('p').contains('Phone must be between 11 and 21 characters.')
});

Cypress.Commands.add('verifyDatosFormIncorrect', () => {
    //verificar form incorrecto
    cy.get('input[placeholder="Name"]').type('asd')
    cy.get('input[placeholder="Email"]').type('asdasd')
    cy.get('input[placeholder="Phone"]').type('asdasd')
    cy.get('input[placeholder="Subject"]').type('asdasd')
    cy.get('[data-testid="ContactDescription"]').type('asdasd')
});

Cypress.Commands.add('fillContactForm', (name, email, phone, subject, description) => {
    cy.get('#name').type(name).should('have.value', name);
    cy.get('#email').type(email).should('have.value', email);
    cy.get('#phone').type(phone).should('have.value', phone);
    cy.get('#subject').type(subject).should('have.value', subject);
    cy.get('#description').type(description).should('have.value', description);
    cy.get('#submitContact').should('be.enabled').click();
});

Cypress.Commands.add('verifyTextFooter', () => {
    // Verifica que el texto esperado esté presente dentro del footer
    cy.get('#footer').contains('restful-booker-platform v1.7.0').should('be.visible');
    cy.get('#footer').contains('Created by Mark Winteringham').should('be.visible');
    cy.get('#footer').contains('© 2019-24').should('be.visible');
});
Cypress.Commands.add('verifyEnlancesFooter', () => {
    // Verifica que los enlaces en el footer sean visibles
    cy.get('#footer').find('a').contains('Cookie-Policy').should('be.visible');
    cy.get('#footer').find('a').contains('Privacy-Policy').should('be.visible');
    cy.get('#footer').find('a').contains('Admin panel').should('be.visible');
});