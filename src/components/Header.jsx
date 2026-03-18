import { Link } from "./Link"


function Header() {
    return (
        <>
        {/* TOP NAVBAR*/ }
        <header className = "flex justify-center whitespace-nowrap border-b border-solid border-border-light py-3 bg-content-light/80 backdrop-blur-sm sticky top-0 z-50" >
            <div className="px-4 sm:px-8 md:px-16 lg:px-24 xl:px-40 flex items-center justify-between w-full max-w-7xl">
                <div className="flex gap-4">
                    <div className="size-6 text-primary">
                        <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                            <path clipRule="evenodd"
                                d="M12.0799 24L4 19.2479L9.95537 8.75216L18.04 13.4961L18.0446 4H29.9554L29.96 13.4961L38.0446 8.75216L44 19.2479L35.92 24L44 28.7521L38.0446 39.2479L29.96 34.5039L29.9554 44H18.0446L18.04 34.5039L9.95537 39.2479L4 28.7521L12.0799 24Z"
                                fill="currentColor" fillRule="evenodd"></path>
                        </svg>
                    </div>

                    <div className="text-text-light-primary">
                        <Link className="text-lg font-bold leading-tight tracking-tight" href="/">
                            DevJobs
                        </Link>
                    </div>
                </div>

                {/* Menu Top Navbar */}
                <div className="hidden lg:flex flex-1 justify-end gap-8 items-center">
                    <nav className="flex items-center gap-9">
                        <Link className="text-sm font-medium leading-normal hover:text-primary" href="#">Para empresas</Link>
                        <Link className="text-sm font-medium leading-normal hover:text-primary" href="/search">Buscar Empleo</Link>
                        <Link className="text-sm font-medium leading-normal hover:text-primary" href="#">Blog</Link>
                        <Link className="text-sm font-medium leading-normal hover:text-primary" href="#">Login/Registrarse</Link>
                    </nav>

                </div>




                <div className="flex gap-3 items-center">
                    <div className="md:px-4">
                        <button className="size-6 rounded-lg hover:bg-background-light">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                className="icon icon-tabler icons-tabler-outline icon-tabler-bell">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path
                                    d="M10 5a2 2 0 1 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6" />
                                <path d="M9 17v1a3 3 0 0 0 6 0v-1" />
                            </svg>
                        </button>
                    </div>

                    <div className="lg:hidden">
                        <button className="size-6 rounded-lg hover:bg-background-light">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                className="icon icon-tabler icons-tabler-outline icon-tabler-menu-2">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M4 6l16 0" />
                                <path d="M4 12l16 0" />
                                <path d="M4 18l16 0" />
                            </svg>
                        </button>
                    </div>

                    <div className="">
                        {/* <!--<button
                    className="flex min-w-20 max-w-96 cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-wide hover:bg-primary/90 transition-colors">
                    <span className="truncate">Publicar Empleo</span>
                        </button> --> */}
                        <devjobs-avatar service="github" username="franquipi"></devjobs-avatar>
                    </div>
                </div>
            </div>
        </header >
        </>
    )
}

export default Header