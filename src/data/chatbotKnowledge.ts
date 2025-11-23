// Base de conocimiento del chatbot de Gutnes
// Sistema de respuestas inteligentes orientado a marketing y conversión

export interface ChatPattern {
  keywords: string[];
  response: string;
  category: string;
  priority: number; // Mayor número = mayor prioridad
}

export const chatbotKnowledge: ChatPattern[] = [
  // ==================== IDENTIDAD Y PRESENTACIÓN ====================
  {
    category: 'identidad',
    priority: 10,
    keywords: [
      'quiénes sois', 'quienes sois', 'quién es gutnes', 'quien es gutnes', 'quiénes son', 'quienes son',
      'quién es la empresa', 'quien es la empresa', 'sobre vosotros', 'sobre ustedes', 'sobre gutnes',
      'acerca de gutnes', 'conócenos', 'conocenos', 'presentación', 'presentacion', 'presentaos',
      'háblame de gutnes', 'hablame de gutnes', 'cuéntame de gutnes', 'cuentame de gutnes',
      'equipo de gutnes', 'el equipo', 'vuestro equipo', 'su equipo', 'tu equipo',
      'quiénes forman gutnes', 'quienes forman gutnes', 'quién está detrás', 'quien esta detras',
      'quiénes están detrás', 'quienes estan detras', 'quiénes integran', 'quienes integran',
      'quién compone', 'quien compone', 'quiénes componen', 'quienes componen',
      'quién dirige', 'quien dirige', 'quién fundó', 'quien fundo', 'quiénes trabajan', 'quienes trabajan',
      'info de la empresa', 'información de gutnes', 'informacion de gutnes', 'datos de gutnes',
      'historia de gutnes', 'trayectoria', 'experiencia de gutnes', 'background',
      'perfil de la empresa', 'perfil empresarial', 'quién sois', 'quien sois',
      'descripción de gutnes', 'descripcion de gutnes', 'que empresa sois', 'tipo de empresa',
      'empresa local', 'empresa de alcalá', 'empresa de Alcalá de Guadaíra', 'empresa alcalarena',
      'negocio local', 'sois de alcalá', 'sois de alcala', 'de donde sois'
    ],
    response: '¡Hola! 👋 Somos Gutnes, una empresa de Alcalá de Guadaíra (Sevilla) con un equipo multidisciplinar y años de experiencia en el sector tecnológico. Ayudamos a empresas a transformarse digitalmente, mejorar su presencia online y automatizar sus procesos.\n\n💡 **También puedes preguntar:**\n• ¿Qué servicios ofrecéis?\n• ¿Cuánto cuesta un proyecto?\n• ¿Dónde estáis ubicados?'
  },

  // ==================== SERVICIOS GENERALES ====================
  {
    category: 'servicios',
    priority: 9,
    keywords: [
      'servicio', 'servicios', 'ofrecéis', 'ofreceis', 'ofrecen', 'ofreces', 'qué hacéis', 'que haceis',
      'qué hacen', 'que hacen', 'qué ofrecéis', 'que ofreceis', 'qué ofrecen', 'que ofrecen',
      'qué podéis hacer', 'que podeis hacer', 'qué pueden hacer', 'que pueden hacer',
      'qué tipo de servicios', 'que tipo de servicios', 'qué tipo de soluciones', 'que tipo de soluciones',
      'qué soluciones', 'que soluciones', 'qué hace gutnes', 'que hace gutnes',
      'qué hace la empresa', 'que hace la empresa', 'en qué trabajáis', 'en que trabajais',
      'a qué os dedicáis', 'a que os dedicais', 'a qué se dedican', 'a que se dedican',
      'cuál es vuestra especialidad', 'cual es vuestra especialidad', 'especialidad',
      'qué especialidades', 'que especialidades', 'áreas', 'areas', 'qué áreas', 'que areas',
      'qué trabajos hacéis', 'que trabajos haceis', 'qué trabajos', 'que trabajos',
      'qué proyectos hacéis', 'que proyectos haceis', 'tipo de proyectos',
      'qué podéis ofrecerme', 'que podeis ofrecerme', 'qué me podéis ofrecer', 'que me podeis ofrecer',
      'catálogo', 'catalogo', 'catálogo de servicios', 'lista de servicios', 'gama de servicios',
      'en qué me podéis ayudar', 'en que me podeis ayudar', 'cómo me podéis ayudar', 'como me podeis ayudar',
      'qué soluciones ofrecéis', 'que soluciones ofreceis', 'qué soluciones tenéis', 'que soluciones teneis',
      'necesito ayuda con', 'necesito un servicio', 'busco un servicio', 'me interesa un servicio',
      'quiero contratar', 'contratar servicio', 'servicios disponibles', 'oferta de servicios',
      'portfolio de servicios', 'portafolio de servicios', 'menu de servicios',
      'que me ofreces', 'que oferta teneis', 'que teneis', 'opciones',
      'alternativas', 'posibilidades', 'que puedo contratar', 'que puedo hacer con vosotros',
      'en que me ayudais', 'ayuda profesional', 'servicios profesionales', 'servicios it',
      'servicios informaticos', 'servicios digitales', 'servicios tecnologicos', 'servicios web',
      'que tipo de ayuda dais', 'que tipo de ayuda ofreceis'
    ],
    response: '💼 En Gutnes ofrecemos:\n\n🔹 **Digitalización Empresarial** - Automatización y optimización de procesos\n🔹 **Auditoría Informática** - Análisis de seguridad e infraestructura IT\n🔹 **Desarrollo Web** - Sitios modernos con Next.js y React\n🔹 **Posicionamiento SEO** - Mejora tu visibilidad en Google\n🔹 **Mantenimiento IT** - Soporte técnico 24/7\n\n💡 **También puedes preguntar:**\n• ¿Cuánto cuesta?\n• ¿Cuánto tarda un proyecto?\n• ¿Cómo contacto con vosotros?'
  },

  // ==================== DIGITALIZACIÓN ====================
  {
    category: 'digitalizacion',
    priority: 8,
    keywords: [
      'digitalización', 'digitalizacion', 'digitalizar', 'digitaliza', 'digital',
      'automatizar', 'automatización', 'automatizacion', 'automatiza', 'automático', 'automatico',
      'procesos', 'proceso', 'workflow', 'flujo de trabajo', 'optimizar procesos',
      'eficiencia', 'eficiente', 'productividad', 'producir más', 'producir mas',
      'cloud', 'nube', 'almacenamiento', 'almacenar', 'guardar archivos',
      'gestión documental', 'gestion documental', 'documentos', 'archivo digital',
      'transformación digital', 'transformacion digital', 'transformar', 'modernizar',
      'paperless', 'sin papel', 'eliminar papel', 'reducir papel',
      'escanear', 'digitalizar documentos', 'pasar a digital', 'convertir a digital',
      'sistema de gestión', 'sistema de gestion', 'erp', 'crm',
      'base de datos', 'bbdd', 'organizar información', 'organizar informacion',
      'mejorar organización', 'mejorar organizacion', 'orden', 'ordenar',
      'mucho papeleo', 'papeles', 'facturas en papel', 'archivo lleno',
      'todo manual', 'hago todo a mano', 'pierdo tiempo', 'tardo mucho',
      'desorganizado', 'caos', 'no encuentro nada', 'buscar documentos',
      'perdida de tiempo', 'tiempo perdido', 'ineficiente', 'lento',
      'optimización', 'optimizacion', 'mejorar eficiencia', 'agilizar',
      'centralizar', 'unificar', 'integrar sistemas', 'conectar',
      'sincronizar', 'sincronizacion', 'actualizar automático', 'actualizar automatico',
      'menos trabajo', 'ahorrar tiempo', 'tiempo', 'rapidez'
    ],
    response: '🚀 La **Digitalización Empresarial** es nuestro servicio estrella. Visitamos tu empresa, auditamos tus procesos diarios y te ofrecemos soluciones personalizadas para:\n\n✅ Automatizar tareas repetitivas\n✅ Migrar a la nube\n✅ Eliminar el papel\n✅ Mejorar la productividad\n✅ Reducir costes operativos\n\nTe acompañamos en todo el proceso de cambio.\n\n💡 **También puedes preguntar:**\n• ¿Cuánto cuesta digitalizar mi empresa?\n• ¿Cuánto tiempo necesito?\n• ¿Cómo empezamos?'
  },

  // ==================== DESARROLLO WEB ====================
  {
    category: 'web',
    priority: 8,
    keywords: [
      'web', 'página web', 'pagina web', 'sitio web', 'website', 'site',
      'desarrollo web', 'crear web', 'hacer web', 'construir web', 'montar web',
      'diseño web', 'diseno web', 'diseñar web', 'disenar web',
      'landing page', 'landing', 'página de aterrizaje', 'pagina de aterrizaje',
      'ecommerce', 'e-commerce', 'tienda online', 'tienda virtual', 'vender online',
      'tienda', 'comercio electrónico', 'comercio electronico', 'venta online',
      'next.js', 'nextjs', 'next', 'react', 'reactjs', 'javascript',
      'responsive', 'adaptable', 'móvil', 'movil', 'tablet', 'celular',
      'frontend', 'backend', 'fullstack', 'programación web', 'programacion web',
      'necesito una web', 'quiero una web', 'me hace falta web', 'sin web',
      'actualizar web', 'renovar web', 'rediseñar web', 'redisenar web',
      'mejorar web', 'mi web es vieja', 'web antigua', 'web obsoleta',
      'moderna', 'actual', 'profesional', 'bonita', 'atractiva',
      'rápida', 'rapida', 'veloz', 'ligera', 'optimizada',
      'wordpress', 'wix', 'shopify', 'prestashop', 'migrar',
      'dominio', 'hosting', 'alojamiento', 'servidor',
      'ssl', 'https', 'seguro', 'certificado', 'candado',
      'formulario', 'contacto web', 'enviar mensajes', 'recibir consultas',
      'galería', 'galeria', 'imágenes', 'imagenes', 'fotos',
      'blog', 'noticias', 'artículos', 'articulos', 'contenido',
      'catálogo online', 'catalogo online', 'mostrar productos', 'presentar servicios',
      'corporativa', 'empresa', 'negocio', 'profesional',
      'carrito de compra', 'pasarela de pago', 'cobrar online', 'pagos',
      'escaparate digital', 'presencia online', 'estar en internet', 'aparecer en internet',
      'buscan mi negocio', 'encuentren mi empresa', 'no me ven online'
    ],
    response: '💻 Creamos **sitios web profesionales** con tecnología de vanguardia:\n\n🎨 Diseño moderno y responsive\n⚡ Carga ultrarrápida (Next.js)\n📱 Adaptado a móviles y tablets\n🔍 Optimizado para SEO desde el inicio\n♿ Accesible y usable\n\nDesde landing pages hasta ecommerce completo. **Ejemplo real**: Polvero el Vivo incrementó sus consultas un 200% con su nueva web.\n\n💡 **También puedes preguntar:**\n• ¿Cuánto cuesta una web?\n• ¿Cuánto tarda en hacerse?\n• ¿Incluye posicionamiento SEO?'
  },

  // ==================== SEO Y POSICIONAMIENTO ====================
  {
    category: 'seo',
    priority: 8,
    keywords: [
      'seo', 'posicionamiento', 'posicionar', 'posición', 'posicion',
      'google', 'buscador', 'buscadores', 'búsqueda', 'busqueda', 'buscar',
      'ranking', 'rank', 'aparecer en google', 'salir en google', 'estar en google',
      'primero en google', 'primera página', 'primera pagina', 'primer puesto',
      'visibilidad', 'visible', 'encontrar', 'encontrarme', 'que me encuentren',
      'keywords', 'palabras clave', 'keywords research', 'investigación de palabras',
      'tráfico web', 'trafico web', 'visitas', 'visitantes', 'tráfico', 'trafico',
      'orgánico', 'organico', 'tráfico orgánico', 'trafico organico',
      'sem', 'google ads', 'adwords', 'publicidad', 'anuncios',
      'competencia', 'competidores', 'rivales', 'otros negocios',
      'no aparezco', 'no salgo', 'no me encuentran', 'invisible',
      'mi competencia sale primera', 'otros salen antes', 'estoy abajo',
      'segunda página', 'tercera página', 'pagina 2', 'pagina 3',
      'mejorar posición', 'subir posiciones', 'escalar', 'ascender',
      'optimización seo', 'optimizacion seo', 'optimizar', 'mejorar seo',
      'backlinks', 'enlaces', 'link building', 'autoridad',
      'contenido seo', 'textos seo', 'redacción seo', 'redaccion seo',
      'etiquetas', 'meta tags', 'meta descripción', 'meta descripcion',
      'indexar', 'indexación', 'indexacion', 'rastreo', 'crawling',
      'local seo', 'google maps', 'google my business', 'ficha google',
      'sem', 'sea', 'ppc', 'campañas', 'campanas',
      'analytics', 'métricas', 'metricas', 'estadísticas', 'estadisticas',
      'conversión', 'conversion', 'convertir visitas', 'leads',
      'ctr', 'impresiones', 'clics', 'clicks',
      'serp', 'resultados de búsqueda', 'resultados de busqueda',
      'featured snippet', 'snippet', 'fragmento destacado',
      'como salir primero', 'como aparecer', 'como posicionar',
      'estrategia seo', 'plan seo', 'consultoria seo', 'asesoramiento seo'
    ],
    response: '📈 El **Posicionamiento SEO** te ayuda a aparecer primero en Google cuando tus clientes buscan tus servicios:\n\n🎯 SEO On-Page optimizado\n🔗 Estrategia de Link Building\n📊 Análisis de competencia\n📝 Contenido optimizado\n📉 Reportes mensuales\n\n¿Sabías que el 75% de usuarios nunca pasa de la primera página de Google? Nosotros te llevamos ahí.\n\n💡 **También puedes preguntar:**\n• ¿Cuánto cuesta el SEO?\n• ¿Cuánto tarda en verse resultados?\n• ¿Qué incluye el servicio SEO?'
  },

  // ==================== AUDITORÍA IT ====================
  {
    category: 'auditoria',
    priority: 8,
    keywords: [
      'auditoría', 'auditoria', 'auditar', 'auditoría informática', 'auditoria informatica',
      'revisar', 'revisión', 'revision', 'evaluar', 'evaluación', 'evaluacion',
      'análisis', 'analisis', 'análisis it', 'analisis it', 'diagnóstico', 'diagnostico',
      'seguridad', 'seguridad informática', 'seguridad informatica', 'ciberseguridad', 'cyber',
      'infraestructura', 'infraestructura it', 'sistemas', 'red', 'redes',
      'vulnerabilidades', 'vulnerable', 'debilidades', 'puntos débiles', 'puntos debiles',
      'protección', 'proteccion', 'proteger', 'blindar', 'asegurar',
      'riesgos', 'peligros', 'amenazas', 'ataques', 'brechas',
      'hackear', 'hackeado', 'hackeo', 'intrusión', 'intrusion',
      'virus', 'malware', 'ransomware', 'troyano', 'spyware',
      'firewall', 'antivirus', 'cortafuegos', 'defensa',
      'contraseñas', 'contrasenas', 'passwords', 'accesos', 'permisos',
      'copias de seguridad', 'backup', 'respaldo', 'recuperación', 'recuperacion',
      'evaluación de seguridad', 'evaluacion de seguridad', 'test de penetración', 'test de penetracion',
      'pentesting', 'ethical hacking', 'análisis de riesgos', 'analisis de riesgos',
      'cumplimiento', 'compliance', 'normativa', 'lopd', 'rgpd', 'gdpr',
      'políticas de seguridad', 'politicas de seguridad', 'protocolos',
      'estoy seguro', 'tengo miedo', 'me preocupa', 'roban datos',
      'proteger mi empresa', 'proteger información', 'proteger informacion',
      'revisar ordenadores', 'revisar servidores', 'comprobar seguridad',
      'chequeo informático', 'chequeo informatico', 'inspección', 'inspeccion'
    ],
    response: '🔍 La **Auditoría Informática** es esencial para conocer el estado real de tu tecnología:\n\n🛡️ Detectamos vulnerabilidades de seguridad\n💡 Identificamos oportunidades de mejora\n📋 Recomendaciones estratégicas\n💰 Ahorro en costes IT\n🎯 Plan de acción personalizado\n\n**Caso real**: Un cliente descubrió aspectos críticos que le ahorraron miles de euros.\n\n💡 **También puedes preguntar:**\n• ¿Cuánto cuesta una auditoría?\n• ¿Cuánto tarda?\n• ¿Qué incluye el servicio?'
  },

  // ==================== PRECIOS Y PRESUPUESTOS ====================
  {
    category: 'precios',
    priority: 9,
    keywords: [
      'precio', 'precios', 'cuesta', 'coste', 'costes', 'costo', 'costos',
      'tarifa', 'tarifas', 'tarifario', 'tarificación', 'tarificacion',
      'presupuesto', 'presupuestos', 'cotización', 'cotizacion', 'cotizar',
      'cuánto vale', 'cuanto vale', 'cuánto cuesta', 'cuanto cuesta',
      'cuánto sale', 'cuanto sale', 'cuánto es', 'cuanto es',
      'cuánto cobran', 'cuanto cobran', 'cuánto cobráis', 'cuanto cobrais',
      'cuánto me costaría', 'cuanto me costaria', 'cuánto me saldría', 'cuanto me saldria',
      'cuánto me cobrarían', 'cuanto me cobrarian', 'cuánto tendría que pagar', 'cuanto tendria que pagar',
      'cuánto hay que pagar', 'cuanto hay que pagar', 'cuánto tengo que pagar', 'cuanto tengo que pagar',
      'económico', 'economico', 'barato', 'caro', 'costoso', 'accesible', 'asequible',
      'inversión', 'inversion', 'invertir', 'gasto', 'desembolso',
      'pagar', 'pago', 'pagos', 'abono', 'desembolsar',
      'qué precio', 'que precio', 'cuál es el precio', 'cual es el precio',
      'lista de precios', 'tabla de precios', 'precios de servicios',
      'pedir presupuesto', 'solicitar presupuesto', 'quiero presupuesto', 'necesito presupuesto',
      'presupuesto gratis', 'presupuesto sin compromiso', 'presupuesto gratuito',
      'me das presupuesto', 'me dais presupuesto', 'enviar presupuesto',
      'valor', 'valoración', 'valoracion', 'estimación', 'estimacion',
      'cuánto vale una web', 'cuanto vale una web', 'precio web', 'coste web',
      'cuánto cuesta seo', 'cuanto cuesta seo', 'precio seo', 'tarifa seo',
      'cuánto cuesta digitalización', 'cuanto cuesta digitalizacion',
      'cuánto cuesta auditoría', 'cuanto cuesta auditoria',
      'forma de pago', 'métodos de pago', 'metodos de pago', 'financiación', 'financiacion',
      'plazos de pago', 'facilidades de pago', 'pago a plazos', 'cuotas',
      'cuánto me va a costar', 'cuanto me va a costar', 'presupuesto aproximado',
      'rango de precios', 'entre cuanto', 'más o menos cuanto', 'mas o menos cuanto'
    ],
    response: '💰 Cada proyecto es único, por eso nuestros **precios son personalizados** según tus necesidades:\n\n✨ Presupuesto sin compromiso\n📊 Análisis de necesidades gratuito\n💳 Opciones de pago flexibles\n🎁 Primera consultoría GRATIS\n\n**Importante**: Invertir en tecnología genera retorno. Nuestros clientes suelen recuperar la inversión en 6-12 meses.\n\n💡 **También puedes preguntar:**\n• ¿Cuánto tarda un proyecto?\n• ¿Qué incluye el precio?\n• ¿Cómo solicito un presupuesto?'
  },

  // ==================== PLAZOS Y TIEMPOS ====================
  {
    category: 'plazos',
    priority: 8,
    keywords: [
      'tiempo', 'tiempos', 'tarda', 'tardan', 'tardáis', 'tardais', 'demora', 'demoran',
      'plazo', 'plazos', 'duración', 'duracion', 'dura', 'lleva',
      'cuánto tarda', 'cuanto tarda', 'cuánto tiempo', 'cuanto tiempo',
      'cuánto se tarda', 'cuanto se tarda', 'cuánto demora', 'cuanto demora',
      'cuánto lleva', 'cuanto lleva', 'cuánto dura', 'cuanto dura',
      'cuándo estará', 'cuando estara', 'cuándo estará listo', 'cuando estara listo',
      'cuándo lo tendré', 'cuando lo tendre', 'cuándo lo tendremos', 'cuando lo tendremos',
      'fecha de entrega', 'fecha estimada', 'plazo de entrega', 'tiempo de entrega',
      'rapidez', 'rápido', 'rapido', 'veloz', 'pronto', 'inmediato',
      'urgente', 'urgencia', 'ya', 'ahora', 'cuanto antes',
      'cronograma', 'calendario', 'agenda', 'planning', 'planificación', 'planificacion',
      'estimación de tiempo', 'estimacion de tiempo', 'tiempo estimado',
      'en cuánto tiempo', 'en cuanto tiempo', 'en cuántos días', 'en cuantos dias',
      'en cuántas semanas', 'en cuantas semanas', 'en cuántos meses', 'en cuantos meses',
      'cuánto tiempo lleva', 'cuanto tiempo lleva', 'cuánto tiempo necesitáis', 'cuanto tiempo necesitais',
      'cuánto tardáis', 'cuanto tardais', 'cuánto tiempo se necesita', 'cuanto tiempo se necesita',
      'periodo', 'período', 'etapa', 'fase', 'fases del proyecto',
      'cuando puedo tenerlo', 'para cuando', 'lo necesito para', 'tengo prisa',
      'tarda mucho', 'es largo', 'cuanto se alarga', 'hasta cuando',
      'entrega', 'entregar', 'disponible', 'finalización', 'finalizacion',
      'cuánto tarda web', 'cuanto tarda web', 'cuánto tarda seo', 'cuanto tarda seo',
      'cuánto tarda digitalización', 'cuanto tarda digitalizacion',
      'tiempo medio', 'tiempo promedio', 'normalmente cuanto'
    ],
    response: '⏱️ Los plazos dependen del proyecto:\n\n🚀 **Landing page**: 2-3 semanas\n💼 **Web corporativa**: 4-6 semanas\n🛒 **Ecommerce**: 6-8 semanas\n🔍 **Auditoría IT**: 1-2 semanas\n📈 **SEO**: Resultados en 3-6 meses\n\n**Ventaja Gutnes**: Metodología ágil con entregas incrementales. ¡Ves avances cada semana!\n\n💡 **También puedes preguntar:**\n• ¿Cuánto cuesta?\n• ¿Puedo acelerar el proceso?\n• ¿Cómo contacto con vosotros?'
  },

  // ==================== CONTACTO ====================
  {
    category: 'contacto',
    priority: 10,
    keywords: [
      'contacto', 'contactar', 'hablar', 'comunicar', 'teléfono', 'telefono', 'llamar',
      'email', 'correo', 'mail', 'escribir', 'mensaje', 'whatsapp'
    ],
    response: '📞 **¡Hablemos de tu proyecto!**\n\n📧 Email: info@gutnes.es\n☎️ Teléfono 1: +34 618 024 192\n☎️ Teléfono 2: +34 685 579 928\n⏰ Disponibilidad: 24/7\n\n💡 **También puedes preguntar:**\n• ¿Dónde estáis ubicados?\n• ¿Qué servicios ofrecéis?\n• ¿Cuánto cuesta un proyecto?'
  },

  // ==================== UBICACIÓN ====================
  {
    category: 'ubicacion',
    priority: 8,
    keywords: [
      'dónde estáis', 'donde estais', 'ubicación', 'ubicacion', 'dirección', 'direccion',
      'oficina', 'visitar', 'cómo llegar', 'como llegar', 'alcalá', 'alcala', 'madrid'
    ],
    response: '📍 **Estamos en Alcalá de Guadaíra, Sevilla:**\n\n🏢 Avenida Antonio Mairena 18\n📮 41500, Alcalá de Guadaíra\n🚗 Fácil acceso y parking cercano\n\n💡 **También puedes preguntar:**\n• ¿Cómo contacto con vosotros?\n• ¿Podéis visitarme?\n• ¿Qué servicios ofrecéis?'
  },

  // ==================== CASOS DE ÉXITO ====================
  {
    category: 'casos',
    priority: 7,
    keywords: [
      'casos', 'ejemplos', 'proyectos', 'portfolio', 'portafolio', 'trabajos',
      'clientes', 'referencias', 'testimonios', 'opiniones', 'reseñas', 'resenas',
      'experiencia', 'resultados', 'éxito', 'exito'
    ],
    response: '🏆 **Casos de éxito reales:**\n\n✅ **Polvero el Vivo** (Construcción): +200% consultas web en 3 meses\n✅ **TechRetail S.L.**: Sistema de gestión que redujo costes un 40%\n✅ **Innovatech**: Auditoría que evitó brechas de seguridad críticas\n\nTodos nuestros clientes valoran:\n⭐⭐⭐⭐⭐ Profesionalidad\n⭐⭐⭐⭐⭐ Soporte excepcional\n⭐⭐⭐⭐⭐ Resultados medibles\n\n💡 **También puedes preguntar:**\n• ¿Qué servicios ofrecéis?\n• ¿Cuánto cuesta?\n• ¿Cómo contacto con vosotros?'
  },

  // ==================== TECNOLOGÍAS ====================
  {
    category: 'tecnologia',
    priority: 6,
    keywords: [
      'tecnología', 'tecnologia', 'tecnologías', 'tecnologias', 'herramientas',
      'framework', 'lenguaje', 'programación', 'programacion', 'stack',
      'next.js', 'react', 'typescript', 'tailwind', 'node'
    ],
    response: '⚙️ Trabajamos con **tecnología de vanguardia**:\n\n💻 Next.js 16 + React + TypeScript\n🎨 Tailwind CSS para diseños modernos\n☁️ Cloud (AWS, Azure, Google Cloud)\n🔐 Seguridad de última generación\n📱 PWA (Progressive Web Apps)\n\n**¿Por qué importa?** Tecnología moderna = webs más rápidas, seguras y escalables.\n\n💡 **También puedes preguntar:**\n• ¿Qué servicios ofrecéis?\n• ¿Cuánto cuesta?\n• Ver casos de éxito'
  },

  // ==================== MANTENIMIENTO Y SOPORTE ====================
  {
    category: 'soporte',
    priority: 7,
    keywords: [
      'mantenimiento', 'soporte', 'soporte técnico', 'soporte tecnico', 'ayuda técnica', 'ayuda tecnica',
      'actualización', 'actualizacion', 'actualizar', 'monitoreo', 'backup', 'copias de seguridad'
    ],
    response: '🛠️ **Mantenimiento y Soporte IT 24/7:**\n\n✅ Actualizaciones automáticas\n✅ Monitoreo proactivo\n✅ Backups diarios\n✅ Soporte técnico prioritario\n✅ Mejoras de seguridad continuas\n\n**No te preocupes por la tecnología**, nosotros la gestionamos mientras tú te enfocas en tu negocio.\n\n💡 **También puedes preguntar:**\n• ¿Cuánto cuesta el mantenimiento?\n• ¿Qué incluye el servicio?\n• ¿Cómo contacto con vosotros?'
  },

  // ==================== COMPETENCIA Y COMPARATIVAS ====================
  {
    category: 'diferenciacion',
    priority: 7,
    keywords: [
      'por qué vosotros', 'por que vosotros', 'por qué gutnes', 'por que gutnes',
      'diferencia', 'mejor que', 'ventajas', 'beneficios', 'qué os hace diferentes', 'que os hace diferentes',
      'competencia', 'alternativas', 'comparar'
    ],
    response: '🌟 **¿Por qué elegir Gutnes?**\n\n💙 Equipo multidisciplinar con experiencia real\n🏡 Empresa local de Alcalá (cercanía y compromiso)\n📊 Resultados medibles y transparentes\n🤝 Acompañamiento durante todo el proceso\n⚡ Respuesta rápida (no esperas días)\n💡 Soluciones personalizadas (nada de plantillas)\n\n**No somos una agencia más**: Somos tu socio tecnológico.\n\n💡 **También puedes preguntar:**\n• Ver casos de éxito\n• ¿Qué servicios ofrecéis?\n• ¿Cómo contacto con vosotros?'
  },

  // ==================== SECTORES Y NICHOS ====================
  {
    category: 'sectores',
    priority: 6,
    keywords: [
      'sector', 'sectores', 'industria', 'nicho', 'especialidad', 'vertical',
      'construcción', 'construccion', 'retail', 'comercio', 'restaurante', 'hotel',
      'médico', 'medico', 'salud', 'educación', 'educacion', 'legal', 'abogados'
    ],
    response: '🎯 Trabajamos con empresas de **todos los sectores:**\n\n🏗️ Construcción y reformas\n🛒 Retail y comercio\n🍽️ Restauración y hostelería\n⚕️ Salud y clínicas\n📚 Educación y formación\n⚖️ Servicios legales\n🏭 Industria y manufactura\n\n**Cada sector tiene sus particularidades**, y las conocemos. Adaptamos la solución a TU mercado específico.\n\n💡 **También puedes preguntar:**\n• Ver casos de éxito\n• ¿Qué servicios ofrecéis?\n• ¿Cuánto cuesta?'
  },

  // ==================== GARANTÍAS Y CONFIANZA ====================
  {
    category: 'garantias',
    priority: 7,
    keywords: [
      'garantía', 'garantia', 'garantías', 'garantias', 'seguro', 'confianza', 'fiable',
      'riesgo', 'prueba', 'demo', 'demostración', 'demostracion'
    ],
    response: '✅ **Trabajar con Gutnes es seguro:**\n\n🔒 Contrato claro y transparente\n📋 Entregables definidos desde el inicio\n💯 Garantía de satisfacción\n🎁 Primera consultoría gratuita\n📊 Informes de progreso semanales\n♻️ Revisiones ilimitadas en fase de aprobación\n\n**Cero riesgo**: Si no estás satisfecho en la primera fase, no continúas. Simple. ¿Empezamos con esa consultoría gratuita?'
  },

  // ==================== PREGUNTAS TÉCNICAS GENERALES ====================
  {
    category: 'tecnica_general',
    priority: 5,
    keywords: [
      'hosting', 'dominio', 'servidor', 'base de datos', 'bbdd', 'https', 'ssl',
      'certificado', 'seguridad web', 'velocidad', 'rendimiento', 'performance'
    ],
    response: '🔧 **Aspecto técnico:**\n\nSí, nos encargamos de TODO:\n\n🌐 Registro de dominio\n☁️ Hosting optimizado\n🔐 Certificado SSL (HTTPS)\n⚡ CDN para máxima velocidad\n📧 Emails corporativos\n🗄️ Bases de datos seguras\n\n**Todo incluido en tu proyecto**. No necesitas conocimientos técnicos, solo enfócate en tu negocio. ¿Tienes dudas técnicas específicas?'
  },

  // ==================== FORMACIÓN Y CAPACITACIÓN ====================
  {
    category: 'formacion',
    priority: 6,
    keywords: [
      'formación', 'formacion', 'capacitación', 'capacitacion', 'aprender', 'enseñar',
      'curso', 'tutorial', 'entrenar', 'educar', 'explicar', 'cómo usar', 'como usar'
    ],
    response: '📚 **¡Por supuesto! Incluimos formación:**\n\n👨‍🏫 Sesiones de capacitación para tu equipo\n📖 Manuales de usuario personalizados\n🎥 Videotutoriales paso a paso\n💬 Soporte continuo post-entrega\n\nNo te dejamos solo con la tecnología. **Te enseñamos a sacarle el máximo partido**. ¿Tu equipo necesita formación específica?'
  },

  // ==================== PRESENCIA ONLINE Y REDES SOCIALES ====================
  {
    category: 'marketing_digital',
    priority: 6,
    keywords: [
      'redes sociales', 'facebook', 'instagram', 'linkedin', 'twitter', 'tiktok',
      'social media', 'marketing digital', 'publicidad', 'ads', 'google ads', 'facebook ads',
      'contenido', 'posts', 'community manager'
    ],
    response: '📱 **Marketing Digital y Redes Sociales:**\n\nAunque nos especializamos en desarrollo web y digitalización, **trabajamos con partners** para:\n\n📣 Gestión de redes sociales\n💰 Publicidad digital (Google Ads, Meta Ads)\n✍️ Creación de contenido\n\nPodemos coordinar una **estrategia integral** para tu presencia online. ¿Quieres que coordinemos todo tu marketing digital?'
  },

  // ==================== PYMES Y EMPRENDEDORES ====================
  {
    category: 'pymes',
    priority: 7,
    keywords: [
      'pyme', 'pymes', 'pequeña empresa', 'pequena empresa', 'autónomo', 'autonomo',
      'emprendedor', 'startup', 'start-up', 'comenzando', 'nuevo negocio'
    ],
    response: '🚀 **¡PYMES y emprendedores, esto es para vosotros!**\n\nEntendemos vuestros retos:\n\n💰 Presupuestos ajustados\n⏰ Necesidad de resultados rápidos\n📈 Ganas de crecer\n🎯 Competir con grandes empresas\n\n**Ofrecemos:**\n✅ Planes especiales para PYMES\n✅ Pagos flexibles\n✅ Escalabilidad (crece con tu negocio)\n✅ Tecnología de gran empresa a precio justo\n\nEmpezaste tu negocio con pasión, nosotros te damos la tecnología para crecer. ¿Hablamos?'
  },

  // ==================== URGENCIAS Y EMERGENCIAS ====================
  {
    category: 'urgente',
    priority: 10,
    keywords: [
      'urgente', 'emergencia', 'ya', 'ahora', 'inmediato', 'rápido', 'rapido',
      'caído', 'caido', 'no funciona', 'error', 'problema grave', 'hackeado'
    ],
    response: '🚨 **¿Tienes una urgencia?**\n\n**LLÁMANOS AHORA:**\n☎️ +34 618 024 192\n☎️ +34 685 579 928\n\nEstamos disponibles 24/7 para emergencias:\n⚡ Web caída\n🔒 Problemas de seguridad\n💥 Errores críticos\n🆘 Soporte inmediato\n\n**NO esperes**, marca ahora. Cada minuto cuenta en una emergencia tecnológica.'
  },

  // ==================== SALUDOS Y CORTESÍA ====================
  {
    category: 'saludo',
    priority: 5,
    keywords: [
      'hola', 'buenos días', 'buenos dias', 'buenas tardes', 'buenas noches',
      'hey', 'saludos', 'qué tal', 'que tal', 'cómo estás', 'como estas'
    ],
    response: '¡Hola! 👋 Soy el asistente virtual de Gutnes. Estoy aquí para ayudarte con:\n\n• Información sobre nuestros servicios\n• Presupuestos y consultas\n• Casos de éxito\n• Contacto con el equipo\n\n¿En qué puedo ayudarte hoy?'
  },

  // ==================== DESPEDIDAS ====================
  {
    category: 'despedida',
    priority: 5,
    keywords: [
      'adiós', 'adios', 'chao', 'hasta luego', 'nos vemos', 'gracias', 'ok', 'vale', 'perfecto'
    ],
    response: '¡Hasta pronto! 😊 Si necesitas algo más, aquí estaré. \n\nRecuerda:\n📧 info@gutnes.es\n☎️ +34 618 024 192\n\n¡Que tengas un excelente día!'
  },

  // ==================== TEMAS GENERALES (con redirección a servicios) ====================
  {
    category: 'redireccion_negocio',
    priority: 4,
    keywords: [
      'ventas', 'clientes', 'negocio', 'facturación', 'facturacion', 'crecer',
      'aumentar', 'mejorar', 'productividad', 'eficiencia', 'competitivo'
    ],
    response: '📊 **Aumentar ventas y eficiencia es justo lo que hacemos:**\n\nUna buena presencia digital + procesos automatizados = más clientes y menos costes.\n\n¿Cómo te ayudamos?\n🌐 **Web optimizada** → Más visitas, más ventas\n📈 **SEO** → Clientes te encuentran en Google\n🤖 **Automatización** → Tu equipo se enfoca en vender\n\n¿Qué área de tu negocio quieres potenciar primero?'
  },

  // ==================== PREGUNTAS PARA PERSONAS SIN CONOCIMIENTOS TÉCNICOS ====================
  
  {
    category: 'basico_que_haceis',
    priority: 8,
    keywords: [
      'no entiendo', 'no se', 'explícame', 'explicame', 'fácil', 'facil', 'simple',
      'para tontos', 'no entiendo nada', 'que significa', 'que quiere decir',
      'como funciona', 'que es eso', 'no se de informatica', 'no se de ordenadores'
    ],
    response: '😊 **Te lo explico de forma sencilla:**\n\n🏪 **Imagina que tienes una tienda física.** Nosotros:\n\n✅ Creamos tu **escaparate en internet** (tu página web)\n✅ Hacemos que **la gente te encuentre** cuando buscan en Google\n✅ Organizamos mejor tu **papeleo y tareas** con el ordenador\n✅ Revisamos que tu **ordenador esté seguro** y funcione bien\n\n**En resumen:** Ayudamos a que tu negocio esté en internet y funcione mejor. ¿Qué parte te interesa más?'
  },

  {
    category: 'basico_necesito_web',
    priority: 8,
    keywords: [
      'necesito una página', 'necesito una pagina', 'quiero aparecer en internet',
      'quiero estar en google', 'la gente no me encuentra', 'no tengo web',
      'mi competencia sale en google', 'como me ven en internet',
      'quiero que me vean online', 'quiero vender por internet'
    ],
    response: '🌐 **¡Perfecto! Crear tu presencia en internet es muy fácil:**\n\n**Lo que necesitas es una página web.** Es como tu **tienda abierta 24/7** donde:\n\n✅ Los clientes te encuentran cuando buscan en Google\n✅ Ven tus productos/servicios en fotos\n✅ Pueden contactarte o comprar directamente\n✅ Funciona desde el móvil, tablet u ordenador\n\n**Nosotros nos encargamos de TODO:**\n• El diseño bonito\n• Las fotos y textos\n• Que funcione bien\n• Que aparezca en Google\n\n**Desde 2-3 semanas tienes tu web lista.** ¿Hablamos de tu proyecto?'
  },

  {
    category: 'basico_que_es_seo',
    priority: 7,
    keywords: [
      'que es seo', 'no se que es seo', 'seo que significa', 'posicionamiento que es',
      'como salgo primero en google', 'por que no aparezco en google',
      'mi competencia sale primera', 'como me buscan', 'aparecer en busquedas'
    ],
    response: '📍 **Te explico el SEO de forma simple:**\n\n**Cuando alguien busca en Google** algo relacionado con tu negocio (ej: "fontanero Madrid"), aparece una lista de resultados, ¿verdad?\n\n**El SEO es hacer que TÚ salgas PRIMERO** en esa lista.\n\n¿Por qué importa?\n👉 El 75% de personas solo mira la primera página\n👉 Los primeros resultados se llevan la mayoría de clientes\n👉 Es publicidad gratis las 24 horas\n\n**¿Cómo lo hacemos?**\n✅ Optimizamos tu web con las palabras que busca la gente\n✅ Mejoramos tu reputación online\n✅ Hacemos que Google confíe en ti\n\n**Resultado:** Más clientes te encuentran sin pagar por anuncios. ¿Te interesa?'
  },

  {
    category: 'basico_digitalizacion',
    priority: 7,
    keywords: [
      'mucho papeleo', 'papeles', 'facturas en papel', 'archivo lleno',
      'todo manual', 'pierdo tiempo', 'desorganizado', 'no encuentro documentos',
      'hago todo a mano', 'tardo mucho', 'proceso lento'
    ],
    response: '📂 **¡Ah! Necesitas DIGITALIZACIÓN. Te explico:**\n\n**Ejemplo práctico:**\n\n❌ **ANTES:** Facturas en papel → buscar en archivador → fotocopiar → archivar → se pierden\n✅ **DESPUÉS:** Todo en el ordenador → buscar en 2 segundos → enviar por email → nunca se pierden\n\n**Qué hacemos por ti:**\n\n🔄 Pasamos todo tu papeleo al ordenador\n⚡ Automatizamos tareas repetitivas (facturas, pedidos...)\n☁️ Lo guardamos seguro en la nube (accesible desde cualquier sitio)\n🎯 Tu equipo ahorra HORAS cada semana\n\n**Resultado real:** Un cliente nuestro pasó de 3 horas de papeleo al día a solo 30 minutos.\n\n¿Visitamos tu negocio para ver qué podemos mejorar? (Es gratis)'
  },

  {
    category: 'basico_seguridad',
    priority: 7,
    keywords: [
      'me pueden hackear', 'estoy seguro', 'tengo miedo', 'virus',
      'roban datos', 'ciberataque', 'proteger mi negocio', 'me preocupa la seguridad',
      'contraseñas', 'datos seguros', 'copias de seguridad'
    ],
    response: '🔒 **Muy buena pregunta. La seguridad es MUY importante:**\n\n**Te lo explico con ejemplos:**\n\n⚠️ **Riesgos reales:**\n• Un virus puede borrar todo tu trabajo\n• Hackean y roban datos de clientes\n• Tu ordenador deja de funcionar sin aviso\n• Pierdes años de información\n\n✅ **Cómo te protegemos:**\n• **Copias de seguridad automáticas** (si algo se borra, lo recuperamos)\n• **Antivirus profesional** (bloquea amenazas antes de que entren)\n• **Contraseñas seguras** (imposibles de adivinar)\n• **Revisión completa** de tu sistema (encontramos problemas antes de que ocurran)\n\n**Hacemos una Auditoría IT** = revisión completa como un "chequeo médico" de tu tecnología.\n\n**1-2 semanas y sabes exactamente qué mejorar.** ¿Te hacemos una evaluación?'
  },

  {
    category: 'basico_diferencia_servicios',
    priority: 6,
    keywords: [
      'diferencia entre', 'cual necesito', 'que me conviene', 'cual es mejor para mi',
      'no se cual elegir', 'que me recomiendas', 'estoy perdido', 'no se por donde empezar'
    ],
    response: '🤔 **Te ayudo a elegir lo que necesitas:**\n\n**PREGÚNTATE:**\n\n❓ **"Quiero que me encuentren en internet"**\n→ Necesitas: **Web + SEO**\n\n❓ **"Tengo mucho papeleo y desorden"**\n→ Necesitas: **Digitalización**\n\n❓ **"Mi ordenador va lento / tengo miedo a virus"**\n→ Necesitas: **Auditoría IT**\n\n❓ **"Quiero vender online"**\n→ Necesitas: **Tienda Online (Ecommerce)**\n\n❓ **"No sé qué necesito exactamente"**\n→ **SOLUCIÓN:** Hablamos 15 minutos por teléfono (gratis) y te orientamos.\n\n📞 Llámanos: +34 618 024 192\n📧 O escríbenos: info@gutnes.es\n\n**Sin compromiso, solo te asesoramos.** ¿Te parece?'
  },

  {
    category: 'basico_miedo_tecnologia',
    priority: 6,
    keywords: [
      'no se usar', 'no entiendo de ordenadores', 'soy mayor', 'me da miedo',
      'no se de tecnologia', 'es muy complicado', 'no sabré usarlo',
      'me cuesta aprender', 'soy de los de antes', 'no me aclaro'
    ],
    response: '😊 **¡Tranquilo/a! Esto es MUY normal y tenemos la solución:**\n\n**No necesitas saber de ordenadores.** Nosotros:\n\n1️⃣ **Lo hacemos TODO por ti** (tú no tocas nada técnico)\n2️⃣ **Te enseñamos** de forma MUY sencilla cómo usarlo\n3️⃣ **Te damos manuales** con fotos paso a paso\n4️⃣ **Estamos siempre disponibles** si tienes dudas (llamas y te ayudamos)\n\n**Ejemplo real:**\n👴 Uno de nuestros clientes de 68 años ahora actualiza su web él solo desde el móvil.\n\n**¿El secreto?**\n✅ Todo súper simple\n✅ Botones grandes y claros\n✅ Nosotros te guiamos\n\n**No estás solo/a en esto.** Somos tu equipo de apoyo. ¿Hablamos sin compromiso?'
  },

  {
    category: 'basico_costo_beneficio',
    priority: 7,
    keywords: [
      'vale la pena', 'merece la pena', 'es rentable', 'recupero la inversion',
      'es caro', 'no tengo dinero', 'presupuesto ajustado', 'justificar gasto',
      'por que invertir', 'que gano', 'beneficios reales'
    ],
    response: '💡 **Excelente pregunta. Te lo explico con números REALES:**\n\n**EJEMPLO: Una web + SEO**\n\n💰 **Inversión:** Supongamos 2.000€ (depende del proyecto)\n\n📈 **Retorno:**\n• Solo necesitas **5-10 clientes nuevos** al año para recuperarlo\n• Una web trabaja **24/7 sin descanso**\n• El SEO te trae clientes **GRATIS** (no pagas por cada clic como en anuncios)\n\n**CASO REAL - Cliente nuestro:**\n🏗️ Polvero el Vivo (construcción)\n• Inversión: Web nueva\n• Resultado: **+200% consultas** en 3 meses\n• Recuperó inversión: **En 2 meses**\n\n**¿La clave?**\n✅ Tu competencia YA está en internet\n✅ Los clientes buscan PRIMERO en Google\n✅ Sin web = pierdes clientes que van a la competencia\n\n**Tenemos planes desde pequeños negocios.** ¿Hablamos de tu presupuesto?'
  },

  {
    category: 'basico_que_incluye',
    priority: 6,
    keywords: [
      'que incluye', 'que entra', 'que me dais', 'viene con', 'esta incluido',
      'tengo que pagar aparte', 'que me llevaré', 'que recibo'
    ],
    response: '📦 **Todo incluido, sin sorpresas:**\n\n**PÁGINA WEB incluye:**\n✅ Diseño personalizado (único para ti)\n✅ Todas las fotos y textos\n✅ Formulario de contacto\n✅ Versión móvil + tablet + ordenador\n✅ Certificado de seguridad (HTTPS)\n✅ Hosting + dominio (alojamiento web)\n✅ Emails corporativos (@tunegocio.com)\n✅ Formación para que sepas usarla\n✅ 1 mes de soporte gratis\n\n**DIGITALIZACIÓN incluye:**\n✅ Visita a tu empresa\n✅ Análisis completo de procesos\n✅ Plan de mejora personalizado\n✅ Implementación de soluciones\n✅ Formación de tu equipo\n✅ Soporte continuo\n\n**SEO incluye:**\n✅ Estudio de palabras clave\n✅ Optimización completa\n✅ Informes mensuales\n✅ Seguimiento de posiciones\n\n**Sin letra pequeña. Todo claro desde el inicio.** ¿Qué servicio te interesa?'
  },

  {
    category: 'basico_mantenimiento',
    priority: 6,
    keywords: [
      'después que', 'cuando termine', 'y luego', 'me lo dais y ya',
      'tengo que hacer algo', 'me desentiendo', 'necesito mantenimiento',
      'se estropea', 'deja de funcionar', 'quien lo cuida'
    ],
    response: '🛠️ **Muy buena pregunta:**\n\n**Después de entregar tu proyecto:**\n\n🎯 **OPCIÓN 1: Tú decides no hacer nada**\n• La web funciona sola\n• Solo si quieres cambiar algo, nos llamas\n• Sin pagos mensuales obligatorios\n\n🎯 **OPCIÓN 2: Nosotros lo gestionamos (recomendado)**\n• **Mantenimiento mensual** desde 50€/mes\n• Actualizaciones automáticas\n• Copias de seguridad diarias\n• Soporte prioritario\n• Cambios y mejoras incluidos\n• Monitoreo 24/7\n\n**¿Qué pasa si algo falla?**\n✅ Nos llamas y lo arreglamos\n✅ Si tienes mantenimiento → gratis\n✅ Si no tienes mantenimiento → lo arreglamos con coste puntual\n\n**Ejemplo:**\n🏢 El 80% de nuestros clientes eligen mantenimiento porque prefieren **tranquilidad total.**\n\n¿Te interesa con o sin mantenimiento?'
  },

  {
    category: 'basico_cuanto_tarda_explicado',
    priority: 6,
    keywords: [
      'cuando lo tendré', 'cuando lo tendre', 'cuando estará listo', 'cuando estara listo',
      'cuanto se tarda', 'es muy largo', 'tarda mucho', 'lo necesito pronto'
    ],
    response: '⏰ **Plazos explicados de forma clara:**\n\n**🚀 LANDING PAGE (página simple)**\n• Tiempo: 2-3 semanas\n• Ideal para: Presentar tu negocio básico\n\n**🏢 WEB CORPORATIVA (completa)**\n• Tiempo: 4-6 semanas\n• Ideal para: Negocio profesional con varias secciones\n\n**🛒 TIENDA ONLINE**\n• Tiempo: 6-8 semanas\n• Ideal para: Vender productos por internet\n\n**¿Por qué tarda ese tiempo?**\n1. Diseñamos varias opciones (tú eliges)\n2. Creamos los textos y ponemos fotos\n3. Programamos todo para que funcione\n4. Tú lo pruebas y pedimos cambios si hace falta\n5. Lo publicamos en internet\n\n**BUENA NOTICIA:**\n✅ Ves avances cada semana\n✅ Puedes pedir cambios durante el proceso\n✅ No esperas todo el tiempo sin ver nada\n\n**¿Tienes urgencia?** Podemos priorizar tu proyecto. ¿Hablamos?'
  },

  {
    category: 'basico_local_cercania',
    priority: 7,
    keywords: [
      'sois de aquí', 'sois de aqui', 'sois locales', 'estais cerca', 'puedo visitaros',
      'venís a verme', 'venis a verme', 'nos vemos en persona', 'reunion presencial',
      'prefiero en persona', 'cara a cara'
    ],
    response: '🏡 **¡Sí! Somos de Alcalá de Guadaíra, empresa local:**\n\n📍 **Nuestra oficina:**\nAvenida Antonio Mairena 18, 41500\nAlcalá de Guadaíra, Sevilla\n\n**Ventajas de ser locales:**\n\n✅ **Nos conocemos en persona** (café y hablamos tranquilos)\n✅ **Visitamos tu negocio** para entenderlo mejor\n✅ **Cercanía y confianza** (no somos una empresa en la otra punta de España)\n✅ **Soporte rápido** (si hay urgencia, vamos en persona)\n✅ **Conocemos la zona** y el mercado local\n\n**¿Prefieres reunión presencial?**\n\n🤝 Opción 1: **Vienes a nuestra oficina**\n🚗 Opción 2: **Vamos nosotros a tu negocio** (sin coste)\n☎️ Opción 3: **Videollamada** (si prefieres online)\n\n¿Qué día te viene bien para vernos?'
  }
];

