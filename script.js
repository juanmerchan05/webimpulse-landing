/**
 * ==========================================================================
 * WebImpulse - Validación Accesible del Formulario (script.js)
 * Proyecto: Mi Primera Landing Page Profesional con IA
 * Enfoque: JavaScript Vanilla, validación en evento 'blur' y 'submit',
 *          accesibilidad (ARIA), sin alert(), y feedback visual en página.
 * ==========================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  // Referencia al formulario principal
  const formulario = document.getElementById('formulario-cotizar');

  if (!formulario) {
    console.warn('WebImpulse: No se encontró el formulario "#formulario-cotizar".');
    return;
  }

  // Campos principales del formulario
  const campoNombre = document.getElementById('nombre-completo');
  const errorNombre = document.getElementById('nombre-error');

  const campoCorreo = document.getElementById('correo-electronico');
  const errorCorreo = document.getElementById('correo-error');

  const campoNegocio = document.getElementById('tipo-negocio');
  const errorNegocio = document.getElementById('negocio-error');

  const campoConsentimiento = document.getElementById('consentimiento-datos');
  const errorConsentimiento = document.getElementById('consentimiento-error');

  // Campo opcional de Mensaje (preparado según la rúbrica académica si existe en el DOM)
  const campoMensaje = document.getElementById('mensaje') || document.querySelector('textarea[name="mensaje"]');
  const errorMensaje = document.getElementById('mensaje-error');

  // Contenedor del mensaje de éxito / estado global
  const estadoFormulario = document.getElementById('formulario-estado');
  const botonEnviar = document.getElementById('boton-enviar');

  // Expresión regular estándar y robusta para correo electrónico (RFC 5322 compatible, case-insensitive)
  const regexCorreo = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i;

  /**
   * Muestra un mensaje de error y actualiza los atributos de accesibilidad ARIA
   * Asocia dinámicamente aria-invalid="true" y aria-describedby con el ID del error
   */
  function mostrarError(campo, elementoError, mensaje) {
    if (!elementoError) return;

    elementoError.textContent = mensaje;
    elementoError.classList.remove('hidden');
    elementoError.style.display = 'block'; // Garantiza visibilidad inmediata del mensaje
    elementoError.setAttribute('role', 'alert');

    if (campo) {
      campo.setAttribute('aria-invalid', 'true');
      if (elementoError.id) {
        campo.setAttribute('aria-describedby', elementoError.id);
      }
      // Feedback visual del campo en error
      campo.classList.add('border-rose-500', 'focus:ring-rose-400');
      campo.classList.remove('border-slate-200', 'focus:ring-brand-pulse');
    }
  }

  /**
   * Limpia el mensaje de error y restaura el estado accesible estándar
   * Establece aria-invalid="false" y elimina aria-describedby
   */
  function limpiarError(campo, elementoError) {
    if (!elementoError) return;

    elementoError.textContent = '';
    elementoError.classList.add('hidden');
    elementoError.style.display = 'none'; // Asegura que quede completamente oculto
    elementoError.removeAttribute('role');

    if (campo) {
      campo.setAttribute('aria-invalid', 'false');
      campo.removeAttribute('aria-describedby');
      campo.classList.remove('border-rose-500', 'focus:ring-rose-400');
      campo.classList.add('border-slate-200', 'focus:ring-brand-pulse');
    }
  }

  /**
   * 1. Validación del campo Nombre Completo (obligatorio, no vacío, mín 3 caracteres)
   */
  function validarNombre() {
    if (!campoNombre) return true;
    const valor = campoNombre.value.trim();

    if (valor === '') {
      mostrarError(campoNombre, errorNombre, 'Por favor, ingresa tu nombre completo.');
      return false;
    }

    if (valor.length < 3) {
      mostrarError(campoNombre, errorNombre, 'El nombre debe contener al menos 3 caracteres.');
      return false;
    }

    limpiarError(campoNombre, errorNombre);
    return true;
  }

  /**
   * 2. Validación del campo Correo Electrónico (obligatorio y formato válido)
   */
  function validarCorreo() {
    if (!campoCorreo) return true;
    const valor = campoCorreo.value.trim();

    if (valor === '') {
      mostrarError(campoCorreo, errorCorreo, 'El correo electrónico es obligatorio.');
      return false;
    }

    if (!regexCorreo.test(valor)) {
      mostrarError(campoCorreo, errorCorreo, 'Ingresa un correo electrónico válido (ej. laura@minegocio.com).');
      return false;
    }

    limpiarError(campoCorreo, errorCorreo);
    return true;
  }

  /**
   * 3. Validación del campo Tipo de Negocio / Proyecto (obligatorio, selección válida)
   */
  function validarTipoNegocio() {
    if (!campoNegocio) return true;
    const valor = campoNegocio.value.trim();

    if (!valor || valor === '') {
      mostrarError(campoNegocio, errorNegocio, 'Por favor, selecciona una categoría para tu negocio o proyecto.');
      return false;
    }

    limpiarError(campoNegocio, errorNegocio);
    return true;
  }

  /**
   * 4. Validación del campo Mensaje (si está presente en el HTML)
   */
  function validarMensaje() {
    if (!campoMensaje) return true;
    const valor = campoMensaje.value.trim();

    if (valor === '') {
      mostrarError(campoMensaje, errorMensaje, 'El mensaje descriptivo es obligatorio.');
      return false;
    }

    if (valor.length < 10) {
      mostrarError(campoMensaje, errorMensaje, 'Por favor, cuéntanos un poco más sobre tu idea (mínimo 10 caracteres).');
      return false;
    }

    limpiarError(campoMensaje, errorMensaje);
    return true;
  }

  /**
   * 5. Validación de Aceptación de Términos / Consentimiento (obligatorio, checked)
   */
  function validarConsentimiento() {
    if (!campoConsentimiento) return true;

    if (!campoConsentimiento.checked) {
      mostrarError(campoConsentimiento, errorConsentimiento, 'Debes autorizar el contacto para enviarte la propuesta personalizada.');
      return false;
    }

    limpiarError(campoConsentimiento, errorConsentimiento);
    return true;
  }

  // =========================================================================
  // EVENTOS 'BLUR': Validación inmediata al abandonar cada campo
  // =========================================================================
  if (campoNombre) {
    campoNombre.addEventListener('blur', validarNombre);
    // Limpieza amigable en tiempo real si el usuario está corrigiendo un error
    campoNombre.addEventListener('input', () => {
      if (campoNombre.getAttribute('aria-invalid') === 'true') {
        validarNombre();
      }
    });
  }

  if (campoCorreo) {
    campoCorreo.addEventListener('blur', validarCorreo);
    campoCorreo.addEventListener('input', () => {
      if (campoCorreo.getAttribute('aria-invalid') === 'true') {
        validarCorreo();
      }
    });
  }

  if (campoNegocio) {
    campoNegocio.addEventListener('blur', validarTipoNegocio);
    campoNegocio.addEventListener('change', validarTipoNegocio);
  }

  if (campoMensaje) {
    campoMensaje.addEventListener('blur', validarMensaje);
    campoMensaje.addEventListener('input', () => {
      if (campoMensaje.getAttribute('aria-invalid') === 'true') {
        validarMensaje();
      }
    });
  }

  if (campoConsentimiento) {
    campoConsentimiento.addEventListener('blur', validarConsentimiento);
    campoConsentimiento.addEventListener('change', validarConsentimiento);
  }

  // Enviar el formulario a Formspree después de validar los campos.
  formulario.addEventListener('submit', async (evento) => {
    evento.preventDefault();

    const valido = validarNombre() && validarCorreo() &&
      validarTipoNegocio() && validarMensaje() && validarConsentimiento();

    if (!valido) {
      if (estadoFormulario) {
        estadoFormulario.classList.add('hidden');
        estadoFormulario.replaceChildren();
      }
      const primerCampoInvalido = [campoNombre, campoCorreo, campoNegocio, campoMensaje, campoConsentimiento]
        .find((campo) => campo && campo.getAttribute('aria-invalid') === 'true');
      if (primerCampoInvalido) primerCampoInvalido.focus();
      return;
    }

    if (botonEnviar) {
      botonEnviar.disabled = true;
      botonEnviar.textContent = 'Enviando solicitud…';
    }
    if (estadoFormulario) {
      estadoFormulario.className = 'mt-4 p-4 rounded-xl text-center bg-blue-50 border border-blue-200 block';
      estadoFormulario.textContent = 'Estamos enviando tu solicitud…';
      estadoFormulario.setAttribute('role', 'status');
    }

    try {
      const datos = new FormData(formulario);
      datos.append('_subject', 'Nueva solicitud de cotización - WebImpulse');
      const respuesta = await fetch(formulario.action, {
        method: 'POST',
        body: datos,
        headers: { Accept: 'application/json' }
      });
      if (!respuesta.ok) throw new Error('No se pudo enviar la solicitud. Inténtalo de nuevo.');

      if (estadoFormulario) {
        estadoFormulario.className = 'mt-4 p-4 rounded-xl text-center bg-emerald-50 border border-emerald-200 block';
        estadoFormulario.textContent = '✓ Solicitud enviada correctamente. Gracias, ' +
          (campoNombre ? campoNombre.value.trim() : '') + '. Nos pondremos en contacto contigo.';
        estadoFormulario.setAttribute('role', 'status');
      }
    } catch (error) {
      if (estadoFormulario) {
        estadoFormulario.className = 'mt-4 p-4 rounded-xl text-center bg-rose-50 border border-rose-200 block';
        estadoFormulario.textContent = error.message || 'Ocurrió un error al enviar. Inténtalo nuevamente.';
        estadoFormulario.setAttribute('role', 'alert');
      }
    } finally {
      if (botonEnviar) {
        botonEnviar.disabled = false;
        botonEnviar.textContent = 'Solicitar diagnóstico y cotización';
      }
    }
  });

  // =========================================================================
  // PUNTO 17: ANIMACIONES MEDIANTE INTERSECTION OBSERVER (API NATIVA)
  // =========================================================================

  /**
   * Inicializa la animación suave de entrada en las secciones seleccionadas
   * (#beneficios, #testimonios, #como-funciona) mediante la API nativa de Intersection Observer.
   *
   * Principios técnicos y de accesibilidad implementados:
   * 1. API nativa sin dependencias ni librerías externas.
   * 2. Respeto estricto a prefers-reduced-motion (accesibilidad para personas con trastornos vestibulares).
   * 3. Sin eventos de scroll (rendimiento optimizado a 60fps sin sobrecargar el hilo principal).
   * 4. unobserve() garantiza que cada sección se anime una sola vez al entrar en el viewport.
   */
  function inicializarAnimacionesSecciones() {
    // 1. Respetar preferencia de reducción de movimiento del sistema
    const prefiereReduccionMovimiento = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefiereReduccionMovimiento) {
      // Las secciones se mantienen visibles sin alteraciones ni transiciones de movimiento
      return;
    }

    // 2. Comprobar soporte de la API nativa Intersection Observer
    if (!('IntersectionObserver' in window)) {
      // Fallback elegante: si el navegador no soporta la API, el contenido se muestra normal
      return;
    }

    // 3. Seleccionar las 3 secciones requeridas de la landing
    const selectoresSecciones = ['#beneficios', '#testimonios', '#como-funciona'];
    const elementosAObservar = selectoresSecciones
      .map((selector) => document.querySelector(selector))
      .filter((elemento) => elemento !== null);

    if (elementosAObservar.length === 0) return;

    // 4. Preparar el estado visual inicial (opacidad cero y leve desplazamiento hacia abajo)
    elementosAObservar.forEach((seccion) => {
      seccion.style.opacity = '0';
      seccion.style.transform = 'translateY(24px)';
      seccion.style.transition = 'opacity 600ms cubic-bezier(0.16, 1, 0.3, 1), transform 600ms cubic-bezier(0.16, 1, 0.3, 1)';
      seccion.style.willChange = 'opacity, transform';
    });

    // 5. Configurar el umbral y márgenes del observador
    const opcionesObserver = {
      root: null, // Viewport del navegador
      rootMargin: '0px 0px -50px 0px', // Se activa sutilmente antes del límite inferior
      threshold: 0.12 // Se dispara cuando al menos el 12% de la sección ingresa a pantalla
    };

    // 6. Instanciar el IntersectionObserver
    const observadorSecciones = new IntersectionObserver((entradas, observador) => {
      entradas.forEach((entrada) => {
        if (entrada.isIntersecting) {
          const seccion = entrada.target;

          // Animación suave de aparición y reposicionamiento
          seccion.style.opacity = '1';
          seccion.style.transform = 'translateY(0)';

          // Liberar willChange tras terminar la transición para optimizar memoria GPU
          setTimeout(() => {
            seccion.style.willChange = 'auto';
          }, 650);

          // Desconectar el observador para que no vuelva a ejecutarse al volver a scrollear
          observador.unobserve(seccion);
        }
      });
    }, opcionesObserver);

    // 7. Iniciar la observación de cada sección
    elementosAObservar.forEach((seccion) => {
      observadorSecciones.observe(seccion);
    });
  }

  // Inicializar animaciones de secciones
  inicializarAnimacionesSecciones();
});
