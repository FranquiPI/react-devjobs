import { useId, useState } from "react"

// Custom Hook para encapsular la lógica del formulario
const useSearchForm = ({ onSearch, onTextFilter }) => {
    
    // const [searchText, setSearchText] = useState('')
    // Este estado: guarda el texto introducido por el usuario, se actualiza en handleChange, sera devuelto al componente para mostrarlo en el input

    /* Search input useId */
    const textId = useId()

    /* Location input useId */
    const locationId = useId()

    /* Tecnología checkboxes baseId */
    const technologyBaseId = useId()

    /* Contrato checkboxes baseId */
    const contractBaseId = useId()

    /* Tecnologías disponibles */
    const technologies = ['Python', 'Go', 'React', 'JavaScript', 'AWS']

    /* Tipos de contrato disponibles */
    const contractTypes = ['Full-time', 'Part-time', 'Freelance']
    
    const [selectedTech, setSelectedTech] = useState('')
    const [selectedContract, setSelectedContract] = useState('')
    const [location, setLocation] = useState('')
    
    const applyFilters = () => {
        const filters = { 
            technology: selectedTech,
            location: location,
            contract: selectedContract
        }
        console.log('Filtros aplicados:', filters)
        onSearch(filters)
    }
    
    //MANAEJADORES

    const handleTechnologyChange = (tech) => {
        setSelectedTech(selectedTech === tech ? '' : tech)
    }
    
    const handleContractChange = (contract) => {
        setSelectedContract(selectedContract === contract ? '' : contract)
    }
    
    const handleLocationChange = (e) => {
        setLocation(e.target.value)
    }

    const handleTextChange = (event) => {
        const text = event.target.value
        onTextFilter(text)
    }
    
    const handleClearFilters = () => {
        setSelectedTech('')
        setSelectedContract('')
        setLocation('')
        onSearch({ technology: '', location: '', contract: '' })
    }

    // RETORNA TODO LO QUE NECESITA EL COMPONENTE
    return {
        // IDs
        textId,
        locationId,
        technologyBaseId,
        contractBaseId,
        // Estado
        selectedTech,
        selectedContract,
        location,
        // Datos
        technologies,
        contractTypes,
        // Handlers
        handleTechnologyChange,
        handleContractChange,
        handleLocationChange,
        handleTextChange,
        handleClearFilters,
        applyFilters
    }

}


