# ⚡ CHEATSHEET - GESTIÓN RÁPIDA

## 🚀 Comandos más usados

```bash
# Desarrollo local (ver cambios en tiempo real)
npm run dev

# Preparar para publicar
npm run deploy

# Publicar automáticamente (después de configurar FTP)
./deploy-auto.sh
```

---

## 📝 Ediciones comunes

| ¿Qué quieres cambiar? | Archivo | Búsqueda |
|----------------------|---------|----------|
| **Respuestas chatbot** | `src/data/chatbotKnowledge.ts` | Buscar palabra clave |
| **Textos landing** | `src/app/page.tsx` | Buscar el texto exacto |
| **Teléfono/email** | `src/app/page.tsx` | `+34 618` o `info@` |
| **Dirección** | `src/app/page.tsx` | `Avenida Antonio` |
| **Logo** | `src/images/logo.png` | Reemplazar archivo |
| **Colores** | `src/app/page.tsx` | `theme.colors` |

---

## 🔄 Workflow típico

```bash
1. Abrir proyecto:        code .
2. Editar archivos:       (VSCode)
3. Probar local:          npm run dev
4. Ver en navegador:      http://localhost:3001
5. Si OK → Deploy:        npm run deploy
6. Subir "out/" vía FTP
7. Verificar online:      http://tudominio.com
```

---

## 📂 Archivos importantes

```
webmarketing/
├── src/
│   ├── app/
│   │   └── page.tsx              ← Landing principal
│   ├── data/
│   │   └── chatbotKnowledge.ts   ← Respuestas chatbot
│   └── images/
│       └── logo.png               ← Logo empresa
├── out/                           ← SUBIR ESTO VÍA FTP
├── deploy.sh                      ← Script deploy manual
├── deploy-auto.sh                 ← Script deploy automático
├── GUIA_GESTION.md               ← Guía completa
└── CHEATSHEET.md                 ← Este archivo
```

---

## 🎯 Ejemplos prácticos

### Cambiar precio de un servicio
1. Abrir: `src/data/chatbotKnowledge.ts`
2. Buscar: "precio"
3. Editar respuesta
4. `npm run deploy` + subir FTP

### Añadir nuevo servicio
1. Abrir: `src/app/page.tsx`
2. Buscar: `const services = [`
3. Copiar un servicio existente
4. Modificar título, descripción, features
5. `npm run deploy` + subir FTP

### Actualizar caso de éxito
1. Abrir: `src/data/chatbotKnowledge.ts`
2. Buscar: "Casos de éxito"
3. Actualizar estadísticas
4. `npm run deploy` + subir FTP

---

## 🆘 Atajos de emergencia

```bash
# Sitio roto? Restaurar última versión
cp -r backup-FECHA/* out/
# Subir out/ vía FTP

# Build no funciona? Limpiar todo
rm -rf .next out node_modules
npm install
npm run build

# Cambios no se ven? Limpiar caché navegador
Cmd/Ctrl + Shift + R
```

---

**💡 Tip**: Guarda este archivo como favorito
