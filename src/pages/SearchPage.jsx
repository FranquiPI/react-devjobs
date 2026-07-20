import { Filters } from "../components/Filters.jsx";
// import { JobListing } from "../components/JobListing.jsx";
import { Pagination } from "../components/Pagination.jsx";
import { JobsContainer } from "../components/JobsContainer.jsx";
import { useEffect, useState } from "react";

const RESULT_PER_PAGE = 4;

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
    // Función asíncrona dentro del efecto
    async function fetchJobs(){
      try {
        // 1. Indicar que estamos cargando
        setLoading(true)

        // 2. Hacer la petición
        const response = await fetch('https://jscamp-api.vercel.app/api/jobs')
        const json = await response.json()

        console.log(json)
        console.log(json.data[0])

        //3. Guardar los datos
        setJobs(json.data)
        setTotal(json.total)
      } catch(error){
        // 4. Manejar errores
        console.error('Error al cargar empleos:', error)
      } finally {
        // 5. Indicar que terminamos de cargar
        setLoading(false)
      }
    }

    //Llamamos a la función
    fetchJobs()
  }, []) // Dependencias vacías = solo al montar

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
    const totalPages = Math.ceil(jobs / RESULT_PER_PAGE);

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

    // Use effect para cambiar el titulo del documento
    useEffect(() => {
            if (total === ''){
                document.title = `DevJobs - Página${currentPage}`
            } else {
                document.title = `Resultados: ${total} - Pagina ${currentPage} - DevJobs`;
            }
    }, [total, currentPage]);


  // 5. Render
  return (
    <>
      <main className="flex flex-col px-4 sm:px-8 md:px-16 lg:px-24 xl:px-40 py-8 gap-6">
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
            {
              loading ? <p>Cargando empleos...</p> : <JobsContainer jobs={jobs} />
            }
            {/* <JobListing
              total={total}
              // `visibleCount={pagedResult.length}
              // totalCount={jobsWithTextFilter.length}
              // totalPages={totalPages}`
            /> */}
            <JobsContainer jobs={jobs} total={total} />
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
