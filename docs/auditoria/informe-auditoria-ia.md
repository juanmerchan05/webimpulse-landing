# Informe de auditoría crítica del código generado por inteligencia artificial

## 1. Objetivo y alcance

Este informe documenta la revisión crítica del código inicial de WebImpulse, generado con apoyo de Google AI Studio, y contrasta sus decisiones con el estado actual del proyecto. La revisión se centró en la estructura HTML, los estilos, la lógica JavaScript del formulario, la persistencia de datos, la seguridad básica, la accesibilidad y el proceso de publicación.

Como referencia del estado inicial se utilizó el primer commit del repositorio (`5f6294fff7322dd3abaafbcf5a1465600f33e5e2`) y se comparó con la rama principal actual. La comparación disponible indicaba 36 commits de diferencia; por ello, el análisis distingue entre hallazgos del código inicial y mejoras verificadas posteriormente.

## 2. Hallazgos del código inicial

### 2.1 Envío del formulario y validación

- El código inicial simulaba una respuesta satisfactoria sin comprobar que los datos hubieran llegado a un servicio externo.
- Después de esa respuesta simulada, el formulario podía reiniciarse, dando al usuario la impresión de que la solicitud se había enviado correctamente.
- El botón cambiaba temporalmente a un estado de registro y quedaba deshabilitado durante unos segundos, aunque no existía confirmación real del servidor.
- La expresión regular utilizada para validar el correo era simplificada. No debe describirse como una validación completa conforme a RFC 5322.
- El campo de mensaje era opcional en la lógica JavaScript y no estaba presente en el HTML inicial revisado.
- La función que mostraba errores retornaba anticipadamente si no encontraba el contenedor de error; en ese caso no completaba la actualización de los atributos ARIA relacionados.
- La opción `novalidate` hacía que la experiencia de validación dependiera de que JavaScript se cargara y funcionara correctamente.

### 2.2 Seguridad y manipulación del DOM

Se identificó el uso de `innerHTML` para insertar contenido que incluía el nombre introducido por el usuario. Insertar datos no confiables de esa manera puede permitir inyección de HTML o scripts (DOM XSS). Para contenido de texto plano es preferible utilizar `textContent`.

### 2.3 Mantenibilidad

Se observó lógica repetida en distintas partes del manejo del formulario. La duplicación dificulta mantener un comportamiento coherente y aumenta la posibilidad de que una corrección se aplique en un lugar, pero no en otro.

### 2.4 Aspectos positivos

El código inicial también contenía decisiones aprovechables: estructura general de una landing, uso de elementos de navegación y secciones, y una animación basada en `IntersectionObserver` que contemplaba la preferencia de movimiento reducido y un comportamiento alternativo cuando la API no estuviera disponible.

## 3. Mejoras verificadas en la versión actual

- El formulario realiza una petición POST a Formspree mediante `fetch` y `FormData`.
- El estado de éxito se muestra únicamente cuando la respuesta del servicio indica que la solicitud fue aceptada (`response.ok`).
- Mientras se procesa el envío, el botón se deshabilita para evitar envíos repetidos.
- Si ocurre un error, los datos permanecen en el formulario para que la persona pueda corregir o volver a intentar el envío.
- Tras un envío satisfactorio, se elimina el borrador guardado y se registra el estado de solicitud completada en el navegador.
- La inserción del nombre en el mensaje de confirmación utiliza `textContent`, evitando interpretar ese dato como HTML.
- La persistencia del borrador permite restaurar los campos después de recargar la página.
- La landing publicada se comprobó manualmente y el envío real produjo la recepción de un correo de confirmación de Formspree.

La persistencia y el estado de solicitud completada se almacenan localmente. Por tanto, el aviso de solicitud completada corresponde a ese navegador y dispositivo; no constituye un bloqueo global de solicitudes por persona.

## 4. Estructura, accesibilidad y estilos

En el HTML actual se verificaron el idioma del documento, la codificación UTF-8, la etiqueta viewport, el título y metadatos, así como la estructura semántica general mediante encabezado, navegación, contenido principal, secciones y pie de página. El formulario cuenta con etiquetas asociadas, campos requeridos, referencias a mensajes de error y regiones de anuncio mediante atributos ARIA.

