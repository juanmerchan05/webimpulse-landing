import React, { useState } from 'react';
import { LandingPreview } from './components/LandingPreview';
import { DiagnosisModal } from './components/DiagnosisModal';
import { CodeExportModal } from './components/CodeExportModal';

export default function App() {
  const [isDiagnosisOpen, setIsDiagnosisOpen] = useState(false);
  const [isCodeExportOpen, setIsCodeExportOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#FAFAF9] text-[#0F172A] font-sans antialiased selection:bg-blue-600/15 selection:text-[#0F172A]">
      
      <main>
        <LandingPreview
          onOpenDiagnosis={() => setIsDiagnosisOpen(true)}
          onOpenCodeExport={() => setIsCodeExportOpen(true)}
        />
      </main>

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
