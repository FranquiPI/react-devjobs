
import { Link } from "../components/Link"
import { useRouter } from "../hooks/useRouter"

export function HomePage() {
    const { navigateTo } = useRouter()
    
    //MAnejador de formulario principal
    const handleSearch = (event) => {
        // prevenimos el  comportamiento por defecto (reload de página)
        event.preventDefault()
        const formData = new FormData(event.target)
        const searchTerm = formData.get('search')
        
        const url = searchTerm
        ? `/search?text=${encodeURIComponent(searchTerm)}`
        : '/search'

        navigateTo(url)
    }


    return (
        <>
                
                    <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
                        <div className="layout-container flex h-full grow flex-col">
                            <main className="px-4 sm:px-8 md:px-16 lg:px-24 xl:px-40 flex flex-1 justify-center py-5">
                                <div className="layout-content-container flex flex-col w-full max-w-7xl flex-1 gap-10 md:gap-16 lg:gap-20">
                                    {/* <!-- HeroSection --> */}
                                    <div className="@container bg-content-light dark:bg-content-dark rounded-xl shadow-sm">
                                        <div className="flex flex-col gap-6 p-6 py-10 @[480px]:gap-8 @[864px]:flex-row @[864px]:p-10">
                                            <div className="flex flex-col gap-6 @[480px]:gap-8 @[864px]:justify-center @[864px]:w-1/2">
                                                <div className="flex flex-col gap-2 text-left">
                                                    <h1 className="text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em] text-text-light-primary dark:text-text-dark-primary">Encuentra el trabajo de tus sueños en tecnología.</h1>
                                                    <h2 className="text-sm font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal text-text-light-secondary dark:text-text-dark-secondary">Conectamos a los mejores desarrolladores con empresas innovadoras.</h2>
                                                </div>
                                                <label className="flex flex-col min-w-40 h-14 w-full max-w-120 @[480px]:h-16">
                                                    <form role="search" onSubmit={handleSearch} className="flex w-full flex-1 items-stretch rounded-lg h-full border border-border-light dark:border-border-dark focus-within:ring-2 focus-within:ring-primary">
                                                        
                                                        <input 
                                                            className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-text-light-primary dark:text-text-dark-primary focus:outline-0 focus:ring-0 border-none bg-background-light dark:bg-background-dark focus:border-none h-full placeholder:text-text-light-secondary dark:placeholder:text-text-dark-secondary px-4 rounded-r-none border-r-0 pr-2 rounded-l-none border-l-0 pl-2 text-sm font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal" 
                                                            placeholder="Buscar puesto/tecnología" 
                                                            name="search"
                                                            type="text"
                                                        
                                                        />
                                                        <div className="flex items-center justify-center rounded-r-lg border-l-0 border-none bg-background-light dark:bg-background-dark pr-2">
                                                            <button type="submit" className="flex min-w-21 max-w-120 cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em] hover:bg-primary/90 transition-colors">
                                                                Buscar
                                                            </button>
                                                        </div>
                                                    </form>
                                                </label>
                                            </div>
                                            <div className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg @[480px]:h-auto @[480px]:min-w- @[864px]:w-1/2" data-alt="Abstract gradient illustration representing technology and code." style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBp__sMrOr-65_PkWT8yDUrxaR7IlnRkwbXPCDEblvtCk-BeeOTNxXyVaHJIO30WgZUGeEn9iHAymf9usnH5S7caJKDnNx5h9D11dz97RhONlXSDFuzMsn6pupZHJxQTApOwrc_75IHj3olo5MIek6L8r54PyNz74UGUqX4Hsy8nppUjGf5abg4Rs1GxebmJIyqAxTzBQoSlK5HpPnM1oIk-LEBfO6QcZSmjxie8R65vFIBSlJJevfgV0B4ym3JMfgSOSBd8sq_Puw") '}}></div>
                                        </div>
                                    </div>
                                    {/* <!-- FeatureSection --> */}
                                    <div className="flex flex-col gap-10 @container">
                                        <div className="flex flex-col gap-4">
                                            <h2 className="tracking-light text-[32px] font-bold leading-tight @[480px]:text-4xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em] max-w-180 text-text-light-primary dark:text-text-dark-primary">¿Por qué DevJobs?</h2>
                                            <p className="text-base font-normal leading-normal max-w-180 text-text-light-secondary dark:text-text-dark-secondary">Descubre las ventajas que nos convierten en la plataforma preferida por desarrolladores y empresas líderes en el sector tecnológico.</p>
                                        </div>
                                        <div className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-4 p-0">
                                            <div className="flex flex-1 gap-3 rounded-xl border border-border-light dark:border-border-dark bg-content-light dark:bg-content-dark p-6 flex-col">
                                                <div className="text-primary"><span className="material-symbols-outlined text-3xl">verified</span></div>
                                                <div className="flex flex-col gap-1">
                                                    <h3 className="text-lg font-bold leading-tight text-text-light-primary dark:text-text-dark-primary">Jobs Curados</h3>
                                                    <p className="text-sm font-normal leading-normal text-text-light-secondary dark:text-text-dark-secondary">Accede a una selección de las mejores ofertas de empleo, revisadas y aprobadas por nuestro equipo.</p>
                                                </div>
                                            </div>
                                            <div className="flex flex-1 gap-3 rounded-xl border border-border-light dark:border-border-dark bg-content-light dark:bg-content-dark p-6 flex-col">
                                                <div className="text-primary"><span className="material-symbols-outlined text-3xl">link</span></div>
                                                <div className="flex flex-col gap-1">
                                                    <h3 className="text-lg font-bold leading-tight text-text-light-primary dark:text-text-dark-primary">Conexión Directa</h3>
                                                    <p className="text-sm font-normal leading-normal text-text-light-secondary dark:text-text-dark-secondary">Comunícate directamente con las empresas sin intermediarios, agilizando tu proceso de selección.</p>
                                                </div>
                                            </div>
                                            <div className="flex flex-1 gap-3 rounded-xl border border-border-light dark:border-border-dark bg-content-light dark:bg-content-dark p-6 flex-col">
                                                <div className="text-primary"><span className="material-symbols-outlined text-3xl">workspace_premium</span></div>
                                                <div className="flex flex-col gap-1">
                                                    <h3 className="text-lg font-bold leading-tight text-text-light-primary dark:text-text-dark-primary">Perfiles de Calidad</h3>
                                                    <p className="text-sm font-normal leading-normal text-text-light-secondary dark:text-text-dark-secondary">Las empresas confían en nosotros para encontrar talento excepcional. Muestra tu perfil a los mejores.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                   {/*  <!-- Featured Jobs Section --> */}
                                    <div className="flex flex-col gap-4">
                                        <h2 className="text-[22px] font-bold leading-tight tracking-[-0.015em] text-text-light-primary dark:text-text-dark-primary">Empleos Destacados</h2>
                                        <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-4">
                                            <div className="flex flex-col gap-3 pb-3 bg-content-light dark:bg-content-dark border border-border-light dark:border-border-dark rounded-xl overflow-hidden group">
                                                <div className="w-full bg-center bg-no-repeat aspect-video bg-cover" data-alt="Company logo for InnovateTech" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAeMfFDs6Sp7F8o0R3nbuGZE-m841OJYMIxQ2XX7HIPnrNB-VrmKNb2k_KE_rOh3vPLRoaPy7en5_YmEGYuUETjXOF1Ox5X1lPexBwcOYIyFv5JaB1NtgAYzRiu_EITDgRySHHrMfmXMkXuS8jB9jnYbM2QK6bEpJ_nMsHHjJjaQ9tZLomnKeWM0fhhQvlSaNndi-vs63Mg66XFrTbqKuCAY95nqKAiqdUyGMI1ts9jP8J7jWA4nfRJYRJOsV4wSrXvmoCW2Czj3LM")' }}></div>
                                                <div className="px-4 pb-4">
                                                    <p className="text-base font-bold leading-normal text-text-light-primary dark:text-text-dark-primary group-hover:text-primary dark:group-hover:text-primary transition-colors">Frontend Developer</p>
                                                    <p className="text-sm font-normal leading-normal text-text-light-secondary dark:text-text-dark-secondary">InnovateTech, Remoto</p>
                                                    <p className="text-sm font-normal leading-normal text-text-light-secondary dark:text-text-dark-secondary mt-2">React, TypeScript, GraphQL</p>
                                                </div>
                                            </div>
                                            <div className="flex flex-col gap-3 pb-3 bg-content-light dark:bg-content-dark border border-border-light dark:border-border-dark rounded-xl overflow-hidden group">
                                                <div className="w-full bg-center bg-no-repeat aspect-video bg-cover" data-alt="Company logo for DataSolutions" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDVeYzqSji0a-vjTrd7WbFmBlb-hmF4-d7eTv0ufrekrhDxnplfDQOzKe8XjCRhQjPSzM-pV4LcXDhgYkh4woGvLXqUejB2sksh98cbVpmbIl8K48DQc-dTQZ-vgt4zpxaQGfVshOC7Wzjiv1D3AKMoV_7wjHtpSnoO5CSKelxGCPUOgzD8ZucIi90Uh81dQTins4WcGgMlPBseqTuxkYL6wj46OHf5G6pZNzGLmpT0ZkGhXqU-z2cmmH10vRiq7r-9_5ugh_IO7N4")' }}></div>
                                                <div className="px-4 pb-4">
                                                    <p className="text-base font-bold leading-normal text-text-light-primary dark:text-text-dark-primary group-hover:text-primary dark:group-hover:text-primary transition-colors">Backend Engineer (Python)</p>
                                                    <p className="text-sm font-normal leading-normal text-text-light-secondary dark:text-text-dark-secondary">DataSolutions, Madrid</p>
                                                    <p className="text-sm font-normal leading-normal text-text-light-secondary dark:text-text-dark-secondary mt-2">Django, PostgreSQL, AWS</p>
                                                </div>
                                            </div>
                                            <div className="flex flex-col gap-3 pb-3 bg-content-light dark:bg-content-dark border border-border-light dark:border-border-dark rounded-xl overflow-hidden group">
                                                <div className="w-full bg-center bg-no-repeat aspect-video bg-cover" data-alt="Company logo for CreativeMinds" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDhoRhLJmhevjXDj2nUziAD9p6LkQZLQDFqoE7OpUWpeagcTDjuF_gUyjtHgrTB5tMOYv5718aSXOgpgzj0wOFZyOGKHV6B_04xltxCQ5-eyt4-sjmtxC4nLauqJwssKj3Jm_OfVEXxi6SZjuNK6sij7ezpuwbiRAWrB_x_d7lwZqqeEQ2jnsEvU4XpoFe14BFRj79zT_pJld8Bme_54gnok0N-UQp5CdnQlyTjzRYTY3vBPXJTm3xTCHWDjfsO9qqnct060YD_7F0") '}}></div>
                                                <div className="px-4 pb-4">
                                                    <p className="text-base font-bold leading-normal text-text-light-primary dark:text-text-dark-primary group-hover:text-primary dark:group-hover:text-primary transition-colors">Full Stack Developer</p>
                                                    <p className="text-sm font-normal leading-normal text-text-light-secondary dark:text-text-dark-secondary">CreativeMinds, Barcelona</p>
                                                    <p className="text-sm font-normal leading-normal text-text-light-secondary dark:text-text-dark-secondary mt-2">Node.js, Vue.js, Docker</p>
                                                </div>
                                            </div>
                                            <div className="flex flex-col gap-3 pb-3 bg-content-light dark:bg-content-dark border border-border-light dark:border-border-dark rounded-xl overflow-hidden group">
                                                <div className="w-full bg-center bg-no-repeat aspect-video bg-cover" data-alt="Company logo for CloudServe" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCo-_laxLv1ovpwcN8hNbNR3K5de1-fi48zVl8C6aQyuwdLV5nVefU2XcYwWq0dzz5YLcc540swgpcOqDVdUoe4p5PnViTiGzLRSZ6fEAOOQwRMGCuZECT4QU6K72zF1xgEuz0fsryVIhum8X87ihFz9JxDzFNSD7AilQml_lAqidL52_zfYOQ71rsHojAtb8mSs1TOFDaYBaeSu0scweq1-b1_6BwVYvgX5OzvbpnN73k4nbcFVyKLYHVyPrl8NzrND9iBsWd4lTY") '}}></div>
                                                <div className="px-4 pb-4">
                                                    <p className="text-base font-bold leading-normal text-text-light-primary dark:text-text-dark-primary group-hover:text-primary dark:group-hover:text-primary transition-colors">DevOps Specialist</p>
                                                    <p className="text-sm font-normal leading-normal text-text-light-secondary dark:text-text-dark-secondary">CloudServe, Remoto</p>
                                                    <p className="text-sm font-normal leading-normal text-text-light-secondary dark:text-text-dark-secondary mt-2">Kubernetes, Terraform, CI/CD</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- Final CTA Section --> */}
                                    <div className="bg-primary/10 dark:bg-primary/20 rounded-xl p-8 md:p-12 text-center flex flex-col items-center gap-6">
                                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-text-light-primary dark:text-text-dark-primary max-w-2xl">¿Listo para dar el siguiente paso en tu carrera?</h2>
                                        <p className="text-base text-text-light-secondary dark:text-text-dark-secondary max-w-xl">Crea tu perfil de desarrollador o empieza a buscar empleos ahora para conectar con las empresas más innovadoras del sector tecnológico.</p>
                                        <div className="flex flex-col sm:flex-row gap-4 mt-2">
                                            <button className="flex min-w-21 cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-colors">
                                                <Link href="/search" className="truncate">Buscar Empleos</Link>
                                            </button>
                                            <button className="flex min-w-21 cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-content-light dark:bg-content-dark text-text-light-primary dark:text-text-dark-primary text-base font-bold leading-normal tracking-[0.015em] border border-border-light dark:border-border-dark hover:bg-background-light dark:hover:bg-background-dark/50 transition-colors">
                                                <span className="truncate">Crear Perfil de Dev</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </main>
                        </div>
                    </div>
        </>
    )
}