import React from 'react';
import { useAppliedJobs } from '../Contexts/AppliedJobsContext';  // Import the hook to access applied jobs
import Job from '../Job';  // Import the Job component

const AppliedJobs = () => {
  const { appliedJobs } = useAppliedJobs();  // Access applied jobs from context

  return (
    <div className="listing-container">
      <h2>Applied Jobs</h2>
      <div className="job-listings">
        {appliedJobs.length > 0 ? (
          appliedJobs.map((job, index) => (
            <Job
              key={index}
              name={job.companyName}
              image={job.image}
              salary={job.salary}
              role={job.role}
              location={job.location}
            />
          ))
        ) : (
          <p>No jobs applied yet!</p> 
        )}
      </div>
    </div>
  );
};

export default AppliedJobs;
