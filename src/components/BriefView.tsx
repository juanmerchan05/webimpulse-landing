import React, { useState } from 'react';
import { 
  COLOR_PALETTE, 
  TYPOGRAPHY_SYSTEM, 
  TONE_PRINCIPLES, 
  OBJECTION_SOLUTIONS, 
  RESPONSIVE_GUIDELINES 
} from '../data/briefData';
import { 
  Palette, 
  Type, 
  Volume2, 
  Eye, 
  ShieldCheck, 
  Smartphone, 
  Sparkles, 
  Copy, 
  Check, 
  ExternalLink,
  Layers,
  ArrowRight,
  Code
} from 'lucide-react';

interface BriefViewProps {
  onSwitchToPreview: () => void;
  onOpenCodeExport: () => void;
}

export const BriefView: React.FC<BriefViewProps> = ({ onSwitchToPreview, onOpenCodeExport }) => {
  const [copiedHex, setCopiedHex] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'all' | 'colors' | 'typography' | 'tone' | 'style' | 'trust' | 'hero' | 'responsive'>('all');
  const [customTypoPreview, setCustomTypoPreview] = useState('Tu talento artesanal merece una vitrina web profesional.');

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedHex(text);
    setTimeout(() => setCopiedHex(null), 2000);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 space-y-16">
      {/* Brief Header / Executive Summary */}
      <section className="border-b border-slate-200 pb-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-4 max-w-3xl">
            <div className="flex items-center gap-2 text-xs font-medium text-slate-500 tracking-wider uppercase">
              <span>Documento de Dirección Creativa</span>
              <span>·</span>
              <span>WebImpulse</span>
              <span>·</span>
              <span className="text-emerald-700 font-semibold">Listo para Producción</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900 leading-tight">
              Brief Creativo & Sistema de Diseño para WebImpulse
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Estrategia visual, verbal y arquitectónica para conectar con <strong className="text-slate-900 font-semibold">Laura Martínez</strong> y pequeños emprendedores que necesitan dar el salto de las redes sociales a una presencia web propia, derribando el mito de que construir una página web es <em className="not-italic text-slate-900 font-medium">«costoso y complicado»</em>.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <button
              onClick={onSwitchToPreview}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-blue-500/20"
            >
              <Eye className="w-4 h-4" />
              Ver Landing en Vivo
            </button>
            <button
              onClick={onOpenCodeExport}
              className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-slate-700 bg-white border border-slate-200 hover:bg-slate-50 rounded-lg transition-colors shadow-xs"
            >
              <Code className="w-4 h-4 text-slate-500" />
              Snippet HTML/Tailwind
            </button>
          </div>
        </div>

        {/* Quick Filter Navigation */}
        <div className="mt-8 flex items-center gap-1.5 overflow-x-auto pb-2 border-t border-slate-100 pt-4 text-xs font-medium text-slate-600">
          <span className="text-slate-400 mr-2 uppercase tracking-wider text-[11px]">Secciones:</span>
          {[
            { id: 'all', label: 'Ver Todo el Brief' },
            { id: 'colors', label: '1. Paleta de Colores' },
            { id: 'typography', label: '2. Tipografía' },
            { id: 'tone', label: '3. Tono y Voz' },
            { id: 'style', label: '4. Estilo Visual' },
            { id: 'trust', label: '5. Confianza & Objeciones' },
            { id: 'hero', label: '6. Propuesta Hero' },
            { id: 'responsive', label: '7. Responsive Multi-dispositivo' },
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-3 py-1.5 rounded-md whitespace-nowrap transition-colors ${
                activeTab === tab.id
                  ? 'bg-slate-900 text-white font-medium'
                  : 'hover:bg-slate-100 text-slate-700'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </section>

      {/* SECTION 1: PALETA DE COLORES */}
      {(activeTab === 'all' || activeTab === 'colors') && (
        <section id="colors" className="space-y-6 scroll-mt-8">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-sm">
              01
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
                1. Paleta de Colores Profesional y Moderna (Regla 60-30-10)
              </h2>
              <p className="text-sm text-slate-600">
                Diseñada con disciplina cromática para proyectar serenidad, orden, cercanía artesanal y alta conversión.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {COLOR_PALETTE.map((color) => (
              <div 
                key={color.hex}
                className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-xs hover:border-slate-300 transition-all flex flex-col justify-between"
              >
                <div>
                  <div 
                    className="h-28 w-full relative flex items-end p-4 transition-transform"
                    style={{ backgroundColor: color.hex }}
                  >
                    <button
                      onClick={() => handleCopy(color.hex)}
                      className="ml-auto inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-black/40 hover:bg-black/60 backdrop-blur-xs text-white text-xs font-mono font-medium transition-colors"
                      title="Copiar código HEX"
                    >
                      {copiedHex === color.hex ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-300" />
                          <span>¡Copiado!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5 opacity-80" />
                          <span>{color.hex}</span>
                        </>
                      )}
                    </button>
                  </div>

                  <div className="p-5 space-y-3">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <h3 className="font-semibold text-slate-900 text-base">{color.name}</h3>
                        <p className="text-xs text-blue-600 font-medium tracking-wide mt-0.5">{color.role} · {color.percentage}</p>
                      </div>
                    </div>

                    <p className="text-sm text-slate-600 leading-snug">
                      {color.description}
                    </p>

                    <div className="pt-2 border-t border-slate-100">
                      <p className="text-xs text-slate-500 italic">
                        <strong className="text-slate-700 not-italic font-medium">Justificación psicológica:</strong> {color.psychology}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-50 px-5 py-2.5 border-t border-slate-100 text-[11px] text-slate-500 font-mono">
                  Contraste: {color.wcagContrast}
                </div>
              </div>
            ))}
          </div>

          <div className="bg-slate-50 rounded-xl p-5 border border-slate-200/80 text-sm text-slate-700 space-y-2">
            <h4 className="font-semibold text-slate-900 text-sm flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-blue-600" />
              ¿Por qué esta paleta enamora a Laura Martínez?
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Laura pasa el día en feeds de Instagram llenos de colores saturados, textos sobrecargados e historias ruidosas. Al entrar en WebImpulse, el fondo <strong>Blanco Lino (#FAFAF9)</strong> le da calma y sensación de control. El <strong>Azul Pizarra Nocturno (#0F172A)</strong> demuestra que detrás hay un equipo técnico competente, el <strong>Azul Cobalto (#2563EB)</strong> le marca el camino sin rodeos y el toque de <strong>Verde Salvia (#059669)</strong> le recuerda la autenticidad y el cuidado con el que ella misma crea sus artesanías.
            </p>
          </div>
        </section>
      )}

      {/* SECTION 2: TIPOGRAFÍA */}
      {(activeTab === 'all' || activeTab === 'typography') && (
        <section id="typography" className="space-y-6 scroll-mt-8">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-sm">
              02
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
                2. Sistema Tipográfico (Máximo 2 Familias)
              </h2>
              <p className="text-sm text-slate-600">
                Combinación deliberada para evitar la estética genérica de "plantilla barata" y maximizar la legibilidad en pantallas móviles.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {TYPOGRAPHY_SYSTEM.map((typo) => (
              <div key={typo.family} className="bg-white rounded-xl border border-slate-200 p-6 shadow-xs space-y-5">
                <div className="flex items-start justify-between">
                  <div>
                    <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider">{typo.category}</span>
                    <h3 className="text-2xl font-bold text-slate-900 mt-1">{typo.family}</h3>
                  </div>
                  <a 
                    href={typo.googleFont} 
                    target="_blank" 
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-slate-500 hover:text-slate-900 transition-colors"
                  >
                    <span>Google Fonts</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>

                <div className="space-y-2 bg-slate-50 p-4 rounded-lg border border-slate-100">
                  <div className="flex items-center justify-between text-xs text-slate-500 font-mono">
                    <span>Pesos recomendados:</span>
                    <span className="font-semibold text-slate-800">{typo.weights}</span>
                  </div>
                  <div className="text-xs font-mono text-slate-600 bg-white px-2.5 py-1.5 rounded border border-slate-200/60 select-all">
                    {typo.cssRule}
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="text-xs font-semibold text-slate-900 uppercase tracking-wider">Aplicación en la landing:</h4>
                  <p className="text-sm text-slate-600 leading-relaxed">{typo.idealFor}</p>
                </div>

                <div className="space-y-2 pt-2 border-t border-slate-100">
                  <h4 className="text-xs font-semibold text-slate-900 uppercase tracking-wider">Por qué es la elección perfecta:</h4>
                  <p className="text-sm text-slate-600 leading-relaxed">{typo.whyChosen}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Interactive Specimen Tester */}
          <div className="bg-white rounded-xl border border-slate-200 p-6 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <label htmlFor="preview-input" className="text-sm font-semibold text-slate-900">
                Probador de especímenes tipográficos en tiempo real:
              </label>
              <input
                id="preview-input"
                type="text"
                value={customTypoPreview}
                onChange={(e) => setCustomTypoPreview(e.target.value)}
                className="text-xs px-3 py-1.5 rounded border border-slate-200 w-full sm:w-80 focus:outline-none focus:ring-1 focus:ring-blue-500"
                placeholder="Escribe para probar..."
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-slate-100">
              <div className="space-y-2">
                <span className="text-xs text-slate-400 font-mono">Plus Jakarta Sans (Display Bold 700 - 28px)</span>
                <p className="text-2xl font-bold text-slate-900 font-heading leading-tight">
                  {customTypoPreview}
                </p>
              </div>
              <div className="space-y-2">
                <span className="text-xs text-slate-400 font-mono">DM Sans (Body Regular 400 - 16px)</span>
                <p className="text-base text-slate-600 leading-relaxed">
                  {customTypoPreview} Presentamos cada detalle con nitidez, sin saturar la pantalla ni cansar la vista en compras desde el teléfono móvil.
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* SECTION 3: TONO DE COMUNICACIÓN */}
      {(activeTab === 'all' || activeTab === 'tone') && (
        <section id="tone" className="space-y-6 scroll-mt-8">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-sm">
              03
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
                3. Tono y Estilo de Comunicación para WebImpulse
              </h2>
              <p className="text-sm text-slate-600">
                La voz de WebImpulse es la de un colega experto que te escucha con paciencia y se hace cargo del trabajo pesado.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {TONE_PRINCIPLES.map((principle) => (
              <div key={principle.trait} className="bg-white rounded-xl border border-slate-200 p-6 shadow-xs space-y-4">
                <div className="flex items-center gap-2">
                  <Volume2 className="w-5 h-5 text-blue-600 shrink-0" />
                  <h3 className="font-bold text-slate-900 text-lg">{principle.trait}</h3>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {principle.description}
                </p>

                <div className="space-y-2 pt-2">
                  <div className="bg-emerald-50/70 border border-emerald-100 rounded-lg p-3 text-xs sm:text-sm text-emerald-950">
                    <span className="font-semibold text-emerald-800 flex items-center gap-1.5 mb-1">
                      <Check className="w-4 h-4 text-emerald-600" />
                      Así hablamos (SÍ):
                    </span>
                    {principle.doExample}
                  </div>

                  <div className="bg-rose-50/70 border border-rose-100 rounded-lg p-3 text-xs sm:text-sm text-rose-950">
                    <span className="font-semibold text-rose-800 flex items-center gap-1.5 mb-1">
                      <span className="text-rose-600 font-bold">✕</span>
                      Así NO hablamos (EVITAR):
                    </span>
                    {principle.dontExample}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* SECTION 4: ESTILO VISUAL RECOMENDADO */}
      {(activeTab === 'all' || activeTab === 'style') && (
        <section id="style" className="space-y-6 scroll-mt-8">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-sm">
              04
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
                4. Estilo Visual Recomendado: «Warm Modernism» (Minimalismo Cálido)
              </h2>
              <p className="text-sm text-slate-600">
                Alejándose de las plantillas genéricas de SaaS (sin morados chillones ni robots flotantes).
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl border border-slate-200 p-6 space-y-3">
              <div className="w-10 h-10 rounded-lg bg-amber-50 text-amber-700 flex items-center justify-center font-semibold">
                01
              </div>
              <h3 className="font-bold text-slate-900 text-base">Fotografía Documental y Real</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Mostrar manos trabajando, arcilla, talleres con luz natural y rostros de personas reales como Laura Martínez. Prohibidas las fotos de stock de oficinistas sonriendo a una laptop en rascacielos.
              </p>
            </div>

            <div className="bg-white rounded-xl border border-slate-200 p-6 space-y-3">
              <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center font-semibold">
                02
              </div>
              <h3 className="font-bold text-slate-900 text-base">Disciplina de Cero Píldoras Inútiles</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Sin amontonar etiquetas y cápsulas innecesarias sobre cada elemento. Usamos tipografía limpia, interlineados generosos y divisores con líneas milimétricas (1px hairline) para organizar la vista.
              </p>
            </div>

            <div className="bg-white rounded-xl border border-slate-200 p-6 space-y-3">
              <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center font-semibold">
                03
              </div>
              <h3 className="font-bold text-slate-900 text-base">Un Solo Nivel de Elevación</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Sin tarjetas dentro de tarjetas ni sombras pesadas. Las superficies flotan con sombras suaves microscópicas o bordes finos de 1px (#E2E8F0), generando una experiencia limpia y ágil.
              </p>
            </div>
          </div>
        </section>
      )}

      {/* SECTION 5: RECOMENDACIONES DE CONFIANZA & SIMPLICIDAD */}
      {(activeTab === 'all' || activeTab === 'trust') && (
        <section id="trust" className="space-y-6 scroll-mt-8">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-sm">
              05
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
                5. Cómo Transmitir Profesionalismo, Confianza, Cercanía y Simplicidad
              </h2>
              <p className="text-sm text-slate-600">
                Estrategia directa para neutralizar la objeción principal de Laura: <em>«Crear una web es costoso y complicado»</em>.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            {OBJECTION_SOLUTIONS.map((item, index) => (
              <div key={index} className="bg-white rounded-xl border border-slate-200 p-6 shadow-xs space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-3">
                  <h3 className="font-bold text-slate-900 text-base text-rose-700 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-rose-500"></span>
                    Objeción de Laura: {item.objection}
                  </h3>
                  <span className="text-xs font-mono text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                    Temor de fondo: {item.rootFear}
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div className="bg-slate-50 p-4 rounded-lg border border-slate-100">
                    <span className="text-xs font-semibold text-slate-700 uppercase tracking-wider block mb-1">
                      Solución desde el Diseño Visual:
                    </span>
                    <p className="text-slate-600 leading-relaxed">{item.designStrategy}</p>
                  </div>
                  <div className="bg-blue-50/50 p-4 rounded-lg border border-blue-100">
                    <span className="text-xs font-semibold text-blue-800 uppercase tracking-wider block mb-1">
                      Solución en el Copywriting:
                    </span>
                    <p className="text-slate-800 leading-relaxed font-medium">“{item.copySolution}”</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* 4 Pillars Summary */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
            {[
              { title: 'Profesionalismo', note: 'Demostrado con portafolio en vivo y catálogo real de artesanos.' },
              { title: 'Confianza', note: 'Precios fijos publicados, plazos de 10 días y testimonios con foto real.' },
              { title: 'Cercanía', note: 'Botón de contacto directo por WhatsApp con personas, no chatbots.' },
              { title: 'Simplicidad', note: 'Nosotros nos encargamos del código; tú solo apruebas el diseño.' }
            ].map((pillar) => (
              <div key={pillar.title} className="bg-white p-4 rounded-lg border border-slate-200 text-center space-y-1">
                <span className="text-xs font-bold text-slate-900 block">{pillar.title}</span>
                <span className="text-xs text-slate-500 leading-tight block">{pillar.note}</span>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* SECTION 6: PROPUESTA VISUAL HERO */}
      {(activeTab === 'all' || activeTab === 'hero') && (
        <section id="hero" className="space-y-6 scroll-mt-8">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-sm">
              06
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
                6. Propuesta Visual y Estructural de la Sección Hero
              </h2>
              <p className="text-sm text-slate-600">
                La primera impresión que convierte la duda en alivio en menos de 5 segundos.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-slate-200 p-6 md:p-8 space-y-8">
            {/* Visual Diagram Breakdown */}
            <div className="border border-dashed border-slate-300 rounded-xl p-6 bg-slate-50/50 space-y-6">
              <div className="flex items-center justify-between text-xs text-slate-500 font-mono border-b border-slate-200 pb-3">
                <span>Diagrama de Composición: Sección Hero (1440px Desktop)</span>
                <span>Split Layout 55% Copy + 45% Vitrina</span>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Left Side: Copywriting */}
                <div className="lg:col-span-7 space-y-5">
                  <div className="inline-flex items-center gap-2 text-xs font-semibold text-blue-700 bg-blue-50 px-3 py-1 rounded-md">
                    <span>Kicker Editorial</span>
                    <span>·</span>
                    <span>Desarrollo web para pequeños talleres y creadores</span>
                  </div>

                  <h3 className="text-3xl sm:text-4xl font-bold text-slate-900 font-heading tracking-tight leading-tight">
                    Tu talento merece una vitrina digital propia: profesional, sin enredos y lista en 10 días.
                  </h3>

                  <p className="text-base text-slate-600 leading-relaxed max-w-xl">
                    Dejamos de depender solo de los mensajes desordenados de Instagram. Diseñamos tu página web moderna y fácil de gestionar para que tus clientes confíen, elijan y compren con tranquilidad.
                  </p>

                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
                    <button 
                      onClick={onSwitchToPreview}
                      className="px-6 py-3 text-sm font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors shadow-xs text-center"
                    >
                      Cotizar mi web en 3 pasos
                    </button>
                    <button 
                      onClick={onSwitchToPreview}
                      className="px-5 py-3 text-sm font-medium text-slate-700 bg-white border border-slate-200 hover:bg-slate-50 rounded-lg transition-colors text-center"
                    >
                      Ver caso de Laura Martínez
                    </button>
                  </div>

                  <div className="flex items-center gap-4 pt-3 text-xs text-slate-500 border-t border-slate-200">
                    <span className="flex items-center gap-1.5">
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      Precio fijo sin sorpresas
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      100% autogestionable
                    </span>
                  </div>
                </div>

                {/* Right Side: Visual Showcase */}
                <div className="lg:col-span-5 relative">
                  <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200/80 bg-slate-900">
                    <img 
                      src="/src/assets/images/webimpulse_showcase_mockup_1790783393521.jpg" 
                      alt="Vitrina Web de Laura Martínez" 
                      className="w-full h-64 object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <div className="p-4 bg-white space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-slate-900">Caso: Taller Barro & Forma</span>
                        <span className="text-[11px] font-mono text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded font-semibold">+210% Consultas</span>
                      </div>
                      <p className="text-xs text-slate-500">
                        Página web catálogo para productos artesanales de cerámica creada con WebImpulse.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 text-xs sm:text-sm text-slate-600">
              <div className="space-y-1">
                <strong className="text-slate-900 block font-semibold">1. Titular Enfocado al Dolor</strong>
                <p>No habla de tecnología abstracta, sino de darle dignidad y orden al trabajo artesanal de Laura.</p>
              </div>
              <div className="space-y-1">
                <strong className="text-slate-900 block font-semibold">2. Prueba Visual Tangible</strong>
                <p>Una muestra fotográfica real de cómo luce la tienda de una emprendedora similar, no ilustraciones ficticias.</p>
              </div>
              <div className="space-y-1">
                <strong className="text-slate-900 block font-semibold">3. CTA de Cero Riesgo</strong>
                <p>«Cotizar en 3 pasos» transmite rapidez, estructura y claridad, invitándola a interactuar sin compromiso.</p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* SECTION 7: RECOMENDACIONES RESPONSIVE */}
      {(activeTab === 'all' || activeTab === 'responsive') && (
        <section id="responsive" className="space-y-6 scroll-mt-8">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-sm">
              07
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
                7. Recomendaciones de Diseño Responsive (Móvil, Tablet, Computador)
              </h2>
              <p className="text-sm text-slate-600">
                Pautas técnicas para que la experiencia sea igual de fluida en el smartphone de Laura que en la oficina de un cliente.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {RESPONSIVE_GUIDELINES.map((item) => (
              <div key={item.device} className="bg-white rounded-xl border border-slate-200 p-6 shadow-xs flex flex-col justify-between space-y-4">
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                    <h3 className="font-bold text-slate-900 text-base">{item.device}</h3>
                    <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2.5 py-1 rounded">
                      {item.priority}
                    </span>
                  </div>

                  <ul className="space-y-2.5 text-xs sm:text-sm text-slate-600">
                    {item.specs.map((spec, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-blue-500 font-bold shrink-0 mt-0.5">·</span>
                        <span>{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-3 border-t border-slate-100 text-xs text-slate-500 italic">
                  Garantiza cero frustración y máxima tasa de conversión.
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Bottom CTA to View Live Preview */}
      <div className="bg-slate-900 rounded-2xl p-8 sm:p-10 text-white flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2 text-center md:text-left">
          <h3 className="text-2xl sm:text-3xl font-bold font-heading">
            ¿Listo para ver cómo cobra vida WebImpulse?
          </h3>
          <p className="text-slate-300 text-sm max-w-xl">
            Explora la maqueta interactiva funcional con simulación responsive para Móvil, Tablet y Desktop, junto al caso real de Laura Martínez.
          </p>
        </div>
        <button
          onClick={onSwitchToPreview}
          className="px-6 py-3.5 text-sm font-semibold text-slate-900 bg-white hover:bg-slate-100 rounded-xl transition-colors shadow-lg shrink-0 flex items-center gap-2"
        >
          <span>Abrir Simulador Interactivo</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
