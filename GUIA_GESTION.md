# 📋 GUÍA DE GESTIÓN DEL SITIO WEB - GUTNES

## 🎯 Flujo de trabajo para actualizar la web

### MÉTODO 1: Deploy Manual (Más simple)

```bash
# 1. Editar archivos del proyecto
# 2. Ejecutar script de deploy
./deploy.sh

# 3. Subir carpeta "out/" vía FTP manualmente
```

### MÉTODO 2: Deploy Automático (Recomendado)

```bash
# 1. Configurar credenciales FTP una sola vez
# Editar archivo: deploy-auto.sh
# Cambiar: FTP_HOST, FTP_USER, FTP_PASS

# 2. Instalar lftp (solo primera vez)
brew install lftp

# 3. Ejecutar deploy automático
./deploy-auto.sh
```

---

## 📝 CÓMO EDITAR CONTENIDO

### Cambiar textos de la página principal
📁 `src/app/page.tsx`
- Líneas 60-230: Configuración y contenido de servicios
- Líneas 800+: Secciones Hero, Servicios, Contacto, etc.

### Actualizar respuestas del chatbot
📁 `src/data/chatbotKnowledge.ts`
- Líneas 10-800: Todas las preguntas y respuestas
- Agregar nuevas categorías copiando la estructura existente

### Cambiar colores y estilos
📁 `src/app/page.tsx`
- Buscar: `theme.colors` para cambiar paleta de colores
- Línea ~270: Definición de temas (default, tech, elegant, etc.)

### Modificar el logo
📁 `src/images/logo.png`
- Reemplazar con tu logo (formato PNG recomendado)
- Dimensiones recomendadas: 200x60px

### Actualizar información de contacto
📁 `src/app/page.tsx`
- Buscar: "info@gutnes.es"
- Buscar: "+34 618 024 192"
- Buscar: "Avenida Antonio Mairena 18"

---

## 🔄 PROCESO COMPLETO DE ACTUALIZACIÓN

### Ejemplo: Cambiar un precio

```bash
# 1. Abrir el proyecto
code .

# 2. Editar archivo
# Ir a src/data/chatbotKnowledge.ts
# Buscar la sección de precios
# Actualizar el texto

# 3. Probar localmente
npm run dev
# Abrir: http://localhost:3001

# 4. Si todo OK, hacer deploy
./deploy-auto.sh   # Automático
# O
./deploy.sh        # Manual + FTP manual
```

---

## 📦 AÑADIR NUEVAS SECCIONES

### Agregar nueva pregunta al chatbot

1. Abrir: `src/data/chatbotKnowledge.ts`
2. Copiar un bloque existente como plantilla:

```typescript
{
  category: 'nueva_categoria',
  priority: 8,
  keywords: [
    'palabra clave 1',
    'palabra clave 2',
    'pregunta ejemplo'
  ],
  response: 'Tu respuesta aquí con emojis y formato.'
},
```

3. Guardar y hacer deploy

### Agregar nueva sección a la landing

1. Abrir: `src/app/page.tsx`
2. Buscar una sección similar
3. Copiar y modificar
4. Guardar y hacer deploy

---

## 🛠️ COMANDOS ÚTILES

```bash
# Desarrollo local
npm run dev          # Servidor local en http://localhost:3001

# Compilar para producción
npm run build        # Genera carpeta "out/"

# Deploy completo
./deploy-auto.sh     # Build + Upload automático

# Solo build
./deploy.sh          # Build + instrucciones FTP
```

---

## 📊 MANTENIMIENTO REGULAR

### Semanal
- [ ] Revisar mensajes del chatbot
- [ ] Actualizar información de servicios si cambia

### Mensual
- [ ] Actualizar casos de éxito
- [ ] Revisar precios y ofertas
- [ ] Verificar que todos los enlaces funcionan

### Anual
- [ ] Actualizar dependencias: `npm update`
- [ ] Revisar diseño y tendencias
- [ ] Optimizar imágenes y performance

---

## 🆘 SOLUCIÓN DE PROBLEMAS

### Error al hacer build
```bash
# Limpiar caché
rm -rf .next out node_modules
npm install
npm run build
```

### Cambios no se reflejan en producción
```bash
# 1. Verificar que hiciste build
npm run build

# 2. Verificar que subiste archivos actualizados
ls -la out/

# 3. Limpiar caché del navegador (Ctrl/Cmd + Shift + R)
```

### Chatbot no responde correctamente
1. Revisar keywords en `chatbotKnowledge.ts`
2. Probar localmente: `npm run dev`
3. Verificar consola del navegador (F12)

---

## 💡 TIPS PROFESIONALES

1. **Siempre prueba local antes de publicar**
   ```bash
   npm run dev
   ```

2. **Haz backup antes de cambios grandes**
   ```bash
   cp -r out/ backup-$(date +%Y%m%d)/
   ```

3. **Usa Git para control de versiones**
   ```bash
   git add .
   git commit -m "Descripción del cambio"
   git push
   ```

4. **Optimiza imágenes antes de subirlas**
   - Usa: https://tinypng.com
   - Formato WebP para mejor compresión

---

✅ Con esta guía puedes gestionar tu sitio completamente
