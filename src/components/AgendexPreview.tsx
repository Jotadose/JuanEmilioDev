"use client";

import { useState } from "react";
import { LayoutDashboard, Network, CheckCircle2, Clock, DollarSign, Users } from "lucide-react";

export default function AgendexPreview() {
  const [activeTab, setActiveTab] = useState<"dashboard" | "architecture">("dashboard");

  return (
    <div className="w-full bg-slate-950/80 rounded-t-2xl border-b border-slate-700/60 overflow-hidden font-sans">
      {/* Top Chrome / Window Controls */}
      <div className="px-4 py-2.5 bg-slate-900 border-b border-slate-800 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-green-500/80 inline-block" />
          </div>
          <span className="text-[11px] font-mono text-slate-400 ml-2 hidden sm:inline">
            https://[tenant].agendex.studio/calendar
          </span>
        </div>

        {/* Tab Toggle */}
        <div className="flex items-center gap-1 bg-slate-950 p-0.5 rounded-lg border border-slate-800 text-xs">
          <button
            onClick={() => setActiveTab("dashboard")}
            className={`flex items-center gap-1.5 px-3 py-1 rounded-md transition font-medium text-[11px] ${
              activeTab === "dashboard"
                ? "bg-indigo-600 text-white shadow-sm"
                : "text-slate-400 hover:text-slate-200"
            }`}
          >
            <LayoutDashboard className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Dashboard</span> UI
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
      {activeTab === "dashboard" ? (
        <div className="p-4 sm:p-5 bg-gradient-to-b from-slate-900/60 to-slate-950/80">
          {/* Header Stats Inside the Mockup */}
          <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-slate-800/80">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center font-bold text-white text-sm shadow-md shadow-indigo-600/30">
                A
              </div>
              <div>
                <div className="text-xs sm:text-sm font-semibold text-white flex items-center gap-2">
                  Barbería Elite
                  <span className="text-[10px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20 font-mono">
                    Multi-Tenant RLS
                  </span>
                </div>
                <div className="text-[11px] text-slate-400 flex items-center gap-2">
                  <span className="inline-flex items-center gap-1">
                    <Users className="w-3 h-3 text-indigo-400" /> 3 Profesionales activos
                  </span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs">
              <div className="bg-slate-800/80 px-2.5 py-1 rounded-md border border-slate-700/60 text-slate-300 font-mono text-[11px]">
                Hoy, 10:00 - 19:00
              </div>
              <div className="bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 px-2.5 py-1 rounded-md flex items-center gap-1 text-[11px] font-semibold">
                <DollarSign className="w-3 h-3" /> Caja: $148.500
              </div>
            </div>
          </div>

          {/* 3 Columns Dispatcher Simulation */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-3">
            {/* Column 1 */}
            <div className="bg-slate-900/90 rounded-xl p-2.5 border border-slate-800 space-y-2">
              <div className="flex items-center justify-between pb-1.5 border-b border-slate-800 text-xs">
                <span className="font-semibold text-slate-200">Carlos M. (Barbero)</span>
                <span className="text-[10px] text-indigo-400 font-mono bg-indigo-500/10 px-1.5 py-0.5 rounded">
                  4 citas
                </span>
              </div>
              <div className="space-y-1.5">
                <div className="p-2 rounded-lg bg-indigo-500/15 border border-indigo-500/30 text-xs">
                  <div className="flex items-center justify-between text-indigo-300 font-medium text-[11px]">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" /> 10:00 - 10:45
                    </span>
                    <span className="text-[10px] text-emerald-400 flex items-center gap-0.5">
                      <CheckCircle2 className="w-2.5 h-2.5" /> Confirmada
                    </span>
                  </div>
                  <div className="text-white font-medium text-[11px] mt-0.5">Corte Fade + Barba</div>
                  <div className="text-[10px] text-slate-400">Cliente: Felipe R. • $18.000</div>
                </div>

                <div className="p-2 rounded-lg bg-slate-800/60 border border-slate-700/60 text-xs">
                  <div className="flex items-center justify-between text-slate-300 font-medium text-[11px]">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" /> 11:30 - 12:15
                    </span>
                    <span className="text-[10px] text-indigo-400">Webpay</span>
                  </div>
                  <div className="text-white font-medium text-[11px] mt-0.5">Corte Clásico</div>
                  <div className="text-[10px] text-slate-400">Cliente: Lucas M. • Pagado</div>
                </div>
              </div>
            </div>

            {/* Column 2 */}
            <div className="bg-slate-900/90 rounded-xl p-2.5 border border-slate-800 space-y-2">
              <div className="flex items-center justify-between pb-1.5 border-b border-slate-800 text-xs">
                <span className="font-semibold text-slate-200">Esteban T. (Estilista)</span>
                <span className="text-[10px] text-indigo-400 font-mono bg-indigo-500/10 px-1.5 py-0.5 rounded">
                  3 citas
                </span>
              </div>
              <div className="space-y-1.5">
                <div className="p-2 rounded-lg bg-indigo-500/15 border border-indigo-500/30 text-xs">
                  <div className="flex items-center justify-between text-indigo-300 font-medium text-[11px]">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" /> 10:30 - 11:15
                    </span>
                    <span className="text-[10px] text-amber-400">En Atención</span>
                  </div>
                  <div className="text-white font-medium text-[11px] mt-0.5">Perfilado + Lavado</div>
                  <div className="text-[10px] text-slate-400">Cliente: Andrés G. • En sillón</div>
                </div>

                <div className="p-2 rounded-lg bg-amber-500/10 border border-amber-500/20 text-xs">
                  <div className="text-amber-300 font-medium text-[11px] flex items-center gap-1">
                    <Clock className="w-3 h-3" /> 13:00 - 14:00 • Bloqueo Colación
                  </div>
                  <div className="text-[10px] text-slate-400 mt-0.5">No disponible para reservas web</div>
                </div>
              </div>
            </div>

            {/* Column 3 */}
            <div className="bg-slate-900/90 rounded-xl p-2.5 border border-slate-800 space-y-2">
              <div className="flex items-center justify-between pb-1.5 border-b border-slate-800 text-xs">
                <span className="font-semibold text-slate-200">Matías V. (Colorista)</span>
                <span className="text-[10px] text-indigo-400 font-mono bg-indigo-500/10 px-1.5 py-0.5 rounded">
                  2 citas
                </span>
              </div>
              <div className="space-y-1.5">
                <div className="p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-xs">
                  <div className="flex items-center justify-between text-emerald-300 font-medium text-[11px]">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" /> 11:00 - 12:30
                    </span>
                    <span className="text-[10px] text-emerald-400">Visita sábado</span>
                  </div>
                  <div className="text-white font-medium text-[11px] mt-0.5">Decoloración + Matiz</div>
                  <div className="text-[10px] text-slate-400">Cliente: Camila B. • $45.000</div>
                </div>

                <div className="p-3 rounded-lg border border-dashed border-slate-800 text-center text-slate-500 text-[11px]">
                  + Espacio libre para reservas públicas
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        /* Architecture Tab */
        <div className="p-4 sm:p-6 bg-slate-950 space-y-4">
          <div className="text-xs font-semibold text-indigo-400 uppercase tracking-wider">
            Arquitectura de Aislamiento & SSR en Tiempo Real
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
