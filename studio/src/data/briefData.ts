import { ColorToken, TypeToken, TonePrinciple, ObjectionResponse } from '../types/brief';

export const COLOR_PALETTE: ColorToken[] = [
  {
    name: 'Blanco Lino Cálido (Warm Canvas)',
    role: 'Lienzo Neutro Dominante',
    percentage: '60%',
    hex: '#FAFAF9',
    tailwindClass: 'bg-[#FAFAF9]',
    description: 'Fondo general de la landing page. Da respiro, limpieza y luminosidad.',
    psychology: 'Genera orden mental inmediato y contrarresta el agobio visual de los feeds saturados de redes sociales. Transmite pureza y sencillez.',
    wcagContrast: 'AAA sobre texto #0F172A (ratio 16.4:1)'
  },
  {
    name: 'Azul Pizarra Nocturno (Deep Slate)',
    role: 'Estructural y Tipográfico',
    percentage: '30%',
    hex: '#0F172A',
    tailwindClass: 'bg-[#0F172A]',
    description: 'Color para titulares principales, textos de alto contraste, tarjetas de autoridad y pie de página.',
    psychology: 'Aporta seriedad, solidez técnica y estabilidad sin caer en el negro puro severo ni en el azul corporativo bancario frío.',
    wcagContrast: 'AAA sobre fondos claros (ratio 16.4:1)'
  },
  {
    name: 'Azul Cobalto Impulso (Digital Pulse)',
    role: 'Acento Primario de Conversión',
    percentage: '7%',
    hex: '#2563EB',
    tailwindClass: 'bg-[#2563EB]',
    description: 'Reservado estrictamente para botones de llamada a la acción (CTAs primarios), enlaces clave e interacciones.',
    psychology: 'Evoca dinamismo digital, agilidad y optimismo emprendedor. Guía la mirada del usuario de forma inequívoca hacia la acción.',
    wcagContrast: 'AA sobre blanco (#FFFFFF) para botones (ratio 4.6:1)'
  },
  {
    name: 'Verde Salvia Artesanal (Craft Sage / Mint)',
    role: 'Acento de Confianza y Calma',
    percentage: '3%',
    hex: '#059669',
    tailwindClass: 'bg-[#059669]',
    description: 'Detalles de validación positiva, garantías ("Entrega en 10 días", "Sin sorpresas de cobro") y testimonios.',
    psychology: 'Conecta con lo orgánico y artesanal, aliviando la ansiedad de compra y ratificando que el proyecto está en manos fiables.',
    wcagContrast: 'AA sobre fondos claros (ratio 4.8:1)'
  },
  {
    name: 'Gris Bruma Sutil (Hairline Border)',
    role: 'Separador y Superficie',
    percentage: 'Soporte',
    hex: '#E2E8F0',
    tailwindClass: 'bg-[#E2E8F0]',
    description: 'Bordes ultradelgados (1px hairline) y fondos de tarjetas de superficie secundaria (#FFFFFF / #F1F5F9).',
    psychology: 'Estructura el contenido sin añadir ruido visual, manteniendo la promesa de ligereza y orden.',
    wcagContrast: 'Adecuado para delimitación visual no textual'
  }
];

export const TYPOGRAPHY_SYSTEM: TypeToken[] = [
  {
    family: 'Plus Jakarta Sans',
    category: 'Display / Titulares',
    weights: 'SemiBold (600), Bold (700), ExtraBold (800)',
    googleFont: 'https://fonts.google.com/specimen/Plus+Jakarta+Sans',
    cssRule: "font-family: 'Plus Jakarta Sans', sans-serif;",
    idealFor: 'Logotipo WebImpulse, titulares H1, H2, H3, cifras de impacto y botones de acción principal.',
    whyChosen: 'Es una tipografía geométrica contemporánea con terminaciones abiertas y orgánicas. Proyecta modernidad tecnológica, pero sus proporciones amplias la hacen cercana y amigable, alejándose de la frialdad corporativa.'
  },
  {
    family: 'DM Sans',
    category: 'Cuerpo / Lectura',
    weights: 'Regular (400), Medium (500)',
    googleFont: 'https://fonts.google.com/specimen/DM+Sans',
    cssRule: "font-family: 'DM Sans', sans-serif;",
    idealFor: 'Párrafos explicativos, testimonios, listas de beneficios, microcopy de formularios y etiquetas de precios.',
    whyChosen: 'Diseñada específicamente para pantallas digitales. Su altura de x generosa garantiza una legibilidad impecable tanto en pantallas móviles como en monitores grandes, con un ritmo de lectura sereno y descansado.'
  }
];

