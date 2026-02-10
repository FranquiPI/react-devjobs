import { Filters } from "./Filters.jsx";
import { JobListing } from "./JobListing.jsx";
import { Pagination } from "./Pagination.jsx";
import { useState } from "react";
import { JobsContainer } from "./JobsContainer.jsx";
import jobsData from "../data/jobs.json";

const RESULT_PER_PAGE = 4;

export function MainContent() {
  // 1. Estados
  const [filters, setFilters] = useState({
    technology: "",
    location: "",
    contract: "",
  });

  const [textToFilter, setTextToFilter] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

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

  // 3. Filtrado por cascada
  /* paso 1. Filtramos por los select*/
  const jobsFilterByFilters = jobsData.filter((job) => {
    return (
      (filters.technology === "" ||
        job.tecnologias.includes(filters.technology)) &&
      (filters.location === "" || job.ubicacion === filters.location) &&
      (filters.contract === "" || job.tipo_contrato === filters.contract)
    );
  });

  /* paso 2. Filtramos por titulo en el input search */
  const jobsWithTextFilter =
    textToFilter === ""
      ? jobsFilterByFilters
      : jobsFilterByFilters.filter((job) => {
          return job.titulo?.toLowerCase().includes(textToFilter.toLowerCase());
        });

  // 4. Paginación
  /* Y luego renderizamos el pagination */
  const totalPages = Math.ceil(jobsWithTextFilter.length / RESULT_PER_PAGE);

  const pagedResult = jobsWithTextFilter.slice(
    (currentPage - 1) * RESULT_PER_PAGE,
    currentPage * RESULT_PER_PAGE,
  );

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
            <JobListing
              visibleCount={pagedResult.length}
              totalCount={jobsWithTextFilter.length}
              totalPages={totalPages}
            />
            <JobsContainer jobs={pagedResult} />
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
