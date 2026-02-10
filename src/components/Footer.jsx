function Footer() {

    return (
        <div>
            {/* <!--Footer--> */}
            <footer className="flex justify-center mt-10 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-40 py-10 w-full bg-content-light border-t border-border-light">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6 w-full max-w-7xl">
                    <div className="flex items-center gap-4">
                        <div className="size-5 text-primary">
                            <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                                <path clipRule="evenodd" d="M12.0799 24L4 19.2479L9.95537 8.75216L18.04 13.4961L18.0446 4H29.9554L29.96 13.4961L38.0446 8.75216L44 19.2479L35.92 24L44 28.7521L38.0446 39.2479L29.96 34.5039L29.9554 44H18.0446L18.04 34.5039L9.95537 39.2479L4 28.7521L12.0799 24Z" fill="currentColor" fill-rule="evenodd"></path>
                            </svg>
                        </div>

                        <div className="text-text-light-primary">
                            <h2 className="text-base font-bold leading-tight tracking-tight">DevJobs</h2>
                        </div>
                    </div>


                    <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-text-light-secondary">
                        <a href="" className="hover:text-primary">Sobre Nosotros</a>
                        <a href="" className="hover:text-primary">Contacto</a>
                        <a href="" className="hover:text-primary">Términos de Servicio</a>
                        <a href="" className="hover:text-primary">Política de Privacidad</a>
                    </nav>


                    <p className="text-sm text-text-light-secondary">© 2025 DevJobs. Todos los derechos reservados.</p>

                </div>

            </footer>
        </div>
    )

}

export default Footer