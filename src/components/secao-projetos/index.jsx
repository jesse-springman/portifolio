export default function PortfolioSections() {
  const technologies = [
    'React',
    'TypeScript',
    'Next.js',
    'Node.js',
    'NestJS',
    'Prisma',
    'PostgreSQL',
    'Docker',
    'Tailwind',
    'Jest',
    'Git',
    'CI/CD',
  ];

  const projects = [
    {
      title: 'PetShop AI Messaging System',
      description:
        'Sistema inteligente para petshops com geração automática de mensagens usando IA, gestão de clientes e agenda online.',
      image:
        'https://images.unsplash.com/photo-1517849845537-4d257902454a?q=80&w=1200&auto=format&fit=crop',
      stack: ['Next.js', 'NestJS', 'PostgreSQL', 'Prisma'],
    },
    {
      title: 'TaskFlow Dashboard',
      description:
        'Dashboard moderno para gerenciamento de tarefas com autenticação JWT e arquitetura escalável.',
      image:
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop',
      stack: ['React', 'Node.js', 'Docker'],
    },
  ];

  return (
    <main className="min-h-screen bg-[#050816] text-white px-6 md:px-16 py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col gap-24">
        {/* Tecnologias */}
        <section className="relative">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.12),transparent_50%)]" />

          <div className="relative z-10 flex flex-col gap-10">
            <div className="flex flex-col gap-4">
              <span className="text-cyan-400 uppercase tracking-[0.4em] text-sm font-semibold">
                Stack Principal
              </span>

              <h2 className="text-4xl md:text-6xl font-black leading-tight max-w-4xl">
                Tecnologias que utilizo para criar aplicações modernas e escaláveis.
              </h2>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
              {technologies.map((tech) => (
                <div
                  key={tech}
                  className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-6 transition-all duration-300 hover:border-cyan-400/50 hover:-translate-y-2 hover:shadow-[0_0_35px_rgba(34,211,238,0.15)]"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 to-blue-500/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                  <div className="relative z-10 flex items-center justify-between">
                    <div className="flex flex-col gap-2">
                      <span className="text-2xl font-bold text-white">{tech}</span>

                      <span className="text-sm text-zinc-400">
                        Desenvolvimento moderno
                      </span>
                    </div>

                    <div className="w-14 h-14 rounded-2xl bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center text-cyan-300 text-xl font-bold">
                      {tech.slice(0, 2).toUpperCase()}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projetos em destaque */}
        <section className="relative flex flex-col gap-10">
          <div className="flex items-end justify-between flex-wrap gap-6">
            <div className="flex flex-col gap-4 max-w-3xl">
              <span className="text-cyan-400 uppercase tracking-[0.4em] text-sm font-semibold">
                Portfólio
              </span>

              <h2 className="text-4xl md:text-6xl font-black leading-tight">
                Projetos em destaque
              </h2>

              <p className="text-zinc-400 text-lg leading-relaxed">
                Aplicações full stack desenvolvidas com foco em performance,
                arquitetura escalável, experiência do usuário e integração com APIs.
              </p>
            </div>

            <button className="px-8 py-4 rounded-2xl border border-cyan-400/30 bg-cyan-400/10 text-cyan-300 font-semibold transition-all duration-300 hover:bg-cyan-400 hover:text-black hover:shadow-[0_0_30px_rgba(34,211,238,0.35)]">
              Ver todos os projetos
            </button>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project) => (
              <div
                key={project.title}
                className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] backdrop-blur-xl transition-all duration-500 hover:-translate-y-3 hover:border-cyan-400/40 hover:shadow-[0_0_50px_rgba(34,211,238,0.12)]"
              >
                <div className="relative h-[300px] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-[#050816]/30 to-transparent" />

                  <div className="absolute top-5 right-5 px-4 py-2 rounded-full border border-cyan-400/30 bg-black/40 backdrop-blur-xl text-cyan-300 text-sm font-semibold">
                    Full Stack
                  </div>
                </div>

                <div className="p-8 flex flex-col gap-6">
                  <div className="flex flex-col gap-3">
                    <h3 className="text-3xl font-bold text-white group-hover:text-cyan-300 transition-colors duration-300">
                      {project.title}
                    </h3>

                    <p className="text-zinc-400 leading-relaxed text-lg">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    {project.stack.map((item) => (
                      <span
                        key={item}
                        className="px-4 py-2 rounded-full border border-white/10 bg-white/[0.04] text-sm text-zinc-300"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-4 pt-2">
                    <button className="flex-1 py-4 rounded-2xl bg-cyan-400 text-black font-bold transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(34,211,238,0.35)]">
                      Ver projeto
                    </button>

                    <button className="px-6 py-4 rounded-2xl border border-white/10 bg-white/[0.04] text-zinc-300 font-semibold transition-all duration-300 hover:border-cyan-400/30 hover:text-cyan-300">
                      GitHub
                    </button>
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
