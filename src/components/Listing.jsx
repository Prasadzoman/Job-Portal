import React from 'react';
import jobs from '../assets/jobs';
import Job from './Job';

const Listing = () => {
  return (
    <div className="listing-container">
      {/* Job listings */}
      <div className="job-listings">
        {jobs.map((job) => (
          <Job
            key={job.id}
            id={job.id}
            name={job.companyName}
            image={job.image}
            salary={job.salary}
            role={job.role}
            location={job.location}
          />
        ))}
      </div>
    </div>
  );
};

export default Listing;
