import React from 'react';
import { Check, ArrowRight, Sparkles, MessageCircle } from 'lucide-react';

interface HeroSectionProps {
  onOpenDiagnosis: () => void;
  onScrollToCase: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenDiagnosis, onScrollToCase }) => {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 md:pt-14 md:pb-24 border-b border-slate-200/80 bg-[#FAFAF9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Value Proposition & Copy (55%) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Clean Unboxed Kicker */}
            <div className="flex items-center gap-2 text-xs font-semibold text-blue-700 tracking-wider uppercase">
              <span>Desarrollo Web para Pequeños Negocios</span>
              <span aria-hidden="true">·</span>
              <span className="text-slate-500 font-normal">Sin enredos técnicos</span>
            </div>

            {/* Dominant Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 font-heading tracking-tight leading-[1.15] text-balance">
              Tu talento merece una vitrina propia: <span className="text-blue-600">moderna, confiable</span> y lista en 10 días.
            </h1>

            {/* Empathic Subtitle for Laura */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
              Deja de perder ventas respondiendo precios mil veces por mensaje en Instagram. Creamos la página web profesional que organiza tus productos, genera confianza inmediata y te ayuda a cobrar sin complicaciones.
            </p>

            {/* Action Group */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              <button
                onClick={onOpenDiagnosis}
                className="px-6 py-3.5 text-sm sm:text-base font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-sm hover:shadow transition-all focus:outline-none focus:ring-2 focus:ring-blue-500/20 flex items-center justify-center gap-2"
              >
                <span>Cotizar mi web en 3 pasos</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onScrollToCase}
                className="px-5 py-3.5 text-sm sm:text-base font-medium text-slate-700 bg-white border border-slate-200 hover:bg-slate-50 rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                <span>Ver caso de Laura Martínez</span>
              </button>
            </div>

            {/* Quantitative Proof & Demystifying Objections */}
            <div className="pt-4 border-t border-slate-200/80 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-600">
              <div className="flex items-center gap-1.5 font-medium text-slate-700">
                <Check className="w-4 h-4 text-emerald-600" />
                <span>Precio cerrado, cero sorpresas</span>
              </div>
              <div className="flex items-center gap-1.5 font-medium text-slate-700">
                <Check className="w-4 h-4 text-emerald-600" />
                <span>Nosotros hacemos el 90% del trabajo</span>
              </div>
              <div className="flex items-center gap-1.5 font-medium text-slate-700">
                <Check className="w-4 h-4 text-emerald-600" />
                <span>Soporte humano por WhatsApp</span>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Anchor & Product Showcase (45%) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Visual: Laptop Mockup of Laura's Pottery Store */}
              <div className="relative bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden transform hover:-translate-y-1 transition-transform duration-300">
                <div className="bg-slate-100 px-4 py-2.5 border-b border-slate-200 flex items-center gap-2">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-slate-300"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-slate-300"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-slate-300"></span>
                  </div>
                  <div className="mx-auto text-[11px] font-mono text-slate-500 bg-white px-3 py-0.5 rounded border border-slate-200">
                    tallerbarroyforma.com
                  </div>
                </div>

                <div className="relative aspect-[4/3] bg-slate-100 overflow-hidden">
                  <img
                    src="/src/assets/images/webimpulse_showcase_mockup_1790783393521.jpg"
                    alt="Catálogo web moderno de artesanías de Laura Martínez"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  {/* Subtle caption bar */}
                  <div className="absolute bottom-0 inset-x-0 bg-slate-900/80 backdrop-blur-xs text-white p-3 text-xs flex items-center justify-between">
                    <div>
                      <span className="font-semibold block">Taller Barro & Forma</span>
                      <span className="text-[11px] text-slate-300">Cerámica artesanal hecha a mano</span>
                    </div>
                    <span className="text-emerald-400 font-mono text-[11px] font-semibold bg-emerald-950/60 px-2 py-0.5 rounded">
                      En línea
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating Social Proof Card: Laura's Testimonial Thumbnail */}
              <div className="mt-4 bg-white/95 backdrop-blur-sm rounded-xl border border-slate-200 p-3.5 shadow-md flex items-center gap-3">
                <img
                  src="/src/assets/images/laura_artisan_avatar_1790783405947.jpg"
                  alt="Laura Martínez, emprendedora"
                  className="w-12 h-12 rounded-full object-cover border border-slate-200 shrink-0"
                  referrerPolicy="no-referrer"
                />
                <div className="space-y-0.5 text-xs">
                  <div className="flex items-center gap-1.5 font-bold text-slate-900">
                    <span>Laura Martínez</span>
                    <span className="text-slate-400">·</span>
                    <span className="text-slate-500 font-normal">32 años, Artesana</span>
                  </div>
                  <p className="text-slate-600 line-clamp-2">
                    “Tenía terror de que fuera caro o muy difícil. En 10 días tenía mi catálogo listo y mis clientas compran solas.”
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