// Función auxiliar para normalizar texto (quitar acentos, ñ, etc.)
function normalizeText(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") // Eliminar acentos
    .replace(/ñ/g, 'n')
    .trim();
}

// Función auxiliar para calcular similitud entre textos (algoritmo simple)
function calculateSimilarity(text1: string, text2: string): number {
  const words1 = text1.split(/\s+/);
  const words2 = text2.split(/\s+/);
  
  let matches = 0;
  words1.forEach(word1 => {
    if (word1.length > 2) { // Ignorar palabras muy cortas
      words2.forEach(word2 => {
        if (word2.length > 2 && (
          word1.includes(word2) || 
          word2.includes(word1) ||
          levenshteinDistance(word1, word2) <= 2
        )) {
          matches++;
        }
      });
    }
  });
  
  return matches / Math.max(words1.length, words2.length);
}

// Algoritmo de Levenshtein para detectar palabras similares (errores de tipeo)
function levenshteinDistance(str1: string, str2: string): number {
  const len1 = str1.length;
  const len2 = str2.length;
  const matrix: number[][] = [];

  for (let i = 0; i <= len1; i++) {
    matrix[i] = [i];
  }

  for (let j = 0; j <= len2; j++) {
    matrix[0][j] = j;
  }

  for (let i = 1; i <= len1; i++) {
    for (let j = 1; j <= len2; j++) {
      const cost = str1[i - 1] === str2[j - 1] ? 0 : 1;
      matrix[i][j] = Math.min(
        matrix[i - 1][j] + 1,
        matrix[i][j - 1] + 1,
        matrix[i - 1][j - 1] + cost
      );
    }
  }

  return matrix[len1][len2];
}

