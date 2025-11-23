#!/bin/bash

# Script para subir archivos críticos primero
# Luego puedes subir el resto manualmente

echo "📦 Creando paquetes optimizados..."

cd out

# Paquete 1: Archivos HTML principales (críticos)
zip -r ../gutnes-parte1-html.zip *.html .htaccess *.txt *.ico *.svg
echo "✅ Parte 1 creada: gutnes-parte1-html.zip (HTML + htaccess)"

# Paquete 2: JavaScript y CSS
zip -r ../gutnes-parte2-assets.zip _next/static/chunks/
echo "✅ Parte 2 creada: gutnes-parte2-assets.zip (JS/CSS)"

# Paquete 3: Fuentes e imágenes
zip -r ../gutnes-parte3-media.zip _next/static/media/
echo "✅ Parte 3 creada: gutnes-parte3-media.zip (Fuentes/Imágenes)"

# Paquete 4: Resto
zip -r ../gutnes-parte4-resto.zip _next/static/yKvPyNlLy1ZxynUMjG1zN/ _next/yKvPyNlLy1ZxynUMjG1zN/ _not-found/
echo "✅ Parte 4 creada: gutnes-parte4-resto.zip (Manifiestos)"

cd ..

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "📦 Archivos creados:"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
ls -lh gutnes-parte*.zip
echo ""
echo "📤 Sube en este orden:"
echo "1. gutnes-parte1-html.zip    (CRÍTICO)"
echo "2. gutnes-parte2-assets.zip  (Importante)"
echo "3. gutnes-parte3-media.zip   (Opcional si falla)"
echo "4. gutnes-parte4-resto.zip   (Opcional si falla)"
echo ""
echo "Descomprime cada uno en public_html/"
