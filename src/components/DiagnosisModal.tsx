import React, { useState } from 'react';
import { X, Check, ArrowRight, Clock, ShieldCheck, Sparkles, PhoneCall } from 'lucide-react';

interface DiagnosisModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DiagnosisModal: React.FC<DiagnosisModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1);
  const [businessType, setBusinessType] = useState('artesanias');
  const [hasLogo, setHasLogo] = useState('si');
  const [salesGoal, setSalesGoal] = useState('catalogo');
  const [submitted, setSubmitted] = useState(false);
  const [contactName, setContactName] = useState('Laura');
  const [contactPhone, setContactPhone] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs">
      <div 
        className="bg-white w-full max-w-lg rounded-2xl shadow-2xl border border-slate-200 overflow-hidden animate-in fade-in zoom-in-95 duration-200"
        role="dialog"
      >
        {/* Header */}
        <div className="bg-slate-900 text-white p-5 flex items-center justify-between">
          <div>
            <span className="text-[11px] font-mono uppercase tracking-wider text-blue-400">Diagnóstico Transparente WebImpulse</span>
            <h3 className="text-lg font-bold font-heading">Cotiza tu web en 3 simples pasos</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            aria-label="Cerrar modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        {!submitted ? (
          <form onSubmit={handleSubmit} className="p-6 space-y-6">
            
            {/* Step 1: Business category */}
            <div className="space-y-3">
              <label className="text-xs font-bold text-slate-900 uppercase tracking-wider block">
                1. ¿Qué tipo de negocio tienes?
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'artesanias', label: 'Artesanías / Taller', icon: '🏺' },
                  { id: 'ropa', label: 'Ropa / Joyería', icon: '✨' },
                  { id: 'servicios', label: 'Servicios locales', icon: '🌿' },
                ].map(item => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setBusinessType(item.id)}
                    className={`p-3 rounded-lg border text-left text-xs transition-all ${
                      businessType === item.id 
                        ? 'border-blue-600 bg-blue-50/50 text-blue-900 font-semibold ring-1 ring-blue-600' 
                        : 'border-slate-200 hover:border-slate-300 text-slate-700'
                    }`}
                  >
                    <span className="text-base block mb-1">{item.icon}</span>
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Goal */}
            <div className="space-y-3">
              <label className="text-xs font-bold text-slate-900 uppercase tracking-wider block">
                2. ¿Cuál es tu prioridad principal hoy?
              </label>
              <div className="space-y-2">
                {[
                  { id: 'catalogo', title: 'Catálogo ordenado con botón a WhatsApp', desc: 'Ideal para que tus clientas vean fotos, medidas y precios sin preguntarte en cada historia.' },
                  { id: 'tienda', title: 'Tienda con pagos online directos', desc: 'Para recibir transferencias y tarjetas de crédito automáticamente 24/7.' }
                ].map(item => (
                  <label
                    key={item.id}
                    onClick={() => setSalesGoal(item.id)}
                    className={`flex items-start gap-3 p-3 rounded-lg border cursor-pointer text-xs transition-all ${
                      salesGoal === item.id 
                        ? 'border-blue-600 bg-blue-50/50 text-blue-900 ring-1 ring-blue-600' 
                        : 'border-slate-200 hover:border-slate-300 text-slate-700'
                    }`}
                  >
                    <input 
                      type="radio" 
                      name="salesGoal" 
                      checked={salesGoal === item.id} 
                      onChange={() => setSalesGoal(item.id)}
                      className="mt-0.5 text-blue-600 focus:ring-blue-500"
                    />
                    <div>
                      <span className="font-bold block text-slate-900 text-xs sm:text-sm">{item.title}</span>
                      <span className="text-slate-500 text-[11px] sm:text-xs leading-relaxed block mt-0.5">{item.desc}</span>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            {/* Step 3: Fast Contact */}
            <div className="space-y-3">
              <label className="text-xs font-bold text-slate-900 uppercase tracking-wider block">
                3. Tus datos de contacto (para enviarte la propuesta cerrada)
              </label>
              <div className="grid grid-cols-2 gap-3">
                <input
                  type="text"
                  required
                  placeholder="Tu nombre (ej. Laura)"
                  value={contactName}
                  onChange={(e) => setContactName(e.target.value)}
                  className="px-3.5 py-2 text-xs sm:text-sm rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="tel"
                  required
                  placeholder="WhatsApp (ej. +57 300...)"
                  value={contactPhone}
                  onChange={(e) => setContactPhone(e.target.value)}
                  className="px-3.5 py-2 text-xs sm:text-sm rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            {/* Transparent Estimate Preview */}
            <div className="bg-emerald-50 rounded-xl p-4 border border-emerald-200/80 text-xs space-y-1.5 text-emerald-950">
              <div className="flex items-center justify-between font-bold">
                <span className="flex items-center gap-1.5 text-emerald-900">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  Garantía WebImpulse:
                </span>
                <span className="text-emerald-800 font-mono">Entrega: 10 Días Hábiles</span>
              </div>
              <p className="text-[11px] text-emerald-800 leading-snug">
                Precio fijo garantizado. Incluye dominio, hosting configurado, catálogo adaptado a móvil y capacitación de 15 minutos por videollamada.
              </p>
            </div>

            {/* Action buttons */}
            <div className="flex items-center justify-end gap-3 pt-2">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-xs font-medium text-slate-600 hover:text-slate-900"
              >
                Cancelar
              </button>
              <button
                type="submit"
                className="px-6 py-2.5 text-xs sm:text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-xs transition-colors flex items-center gap-2"
              >
                <span>Enviar y Recibir Diagnóstico</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </form>
        ) : (
          <div className="p-8 text-center space-y-5">
            <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
              <Check className="w-8 h-8" />
            </div>
            <div className="space-y-2">
              <h4 className="text-xl font-bold text-slate-900 font-heading">
                ¡Gracias {contactName}! Tu propuesta está en camino.
              </h4>
              <p className="text-sm text-slate-600 max-w-sm mx-auto leading-relaxed">
                Revisaremos tus necesidades para tu negocio de {businessType} y te contactaremos por WhatsApp con una propuesta transparente y accesible.
              </p>
            </div>

            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-xs text-left space-y-2">
              <div className="font-semibold text-slate-800">Próximo paso:</div>
              <div className="text-slate-600 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
                <span>Un asesor humano te escribirá sin compromisos ni presiones de venta.</span>
              </div>
            </div>

            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="px-6 py-2.5 text-xs font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors"
            >
              Cerrar
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
