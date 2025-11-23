#!/bin/bash

# 🚀 Script de Deploy Automático para DonDominio
# Gutnes - Landing Page

echo "🔨 Iniciando proceso de deploy..."
echo ""

# 1. Build del proyecto
echo "📦 Compilando proyecto Next.js..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ Error en el build. Abortando deploy."
    exit 1
fi

echo "✅ Build completado exitosamente"
echo ""

# 2. Preparar archivos
echo "📁 Verificando archivos en carpeta out/..."
if [ ! -d "out" ]; then
    echo "❌ Carpeta 'out' no encontrada. Verifica el build."
    exit 1
fi

echo "✅ Carpeta out/ lista para deploy"
echo ""

# Instrucciones FTP
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "📤 ARCHIVOS LISTOS PARA SUBIR VÍA FTP"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo "📂 Sube TODO el contenido de: out/"
echo "📍 Destino: public_html/ (raíz de tu hosting)"
echo ""
echo "💡 Usa FileZilla, Cyberduck o FTP de DonDominio"
echo ""
echo "✅ Deploy preparado correctamente"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
