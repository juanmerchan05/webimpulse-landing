# Evidencias de persistencia y envío del formulario

## 1. Objetivo

Documentar la comprobación funcional del almacenamiento local del formulario de cotización de WebImpulse y la integración del envío real mediante Formspree.

## 2. Persistencia del borrador

Se completó el formulario con datos de prueba y se recargó la página utilizando Ctrl+R.

**Resultado observado:** los campos que se habían diligenciado aparecieron nuevamente después de la recarga. Esto permitió comprobar que el borrador se guarda en el navegador y se restaura al volver a cargar la landing.

La persistencia utiliza `localStorage`. Por ello, los datos se conservan en el mismo navegador y dispositivo; no se sincronizan automáticamente con otros dispositivos.

## 3. Envío real mediante Formspree

Después de comprobar la restauración de los campos, se envió la solicitud desde el formulario publicado.

**Resultado observado:** se recibió el correo correspondiente a la solicitud. Esto permitió verificar que el formulario no se limita a mostrar una confirmación visual, sino que realiza el envío al servicio externo configurado.

## 4. Estado después del envío

Una vez enviada correctamente la solicitud, la landing mostró un aviso indicando que ya se había recibido una solicitud desde ese navegador.

Al recargar la página, el mismo aviso volvió a aparecer.

**Resultado observado:** el estado de solicitud completada se conserva localmente después de la recarga. Este comportamiento evita presentar nuevamente el formulario como pendiente en ese navegador, pero no representa un registro global de solicitudes ni impide que la misma persona envíe desde otro navegador o dispositivo.

## 5. Evidencias que acompañan la actividad

Las siguientes capturas fueron tomadas durante la comprobación manual y se deben incorporar a la carpeta de evidencias del proyecto:

1. Formulario con los campos restaurados después de recargar la página.
2. Correo recibido después del envío mediante Formspree.
3. Aviso de solicitud completada que vuelve a mostrarse después de recargar la página.

## 6. Referencia de implementación

La implementación de persistencia se encuentra en el commit:

- `577942bc171d666c488878737fb74f49d462040c`

La integración del envío real mediante Formspree se encuentra en el commit:

- `97288b925163e2de78e43d697ee03d56e805da88`

## 7. Conclusión

Las pruebas manuales confirmaron tres comportamientos: el borrador se restaura después de recargar la página, el formulario envía la solicitud mediante Formspree y el estado de solicitud completada permanece visible después de una nueva recarga. Estas comprobaciones respaldan el funcionamiento esperado de la persistencia local y del envío real.

La prueba no demuestra sincronización entre dispositivos ni un bloqueo global de solicitudes. El almacenamiento utilizado pertenece al navegador donde se realizó la prueba.
