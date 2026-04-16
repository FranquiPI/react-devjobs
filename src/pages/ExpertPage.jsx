import React from 'react'

export function ExpertPage() {
    
    const [send, setSend] = React.useState(false)

    const handleSend = () => {
        
        console.log('Formulario enviado')
        setSend(true)
        
    }
    
    return (
        <>
            <main className="">
                {/* <!-- Hero Section --> */}
                <header className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24 text-center">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-widest uppercase mb-6">Expertise a tu alcance</span>
                    <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-on-background mb-6 max-w-3xl mx-auto">
                        Habla con un experto de DevJobs
                    </h1>
                    <p className="text-lg md:text-xl text-text-light-primary max-w-2xl mx-auto leading-relaxed">
                        Optimiza tu búsqueda de talento técnico con asesoría personalizada. Ayudamos a las empresas líderes a construir equipos de ingeniería excepcionales.
                    </p>
                </header>
                {/* <!-- Main Content: Bento Grid Layout --> */}
                <section className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    {/* <!-- Left: Form Card (Col 1-7) --> */}
                    <div className="lg:col-span-7 bg-white border border-outline rounded-xl p-8 md:p-12">
                        <h2 className="text-2xl font-black tracking-tighter mb-8">Cuéntanos sobre tus necesidades</h2>
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-bold tracking-wide text-on-surface-variant">Nombre completo</label>
                                    <input className="w-full px-4 py-3 rounded-lg border border-outline focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none bg-surface/30" placeholder="Ej. Juan Pérez" type="text" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold tracking-wide text-on-surface-variant">Empresa</label>
                                    <input className="w-full px-4 py-3 rounded-lg border border-outline focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none bg-surface/30" placeholder="Nombre de tu organización" type="text" />
                                </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-bold tracking-wide text-on-surface-variant">Email corporativo</label>
                                    <input className="w-full px-4 py-3 rounded-lg border border-outline focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none bg-surface/30" placeholder="nombre@empresa.com" type="email" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold tracking-wide text-on-surface-variant">Tamaño del equipo</label>
                                    <select className="w-full px-4 py-3 rounded-lg border border-outline focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none bg-surface/30 appearance-none">
                                        <option>1-10 empleados</option>
                                        <option>11-50 empleados</option>
                                        <option>51-200 empleados</option>
                                        <option>201-500 empleados</option>
                                        <option>500+ empleados</option>
                                    </select>
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-bold tracking-wide text-on-surface-variant">¿Cómo podemos ayudarte?</label>
                                <textarea className="w-full px-4 py-3 rounded-lg border border-outline focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none bg-surface/30 resize-none" placeholder="Describe brevemente tus objetivos de contratación..." rows="4"></textarea>
                            </div>
                            <button onClick={handleSend} disabled={send} className={send? "bg-secondary w-full text-white py-4 rounded-lg font-black tracking-tight text-lg" :"w-full bg-primary text-white py-4 rounded-lg font-black tracking-tight text-lg hover:bg-primary/90 transition-all transform active:scale-[0.98]"}>
                                {send? 'Enviado' : 'Enviar solicitud de consultoría'}
                            </button>
                            <p className="text-xs text-center text-on-surface-variant">
                                Al enviar este formulario, aceptas nuestra <a className="underline" href="#">Política de Privacidad</a>.
                            </p>
                        </form>
                    </div>
                    {/* <!-- Right: Benefits & Social Proof (Col 8-12) --> */}
                    <div className="lg:col-span-5 space-y-8">
                        {/* <!-- Benefits Section --> */}
                        <div className="bg-primary/5 border border-primary/10 rounded-xl p-8">
                            <h3 className="text-xl font-black tracking-tighter mb-6">Por qué las empresas eligen nuestra consultoría</h3>
                            <ul className="space-y-6">
                                <li className="flex gap-4">
                                    <div className="shrink-0 w-10 h-10 rounded-lg bg-primary text-white flex items-center justify-center">
                                        <span className="material-symbols-outlined" data-icon="psychology">psychology</span>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-on-surface">Estrategia de marca empleadora</h4>
                                        <p className="text-sm text-secondary">Posicionamos tu empresa como el lugar ideal para los mejores desarrolladores.</p>
                                    </div>
                                </li>
                                <li className="flex gap-4">
                                    <div className="shrink-0 w-10 h-10 rounded-lg bg-primary text-white flex items-center justify-center">
                                        <span className="material-symbols-outlined" data-icon="robot_2">robot_2</span>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-on-surface">Filtrado asistido por IA</h4>
                                        <p className="text-sm text-secondary">Reducimos el tiempo de contratación en un 60% mediante algoritmos avanzados.</p>
                                    </div>
                                </li>
                                <li className="flex gap-4">
                                    <div className="shrink-0 w-10 h-10 rounded-lg bg-primary text-white flex items-center justify-center">
                                        <span className="material-symbols-outlined" data-icon="groups">groups</span>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-on-surface">Pipeline exclusivo de talento</h4>
                                        <p className="text-sm text-secondary">Acceso a candidatos pasivos de alto nivel que no están en portales públicos.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        {/* <!-- Testimonial Block --> */}
                        <div className="bg-white border border-outline rounded-xl p-8 relative overflow-hidden">
                            <div className="absolute -top-4 -right-4 opacity-5">
                                <span className="material-symbols-outlined text-8xl" data-icon="format_quote">format_quote</span>
                            </div>
                            <div className="flex items-center gap-4 mb-6">
                                <img className="w-12 h-12 rounded-full object-cover" data-alt="portrait of a confident professional female tech executive in a bright modern office setting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBnBuwm5AcR-aZY9KHqx4lscAjippnufYvZsuGDvygBoi3H_g7de7cEf4jd8MSwcTPN_1oG1p_pH2Ta_t7IVuvlQb4g-WL4dD5d60EK1XrgY-rqC8MHX9wC8_ZSOKbxpx_DQpYKnrxVGBVfWDT0uGy9tKuou2awIgUkacrnuZUiKWVddr0H33rCuNgpuCYUWIR_cAq6YWBDobFHumjE-wP1xt2GguC5yxwTyiWviR5V1pFY7q_7UkulpBHBrQ4IFbw7rD6mSjw9d4o" />
                                <div>
                                    <p className="font-bold text-sm text-on-surface">Mariana Valdés</p>
                                    <p className="text-xs text-secondary">VP of Engineering, TechScale</p>
                                </div>
                            </div>
                            <blockquote className="italic text-on-surface leading-relaxed">
                                "DevJobs transformó nuestra manera de contratar. En menos de un mes, cerramos tres vacantes críticas de Senior DevOps con expertos de altísimo nivel."
                            </blockquote>
                        </div>
                    </div>
                </section>
                {/* <!-- FAQ Section --> */}
                <section className="max-w-4xl mx-auto px-6 py-24">
                    <h2 className="text-3xl font-black tracking-tighter text-center mb-12">Preguntas frecuentes</h2>
                    <div className="space-y-4">
                        <div className="bg-white border border-outline rounded-lg p-6 hover:border-primary/30 transition-colors">
                            <h3 className="font-bold text-on-surface mb-2">¿En cuánto tiempo recibiré respuesta?</h3>
                            <p className="text-secondary text-sm">Nuestro equipo de expertos suele responder en un plazo máximo de 24 horas hábiles tras recibir tu solicitud.</p>
                        </div>
                        <div className="bg-white border border-outline rounded-lg p-6 hover:border-primary/30 transition-colors">
                            <h3 className="font-bold text-on-surface mb-2">¿La consultoría inicial tiene algún costo?</h3>
                            <p className="text-secondary text-sm">No, la primera sesión de diagnóstico es totalmente gratuita para entender tus necesidades y explicarte cómo podemos ayudarte.</p>
                        </div>
                        <div className="bg-white border border-outline rounded-lg p-6 hover:border-primary/30 transition-colors">
                            <h3 className="font-bold text-on-surface mb-2">¿Trabajan con empresas internacionales?</h3>
                            <p className="text-secondary text-sm">Sí, apoyamos a empresas de todo el mundo en la búsqueda de talento remoto o presencial en mercados clave.</p>
                        </div>
                        <div className="bg-white border border-outline rounded-lg p-6 hover:border-primary/30 transition-colors">
                            <h3 className="font-bold text-on-surface mb-2">¿Puedo elegir candidatos por stack tecnológico?</h3>
                            <p className="text-secondary text-sm">Absolutamente. Nuestra plataforma está segmentada por más de 100 tecnologías diferentes para asegurar un match técnico perfecto.</p>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}