export function Filters({ onSearch, onTextFilter }) {

    const {
        textId, 
        locationId, 
        technologyBaseId, 
        contractBaseId,
        selectedTech,
        selectedContract,
        location,
        technologies,
        contractTypes,
        handleTechnologyChange,
        handleContractChange,
        handleLocationChange,
        handleTextChange,
        handleClearFilters,
        applyFilters
    } = useSearchForm({ onSearch, onTextFilter })

    return (
        <>
            {/* <!-- Left Column: Filters--> */}
            <div className="md:col-span-4 lg:col-span-3">
                <div className="p-4 rounded-xl border border-border-light bg-content-light">
                    <h2 className="text-text-light-primary text-lg font-bold leading-tight tracking-tight">
                        Filtrar ofertas
                    </h2>

                    {/* <!-- SearchBar --> */}
                    <label
                        htmlFor={textId}
                        className="flex flex-col mt-4 min-w-40 h-12 w-full max-w-2xl"
                    >
                        <div className="flex w-full flex-1 items-stretch rounded-lg h-full">
                            <div className="flex text-text-light-secondary bg-background-light items-center justify-center pl-3.5 rounded-l-lg border-r-0">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="icon icon-tabler icons-tabler-outline icon-tabler-search"
                                >
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
                                    <path d="M21 21l-6 -6" />
                                </svg>
                            </div>
                            {/* SEARCH INPUT */}
                            <input
                                type="search"
                                id={textId}
                                className=" flex w-full min-w-0 flex-1 overflow-hidden rounded-lg text-text-light-primary focus:outline-0 focus:ring-0 border-none bg-background-light focus:border-none h-full placeholder:text-text-light-secondary/80 px-4 rounded-r-none border-r-0 pr-2 rounded-l-none border-l-0 pl-2 text-sm font-normal leading-normal"
                                placeholder="Buscar por puesto, empresa..."
                                onChange={handleTextChange}
                            />
                        </div>
                    </label>

                    {/* <!--Accordions--> */}
                    <div className="flex flex-col mt-4 border-t border-border-light">
                        <details className="details flex flex-col tems-center py-2 w-full group">
                            <summary className="flex cursor-pointer items-center justify-between gap-6 py-2 list-none0">
                                <p className="text-sm font-medium leading-normal">
                                    Tecnología
                                </p>

                                <div className="flex size-6 text-text-light-secondary">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-up"
                                    >
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <path d="M6 15l6 -6l6 6" />
                                    </svg>

                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-down text-text-light-secondary flex-none"
                                    >
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <path d="M6 9l6 6l6 -6" />
                                    </svg>
                                </div>
                            </summary>
                            {/* <!-- Filtro Tecnología */}
                            <div className="flex flex-col gap-2 pt-2">
                                {technologies.map((tech) => {
                                    const itemId = `${technologyBaseId}-${tech.toLowerCase()}`
                                    return (
                                        <label
                                            key={tech}
                                            htmlFor={itemId}
                                            className="flex items-center gap-2 text-sm text-text-light-secondary"
                                        >
                                            <input
                                                id={itemId}
                                                type="checkbox"
                                                checked={selectedTech === tech}
                                                onChange={() => handleTechnologyChange(tech)}
                                                className="filter-checkbox rounded-sm text-primary focus:ring-primary/50 border-border-light"
                                            />
                                            {tech}
                                        </label>
                                    )
                                })}
                            </div>
                        </details>

                        {/* Filtro de UBICACIÓN */}
                        <label htmlFor={locationId}>

                        <details className="details flex flex-col border-t border-border-light py-2 group">
                            <summary className="flex cursor-pointer items-center justify-between gap-6 py-2 list-none">
                                <p className="text-text-light-primary text-sm font-medium leading-normal">
                                    Ubicación
                                </p>

                                <div className="flex size-6 text-text-light-secondary">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-up"
                                    >
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <path d="M6 15l6 -6l6 6" />
                                    </svg>

                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-down text-text-light-secondary flex-none"
                                    >
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <path d="M6 9l6 6l6 -6" />
                                    </svg>
                                </div>
                            </summary>
                            <div className="pt-2">
                                <label htmlFor={locationId} className="sr-only">Filtrar por ciudad o país</label>
                                <input
                                    id={locationId}
                                    value={location}
                                    onChange={handleLocationChange}
                                    className="htmlForm-input w-full rounded-lg text-text-light-primary focus:outline-0 focus:ring-2 focus:ring-primary focus:ring-inset border border-border-light bg-transparent h-10 placeholder:text-gray-400 dark:placeholder:text-gray-500 px-3 text-sm"
                                    placeholder="Ciudad o país..."
                                />
                            </div>
                        </details>
                        </label>

                        {/*  Filtro de Tipo de contrato */}
                        <details className="details flex flex-col border-t border-border-light py-2 group">
                            <summary className="flex cursor-pointer items-center justify-between gap-6 py-2 list-none">
                                <p className="text-text-light-primary text-sm font-medium leading-normal">
                                    Tipo de Contrato
                                </p>

                                <div className="flex size-6 text-text-light-secondary">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-up"
                                    >
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <path d="M6 15l6 -6l6 6" />
                                    </svg>

                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-down text-text-light-secondary flex-none"
                                    >
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <path d="M6 9l6 6l6 -6" />
                                    </svg>
                                </div>
                            </summary>

                            <div className="flex flex-col gap-2 pt-2">
                                {contractTypes.map((contract) => {
                                    const itemId = `${contractBaseId}-${contract.toLowerCase()}`
                                    return (
                                        <label
                                            key={contract}
                                            htmlFor={itemId}
                                            className="flex items-center gap-2 text-sm text-text-light-secondary"
                                        >
                                            <input
                                                id={itemId}
                                                className="filter-checkbox htmlForm-checkbox rounded-sm text-primary focus:ring-primary/50 border-gray-300 dark:border-gray-600 dark:bg-gray-800"
                                                type="checkbox"
                                                checked={selectedContract === contract}
                                                onChange={() => handleContractChange(contract)}
                                            />
                                            {contract}
                                        </label>
                                    )
                                })}
                            </div>
                        </details>
                    </div>

                    <button
                        type="button"
                        onClick={applyFilters}
                        id="filter-btn"
                        className="w-full mt-4 flex items-center justify-center rounded-lg h-10 bg-primary text-white text-sm font-bold hover:bg-primary/70 transition-colors"
                    >
                        <span className="truncate">Aplicar Filtros</span>
                    </button>
                    
                    <button
                        type="button"
                        onClick={handleClearFilters}
                        id="clear-filter-btn"
                        className="w-full mt-2 flex items-center justify-center rounded-lg h-10 bg-gray-300 text-gray-800 text-sm font-bold hover:bg-gray-400 transition-colors"
                    >
                        <span className="truncate">Limpiar Filtros</span>
                    </button>
                </div>
            </div>
        </>
    )
}