// Función para detectar intención del usuario
function detectIntent(msg: string): { intent: string; confidence: number } {
  const normalizedMsg = normalizeText(msg);
  
  // Patrones de intención
  const intentPatterns = {
    greeting: ['hola', 'buenas', 'hey', 'saludos', 'que tal'],
    farewell: ['adios', 'chao', 'hasta luego', 'nos vemos', 'gracias'],
    question_who: ['quien', 'quienes', 'que es gutnes', 'sobre gutnes', 'conocer'],
    question_what: ['que haceis', 'que ofreceis', 'servicios', 'soluciones'],
    question_price: ['precio', 'cuesta', 'coste', 'presupuesto', 'tarifa'],
    question_time: ['tiempo', 'tarda', 'plazo', 'cuando', 'rapidez'],
    question_contact: ['contacto', 'telefono', 'email', 'llamar', 'escribir'],
    question_location: ['donde', 'ubicacion', 'direccion', 'oficina', 'alcala'],
    request_help: ['ayuda', 'necesito', 'quiero', 'busco', 'me interesa'],
    urgent: ['urgente', 'emergencia', 'ya', 'ahora', 'inmediato']
  };

  let bestIntent = 'unknown';
  let maxConfidence = 0;

  Object.entries(intentPatterns).forEach(([intent, patterns]) => {
    const matches = patterns.filter(pattern => normalizedMsg.includes(pattern)).length;
    const confidence = matches / patterns.length;
    
    if (confidence > maxConfidence) {
      maxConfidence = confidence;
      bestIntent = intent;
    }
  });

  return { intent: bestIntent, confidence: maxConfidence };
}

