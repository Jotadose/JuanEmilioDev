"use client";

import { useState } from "react";
import Image from "next/image";
import { Network, Image as ImageIcon, ChevronLeft, ChevronRight, PlayCircle, ShieldCheck, CheckCircle2 } from "lucide-react";

interface Slide {
  src: string;
  title: string;
  description: string;
  tag: string;
  metric?: string;
}

const realCaptures: Slide[] = [
  {
    src: "/images/agendex/dashboard-reservas-metricas.png",
    title: "Dashboard de Reservas & Facturación Real",
    description: "Métricas de operación en vivo: 467 reservas procesadas, 125 completadas y más de $2.557.650 CLP facturados en el sistema.",
    tag: "Producción Real",
    metric: "467 Reservas • $2.55M CLP",
  },
  {
    src: "/images/agendex/agenda-multipersonal-semana.png",
    title: "Agenda Multi-Profesional Concurrente",
    description: "Planificación semanal en tiempo real dividida por columnas de profesionales y salas, evitando colisiones de horarios.",
    tag: "Core SaaS",
    metric: "Multi-Columna Tiempo Real",
  },
  {
    src: "/images/agendex/catalogo-servicios-precios.png",
    title: "Catálogo de Servicios, Tiempos & Precios",
    description: "Estructura modular de servicios agrupados por categorías, duraciones en minutos y parametrización de precios.",
    tag: "Gestión Comercial",
    metric: "34 Servicios • 8 Categorías",
  },
  {
    src: "/images/agendex/checkout-nueva-visita-modal.png",
    title: "Flujo Rápido de Agendamiento (POS)",
    description: "Modal interactivo para recepción y call center: selección de cliente, asignación de estilista y reserva instantánea.",
    tag: "Punto de Venta",
    metric: "Checkout en 3 Clics",
  },
  {
    src: "/images/agendex/panel-operaciones-hoy.png",
    title: "Control Operativo Diario",
    description: "Vista de control matutino con estado de aperturas, citas inmediatas y alertas de inventario.",
    tag: "Operaciones",
    metric: "Gestión de Turnos",
  },
  {
    src: "/images/agendex/shot_01.png",
    title: "Portal Comercial agendex.studio",
    description: "Landing de captación SaaS para clientes y onboarding automático de organizaciones con subdominio asignado.",
    tag: "Portal SaaS",
    metric: "Onboarding Multi-Tenant",
  },
  {
    src: "/images/agendex/shot_03.png",
    title: "Módulo Financiero & Cierre de Caja",
    description: "Desglose de ingresos por método de pago, control de caja diaria y liquidación automática de comisiones.",
    tag: "Finanzas & POS",
    metric: "Liquidación Automática",
  },
];

