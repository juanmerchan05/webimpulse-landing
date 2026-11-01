# Biblioteca de componentes y snippets — WebImpulse

Esta biblioteca documenta los estilos reutilizables definidos en `components.css`. Su objetivo es mantener consistencia visual, facilitar el mantenimiento y permitir reutilizar patrones sin duplicar reglas CSS.

## Cómo integrar los estilos

La hoja `components.css` utiliza variables de diseño declaradas en `styles.css`. Por eso, carga primero los estilos base y después los componentes:

```html
<link rel="stylesheet" href="../styles.css">
<link rel="stylesheet" href="../components.css">
```

Ajusta las rutas relativas según la ubicación del archivo HTML. En la landing publicada, ambas hojas se cargan desde la raíz del sitio.

## Convenciones de nombres

- `c-`: componente reutilizable.
- `__`: elemento interno de un componente.
- `--`: modificador o variante.
- `u-`: clase de utilidad.

## 1. Botón de acción

**Clases:** `.c-button`, `.c-button--primary`

**Propósito:** presentar una acción principal con alineación consistente, área interactiva mínima de 44 px y estado visible de foco para navegación con teclado.

```html
<a class="c-button c-button--primary" href="#contacto">
  Solicitar cotización
</a>
```

También puede aplicarse a un botón de formulario:

```html
<button class="c-button c-button--primary" type="submit">
  Enviar solicitud
</button>
```

**Reutilización:** usa `.c-button` como base y añade `.c-button--primary` para la variante principal. Mantén un texto que describa claramente la acción.

## 2. Tarjeta de beneficio

**Clase:** `.c-card--benefit`

**Elemento interno:** `.c-card__title`

**Propósito:** agrupar una ventaja o característica del servicio en un bloque visual reutilizable.

```html
<article class="c-card--benefit">
  <h3 class="c-card__title">Diseño estratégico</h3>
  <p>Una experiencia digital alineada con los objetivos de tu negocio.</p>
</article>
```

**Reutilización:** duplica la estructura para cada beneficio y conserva un título descriptivo.

## 3. Tarjeta de testimonio

**Clase:** `.c-card--testimonial`

**Elemento interno:** `.c-card__quote`

**Propósito:** destacar una cita u opinión de cliente.

```html
<article class="c-card--testimonial">
  <blockquote class="c-card__quote">
    <p>“El proceso fue claro y la experiencia superó nuestras expectativas.”</p>
  </blockquote>
  <p><strong>Nombre del cliente</strong></p>
</article>
```

**Reutilización:** utiliza contenido y atribuciones verificables. No presentes testimonios ficticios como opiniones reales.

## 4. Tarjeta de paso

**Clase:** `.c-card--step`

**Elemento interno:** `.c-card__number`

**Propósito:** explicar etapas de un proceso mediante bloques consistentes.

```html
<article class="c-card--step">
  <span class="c-card__number" aria-hidden="true">01</span>
  <h3>Descubrimiento</h3>
  <p>Conocemos las necesidades y objetivos del proyecto.</p>
</article>
```

**Reutilización:** cambia el número, título y descripción para cada etapa. Si el número es decorativo, puede ocultarse a tecnologías de asistencia como en el ejemplo.

## 5. Utilidad de alineación

**Clase:** `.u-text-center`

**Propósito:** centrar horizontalmente el texto de un elemento.

```html
<p class="u-text-center">Creamos experiencias digitales.</p>
```

**Reutilización:** aplícala únicamente cuando la alineación centrada sea adecuada para el contenido y el diseño.

## Accesibilidad y comportamiento

- Los botones conservan un indicador `:focus-visible` para facilitar la navegación con teclado.
- `.c-button` define una altura mínima de 44 px.
- Los componentes reducen la duración de las transiciones y eliminan desplazamientos al pasar el cursor cuando el usuario activa `prefers-reduced-motion: reduce`.
- Utiliza elementos HTML semánticos, encabezados en orden lógico y textos que expliquen la finalidad de cada acción.
- No dependas exclusivamente del color o del efecto hover para comunicar información.

## Dependencias y mantenimiento

- Los componentes dependen de las variables CSS de `styles.css`, como espacios, colores, tipografías, radios, sombras y transiciones.
- Las clases documentadas están implementadas en el archivo raíz `components.css`.
- Antes de crear una clase nueva, comprueba si puede reutilizarse uno de estos patrones.
- Si se modifica una clase en `components.css`, actualiza también este documento y revisa sus usos en la landing.

## Inventario

| Componente | Clase principal | Elementos o variantes |
|---|---|---|
| Botón de acción | `.c-button` | `.c-button--primary` |
| Tarjeta de beneficio | `.c-card--benefit` | `.c-card__title` |
| Tarjeta de testimonio | `.c-card--testimonial` | `.c-card__quote` |
| Tarjeta de paso | `.c-card--step` | `.c-card__number` |
| Utilidad de alineación | `.u-text-center` | — |
