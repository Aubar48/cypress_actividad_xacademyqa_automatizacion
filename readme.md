
Proyecto de Pruebas Automatizadas - Cypress
Este proyecto tiene como objetivo la automatización de pruebas para verificar el funcionamiento correcto de una página web de demostración de un sistema de reservas, utilizando Cypress como herramienta para realizar las pruebas de extremo a extremo (E2E).

Requisitos
Antes de ejecutar las pruebas, asegúrate de tener instalados los siguientes programas en tu máquina:

Node.js (v12 o superior)
NPM (v6 o superior)
Cypress (instalado a través de NPM)


# Descripción de las Pruebas de la carpeta Actividad archivo form.cy.js
1. Verificación del título de la página
Se visita la página https://automationintesting.online/ y se verifica que el título de la página sea "Restful-booker-platform demo".

2. Verificación de la información del hotel
Se valida que la información del hotel esté presente en la página, incluyendo los iconos y los párrafos correspondientes.

3. Verificación de imágenes visibles
Se asegura que haya al menos una imagen visible en la página.

4. Verificación de la descripción del hotel
Se valida que la descripción del hotel esté presente, junto con el título y la visibilidad del texto relacionado con las habitaciones.

5. Verificación de la descripción del cuarto para uno
Se valida la descripción completa del cuarto individual, incluyendo los elementos de la lista y la visibilidad del botón de reserva.

6. Validación de envío de formulario vacío
Se verifica que, al enviar el formulario de contacto sin datos, se muestren los errores correspondientes.

7. Validación de envío de formulario con datos incorrectos
Se verifica que, al enviar el formulario de contacto con datos incorrectos, se muestren los errores correspondientes.

8. Envío de formulario con datos válidos
Se completa el formulario de contacto con datos válidos y se valida que se muestre un mensaje de agradecimiento al finalizar el envío.

9. Verificación del contenido del footer
Se valida que el footer esté visible y que contenga los enlaces correctos, incluyendo un enlace a la página de Mark Winteringham.

# Descripción de las Pruebas de la carpeta Clase4 archivo clase4.cy.js

1. Verificación del título de la página
Se visita la página https://demoqa.com/ y se valida que el título de la página sea "DEMOQA".

2. Navegar a la sección de formularios
Se navega hacia el formulario de práctica dentro de la página "Elements" y "Forms", y se verifica que la imagen relacionada con la herramienta de QA sea visible.

3. Validar y completar el formulario
Se valida el funcionamiento del formulario de práctica realizando las siguientes acciones:

Se verifica que los campos requeridos estén vacíos y sean marcados como inválidos al intentar enviar el formulario.
Se completan los campos requeridos como nombre, apellido, género, número de teléfono y fecha de nacimiento.
Se marca un checkbox y se valida su selección.
Se marca y desmarca otro checkbox para validar el comportamiento dinámico.
Se sube un archivo desde la carpeta fixtures.
Se verifica que el campo de selección de ciudad esté deshabilitado.
Se selecciona un estado de la lista desplegable.
Finalmente, se envía el formulario y se valida que el mensaje de confirmación sea visible.
4. Validación de envío del formulario
Después de completar todos los campos y enviar el formulario, se valida que el mensaje de agradecimiento "Thanks for submitting the form" se muestre correctamente en la pantalla.

# Descripción de las Pruebas de la carpeta firstTest archivo organgeLogin.cy.js

1. Prueba de inicio de sesión
Se visita la página de inicio de sesión de OrangeHRM (https://opensource-demo.orangehrmlive.com/web/index.php/auth/login) y se validan los siguientes pasos:

Se ingresan las credenciales correctas de usuario y contraseña (Admin y admin123 respectivamente).
Se hace clic en el botón de Login.
Se espera 2 segundos para permitir que la página cargue después del inicio de sesión.
2. Prueba después del inicio de sesión
Después de iniciar sesión correctamente, se realiza lo siguiente:

Se verifica que el título Dashboard esté presente en la página.
Se hace clic en el icono del perfil de usuario en la esquina superior derecha.
Se hace clic en Logout para cerrar sesión correctamente.
3. Uso de beforeEach para limpiar cookies
Antes de cada prueba, se usa cy.clearCookies() para limpiar las cookies y asegurar que las pruebas no se vean afectadas por datos de sesiones previas.

