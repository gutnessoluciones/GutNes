# 📤 INSTRUCCIONES PARA SUBIR A DONDOMINIO VÍA FTP

## ✅ ARCHIVOS LISTOS PARA SUBIR
Todos los archivos están en la carpeta: **out/**

## 🚀 PASOS PARA PUBLICAR:

### 1. Accede al FTP de DonDominio
   - Abre tu cliente FTP (FileZilla, Cyberduck, o el FTP web de DonDominio)
   - Credenciales (las encuentras en tu panel de DonDominio):
     * Host: ftp.tudominio.com (o la que te proporcionen)
     * Usuario: tu usuario FTP
     * Contraseña: tu contraseña FTP
     * Puerto: 21

### 2. Navega a la carpeta raíz de tu hosting
   - Normalmente es: `public_html/` o `www/` o `httpdocs/`
   - **IMPORTANTE**: Debes subir los archivos A LA RAÍZ, no en una subcarpeta

### 3. Sube TODO el contenido de la carpeta "out/"
   - Selecciona TODOS los archivos y carpetas dentro de `out/`
   - Súbelos a la raíz de tu hosting
   - Archivos importantes que DEBEN estar:
     ✓ index.html
     ✓ 404.html
     ✓ .htaccess
     ✓ Carpeta _next/ (completa)
     ✓ Todos los archivos .ico, .svg, etc.

### 4. Estructura final en tu servidor:
```
public_html/
├── index.html
├── 404.html
├── .htaccess
├── _next/
│   └── (todos los archivos)
├── favicon.ico
├── next.svg
├── vercel.svg
└── ... otros archivos
```

### 5. Verifica que funciona
   - Visita: http://tudominio.com
   - Deberías ver tu landing page de Gutnes

## 🔒 OPCIONAL: Activar HTTPS
Si tienes certificado SSL en DonDominio:
1. Abre el archivo .htaccess que subiste
2. Descomenta las últimas líneas (quita los #)
3. Guarda y visita https://tudominio.com

## ⚠️ NOTAS IMPORTANTES:
- Los archivos deben estar EN LA RAÍZ, no en carpetas
- El archivo .htaccess es INVISIBLE en algunos clientes FTP, activa "mostrar archivos ocultos"
- Si algo no funciona, verifica que .htaccess se subió correctamente
- Borra cualquier index.html antiguo que pueda existir

## 🆘 PROBLEMAS COMUNES:
- **Página en blanco**: Verifica que la carpeta _next/ se subió completa
- **404 en recursos**: Asegúrate de estar en la raíz del servidor
- **.htaccess no funciona**: Verifica que tu hosting tenga Apache con mod_rewrite activo

---
✅ ¡Todo listo! Simplemente sube la carpeta "out/" vía FTP y funcionará.
