import { JobCard } from "./JobCard.jsx";

export function JobsContainer({ jobs }) {
  return (
    <>
        <div className="flex flex-col gap-4">
          {jobs.map((job) => (
            <JobCard key={job.id} job={job}/>
          ))}
        </div>
      
    </>
  );
}