export default function AgendexPreview() {
  const [activeTab, setActiveTab] = useState<"photos" | "video" | "architecture">("photos");
  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? realCaptures.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === realCaptures.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="w-full bg-slate-950 rounded-t-2xl border-b border-slate-700/60 overflow-hidden font-sans">
      {/* Top Window Bar */}
      <div className="px-4 py-2.5 bg-slate-900 border-b border-slate-800 flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-green-500/80 inline-block" />
          </div>
          <span className="text-[11px] font-mono text-slate-400 ml-2 hidden sm:inline">
            https://agendex.studio • Producción Real
          </span>
        </div>

        {/* Tab Toggle */}
        <div className="flex items-center gap-1 bg-slate-950 p-0.5 rounded-lg border border-slate-800 text-xs">
          <button
            onClick={() => setActiveTab("photos")}
            className={`flex items-center gap-1.5 px-3 py-1 rounded-md transition font-medium text-[11px] ${
              activeTab === "photos"
                ? "bg-indigo-600 text-white shadow-sm"
                : "text-slate-400 hover:text-slate-200"
            }`}
          >
            <ImageIcon className="w-3.5 h-3.5" />
            Capturas Reales ({currentSlide + 1}/{realCaptures.length})
          </button>

          <button
            onClick={() => setActiveTab("video")}
            className={`flex items-center gap-1.5 px-3 py-1 rounded-md transition font-medium text-[11px] ${
              activeTab === "video"
                ? "bg-indigo-600 text-white shadow-sm"
                : "text-slate-400 hover:text-slate-200"
            }`}
          >
            <PlayCircle className="w-3.5 h-3.5 text-emerald-400" />
            Video Demo
          </button>

          <button
            onClick={() => setActiveTab("architecture")}
            className={`flex items-center gap-1.5 px-3 py-1 rounded-md transition font-medium text-[11px] ${
              activeTab === "architecture"
                ? "bg-indigo-600 text-white shadow-sm"
                : "text-slate-400 hover:text-slate-200"
            }`}
          >
            <Network className="w-3.5 h-3.5" />
            Arquitectura
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      {activeTab === "photos" && (
        <div className="p-3 sm:p-5 bg-gradient-to-b from-slate-900/40 to-slate-950">
          <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden border border-slate-800 bg-slate-950 group">
            <Image
              src={realCaptures[currentSlide].src}
              alt={realCaptures[currentSlide].title}
              fill
              className="object-contain sm:object-cover object-top transition-transform duration-500"
              priority
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent pointer-events-none" />

            {/* Slide Navigation Buttons */}
            <button
              onClick={prevSlide}
              aria-label="Captura anterior"
              className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-slate-900/85 hover:bg-indigo-600 border border-slate-700 text-white flex items-center justify-center transition shadow-lg opacity-85 group-hover:opacity-100 cursor-pointer z-10"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              aria-label="Siguiente captura"
              className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-slate-900/85 hover:bg-indigo-600 border border-slate-700 text-white flex items-center justify-center transition shadow-lg opacity-85 group-hover:opacity-100 cursor-pointer z-10"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* Caption on image */}
            <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 flex flex-col sm:flex-row sm:items-end justify-between gap-2 p-3 sm:p-4 rounded-xl bg-slate-900/90 border border-slate-800 backdrop-blur-md z-10">
              <div className="max-w-2xl">
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <span className="text-[10px] font-semibold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20 uppercase tracking-wider">
                    {realCaptures[currentSlide].tag}
                  </span>
                  {realCaptures[currentSlide].metric && (
                    <span className="text-[10px] font-semibold text-indigo-300 bg-indigo-500/10 px-2 py-0.5 rounded border border-indigo-500/20">
                      {realCaptures[currentSlide].metric}
                    </span>
                  )}
                  <h4 className="text-xs sm:text-sm font-bold text-white">
                    {realCaptures[currentSlide].title}
                  </h4>
                </div>
                <p className="text-[11px] sm:text-xs text-slate-300 line-clamp-2 sm:line-clamp-none">
                  {realCaptures[currentSlide].description}
                </p>
              </div>

              {/* Dots */}
              <div className="flex items-center gap-1.5 self-center sm:self-end flex-shrink-0">
                {realCaptures.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentSlide(idx)}
                    className={`h-1.5 rounded-full transition-all cursor-pointer ${
                      idx === currentSlide ? "w-6 bg-indigo-500" : "w-1.5 bg-slate-700 hover:bg-slate-500"
                    }`}
                    aria-label={`Ir a captura ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Video Demo Tab */}
      {activeTab === "video" && (
        <div className="p-3 sm:p-5 bg-gradient-to-b from-slate-900/40 to-slate-950">
          <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden border border-slate-800 bg-black flex items-center justify-center">
            <video
              src="/videos/agendex-demo.mp4"
              controls
              playsInline
              className="w-full h-full object-contain"
              poster="/images/agendex/dashboard-reservas-metricas.png"
            >
              Tu navegador no soporta el formato de video MP4.
            </video>
          </div>
          <div className="mt-3 flex items-center justify-between text-xs text-slate-400 px-1">
            <span className="flex items-center gap-1.5 text-emerald-400">
              <CheckCircle2 className="w-4 h-4" /> Demostración audiovisual de la propuesta comercial de Agendex
            </span>
            <span className="text-slate-500">Formato MP4 • Alta Definición</span>
          </div>
        </div>
      )}

      {/* Architecture Tab */}
      {activeTab === "architecture" && (
        <div className="p-4 sm:p-6 bg-slate-950 space-y-4">
          <div className="text-xs font-semibold text-indigo-400 uppercase tracking-wider flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            Arquitectura de Aislamiento Multi-Tenant &amp; Edge Middleware
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 text-center text-xs">
            <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
              <div className="text-[10px] text-indigo-400 font-mono font-semibold">PASO 1</div>
              <div className="font-semibold text-white text-xs">Subdominios Dinámicos</div>
              <div className="text-[10px] text-slate-400">[tenant].agendex.studio</div>
            </div>

            <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
              <div className="text-[10px] text-indigo-400 font-mono font-semibold">PASO 2</div>
              <div className="font-semibold text-white text-xs">Edge Middleware</div>
              <div className="text-[10px] text-slate-400">Next.js 15 URL Rewrites</div>
            </div>

            <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
              <div className="text-[10px] text-indigo-400 font-mono font-semibold">PASO 3</div>
              <div className="font-semibold text-white text-xs">SSR Deduplicado</div>
              <div className="text-[10px] text-slate-400">React.cache() in-memory -60%</div>
            </div>

            <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
              <div className="text-[10px] text-emerald-400 font-mono font-semibold">PASO 4</div>
              <div className="font-semibold text-white text-xs">Supabase RLS</div>
              <div className="text-[10px] text-emerald-400">Aislamiento en PostgreSQL</div>
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-900/70 border border-slate-800 text-xs text-slate-300 leading-relaxed">
            <strong className="text-white">Garantía de Aislamiento Estricto:</strong> Cada registro de clientes, citas o transacciones de caja en la base de datos PostgreSQL está blindado con Row Level Security (<code className="text-emerald-400">WHERE tenant_id = auth.current_tenant()</code>). Es imposible que un comercio acceda a la información de otro, incluso interceptando o manipulando tokens en el frontend.
          </div>
        </div>
      )}
    </div>
  );
}
