import  Header  from "../components/Header";
import  Footer  from "../components/Footer";
import jobsData from "../data/jobs.json";
import { useRouter } from "../hooks/useRouter";
import { JobsContainer } from "../components/JobsContainer";
import { NotFoundPage } from "./404";


export function JobDetail() {
    
    
    const {currentPath} = useRouter()
    console.log(currentPath)
    const parts = currentPath.split('/')
    const idStr = parts[parts.length - 1]
    const id = Number(idStr)
    
    if (!Number.isInteger(id) || id <= 0){
        return NotFoundPage
    }
    
    const job = jobsData.find(item => item.id === id)
    // const { titulo, empresa, ubicacion, modalidad,  tecnologias, sueldo, tipo_contrato, logo_empresa, experience_level} = 
    
    if(!job) {
        return NotFoundPage
    }


    return (
        <>
             {/* Header component */}
            <Header />

            <main className="bg-background-light min-h-screen p-4">
                
                {/* Card Section */}
                <section className="bg-content-light">
                    <img src={job.logo_empresa} alt={job.empresa} />
                    <h2>{job.titulo}</h2>
                    <p>{job.ubicacion} | {job.modalidad}</p>
                    <div>
                        <span>{job.tecnologias}</span>
                    </div>
                </section>

                <section>
                    <div>
                        <h2>SALARY</h2>
                        <p>{job.sueldo}</p>

                    </div>
                    <div>
                        <h2>CONTRACT</h2>
                        <p>{job.tipo_contrato}</p>
                    </div>
                </section>

                <div>
                    <h2>NIVEL DE EXPERIENCIA</h2>
                    <p>{job.experience_level}</p>
                </div>

            </main>



            {/* Footer component */}
            <Footer />
        </>
    )
}