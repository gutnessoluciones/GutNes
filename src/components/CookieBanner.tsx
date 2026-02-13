'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Cookie, X, Settings, Check } from 'lucide-react';

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState({
    necessary: true,
    analytics: false,
    preferences: false,
  });

  useEffect(() => {
    const cookieConsent = localStorage.getItem('cookieConsent');
    if (!cookieConsent) {
      const timer = setTimeout(() => setShowBanner(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptAll = () => {
    const consent = {
      necessary: true,
      analytics: true,
      preferences: true,
      timestamp: new Date().toISOString(),
    };
    localStorage.setItem('cookieConsent', JSON.stringify(consent));
    setShowBanner(false);
  };

  const acceptSelected = () => {
    const consent = {
      ...preferences,
      necessary: true,
      timestamp: new Date().toISOString(),
    };
    localStorage.setItem('cookieConsent', JSON.stringify(consent));
    setShowBanner(false);
  };

  const rejectAll = () => {
    const consent = {
      necessary: true,
      analytics: false,
      preferences: false,
      timestamp: new Date().toISOString(),
    };
    localStorage.setItem('cookieConsent', JSON.stringify(consent));
    setShowBanner(false);
  };

  return (
    <AnimatePresence>
      {showBanner && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="fixed bottom-0 left-0 right-0 z-[9999] p-4 md:p-6"
        >
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden">
            {!showSettings ? (
              <div className="p-6">
                <div className="flex items-start gap-4">
                  <div className="hidden sm:flex p-3 bg-amber-100 rounded-xl">
                    <Cookie className="w-8 h-8 text-amber-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-slate-900 mb-2 flex items-center gap-2">
                      <Cookie className="w-5 h-5 text-amber-600 sm:hidden" />
                      Utilizamos cookies
                    </h3>
                    <p className="text-slate-600 text-sm mb-4">
                      Usamos cookies para mejorar tu experiencia en nuestro sitio web, analizar el tráfico 
                      y personalizar contenido.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <button
                        onClick={acceptAll}
                        className="px-5 py-2.5 bg-amber-500 hover:bg-amber-600 text-white font-semibold rounded-full transition-colors text-sm flex items-center justify-center gap-2"
                      >
                        <Check className="w-4 h-4" />
                        Aceptar todas
                      </button>
                      <button
                        onClick={() => setShowSettings(true)}
                        className="px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold rounded-full transition-colors text-sm flex items-center justify-center gap-2"
                      >
                        <Settings className="w-4 h-4" />
                        Configurar
                      </button>
                      <button
                        onClick={rejectAll}
                        className="px-5 py-2.5 text-slate-500 hover:text-slate-700 font-medium text-sm transition-colors"
                      >
                        Rechazar opcionales
                      </button>
                    </div>
                    <p className="text-xs text-slate-400 mt-3">
                      Más información en nuestra{' '}
                      <Link href="/politica-cookies" className="text-amber-600 hover:underline">
                        Política de Cookies
                      </Link>
                    </p>
                  </div>
                  <button
                    onClick={rejectAll}
                    className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
                    aria-label="Cerrar"
                  >
                    <X className="w-5 h-5 text-slate-400" />
                  </button>
                </div>
              </div>
            ) : (
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-slate-900">Configurar cookies</h3>
                  <button
                    onClick={() => setShowSettings(false)}
                    className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
                  >
                    <X className="w-5 h-5 text-slate-400" />
                  </button>
                </div>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-center justify-between p-4 bg-slate-50 rounded-xl">
                    <div>
                      <h4 className="font-semibold text-slate-900">Cookies necesarias</h4>
                      <p className="text-sm text-slate-500">Esenciales para el funcionamiento del sitio</p>
                    </div>
                    <div className="px-3 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full">
                      Siempre activas
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 bg-slate-50 rounded-xl">
                    <div>
                      <h4 className="font-semibold text-slate-900">Cookies analíticas</h4>
                      <p className="text-sm text-slate-500">Nos ayudan a mejorar el sitio</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={preferences.analytics}
                        onChange={(e) => setPreferences(prev => ({ ...prev, analytics: e.target.checked }))}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-slate-300 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-amber-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-amber-500"></div>
                    </label>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 bg-slate-50 rounded-xl">
                    <div>
                      <h4 className="font-semibold text-slate-900">Cookies de preferencias</h4>
                      <p className="text-sm text-slate-500">Recuerdan tus preferencias</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={preferences.preferences}
                        onChange={(e) => setPreferences(prev => ({ ...prev, preferences: e.target.checked }))}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-slate-300 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-amber-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-amber-500"></div>
                    </label>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={acceptSelected}
                    className="flex-1 px-5 py-2.5 bg-amber-500 hover:bg-amber-600 text-white font-semibold rounded-full transition-colors text-sm"
                  >
                    Guardar preferencias
                  </button>
                  <button
                    onClick={acceptAll}
                    className="flex-1 px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold rounded-full transition-colors text-sm"
                  >
                    Aceptar todas
                  </button>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