Los estilos utilizan variables CSS, reglas de diseño adaptable y estilos de foco visibles. También se identificaron reglas para reducir movimiento y tamaños mínimos de interacción. Se hicieron comprobaciones manuales de desbordamiento horizontal en anchos de 390 px y 1366 px; en esas medidas, el ancho de desplazamiento coincidió con el ancho visible. La regla `overflow-x: hidden` merece cautela porque puede ocultar contenido que se desborde en lugar de resolver su causa.

La navegación móvil utiliza `details` y `summary`. La accesibilidad de la interfaz debe seguir comprobándose con teclado y tecnologías de asistencia, no solo mediante inspección visual.

## 5. Límites y aspectos pendientes

- La expresión regular de correo continúa siendo una validación simplificada; no se considera una validación exhaustiva de todos los formatos posibles.
- La función de presentación de errores conserva un retorno anticipado cuando falta el contenedor correspondiente, por lo que ese caso límite podría mejorarse.
- La validación del formulario depende de JavaScript debido al uso de `novalidate`.
- Los datos del borrador se guardan en `localStorage), que no cifra la información y puede ser accesible para otros scripts del mismo origen. No se deben almacenar allí datos sensibles.
- El consentimiento del formulario debe acompañarse de información de privacidad clara y accesible.
- El indicador de solicitud completada es local al navegador; no reemplaza un registro central en servidor.
- La aplicación Studio funciona como herramienta complementaria de demostración y no debe confundirse con el formulario real de la landing. Su formulario de vista previa no realiza el envío real a Formspree.
- Se identificaron aspectos de accesibilidad por revisar en modales y en el manejo de promesas del portapapeles de Studio.
- El proyecto no cuenta con una suite automatizada de pruebas unitarias o de extremo a extremo (por ejemplo, Vitest, Jest o Playwright), ni con integración automatizada de axe o Lighthouse.
- El script denominado `lint` ejecuta comprobación de TypeScript (`tsc --noEmit`); no equivale a una auditoría de ESLint.
- Las comprobaciones de envío, persistencia y diseño adaptable descritas en este informe fueron manuales. No deben presentarse como resultados de pruebas automatizadas.

## 6. Verificaciones funcionales realizadas

Se realizaron comprobaciones manuales de los siguientes comportamientos:

1. Se completó el formulario y se recargó la página; los campos guardados se restauraron.
2. Se envió una solicitud y se comprobó la recepción del correo mediante Formspree.
3. Después del envío satisfactorio, se recargó la página y volvió a mostrarse el aviso de solicitud completada en ese navegador.
4. Se comprobó la ausencia de desbordamiento horizontal en los anchos de 390 px y 1366 px.
5. Se revisó la landing publicada y se confirmó su funcionamiento general.

## 7. Reflexión sobre el uso de inteligencia artificial

La generación de código con inteligencia artificial permitió acelerar la construcción inicial de la página, proponer una estructura visual y facilitar la identificación de posibles soluciones. Sin embargo, la primera versión también incluyó comportamientos que podían aparentar éxito sin completar una operación real y decisiones que requerían revisión desde la perspectiva de seguridad y accesibilidad.

La experiencia demuestra que el código generado por IA debe tratarse como una propuesta y no como un producto terminado. Es responsabilidad de quien desarrolla comprenderlo, contrastarlo con los requisitos, probar los casos reales y corregir los problemas antes de publicar.

## 8. Conclusión

La auditoría permitió identificar diferencias importantes entre una demostración visual y una funcionalidad realmente operativa. La integración de Formspree, el uso de `textContent`, la conservación de datos ante errores y la persistencia local representan mejoras verificadas en la versión actual. También permanecen límites que deben comunicarse con claridad, especialmente en la validación del correo, el almacenamiento local, la accesibilidad y la ausencia de pruebas automatizadas.

El principal aprendizaje es que la inteligencia artificial puede apoyar y acelerar el desarrollo, pero no sustituye la revisión crítica ni las pruebas funcionales realizadas por la persona responsable del proyecto.
