import React, { useState } from 'react';
import { HeroSection } from './HeroSection';
import {
  ArrowRight,
  CheckCircle2
} from 'lucide-react';

interface LandingPreviewProps {
  onOpenDiagnosis: () => void;
}

export const LandingPreview: React.FC<LandingPreviewProps> = ({ onOpenDiagnosis }) => {

  // Interactive Form State
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    negocio: '',
    consentimiento: false,
  });

  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [formSubmitted, setFormSubmitted] = useState(false);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);

    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const errors: Record<string, string> = {};

    if (!formData.nombre.trim()) {
      errors.nombre = 'Por favor, ingresa tu nombre completo.';
    }

    if (
      !formData.email.trim() ||
      !formData.email.includes('@')
    ) {
      errors.email = 'Por favor, ingresa un correo electrónico válido.';
    }

    if (!formData.negocio) {
      errors.negocio =
        'Por favor, selecciona una categoría para tu negocio.';
    }

    if (!formData.consentimiento) {
      errors.consentimiento =
        'Debes autorizar el contacto para enviarte la propuesta.';
    }

    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      setFormSubmitted(true);
    }
  };

  return (
    <div className="w-full bg-[#FAFAF9]">

      {/* ================= 1. HEADER ================= */}

      <header className="border-b border-slate-200/80 bg-white/90 backdrop-blur-md sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">

          {/* Zone 1: Wordmark */}

          <a
            href="#"
            className="font-heading font-extrabold text-xl text-slate-900 tracking-tight flex items-center gap-1.5"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-blue-600"></span>

            <span>
              Web<span className="text-blue-600">Impulse</span>
            </span>
          </a>

          {/* Zone 2: Navigation Links */}

          <nav
            className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600"
            aria-label="Navegación principal"
          >
            <button
              onClick={() => scrollToSection('beneficios')}
              className="hover:text-slate-900 transition-colors cursor-pointer"
            >
              Beneficios
            </button>

            <button
              onClick={() => scrollToSection('testimonios')}
              className="hover:text-slate-900 transition-colors cursor-pointer"
            >
              Testimonios
            </button>

            <button
              onClick={() => scrollToSection('como-funciona')}
              className="hover:text-slate-900 transition-colors cursor-pointer"
            >
              ¿Cómo funciona?
            </button>

            <button
              onClick={() => scrollToSection('cotizar')}
              className="hover:text-slate-900 transition-colors cursor-pointer"
            >
              Cotizar
            </button>
          </nav>

          {/* Zone 3: Primary Action & Accessible Mobile Menu */}

          <div className="flex items-center gap-2">

            <button
              onClick={() => scrollToSection('cotizar')}
              className="hidden sm:inline-flex px-4 py-2 text-xs sm:text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-xs transition-colors whitespace-nowrap cursor-pointer"
            >
              Cotizar mi web
            </button>

            {/* Accessible Mobile Menu */}

            <details className="md:hidden relative group">

              <summary
                className="p-2 rounded-lg text-slate-700 hover:text-slate-900 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500 list-none cursor-pointer flex items-center justify-center"
                aria-label="Abrir menú"
              >
                <span className="text-xl leading-none">☰</span>
              </summary>

              <div className="absolute right-0 top-full mt-2 w-52 bg-white rounded-xl shadow-lg border border-slate-200 p-2 space-y-1 z-50 text-left">

                <button
                  onClick={() => scrollToSection('beneficios')}
                  className="w-full text-left px-3 py-2 text-xs font-medium text-slate-700 hover:bg-slate-100 rounded-md"
                >
                  Beneficios
                </button>

                <button
                  onClick={() => scrollToSection('testimonios')}
                  className="w-full text-left px-3 py-2 text-xs font-medium text-slate-700 hover:bg-slate-100 rounded-md"
                >
                  Testimonios
                </button>

                <button
                  onClick={() => scrollToSection('como-funciona')}
                  className="w-full text-left px-3 py-2 text-xs font-medium text-slate-700 hover:bg-slate-100 rounded-md"
                >
                  ¿Cómo funciona?
                </button>

                <div className="pt-2 border-t border-slate-100">

                  <button
                    onClick={() => scrollToSection('cotizar')}
                    className="w-full py-2 text-center text-xs font-semibold text-white bg-blue-600 rounded-lg"
                  >
                    Cotizar mi web
                  </button>

                </div>

              </div>

            </details>

          </div>

        </div>
      </header>


      {/* ================= CONTENIDO PRINCIPAL ================= */}

      <main>

        {/* ================= 2. HERO SECTION ================= */}

        <HeroSection
          onOpenDiagnosis={() => scrollToSection('cotizar')}
          onScrollToCase={() => scrollToSection('como-funciona')}
        />


        {/* ================= 3. BENEFICIOS ================= */}

        <section
          id="beneficios"
          className="py-16 md:py-24 border-b border-slate-200 bg-white"
        >

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

            <div className="text-center max-w-2xl mx-auto space-y-3">

              <div className="text-xs font-semibold text-blue-600 uppercase tracking-wider">
                Ventajas para tu Negocio
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading text-slate-900 tracking-tight">
                Diseñado para fortalecer tu presencia digital
              </h2>

              <p className="text-sm sm:text-base text-slate-600">
                Cinco pilares concretos pensados para que pequeños creadores y negocios locales muestren su trabajo con confianza.
              </p>

            </div>


            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

              {/* Beneficio 1 */}

              <article className="bg-[#FAFAF9] rounded-2xl p-6 sm:p-7 border border-slate-200 hover:border-slate-300 transition-all space-y-4">

                <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-xl">
                  🎨
                </div>

                <div className="space-y-2">

                  <h3 className="text-lg font-bold font-heading text-slate-900">
                    Diseño profesional
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    Páginas con una presentación cuidada, tipografía clara y estructura limpia que reflejan la dedicación de tu trabajo artesanal y generan credibilidad desde el primer vistazo.
                  </p>

                </div>

              </article>


              {/* Beneficio 2 */}

              <article className="bg-[#FAFAF9] rounded-2xl p-6 sm:p-7 border border-slate-200 hover:border-slate-300 transition-all space-y-4">

                <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold text-xl">
                  📱
                </div>

                <div className="space-y-2">

                  <h3 className="text-lg font-bold font-heading text-slate-900">
                    Adaptación a dispositivos móviles
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    Tu catálogo se adapta fluidamente a teléfonos y tablets, permitiendo que las personas que descubren tu marca en redes sociales puedan explorar tus productos con comodidad y rapidez.
                  </p>

                </div>

              </article>


              {/* Beneficio 3 */}

              <article className="bg-[#FAFAF9] rounded-2xl p-6 sm:p-7 border border-slate-200 hover:border-slate-300 transition-all space-y-4">

                <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center font-bold text-xl">
                  ⚡
                </div>

                <div className="space-y-2">

                  <h3 className="text-lg font-bold font-heading text-slate-900">
                    Facilidad de uso
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    Una navegación sencilla para que tus compradores encuentren fotos, detalles y formas de contacto de inmediato, sin procedimientos confusos ni pasos innecesarios.
                  </p>

                </div>

              </article>


              {/* Beneficio 4 */}

              <article className="bg-[#FAFAF9] rounded-2xl p-6 sm:p-7 border border-slate-200 hover:border-slate-300 transition-all space-y-4">

                <div className="w-12 h-12 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold text-xl">
                  🤝
                </div>

                <div className="space-y-2">

                  <h3 className="text-lg font-bold font-heading text-slate-900">
                    Acompañamiento durante el proceso
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    Trabajamos en equipo contigo para comprender lo que necesitas, respondiendo tus dudas con cercanía y guiándote en la selección y orden de tus contenidos.
                  </p>

                </div>

              </article>


              {/* Beneficio 5 */}

              <article className="bg-[#FAFAF9] rounded-2xl p-6 sm:p-7 border border-slate-200 hover:border-slate-300 transition-all space-y-4 md:col-span-2 lg:col-span-2">

                <div className="w-12 h-12 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center font-bold text-xl">
                  🚀
                </div>

                <div className="space-y-2">

                  <h3 className="text-lg font-bold font-heading text-slate-900">
                    Publicación de la página web
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    Nos encargamos de la vinculación técnica de tu dominio y la configuración necesaria para que tu sitio quede publicado en internet y listo para compartir con tus clientes.
                  </p>

                </div>

              </article>

            </div>

          </div>

        </section>


        {/* ================= 4. TESTIMONIOS ================= */}

        <section
          id="testimonios"
          className="py-16 md:py-24 border-b border-slate-200 bg-[#FAFAF9]"
        >

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

            <div className="text-center max-w-2xl mx-auto space-y-3">

              <div className="text-xs font-semibold text-blue-600 uppercase tracking-wider">
                Casos Demostrativos
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading text-slate-900 tracking-tight">
                Experiencias demostrativas de emprendedores
              </h2>

              <p className="text-sm sm:text-base text-slate-600">
                Ejemplos de cómo una página web organizada puede apoyar las actividades cotidianas de un negocio artesanal.
              </p>

              <div>

                <span className="inline-block text-[11px] font-medium text-slate-500 bg-white px-3 py-1 rounded-full border border-slate-200">
                  * Ejemplos demostrativos elaborados para fines del proyecto académico.
                </span>

              </div>

            </div>


            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">

              {/* Testimonio 1 */}

              <blockquote className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs flex flex-col justify-between space-y-6">

                <div className="space-y-4">

                  <div
                    className="flex items-center gap-1 text-amber-500 text-sm"
                    aria-label="Calificación ilustrativa de 5 estrellas"
                  >
                    ★★★★★
                  </div>

                  <p className="text-sm sm:text-base text-slate-700 leading-relaxed italic">
                    “Tenía dudas sobre cómo mostrar mis productos en internet sin complicarme con aspectos técnicos. Con WebImpulse logré tener un catálogo digital claro donde mis clientas pueden ver las piezas y consultar directamente.”
                  </p>

                </div>

                <footer className="pt-4 border-t border-slate-100 flex items-center gap-3">

                  <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 font-bold flex items-center justify-center text-sm font-heading">
                    AG
                  </div>

                  <div>

                    <cite className="not-italic font-bold text-sm text-slate-900 block">
                      Andrea Gómez
                    </cite>

                    <span className="text-xs text-slate-500 block">
                      Taller Textil & Tejidos Artesanales
                    </span>

                  </div>

                </footer>

              </blockquote>


              {/* Testimonio 2 */}

              <blockquote className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs flex flex-col justify-between space-y-6">

                <div className="space-y-4">

                  <div
                    className="flex items-center gap-1 text-amber-500 text-sm"
                    aria-label="Calificación ilustrativa de 5 estrellas"
                  >
                    ★★★★★
                  </div>

                  <p className="text-sm sm:text-base text-slate-700 leading-relaxed italic">
                    “Antes compartía listas de precios por mensaje en redes sociales y tomaba mucho tiempo responder cada detalle. La página web me permitió presentar las variedades de café de forma ordenada y dar una imagen más formal a mi marca.”
                  </p>

                </div>

                <footer className="pt-4 border-t border-slate-100 flex items-center gap-3">

                  <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-600 font-bold flex items-center justify-center text-sm font-heading">
                    CM
                  </div>

                  <div>

                    <cite className="not-italic font-bold text-sm text-slate-900 block">
                      Carlos Mendoza
                    </cite>

                    <span className="text-xs text-slate-500 block">
                      Tostaduría & Café de Origen
                    </span>

                  </div>

                </footer>

              </blockquote>

            </div>

          </div>

        </section>


        {/* ================= 5. ¿CÓMO FUNCIONA? ================= */}

        <section
          id="como-funciona"
          className="py-16 md:py-24 border-b border-slate-200 bg-white"
        >

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

            <div className="text-center max-w-2xl mx-auto space-y-3">

              <div className="text-xs font-semibold text-blue-600 uppercase tracking-wider">
                Proceso de Trabajo
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading text-slate-900 tracking-tight">
                ¿Cómo funciona WebImpulse?
              </h2>

              <p className="text-sm sm:text-base text-slate-600">
                Un método de trabajo organizado en 4 pasos para desarrollar tu página web con claridad de principio a fin.
              </p>

            </div>


            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

              {[
                {
                  num: '01',
                  title: 'Cuéntanos tu idea',
                  desc: 'Conversamos sobre tu emprendimiento, los productos artesanales que ofreces y la imagen que deseas proyectar.',
                  meta: 'Etapa 1 · Diagnóstico inicial',
                  color: 'text-blue-600'
                },
                {
                  num: '02',
                  title: 'Diseñamos tu página',
                  desc: 'Estructuramos el diseño visual, organizamos las secciones de tu catálogo y preparamos los elementos adaptados a celulares.',
                  meta: 'Etapa 2 · Desarrollo visual',
                  color: 'text-blue-600'
                },
                {
                  num: '03',
                  title: 'Revisamos contigo',
                  desc: 'Te presentamos una vista previa para revisar juntos la navegación, los textos y las imágenes antes del lanzamiento.',
                  meta: 'Etapa 3 · Revisión y ajustes',
                  color: 'text-blue-600'
                },
                {
                  num: '04',
                  title: 'Publicamos tu web',
                  desc: 'Conectamos tu dominio, publicamos tu página en internet y te orientamos sobre cómo compartirla con tu comunidad.',
                  meta: 'Etapa 4 · Puesta en línea',
                  color: 'text-emerald-600'
                }
              ].map(step => (

                <div
                  key={step.num}
                  className="bg-[#FAFAF9] rounded-2xl p-6 border border-slate-200 space-y-4 flex flex-col justify-between shadow-xs"
                >

                  <div className="space-y-3">

                    <span
                      className={`text-3xl font-extrabold font-heading ${step.color} block`}
                    >
                      {step.num}
                    </span>

                    <h3 className="text-lg font-bold font-heading text-slate-900">
                      {step.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {step.desc}
                    </p>

                  </div>

                  <div className="pt-3 border-t border-slate-200 text-[11px] font-mono text-slate-500">
                    {step.meta}
                  </div>

                </div>

              ))}

            </div>


            <div className="text-center pt-4">

              <button
                onClick={() => scrollToSection('cotizar')}
                className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors cursor-pointer"
              >
                <span>
                  ¿Quieres iniciar el paso 1? Solicita tu cotización
                </span>

                <ArrowRight className="w-4 h-4" />
              </button>

            </div>

          </div>

        </section>


        {/* ================= 6. FORMULARIO DE CAPTURA ================= */}

        <section
          id="cotizar"
          className="py-16 md:py-24 border-b border-slate-200 bg-[#FAFAF9]"
        >

          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">

            <div className="text-center space-y-3">

              <div className="text-xs font-semibold text-blue-600 uppercase tracking-wider">
                Comienza tu Proyecto
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading text-slate-900 tracking-tight">
                Solicita tu diagnóstico y cotización
              </h2>

              <p className="text-sm sm:text-base text-slate-600 max-w-xl mx-auto">
                Cuéntanos sobre tu emprendimiento y te responderemos con una propuesta orientada a las necesidades de tu negocio.
              </p>

            </div>


            <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-sm">

              {!formSubmitted ? (

                <form
                  id="formulario-cotizar"
                  onSubmit={handleFormSubmit}
                  noValidate
                  className="space-y-6"
                >

                  {/* Campo 1: Nombre Completo */}

                  <div className="space-y-1.5">

                    <label
                      htmlFor="nombre-completo"
                      className="block text-xs sm:text-sm font-bold text-slate-900"
                    >
                      Nombre completo <span className="text-rose-600">*</span>
                    </label>

                    <input
                      type="text"
                      id="nombre-completo"
                      name="nombre_completo"
                      required
                      value={formData.nombre}
                      onChange={(e) => {
                        setFormData({
                          ...formData,
                          nombre: e.target.value
                        });

                        if (formErrors.nombre) {
                          setFormErrors({
                            ...formErrors,
                            nombre: ''
                          });
                        }
                      }}
                      placeholder="Ej. Laura Martínez"
                      className={`w-full px-4 py-3 rounded-lg border text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none transition-all ${
                        formErrors.nombre
                          ? 'border-rose-400 ring-2 ring-rose-100'
                          : 'border-slate-200 focus:ring-2 focus:ring-blue-500'
                      }`}
                    />

                    {formErrors.nombre && (

                      <span
                        id="nombre-error"
                        className="block text-xs text-rose-600 font-medium mt-1"
                      >
                        {formErrors.nombre}
                      </span>

                    )}

                  </div>


                  {/* Campo 2: Correo Electrónico */}

                  <div className="space-y-1.5">

                    <label
                      htmlFor="correo-electronico"
                      className="block text-xs sm:text-sm font-bold text-slate-900"
                    >
                      Correo electrónico <span className="text-rose-600">*</span>
                    </label>

                    <input
                      type="email"
                      id="correo-electronico"
                      name="correo_electronico"
                      required
                      value={formData.email}
                      onChange={(e) => {
                        setFormData({
                          ...formData,
                          email: e.target.value
                        });

                        if (formErrors.email) {
                          setFormErrors({
                            ...formErrors,
                            email: ''
                          });
                        }
                      }}
                      placeholder="laura@minegocio.com"
                      className={`w-full px-4 py-3 rounded-lg border text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none transition-all ${
                        formErrors.email
                          ? 'border-rose-400 ring-2 ring-rose-100'
                          : 'border-slate-200 focus:ring-2 focus:ring-blue-500'
                      }`}
                    />

                    {formErrors.email && (

                      <span
                        id="correo-error"
                        className="block text-xs text-rose-600 font-medium mt-1"
                      >
                        {formErrors.email}
                      </span>

                    )}

                  </div>


                  {/* Campo 3: Tipo de Negocio */}

                  <div className="space-y-1.5">

                    <label
                      htmlFor="tipo-negocio"
                      className="block text-xs sm:text-sm font-bold text-slate-900"
                    >
                      Tipo de negocio o emprendimiento{' '}
                      <span className="text-rose-600">*</span>
                    </label>

                    <select
                      id="tipo-negocio"
                      name="tipo_negocio"
                      required
                      value={formData.negocio}
                      onChange={(e) => {
                        setFormData({
                          ...formData,
                          negocio: e.target.value
                        });

                        if (formErrors.negocio) {
                          setFormErrors({
                            ...formErrors,
                            negocio: ''
                          });
                        }
                      }}
                      className={`w-full px-4 py-3 rounded-lg border text-sm text-slate-900 bg-white focus:outline-none transition-all ${
                        formErrors.negocio
                          ? 'border-rose-400 ring-2 ring-rose-100'
                          : 'border-slate-200 focus:ring-2 focus:ring-blue-500'
                      }`}
                    >

                      <option value="" disabled>
                        Selecciona tu tipo de negocio...
                      </option>

                      <option value="artesanias">
                        Artesanías y productos hechos a mano
                      </option>

                      <option value="moda">
                        Moda, ropa y joyería de diseño
                      </option>

                      <option value="gastronomia">
                        Alimentos, repostería y bebidas artesanales
                      </option>

                      <option value="servicios">
                        Servicios profesionales y consultorías
                      </option>

                      <option value="bienestar">
                        Salud, belleza y cuidado personal
                      </option>

                      <option value="otro">
                        Otro tipo de negocio local
                      </option>

                    </select>

                    {formErrors.negocio && (

                      <span
                        id="negocio-error"
                        className="block text-xs text-rose-600 font-medium mt-1"
                      >
                        {formErrors.negocio}
                      </span>

                    )}

                  </div>


                  {/* Campo 4: Checkbox de Consentimiento */}

                  <div className="pt-2">

                    <div className="flex items-start gap-3">

                      <input
                        type="checkbox"
                        id="consentimiento-datos"
                        name="consentimiento_datos"
                        required
                        checked={formData.consentimiento}
                        onChange={(e) => {
                          setFormData({
                            ...formData,
                            consentimiento: e.target.checked
                          });

                          if (formErrors.consentimiento) {
                            setFormErrors({
                              ...formErrors,
                              consentimiento: ''
                            });
                          }
                        }}
                        className="mt-1 w-4 h-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
                      />

                      <label
                        htmlFor="consentimiento-datos"
                        className="text-xs text-slate-600 leading-relaxed cursor-pointer"
                      >
                        Acepto el tratamiento de mis datos de contacto para recibir una propuesta personalizada de WebImpulse.{' '}
                        <span className="text-rose-600">*</span>
                      </label>

                    </div>

                    {formErrors.consentimiento && (

                      <span
                        id="consentimiento-error"
                        className="block text-xs text-rose-600 font-medium mt-1"
                      >
                        {formErrors.consentimiento}
                      </span>

                    )}

                  </div>


                  {/* Botón de Envío */}

                  <div className="pt-4">

                    <button
                      type="submit"
                      id="boton-enviar"
                      className="w-full py-3.5 px-6 rounded-lg text-sm sm:text-base font-semibold text-white bg-blue-600 hover:bg-blue-700 shadow-sm hover:shadow transition-all focus:outline-none focus:ring-2 focus:ring-blue-500/30 cursor-pointer"
                    >
                      Solicitar diagnóstico y cotización
                    </button>

                  </div>


                  <div className="text-center pt-2">

                    <p className="text-[11px] text-slate-400">
                      🔒 Tus datos se tratan con estricta confidencialidad para fines de contacto directo.
                    </p>

                  </div>

                </form>

              ) : (

                <div className="text-center py-8 space-y-4">

                  <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 font-heading">
                    ¡Solicitud enviada con éxito, {formData.nombre}!
                  </h3>

                  <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                    Hemos recibido tu solicitud para tu negocio de {formData.negocio}. Te contactaremos a{' '}
                    <strong className="text-slate-800">
                      {formData.email}
                    </strong>{' '}
                    con una propuesta clara y orientada a tu proyecto.
                  </p>

                  <button
                    onClick={() => {
                      setFormSubmitted(false);

                      setFormData({
                        nombre: '',
                        email: '',
                        negocio: '',
                        consentimiento: false
                      });
                    }}
                    className="text-xs text-blue-600 hover:underline pt-2 font-medium cursor-pointer"
                  >
                    Enviar otra consulta
                  </button>

                </div>

              )}

            </div>

          </div>

        </section>

      </main>


      {/* ================= 7. FOOTER ================= */}

      <footer className="bg-white border-t border-slate-200 py-12">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">

            <div className="space-y-1">

              <a
                href="#"
                className="font-heading font-extrabold text-lg text-slate-900 tracking-tight flex items-center justify-center md:justify-start gap-1.5"
              >

                <span className="w-2 h-2 rounded-full bg-blue-600"></span>

                <span>
                  Web<span className="text-blue-600">Impulse</span>
                </span>

              </a>

              <p className="text-xs text-slate-500 max-w-sm">
                Desarrollo web profesional, cercano y sin complicaciones técnicas para pequeños negocios y artesanos.
              </p>

            </div>


            <nav className="flex flex-wrap items-center justify-center gap-6 text-xs text-slate-600">

              <button
                onClick={() => scrollToSection('beneficios')}
                className="hover:text-slate-900 transition-colors cursor-pointer"
              >
                Beneficios
              </button>

              <button
                onClick={() => scrollToSection('testimonios')}
                className="hover:text-slate-900 transition-colors cursor-pointer"
              >
                Testimonios
              </button>

              <button
                onClick={() => scrollToSection('como-funciona')}
                className="hover:text-slate-900 transition-colors cursor-pointer"
              >
                ¿Cómo funciona?
              </button>

              <button
                onClick={() => scrollToSection('cotizar')}
                className="hover:text-blue-600 font-medium transition-colors cursor-pointer"
              >
                Cotizar
              </button>

            </nav>


            <div className="text-xs text-slate-400">

              <p>
                © 2026 WebImpulse. Todos los derechos reservados.
              </p>

              <p className="text-[11px] text-slate-400/80 mt-0.5">
                Proyecto académico de desarrollo web.
              </p>

            </div>

          </div>

        </div>

      </footer>

    </div>
  );
};
