#!/bin/bash

# 🚀 Deploy AUTOMÁTICO con FTP para DonDominio
# Gutnes - Landing Page

# ⚙️ CONFIGURACIÓN FTP
# Completa estos datos con tus credenciales de DonDominio:
FTP_HOST="ftp.tudominio.com"        # Ejemplo: ftp.gutnes.es
FTP_USER="tu_usuario_ftp"            # Tu usuario FTP
FTP_PASS="tu_contraseña_ftp"         # Tu contraseña FTP
FTP_DIR="/public_html"               # Carpeta destino (normalmente /public_html o /www)

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "🚀 DEPLOY AUTOMÁTICO - GUTNES LANDING PAGE"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""

# Verificar que lftp está instalado
if ! command -v lftp &> /dev/null; then
    echo "⚠️  lftp no está instalado."
    echo ""
    echo "Para instalarlo:"
    echo "  macOS: brew install lftp"
    echo "  Linux: sudo apt install lftp"
    echo ""
    echo "📝 O edita FTP_CONFIG arriba con tus credenciales y usa deploy-manual.sh"
    exit 1
fi

# 1. Build del proyecto
echo "📦 Compilando proyecto Next.js..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ Error en el build. Abortando deploy."
    exit 1
fi

echo "✅ Build completado"
echo ""

# 2. Verificar archivos
if [ ! -d "out" ]; then
    echo "❌ Carpeta 'out' no encontrada."
    exit 1
fi

# 3. Subir vía FTP
echo "📤 Subiendo archivos a $FTP_HOST..."
echo ""

lftp -c "
set ftp:list-options -a;
open ftp://$FTP_USER:$FTP_PASS@$FTP_HOST;
lcd out;
cd $FTP_DIR;
mirror --reverse --delete --verbose --parallel=10;
bye
"

if [ $? -eq 0 ]; then
    echo ""
    echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
    echo "✅ DEPLOY COMPLETADO EXITOSAMENTE"
    echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
    echo ""
    echo "🌐 Tu sitio está online en: http://tudominio.com"
else
    echo ""
    echo "❌ Error al subir archivos. Verifica credenciales FTP."
    exit 1
fi
