import React, { useState } from 'react';
import { BriefView } from './components/BriefView';
import { LandingPreview } from './components/LandingPreview';
import { DiagnosisModal } from './components/DiagnosisModal';
import { CodeExportModal } from './components/CodeExportModal';
import { FileText, Eye, Code, Sparkles, Layers, ShieldCheck } from 'lucide-react';

export default function App() {
  const [currentView, setCurrentView] = useState<'brief' | 'preview'>('brief');
  const [isDiagnosisOpen, setIsDiagnosisOpen] = useState(false);
  const [isCodeExportOpen, setIsCodeExportOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#FAFAF9] text-[#0F172A] flex flex-col font-sans selection:bg-blue-600/15 selection:text-[#0F172A]">
      
      {/* Top Application Director Banner */}
      <nav className="bg-slate-900 text-white border-b border-slate-800 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
          
          {/* Brand & Project Identity */}
          <div className="flex items-center gap-3">
            <span className="font-heading font-extrabold text-base tracking-tight flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-blue-500"></span>
              WebImpulse
            </span>
            <span className="text-slate-500 text-xs hidden sm:inline">/</span>
            <span className="text-xs text-slate-300 font-medium hidden sm:inline">
              Brief Creativo & Studio de Landing Page
            </span>
          </div>

          {/* Mode Switcher Segmented Control */}
          <div className="flex items-center gap-1 p-1 bg-slate-800 rounded-lg text-xs font-medium">
            <button
              onClick={() => setCurrentView('brief')}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md transition-all ${
                currentView === 'brief'
                  ? 'bg-blue-600 text-white font-semibold shadow-xs'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Brief Creativo</span>
            </button>

            <button
              onClick={() => setCurrentView('preview')}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md transition-all ${
                currentView === 'preview'
                  ? 'bg-blue-600 text-white font-semibold shadow-xs'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              <Eye className="w-3.5 h-3.5" />
              <span>Simulador en Vivo</span>
            </button>
          </div>

          {/* Action buttons */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsCodeExportOpen(true)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
              title="Ver código inicial HTML/Tailwind"
            >
              <Code className="w-3.5 h-3.5 text-blue-400" />
              <span className="hidden md:inline">Código HTML</span>
            </button>
          </div>

        </div>
      </nav>

      {/* Main View Area */}
      <main className="flex-1 pb-16">
        {currentView === 'brief' ? (
          <BriefView
            onSwitchToPreview={() => setCurrentView('preview')}
            onOpenCodeExport={() => setIsCodeExportOpen(true)}
          />
        ) : (
          <LandingPreview
            onOpenDiagnosis={() => setIsDiagnosisOpen(true)}
            onOpenCodeExport={() => setIsCodeExportOpen(true)}
          />
        )}
      </main>

      {/* Modals */}
      <DiagnosisModal
        isOpen={isDiagnosisOpen}
        onClose={() => setIsDiagnosisOpen(false)}
      />

      <CodeExportModal
        isOpen={isCodeExportOpen}
        onClose={() => setIsCodeExportOpen(false)}
      />
    </div>
  );
}
