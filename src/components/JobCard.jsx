export function JobCard({ job }) {

    const { titulo: title, empresa: company, ubicacion: location, sueldo: salary, logo_empresa: logo, modalidad: modality, tecnologias: technology, publicado: publicado} = job
    return (
        <>
            {/* <!--Card 1--> */}
            <article className='job-card flex flex-col sm:flex-row items-start gap-4 p-4 rounded-xl border border-border-light bg-white hover:border-primary transition-colors cursor-pointer'>
                <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-lg size-12" data-alt={{company}} style={{ backgroundImage: `url(${logo})` }}></div>
                
                <header className="flex-1">
                    <h3 className="font-bold text-lg text-text-light-primary">{title}</h3>
                    <p className="text-sm text-text-light-secondary">{company}</p>
                    <p className="text-sm text-text-light-secondary mt-1">{location} | {modality}</p>

                    <div className="flex flex-wrap items-center gap-2 mt-3">
                        {technology.map((tech, index) => (
    <span key={index} className="text-xs font-medium text-primary bg-primary/20 px-2 py-1 rounded">{tech}</span>
))}     
                    </div>
                </header>

                <div className="sm:text-right mt-2 sm:mt-0">
                    <p className="text-sm font-semibold text-text-light-primary">{salary}</p>
                    <p className="text-xs text-text-light-secondary">{publicado}</p>
                </div>
            </article>
        </>
    )
}