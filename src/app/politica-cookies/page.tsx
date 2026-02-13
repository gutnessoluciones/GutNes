'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Cookie, Shield, Settings, Info } from 'lucide-react';
import { motion } from 'framer-motion';

export default function PoliticaCookiesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Header */}
      <header className="bg-slate-900 text-white py-6">
        <div className="container mx-auto px-4">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Volver al inicio
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Title */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-100 rounded-full mb-4">
              <Cookie className="w-8 h-8 text-amber-600" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Política de <span className="text-amber-600">Cookies</span>
            </h1>
            <p className="text-slate-600">
              Última actualización: Febrero 2026
            </p>
          </div>

          {/* Content Sections */}
          <div className="space-y-8">
            {/* Section 1 */}
            <section className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-100 rounded-lg">
                  <Info className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">¿Qué son las cookies?</h2>
                  <p className="text-slate-600 leading-relaxed">
                    Las cookies son pequeños archivos de texto que los sitios web almacenan en tu dispositivo 
                    (ordenador, tablet o móvil) cuando los visitas. Se utilizan ampliamente para hacer que 
                    los sitios web funcionen de manera más eficiente, así como para proporcionar información 
                    a los propietarios del sitio.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 2 */}
            <section className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-amber-100 rounded-lg">
                  <Cookie className="w-6 h-6 text-amber-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">¿Qué cookies utilizamos?</h2>
                  <div className="space-y-4">
                    <div className="p-4 bg-slate-50 rounded-lg">
                      <h3 className="font-semibold text-slate-900 mb-2">Cookies Técnicas (Necesarias)</h3>
                      <p className="text-slate-600 text-sm">
                        Son esenciales para el funcionamiento básico del sitio web. Permiten la navegación 
                        y el uso de funciones básicas. No requieren consentimiento.
                      </p>
                    </div>
                    <div className="p-4 bg-slate-50 rounded-lg">
                      <h3 className="font-semibold text-slate-900 mb-2">Cookies de Preferencias</h3>
                      <p className="text-slate-600 text-sm">
                        Permiten recordar información que cambia la forma en que se comporta o se ve el sitio, 
                        como tu idioma preferido o la región en la que te encuentras.
                      </p>
                    </div>
                    <div className="p-4 bg-slate-50 rounded-lg">
                      <h3 className="font-semibold text-slate-900 mb-2">Cookies Analíticas</h3>
                      <p className="text-slate-600 text-sm">
                        Nos ayudan a entender cómo interactúan los visitantes con nuestro sitio web, 
                        recopilando información de forma anónima. Esto nos permite mejorar constantemente 
                        nuestra web.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 3 */}
            <section className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-green-100 rounded-lg">
                  <Settings className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">¿Cómo gestionar las cookies?</h2>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    Puedes configurar tu navegador para bloquear o alertarte sobre estas cookies. Sin embargo, 
                    algunas partes del sitio pueden no funcionar correctamente si las deshabilitas.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <a 
                      href="https://support.google.com/chrome/answer/95647" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-3 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors text-sm text-slate-700"
                    >
                      Google Chrome
                    </a>
                    <a 
                      href="https://support.mozilla.org/es/kb/cookies-informacion-que-los-sitios-web-guardan-en-" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-3 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors text-sm text-slate-700"
                    >
                      Mozilla Firefox
                    </a>
                    <a 
                      href="https://support.apple.com/es-es/guide/safari/sfri11471/mac" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-3 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors text-sm text-slate-700"
                    >
                      Safari
                    </a>
                    <a 
                      href="https://support.microsoft.com/es-es/microsoft-edge/eliminar-cookies-en-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-3 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors text-sm text-slate-700"
                    >
                      Microsoft Edge
                    </a>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 4 */}
            <section className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-purple-100 rounded-lg">
                  <Shield className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">Cookies de terceros</h2>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    En algunos casos especiales, también utilizamos cookies proporcionadas por terceros de confianza.
                  </p>
                  <ul className="space-y-2 text-slate-600">
                    <li className="flex items-start gap-2">
                      <span className="text-amber-500">•</span>
                      Este sitio utiliza Google Analytics para ayudarnos a comprender cómo usas el sitio.
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-500">•</span>
                      El formulario de contacto se gestiona a través de Web3Forms.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Contact */}
            <section className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Más información</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Si tienes dudas sobre nuestra política de cookies, contacta con nosotros:
              </p>
              <div className="p-4 bg-amber-50 rounded-lg border border-amber-200">
                <p className="font-semibold text-slate-900">GutNes Digital</p>
                <p className="text-slate-600">Email: info@gutnes.es</p>
                <p className="text-slate-600">Teléfono: +34 662 86 26 18</p>
              </div>
            </section>
          </div>

          {/* Back Button */}
          <div className="text-center mt-12">
            <Link 
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white font-semibold rounded-full transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              Volver al inicio
            </Link>
          </div>
        </motion.div>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-8 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-slate-400">
            © 2026 GutNes Digital. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
