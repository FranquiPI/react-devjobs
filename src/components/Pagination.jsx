/**
 * Componente Pagination - Controla la navegación entre páginas
 * Funcionalidad:
 * - Genera un array de números de páginas
 * - Deshabilita botones cuando se llega al inicio o final
 * - Resalta la página actual con fondo azul
 */
export function Pagination({ currentPage, totalPages, onPageChange}) {
    // Generar array de páginas: [1, 2, 3, 4, 5, 6]
    // Array.from() crea un array del tamaño especificado
    // El callback (_, i) ignora el primer parámetro y usa el índice (i)
    // Se suma 1 porque los índices comienzan en 0
    const pages = Array.from({length: totalPages}, (_, i) => i + 1)

    // Estilos para el botón "Anterior"
    // Si estamos en la primera página: opacidad baja (0.5) y cursor no-permitido
    // Si no estamos en la primera página: opacidad normal (1) y cursor normal
    const stylePrevButton = {
        opacity: currentPage === 1 ? 0.5 : 1,     
        cursor: currentPage == 1 ? 'not-allowed' : 'pointer'
    } 
    
    // Estilos para el botón "Siguiente"
    // Si estamos en la última página: opacidad baja (0.4) y cursor no-permitido
    // Si no estamos en la última página: opacidad normal (1) y cursor normal
    const styleNextButton = {
        opacity: currentPage === totalPages ? 0.4 : 1,     
        cursor: currentPage == totalPages ? 'not-allowed' : 'pointer',
    }
    
    const handlePrevClick = (event) => {
        event.preventDefault()
        if (currentPage != 1) {
            onPageChange(currentPage - 1)
        }
    }

    const handleNextClick = (event) => {
        event.preventDefault()
        if (currentPage != totalPages) {
            onPageChange(currentPage + 1)
        }
    }

    const handleChangePage = (event, page) => {
        event.preventDefault()
        if (page !== currentPage) {
            onPageChange(page)
        }
    }




    return (
        <div>
            {/* Contenedor principal de la paginación */}
            <div className="flex justify-between items-center mt-8">
                
                {/* BOTÓN "ANTERIOR" - Navega a la página anterior */}
                <button
                    onClick={handlePrevClick}
                    id="btnAnterior" 
                    style={stylePrevButton} //Aplica estilos dinámicos (opacidad y cursor)
                    className="flex items-center text-sm font-medium gap-2 px-4 h-9 text-text-light-secondary bg-content-light border border-border-light rounded-lg hover:bg-primary/10 transition-colors">
                    
                    {/* SVG: Icono de flecha hacia la izquierda */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                    className="icon icon-tabler icons-tabler-outline icon-tabler-arrow-narrow-left text-text-light-secondary">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M5 12l14 0" />
                    <path d="M5 12l4 4" />
                    <path d="M5 12l4 -4" />
                    </svg>
                    Anterior
                </button>


                {/* PAGINACIÓN CON REACT - Renderiza dinámicamente los números de página */}
                <div className="hidden sm:flex items-center gap-1">  {/* hidden sm:flex: oculto en móvil, visible en pantallas pequeñas */}

                    {/* .map() itera sobre el array de páginas y crea un enlace para cada una */}
                    {pages.map(page => (
                        <a 
                            key={page}  //* key: necesario en React para identificar cada elemento en la lista */}
                            href="#"    //* href: placeholder (generalmente se reemplaza con navegación real) */}
                            //* Clases condicionales: si es la página actual, muestra con fondo azul */}
                            className={currentPage === page 
                                ? 'flex items-center justify-center w-9 h-9 rounded-lg text-sm font-medium text-white bg-primary' 
                                : 'flex items-center justify-center w-9 h-9 rounded-lg text-sm font-medium text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors'
                            }
                            onClick={(event) => handleChangePage(event, page)}
                        >
                            {page}  {/* Muestra el número de página (1, 2, 3, etc.) */}
                        </a>
                    ))}
                </div>


                {/* BOTÓN "SIGUIENTE" - Navega a la siguiente página */}
                <button
                    onClick={handleNextClick} 
                    id="btnSiguiente" 
                    style={styleNextButton}  //* Aplica estilos dinámicos (opacidad y cursor) */}
                    className="flex items-center text-sm font-medium gap-2 px-4 h-9 text-text-light-secondary bg-content-light border border-border-light rounded-lg hover:bg-primary/10 transition-colorsg">
                    
                    Siguiente
                    
                    {/* SVG: Icono de flecha hacia la derecha */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                    className="icon icon-tabler icons-tabler-outline icon-tabler-arrow-narrow-right text-text-light-secondary">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M5 12l14 0" />
                    <path d="M15 16l4 -4" />
                    <path d="M15 8l4 4" />
                    </svg>
                </button>
            </div>
        </div>
    );
}
