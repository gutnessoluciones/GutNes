'use client';

import React, { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, useInView, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import logo from '@/images/logo.png';
import { findBestResponse } from '@/data/chatbotKnowledge';
import CookieBanner from '@/components/CookieBanner';
import {
  Globe,
  Search,
  Code,
  Shield,
  ArrowRight,
  CheckCircle2,
  Users,
  Zap,
  Target,
  Sparkles,
  Mail,
  Phone,
  MapPin,
  Clock,
  Star,
  TrendingUp,
  Rocket,
  Monitor,
  Smartphone,
  Database,
  Cloud,
  Lock,
  BarChart3,
  Settings,
  Cpu,
  MessageCircle,
  X,
  Send,
  Calculator,
  Plus,
  Minus,
  Menu,
  Home,
  Briefcase,
  MessageSquare,
  Layout,
  ShoppingCart,
  Image as ImageIcon,
  BookOpen,
  Layers,
  Facebook,
  Twitter,
  Linkedin,
  Instagram
} from 'lucide-react';

export default function HomePage() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.3], [1, 0.95]);

  // Chatbot state
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState([
    { type: 'bot', text: '¡Hola! 👋 Soy el **Asistente Virtual de Gutnes**. Estoy aquí para resolver todas tus dudas sobre nuestros servicios de digitalización, desarrollo web, SEO y consultoría tecnológica.\n\n💡 **Puedes preguntarme sobre:**\n• Nuestros servicios y soluciones\n• Precios y presupuestos\n• Plazos de entrega\n• Casos de éxito\n• Y mucho más...\n\n¿En qué puedo ayudarte?' }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const chatMessagesEndRef = useRef<HTMLDivElement>(null);

  // Website Visualizer state
  const [isVisualizerOpen, setIsVisualizerOpen] = useState(false);
  const [selectedDevice, setSelectedDevice] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');
  const [selectedWebType, setSelectedWebType] = useState<string>('landing');
  const [activeTheme, setActiveTheme] = useState<string>('default'); // Theme aplicado a la página
  const [tempTheme, setTempTheme] = useState<string>('default'); // Theme temporal en el widget
  const [tempDevice, setTempDevice] = useState<'desktop' | 'tablet' | 'mobile'>('desktop'); // Device temporal
  const [tempPageType, setTempPageType] = useState<string>('landing'); // Tipo de página temporal
  const [activePageType, setActivePageType] = useState<string>('landing'); // Tipo de página activo

  // Multi-Page navigation state
  const [currentPage, setCurrentPage] = useState('inicio');
  
  // E-commerce state
  const [cart, setCart] = useState<any[]>([]);
  const [showCart, setShowCart] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState<any>(null);
  
  // Portfolio state
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [showProjectModal, setShowProjectModal] = useState(false);
  
  // Blog state
  const [selectedArticle, setSelectedArticle] = useState<any>(null);
  const [showArticleModal, setShowArticleModal] = useState(false);
  
  // Dashboard state
  const [dashboardView, setDashboardView] = useState('dashboard');
  
  // One-Page Tabs state
  const [activeTab, setActiveTab] = useState('servicios');
  
  // Contact form state
  const [contactForm, setContactForm] = useState({ name: '', email: '', service: '', message: '' });
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  // Floating navigation state
  const [showFloatingNav, setShowFloatingNav] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const handleScroll = () => {
      setShowFloatingNav(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    {
      icon: Cloud,
      title: "Digitalización Empresarial",
      description: "Visitamos tu empresas y auditamos todos los procesos que se realizan en el día a día, estudiamos y dada nuestra experiencia te ofrecemos soluciones para automatizar y dar una solución eficiente, te acompañamos en el proceso de cambio hacia una empresa más eficiente y aumentamos tu competitividad",
      features: ["Automatización de procesos", "Cloud Computing", "Gestión documental digital"]
    },
    {
      icon: Shield,
      title: "Auditoría Informática",
      description: "Evaluación completa de infraestructura IT para identificar vulnerabilidades y oportunidades de mejora en seguridad y eficiencia. Deja que la informática trabaje para ti y no al revés",
      features: ["Análisis de seguridad", "Evaluación de infraestructura", "Recomendaciones estratégicas"]
    },
    {
      icon: Code,
      title: "Desarrollo Web",
      description: "Diseño y desarrollo de sitios web modernos, responsivos y optimizados con las últimas tecnologías del mercado",
      features: ["Next.js & React", "Diseño responsive", "Performance optimizada"]
    },
    {
      icon: Search,
      title: "Posicionamiento SEO",
      description: "Estrategias de optimización para mejorar la visibilidad en buscadores y atraer tráfico cualificado a tu negocio. Posiciona tu negocio donde merece estar",
      features: ["SEO On-Page", "Link Building", "Análisis de competencia"]
    },
    {
      icon: Settings,
      title: "Mantenimiento y Soporte IT",
      description: "Gestión continua de tus tecnologías con actualizaciones, monitoreo proactivo y mejoras de seguridad. Protegemos tu infraestructura mientras tú te enfocas en tu negocio",
      features: ["Soporte técnico 24/7", "Actualizaciones de sistemas", "Mejoras de seguridad"]
    }
  ];

    const portafolio = [
    {
      name: "Joyeria Cerquera",
      category: "Joyeria",
      description: "Tienda online elegante para joyeria artesanal con diseno sofisticado y catalogo de productos exclusivos",
      image: "https://image.thum.io/get/width/600/crop/400/https://www.joyeriacerquera.es",
      url: "https://www.joyeriacerquera.es"
    },
    {
      name: "Aluria Modas",
      category: "Moda",
      description: "E-commerce de moda con diseno moderno, catalogo dinamico y experiencia de compra optimizada",
      image: "https://image.thum.io/get/width/600/crop/400/https://aluriamodas.es",
      url: "https://aluriamodas.es"
    }
  ];

  const processSteps = [
    {
      number: "01",
      title: "Análisis y Consultoría",
      description: "Reunión inicial para entender tus necesidades, objetivos y definir el alcance del proyecto",
      icon: Target
    },
    {
      number: "02",
      title: "Planificación Estratégica",
      description: "Diseño de la solución técnica, arquitectura y roadmap de implementación",
      icon: Settings
    },
    {
      number: "03",
      title: "Desarrollo e Implementación",
      description: "Ejecución del proyecto con metodología ágil y entregas incrementales",
      icon: Code
    },
    {
      number: "04",
      title: "Lanzamiento y Soporte",
      description: "Deploy a producción, formación del equipo y soporte técnico continuo",
      icon: Rocket
    }
  ];

  const testimonials = [
    {
      name: "Juan Pérez García",
      company: "Polvero el Vivo",
      role: "Director General",
      content: "Gutnes transformó nuestra presencia digital. La nueva web ha incrementado nuestras consultas en un 200% y modernizó completamente nuestra imagen.",
      rating: 5
    },
    {
      name: "María Rodríguez",
      company: "TechRetail S.L.",
      role: "CEO",
      content: "El sistema de gestión que desarrollaron superó nuestras expectativas. Profesionales, puntuales y con un soporte excepcional.",
      rating: 5
    },
    {
      name: "Carlos Martínez",
      company: "Innovatech",
      role: "CTO",
      content: "La auditoría IT reveló aspectos críticos que desconocíamos. Sus recomendaciones nos ahorraron miles de euros en seguridad.",
      rating: 5
    }
  ];

  const stats = [
    { value: "100%", label: "Compromiso" },
    { value: "Premium", label: "Calidad Garantizada" },
    { value: "Ágil", label: "Entregas Rápidas" },
    { value: "24/7", label: "Atención Directa" }
  ];

  // Chatbot responses - 16 preguntas principales
  const quickResponses = [
    "¿Quiénes sois?",
    "¿Qué servicios ofrecéis?",
    "¿Cuánto cuesta?",
    "¿Cuánto tarda?",
    "¿Cómo contacto?",
    "¿Dónde estáis?",
    "Casos de éxito",
    "¿Qué incluye el servicio?",
    "¿Ofrecéis garantías?",
    "¿Qué tecnologías usáis?",
    "¿Dais mantenimiento?",
    "¿Por qué Gutnes?",
    "¿Qué sectores trabajáis?",
    "¿Hacéis SEO?",
    "¿Hacéis webs?",
    "Quiero presupuesto"
  ];

  // Función para manejar el envío del formulario de contacto
  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');

    try {
      const formData = new FormData();
      formData.append('access_key', 'c41c8d05-6a82-461f-8d8e-c6cf3341a119');
      formData.append('name', contactForm.name);
      formData.append('email', contactForm.email);
      formData.append('service', contactForm.service);
      formData.append('message', contactForm.message);
      formData.append('subject', `Nueva consulta de ${contactForm.name} - ${contactForm.service || 'General'}`);
      formData.append('from_name', 'Formulario Web Gutnes');

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setShowSuccessMessage(true);
        setContactForm({ name: '', email: '', service: '', message: '' });
        setTimeout(() => setShowSuccessMessage(false), 5000);
      } else {
        setSubmitError('Hubo un error al enviar el mensaje. Por favor, intenta de nuevo.');
      }
    } catch (error) {
      setSubmitError('Error de conexión. Por favor, verifica tu internet e intenta de nuevo.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    setChatMessages(prev => [...prev, { type: 'user', text: inputMessage }]);
    const userMsg = inputMessage;
    setInputMessage('');
    setIsTyping(true);

    // Auto-scroll al final
    setTimeout(() => {
      chatMessagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 100);

    setTimeout(() => {
      // Usar el sistema de IA del archivo chatbotKnowledge
      const botResponse = findBestResponse(userMsg);

      setIsTyping(false);
      setChatMessages(prev => [...prev, { type: 'bot', text: botResponse }]);
      
      // Auto-scroll después de la respuesta
      setTimeout(() => {
        chatMessagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }, 1500);
  };

  const handleQuickResponse = (response: string) => {
    setInputMessage(response);
  };

  const pageTypes = [
    { 
      id: 'landing', 
      name: 'Landing Page', 
      description: 'Página única de conversión',
      icon: Target
    },
    { 
      id: 'multipage', 
      name: 'Multi-Page', 
      description: 'Sitio web corporativo con menú',
      icon: Layout
    },
    { 
      id: 'ecommerce', 
      name: 'E-commerce', 
      description: 'Tienda online con catálogo',
      icon: ShoppingCart
    },
    { 
      id: 'portfolio', 
      name: 'Portfolio', 
      description: 'Galería de proyectos',
      icon: ImageIcon
    },
    { 
      id: 'blog', 
      name: 'Blog', 
      description: 'Revista digital con artículos',
      icon: BookOpen
    },
    { 
      id: 'dashboard', 
      name: 'Dashboard', 
      description: 'Panel de administración',
      icon: BarChart3
    },
    { 
      id: 'onepage', 
      name: 'One-Page Tabs', 
      description: 'Una página con pestañas',
      icon: Layers
    }
  ];

  const webTypes = [
    { 
      id: 'default', 
      name: 'GutNes Original', 
      description: 'Diseño actual de GutNes',
      icon: Target,
      colors: {
        primary: 'from-amber-400 via-yellow-300 to-amber-500',
        secondary: 'from-cyan-500 to-blue-600',
        bg: 'from-slate-950 via-blue-950 to-slate-900',
        accent: 'amber'
      }
    },
    { 
      id: 'modern', 
      name: 'Moderno Tech', 
      description: 'Estilo tech minimalista',
      icon: Cpu,
      colors: {
        primary: 'from-blue-500 via-indigo-500 to-purple-600',
        secondary: 'from-teal-500 to-cyan-600',
        bg: 'from-slate-900 via-slate-800 to-slate-900',
        accent: 'blue'
      }
    },
    { 
      id: 'corporate', 
      name: 'Corporativo', 
      description: 'Profesional y elegante',
      icon: Briefcase,
      colors: {
        primary: 'from-slate-700 via-slate-600 to-slate-800',
        secondary: 'from-blue-600 to-blue-800',
        bg: 'from-slate-100 via-white to-slate-50',
        accent: 'slate'
      }
    },
    { 
      id: 'creative', 
      name: 'Creativo', 
      description: 'Colorido y vibrante',
      icon: Sparkles,
      colors: {
        primary: 'from-pink-500 via-purple-500 to-indigo-600',
        secondary: 'from-orange-500 to-red-600',
        bg: 'from-purple-900 via-pink-900 to-purple-950',
        accent: 'purple'
      }
    },
    { 
      id: 'eco', 
      name: 'Eco Natural', 
      description: 'Tonos naturales y frescos',
      icon: Globe,
      colors: {
        primary: 'from-green-500 via-emerald-400 to-teal-500',
        secondary: 'from-lime-600 to-green-700',
        bg: 'from-slate-950 via-emerald-950 to-slate-900',
        accent: 'green'
      }
    },
  ];

  const applyTheme = () => {
    setActiveTheme(tempTheme);
    setSelectedDevice(tempDevice);
    setActivePageType(tempPageType);
    setIsVisualizerOpen(false);
  };

  const restoreToLanding = () => {
    setActiveTheme('default');
    setTempTheme('default');
    setSelectedDevice('desktop');
    setTempDevice('desktop');
    setActivePageType('landing');
    setTempPageType('landing');
    setCurrentPage('inicio');
    setIsVisualizerOpen(false);
  };

  const getCurrentTheme = () => {
    return webTypes.find(t => t.id === activeTheme) || webTypes[0];
  };

  const theme = getCurrentTheme();

  const getDeviceClass = () => {
    switch(selectedDevice) {
      case 'mobile': return 'max-w-[375px] mx-auto';
      case 'tablet': return 'max-w-[768px] mx-auto';
      default: return 'w-full';
    }
  };

  return (
    <div className={`min-h-screen bg-white ${getDeviceClass()} transition-all duration-500`}>
      {/* Renderizar contenido según el tipo de página activo */}
      {activePageType === 'landing' && renderLandingPage()}
      {activePageType === 'multipage' && renderMultiPage()}
      {activePageType === 'ecommerce' && renderEcommerce()}
      {activePageType === 'portfolio' && renderPortfolio()}
      {activePageType === 'blog' && renderBlog()}
      {activePageType === 'dashboard' && renderDashboard()}
      {activePageType === 'onepage' && renderOnePage()}
      
      {/* Floating Buttons - Siempre visibles */}
      {renderFloatingButtons()}
      
      {/* Cookie Banner */}
      <CookieBanner />
    </div>
  );

  // Botones flotantes reutilizables (chatbot y visualizador)
  function renderFloatingButtons() {
    return (
      <>
        {/* Chatbot Floating Button */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsChatOpen(!isChatOpen)}
          className="fixed bottom-6 right-6 z-50 bg-linear-to-r from-blue-600 to-cyan-500 text-white p-4 rounded-full shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 hover:scale-110"
        >
          <MessageCircle className="h-6 w-6" />
        </motion.button>

        {/* Visualizer Floating Button - OCULTO TEMPORALMENTE */}
        {false && (
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsVisualizerOpen(!isVisualizerOpen)}
            className="fixed bottom-24 right-6 z-50 bg-linear-to-r from-amber-500 to-orange-600 text-white p-4 rounded-full shadow-2xl hover:shadow-amber-500/50 transition-all duration-300 hover:scale-110"
          >
            <Monitor className="h-6 w-6" />
          </motion.button>
        )}

        {/* Chatbot Widget */}
        <AnimatePresence>
          {isChatOpen && (
            <motion.div
              initial={{ opacity: 0, y: 100, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 100, scale: 0.8 }}
              className="fixed bottom-32 right-6 z-50 w-96 max-w-[calc(100vw-3rem)]"
            >
              <Card className="shadow-2xl border-2 border-blue-200">
                <div className="bg-linear-to-r from-blue-600 to-cyan-500 p-4 text-white">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-3">
                      <div className="bg-white p-2 rounded-lg">
                        <Image src={logo} alt="Gutnes" width={32} height={32} className="w-8 h-8" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg">Asistente Virtual Gutnes</h3>
                        <p className="text-xs text-blue-100">En línea • Respuesta inmediata</p>
                      </div>
                    </div>
                    <button
                      onClick={() => setIsChatOpen(false)}
                      className="hover:bg-white/20 p-2 rounded-lg transition-colors"
                    >
                      <X className="h-5 w-5" />
                    </button>
                  </div>
                </div>

                <div className="h-96 overflow-y-auto p-4 bg-linear-to-b from-slate-50 to-white">
                  {chatMessages.map((msg: any, idx: number) => (
                    <div
                      key={idx}
                      className={`mb-3 flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-[80%] p-3 rounded-lg shadow-sm ${
                          msg.type === 'user'
                            ? 'bg-linear-to-r from-blue-600 to-cyan-500 text-white'
                            : 'bg-white border border-blue-100 text-slate-800'
                        }`}
                      >
                        <p className="text-sm whitespace-pre-line">{msg.text}</p>
                      </div>
                    </div>
                  ))}
                  {isTyping && (
                    <div className="flex justify-start mb-3">
                      <div className="bg-white border border-blue-100 p-3 rounded-lg shadow-sm">
                        <div className="flex gap-1">
                          <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" />
                          <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce delay-100" />
                          <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce delay-200" />
                        </div>
                      </div>
                    </div>
                  )}
                  <div ref={chatMessagesEndRef} />
                </div>

                <div className="p-4 bg-white border-t">
                  <div className="mb-2 flex gap-2 flex-wrap max-h-32 overflow-y-auto">
                    {quickResponses.map((response) => (
                      <button
                        key={response}
                        onClick={() => {
                          setInputMessage(response);
                          handleSendMessage();
                        }}
                        className="px-3 py-1 text-xs bg-blue-50 hover:bg-blue-100 text-blue-700 hover:text-blue-800 rounded-full transition-colors border border-blue-200"
                      >
                        {response}
                      </button>
                    ))}
                  </div>

                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={inputMessage}
                      onChange={(e) => setInputMessage(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                      placeholder="Escribe tu mensaje..."
                      className="flex-1 p-2 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                    />
                    <Button
                      onClick={handleSendMessage}
                      size="sm"
                      className="bg-linear-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600"
                    >
                      <Send className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Website Visualizer Widget */}
        <AnimatePresence>
          {isVisualizerOpen && (
            <motion.div
              initial={{ opacity: 0, y: 100, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 100, scale: 0.8 }}
              className="fixed inset-6 z-50 flex items-center justify-center"
            >
              <div className="bg-white rounded-2xl shadow-2xl border-2 border-amber-200 overflow-hidden max-w-6xl w-full max-h-[90vh] flex flex-col">
                {/* Visualizer Header */}
                <div className="bg-linear-to-r from-amber-500 to-orange-600 p-4 text-white flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <div className="bg-white/20 p-2 rounded-full">
                      <Monitor className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-bold">Visualizador de Proyectos</h3>
                      <p className="text-xs text-amber-100">Explora cómo se vería tu web</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setIsVisualizerOpen(false)}
                    className="hover:bg-white/20 p-2 rounded-lg transition-colors"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>

                <div className="flex flex-1 overflow-hidden">
                  {/* Sidebar Controls */}
                  <div className="w-64 border-r border-slate-200 p-4 overflow-y-auto bg-slate-50">
                    {/* Device Selector */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-slate-700 mb-3 flex items-center gap-2">
                        <Smartphone className="h-4 w-4" />
                        Dispositivos
                      </h4>
                      <div className="space-y-2">
                        {[
                          { id: 'desktop' as const, name: 'Desktop', icon: Monitor },
                          { id: 'tablet' as const, name: 'Tablet', icon: Smartphone },
                          { id: 'mobile' as const, name: 'Móvil', icon: Smartphone }
                        ].map((device) => (
                          <button
                            key={device.id}
                            onClick={() => setTempDevice(device.id)}
                            className={`w-full p-3 rounded-lg border-2 transition-all flex items-center gap-3 ${
                              tempDevice === device.id
                                ? 'border-amber-500 bg-amber-50 text-amber-900'
                                : 'border-slate-200 hover:border-amber-300 text-slate-600'
                            }`}
                          >
                            <device.icon className="h-4 w-4" />
                            <span className="text-sm font-medium">{device.name}</span>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Page Type Selector */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-slate-700 mb-3 flex items-center gap-2">
                        <Layout className="h-4 w-4" />
                        Tipo de Página
                      </h4>
                      <div className="space-y-2">
                        {pageTypes.map((type) => (
                          <button
                            key={type.id}
                            onClick={() => setTempPageType(type.id)}
                            className={`w-full p-3 rounded-lg border-2 transition-all text-left ${
                              tempPageType === type.id
                                ? 'border-amber-500 bg-amber-50'
                                : 'border-slate-200 hover:border-amber-300'
                            }`}
                          >
                            <div className="flex items-start gap-2">
                              <type.icon className="h-4 w-4 mt-0.5 text-amber-600" />
                              <div>
                                <p className="text-sm font-semibold text-slate-800">{type.name}</p>
                                <p className="text-xs text-slate-500">{type.description}</p>
                              </div>
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Estilo/Tema Selector */}
                    <div>
                      <h4 className="text-sm font-semibold text-slate-700 mb-3 flex items-center gap-2">
                        <Sparkles className="h-4 w-4" />
                        Estilos de Diseño
                      </h4>
                      <div className="space-y-2">
                        {webTypes.map((type) => (
                          <button
                            key={type.id}
                            onClick={() => setTempTheme(type.id)}
                            className={`w-full p-3 rounded-lg border-2 transition-all text-left ${
                              tempTheme === type.id
                                ? 'border-amber-500 bg-amber-50'
                                : 'border-slate-200 hover:border-amber-300'
                            }`}
                          >
                            <div className="flex items-start gap-2">
                              <type.icon className="h-4 w-4 mt-0.5 text-amber-600" />
                              <div>
                                <p className="text-sm font-semibold text-slate-800">{type.name}</p>
                                <p className="text-xs text-slate-500">{type.description}</p>
                              </div>
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Info */}
                    <div className="mt-6 p-3 bg-amber-50 border border-amber-200 rounded-lg">
                      <p className="text-xs text-slate-600">
                        💡 Selecciona dispositivo, tipo y estilo. Haz click en "Aplicar" para transformar toda la página
                      </p>
                    </div>
                  </div>

                  {/* Preview Area with Device Frame */}
                  <div className="flex-1 p-8 bg-linear-to-br from-slate-50 to-slate-100 flex flex-col items-center justify-center">
                    <div className="text-center mb-6">
                      <h3 className="text-lg font-bold text-slate-800 mb-2">Vista Previa</h3>
                      <p className="text-sm text-slate-600">
                        {pageTypes.find(p => p.id === tempPageType)?.name} • {webTypes.find(t => t.id === tempTheme)?.name}
                      </p>
                    </div>

                    {/* Device Frame Container */}
                    <div className="relative">
                      {/* iPhone Frame (Mobile) */}
                      {tempDevice === 'mobile' && (
                        <div className="relative">
                          {/* iPhone Shell */}
                          <div className="relative bg-slate-900 rounded-[3rem] p-3 shadow-2xl">
                            {/* Notch */}
                            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-36 h-7 bg-slate-900 rounded-b-3xl z-20"></div>
                            
                            {/* Screen */}
                            <div className="relative bg-white rounded-[2.5rem] overflow-hidden" style={{ width: '280px', height: '560px' }}>
                              {/* Mini Content Preview */}
                              <div className={`h-full bg-linear-to-br ${webTypes.find(t => t.id === tempTheme)?.colors.bg} p-4 overflow-hidden`}>
                                <div className="flex items-center justify-center h-full">
                                  {pageTypes.find(p => p.id === tempPageType)?.icon && 
                                    React.createElement(pageTypes.find(p => p.id === tempPageType)!.icon, { 
                                      className: "h-16 w-16 text-white opacity-50" 
                                    })
                                  }
                                </div>
                              </div>
                            </div>

                            {/* Home Indicator */}
                            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-white/30 rounded-full"></div>
                          </div>
                        </div>
                      )}

                      {/* iPad Frame (Tablet) */}
                      {tempDevice === 'tablet' && (
                        <div className="relative">
                          {/* iPad Shell */}
                          <div className="relative bg-slate-900 rounded-4xl p-3 shadow-2xl">
                            {/* Screen */}
                            <div className="relative bg-white rounded-3xl overflow-hidden" style={{ width: '480px', height: '640px' }}>
                              {/* Mini Content Preview */}
                              <div className={`h-full bg-linear-to-br ${webTypes.find(t => t.id === tempTheme)?.colors.bg} p-6 overflow-hidden`}>
                                <div className="flex items-center justify-center h-full">
                                  {pageTypes.find(p => p.id === tempPageType)?.icon && 
                                    React.createElement(pageTypes.find(p => p.id === tempPageType)!.icon, { 
                                      className: "h-24 w-24 text-white opacity-50" 
                                    })
                                  }
                                </div>
                              </div>
                            </div>

                            {/* Home Indicator */}
                            <div className="absolute bottom-1.5 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-white/30 rounded-full"></div>
                          </div>
                        </div>
                      )}

                      {/* MacBook Frame (Desktop) */}
                      {tempDevice === 'desktop' && (
                        <div className="relative">
                          {/* MacBook Screen */}
                          <div className="relative bg-slate-800 rounded-t-xl p-2 shadow-2xl">
                            {/* Camera */}
                            <div className="absolute top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-slate-600 rounded-full"></div>
                            
                            {/* Screen */}
                            <div className="relative bg-white rounded-lg overflow-hidden" style={{ width: '600px', height: '380px' }}>
                              {/* Mini Content Preview */}
                              <div className={`h-full bg-linear-to-br ${webTypes.find(t => t.id === tempTheme)?.colors.bg} p-8 overflow-hidden`}>
                                <div className="flex items-center justify-center h-full">
                                  {pageTypes.find(p => p.id === tempPageType)?.icon && 
                                    React.createElement(pageTypes.find(p => p.id === tempPageType)!.icon, { 
                                      className: "h-32 w-32 text-white opacity-50" 
                                    })
                                  }
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* MacBook Base */}
                          <div className="relative h-2 bg-linear-to-b from-slate-300 to-slate-400 rounded-b-xl shadow-lg" style={{ width: '640px', marginLeft: '-20px' }}>
                            <div className="absolute inset-0 flex items-center justify-center">
                              <div className="w-16 h-1 bg-slate-500/30 rounded-full"></div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Info Below Device */}
                    <div className="mt-6 max-w-md">
                      <div className="bg-white p-4 rounded-lg shadow-sm border border-slate-200">
                        <div className="flex items-center gap-3 mb-3">
                          {webTypes.find(t => t.id === tempTheme)?.icon && 
                            React.createElement(webTypes.find(t => t.id === tempTheme)!.icon, { 
                              className: "h-6 w-6 text-amber-500" 
                            })
                          }
                          <div>
                            <p className="text-sm font-semibold text-slate-800">{webTypes.find(t => t.id === tempTheme)?.name}</p>
                            <p className="text-xs text-slate-500">{webTypes.find(t => t.id === tempTheme)?.description}</p>
                          </div>
                        </div>
                        
                        <div className="flex gap-2 mb-3">
                          <div className={`flex-1 h-8 rounded bg-linear-to-r ${webTypes.find(t => t.id === tempTheme)?.colors.primary}`} />
                          <div className={`flex-1 h-8 rounded bg-linear-to-r ${webTypes.find(t => t.id === tempTheme)?.colors.secondary}`} />
                        </div>

                        <p className="text-xs text-slate-600">
                          Tu página mantendrá todo su contenido e imágenes. Solo cambiará el estilo visual y la estructura según el tipo seleccionado.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Footer CTA */}
                <div className="border-t border-slate-200 p-4 bg-white flex justify-between items-center gap-4">
                  <div className="flex items-center gap-3">
                    <Button
                      variant="outline"
                      onClick={restoreToLanding}
                      className="border-blue-500 text-blue-600 hover:bg-blue-50"
                    >
                      <Home className="mr-2 h-4 w-4" />
                      Restaurar Landing
                    </Button>
                    <div>
                      <p className="text-sm font-semibold text-slate-700">¿Listo para ver tu página así?</p>
                      <p className="text-xs text-slate-500">Haz click en "Aplicar" para transformar</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      onClick={() => setIsVisualizerOpen(false)}
                    >
                      Cancelar
                    </Button>
                    <Button
                      className="bg-linear-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white"
                      onClick={applyTheme}
                    >
                      <Sparkles className="mr-2 h-4 w-4" />
                      Aplicar Estilo
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </>
    );
  }

  // LANDING PAGE (Actual)
  function renderLandingPage() {
    return (
      <>
      {/* Floating Navigation */}
      <AnimatePresence>
        {showFloatingNav && (
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 bg-white/90 backdrop-blur-lg rounded-full shadow-lg px-6 py-3 border border-slate-200"
          >
            <div className="flex items-center gap-4">
              <Image
                src={logo}
                alt="Gearnifyers"
                width={32}
                height={32}
                className="w-auto h-8"
              />
              <div className="w-px h-6 bg-slate-300" />
              <Button
                variant="ghost"
                size="sm"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="rounded-full"
              >
                <Home className="h-4 w-4 mr-2" />
                Inicio
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => document.getElementById('servicios')?.scrollIntoView({ behavior: 'smooth' })}
                className="rounded-full"
              >
                <Briefcase className="h-4 w-4 mr-2" />
                Servicios
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => document.getElementById('portafolio')?.scrollIntoView({ behavior: 'smooth' })}
                className="rounded-full"
              >
                <Target className="h-4 w-4 mr-2" />
                Portafolio
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
                className="rounded-full"
              >
                <MessageSquare className="h-4 w-4 mr-2" />
                Contacto
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Website Visualizer Widget */}
      <AnimatePresence>
        {isVisualizerOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.8 }}
            className="fixed inset-6 z-50 flex items-center justify-center"
          >
            <div className="bg-white rounded-2xl shadow-2xl border-2 border-amber-200 overflow-hidden max-w-6xl w-full max-h-[90vh] flex flex-col">
              {/* Visualizer Header */}
              <div className="bg-linear-to-r from-amber-500 to-orange-600 p-4 text-white flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <div className="bg-white/20 p-2 rounded-full">
                    <Monitor className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-bold">Visualizador de Proyectos</h3>
                    <p className="text-xs text-amber-100">Explora cómo se vería tu web</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsVisualizerOpen(false)}
                  className="hover:bg-white/20 p-2 rounded-lg transition-colors"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="flex flex-1 overflow-hidden">
                {/* Sidebar Controls */}
                <div className="w-64 border-r border-slate-200 p-4 overflow-y-auto bg-slate-50">
                  {/* Device Selector */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-slate-700 mb-3 flex items-center gap-2">
                      <Smartphone className="h-4 w-4" />
                      Dispositivos
                    </h4>
                    <div className="space-y-2">
                      {[
                        { id: 'desktop' as const, name: 'Desktop', icon: Monitor },
                        { id: 'tablet' as const, name: 'Tablet', icon: Smartphone },
                        { id: 'mobile' as const, name: 'Móvil', icon: Smartphone }
                      ].map((device) => (
                        <button
                          key={device.id}
                          onClick={() => setTempDevice(device.id)}
                          className={`w-full p-3 rounded-lg border-2 transition-all flex items-center gap-3 ${
                            tempDevice === device.id
                              ? 'border-amber-500 bg-amber-50 text-amber-900'
                              : 'border-slate-200 hover:border-amber-300 text-slate-600'
                          }`}
                        >
                          <device.icon className="h-4 w-4" />
                          <span className="text-sm font-medium">{device.name}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Page Type Selector */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-slate-700 mb-3 flex items-center gap-2">
                      <Layout className="h-4 w-4" />
                      Tipo de Página
                    </h4>
                    <div className="space-y-2">
                      {pageTypes.map((type) => (
                        <button
                          key={type.id}
                          onClick={() => setTempPageType(type.id)}
                          className={`w-full p-3 rounded-lg border-2 transition-all text-left ${
                            tempPageType === type.id
                              ? 'border-amber-500 bg-amber-50'
                              : 'border-slate-200 hover:border-amber-300'
                          }`}
                        >
                          <div className="flex items-start gap-2">
                            <type.icon className="h-4 w-4 mt-0.5 text-amber-600" />
                            <div>
                              <p className="text-sm font-semibold text-slate-800">{type.name}</p>
                              <p className="text-xs text-slate-500">{type.description}</p>
                            </div>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Estilo/Tema Selector */}
                  <div>
                    <h4 className="text-sm font-semibold text-slate-700 mb-3 flex items-center gap-2">
                      <Sparkles className="h-4 w-4" />
                      Estilos de Diseño
                    </h4>
                    <div className="space-y-2">
                      {webTypes.map((type) => (
                        <button
                          key={type.id}
                          onClick={() => setTempTheme(type.id)}
                          className={`w-full p-3 rounded-lg border-2 transition-all text-left ${
                            tempTheme === type.id
                              ? 'border-amber-500 bg-amber-50'
                              : 'border-slate-200 hover:border-amber-300'
                          }`}
                        >
                          <div className="flex items-start gap-2">
                            <type.icon className="h-4 w-4 mt-0.5 text-amber-600" />
                            <div>
                              <p className="text-sm font-semibold text-slate-800">{type.name}</p>
                              <p className="text-xs text-slate-500">{type.description}</p>
                            </div>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Info */}
                  <div className="mt-6 p-3 bg-amber-50 border border-amber-200 rounded-lg">
                    <p className="text-xs text-slate-600">
                      💡 Selecciona dispositivo, tipo y estilo. Haz click en "Aplicar" para transformar toda la página
                    </p>
                  </div>
                </div>

                {/* Preview Area with Device Frame */}
                <div className="flex-1 p-8 bg-linear-to-br from-slate-50 to-slate-100 flex flex-col items-center justify-center">
                  <div className="text-center mb-6">
                    <h3 className="text-lg font-bold text-slate-800 mb-2">Vista Previa</h3>
                    <p className="text-sm text-slate-600">
                      {pageTypes.find(p => p.id === tempPageType)?.name} • {webTypes.find(t => t.id === tempTheme)?.name}
                    </p>
                  </div>

                  {/* Device Frame Container */}
                  <div className="relative">
                    {/* iPhone Frame (Mobile) */}
                    {tempDevice === 'mobile' && (
                      <div className="relative">
                        {/* iPhone Shell */}
                        <div className="relative bg-slate-900 rounded-[3rem] p-3 shadow-2xl">
                          {/* Notch */}
                          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-36 h-7 bg-slate-900 rounded-b-3xl z-20"></div>
                          
                          {/* Screen */}
                          <div className="relative bg-white rounded-[2.5rem] overflow-hidden" style={{ width: '280px', height: '560px' }}>
                            {/* Mini Content Preview */}
                            <div className={`h-full bg-linear-to-br ${webTypes.find(t => t.id === tempTheme)?.colors.bg} p-4 overflow-hidden`}>
                              <div className="flex items-center justify-center h-full">
                                {pageTypes.find(p => p.id === tempPageType)?.icon && 
                                  React.createElement(pageTypes.find(p => p.id === tempPageType)!.icon, { 
                                    className: "h-16 w-16 text-white opacity-50" 
                                  })
                                }
                              </div>
                            </div>
                          </div>

                          {/* Home Indicator */}
                          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-white/30 rounded-full"></div>
                        </div>
                      </div>
                    )}

                    {/* iPad Frame (Tablet) */}
                    {tempDevice === 'tablet' && (
                      <div className="relative">
                        {/* iPad Shell */}
                        <div className="relative bg-slate-900 rounded-4xl p-3 shadow-2xl">
                          {/* Screen */}
                          <div className="relative bg-white rounded-3xl overflow-hidden" style={{ width: '480px', height: '640px' }}>
                            {/* Mini Content Preview */}
                            <div className={`h-full bg-linear-to-br ${webTypes.find(t => t.id === tempTheme)?.colors.bg} p-6 overflow-hidden`}>
                              <div className="flex items-center justify-center h-full">
                                {pageTypes.find(p => p.id === tempPageType)?.icon && 
                                  React.createElement(pageTypes.find(p => p.id === tempPageType)!.icon, { 
                                    className: "h-24 w-24 text-white opacity-50" 
                                  })
                                }
                              </div>
                            </div>
                          </div>

                          {/* Home Indicator */}
                          <div className="absolute bottom-1.5 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-white/30 rounded-full"></div>
                        </div>
                      </div>
                    )}

                    {/* MacBook Frame (Desktop) */}
                    {tempDevice === 'desktop' && (
                      <div className="relative">
                        {/* MacBook Screen */}
                        <div className="relative bg-slate-800 rounded-t-xl p-2 shadow-2xl">
                          {/* Camera */}
                          <div className="absolute top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-slate-600 rounded-full"></div>
                          
                          {/* Screen */}
                          <div className="relative bg-white rounded-lg overflow-hidden" style={{ width: '600px', height: '380px' }}>
                            {/* Mini Content Preview */}
                            <div className={`h-full bg-linear-to-br ${webTypes.find(t => t.id === tempTheme)?.colors.bg} p-8 overflow-hidden`}>
                              <div className="flex items-center justify-center h-full">
                                {pageTypes.find(p => p.id === tempPageType)?.icon && 
                                  React.createElement(pageTypes.find(p => p.id === tempPageType)!.icon, { 
                                    className: "h-32 w-32 text-white opacity-50" 
                                  })
                                }
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* MacBook Base */}
                        <div className="relative h-2 bg-linear-to-b from-slate-300 to-slate-400 rounded-b-xl shadow-lg" style={{ width: '640px', marginLeft: '-20px' }}>
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-16 h-1 bg-slate-500/30 rounded-full"></div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Info Below Device */}
                  <div className="mt-6 max-w-md">
                    <div className="bg-white p-4 rounded-lg shadow-sm border border-slate-200">
                      <div className="flex items-center gap-3 mb-3">
                        {webTypes.find(t => t.id === tempTheme)?.icon && 
                          React.createElement(webTypes.find(t => t.id === tempTheme)!.icon, { 
                            className: "h-6 w-6 text-amber-500" 
                          })
                        }
                        <div>
                          <p className="text-sm font-semibold text-slate-800">{webTypes.find(t => t.id === tempTheme)?.name}</p>
                          <p className="text-xs text-slate-500">{webTypes.find(t => t.id === tempTheme)?.description}</p>
                        </div>
                      </div>
                      
                      <div className="flex gap-2 mb-3">
                        <div className={`flex-1 h-8 rounded bg-linear-to-r ${webTypes.find(t => t.id === tempTheme)?.colors.primary}`} />
                        <div className={`flex-1 h-8 rounded bg-linear-to-r ${webTypes.find(t => t.id === tempTheme)?.colors.secondary}`} />
                      </div>

                      <p className="text-xs text-slate-600">
                        Tu página mantendrá todo su contenido e imágenes. Solo cambiará el estilo visual y la estructura según el tipo seleccionado.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Footer CTA */}
              <div className="border-t border-slate-200 p-4 bg-white flex justify-between items-center gap-4">
                <div className="flex items-center gap-3">
                  <Button
                    variant="outline"
                    onClick={restoreToLanding}
                    className="border-blue-500 text-blue-600 hover:bg-blue-50"
                  >
                    <Home className="mr-2 h-4 w-4" />
                    Restaurar Landing
                  </Button>
                  <div>
                    <p className="text-sm font-semibold text-slate-700">¿Listo para ver tu página así?</p>
                    <p className="text-xs text-slate-500">Haz click en "Aplicar" para transformar</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    onClick={() => setIsVisualizerOpen(false)}
                  >
                    Cancelar
                  </Button>
                  <Button
                    className="bg-linear-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white"
                    onClick={applyTheme}
                  >
                    <Sparkles className="mr-2 h-4 w-4" />
                    Aplicar Estilo
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <motion.section
        ref={heroRef}
        style={{ opacity, scale }}
        className={`relative min-h-screen flex items-center justify-center overflow-hidden bg-linear-to-br ${theme.colors.bg} transition-colors duration-1000`}
      >
        {/* Animated Background Grid */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Gradient orbs */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-pulse delay-700" />
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-amber-400/5 rounded-full blur-2xl" />
          
          {/* Animated lines */}
          <svg className="absolute inset-0 w-full h-full opacity-10">
            <defs>
              <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
                <circle cx="25" cy="25" r="1" fill="currentColor" className="text-amber-400" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        {/* Floating particles */}
        {isMounted && (
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-amber-400 rounded-full"
                initial={{
                  x: Math.random() * window.innerWidth,
                  y: Math.random() * window.innerHeight,
                  opacity: 0
                }}
                animate={{
                  y: [null, Math.random() * -500],
                  opacity: [0, 1, 0]
                }}
                transition={{
                  duration: Math.random() * 3 + 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                  ease: "linear"
                }}
              />
            ))}
          </div>
        )}

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-center max-w-5xl mx-auto"
          >
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, type: "spring", bounce: 0.5 }}
              className="mb-16 md:mb-20 flex justify-center"
            >
              <motion.div
                whileHover={{ 
                  scale: 1.1,
                  rotate: [0, -5, 5, -5, 0],
                  transition: { 
                    rotate: { duration: 0.5 },
                    scale: { duration: 0.3 }
                  }
                }}
                className="relative group cursor-pointer"
              >
                {/* Subtle background particles */}
                <div className="absolute inset-0 overflow-hidden">
                  <motion.div
                    className="absolute top-0 left-1/4 w-2 h-2 bg-amber-400 rounded-full"
                    animate={{
                      y: [0, -20, 0],
                      opacity: [0.3, 0.7, 0.3]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                  <motion.div
                    className="absolute top-1/2 right-1/4 w-1.5 h-1.5 bg-blue-400 rounded-full"
                    animate={{
                      y: [0, 15, 0],
                      opacity: [0.2, 0.6, 0.2]
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.5
                    }}
                  />
                </div>
                
                {/* Logo with code braces */}
                <div className="relative flex items-center justify-center gap-4 md:gap-8">
                  {/* Left brace */}
                  <motion.div
                    className="text-6xl md:text-7xl font-extralight leading-none flex items-center h-32 md:h-40"
                    animate={{
                      x: [-8, 0, -8],
                      scale: [1, 1.05, 1],
                      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                    }}
                    transition={{
                      x: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                      scale: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                      backgroundPosition: { duration: 4, repeat: Infinity, ease: "linear" }
                    }}
                    style={{
                      backgroundImage: "linear-gradient(90deg, #ffffff, #9ca3af, #d1d5db, #ffffff)",
                      backgroundSize: "200% 100%",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text"
                    }}
                  >
                    {'{'}
                  </motion.div>
                  
                  <Image
                    src={logo}
                    alt="Gutnes Logo"
                    width={280}
                    height={280}
                    className="w-auto h-32 md:h-40 drop-shadow-2xl relative z-10"
                    priority
                  />
                  
                  {/* Right brace */}
                  <motion.div
                    className="text-6xl md:text-7xl font-extralight leading-none flex items-center h-32 md:h-40"
                    animate={{
                      x: [8, 0, 8],
                      scale: [1, 1.05, 1],
                      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                    }}
                    transition={{
                      x: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                      scale: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                      backgroundPosition: { duration: 4, repeat: Infinity, ease: "linear" }
                    }}
                    style={{
                      backgroundImage: "linear-gradient(90deg, #ffffff, #9ca3af, #d1d5db, #ffffff)",
                      backgroundSize: "200% 100%",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text"
                    }}
                  >
                    {'}'}
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4 leading-tight"
            >
              <motion.span 
                className={`bg-linear-to-r ${theme.colors.primary} bg-clip-text text-transparent inline-block transition-all duration-1000`}
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "linear"
                }}
                style={{ backgroundSize: "200% 200%" }}
              >
                GutNes Digital
              </motion.span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="text-2xl md:text-3xl text-white mb-8 font-light"
            >
              Tu futuro online en buenas manos
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto"
            >
              Creamos experiencias digitales que convierten visitantes en clientes. Desarrollo web profesional, SEO optimizado y soluciones tecnológicas a medida.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button
                size="lg"
                className={`bg-linear-to-r ${theme.colors.secondary} hover:opacity-90 text-white font-semibold text-lg px-10 py-7 transition-all duration-1000`}
                onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Sparkles className="mr-2 h-5 w-5" />
                Comenzar Proyecto
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 font-semibold text-lg px-10 py-7 hover:border-cyan-400"
                onClick={() => document.getElementById('servicios')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Ver Servicios
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20"
            >
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl font-bold text-amber-400 mb-2">{stat.value}</div>
                  <div className="text-sm text-gray-300">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2, repeat: Infinity, repeatType: "reverse" }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-amber-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-amber-400 rounded-full mt-2" />
          </div>
        </motion.div>
      </motion.section>

      {/* Services Section */}
      <Section id="servicios" className="bg-slate-50">
        <div className="container mx-auto px-4">
          <AnimatedContent>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                Nuestros <span className="bg-linear-to-r from-amber-600 via-yellow-600 to-amber-700 bg-clip-text text-transparent">Servicios</span>
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Soluciones tecnológicas completas adaptadas a las necesidades específicas de tu empresa
              </p>
            </div>
          </AnimatedContent>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {services.map((service, index) => (
              <AnimatedCard key={index} delay={index * 0.1}>
                <Card className="p-8 h-full hover:shadow-2xl transition-all duration-300 border-2 hover:border-amber-400 group">
                  <div className="bg-linear-to-br from-slate-800 to-slate-900 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
                    <service.icon className="h-8 w-8 text-amber-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">{service.title}</h3>
                  <p className="text-slate-600 mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-slate-700">
                        <CheckCircle2 className="h-5 w-5 text-amber-600 mr-2 shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </Section>

      {/* Portafolio Section */}
      <Section id="portafolio">
        <div className="container mx-auto px-4">
          <AnimatedContent>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                Casos de <span className="bg-linear-to-r from-amber-600 via-yellow-600 to-amber-700 bg-clip-text text-transparent">Éxito</span>
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Proyectos reales que demuestran nuestra capacidad y compromiso con la excelencia
              </p>
            </div>
          </AnimatedContent>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {portafolio.map((project, index) => (
              <AnimatedCard key={index} delay={index * 0.15}>
                <a href={project.url} target="_blank" rel="noopener noreferrer" className="block h-full">
                  <Card className="overflow-hidden h-full hover:shadow-2xl transition-all duration-300 group cursor-pointer">
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-slate-900/80 to-transparent" />
                      <div className="absolute bottom-4 left-4">
                        <span className="px-3 py-1 bg-linear-to-r from-amber-500 to-yellow-500 text-slate-900 text-sm font-bold rounded-full shadow-lg">
                          {project.category}
                        </span>
                      </div>
                      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span className="px-3 py-1 bg-white/90 text-slate-900 text-sm font-semibold rounded-full shadow-lg flex items-center gap-1">
                          Visitar web
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-amber-600 transition-colors">{project.name}</h3>
                      <p className="text-slate-600 mb-3">{project.description}</p>
                      <span className="inline-flex items-center text-amber-600 font-semibold text-sm">
                        Ver proyecto →
                      </span>
                    </div>
                  </Card>
                </a>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </Section>

      {/* Process Timeline Section */}
      <Section className="bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <AnimatedContent>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Nuestro <span className="text-amber-400">Proceso</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Metodología probada que garantiza resultados excepcionales
              </p>
            </div>
          </AnimatedContent>

          {/* Timeline */}
          <div className="max-w-4xl mx-auto">
            {processSteps.map((step, index) => (
              <TimelineStep key={index} step={step} index={index} />
            ))}
          </div>
        </div>
      </Section>

      {/* Testimonials Section */}
      <Section id="testimonios" className="bg-slate-50">
        <div className="container mx-auto px-4">
          <AnimatedContent>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                ¿Has trabajado <span className="bg-linear-to-r from-amber-600 via-yellow-600 to-amber-700 bg-clip-text text-transparent">con nosotros?</span>
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Tu opinión nos ayuda a mejorar. Comparte tu experiencia trabajando con GutNes Digital
              </p>
            </div>
          </AnimatedContent>

          <div className="max-w-2xl mx-auto">
            <AnimatedCard delay={0.2}>
              <Card className="p-8 shadow-2xl border-2 border-amber-200">
                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-slate-900 mb-2">
                      Tu Nombre *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ej: María González"
                      className="w-full p-3 border-2 border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-900 mb-2">
                      Empresa / Cargo
                    </label>
                    <input
                      type="text"
                      placeholder="Ej: CEO en TechCorp"
                      className="w-full p-3 border-2 border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-900 mb-2">
                      Tu Experiencia *
                    </label>
                    <textarea
                      required
                      rows={5}
                      placeholder="Cuéntanos sobre tu experiencia trabajando con nosotros..."
                      className="w-full p-3 border-2 border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent resize-none"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-900 mb-3">
                      Calificación
                    </label>
                    <div className="flex gap-2">
                      {[1, 2, 3, 4, 5].map((rating) => (
                        <button
                          key={rating}
                          type="button"
                          className="hover:scale-110 transition-transform"
                        >
                          <Star className="h-8 w-8 text-slate-300 hover:text-yellow-400 hover:fill-yellow-400" />
                        </button>
                      ))}
                    </div>
                  </div>

                  <Button className="w-full bg-linear-to-r from-amber-500 via-yellow-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-900 font-bold text-lg py-6 shadow-xl shadow-amber-500/30">
                    <MessageSquare className="h-5 w-5 mr-2" />
                    Enviar Testimonio
                  </Button>

                  <p className="text-xs text-slate-500 text-center">
                    Tu testimonio será revisado antes de publicarse en nuestra web
                  </p>
                </form>
              </Card>
            </AnimatedCard>
          </div>
        </div>
      </Section>

      {/* Contact Section */}
      <Section id="contacto" className="bg-linear-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedContent>
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  ¿Listo para <span className="text-amber-400">Transformar</span> tu Negocio?
                </h2>
                <p className="text-xl text-gray-300 mb-8">
                  Contáctanos hoy y descubre cómo podemos ayudarte a alcanzar tus objetivos digitales
                </p>

                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="bg-amber-500/20 p-3 rounded-lg">
                      <Mail className="h-6 w-6 text-amber-400" />
                    </div>
                    <div>
                      <div className="font-semibold">Email</div>
                      <a href="mailto:info@gutnes.es" className="text-gray-300 hover:text-amber-400 transition-colors">
                        info@gutnes.es
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="bg-amber-500/20 p-3 rounded-lg">
                      <Phone className="h-6 w-6 text-amber-400" />
                    </div>
                    <div>
                      <div className="font-semibold">Teléfono</div>
                      <div className="space-y-1">
                        <a href="tel:+34618024192" className="text-gray-300 hover:text-amber-400 transition-colors block">
                          +34 618 024 192
                        </a>
                        <a href="tel:+34685579928" className="text-gray-300 hover:text-amber-400 transition-colors block">
                          +34 685 579 928
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="bg-amber-500/20 p-3 rounded-lg">
                      <MapPin className="h-6 w-6 text-amber-400" />
                    </div>
                    <div>
                      <div className="font-semibold">Ubicación</div>
                      <div className="text-gray-300">Avenida Antonio Mairena 18</div>
                      <div className="text-gray-300">Alcalá de Guadaíra, Sevilla</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="bg-amber-500/20 p-3 rounded-lg">
                      <Clock className="h-6 w-6 text-amber-400" />
                    </div>
                    <div>
                      <div className="font-semibold">Disponibilidad</div>
                      <div className="text-gray-300">24/7 - Respuesta en 24-48h</div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedContent>

            <AnimatedContent delay={0.2}>
              <Card className="p-8 bg-white/10 backdrop-blur-lg border-white/20">
                <h3 className="text-2xl font-bold mb-6">Solicita una Consulta Gratuita</h3>
                
                {showSuccessMessage && (
                  <div className="mb-6 p-4 bg-green-500/20 border border-green-500/50 rounded-lg flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-400 shrink-0" />
                    <p className="text-green-100 text-sm">¡Mensaje enviado! Te contactaremos pronto.</p>
                  </div>
                )}

                {submitError && (
                  <div className="mb-6 p-4 bg-red-500/20 border border-red-500/50 rounded-lg">
                    <p className="text-red-100 text-sm">{submitError}</p>
                  </div>
                )}

                <form onSubmit={handleContactSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold mb-2">Nombre *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={contactForm.name}
                      onChange={(e) => setContactForm({...contactForm, name: e.target.value})}
                      className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                      placeholder="Tu nombre completo"
                      disabled={isSubmitting}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">Email *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={contactForm.email}
                      onChange={(e) => setContactForm({...contactForm, email: e.target.value})}
                      className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                      placeholder="tu@email.com"
                      disabled={isSubmitting}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">Servicio de Interés</label>
                    <select 
                      name="service"
                      value={contactForm.service}
                      onChange={(e) => setContactForm({...contactForm, service: e.target.value})}
                      className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                      disabled={isSubmitting}
                    >
                      <option value="" className="bg-slate-800">Selecciona una opción</option>
                      <option value="Digitalización Empresarial" className="bg-slate-800">Digitalización Empresarial</option>
                      <option value="Auditoría Informática" className="bg-slate-800">Auditoría Informática</option>
                      <option value="Desarrollo Web" className="bg-slate-800">Desarrollo Web</option>
                      <option value="Posicionamiento SEO" className="bg-slate-800">Posicionamiento SEO</option>
                      <option value="Consultoría General" className="bg-slate-800">Consultoría General</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">Mensaje *</label>
                    <textarea
                      name="message"
                      required
                      value={contactForm.message}
                      onChange={(e) => setContactForm({...contactForm, message: e.target.value})}
                      rows={4}
                      className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                      placeholder="Cuéntanos sobre tu proyecto..."
                      disabled={isSubmitting}
                    />
                  </div>
                  <Button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-linear-to-r from-amber-500 via-yellow-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-900 font-bold text-lg py-6 shadow-xl shadow-amber-500/30 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="mr-2 h-5 w-5 border-2 border-slate-900 border-t-transparent rounded-full animate-spin" />
                        Enviando...
                      </>
                    ) : (
                      <>
                        <Sparkles className="mr-2 h-5 w-5" />
                        Enviar Consulta
                      </>
                    )}
                  </Button>
                </form>
              </Card>
            </AnimatedContent>
          </div>
        </div>
      </Section>

      {/* Footer */}
      <footer className="bg-slate-950 text-gray-400 py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            {/* Logo y eslogan */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-white p-2 rounded-lg">
                  <Image
                    src={logo}
                    alt="GutNes Digital"
                    width={40}
                    height={40}
                    className="w-auto h-8"
                  />
                </div>
                <span className="text-2xl font-bold text-white">GutNes Digital</span>
              </div>
              <p className="text-sm text-gray-400">Tu futuro online en buenas manos</p>
            </div>

            {/* Enlaces */}
            <div>
              <h3 className="text-white font-bold mb-4">Navegación</h3>
              <ul className="space-y-2">
                <li>
                  <button 
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className="hover:text-amber-400 transition-colors text-sm"
                  >
                    Inicio
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => document.getElementById('servicios')?.scrollIntoView({ behavior: 'smooth' })}
                    className="hover:text-amber-400 transition-colors text-sm"
                  >
                    Servicios
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => document.getElementById('portafolio')?.scrollIntoView({ behavior: 'smooth' })}
                    className="hover:text-amber-400 transition-colors text-sm"
                  >
                    Portfolio
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
                    className="hover:text-amber-400 transition-colors text-sm"
                  >
                    Contacto
                  </button>
                </li>
              </ul>
            </div>

            {/* Redes sociales */}
            <div>
              <h3 className="text-white font-bold mb-4">Síguenos</h3>
              <div className="flex gap-4">
                <a 
                  href="#" 
                  className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-amber-500 transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-amber-500 transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter className="h-5 w-5" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-amber-500 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-amber-500 transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-slate-800 pt-8 text-center">
            <p className="text-sm">© 2025 GutNes Digital. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
      </>
    );
  }

  // MULTI-PAGE (Sitio corporativo con navegación)
  function renderMultiPage() {
    const pages = {
      inicio: (
        <section className={`min-h-screen bg-linear-to-br ${theme.colors.bg} text-white py-20`}>
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-4xl mx-auto text-center"
            >
              <h1 className={`text-6xl md:text-7xl font-bold mb-6 bg-linear-to-r ${theme.colors.primary} bg-clip-text text-transparent`}>
                Transformamos tu Negocio Digitalmente
              </h1>
              <p className="text-2xl text-gray-300 mb-8 leading-relaxed">
                Soluciones tecnológicas integrales para empresas que buscan innovar y crecer en el mundo digital.
              </p>
              <div className="flex gap-4 justify-center flex-wrap">
                <Button 
                  onClick={() => setCurrentPage('servicios')}
                  className={`bg-linear-to-r ${theme.colors.secondary} px-10 py-6 text-lg`}
                >
                  Ver Servicios <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  onClick={() => setCurrentPage('contacto')}
                  variant="outline" 
                  className="text-white border-white hover:bg-white/10 px-10 py-6 text-lg"
                >
                  Contactar
                </Button>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
                {[
                  { value: '100%', label: 'Compromiso' },
                  { value: 'Premium', label: 'Calidad' },
                  { value: '24/7', label: 'Soporte' },
                  { value: 'Ágil', label: 'Entregas' }
                ].map((stat, i) => (
                  <div key={i} className="text-center">
                    <div className={`text-4xl font-bold mb-2 bg-linear-to-r ${theme.colors.primary} bg-clip-text text-transparent`}>
                      {stat.value}
                    </div>
                    <div className="text-gray-400">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      ),
      
      servicios: (
        <section className="py-16 bg-slate-50 min-h-screen">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <h1 className="text-5xl font-bold text-center mb-4">Nuestros Servicios</h1>
              <p className="text-center text-gray-600 mb-12 text-lg">Soluciones digitales a medida para tu empresa</p>
              
              <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {[
                  { 
                    icon: Code, 
                    title: 'Desarrollo Web', 
                    desc: 'Sitios web profesionales, responsive y optimizados con las últimas tecnologías',
                    features: ['Next.js & React', 'SEO Optimizado', 'Diseño Responsive', 'Alta Velocidad']
                  },
                  { 
                    icon: Search, 
                    title: 'SEO & Marketing', 
                    desc: 'Posicionamiento en buscadores y estrategias de marketing digital efectivas',
                    features: ['SEO On-Page', 'Google Ads', 'Analytics', 'Social Media']
                  },
                  { 
                    icon: Shield, 
                    title: 'Auditoría IT', 
                    desc: 'Análisis completo de tu infraestructura tecnológica y seguridad',
                    features: ['Seguridad', 'Optimización', 'Consultoría', 'Soporte']
                  },
                  { 
                    icon: Smartphone, 
                    title: 'Apps Móviles', 
                    desc: 'Desarrollo de aplicaciones nativas y multiplataforma',
                    features: ['iOS & Android', 'React Native', 'Flutter', 'PWA']
                  },
                  { 
                    icon: Cloud, 
                    title: 'Cloud Solutions', 
                    desc: 'Migración y gestión de servicios en la nube',
                    features: ['AWS', 'Azure', 'Google Cloud', 'DevOps']
                  },
                  { 
                    icon: Database, 
                    title: 'Bases de Datos', 
                    desc: 'Diseño, optimización y administración de bases de datos',
                    features: ['SQL', 'NoSQL', 'MongoDB', 'PostgreSQL']
                  }
                ].map((service, i) => (
                  <Card key={i} className="p-8 hover:shadow-2xl transition-all group">
                    <div className={`w-16 h-16 rounded-xl bg-linear-to-r ${i % 2 === 0 ? theme.colors.primary : theme.colors.secondary} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                      <service.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                    <p className="text-gray-600 mb-4">{service.desc}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, j) => (
                        <li key={j} className="flex items-center gap-2 text-sm">
                          <CheckCircle2 className="h-4 w-4 text-green-500" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full mt-6" variant="outline">Más Información</Button>
                  </Card>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      ),
      
      portfolio: (
        <section className="py-16 bg-white min-h-screen">
          <div className="container mx-auto px-6">
            <h1 className="text-5xl font-bold text-center mb-4">Portfolio</h1>
            <p className="text-center text-gray-600 mb-12 text-lg">Proyectos que transformaron negocios</p>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {[
                { title: 'Polvero el Vivo', category: 'E-commerce', tech: 'Next.js, Stripe', image: '🎸' },
                { title: 'ERP Corporativo', category: 'Sistema Web', tech: 'React, Node.js', image: '📊' },
                { title: 'App Logística', category: 'Mobile App', tech: 'React Native', image: '🚚' },
                { title: 'Dashboard Analytics', category: 'SaaS', tech: 'Vue.js, Python', image: '📈' },
                { title: 'Web Inmobiliaria', category: 'Landing Page', tech: 'Next.js', image: '🏠' },
                { title: 'Plataforma Educativa', category: 'E-learning', tech: 'Laravel, Vue', image: '📚' }
              ].map((project, i) => (
                <Card key={i} className="overflow-hidden group cursor-pointer hover:shadow-2xl transition-all">
                  <div className={`h-56 bg-linear-to-br ${i % 2 === 0 ? theme.colors.primary : theme.colors.secondary} flex items-center justify-center text-8xl`}>
                    {project.image}
                  </div>
                  <div className="p-6">
                    <span className="text-xs font-semibold text-amber-600 uppercase">{project.category}</span>
                    <h3 className="text-2xl font-bold mt-2 mb-2">{project.title}</h3>
                    <p className="text-sm text-gray-600 mb-4">{project.tech}</p>
                    <Button variant="outline" className="w-full">Ver Proyecto</Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
      ),
      
      nosotros: (
        <section className="py-16 bg-slate-50 min-h-screen">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-5xl font-bold text-center mb-6">Sobre Nosotros</h1>
              <p className="text-center text-xl text-gray-600 mb-12">
                Transformando ideas en soluciones digitales desde 2020
              </p>
              
              <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg mb-12">
                <h2 className="text-3xl font-bold mb-6">Nuestra Misión</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  En Gutnes Digital, nos dedicamos a ayudar a empresas de todos los tamaños a alcanzar su máximo potencial 
                  en el mundo digital. Combinamos creatividad, tecnología de vanguardia y un profundo entendimiento de las 
                  necesidades empresariales para crear soluciones que realmente marcan la diferencia.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Nuestro equipo de expertos está comprometido con la excelencia y la innovación constante, asegurando que 
                  cada proyecto no solo cumpla, sino que supere las expectativas de nuestros clientes.
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8 mb-12">
                {[
                  { icon: Target, title: 'Nuestra Visión', desc: 'Ser líderes en transformación digital en España' },
                  { icon: Users, title: 'Nuestro Equipo', desc: 'Profesionales apasionados y experimentados' },
                  { icon: Rocket, title: 'Innovación', desc: 'Tecnologías de vanguardia en cada proyecto' }
                ].map((value, i) => (
                  <Card key={i} className="p-6 text-center">
                    <div className={`w-16 h-16 rounded-full bg-linear-to-r ${theme.colors.primary} flex items-center justify-center mx-auto mb-4`}>
                      <value.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                    <p className="text-gray-600">{value.desc}</p>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
      ),
      
      blog: (
        <section className="py-16 bg-white min-h-screen">
          <div className="container mx-auto px-6">
            <h1 className="text-5xl font-bold text-center mb-4">Blog</h1>
            <p className="text-center text-gray-600 mb-12 text-lg">Últimas noticias y tendencias tecnológicas</p>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: 'El Futuro del Desarrollo Web en 2024', category: 'Desarrollo', date: '20 Nov 2024' },
                { title: 'SEO Local: Guía Completa', category: 'Marketing', date: '18 Nov 2024' },
                { title: 'Next.js vs React: ¿Cuál Elegir?', category: 'Desarrollo', date: '15 Nov 2024' },
                { title: 'Ciberseguridad para PYMEs', category: 'Seguridad', date: '12 Nov 2024' },
                { title: 'UX/UI: Mejores Prácticas 2024', category: 'Diseño', date: '10 Nov 2024' },
                { title: 'Cloud Computing: Tendencias', category: 'Cloud', date: '8 Nov 2024' }
              ].map((article, i) => (
                <Card key={i} className="p-6 hover:shadow-xl transition-shadow cursor-pointer">
                  <span className="text-xs font-semibold text-amber-600 uppercase">{article.category}</span>
                  <h3 className="text-xl font-bold mt-2 mb-3">{article.title}</h3>
                  <div className="flex items-center gap-3 text-sm text-gray-500 mb-4">
                    <Clock className="h-4 w-4" />
                    <span>{article.date}</span>
                  </div>
                  <Button variant="outline" className="w-full">Leer Más</Button>
                </Card>
              ))}
            </div>
          </div>
        </section>
      ),
      
      contacto: (
        <section className={`py-16 bg-linear-to-br ${theme.colors.bg} min-h-screen flex items-center`}>
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-5xl font-bold text-center mb-6 text-white">Contáctanos</h1>
              <p className="text-center text-xl text-gray-300 mb-12">
                Estamos listos para hacer realidad tu proyecto
              </p>
              
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="p-8">
                  <h2 className="text-2xl font-bold mb-6">Envíanos un Mensaje</h2>
                  {showSuccessMessage ? (
                    <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                      <CheckCircle2 className="h-16 w-16 text-green-500 mx-auto mb-4" />
                      <h3 className="text-xl font-bold text-green-800 mb-2">¡Mensaje Enviado!</h3>
                      <p className="text-green-700">Nos pondremos en contacto contigo pronto.</p>
                      <Button 
                        onClick={() => {
                          setShowSuccessMessage(false);
                          setContactForm({ name: '', email: '', service: '', message: '' });
                        }}
                        className="mt-4"
                        variant="outline"
                      >
                        Enviar Otro Mensaje
                      </Button>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-semibold mb-2">Nombre</label>
                        <input
                          type="text"
                          value={contactForm.name}
                          onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                          className="w-full p-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                          placeholder="Tu nombre"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold mb-2">Email</label>
                        <input
                          type="email"
                          value={contactForm.email}
                          onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                          className="w-full p-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                          placeholder="tu@email.com"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold mb-2">Mensaje</label>
                        <textarea
                          value={contactForm.message}
                          onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                          className="w-full p-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 h-32"
                          placeholder="Cuéntanos sobre tu proyecto..."
                        />
                      </div>
                      <Button 
                        onClick={() => setShowSuccessMessage(true)}
                        className={`w-full bg-linear-to-r ${theme.colors.secondary} text-white py-6 text-lg`}
                      >
                        <Send className="mr-2 h-5 w-5" />
                        Enviar Mensaje
                      </Button>
                    </div>
                  )}
                </Card>
                
                <div className="space-y-6 text-white">
                  <Card className="p-6 bg-white/10 backdrop-blur border-white/20">
                    <Mail className="h-8 w-8 mb-4 text-amber-400" />
                    <h3 className="text-lg font-bold mb-2">Email</h3>
                    <p className="text-gray-300">info@gutnes.es</p>
                  </Card>
                  <Card className="p-6 bg-white/10 backdrop-blur border-white/20">
                    <Phone className="h-8 w-8 mb-4 text-amber-400" />
                    <h3 className="text-lg font-bold mb-2">Teléfono</h3>
                    <p className="text-gray-300">+34 123 456 789</p>
                  </Card>
                  <Card className="p-6 bg-white/10 backdrop-blur border-white/20">
                    <MapPin className="h-8 w-8 mb-4 text-amber-400" />
                    <h3 className="text-lg font-bold mb-2">Ubicación</h3>
                    <p className="text-gray-300">Madrid, España</p>
                  </Card>
                  <Card className="p-6 bg-white/10 backdrop-blur border-white/20">
                    <Clock className="h-8 w-8 mb-4 text-amber-400" />
                    <h3 className="text-lg font-bold mb-2">Horario</h3>
                    <p className="text-gray-300">Lun - Vie: 9:00 - 18:00</p>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>
      )
    };
    
    return (
      <>
        {/* Header con Navegación */}
        <header className={`sticky top-0 z-40 bg-linear-to-r ${theme.colors.bg} border-b border-white/10 backdrop-blur-lg shadow-lg`}>
          <div className="container mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <Image src={logo} alt="Gutnes Logo" width={120} height={40} className="w-auto h-10 cursor-pointer" onClick={() => setCurrentPage('inicio')} />
              <nav className="hidden md:flex items-center gap-6">
                {['inicio', 'servicios', 'portfolio', 'nosotros', 'blog'].map((page) => (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`text-white hover:text-amber-400 transition-colors capitalize ${currentPage === page ? 'text-amber-400 font-bold' : ''}`}
                  >
                    {page}
                  </button>
                ))}
                <Button 
                  onClick={() => setCurrentPage('contacto')}
                  className={`bg-linear-to-r ${theme.colors.secondary} text-white`}
                >
                  Contacto
                </Button>
              </nav>
              <button className="md:hidden text-white">
                <Menu className="h-6 w-6" />
              </button>
            </div>
          </div>
        </header>

        {/* Contenido de la página actual */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            {pages[currentPage as keyof typeof pages]}
          </motion.div>
        </AnimatePresence>

        {/* Footer Simple */}
        <footer className="bg-slate-950 text-gray-400 py-12 border-t border-slate-800">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-4 gap-8 mb-8">
              <div>
                <h3 className="text-white font-bold mb-4">Gutnes Digital</h3>
                <p className="text-sm">Transformando negocios digitalmente desde 2020</p>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-4">Navegación</h4>
                <div className="space-y-2 text-sm">
                  {['inicio', 'servicios', 'portfolio', 'nosotros'].map((page) => (
                    <button
                      key={page}
                      onClick={() => setCurrentPage(page)}
                      className="block hover:text-amber-400 capitalize"
                    >
                      {page}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-4">Contacto</h4>
                <div className="space-y-2 text-sm">
                  <p>hola@gutnes.com</p>
                  <p>+34 123 456 789</p>
                  <p>Madrid, España</p>
                </div>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-4">Síguenos</h4>
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-amber-500 cursor-pointer transition-colors">
                    <span className="text-xs">𝕏</span>
                  </div>
                  <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-amber-500 cursor-pointer transition-colors">
                    <span className="text-xs">in</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center pt-8 border-t border-slate-800">
              <p className="text-sm">© 2024 Gutnes Digital. Todos los derechos reservados.</p>
            </div>
          </div>
        </footer>
      </>
    );
  }

  // E-COMMERCE (Tienda de servicios digitales)
  function renderEcommerce() {
    return (
      <>
        {/* Header Tienda */}
        <header className={`bg-linear-to-r ${theme.colors.bg} text-white py-4`}>
          <div className="container mx-auto px-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-8">
                <Image src={logo} alt="Gutnes Logo" width={100} height={35} className="w-auto h-9" />
                <nav className="hidden md:flex gap-6">
                  <a href="#" className="hover:text-amber-400">Paquetes</a>
                  <a href="#" className="hover:text-amber-400">Servicios</a>
                  <a href="#" className="hover:text-amber-400">Consultoría</a>
                </nav>
              </div>
              <div className="flex items-center gap-4">
                <ShoppingCart className="h-5 w-5" />
                <span className="text-sm">0 items</span>
              </div>
            </div>
          </div>
        </header>

        {/* Catálogo de Paquetes */}
        <section className="py-16 bg-slate-50">
          <div className="container mx-auto px-6">
            <h1 className="text-4xl font-bold text-center mb-4">Paquetes de Servicios Digitales</h1>
            <p className="text-center text-gray-600 mb-12">Elige el paquete perfecto para tu negocio</p>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { 
                  name: 'Starter', 
                  price: 'Desde $499', 
                  features: ['Sitio web 5 páginas', 'Diseño responsive', 'SEO básico', 'Hosting 1 año'],
                  popular: false 
                },
                { 
                  name: 'Business', 
                  price: 'Desde $999', 
                  features: ['Sitio web ilimitado', 'E-commerce básico', 'SEO avanzado', 'Soporte 24/7'],
                  popular: true 
                },
                { 
                  name: 'Enterprise', 
                  price: 'Personalizado', 
                  features: ['Solución a medida', 'Integración sistemas', 'Consultoría IT', 'Soporte dedicado'],
                  popular: false 
                }
              ].map((pkg, i) => (
                <Card key={i} className={`p-8 relative ${pkg.popular ? 'border-2 border-amber-500 shadow-2xl' : ''}`}>
                  {pkg.popular && (
                    <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-amber-500 text-white px-4 py-1 rounded-full text-sm font-bold">
                      Más Popular
                    </span>
                  )}
                  <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                  <p className={`text-3xl font-bold mb-6 bg-linear-to-r ${theme.colors.primary} bg-clip-text text-transparent`}>{pkg.price}</p>
                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, j) => (
                      <li key={j} className="flex items-center gap-2 text-sm">
                        <CheckCircle2 className="h-5 w-5 text-green-500" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className={`w-full ${pkg.popular ? `bg-linear-to-r ${theme.colors.secondary}` : ''}`}>
                    Agregar al Carrito
                  </Button>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <footer className="bg-slate-900 text-gray-400 py-8">
          <div className="container mx-auto px-6 text-center">
            <p>© 2024 Gutnes Digital - Tienda de Servicios</p>
          </div>
        </footer>
      </>
    );
  }

  // PORTFOLIO (Galería de proyectos)
  function renderPortfolio() {
    return (
      <>
        {/* Hero Portfolio */}
        <section className={`py-24 bg-linear-to-br ${theme.colors.bg} text-white`}>
          <div className="container mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <h1 className={`text-6xl font-bold mb-6 bg-linear-to-r ${theme.colors.primary} bg-clip-text text-transparent`}>
                Nuestro Portfolio
              </h1>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Proyectos que transformaron negocios. Innovación digital que genera resultados.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Galería de Proyectos */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {[
                { title: 'Polvero el Vivo', category: 'E-commerce', tech: 'Next.js, Stripe' },
                { title: 'ERP Corporativo', category: 'Sistema Web', tech: 'React, Node.js' },
                { title: 'App Logística', category: 'Mobile App', tech: 'React Native' },
                { title: 'Dashboard Analytics', category: 'SaaS', tech: 'Vue.js, Python' },
                { title: 'Web Inmobiliaria', category: 'Landing Page', tech: 'Next.js' },
                { title: 'Plataforma Educativa', category: 'E-learning', tech: 'Laravel, Vue' }
              ].map((project, i) => (
                <Card key={i} className="overflow-hidden group cursor-pointer hover:shadow-2xl transition-all">
                  <div className={`h-48 bg-linear-to-br ${i % 2 === 0 ? theme.colors.primary : theme.colors.secondary} flex items-center justify-center`}>
                    <Code className="h-20 w-20 text-white/20" />
                  </div>
                  <div className="p-6">
                    <span className="text-xs font-semibold text-amber-600 uppercase">{project.category}</span>
                    <h3 className="text-xl font-bold mt-2 mb-2">{project.title}</h3>
                    <p className="text-sm text-gray-600">{project.tech}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <footer className="bg-slate-900 text-gray-400 py-8">
          <div className="container mx-auto px-6 text-center">
            <p>© 2024 Gutnes Digital - Portfolio</p>
          </div>
        </footer>
      </>
    );
  }

  // BLOG (Revista digital)
  function renderBlog() {
    return (
      <>
        {/* Header Blog */}
        <header className={`bg-linear-to-r ${theme.colors.bg} text-white py-6`}>
          <div className="container mx-auto px-6">
            <div className="flex items-center justify-between">
              <div>
                <Image src={logo} alt="Gutnes Logo" width={120} height={40} className="w-auto h-10 mb-2" />
                <p className="text-sm text-gray-300">Blog de Tecnología y Transformación Digital</p>
              </div>
              <Button variant="outline" className="text-white border-white hover:bg-white/10">Suscribirse</Button>
            </div>
          </div>
        </header>

        {/* Artículos Destacados */}
        <section className="py-16 bg-slate-50">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-8">Artículos Recientes</h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* Artículo Principal */}
              <Card className="md:col-span-2 overflow-hidden">
                <div className="grid md:grid-cols-2">
                  <div className={`h-64 md:h-auto bg-linear-to-br ${theme.colors.primary} flex items-center justify-center`}>
                    <BookOpen className="h-32 w-32 text-white/20" />
                  </div>
                  <div className="p-8">
                    <span className="text-xs font-semibold text-amber-600">DESTACADO</span>
                    <h3 className="text-3xl font-bold mt-2 mb-4">
                      El Futuro del Desarrollo Web en 2024
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Descubre las tendencias y tecnologías que están revolucionando el desarrollo web moderno...
                    </p>
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <span>Por Gutnes Team</span>
                      <span>•</span>
                      <span>5 min lectura</span>
                      <span>•</span>
                      <span>20 Nov 2024</span>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Artículos Secundarios */}
              {[
                { title: 'SEO Local: Guía Completa 2024', category: 'Marketing' },
                { title: 'Next.js vs React: ¿Cuál Elegir?', category: 'Desarrollo' },
                { title: 'Ciberseguridad para PYMEs', category: 'Seguridad' },
                { title: 'UX/UI: Mejores Prácticas', category: 'Diseño' }
              ].map((article, i) => (
                <Card key={i} className="p-6 hover:shadow-xl transition-shadow cursor-pointer">
                  <span className="text-xs font-semibold text-amber-600 uppercase">{article.category}</span>
                  <h3 className="text-xl font-bold mt-2 mb-3">{article.title}</h3>
                  <div className="flex items-center gap-3 text-sm text-gray-500">
                    <span>3 min lectura</span>
                    <span>•</span>
                    <span>18 Nov 2024</span>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <footer className="bg-slate-900 text-gray-400 py-8">
          <div className="container mx-auto px-6 text-center">
            <p>© 2024 Gutnes Digital Blog</p>
          </div>
        </footer>
      </>
    );
  }

  // DASHBOARD (Panel de administración)
  function renderDashboard() {
    return (
      <>
        <div className="flex h-screen">
          {/* Sidebar */}
          <aside className={`w-64 bg-linear-to-b ${theme.colors.bg} text-white p-6`}>
            <div className="mb-8">
              <Image src={logo} alt="Gutnes Logo" width={100} height={35} className="w-auto h-9" />
              <p className="text-xs text-gray-400 mt-2">Panel de Control</p>
            </div>
            <nav className="space-y-2">
              {[
                { icon: Home, label: 'Dashboard' },
                { icon: BarChart3, label: 'Analíticas' },
                { icon: Globe, label: 'Proyectos' },
                { icon: Users, label: 'Clientes' },
                { icon: Settings, label: 'Configuración' }
              ].map((item, i) => (
                <a key={i} href="#" className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-white/10 transition-colors">
                  <item.icon className="h-5 w-5" />
                  <span>{item.label}</span>
                </a>
              ))}
            </nav>
          </aside>

          {/* Main Content */}
          <main className="flex-1 bg-slate-50 overflow-auto">
            {/* Top Bar */}
            <header className="bg-white border-b px-8 py-4">
              <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold">Dashboard Principal</h1>
                <Button className={`bg-linear-to-r ${theme.colors.secondary}`}>Nuevo Proyecto</Button>
              </div>
            </header>

            {/* Stats Cards */}
            <div className="p-8">
              <div className="grid md:grid-cols-4 gap-6 mb-8">
                {[
                  { label: 'Proyectos Activos', value: '12', icon: Rocket, color: 'blue' },
                  { label: 'Clientes', value: '45', icon: Users, color: 'green' },
                  { label: 'Ingresos Mes', value: '$15K', icon: TrendingUp, color: 'amber' },
                  { label: 'Tareas Pendientes', value: '8', icon: Clock, color: 'red' }
                ].map((stat, i) => (
                  <Card key={i} className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <stat.icon className={`h-8 w-8 text-${stat.color}-500`} />
                      <span className={`text-3xl font-bold bg-linear-to-r ${theme.colors.primary} bg-clip-text text-transparent`}>
                        {stat.value}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600">{stat.label}</p>
                  </Card>
                ))}
              </div>

              {/* Proyectos Recientes */}
              <Card className="p-6">
                <h2 className="text-xl font-bold mb-4">Proyectos Recientes</h2>
                <div className="space-y-3">
                  {[
                    { name: 'Polvero el Vivo', status: 'En Desarrollo', progress: 75 },
                    { name: 'ERP Empresarial', status: 'Testing', progress: 90 },
                    { name: 'App Móvil', status: 'Planeación', progress: 25 }
                  ].map((project, i) => (
                    <div key={i} className="p-4 bg-slate-50 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-semibold">{project.name}</span>
                        <span className="text-sm text-gray-500">{project.status}</span>
                      </div>
                      <div className="w-full bg-slate-200 rounded-full h-2">
                        <div className={`bg-linear-to-r ${theme.colors.secondary} h-2 rounded-full`} style={{ width: `${project.progress}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </main>
        </div>
      </>
    );
  }

  // ONE-PAGE TABS (Página con pestañas)
  function renderOnePage() {
    const [activeTab, setActiveTab] = useState('servicios');
    
    return (
      <>
        {/* Hero con Tabs */}
        <section className={`min-h-screen bg-linear-to-br ${theme.colors.bg}`}>
          <div className="container mx-auto px-6 py-12">
            {/* Header */}
            <div className="text-center mb-12">
              <Image src={logo} alt="Gutnes Logo" width={150} height={50} className="w-auto h-14 mx-auto mb-6" />
              <h1 className={`text-5xl font-bold mb-4 bg-linear-to-r ${theme.colors.primary} bg-clip-text text-transparent`}>
                Gutnes Digital
              </h1>
              <p className="text-xl text-gray-300">Tu Futuro Online en Buenas Manos</p>
            </div>

            {/* Tabs Navigation */}
            <div className="flex justify-center gap-4 mb-8 flex-wrap">
              {[
                { id: 'servicios', label: 'Servicios', icon: Code },
                { id: 'portfolio', label: 'Portfolio', icon: ImageIcon },
                { id: 'equipo', label: 'Equipo', icon: Users },
                { id: 'contacto', label: 'Contacto', icon: Mail }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all ${
                    activeTab === tab.id
                      ? `bg-linear-to-r ${theme.colors.secondary} text-white shadow-lg`
                      : 'bg-white/10 text-white hover:bg-white/20'
                  }`}
                >
                  <tab.icon className="h-5 w-5" />
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="bg-white rounded-2xl p-8 min-h-[400px]">
              {activeTab === 'servicios' && (
                <div>
                  <h2 className="text-3xl font-bold mb-6">Nuestros Servicios</h2>
                  <div className="grid md:grid-cols-3 gap-6">
                    {[
                      { icon: Globe, title: 'Desarrollo Web', desc: 'Sitios profesionales y modernos' },
                      { icon: Search, title: 'SEO & Marketing', desc: 'Posicionamiento garantizado' },
                      { icon: Shield, title: 'Auditoría IT', desc: 'Seguridad y optimización' }
                    ].map((service, i) => (
                      <div key={i} className="p-6 bg-slate-50 rounded-lg">
                        <service.icon className={`h-12 w-12 mb-4 text-amber-500`} />
                        <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                        <p className="text-gray-600">{service.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'portfolio' && (
                <div>
                  <h2 className="text-3xl font-bold mb-6">Proyectos Destacados</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    {['Polvero el Vivo', 'ERP Corporativo', 'App Logística', 'Web Inmobiliaria'].map((project, i) => (
                      <div key={i} className="p-6 bg-slate-50 rounded-lg">
                        <h3 className="text-xl font-bold mb-2">{project}</h3>
                        <p className="text-gray-600">Proyecto exitoso de transformación digital</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'equipo' && (
                <div>
                  <h2 className="text-3xl font-bold mb-6">Nuestro Equipo</h2>
                  <p className="text-gray-600 mb-8">
                    Un equipo de expertos apasionados por la tecnología y la innovación digital.
                  </p>
                  <div className="grid md:grid-cols-3 gap-6">
                    {['Desarrollo', 'Diseño', 'Marketing'].map((dept, i) => (
                      <div key={i} className="text-center p-6 bg-slate-50 rounded-lg">
                        <div className={`w-20 h-20 rounded-full bg-linear-to-r ${theme.colors.primary} mx-auto mb-4`} />
                        <h3 className="font-bold">{dept}</h3>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'contacto' && (
                <div>
                  <h2 className="text-3xl font-bold mb-6">Contáctanos</h2>
                  <div className="max-w-md">
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <Mail className="h-5 w-5 text-amber-500" />
                        <span>hola@gutnes.com</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Phone className="h-5 w-5 text-amber-500" />
                        <span>+34 123 456 789</span>
                      </div>
                      <Button className={`w-full mt-6 bg-linear-to-r ${theme.colors.secondary} text-white`}>
                        Enviar Mensaje
                      </Button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      </>
    );
  }
}

// Timeline Step Component
function TimelineStep({ step, index }: { step: any; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      className="relative mb-12 last:mb-0"
    >
      <div className="flex items-center gap-8">
        {/* Timeline Line */}
        {index !== 3 && (
          <div className="absolute left-8 top-20 w-0.5 h-full bg-cyan-500/30" />
        )}

        {/* Number Circle */}
        <div className="relative z-10">
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : { scale: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
            className="w-16 h-16 rounded-full bg-linear-to-br from-cyan-400 to-blue-600 flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-cyan-500/50"
          >
            {step.number}
          </motion.div>
        </div>

        {/* Content */}
        <Card className="flex-1 p-6 bg-slate-800 border-slate-700 hover:border-cyan-500 transition-colors">
          <div className="flex items-start gap-4">
            <div className="bg-cyan-500/10 p-3 rounded-lg">
              <step.icon className="h-6 w-6 text-cyan-400" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2 text-white">{step.title}</h3>
              <p className="text-gray-400">{step.description}</p>
            </div>
          </div>
        </Card>
      </div>
    </motion.div>
  );
}

// Animated Section Component
function Section({
  children,
  className = "",
  id
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.section
      id={id}
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8 }}
      className={`py-24 ${className}`}
    >
      {children}
    </motion.section>
  );
}

// Animated Content Component
function AnimatedContent({
  children,
  delay = 0
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  );
}

// Animated Card Component
function AnimatedCard({
  children,
  delay = 0
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.9, y: 30 }}
      animate={isInView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.9, y: 30 }}
      transition={{ duration: 0.5, delay }}
    >
      {children}
    </motion.div>
  );
}