export const TONE_PRINCIPLES: TonePrinciple[] = [
  {
    trait: 'Empático y Cercano',
    description: 'Hablamos de tú a tú, entendiendo el esfuerzo diario de quien fabrica y vende con sus propias manos.',
    doExample: '"Sabemos el tiempo y dedicación que pones en cada pieza. Tu página web debe reflejar ese mismo cariño."',
    dontExample: '"Optimice su pipeline de conversión multicanal con soluciones B2B end-to-end."'
  },
  {
    trait: 'Pedagógico y Claro (Cero Jerga)',
    description: 'Eliminamos la jerga de programadores (DNS, frameworks, back-end). Explicamos todo en términos de beneficios reales para su negocio.',
    doExample: '"Tu catálogo estará ordenado las 24 horas y tus clientes podrán pedirte por WhatsApp o pagar con un clic."',
    dontExample: '"Desplegamos microservicios serverless con arquitectura headless desacoplada."'
  },
  {
    trait: 'Transparente y Desmitificador',
    description: 'Afrontamos el tabú del costo y el tiempo desde el primer segundo con paquetes cerrados y plazos firmes.',
    doExample: '"Precio fijo desde el día uno, sin letras pequeñas ni suscripciones sorpresas. En 10 días hábiles está al aire."',
    dontExample: '"Contáctenos para presupuestar una solución a medida sujeta a requerimientos escalables."'
  },
  {
    trait: 'Resolutivo y Acompañante',
    description: 'WebImpulse no es solo una herramienta: es el aliado que se encarga del trabajo técnico para que el emprendedor cree.',
    doExample: '"Tú solo nos envías las fotos de tus productos; nosotros redactamos, organizamos y dejamos tu web lista."',
    dontExample: '"Utilice nuestro constructor drag-and-drop autodidacta de 45 módulos."'
  }
];

export const OBJECTION_SOLUTIONS: ObjectionResponse[] = [
  {
    objection: '"Tener una página web debe ser carísimo para mi pequeño negocio"',
    rootFear: 'Miedo al gasto desmedido y a deudas imprevistas.',
    designStrategy: 'Tarjetas de inversión transparente con etiqueta "Pago Único o Cuotas Claras", desglose de lo que incluye y comparativa de retorno: "¿Cuánto vale perder una venta por responder tarde en Instagram?".',
    copySolution: '"Planes pensados para pequeños talleres y negocios. Desde el primer mes tu web se paga con 2 o 3 pedidos organizados."'
  },
  {
    objection: '"Es muy complicado, yo no sé de tecnología ni de programación"',
    rootFear: 'Miedo a sentirse incompetente o a depender eternamente de técnicos caros.',
    designStrategy: 'Diagrama visual de "El Proceso WebImpulse en 3 Pasos" donde el esfuerzo de Laura es del 10% (enviarnos sus fotos) y WebImpulse hace el 90% restante. Incluye video demostrativo de 1 minuto de cómo cambiar un precio desde el celular.',
    copySolution: '"Cero códigos, cero complicaciones. Te entregamos tu web lista y te enseñamos en 15 minutos cómo actualizar tus fotos desde tu celular."'
  },
  {
    objection: '"Ya vendo por Instagram y WhatsApp, ¿para qué necesito una web?"',
    rootFear: 'No ver el valor diferencial frente a las redes gratuitas.',
    designStrategy: 'Tabla comparativa visual: "Instagram vs Tu Web Propia". Instagram: mensajes perdidos en el DM, responder precio 50 veces al día, riesgo de cierre de cuenta. Tu Web: catálogo 24/7, cobros automáticos, profesionalismo que permite cobrar lo justo.',
    copySolution: '"Las redes sociales son para que te conozcan; tu página web es para que te compren con total seguridad."'
  }
];

export const RESPONSIVE_GUIDELINES = [
  {
    device: 'Móvil (375px - 430px)',
    priority: '90% del tráfico de Laura',
    specs: [
      'Barra superior simplificada: solo isotipo + botón WhatsApp flotante o CTA compacto.',
      'Sticky Header o Bottom CTA limitado a menos del 15% del alto de la pantalla (evitar ahogar el viewport).',
      'Tamaño mínimo de área táctil (touch target) de 44px x 44px para botones e hipervínculos.',
      'Tipografía base de 16px con line-height de 1.5 para evitar zoom automático en iOS.',
      'Estructura de una sola columna con espaciados verticales generosos (py-12).',
      'Hero enfocado: titular legible en 3 líneas, seguido de botón de acción y vista previa rápida.'
    ]
  },
  {
    device: 'Tablet (768px - 1024px)',
    priority: 'Revisión en el taller / descanso',
    specs: [
      'Navegación con 4 enlaces visibles de texto limpio.',
      'Rejilla de 2 columnas equilibrada: propuesta de valor a la izquierda y vitrina visual a la derecha.',
      'Espacio de lectura optimizado a máximo 65 caracteres por línea para no cansar la vista.',
      'Tarjetas de servicios y testimonios con altura coordinada y bordes sutiles.'
    ]
  },
  {
    device: 'Computador / Desktop (1280px - 1440px)',
    priority: 'Decisión formal y cotización',
    specs: [
      'Contenedor central con ancho máximo de 1200px centrado en viewport de 1440px.',
      'Hero asimétrico de alto impacto: 55% copy persuasivo + 45% composición visual con laptop mockup y foto real de Laura.',
      'Puntos de prueba social (reseñas con foto, cifras verificadas) adyacentes a los botones de acción.',
      'Microinteracciones suaves al pasar el cursor (hover states de 150ms en botones y tarjetas).'
    ]
  }
];
