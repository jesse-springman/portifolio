import { Factory } from "lucide-react";

export const Experiencia = () => {
  return (
    <section
      id="experiencia"
      className="relative w-full py-28 bg-gradient-to-b from-[#020617] via-[#020617] to-[#020617] text-white overflow-hidden"
    >
      {/* Glow background */}
      <div className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-500/10 blur-[120px] rounded-full"></div>

      <div className="relative max-w-6xl mx-auto px-6">
        
        {/* Heading */}
        <div className="mb-16">
          <p className="text-blue-400 uppercase text-sm tracking-widest mb-3">
            Experiência
          </p>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Experiência Profissional
          </h1>
          <p className="text-gray-400 mt-4 max-w-xl">
            Minha atuação atual conecta programação, engenharia e processos
            industriais, com impacto direto na produção.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative border-l border-white/10 pl-10">

          {/* Dot */}
          <div className="absolute left-[-8px] top-2 w-4 h-4 bg-blue-500 rounded-full shadow-[0_0_20px_#3b82f6]"></div>

          {/* Card */}
          <div className="group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 transition duration-500 hover:border-blue-500/40 hover:bg-white/10">
            
            {/* Glow hover */}
            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-r from-blue-500/10 via-transparent to-purple-500/10"></div>

            {/* Header */}
            <div className="relative flex items-start gap-5 mb-6">
              
              <div className="p-4 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-white/10">
                <Factory className="text-blue-400" size={26} />
              </div>

              <div>
                <h2 className="text-2xl font-semibold">
                  Programador CNC – PCP
                </h2>
                <p className="text-gray-400 text-sm">
                  Empresa atual • Presente
                </p>
              </div>
            </div>

            {/* Description */}
            <ul className="relative space-y-3 text-gray-300">
              <li>• Interpretação de desenhos técnicos 2D</li>
              <li>• Modelagem de peças em 3D utilizando o software SolidWorks</li>
              <li>• Programação de máquinas CNC com CADMAN LVD</li>
              <li>• Integração com banco de dados das máquinas</li>
              <li>• Colaboração com equipe de engenharia (PCP)</li>
              <li>• Impacto direto na produção e eficiência operacional</li>
            </ul>

            {/* Tags */}
            <div className="relative flex flex-wrap gap-2 mt-8">
              {[
                "CADMAN",
                "CNC",
                "3D Modeling",
                "Integração",
                "Processos Industriais",
              ].map((tech, index) => (
                <span
                  key={index}
                  className="text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300 backdrop-blur-md hover:bg-blue-500/10 hover:text-blue-400 transition"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};