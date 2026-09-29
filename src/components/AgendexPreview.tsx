"use client";

import { useState } from "react";
import Image from "next/image";
import { LayoutDashboard, Network, Image as ImageIcon, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";

const realCaptures = [
  {
    src: "/images/agendex/shot_02.png",
    title: "Landing Page Oficial",
    description: "Propuesta de valor SaaS en agendex.studio: métricas de retención, -70% no-show y configuración en 5 min.",
    tag: "Producción",
  },
  {
    src: "/images/agendex/shot_01.png",
    title: "Motor de Agenda & Despacho",
    description: "Vista interactiva de agenda multi-profesional con estados en vivo y recordatorios automáticos por WhatsApp.",
    tag: "Core SaaS",
  },
  {
    src: "/images/agendex/shot_05.png",
    title: "Especialización por Verticales",
    description: "Configuración automatizada para barberías, estéticas y salones con comisiones y servicios específicos.",
    tag: "Multi-Vertical",
  },
  {
    src: "/images/agendex/shot_03.png",
    title: "Flujo Integral de Clientes",
    description: "Desde la reserva online sin fricción hasta el control de caja y cierre de mes.",
    tag: "Finanzas & POS",
  },
];

export default function AgendexPreview() {
  const [activeTab, setActiveTab] = useState<"photos" | "architecture">("photos");
  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? realCaptures.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === realCaptures.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="w-full bg-slate-950 rounded-t-2xl border-b border-slate-700/60 overflow-hidden font-sans">
      {/* Top Chrome / Window Controls */}
      <div className="px-4 py-2.5 bg-slate-900 border-b border-slate-800 flex items-center justify-between">
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
      {activeTab === "photos" ? (
        <div className="p-3 sm:p-5 bg-gradient-to-b from-slate-900/40 to-slate-950">
          <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden border border-slate-800 bg-slate-950 group">
            <Image
              src={realCaptures[currentSlide].src}
              alt={realCaptures[currentSlide].title}
              fill
              className="object-cover object-top transition-transform duration-500"
              priority
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent pointer-events-none" />

            {/* Slide Navigation Buttons */}
            <button
              onClick={prevSlide}
              aria-label="Captura anterior"
              className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-slate-900/80 hover:bg-indigo-600 border border-slate-700 text-white flex items-center justify-center transition shadow-lg opacity-80 group-hover:opacity-100"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              aria-label="Siguiente captura"
              className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-slate-900/80 hover:bg-indigo-600 border border-slate-700 text-white flex items-center justify-center transition shadow-lg opacity-80 group-hover:opacity-100"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* Caption on image */}
            <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 flex flex-col sm:flex-row sm:items-end justify-between gap-2 p-3 sm:p-4 rounded-xl bg-slate-900/90 border border-slate-800 backdrop-blur-md">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-[10px] font-semibold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20 uppercase tracking-wider">
                    {realCaptures[currentSlide].tag}
                  </span>
                  <h4 className="text-xs sm:text-sm font-bold text-white">
                    {realCaptures[currentSlide].title}
                  </h4>
                </div>
                <p className="text-[11px] sm:text-xs text-slate-300 line-clamp-1 sm:line-clamp-none">
                  {realCaptures[currentSlide].description}
                </p>
              </div>

              {/* Dots */}
              <div className="flex items-center gap-1.5 self-center sm:self-end">
                {realCaptures.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentSlide(idx)}
                    className={`h-1.5 rounded-full transition-all ${
                      idx === currentSlide ? "w-6 bg-indigo-500" : "w-1.5 bg-slate-700"
                    }`}
                    aria-label={`Ir a captura ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : (
        /* Architecture Tab */
        <div className="p-4 sm:p-6 bg-slate-950 space-y-4">
          <div className="text-xs font-semibold text-indigo-400 uppercase tracking-wider">
            Arquitectura de Aislamiento &amp; SSR en Tiempo Real
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 text-center text-xs">
            <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
              <div className="text-[10px] text-indigo-400 font-mono font-semibold">PASO 1</div>
              <div className="font-semibold text-white text-xs">Subdominios</div>
              <div className="text-[10px] text-slate-400">tenant.agendex.studio</div>
            </div>

            <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
              <div className="text-[10px] text-indigo-400 font-mono font-semibold">PASO 2</div>
              <div className="font-semibold text-white text-xs">Edge Middleware</div>
              <div className="text-[10px] text-slate-400">Next.js 15 Rewrites</div>
            </div>

            <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
              <div className="text-[10px] text-indigo-400 font-mono font-semibold">PASO 3</div>
              <div className="font-semibold text-white text-xs">SSR Deduplicado</div>
              <div className="text-[10px] text-slate-400">React.cache() -60%</div>
            </div>

            <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
              <div className="text-[10px] text-emerald-400 font-mono font-semibold">PASO 4</div>
              <div className="font-semibold text-white text-xs">Supabase RLS</div>
              <div className="text-[10px] text-emerald-400">Zero-Leak Isolation</div>
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-900/70 border border-slate-800 text-xs text-slate-300 leading-relaxed">
            <strong className="text-white">Garantía de Seguridad Bancaria:</strong> Cada registro en la base de datos PostgreSQL está protegido por Row Level Security (`WHERE tenant_id = auth.current_tenant()`). Ningún negocio puede consultar citas, clientes o caja de otro, aún manipulando peticiones en el cliente.
          </div>
        </div>
      )}
    </div>
  );
}
