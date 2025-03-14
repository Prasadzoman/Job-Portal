import React from 'react';
import { useParams } from 'react-router-dom';
import { useAppliedJobs } from './Contexts/AppliedJobsContext';  // Correct path to your context
import jobs from '../assets/jobs';  // Ensure path is correct
import './Show.css'; // Link to regular CSS file

const Show = () => {
  const { id } = useParams();
  const job = jobs.find((job) => job.id === parseInt(id));

  const { applyJob } = useAppliedJobs(); // Access applyJob function from context

  const handleApplyJob = () => {
    applyJob(job); // Apply the job when the button is clicked
    alert(`You have applied to the ${job.companyName} job!`);
  };

  return (
    <div className="show-container">
      {job ? (
        <div className="show-job-details">
          <div className="show-job-image">
            <img src={job.image} alt={job.companyName} />
          </div>
          <div className="show-job-info">
            <h2>{job.companyName}</h2>
            <p><strong>Role:</strong> {job.role}</p>
            <p><strong>Location:</strong> {job.location}</p>
            <p><strong>Salary:</strong> {job.salary}</p>
          </div>
          <button className="show-apply-btn" onClick={handleApplyJob}>
            Apply Now
          </button>
        </div>
      ) : (
        <p>Job not found!</p>
      )}
    </div>
  );
};

export default Show;
