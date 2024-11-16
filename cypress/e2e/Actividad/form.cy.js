describe('Metodos Actividad 12/11', { testIsolation: false }, () => {

    it('Visitar la página y Verifica el titulo de la misma', () => {
        cy.visit('https://automationintesting.online/')
        cy.title().should('eq', 'Restful-booker-platform demo')
    })

    it('Visitar la página y Verifica que la información del hotel esté presente en la página.', () => {
        cy.visit('https://automationintesting.online/')
        // Verificar que cada icono y párrafo esté presente
        cy.verifyHotelInfo();
    })

    it('Visitar la página y Asegurate de que haya al menos una imagen visible.', () => {
        cy.visit('https://automationintesting.online/')
        // Validamos la imagen estpa visible
        cy.verifyImagesVisible();
    })

    it('Visitar la página y Verificar que la descripción del hotel sea la esperada y el titulo tambien.', () => {
        cy.visit('https://automationintesting.online/')
        // Verificar que el párrafo contenga el texto completo de la descripción
        cy.contains('p', "Welcome to Shady Meadows, a delightful Bed & Breakfast nestled in the hills on Newingtonfordburyshire. A place so beautiful you will never want to leave. All our rooms have comfortable beds and we provide breakfast from the locally sourced supermarket. It is a delightful place.")
            .should('be.visible')
        // Verifica que haya un <h2> con el texto "Rooms"
        cy.get('h2').contains('Rooms').should('be.visible');
    })

    it('Visitar la página y Verificar que la descripción del cuarto para uno sea la esperada y el titulo también y la lista.', () => {
        cy.visit('https://automationintesting.online/')
        // Verifica que haya un <h3> con el texto "single y un icono"
        cy.get('span.fa-wheelchair').should('be.visible');
        cy.get('h3').contains('single').should('be.visible');
        // Verificar que el párrafo contenga el texto completo de la descripción
        cy.contains('p', "Aenean porttitor mauris sit amet lacinia molestie. In posuere accumsan aliquet. Maecenas sit amet nisl massa. Interdum et malesuada fames ac ante.")
            .should('be.visible')
        // Verifica que cada <li> con los elementos esperados esté visible
        cy.get('li').contains('TV').should('be.visible');
        cy.get('li').contains('WiFi').should('be.visible');
        cy.get('li').contains('Safe').should('be.visible');
        // Verifica que el botón sea visible y que tenga el texto correcto
        cy.get('button.openBooking')
            .should('be.visible')         // Verifica que el botón sea visible
            .and('contain', 'Book this room');  // Verifica que el texto sea correcto
        // Simula un clic en el botón
        cy.get('button.openBooking').click();
    });

    it('Validar envío de form vacío', () => {
        cy.visit('https://automationintesting.online/')
        cy.log('Envío de form de contacto en blanco.')
        cy.get('#submitContact').click()
        cy.verifyContactError()
    })

    it('Validar envío de form con data incorrecta', () => {
        cy.log('Set de datos incorrectos.')
        cy.verifyDatosFormIncorrect()
        cy.get('#submitContact').click()
        cy.verifyContactError()
    })

    it('Completar y validar el formulario de contacto', () => {
        cy.visit('https://automationintesting.online/');
        cy.fillContactForm('Juan Pérez', 'juan.perez@example.com', '12345678901', 'Consulta sobre disponibilidad', 'Estoy interesado en saber si tienen disponibilidad para el fin de semana.');
        cy.contains('Thanks for getting in touch').should('be.visible');
    });

    it('Verificar el contenido y visibilidad del footer', () => {
        cy.visit('https://automationintesting.online/');
        // Verifica que el footer esté visible
        cy.get('#footer').should('be.visible');
        cy.verifyTextFooter()
        cy.verifyEnlancesFooter()
        // Verifica que el enlace al sitio de Mark Winteringham esté presente y sea visible
        cy.get('#footer').find('a').should('have.attr', 'href', 'http://www.mwtestconsultancy.co.uk');
    });

})