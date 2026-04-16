import { Link } from "../components/Link";

export function CompaniesPage() {
  return (
    <>
      <main className="pt-20">
        {/* <!-- Hero Section --> */}
        <section className="relative overflow-hidden pb-32 px-8">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative z-10">
              <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-text-light-primary mb-6 leading-[0.9]">
                Encuentra al mejor talento técnico, hoy mismo
              </h1>
              <p className="text-xl text-text-light-secondary mb-10 max-w-lg leading-relaxed">
                Publica tus ofertas ante una comunidad de miles de
                desarrolladores verificados y escala tu equipo de ingeniería con
                confianza.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-primary text-white px-8 py-4 rounded-lg font-bold tracking-wide text-base hover:bg-primary/90 transition-all shadow-sm">
                  Empieza a publicar
                </button>

                <button className="bg-white border border-border-light text-text-light-primary px-8 py-4 rounded-lg font-bold tracking-wide text-base hover:bg-content-light transition-all">
                  Ver candidatos
                </button>
              </div>
            </div>
            <div className="relative">
              <img
                alt="Team collaborating"
                className="rounded-xl shadow-2xl object-cover aspect-4/3 w-full relative z-10"
                data-alt="Professional diverse software engineering team collaborating in a modern open-plan office with high ceilings and natural soft sunlight"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBxrAJg3oPigoDAmHh5LK2ClZVa8OM0cNQMPr9ypUCq2vOjr2AhP4-4TXnIjhqGxJTKz8pb349PjAtsCibdEulaS-QV0wtdbfxptMX-pdadzlGLnlwypAPnsUQV-09kwQClEwSaKuwkvsOC85ZWm3xV-DVNV_nSpIwy4JYL1Fs3I77B9VYD5SVovfC9nfQTU-gyJ6p1z6Xm0omwaDhBL41m44scMregh4m8vq5t1WoojD9B1-YNa7RHzuNwx53pgujtPRNmiraCcQw"
              />
            </div>
          </div>
        </section>

        {/* TRUST/SOCIAL PROOF SECTION */}
        <section className="bg-content-light py-12 border-y border-border-light">
          <div className="max-w-7xl mx-auto px-8">
            <p className="text-center text-xs font-bold tracking-widest text-text-light-secondary uppercase mb-8">
              EMPRESAS QUE CONFÍAN EN NOSOTROS
            </p>
            <div className="flex flex-wrap justify-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
              <div className="flex items-center gap-2 font-bold text-xl">
                <span className="material-symbols-outlined" data-icon="cloud">
                  cloud
                </span>{" "}
                CLOUDTECH
              </div>
              <div className="flex items-center gap-2 font-bold text-xl">
                <span
                  className="material-symbols-outlined"
                  data-icon="rocket_launch"
                >
                  rocket_launch
                </span>{" "}
                VELOCITY
              </div>
              <div className="flex items-center gap-2 font-bold text-xl">
                <span className="material-symbols-outlined" data-icon="code">
                  code
                </span>{" "}
                DEVFLOW
              </div>
              <div className="flex items-center gap-2 font-bold text-xl">
                <span
                  className="material-symbols-outlined"
                  data-icon="database"
                >
                  database
                </span>{" "}
                DATASYNC
              </div>
              <div className="flex items-center gap-2 font-bold text-xl">
                <span
                  className="material-symbols-outlined"
                  data-icon="terminal"
                >
                  terminal
                </span>{" "}
                COREJS
              </div>
            </div>
          </div>
        </section>

        {/* KEY BENEFITS */}
        <section className="max-w-7xl py-24 px-8 mx-auto flex flex-col items-center justify-center">
          <div className="text-center mb-16">
            <h2 className="pb-4 font-bold text-3xl md:text-4xl tracking-tighter">
              Diseñado para lideres técnicos
            </h2>

            <p className="text-text-light-secondary">
              Nuestra plataforma elimina el ruido para que te concentres en lo
              que importa: contratar talento excepcional.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* <!-- Card 1 --> */}
            <div className="bg-white p-8 rounded-lg border-border-light hover:border-primary/20 transition-all group">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                <span
                  className="material-symbols-outlined"
                  data-icon="verified_user"
                >
                  verified_user
                </span>
              </div>
              <h3 className="text-xl font-bold mb-3 tracking-tight">
                Talento Verificado
              </h3>
              <p className="text-text-light-secondary leading-relaxed">
                Cada perfil pasa por un proceso de revisión manual para asegurar
                experiencia real y habilidades técnicas comprobadas.
              </p>
            </div>
            {/* <!-- Card 2 --> */}
            <div className="bg-white p-8 rounded-lg border-border-light hover:border-primary/20 transition-all group">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                <span className="material-symbols-outlined" data-icon="filter_alt">
                  filter_alt
                </span>
              </div>
              <h3 className="text-xl font-bold mb-3 tracking-tight">
                Filtrado Inteligente
              </h3>
              <p className="text-text-light-secondary leading-relaxed">
                Encuentra candidatos por stack tecnológico específico, nivel de
                seniority y expectativas salariales en segundos.
              </p>
            </div>
            {/* <!-- Card 3 --> */}
            <div className="bg-white p-8 rounded-lg border-border-light hover:border-primary/20 transition-all group">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                <span className="material-symbols-outlined" data-icon="group_work">
                  group_work
                </span>
              </div>
              <h3 className="text-xl font-bold mb-3 tracking-tight">
                Gestión Simplificada
              </h3>
              <p className="text-text-light-secondary leading-relaxed">
                Pipeline integrado de candidatos para gestionar entrevistas y
                feedback sin salir de la plataforma.
              </p>
            </div>
          </div>
        </section>

        {/* <!-- Secondary CTA --> */}
        <section className="py-24 px-8">
          <div className="max-w-5xl mx-auto bg-primary rounded-xl p-12 text-center text-text-dark-primary relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.1),transparent)]"></div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-6 relative z-10">
              ¿Listo para contratar?
            </h2>
            <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto relative z-10">
              Únete a cientos de empresas que ya están construyendo el futuro
              con el mejor talento de DevJobs.
            </p>
            <div className="flex flex-wrap justify-center gap-4 relative z-10">
              <button className="bg-white text-primary px-8 py-4 rounded-lg font-bold tracking-wide text-lg shadow-lg hover:bg-slate-50 transition-colors">
                Crea tu cuenta de empresa
              </button>
              <Link href='/expert' className="bg-primary border border-white/20 text-white px-8 py-4 rounded-lg font-bold tracking-wide text-lg hover:bg-white/10 transition-colors">
                Hablar con un experto
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
