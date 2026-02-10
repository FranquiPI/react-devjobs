import jobsData from '../data/jobs.json'

export function JobListing({ visibleCount, totalCount }) {
    const total = totalCount ?? jobsData.length
    const visible = visibleCount ?? jobsData.length

    return (
        <>
            {/* Right Column: Job Listing */}
            <div className="md:col-span-8 lg:col-span-9">
                {/* <!--Results Summary--> */}
                <div className="mb-4">
                    <p className="text-sm text-text-light-secondary">
                        Mostrando{" "} 
                        <span id="visible-jobs" className="font-bold text-text-light-primary">{visible}</span>{" "}
                        de{" "}
                        <span id="total-jobs" className="font-bold text-text-light-primary">{total}</span>{" "}
                        ofertas
                    </p>
                </div>
            </div>
        </>
    )
}