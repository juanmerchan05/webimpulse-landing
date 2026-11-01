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


## Variables CSS documentadas

Las variables se definen en `:root` dentro de `styles.css`. Esta tabla recoge más de diez tokens reales utilizados por el sistema; sus valores no se modifican en esta documentación.

| Variable | Valor actual | Uso |
|---|---|---|
| `--color-canvas` | `#FAFAF9` | Fondo principal |
| `--color-canvas-card` | `#FFFFFF` | Superficie de tarjetas |
| `--color-slate-900` | `#0F172A` | Títulos y texto principal |
| `--color-slate-700` | `#334155` | Texto destacado |
| `--color-slate-600` | `#475569` | Texto de cuerpo |
| `--color-slate-200` | `#E2E8F0` | Bordes y separadores |
| `--color-pulse` | `#2563EB` | Acento principal |
| `--color-pulse-hover` | `#1D4ED8` | Estado hover del acento |
| `--color-sage` | `#047857` | Acento de éxito |
| `--font-heading` | Plus Jakarta Sans | Tipografía de encabezados |
| `--font-body` | DM Sans | Tipografía de cuerpo |
| `--space-2` | `0.5rem` | Espaciado compacto |
| `--space-6` | `1.5rem` | Espaciado de tarjetas |
| `--radius-lg` | `0.75rem` | Radio de botones |
| `--radius-2xl` | `1.25rem` | Radio de tarjetas |
| `--shadow-card` | Sombra suave | Elevación de tarjetas |
| `--transition-fast` | `150ms` + curva | Transiciones breves |
| `--transition-smooth` | `200ms` + curva | Transiciones suaves |

Los snippets de botones y tarjetas reutilizan al menos tres grupos de variables (espaciado, color, radio, tipografía, sombra y transición). Las variables se consumen directamente en `components.css`.

## Registro de prompts CREDA y ciclo AVIA

Los siguientes prompts son ejemplos documentales reproducibles que describen el propósito y las restricciones de cada componente. No se presentan como transcripciones literales de conversaciones históricas.

### 1. Botón de acción

**CREDA — prompt documentado**

- **Contexto:** landing de WebImpulse con identidad visual ya definida en `styles.css`.
- **Rol:** desarrollador frontend con enfoque en CSS reutilizable y accesibilidad.
- **Especificación:** crear un botón base y una variante primaria con alineación consistente, altura mínima de 44 px y foco visible.
- **Datos:** utilizar tokens existentes de color, tipografía, espaciado, radio, sombra y transición.
- **Acción:** definir `.c-button` y `.c-button--primary` sin alterar la paleta ni introducir dependencias.
  
**AVIA:** Analizar la necesidad de una acción consistente; verificar los tokens existentes; intervenir creando las clases base y variante; ajustar el foco, el tamaño táctil y el movimiento reducido.

### 2. Tarjeta de beneficio

**CREDA — prompt documentado**

- **Contexto:** sección de beneficios con varias ventajas que deben compartir presentación.
- **Rol:** desarrollador frontend orientado a sistemas de diseño.
- **Especificación:** crear una tarjeta reutilizable con elemento interno para el título y estado hover discreto.
- **Datos:** reutilizar variables de superficie, borde, espaciado, radio, tipografía, sombra y transición.
- **Acción:** definir `.c-card--benefit` y `.c-card__title`, sin modificar el contenido ni la identidad visual.

**AVIA:** Analizar la repetición de tarjetas; verificar la escala visual y los tokens disponibles; intervenir encapsulando el estilo en clases reutilizables; ajustar el contraste, el hover y la reducción de movimiento.

### 3. Tarjeta de testimonio

**CREDA — prompt documentado**

- **Contexto:** sección de testimonios que presenta citas y atribuciones.
- **Rol:** desarrollador frontend con atención a semántica HTML.
- **Especificación:** crear una tarjeta que permita presentar una cita mediante `blockquote` y un elemento interno para el texto.
- **Datos:** emplear variables de superficie, borde, radio, espaciado, tipografía y sombra.
- **Acción:** definir `.c-card--testimonial` y `.c-card__quote`; no inventar testimonios ni atribuciones.

**AVIA:** Analizar la estructura semántica de las citas; verificar tokens y marcado; intervenir con estilos encapsulados; ajustar legibilidad, jerarquía y movimiento reducido.

### 4. Tarjeta de paso

**CREDA — prompt documentado**

- **Contexto:** sección “Cómo funciona”, organizada en etapas consecutivas.
- **Rol:** desarrollador frontend especializado en componentes de contenido.
- **Especificación:** crear una tarjeta de proceso con número decorativo, título y descripción.
- **Datos:** reutilizar tokens de color, fondo, borde, radio, espaciado, tipografía, sombra y transición.
- **Acción:** definir `.c-card--step` y `.c-card__number`; conservar la semántica y permitir ocultar el número decorativo a lectores de pantalla.

**AVIA:** Analizar la necesidad de representar etapas; verificar la jerarquía de contenido y tokens; intervenir con la clase reutilizable; ajustar consistencia, legibilidad y comportamiento sin movimiento.

### 5. Utilidad de alineación

**CREDA — prompt documentado**

- **Contexto:** textos puntuales que requieren alineación centrada sin duplicar declaraciones CSS.
- **Rol:** desarrollador frontend que mantiene una biblioteca pequeña de utilidades.
- **Especificación:** crear una clase de utilidad de responsabilidad única.
- **Datos:** respetar la convención `u-` y evitar nuevas reglas visuales innecesarias.
- **Acción:** definir `.u-text-center` con una única propiedad de alineación.

**AVIA:** Analizar el patrón repetido de alineación; verificar que no exista ya una utilidad equivalente; intervenir con una clase mínima; ajustar sus usos para aplicarla solo donde mejore la lectura.

## Validación de integración

La hoja `components.css` contiene las cuatro familias de componentes y la utilidad documentada. La landing HTML utiliza las clases de componentes en su marcado. La comprobación de existencia y uso de clases se realizó mediante inspección de los archivos del repositorio.

La medición Lighthouse no se registra como completada en esta sección: debe ejecutarse sobre la URL publicada y conservarse su informe/captura como evidencia independiente.
