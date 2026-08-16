import React, { useState, useEffect } from 'react';
import { X, Send, ArrowRight } from 'lucide-react';

interface ApplicationPopupProps {
  onApply: () => void;
  onViewPrograms: () => void;
}

export const ApplicationPopup: React.FC<ApplicationPopupProps> = ({ onApply, onViewPrograms }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const dismissed = sessionStorage.getItem('nh_popup_dismissed');
    if (!dismissed) {
      const timer = setTimeout(() => setIsVisible(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    sessionStorage.setItem('nh_popup_dismissed', 'true');
  };

  if (!isVisible) return null;

  return (
    <div
      role="dialog"
      aria-label="Application notification"
      style={{
        position: 'fixed',
        right: '1rem',
        bottom: '1rem',
        maxWidth: '18rem',
        width: '100%',
        padding: '0.5rem',
        boxSizing: 'border-box',
        background: '#0f1724',
        color: '#fff',
        borderRadius: 12,
        border: '2px solid rgba(0,135,81,0.85)',
        boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
        zIndex: 99999,
        paddingBottom: 'calc(env(safe-area-inset-bottom, 0px) + 12px)'
      }}
    >
      <button
        onClick={handleDismiss}
        aria-label="Close notification"
        style={{
          position: 'absolute',
          right: -10,
          top: -10,
          zIndex: 100000,
          background: '#0b1220',
          borderRadius: '50%',
          padding: 6,
          boxShadow: '0 4px 10px rgba(0,0,0,0.4)',
          border: '1px solid rgba(255,255,255,0.06)'
        }}
      >
        <X style={{ width: 16, height: 16, color: '#cbd5e1' }} />
      </button>

      <div style={{ display: 'flex', gap: 8, alignItems: 'flex-start' }}>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ fontSize: 10, color: '#FFD700', fontWeight: 800, letterSpacing: 0.6, marginBottom: 4 }}>ENROLLMENT OPEN</div>
          <div style={{ fontWeight: 800, fontSize: 14, marginBottom: 6 }}>APPLICATIONS ARE OPEN</div>
          <div style={{ fontSize: 12, color: '#cbd5e1', marginBottom: 8 }}>Join one of Nana Halima Empowerment Initiative's current empowerment programs.</div>

          <div style={{ display: 'flex', gap: 8 }}>
            <button
              onClick={() => {
                handleDismiss();
                onApply();
              }}
              style={{
                flex: 1,
                background: '#008751',
                color: '#fff',
                borderRadius: 8,
                padding: '8px 10px',
                border: 'none',
                fontWeight: 700,
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                justifyContent: 'center'
              }}
            >
              <Send style={{ width: 16, height: 16 }} />
              <span>Apply</span>
            </button>

            <button
              onClick={() => {
                handleDismiss();
                onViewPrograms();
              }}
              style={{
                padding: '8px 10px',
                borderRadius: 8,
                background: '#0b1220',
                color: '#cbd5e1',
                border: '1px solid rgba(255,255,255,0.04)'
              }}
            >
              Programs <ArrowRight style={{ width: 16, height: 16, marginLeft: 6 }} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
