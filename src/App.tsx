import React from 'react';
import { LandingPreview } from './components/LandingPreview';

export default function App() {
  return (
    <div className="min-h-screen bg-[#FAFAF9] text-[#0F172A] font-sans antialiased selection:bg-blue-600/15 selection:text-[#0F172A]">
      <LandingPreview
        onOpenDiagnosis={() => {}}
      />
    </div>
  );
}
