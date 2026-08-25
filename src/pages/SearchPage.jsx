import { Filters } from "../components/Filters.jsx";
// import { JobListing } from "../components/JobListing.jsx";
import { Pagination } from "../components/Pagination.jsx";
import { JobsContainer } from "../components/JobsContainer.jsx";
import { useEffect, useState } from "react";
import Spinner from "../components/Spinner.jsx";

const RESULT_PER_PAGE = 4;
const LOADING_DELAY = 3000;

function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function useFilters() {
    // 1. Estados
    const [filters, setFilters] = useState({
        technology: "",
        location: "",
        contract: "",
    });

    const [textToFilter, setTextToFilter] = useState("");
    const [currentPage, setCurrentPage] = useState(1);

    // Estado para los empleos (inicialmente vacío)
  // jobs -> Array con los empleos, inicialmente vacío, se llena cuando la API responde
  const [jobs, setJobs] = useState([])

  // Estado para indicar que estamos cargando
  // loading -> Booleano para estado de carga
  // true mientras esperamos la respuesta, false cuando ya tenemos los datos, mejora la UX mostrando un indicador de carga
  const [loading, setLoading] = useState(true)

  // Estado para el total de resultados
  // total -> número total de resultados
  // necesario para la paginación
  // Permite calcular cuántas páginas hay
  const [total, setTotal] = useState(0)

  useEffect(() => {
    let ignore = false;

    // Función asíncrona dentro del efecto
    async function fetchJobs(){
      try {
        // 1. Indicar que estamos cargando
        setLoading(true)

        const params = new URLSearchParams()
        if (textToFilter) params.append('text', textToFilter)
        if (filters.technology) params.append('technology', filters.technology)
        if (filters.location) params.append('types', filters.location)
        if (filters.experienceLevel) params.append('experienceLevel', filters.experienceLevel)
        
        const offset = (currentPage - 1) * RESULT_PER_PAGE
        params.append('limit', RESULT_PER_PAGE)
        params.append('offset', offset)
        
        const queryParams = params.toString()

        // 2. Hacer la petición
        const response = await fetch(`https://jscamp-api.vercel.app/api/jobs?${queryParams}`)
        const json = await response.json()


        //3. Guardar los datos
        if (!ignore) {
          setJobs(json.data)
          setTotal(json.total)
        }
      } catch(error){
        // 4. Manejar errores
        console.error('Error al cargar empleos:', error)
      } finally {
        await wait(LOADING_DELAY)

        // 5. Indicar que terminamos de cargar
        if (!ignore) {
          setLoading(false)
        }
      }
    }

    //Llamamos a la función
    fetchJobs()

    return () => {
      ignore = true;
    }
  }, [filters, textToFilter, currentPage])

    // 2. Handlers
    const handleSearch = (newFilters) => {
        console.log("Filtros recibidos: ", newFilters);
        setFilters({
            technology: newFilters.technology || "",
            location: newFilters.location || "",
            contract: newFilters.contract || "",
        });
        setCurrentPage(1);
    };

    const handleTextFilter = (text) => {
        setTextToFilter(text);
    };

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    // // 3. Filtrado por cascada
    // /* paso 1. Filtramos por los select*/
    // const jobsFilterByFilters = jobs.filter((job) => {
    //     return (
    //         (filters.technology === "" ||
    //             job.tecnologias.includes(filters.technology)) &&
    //         (filters.location === "" || job.ubicacion === filters.location) &&
    //         (filters.contract === "" || job.tipo_contrato === filters.contract)
    //     );
    // });

    // /* paso 2. Filtramos por titulo en el input search */
    // const jobsWithTextFilter =
    //     textToFilter === ""
    //         ? jobsFilterByFilters
    //         : jobsFilterByFilters.filter((job) => {
    //             return job.titulo?.toLowerCase().includes(textToFilter.toLowerCase());
    //         });

    // 4. Paginación
    /* Y luego renderizamos el pagination */
    const totalPages = Math.ceil(total / RESULT_PER_PAGE);

    // const pagedResult = jobsWithTextFilter.slice(
    //     (currentPage - 1) * RESULT_PER_PAGE,
    //     currentPage * RESULT_PER_PAGE,
    // );


    return{
        filters,
        handleSearch,
        handleTextFilter,
        handlePageChange,
        totalPages,
        currentPage,
        jobs,
        total,
        textToFilter,
        loading
    }
}


export function SearchPage() {

  const {
    handleSearch, 
    handleTextFilter, 
    handlePageChange,
    totalPages, 
    currentPage, 
    jobs,
    loading,
    total } 
    = useFilters()


    const title = loading
      ? `Cargando... - DevJobs - Página${currentPage}`
      :  `Resultados: ${total} - Pagina ${currentPage} - DevJobs`


    // 5. Render
  return (
    <>
      <main className="flex flex-col px-4 sm:px-8 md:px-16 lg:px-24 xl:px-40 py-8 gap-6">
        <title>{title}</title>
        <header className="flex flex-col gap-2">
          <h1 className="text-4xl md:text-5xl font-black leading-tight tracking-tight text-text-light-primary">
            Ofertas de Empleo para Developers
          </h1>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <aside className="md:col-span-3">
            <Filters onSearch={handleSearch} onTextFilter={handleTextFilter} />
          </aside>

          <section className="md:col-span-9 flex flex-col">
            {loading ? (
              <Spinner />
            ) : jobs.length === 0 ? (
              <p className="p-3.5 text-sm text-white font-bold bg-red-700 rounded-lg text-balance text-center">
                No se han encontrado empleos que coincidan con los criterios de busqueda
              </p>
            ) : (
              <JobsContainer jobs={jobs} />
            )}
            {/* <JobListing
              total={total}
              // `visibleCount={pagedResult.length}
              // totalCount={jobsWithTextFilter.length}
              // totalPages={totalPages}`
            /> */}
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          </section>
        </div>
      </main>
    </>
  );
}