// Función mejorada para encontrar la mejor respuesta
export function findBestResponse(userMessage: string): string {
  const msg = userMessage.toLowerCase().trim();
  const normalizedMsg = normalizeText(msg);
  
  // Manejar mensajes muy cortos (una sola palabra)
  if (msg.split(/\s+/).length === 1 && msg.length < 15) {
    const singleWordResponses: Record<string, string> = {
      'hola': '¡Hola! 👋 Soy el asistente virtual de Gutnes. ¿En qué puedo ayudarte?',
      'info': '📋 Puedo darte información sobre:\n\n• Nuestros servicios\n• Precios y presupuestos\n• Plazos de entrega\n• Contacto\n• Ubicación\n\n¿Qué te gustaría saber?',
      'servicios': '💼 Ofrecemos:\n\n🔹 **Digitalización Empresarial** - Automatización de procesos\n🔹 **Auditoría Informática** - Seguridad IT\n🔹 **Desarrollo Web** - Sitios modernos y rápidos\n🔹 **Posicionamiento SEO** - Primeros en Google\n🔹 **Mantenimiento IT** - Soporte 24/7\n\n¿Cuál te interesa?',
      'precio': '💰 Los precios varían según el proyecto. ¿Qué servicio te interesa? (web, SEO, digitalización, auditoría...)',
      'precios': '💰 Los precios varían según el proyecto. ¿Qué servicio te interesa? (web, SEO, digitalización, auditoría...)',
      'web': '🌐 Creamos sitios web profesionales, rápidos y optimizados. ¿Quieres saber el proceso, el precio o ver ejemplos?',
      'seo': '📈 Nuestro servicio SEO te posiciona en Google. ¿Quieres saber cómo funciona, cuánto cuesta o cuánto tarda?',
      'contacto': '📞 **Contacta con nosotros:**\n\n📧 info@gutnes.es\n☎️ +34 618 024 192\n☎️ +34 685 579 928\n📍 Avenida Antonio Mairena 18, Alcalá de Guadaíra\n⏰ Disponibles 24/7',
      'ayuda': '🆘 ¿En qué necesitas ayuda? Puedo informarte sobre servicios, precios, plazos, contacto... ¡Pregúntame!',
      'urgente': '🚨 **URGENCIA - Llámanos YA:**\n☎️ +34 618 024 192\n☎️ +34 685 579 928\n\n¡Estamos disponibles 24/7!',
      'tiempo': '⏱️ Los plazos típicos son:\n\n• Landing page: 2-3 semanas\n• Web corporativa: 4-6 semanas\n• Ecommerce: 6-8 semanas\n• Auditoría IT: 1-2 semanas\n• SEO: 3-6 meses para resultados\n\n¿Qué proyecto tienes en mente?',
      'donde': '📍 Estamos en **Alcalá de Guadaíra:**\n\n🏢 Avenida Antonio Mairena 18\n📮 41500, Alcalá de Guadaíra, Sevilla\n\n¿Quieres visitarnos o prefieres una llamada?',
      'gracias': '😊 ¡De nada! ¿Hay algo más en lo que pueda ayudarte?',
      'ok': '👍 ¿Necesitas algo más?',
      'vale': '👍 ¿Algo más en lo que pueda ayudarte?',
      'si': '😊 Perfecto. ¿En qué más puedo ayudarte?',
      'no': '👌 Entendido. Si cambias de opinión o tienes dudas, aquí estoy. También puedes escribirnos a info@gutnes.es',
      'adios': '👋 ¡Hasta pronto! Si necesitas algo:\n📧 info@gutnes.es\n☎️ +34 618 024 192',
      'chao': '👋 ¡Hasta luego! Cuando quieras, aquí estamos: info@gutnes.es o +34 618 024 192'
    };
    
    // Buscar respuesta directa para palabra única
    for (const [key, response] of Object.entries(singleWordResponses)) {
      if (normalizedMsg.includes(normalizeText(key))) {
        return response;
      }
    }
    
    // Si es una palabra corta sin respuesta específica
    return `🤔 "${userMessage}"... ¿podrías darme más detalles? Por ejemplo:\n\n• "¿Qué servicios ofrecéis?"\n• "¿Cuánto cuesta una web?"\n• "¿Cómo os contacto?"\n\nAsí podré ayudarte mejor. 😊`;
  }
  
  // Detectar intención primero
  const { intent, confidence } = detectIntent(msg);
  
  // Buscar coincidencias con sistema de puntuación mejorado
  const matches = chatbotKnowledge
    .map(pattern => {
      let score = 0;
      
      // 1. Coincidencias exactas de keywords (peso alto)
      const exactMatches = pattern.keywords.filter(keyword => 
        normalizedMsg.includes(normalizeText(keyword))
      ).length;
      score += exactMatches * pattern.priority * 3;
      
      // 2. Coincidencias parciales (peso medio)
      const partialMatches = pattern.keywords.filter(keyword => {
        const normalizedKeyword = normalizeText(keyword);
        return normalizedMsg.split(/\s+/).some(word => 
          word.length > 3 && normalizedKeyword.includes(word)
        );
      }).length;
      score += partialMatches * pattern.priority * 1.5;
      
      // 3. Similitud semántica con el mensaje completo
      const semanticScore = pattern.keywords.reduce((acc, keyword) => {
        return acc + calculateSimilarity(normalizedMsg, normalizeText(keyword));
      }, 0);
      score += semanticScore * pattern.priority;
      
      // 4. Bonus por categoría relevante según intención detectada
      const categoryBonus: Record<string, string[]> = {
        question_who: ['identidad'],
        question_what: ['servicios', 'digitalizacion', 'web', 'seo', 'auditoria'],
        question_price: ['precios'],
        question_time: ['plazos'],
        question_contact: ['contacto'],
        question_location: ['ubicacion'],
        urgent: ['urgente']
      };
      
      if (confidence > 0.3 && categoryBonus[intent]?.includes(pattern.category)) {
        score *= 2;
      }
      
      return {
        ...pattern,
        score,
        exactMatches,
        partialMatches
      };
    })
    .filter(match => match.score > 0)
    .sort((a, b) => b.score - a.score);

  // Si hay coincidencias con score significativo
  if (matches.length > 0 && matches[0].score > 5) {
    return matches[0].response;
  }

  // Si hay coincidencias débiles, intentar respuesta contextual
  if (matches.length > 0 && matches[0].score > 2) {
    return matches[0].response + '\n\n¿Necesitas algo más específico?';
  }

  // Respuestas contextuales según intención detectada
  if (confidence > 0.3) {
    switch (intent) {
      case 'greeting':
        return '¡Hola! 👋 Soy el asistente virtual de Gutnes. Estoy aquí para ayudarte con información sobre nuestros servicios, presupuestos, plazos y cualquier duda que tengas. ¿En qué puedo ayudarte?';
      
      case 'farewell':
        return '¡Hasta pronto! 😊 Ha sido un placer ayudarte. Si necesitas algo más, aquí estaré.\n\n📧 info@gutnes.es\n☎️ +34 618 024 192\n\n¡Que tengas un excelente día!';
      
      case 'request_help':
        return '¡Claro! Estoy aquí para ayudarte. 😊 Puedo informarte sobre:\n\n🔹 **Nuestros servicios** (Digitalización, Web, SEO, Auditoría)\n🔹 **Precios y presupuestos**\n🔹 **Plazos de entrega**\n🔹 **Casos de éxito**\n🔹 **Contacto directo con el equipo**\n\n¿Qué te interesa saber?';
      
      case 'urgent':
        return '🚨 **¿Tienes una urgencia?**\n\n**LLÁMANOS AHORA:**\n☎️ +34 618 024 192\n☎️ +34 685 579 928\n\nEstamos disponibles 24/7 para atenderte inmediatamente. **No esperes**, cada minuto cuenta.';
    }
  }

  // Intentar respuesta inteligente basada en palabras clave generales
  const generalKeywords = {
    'desarrollo|programacion|codigo': '💻 Somos expertos en **desarrollo web** con Next.js, React y las tecnologías más modernas. ¿Quieres saber más sobre nuestros proyectos web?',
    'negocio|empresa|pyme': '🚀 Ayudamos a **PYMES y empresas** a crecer digitalmente. Tenemos soluciones adaptadas a tu presupuesto y necesidades. ¿Hablamos de tu proyecto?',
    'marketing|publicidad|redes': '📱 Trabajamos en **marketing digital** coordinando estrategias integrales. ¿Te interesa mejorar tu presencia online?',
    'automatizar|automatizacion|eficiencia': '⚙️ La **automatización** es una de nuestras especialidades. Optimizamos procesos empresariales para que ahorres tiempo y dinero. ¿Quieres ver cómo?',
    'seguridad|proteccion|hackeo': '🔒 La **seguridad** es crítica. Ofrecemos auditorías IT completas para proteger tu infraestructura. ¿Necesitas una evaluación?',
    'web|website|sitio|pagina': '🌐 Creamos **sitios web profesionales** que convierten visitas en clientes. Modernos, rápidos y optimizados para SEO. ¿Necesitas una web nueva?',
    'google|busqueda|encontrar': '📈 El **posicionamiento en Google** es clave. Nuestro servicio SEO te lleva a la primera página. ¿Quieres aparecer primero en las búsquedas?'
  };

  for (const [pattern, response] of Object.entries(generalKeywords)) {
    if (new RegExp(pattern, 'i').test(normalizedMsg)) {
      return response;
    }
  }

  // Respuesta por defecto inteligente con sugerencias
  return `🤔 Interesante pregunta. Déjame ayudarte de otra forma:\n\n**¿Qué te gustaría saber?**\n\n• 🏢 ¿Quiénes somos y qué hacemos?\n• 💼 ¿Qué servicios ofrecemos?\n• 💰 ¿Cuánto cuesta un proyecto?\n• ⏱️ ¿Cuánto tiempo se tarda?\n• 📞 ¿Cómo contactar con nosotros?\n• 🎯 ¿Casos de éxito reales?\n\nO escríbeme de forma más específica y te ayudaré mejor. También puedes contactarnos directamente:\n📧 info@gutnes.es | ☎️ +34 618 024 192`;
}
