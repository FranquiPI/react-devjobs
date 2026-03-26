
export function CompaniesPage() {
    
    return (
    <>
      <main class="pt-20">
        {/* <!-- Hero Section --> */}
        <section class="relative overflow-hidden pb-32 px-8">
          <div class="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
            <div class="relative z-10">
              <h1 class="text-5xl md:text-7xl font-black tracking-tighter text-text-light-primary mb-6 leading-[0.9]">
                Encuentra al mejor talento técnico, hoy mismo
              </h1>
              <p class="text-xl text-text-light-secondary mb-10 max-w-lg leading-relaxed">
                Publica tus ofertas ante una comunidad de miles de
                desarrolladores verificados y escala tu equipo de ingeniería con
                confianza.
              </p>
              <div class="flex flex-wrap gap-4">
                <button class="bg-primary text-white px-8 py-4 rounded-lg font-bold tracking-wide text-base hover:bg-primary/90 transition-all shadow-sm">
                  Empieza a publicar
                </button>

                <button class="bg-white border outline text-text-light-primary px-8 py-4 rounded-lg font-bold tracking-wide text-base hover:bg-content-light transition-all">
                  Ver candidatos
                </button>
              </div>
            </div>
            <div class="relative">
              <div class="absolute -top-12 -right-12 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
              <img
                alt="Team collaborating"
                class="rounded-xl shadow-2xl border border-outline object-cover aspect-4/3 w-full relative z-10"
                data-alt="Professional diverse software engineering team collaborating in a modern open-plan office with high ceilings and natural soft sunlight"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBxrAJg3oPigoDAmHh5LK2ClZVa8OM0cNQMPr9ypUCq2vOjr2AhP4-4TXnIjhqGxJTKz8pb349PjAtsCibdEulaS-QV0wtdbfxptMX-pdadzlGLnlwypAPnsUQV-09kwQClEwSaKuwkvsOC85ZWm3xV-DVNV_nSpIwy4JYL1Fs3I77B9VYD5SVovfC9nfQTU-gyJ6p1z6Xm0omwaDhBL41m44scMregh4m8vq5t1WoojD9B1-YNa7RHzuNwx53pgujtPRNmiraCcQw"
              />
            </div>
          </div>
        </section>

        {/* TRUST/SOCIAL PROOF SECTION */}
        <section className="bg-content-light py-12 border-y outline">
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

        {/* <!-- Secondary CTA --> */}
        <section class="py-24 px-8">
          <div class="max-w-5xl mx-auto bg-primary rounded-xl p-12 text-center text-text-dark-primary relative overflow-hidden">
            <div class="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.1),transparent)]"></div>
            <h2 class="text-4xl md:text-5xl font-black tracking-tighter mb-6 relative z-10">
              ¿Listo para contratar?
            </h2>
            <p class="text-xl opacity-90 mb-10 max-w-2xl mx-auto relative z-10">
              Únete a cientos de empresas que ya están construyendo el futuro
              con el mejor talento de DevJobs.
            </p>
            <div class="flex flex-wrap justify-center gap-4 relative z-10">
              <button class="bg-white text-primary px-8 py-4 rounded-lg font-bold tracking-wide text-lg shadow-lg hover:bg-slate-50 transition-colors">
                Crea tu cuenta de empresa
              </button>
              <button class="bg-primary-container border border-white/20 text-white px-8 py-4 rounded-lg font-bold tracking-wide text-lg hover:bg-white/10 transition-colors">
                Hablar con un experto
              </button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
