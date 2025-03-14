import React, { createContext, useState, useContext } from 'react';

const AppliedJobsContext = createContext();

export const useAppliedJobs = () => {
  return useContext(AppliedJobsContext);
};

export const AppliedJobsProvider = ({ children }) => {
  const [appliedJobs, setAppliedJobs] = useState([]);

  const applyJob = (job) => {
    setAppliedJobs((prevJobs) => [...prevJobs, job]);
  };

  return (
    <AppliedJobsContext.Provider value={{ appliedJobs, applyJob }}>
      {children}
    </AppliedJobsContext.Provider>
  );
};
