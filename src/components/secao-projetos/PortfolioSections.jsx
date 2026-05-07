import { useState } from 'react';
import { dadosProjetos } from '../../data/dados';

const projetosDestaque = dadosProjetos.filter((p) => p.destaque && !p.oculto);
const projetosMenores = dadosProjetos.filter((p) => !p.destaque && !p.oculto);

const technologies = [
  { name: 'Next.js', icon: 'N', color: 'text-white', bg: 'bg-black' },
  { name: 'Node.js', icon: '🟢', bg: 'bg-green-950' },
  { name: 'NestJS', icon: '🐱', bg: 'bg-red-950' },
  { name: 'TypeScript', icon: 'TS', color: 'text-white', bg: 'bg-blue-950' },
  { name: 'Prisma', icon: '▲', color: 'text-white', bg: 'bg-slate-900' },
  { name: 'PostgreSQL', icon: '🐘', bg: 'bg-sky-950' },
  { name: 'Docker', icon: '🐳', bg: 'bg-sky-950' },
  { name: 'TailwindCSS', icon: '~', color: 'text-sky-400', bg: 'bg-sky-950' },
  { name: 'Outras', icon: '+', color: 'text-slate-400', bg: 'bg-slate-800' },
];

const GitHubIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
    <path
      d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ExternalIcon = ({ size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <path
      d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <polyline
      points="15 3 21 3 21 9"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <line
      x1="10"
      y1="14"
      x2="21"
      y2="3"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

const temDemo = (projeto) => projeto.mostrarDemo === true;

export default function PortfolioSections() {
  const [mostrarTodos, setMostrarTodos] = useState(false);

  const menoresVisiveis = mostrarTodos
    ? projetosMenores
    : projetosMenores.slice(0, 4);

  return (
    <main className="min-h-screen bg-[#050816] text-white font-sans py-16">
      <div className="max-w-6xl mx-auto px-6">
        {/* ── TECNOLOGIAS ── */}
        <section className="mb-20">
          <div className="flex items-center gap-3 mb-7">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
              <path
                d="M8 6L3 12L8 18"
                stroke="#a855f7"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M16 6L21 12L16 18"
                stroke="#a855f7"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <h2 className="text-2xl font-bold">
              <span className="text-purple-400">Tecnologias</span>{' '}
              <span className="text-slate-300">que utilizo</span>
            </h2>
          </div>

          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-9 gap-4">
            {technologies.map((tech) => (
              <div
                key={tech.name}
                className="bg-slate-900 border border-slate-800 rounded-2xl py-5 px-3 flex flex-col items-center gap-2 cursor-pointer transition-colors duration-200 hover:border-purple-500"
              >
                <div
                  className={`w-14 h-14 rounded-xl ${tech.bg} border border-slate-700 flex items-center justify-center font-bold text-xl ${tech.color ?? 'text-white'}`}
                >
                  {tech.icon}
                </div>
                <span className="text-xs font-semibold text-slate-200 text-center leading-tight">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* ── PROJETOS ── */}
        <section>
          <div className="flex items-end justify-between flex-wrap gap-4 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <rect
                    x="2"
                    y="2"
                    width="9"
                    height="9"
                    rx="2"
                    stroke="#a855f7"
                    strokeWidth="2"
                  />
                  <rect
                    x="13"
                    y="2"
                    width="9"
                    height="9"
                    rx="2"
                    stroke="#a855f7"
                    strokeWidth="2"
                  />
                  <rect
                    x="2"
                    y="13"
                    width="9"
                    height="9"
                    rx="2"
                    stroke="#a855f7"
                    strokeWidth="2"
                  />
                  <rect
                    x="13"
                    y="13"
                    width="9"
                    height="9"
                    rx="2"
                    stroke="#a855f7"
                    strokeWidth="2"
                  />
                </svg>
                <h2 className="text-2xl font-bold">Projetos em destaque</h2>
              </div>
              <p className="text-slate-400 text-sm">
                Alguns projetos que desenvolvi com foco em resolver problemas
                reais
              </p>
            </div>

            <button
              onClick={() => setMostrarTodos(!mostrarTodos)}
              className="flex items-center gap-2 px-5 py-2.5 bg-transparent border border-slate-700 rounded-xl text-slate-200 text-sm font-semibold cursor-pointer transition-colors duration-200 hover:border-purple-500"
            >
              {mostrarTodos ? 'Ver menos' : 'Ver todos os projetos'}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <rect
                  x="2"
                  y="2"
                  width="9"
                  height="9"
                  rx="1.5"
                  stroke="#94a3b8"
                  strokeWidth="2"
                />
                <rect
                  x="13"
                  y="2"
                  width="9"
                  height="9"
                  rx="1.5"
                  stroke="#94a3b8"
                  strokeWidth="2"
                />
                <rect
                  x="2"
                  y="13"
                  width="9"
                  height="9"
                  rx="1.5"
                  stroke="#94a3b8"
                  strokeWidth="2"
                />
                <rect
                  x="13"
                  y="13"
                  width="9"
                  height="9"
                  rx="1.5"
                  stroke="#94a3b8"
                  strokeWidth="2"
                />
              </svg>
            </button>
          </div>

          {/* Cards grandes — destaques */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            {projetosDestaque.map((projeto, i) => {
              const isPrincipal = i === 0;

              return (
                <div
                  key={projeto.titulo}
                  className={`bg-[#0b1220] rounded-2xl overflow-hidden relative transition-all duration-200 hover:-translate-y-1 flex flex-col ${
                    isPrincipal
                      ? 'border border-purple-900 hover:border-purple-600'
                      : 'border border-slate-800 hover:border-purple-700'
                  }`}
                >
                  {isPrincipal && (
                    <div className="absolute top-4 left-4 z-10 bg-[#1e1040] border border-purple-700 rounded-lg px-3 py-1 text-xs font-bold text-purple-300 flex items-center gap-1.5">
                      ⭐ Projeto Principal
                    </div>
                  )}

                  <div className="relative h-48 overflow-hidden shrink-0">
                    <img
                      src={projeto.projetoImg}
                      alt={projeto.titulo}
                      className="w-full h-full object-cover block"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0b1220] via-[#0b122066] to-transparent" />
                  </div>

                  <div className="p-7 flex flex-col flex-1">
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <h3 className="text-xl font-bold leading-tight">
                        {projeto.titulo}
                      </h3>
                      <span className="shrink-0 bg-[#1a1040] border border-purple-700 rounded-md px-2.5 py-0.5 text-xs font-semibold text-purple-300 whitespace-nowrap">
                        {projeto.tipo}
                      </span>
                    </div>

                    <p className="text-slate-400 text-sm leading-relaxed mb-4">
                      {projeto.descricao}
                    </p>

                    {isPrincipal && (
                      <ul className="list-none p-0 mb-4 flex flex-col gap-1.5">
                        {projeto.tecnologias.slice(0, 4).map((s) => (
                          <li
                            key={s}
                            className="flex items-center gap-2 text-sm text-slate-400"
                          >
                            <span className="text-green-400">✓</span> {s}
                          </li>
                        ))}
                      </ul>
                    )}

                    <div className="flex flex-wrap gap-2 mb-5">
                      {projeto.tecnologias.slice(0, 5).map((s) => (
                        <span
                          key={s}
                          className="bg-slate-900 border border-slate-700 rounded-md px-2.5 py-1 text-xs text-slate-400"
                        >
                          {s}
                        </span>
                      ))}
                    </div>

                    {/* Botões — Ver Demo só aparece se tiver linkDemo válido */}
                    <div className="flex gap-3 mt-auto">
                      {temDemo(projeto) && (
                        <a
                          href={projeto.linkDemo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-semibold text-white no-underline transition-opacity duration-200 hover:opacity-80 ${
                            isPrincipal
                              ? 'bg-purple-700'
                              : 'border border-slate-700 hover:border-purple-600'
                          }`}
                        >
                          Ver Demo <ExternalIcon />
                        </a>
                      )}
                      <a
                        href={projeto.linkGitHub}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl border border-slate-700 text-slate-200 text-sm font-semibold no-underline transition-colors duration-200 hover:border-purple-600"
                      >
                        Ver Código <GitHubIcon />
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Cards menores */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {menoresVisiveis.map((projeto) => (
              <div
                key={projeto.titulo}
                className="bg-[#0b1220] border border-slate-800 rounded-2xl overflow-hidden transition-all duration-200 hover:-translate-y-1 hover:border-purple-800 flex flex-col"
              >
                <div className="relative h-24 overflow-hidden shrink-0">
                  <img
                    src={projeto.projetoImg}
                    alt={projeto.titulo}
                    className="w-full h-full object-cover block"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b1220] via-transparent to-transparent" />
                </div>

                <div className="p-4 flex flex-col flex-1">
                  <div className="flex items-center justify-between mb-2 gap-2">
                    <h4 className="text-sm font-bold leading-tight truncate">
                      {projeto.titulo}
                    </h4>
                    <span className="shrink-0 bg-[#1a1040] border border-purple-800 rounded px-2 py-0.5 text-[10px] font-semibold text-purple-300">
                      {projeto.tipo}
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-1 mb-3">
                    {projeto.tecnologias.slice(0, 3).map((s) => (
                      <span
                        key={s}
                        className="bg-slate-900 border border-slate-800 rounded px-2 py-0.5 text-[11px] text-slate-500"
                      >
                        {s}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-2 mt-auto">
                    {temDemo(projeto) && (
                      <a
                        href={projeto.linkDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-1.5 py-1.5 border border-slate-700 rounded-lg text-slate-200 text-xs font-semibold no-underline transition-colors duration-200 hover:border-purple-600"
                      >
                        Ver Demo <ExternalIcon size={11} />
                      </a>
                    )}
                    <a
                      href={projeto.linkGitHub}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-1.5 py-1.5 border border-slate-700 rounded-lg text-slate-200 text-xs font-semibold no-underline transition-colors duration-200 hover:border-purple-600"
                    >
                      Ver Código <GitHubIcon />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
